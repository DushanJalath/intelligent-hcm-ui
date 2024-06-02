import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { FiFile } from "react-icons/fi";
import "../styles/Sidebar.css";


const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [employeeDetails] = useState({
        role: "New Candidate",
    });
    const isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });

    const [toggleState, setToggleState] = useState(true);
    useLocation();



    const handleToggleSidebar = () => {
        setOpen(!open);
    };

    const handleToggleClick = () => {
        setToggleState(!toggleState);
    };

    return (
        <div className="sidebar">
            <div className={`bg-[#EAEAEA] text-[#0C0C0D] shadow-xl z-[999] max-w-[19rem] w-[19rem] overflow-hidden md:relative fixed h-screen ${!open && "md:w-[4rem]"}`}>
                <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3.5 font-medium border-b py-5 border-slate-300 mx-3">
                        <div className={`flex flex-col items-start ml-${open ? 3 : 0}`}>
                            {open && (
                                <>
                  <span className="text-xl whitespace-pre">
                    {employeeDetails.name}
                  </span>
                                    <span className="text-sm text-gray-500">
                    {employeeDetails.role}
                  </span>
                                </>
                            )}
                        </div>
                    </div>

                    <ul className="whitespace-pre px-2.5 text-[1rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 md:h-[68%] h-[70%]">
                        <li>
                            <NavLink to={"/timereporting"} className="link">
                                <FiFile size={23} className="min-w-max" />
                                Job Vacancy
                            </NavLink>
                        </li>
                    </ul>


                </div>

                <div className={`m-3 md:hidden cursor-pointer ${!open && 'transform translate-x-[15px]'}`} onClick={handleToggleSidebar}>
                    <MdMenu size={25} />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
