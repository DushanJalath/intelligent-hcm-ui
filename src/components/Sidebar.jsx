import React, { useState } from "react";
import SubMenu from "./SubMenu";
import { SlSettings } from "react-icons/sl";
import {AiOutlineAppstore, AiOutlinePlusCircle} from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { IoExitOutline } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { IoMdPie } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { FiFile } from "react-icons/fi";
import "../styles/Sidebar.css";


const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [employeeDetails] = useState({
        name: "Sahan Perera",
        role: "Employee Name",
    });
    const isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });

    const [toggleState, setToggleState] = useState(true);
    useLocation();

    const subMenusList = [
        {
            name: "Absence Management",
            icon: IoCalendarOutline,
            menus: ["View Absence", "Request Leave"],
        },
    ];

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
                        {open && (
                            <div className="rounded-full overflow-hidden">
                                <img
                                    src="https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/advisor/wp-content/uploads/2023/12/poodle.jpg"
                                    width={45}
                                    alt=""
                                    className="rounded-full"
                                    style={{ width: 50, height: 50, borderRadius: '50%' }}
                                />
                            </div>
                        )}
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

                    <div className="flex items-center gap-2 p-3">
                        <span>Work Mode</span>
                        <label className="switch">
                            <input type="checkbox" checked={toggleState} onChange={handleToggleClick} />
                            <span className="slider round"></span>
                        </label>
                    </div>


                    <ul className="whitespace-pre px-2.5 text-[1rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 md:h-[68%] h-[70%]">
                        <li>
                            <NavLink to={"/"} className="link">
                                <AiOutlineAppstore size={23} className="min-w-max"/>
                                Time Reporting
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/EmployeeOvertimeTrackingPageNew"} className="link">
                                <IoMdPie size={23} className="min-w-max"/>
                                Overtime Tracking
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/leavePrediction"} className="link">
                                <TbReportAnalytics size={23} className="min-w-max"/>
                                Leave Prediction
                            </NavLink>
                        </li>
                        {(open || isTabletMid) && (
                            <div>
                                {subMenusList?.map((menu) => (
                                    <div key={menu.name} className="flex flex-col gap-1">
                                        <SubMenu data={menu}/>
                                    </div>
                                ))}
                            </div>
                        )}
                        <li>
                            <NavLink to={"/EmployeeJobVacancyPageNew"} className="link">
                                <FiFile size={23} className="min-w-max"/>
                                Job Vacancies
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/clamBills"} className="link">
                                <AiOutlinePlusCircle size={23} className="min-w-max"/>
                                Clam Bills
                            </NavLink>
                        </li>
                    </ul>

                    <div className="mt-auto px-2.5 mb-5">
                        <NavLink to={"/settings"} className="link">
                            <SlSettings size={23} className="min-w-max"/>
                            Settings
                        </NavLink>
                        <NavLink to={"/logout"} className="link mt-2">
                            <IoExitOutline size={23} className="min-w-max" />
                            Log Out
                        </NavLink>
                    </div>
                </div>

                <div className={`m-3 md:hidden cursor-pointer ${!open && 'transform translate-x-[15px]'}`} onClick={handleToggleSidebar}>
                    <MdMenu size={25} />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
