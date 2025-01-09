import React, { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import "./FloatingMap.css";
import IndiaMap from "./IndiaMap";

const FloatingMap = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const toggleWindow = () => {
        setIsOpen(!isOpen);
    };

    const openWindow = () => {
        setIsOpen(true);
    };

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        if (name === "startDate") {
            setStartDate(value);
        } else if (name === "endDate") {
            setEndDate(value);
        }
    };

    return (
        <div
            className={`floating-window ${isOpen ? "open" : ""}`}
            onClick={!isOpen ? openWindow : () => {}}
        >
            <div>
                {isOpen ? (
                    <div className="flex">
                        <button onClick={toggleWindow} className="back-button absolute top-[5%] left-[5%]">
                            <FiChevronLeft />
                        </button>
                        <div className="content flex">
                            <div className="w-1/2">
                                <IndiaMap enabled={true} />
                            </div>
                        </div>
                        <div className="absolute top-[10%] right-[10%] p-6 bg-white shadow-lg rounded-md w-100">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Predict Demand and Generation Needed</h2>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-600">Start Date</label>
                                    <input
                                        type="date"
                                        id="startDate"
                                        name="startDate"
                                        value={startDate}
                                        onChange={handleDateChange}
                                        className="w-full text-black mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-600">End Date</label>
                                    <input
                                        type="date"
                                        id="endDate"
                                        name="endDate"
                                        value={endDate}
                                        onChange={handleDateChange}
                                        className="w-full mt-1 px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <button className="w-full bg-blue-500 text-white py-2 rounded-md focus:outline-none hover:bg-blue-600">Predict</button>
                            </form>
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold text-gray-800">Energy Required:</h3>
                                <h4 className="text-lg font-semibold text-gray-800">Energy Generation Through:</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Solar Energy:</li>
                                    <li>Wind Energy:</li>
                                    <li>Hydro Energy:</li>
                                    <li>Coal Energy:</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <IndiaMap enabled={false} />
                )}
            </div>
        </div>
    );
};

export default FloatingMap;