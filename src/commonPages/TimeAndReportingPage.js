import React, { useState } from 'react';
import TimeAndDate from '../components/TimeAndDate.js';
import TodayWorkingHours from '../components/TodayWorkingHours.js';
import StartIntra from '../components/StartIntra.js';
import SetWorkingHours from '../components/SetWorkingHours.js';
import '../styles/employeeTimeAndReportingPageStyle.css';
import Sidebar from "../components/Sidebar";
import ManagerSidebar from "../components/ManagerSidebar";
import buttonImage from "../assets/bot.png";
import Modal from "react-modal";
import Chatbot from '../components/Chatbot.js';


function TimeAndReportingPage() {
    const userType = localStorage.getItem('userType');
    const [elapsedTime, setElapsedTime] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            {userType === 'Employee' && <Sidebar />}
            {userType === 'Manager' && <ManagerSidebar />}

            <div className="time-report">
                <div className='timeDate'>
                    <TimeAndDate title="Time and Date" />
                </div>

                <div className='todayWorkingHours'>
                    <TodayWorkingHours 
                        title="Today Working Hours"
                        time={elapsedTime}
                    />
                </div>
            </div>

            <div className='start-intra'>
                <StartIntra />
            </div>

            <div className='working-hours'>
                <SetWorkingHours title="Select Project" getTodayWorkingHours={setElapsedTime} />
            </div>

            <div className='chat-bot-icon'>
                <button className="round-button-chatbot" onClick={openModal}>
                    <img src={buttonImage} alt="Button" className="button-image-chatbot" />
                </button>
                <Modal 
                    isOpen={modalIsOpen} 
                    onRequestClose={closeModal}
                    style={{
                        content:{
                            top: '50%',
                            left: '40%',
                            right: '20%',
                            bottom: 'auto',
                            marginRight: '100px',
                            transform: 'translate(-50%, -50%)',
                            width: '80%', // Adjusted width for better responsiveness
                            maxWidth: '600px',
                            height: '80vh', // Adjusted height to fit better in the viewport
                            padding: '0', // Remove default padding
                            border: 'none', // Remove default border
                            borderRadius: '10px', // Match chatbot border-radius
                            overflow: 'hidden' 
                        },
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)' // Add overlay color
                        }
                
                    }}
                >
                    <Chatbot />
                </Modal>
            </div>
        </>
    );
}

export default TimeAndReportingPage;
