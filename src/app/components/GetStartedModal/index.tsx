import React, { useContext, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  Input
} from "@nextui-org/react";
import Image from "next/image";
import api from "@/app/services/api";
import { useRouter } from "next/navigation";
import AuthContext from "@/app/context/AuthContext";

interface GetStartedModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onOpenChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();
  const {setUser} = useContext(AuthContext);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Email address is not valid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const response = await api.post("/auth/register", {
          email: email,
          password: password,
        });

        if (response.status === 201) {
          const { token, user } = response.data;
          if (token) {
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            window.location.reload();
          }
        } else {
          console.error("Registration failed:", response.data.error);
        }
      } catch (error: any) {
        if (error.response) {
          console.error("Server Error:", error.response.data.error || "An error occurred during registration.");
        } else {
          console.error("Error:", error.message || "An unexpected error occurred.");
        }
      }

    }
  };

  return (
    <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" className="bg-[#00555a]">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="text-[#fbf2ed] px-10 py-7">
              <div className="flex flex-col items-center gap-10">
                <Image src="/images/W&E_Icon_WHT.png" alt="Icon" width={90} height={90} className="text-black" />
                <h2 className="text-center sm:text-4xl lg:text-5xl font-jubilee">
                  Create an account to build your roadmap for life
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-10">
                <div>
                  <label htmlFor="email" className="block text-lg">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    className={`mt-1 h-12 block w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'
                      } text-[#103438] bg-[#e0d9d4] focus:bg-[#ffffff] px-3 shadow-sm focus:outline-none focus:ring-[#fdff7f] focus:border-[#fdff7f] sm:text-sm md:text-lg`}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="password" className="block text-lg">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`mt-1 h-12 block w-full rounded-md border ${errors.password ? 'border-red-500' : 'border-gray-300'
                      } text-[#103438] bg-[#e0d9d4] focus:bg-[#ffffff] px-3 shadow-sm focus:outline-none focus:ring-[#fdff7f] focus:border-[#fdff7f] sm:text-sm md:text-lg`}
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block text-lg">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="Re-enter your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`mt-1 h-12 block w-full rounded-md border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                      } text-[#103438] bg-[#e0d9d4] focus:bg-[#ffffff] px-3 shadow-sm focus:outline-none focus:ring-[#fdff7f] focus:border-[#fdff7f] sm:text-sm md:text-lg`}
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                </div>
                <div className="mt-8 flex flex-col items-center gap-2">
                  <Button type="submit" className="bg-[#fdff7f] w-[12rem] rounded-lg h-[3.5rem] text-md font-semibold">
                    Create account
                  </Button>
                  <span className="text-sm">
                    Already have an account?{' '}
                    <button className="text-[#fdff7f] underline" onClick={onClose}>
                      Sign in here
                    </button>
                  </span>
                </div>
              </form>
              <div className="flex justify-between w-full mt-4">
                <button className="font-light text-sm" onClick={() => { /* Handle request assistance */ }}>
                  Request assistance
                </button>
                <span className="text-sm">Powered by ALLVUE</span>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default GetStartedModal;
