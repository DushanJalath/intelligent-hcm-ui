import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import '../styles/formDone.css';

export default function CandidateDonePage() {
    const navigate = useNavigate();

    const isSubmitted = true;

    const handleBackToHome = () => {
        navigate("/");
    };

    return (
        <div className="container-ncDoneForm">
            {isSubmitted && (
                <div className="animation-container">
                    <div style={{ textAlign: "center", marginBottom: "30px" }}>
                        <p style={{ fontSize: "40px", marginBottom: "10px", fontWeight: "bold", color: "green" }}>Thank You !</p>
                        <p style={{ fontSize: "20px", marginBottom: "20px" }}>Your CV submitting successfully. You will receive an email message about your Interview.</p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", marginBottom: "30px" }}
                    >
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="100"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="green"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <motion.path
                                d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1 }}
                            />
                            <motion.polyline
                                points="22 4 12 14.01 9 11.01"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1 }}
                            />
                        </motion.svg>
                    </motion.div>
                    <button className="donepagebutton" onClick={handleBackToHome}>
                        Back To Home
                    </button>
                </div>
            )}
        </div>
    );
}
