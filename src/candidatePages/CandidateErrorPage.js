import React from "react";
import { motion } from "framer-motion";
import '../styles/formError.css';
import { useNavigate } from "react-router-dom";

export default function CandidateErrorPage() {
    const navigate = useNavigate();
    const isError = true; // Set to true to trigger animation

    const handleBackToHome = () => {
        navigate("/");

    };

    return (
        <div className="container-ncErrorForm">
            {isError && (
                <div className="animation-container">
                    <div style={{ textAlign: "center" }}>
                        <p style={{ fontSize: "40px", marginBottom: "10px", fontWeight: "bold", color: "red" }}>Error</p>
                        <p style={{ fontSize: "20px", marginBottom: "20px" }}>There was a problem submitting your CV. Please try again later.</p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}
                    >
                        {/* Animation elements */}
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="100"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="red"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <motion.circle
                                cx="12"
                                cy="12"
                                r="10"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1 }}
                            />
                            <motion.line
                                x1="15"
                                y1="9"
                                x2="9"
                                y2="15"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1 }}
                            />
                            <motion.line
                                x1="9"
                                y1="9"
                                x2="15"
                                y2="15"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1 }}
                            />
                        </motion.svg>
                        {/* Add more animation elements here if needed */}
                    </motion.div>
                    <button className="errorpagebutton" onClick={handleBackToHome}>
                        Back To Home
                    </button>
                </div>
            )}
        </div>
    );
}
