import React, { useState } from "react";

// Icons

import { FaBook, FaPhoneAlt } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";



export default function Donate() {
    const [donationType, setDonationType] = useState("One-time");
    const [amount, setAmount] = useState(0);
    const [customAmount, setCustomAmount] = useState("");
    const [fund, setFund] = useState("General Fund");

    const presetAmounts = [25, 50, 100, 250, 500, 1000];
    const funds = [
        { label: "General Fund", desc: "Support overall operations" },
        { label: "Education Program", desc: "Books, supplies, and tutoring" },
        { label: "Healthcare Fund", desc: "Medical care and checkups" },
        { label: "Nutrition Program", desc: "Healthy meals and snacks" },
        { label: "Emergency Relief", desc: "Urgent needs and crisis support" },
    ];

    const impact = [
        { logo: <FaBook size={20} color="green" />, amount: 25, desc: "Provides school supplies for one child for a month" },
        { logo: <FaBriefcaseMedical size={20} color="blue" />, amount: 50, desc: "Covers medical checkup and basic healthcare" },
        { logo: <GiMeal size={20} color="orange" />, amount: 100, desc: "Provides nutritious meals for a child for two weeks" },
        { logo: <BsFillHouseHeartFill size={20} color="purple" />, amount: 250, desc: "Supports housing and care for one month" },
    ];

    const handleCustomAmount = (e) => {
        const value = e.target.value;
        setCustomAmount(value);
        setAmount(Number(value));
    };



    return (
        <div className="bg-gray-200 min-h-screen mt-12 ">

            <div className="bg-gradient-to-r from-blue-800  to-purple-800 text-white text-center py-20">
                <h1 className="text-4xl font-semibold mb-2 font-secondary">Make a Difference Today</h1>
                <p className="max-w-2xl mx-auto mt-3 text-lg">
                    Your donation directly impacts the lives of children in our care, providing them with love,
                    education, and hope for a brighter future.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-7xl mx-auto">

                {/* Left Side */}


                <div className="bg-white p-6 rounded-xl shadow-md flex-1">
                    <h2 className="text-xl font-bold mb-4 font-secondary">Choose Your Donation</h2>


                    <div className="flex gap-3 font-poppins mb-4">
                        {["One-time", "Monthly"].map((type) => (
                            <button
                                key={type}
                                onClick={() => setDonationType(type)}
                                className={`px-4 py-2 rounded-lg border flex-1 ${donationType === type
                                    ? "bg-blue-100 border-blue-500 text-blue-700"
                                    : "bg-white border-gray-300" 
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    {/* Amount Selection */}

                    <div className="mb-4 font-poppins">
                        <div className="grid grid-cols-3 gap-3 mb-3">
                            {presetAmounts.map((amt) => (
                                <button
                                    key={amt}
                                    onClick={() => {
                                        setAmount(amt);
                                        setCustomAmount("");
                                    }}
                                    className={`py-2 border rounded-lg ${amount === amt
                                        ? "bg-blue-100 border-blue-500 text-blue-700"
                                        : "bg-white border-gray-300"
                                        }`}
                                >
                                    ${amt}
                                </button>
                            ))}
                        </div>
                        <input
                            type="number"
                            placeholder="Enter custom amount"
                            value={customAmount}
                            onChange={handleCustomAmount}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>

                    {/* Fund Selection */}
                    <div className="mb-4 flex flex-col font-poppins gap-5">
                        {funds.map((f) => (
                            <label
                                key={f.label}
                                className="flex items-start gap-5 mb-2 cursor-pointer"
                            >
                                <input

                                    type="radio"
                                    name="fund"
                                    className="mt-3"
                                    value={f.label}
                                    checked={fund === f.label}
                                    onChange={() => setFund(f.label)}
                                />
                                <div>
                                    <span className="font-medium">{f.label}</span>
                                    <p className="text-sm text-gray-500">{f.desc}</p>
                                </div>
                            </label>
                        ))}
                    </div>

                    {/* Name and Email */}
                    <div className="grid grid-cols-2 gap-3 font-poppins mb-3">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="border border-gray-300 rounded-lg p-2"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="border border-gray-300 rounded-lg p-2"
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full border font-poppins border-gray-300 rounded-lg p-2 mb-3"
                    />

                    {/* Options */}

                    <label className="flex items-center font-poppins gap-2 mb-2">
                        <input type="checkbox" /> Make this donation anonymous
                    </label>
                    <label className="flex items-center gap-2 font-poppins mb-4">
                        <input type="checkbox" defaultChecked /> Send me updates about Hope
                        Haven's work
                    </label>

                    {/* Submit Button */}

                    <button
                        className={`w-full py-3 font-poppins rounded-lg text-white ${amount > 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300"
                            }`}
                        disabled={amount === 0}
                    >
                        Donate Now - ${amount}
                    </button>
                </div>

                {/* Right Side  */}

                <div className="flex flex-col gap-10 w-full lg:w-1/3">
                    {/* Your Impact */}
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="font-bold mb-4 font-secondary text-xl">Your Impact</h3>
                        <ul className="space-y-3">
                            {impact.map((item) => (

                                <div key={item.amount} className="flex items-start font-secondary gap-5">
                                    <p className="rounded-full p-3 bg-blue-100 ">{item.logo}</p>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-green-600">${item.amount}</span>
                                        <p className="text-gray-600">{item.desc}</p></div>
                                </div>
                            ))}
                        </ul>
                    </div>

                    {/* Monthly Giving */}
                    <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                        <h3 className="font-bold mb-2 font-secondary text-xl">Monthly Giving</h3>
                        <p className="text-gray-600 font-poppins text-base">
                            Join our monthly giving program and provide consistent support that
                            helps us plan for the future.
                        </p>
                        <a href="#" className="text-blue-600 font-poppins text-sm font-medium">
                            Secure & Easy to Manage
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="flex  flex-col gap-5 bg-white p-6 rounded-xl  shadow-md">
                        <h3 className="font-bold mb-2 font-secondary text-xl">Contact Info</h3>

                        <div className="flex items-center font-poppins gap-3">
                            <span className="bg-green-100 text-green-600 p-2 rounded-lg"><FaPhoneAlt size={20} /></span>
                            <p>+91 9876543210</p>
                        </div>

                        <div className="flex items-center font-poppins gap-3">
                            <span className="bg-purple-100 text-purple-600 p-2 rounded-lg"><IoIosMail size={20} /></span>
                            <p>lokifamily@gmail.com</p>
                        </div>

                        <div className="flex items-center font-poppins gap-3">
                            <span className="bg-orange-100  text-orange-600 p-2 rounded-lg"><IoLocation size={20} /></span>
                            <p>Erode-638104</p>
                        </div>

                    </div>


                    
                </div>
            </div>
        </div>
    );
}
