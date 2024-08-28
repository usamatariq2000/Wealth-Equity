"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Roadmap = () => {

    interface DropdownItem {
        title: string;
        description: string;
        icon: string;
    }

    const dropdown: DropdownItem[] = [
        {
            title: "Empower families",
            description:
                "Provide culturally competent education to reframe life insurance: showing its multiple uses; highlighting positive impact stories; and providing access to purchase coverage online or to meet a W&E-endorsed financial advisor.",
            icon: "/images/Icon.svg"
        },
        {
            title: "Strengthen and unify financial advisors",
            description:
                "Provide culturally competent education to reframe life insurance: showing its multiple uses; highlighting positive impact stories; and providing access to purchase coverage online or to meet a W&E-endorsed financial advisor.",
            icon: "/images/Icon (1).svg"

        },
        {
            title: "Leverage partners",
            description:
                "Provide culturally competent education to reframe life insurance: showing its multiple uses; highlighting positive impact stories; and providing access to purchase coverage online or to meet a W&E-endorsed financial advisor.",
            icon: "/images/Icon (2).svg"
        },
    ];

    const [isOpen, setIsOpen] = useState<Record<string, boolean>>({});

    const handleToggle = (section: string) => {
        setIsOpen((prevOpen) => ({
            ...prevOpen,
            [section]: !prevOpen[section],
        }));
    };

    return (
        <section className="flex justify-between flex-col items-center lg:flex-row text-[#00262B]">
            <div className="flex flex-col justify-center px-5 lg:px-16 lg:pr-0">
                <b className="tracking-widest font-bold font-halyard leading-14 tracking-tighter text-left text-transform: uppercase my-4 text-[10px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                    OUR ROADMAP
                </b>
                <h1
                    className="text-[45px] lg:text-[42px] xl:text-[64px] leading-[50px] lg-leading-[53px] xl:leading-[72px] font-jubilee mb-6"
                    style={{ letterSpacing: "-2.5%" }}
                >
                    How we’ll get there
                </h1>

                <div className="flex flex-col">
                    {dropdown.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col border-b border-[#C7C1BD]"
                        >
                            <button
                                className="text-left text-xl lg:text-2xl py-4 lg:py-5 font-bold font-halyard hover:text-[#092a2c] text-[#00555A]"
                                onClick={() => handleToggle(item.title)}
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-[20px]"                                    ><Image
                                        src={item.icon}
                                        alt="HeroImg"
                                        layout="responsive"
                                        width={10}
                                        height={10}
                                    /></div>
                                    {item.title}</div>
                            </button>
                            <div
                                className={`overflow-hidden font-light-haylard text-lg font-base transition-all duration-700 ease-in-out ${isOpen[item.title] ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                                    }`}
                                style={{
                                    maxHeight: isOpen[item.title] ? "100vh" : "0",
                                }}
                            >
                                <div className="mb-5">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full p-[50px]">
                <Image
                    src="/images/Rectangle 42421.png"
                    alt="HeroImg"
                    layout="responsive"
                    width={240}
                    height={240}
                />
            </div>
        </section>
    );
};

export default Roadmap;


