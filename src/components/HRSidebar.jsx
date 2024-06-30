import React, { useState,useEffect } from "react";
import SubMenu from "./SubMenu";
import { SlSettings } from "react-icons/sl";
import {AiOutlineAppstore} from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { IoExitOutline } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { IoMdPie } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { FiFile } from "react-icons/fi";
import { FaUserPlus, FaUsers } from "react-icons/fa"
import { RiBillLine } from "react-icons/ri";
import "../styles/Sidebar.css";
import api from '../api.js'

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [employeeName,setEmployeeName] = useState("");
    const [employeePic,setEmployeePic] = useState("");
    const isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
    const location = useLocation();
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem('token');
                const response = await api.get('http://localhost:8000/user-details', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                setEmployeeName(response.data.fName);
                setEmployeePic(response.data.profile_pic_url);
            } catch (error) {
                console.error('An error occurred:', error.response?.data?.message || error.message);
            }
        };

        fetchData();
    }, [location]);

    const [toggleState, setToggleState] = useState(true);
    useLocation();

    const subMenusList = [
        {
            name: "Time Reporting",
            icon: AiOutlineAppstore,
            menus: ["Employees", "Managers"],
        },
        {
            name: "Absence Management",
            icon: IoCalendarOutline,
            menus: ["Set Leave Count","Leave Report","Employees Leave Requests","Managers Leave Requests","Employees Attendances","Managers Attendances"],
        },
        {
            name: "Overtime Tracking",
            icon: IoMdPie,
            menus: ["Employees", "Managers" ],
        },
        {
            name: "Leave Prediction",
            icon: TbReportAnalytics,
            menus: ["Employees", "Managers"],
        },
        {
            name: "Job Vacancies",
            icon: FiFile,
            menus: ["Add Job Vacancy", "Managers Requests","View Job Vacancies"],
        }
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
                                    src={employeePic}
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
                    {employeeName}
                  </span>
                                    <span className="text-sm text-gray-500">
                    HR Officer
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
                            <NavLink to={"/manage bills"} className="link">
                                <RiBillLine size={23} className="min-w-max"/>
                               Manage Bills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/register"} className="link">
                                <FaUserPlus  size={23} className="min-w-max"/>
                               Register User
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/candidates"} className="link">
                                <FaUsers size={23} className="min-w-max"/>
                               Candidates
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
