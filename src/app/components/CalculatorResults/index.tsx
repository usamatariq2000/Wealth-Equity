"use client";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import SmallPyramid from "./components/small-pyramid";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import BarChart from "../BarChart";
import api from "@/app/services/api";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
declare var html2pdf: any; // Declare html2pdf to avoid TypeScript errors
import ReactToPdf from "react-to-pdf";
import { useDisclosure } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button, Image } from "@nextui-org/react";

interface Child {
  name: string;
  amount: number;
}

const CalculatorResults = () => {
  const router = useRouter();
  const [sliderValue, setSliderValue] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [result, setResult] = useState<any>([]);
  const [annualIncome, setAnnualIncome] = useState();
  const [percentToProvide, setPercentToProvide] = useState();
  const [yearsToProvide, setYearsToProvide] = useState();
  const [eliminateDebt, setEliminateDebt] = useState();
  const [childcare, setChildcare] = useState();
  const [extendedHealthcare, setExtendedHealthcare] = useState();
  const [emergencyFund, setEmergencyFund] = useState();
  const [children, setChildren] = useState<any>();
  const [finalExpense, setFinalExpense] = useState();
  const [password, setPassword] = useState<any>("null");
  const [openModal, setOpenModal] = useState(false);
  const [accountPassword, setAccountPassword] = useState("");
  const [confirmAccountPass, setConfirmAccountPass] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const pdfRef = useRef<HTMLDivElement>(null);

  interface WelcomeBack {
    description: string;
    icon: string;
  }

  const welcomeBack: WelcomeBack[] = [
    {
      description: "Review your Personal Wealth Potential calculation",
      icon: "/images/Icon.svg",
    },
    {
      description: "Explore life insurance quotes",
      icon: "/images/Icon (1).svg",
    },
    {
      description: "Speak with an agent or schedule a free consultation",
      icon: "/images/Icon (2).svg",
    },
  ];

  console.log(children);

  useEffect(() => {
    if (result && result[0]) {
      setAnnualIncome(result[0].annualIncome || "");
      setPercentToProvide(result[0]?.percentToProvide || "");
      setYearsToProvide(result[0]?.yearsToProvide || "");
      setEliminateDebt(result[0]?.eliminateDebt || "");
      setChildcare(result[0]?.childcare || "");
      setExtendedHealthcare(result[0]?.extendedHealthcare || "");
      setEmergencyFund(result[0]?.emergencyFund || "");
      setChildren(result[0]?.children || "");
      setFinalExpense(result[0]?.finalExpense || "");
    }
  }, [result]);

  useEffect(() => {
    const pass: any = localStorage.getItem("password");
    setPassword(pass);
  }, []);

  console.log("Password", password);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js";
    script.async = true;
    script.onload = () => {
      console.log("html2pdf script loaded successfully");
    };
    document.body.appendChild(script);
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setAnimate(true);
      const interval = setInterval(() => {
        setSliderValue((prev) => (prev < 15 ? prev + 1 : 15));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [inView]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await api.get("/calculate/results");
        setResult(response.data.results);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };

    fetchResults();
  }, []);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!accountPassword) {
      newErrors.password = "Password is required";
    }

    if (accountPassword !== confirmAccountPass) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const items: any[] = [
    {
      id: 1,
      icon: "/images/Vector.svg",
      label: "Income Replacement",
      amount: `$${(
        Number(annualIncome) *
        Number(percentToProvide) *
        Number(yearsToProvide)
      ).toLocaleString()}`,
      fields: [
        {
          name: "Annual Income",
          value: annualIncome,
          setValue: setAnnualIncome,
        },
        {
          name: "Percent to provide",
          value: percentToProvide,
          setValue: setPercentToProvide,
        },
        {
          name: "Years to provide",
          value: yearsToProvide,
          setValue: setYearsToProvide,
        },
        // Add more field objects as needed
      ],
    },
    {
      id: 2,
      icon: "/images/Vector (1).svg",
      label: "Debt Elimination",
      amount: `$${Number(eliminateDebt)?.toLocaleString()}`,
      fields: [
        {
          name: "Eliminate Debt",
          value: eliminateDebt,
          setValue: setEliminateDebt,
        },
      ],
    },
    {
      id: 3,
      icon: "/images/Vector (2).svg",
      label: "Childcare",
      amount: `$${Number(childcare)?.toLocaleString()}`,
      fields: [
        {
          name: "Childcare",
          value: childcare,
          setValue: setChildcare,
        },
      ],
    },
    {
      id: 4,
      icon: "/images/Vector (3).svg",
      label: "Extended Healthcare",
      amount: `$${Number(extendedHealthcare)?.toLocaleString()}`,
      fields: [
        {
          name: "Extended Health Care",
          value: extendedHealthcare,
          setValue: setExtendedHealthcare,
        },
      ],
    },
    {
      id: 5,
      icon: "/images/Vector (4).svg",
      label: "Education Fund",
      amount: `$${children
        ?.reduce((sum: any, child: any) => sum + Number(child.amount), 0)
        ?.toLocaleString()}`,
      fields: [
        {
          name: "Children",
          value: children,
          setValue: setChildren,
        },
      ],
    },
    {
      id: 6,
      icon: "/images/Vector (5).svg",
      label: "Emergency Fund",
      amount: `$${Number(emergencyFund)?.toLocaleString()}`,
      fields: [
        {
          name: "Emergency Fund",
          value: emergencyFund,
          setValue: setEmergencyFund,
        },
      ],
    },
    {
      id: 7,
      icon: "/images/Vector (7).svg",
      label: "Final Expenses",
      amount: `$${Number(finalExpense)?.toLocaleString()}`,
      fields: [
        {
          name: "Final Expense",
          value: finalExpense,
          setValue: setFinalExpense,
        },
      ],
    },
  ];

  const handleButtonClick = () => {
    window.open("https://www.quotacy.com/advisor/wealthandequity", "_blank");
  };

  const totalSum = items.reduce((total, item) => {
    // Extract numerical values from the amount strings
    const amountValue = Number(item?.amount.replace(/[^0-9.-]+/g, "")); // Remove non-numeric characters
    return total + amountValue;
  }, 0);

  // Subtract from lifeInsurance
  const lifeInsurance =
    Number(result[0]?.lifeInsurance?.replace(/[^0-9.-]+/g, "")) || 0;
  const finalAmount = totalSum - lifeInsurance;

  // Format the total sum for display
  const formatNumber = (num: any) => {
    if (num >= 1_000_000) {
      return `$${(num / 1_000_000).toFixed(2)}M`;
    } else {
      return `$${num.toLocaleString()}`;
    }
  };
  const formatInsuranceAndSum = (num: any) => {
    if (num >= 1_000_000) {
      return `$${(num / 1_000_000).toFixed(1)}m`;
    } else if (num >= 1_000) {
      return `$${(num / 1_000).toFixed(0)}k`;
    } else {
      return `$${num.toLocaleString()}`;
    }
  };

  const [openItemId, setOpenItemId] = useState(null);

  const handleToggle = (id: any) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  const handleFieldChange = (
    itemId: number,
    index: number,
    key: keyof Child,
    value: string
  ) => {
    const item = items.find((item) => item.id === itemId);
    if (item && Array.isArray(item.fields[0].value)) {
      const updatedChildren = [...item.fields[0].value];
      updatedChildren[index] = {
        ...updatedChildren[index],
        [key]: key === "amount" ? value : value,
      };
      item.fields[0].setValue(updatedChildren);
    }
  };

  const formattedTotal = formatNumber(finalAmount);
  const formattedLifeInsurance = formatInsuranceAndSum(lifeInsurance);
  const formattedSum = formatInsuranceAndSum(totalSum);

  const updateUserPassword = async (password: string): Promise<any> => {
    try {
      const response = await api.put<any>("/api/update-password", {
        password,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating password:", error);
      throw error; // Handle or rethrow the error as needed
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const response = await api.put<any>("/user/updatePassword", {
          password: accountPassword,
        });

        if (response.status === 201) {
          const { user } = response.data;
          if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            window.location.reload();
          }
        } else {
          console.error("Registration failed:", response.data.error);
        }
      } catch (error: any) {
        if (error.response) {
          console.error(
            "Server Error:",
            error.response.data.error ||
              "An error occurred during registration."
          );
        } else {
          console.error(
            "Error:",
            error.message || "An unexpected error occurred."
          );
        }
      }
    }
  };

  // Example usage
  const handleUpdatePassword = async () => {
    const newPassword = "newPassword123"; // Replace with actual password input
    try {
      const updatedUser = await updateUserPassword(newPassword);
      console.log("Password updated successfully:", updatedUser);
      // Handle the updated user response as needed
    } catch (error) {
      console.error("Failed to update password:", error);
      // Handle the error as needed
    }
  };

  const captureAndGeneratePDF = async (): Promise<void> => {
    if (password !== "null" && password !== null) {
      try {
        // Capture the entire page
        const canvas = await html2canvas(document.body, {
          scrollY: -window.scrollY, // Capture content above the viewport
          useCORS: true, // Use CORS to handle cross-origin images
        });

        // Get image data from the canvas
        const imgData = canvas.toDataURL("image/png");

        // Create a new jsPDF instance
        const pdf = new jsPDF("p", "mm", "a4");

        // Define PDF dimensions and image size
        const imgWidth = 210; // A4 page width in mm
        const pageHeight = 295; // A4 page height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        // Add the first page
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Add additional pages if necessary
        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        // Save the PDF or send it as needed
        pdf.save("download.pdf"); // Download the PDF locally

        // If you need to send the PDF as an email attachment:
        const pdfData = pdf.output("blob");
        const reader = new FileReader();
        reader.readAsDataURL(pdfData);
        reader.onloadend = async () => {
          const base64data = reader.result as string;
          await sendEmail(base64data); // Function to send email with PDF attachment
        };
      } catch (error) {
        console.error("Error capturing and generating PDF:", error);
      }
    } else {
      onOpen();
    }
  };

  const sendEmail = async (pdfBase64: string): Promise<void> => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "jasimimran725@gmail.com",
          subject: "Test Email with PDF Attachment",
          text: "Please find the attached PDF.",
          pdfBase64,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  //   import html2canvas from 'html2canvas';
  // import { jsPDF } from 'jspdf';

  const downloadPdf = (): void => {
    const input = pdfRef.current;

    if (!input) {
      console.error("The pdfRef is not assigned to any element.");
      return;
    }

    // Use html2canvas to capture the full content of the entire page
    html2canvas(input, {
      scale: 1, // Adjust scale for quality
      scrollX: 0,
      scrollY: 0,
      windowWidth: document.documentElement.scrollWidth, // Capture the full width of the page
      windowHeight: document.documentElement.scrollHeight, // Capture the full height of the page
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        // Calculate the number of pages
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save("report.pdf");
      })
      .catch((error) => {
        console.error("An error occurred while generating the PDF:", error);
      });
  };

  console.log(password);

  return (
    <div
      className="grid lg:grid-cols-2 grid-cols-1 h-screen w-full"
      id="capture"
      ref={pdfRef}
    >
      <div className="w-full flex items-start justify-center bg-[#00555A] lg:pt-44 pt-16">
        <div className="w-[80%] flex flex-col gap-2.5 md:gap-4">
          <p className="text-[#F9F1EC] font-jubilee font-normal text-3xl md:text-6xl mb-4">
            {result[0]?.firstName}, here&apos;s your Personal Wealth Potential:
          </p>
          <p className="text-[80px] md:text-[160px] text-[#FCFF7F] font-jubilee leading-none mb-4">
            {formattedTotal}
          </p>
          <p className="text-halyard text-base md:text-xl text-[#F9F1EC]">
            Your life insurance coverage is currently{" "}
            <span className="text-[#FCFF7F]">{formattedLifeInsurance}</span> ,
            which means you’re leaving{" "}
            <span className="text-[#FCFF7F]">
              {formattedSum} of unprotected wealth{" "}
            </span>
            on the table.
          </p>

          <p className="text-halyard text-base md:text-xl mt-5 text-[#F9F1EC]">
            Please note: you should consider purchasing additional coverage
            today in case anything happens to you
          </p>
          <div className="flex gap-4 mt-3">
            <button
              className="bg-[#FCFF7F] md:px-3 md:py-4 p-2 rounded-lg"
              onClick={handleButtonClick}
            >
              <p className="font-halard text-[#00262B] text-base md:text-lg font-medium">
                Explore quotes
              </p>
            </button>
            <button className="bg-transparent px-3 py-4 rounded-lg">
              <p
                className="font-halard text-[#F9F1EC] text-base md:text-lg font-medium transition-colors duration-300 hover:text-[#f9f1ec83]"
                onClick={captureAndGeneratePDF}
              >
                Send email or text
              </p>
            </button>
          </div>
          <div ref={ref} className="w-full py-12">
            <div
              className="flex flex-row items-center"
              style={{ justifyContent: "space-between" }}
            >
              <div>
                <text className="text-[#FCFF7F] text-sm font-halyard uppercase">
                  {" "}
                  You are here
                </text>
              </div>
              <div>
                <text className="text-[white] text-sm font-halyard uppercase">
                  Your Total PwP
                </text>{" "}
              </div>
            </div>
            <div className="relative mt-4 w-full h-6 bg-teal-900 rounded-full overflow-hidden">
              <div
                className="absolute left-3 top-1.5 w-4 h-3  rounded-full transition-all duration-150"
                style={{ width: `${sliderValue}%`, backgroundColor: "#E3E572" }}
              />
              <div
                className="absolute top-0.5 left-0  w-5 h-5 bg-yellow-300 rounded-full transition-all duration-150"
                style={{ left: `${sliderValue}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-start bg-[#F9F1EC] lg:overflow-y-auto scrollbar-hide lg:pt-44 py-16">
        <div className="w-[80%] flex flex-col gap-5">
          {password !== "null" && password !== null && (
            <div className="bg-[#E0D9D4] p-5 rounded-lg mb-2">
              <p className="text-[#00555A] font-jubilee text-[35px] lg:text-[50px]">
                Welcome Back, {result[0]?.firstName}
              </p>
              {welcomeBack.map((welcome, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-left text-md lg:text-md mb-5 font-halyard hover:text-[#092a2c] text-[#00555A]"
                >
                  <Image
                    src={welcome.icon}
                    alt="HeroImg"
                    width={25}
                    height={25}
                  />
                  {welcome.description}
                </div>
              ))}
            </div>
          )}

          <p className="uppercase text-[#00262B] font-halyard-text text-[17px] font-bold">
            Recommended Life Avenue
          </p>
          <div className="flex md:flex-row flex-col bg-[#003336] items-center md:items-start rounded-lg gap-1 p-6">
            <div className="w-[30%] hidden lg:block">
              <SmallPyramid />
            </div>
            <div className="flex flex-col gap-4 lg:w-[70%] text-[#F9F1EC]">
              <p className="md:text-6xl text-4xl font-jubilee  font-normal">
                Protect
              </p>
              <p className="font-halyard-text text-sm md:text-[18px] text-[#F9F1EC] font-medium">
                Build your financial foundations. Cover what you earn, what you
                own, and what you owe to protect those you love the most.
              </p>
            </div>
          </div>
          <p className="uppercase text-[#00262B] font-halyard-text text-[17px] mt-7 font-bold">
            Gap Analysis
          </p>
          <p className="font-halyard-text text-sm md:text-[17px] text-[#00262B] font-medium">
            Based on your selected financial goals and wealth bridge needs,
            let&apos;s see how you stack up—using group comparisons.
          </p>
          <p className="font-bold text-5xl bg-[#FCF8F5] p-4 rounded-lg">
            <BarChart />
          </p>

          <p className="uppercase text-[#00262B] font-halyard-text text-[17px] mt-7 font-bold">
            Your PwP Breakdown
          </p>
          <p className="font-halyard-text text-sm md:text-[17px] text-[#00262B] font-medium">
            You can edit the values you entered below. See how your long-term
            financial roadmap can change based on different adjustments.
          </p>
          <div className="h-auto mt-5">
            {items.map((item) => (
              <div key={item.id} className="relative mb-6">
                <div
                  className="bg-[#FCF8F5] flex rounded-lg p-4 px-5 justify-between items-center cursor-pointer"
                  onClick={() => handleToggle(item.id)}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src="/images/Vector (6).svg"
                      alt="chevron"
                      className={`w-2 transition-transform ${
                        openItemId === item.id ? "rotate-90" : ""
                      }`}
                    />
                    <img src={item.icon} alt="card 1" className="w-7 ml-2" />
                    <p className="text-sm md:text-base text-[#00555A] font-500 font-halyard-text font-bold">
                      {item.label}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-[#00555A]">
                      {item.amount}
                    </p>
                  </div>
                </div>
                {openItemId === item.id && (
                  <div className="absolute bg-[#FCF8F5] z-10 w-full border rounded-xl shadow-lg p-4 mt-2 transition-transform transform scale-100">
                    {Array.isArray(item?.fields[0]?.value)
                      ? item?.fields[0]?.value?.map((field: any, index: any) => (
                          <div key={index} className="mb-4">
                            <label className="block text-sm font-medium text-[#00555A]">
                              {`Child ${index + 1}`}
                            </label>
                            <input
                              type="number"
                              value={field.amount}
                              onChange={(e) =>
                                handleFieldChange(
                                  item.id,
                                  index,
                                  "amount",
                                  e.target.value
                                )
                              }
                              className="border p-2 w-full rounded"
                              placeholder="Amount"
                            />
                          </div>
                        ))
                      : item?.fields?.map((field: any, index: any) => (
                          <div key={index} className="mb-4">
                            <label className="block text-sm font-medium text-[#00555A] mb-1">
                              {field.name}
                            </label>
                            <input
                              type="text"
                              value={field.value}
                              onChange={(e) => field.setValue(e.target.value)}
                              className="border p-2 w-full rounded"
                              placeholder={field.name}
                            />
                          </div>
                        ))}
                    {item.fields[0]?.value?.length === 0 &&
                      Array.isArray(item?.fields[0]?.value) && (
                        <button
                          onClick={() =>
                            handleFieldChange(
                              item.id,
                              item?.fields[0]?.value?.length,
                              "name",
                              ""
                            )
                          }
                          className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                          Add Child
                        </button>
                      )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-[#00555a]"
        size="xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="text-[#fbf2ed] px-10 py-7">
                <ModalBody className="text-[#fbf2ed] px-10 py-7">
                  <div className="flex flex-col items-center gap-10">
                    <Image
                      src="/images/W&E_Icon_WHT.png"
                      alt="Icon"
                      width={90}
                      height={90}
                      className="text-black"
                    />
                    <h2 className="text-center sm:text-4xl lg:text-5xl font-jubilee">
                      Let&apos;s Complete Your Profile First
                    </h2>
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 mt-10"
                  >
                    <div>
                      <label htmlFor="password" className="block text-lg">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={accountPassword}
                        onChange={(e) => setAccountPassword(e.target.value)}
                        className={`mt-1 h-12 block w-full rounded-md border ${
                          errors.password ? "border-red-500" : "border-gray-300"
                        } text-[#103438] bg-[#e0d9d4] focus:bg-[#ffffff] px-3 shadow-sm focus:outline-none focus:ring-[#fdff7f] focus:border-[#fdff7f] sm:text-sm md:text-lg`}
                      />
                      {errors.password && (
                        <p className="text-red-500 text-sm">
                          {errors.password}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="confirm-password"
                        className="block text-lg"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirm-password"
                        placeholder="Re-enter your password"
                        value={confirmAccountPass}
                        onChange={(e) => setConfirmAccountPass(e.target.value)}
                        className={`mt-1 h-12 block w-full rounded-md border ${
                          errors.confirmPassword
                            ? "border-red-500"
                            : "border-gray-300"
                        } text-[#103438] bg-[#e0d9d4] focus:bg-[#ffffff] px-3 shadow-sm focus:outline-none focus:ring-[#fdff7f] focus:border-[#fdff7f] sm:text-sm md:text-lg`}
                      />
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-sm">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                    <div className="mt-8 flex flex-col items-center gap-2">
                      <Button
                        type="submit"
                        className="bg-[#fdff7f] w-[12rem] rounded-lg h-[3.5rem] text-md font-semibold"
                      >
                        Create account
                      </Button>
                      <span className="text-sm">
                        Already have an account?{" "}
                        <button
                          className="text-[#fdff7f] underline"
                          onClick={onClose}
                        >
                          Sign in here
                        </button>
                      </span>
                    </div>
                  </form>
                  <div className="flex justify-between w-full mt-4">
                    <button
                      className="font-light text-sm"
                      onClick={() => {
                        /* Handle request assistance */
                      }}
                    >
                      Request assistance
                    </button>
                    <span className="text-sm">Powered by ALLVUE</span>
                  </div>
                </ModalBody>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CalculatorResults;
