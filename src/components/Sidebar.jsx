import React, { useState, useEffect } from "react";
import SubMenu from "./SubMenu";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore, AiOutlinePlusCircle } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoMdPie } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { FiFile } from "react-icons/fi";
import "../styles/Sidebar.css";
import api from "../api.js";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [employeeName, setEmployeeName] = useState("");
  const [employeePic, setEmployeePic] = useState("");
  const isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("token");
        const response = await api.get("http://localhost:8000/user-details", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setEmployeeName(response.data.fName);
        setEmployeePic(response.data.profile_pic_url);
      } catch (error) {
        console.error(
          "An error occurred:",
          error.response?.data?.message || error.message
        );
      }
    };

    fetchData();
  }, [location]);

  const subMenusList = [
    {
      name: "Absence Management",
      icon: IoCalendarOutline,
      menus: ["View Attendance", "Request Leave", "Leave Status"],
    },
    {
      name: "Claim Bills",
      icon: AiOutlinePlusCircle,
      menus: ["Send Bill", "Bill Status"],
    },
  ];

  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.setItem("userType", "NewCandidate");
    navigate("/logout");
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div
        className={`bg-[#EAEAEA] text-[#0C0C0D] shadow-xl z-[999] max-w-[19rem] w-[19rem] overflow-hidden md:relative fixed h-screen ${
          !open && "md:w-[4rem]"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3.5 font-medium border-b py-5 border-slate-300 mx-3">
            {open && (
              <div className="rounded-full overflow-hidden">
                <img
                  src={employeePic}
                  width={45}
                  alt=""
                  className="rounded-full"
                  style={{ width: 50, height: 50, borderRadius: "50%" }}
                />
              </div>
            )}
            <div className={`flex flex-col items-start ml-${open ? 3 : 0}`}>
              {open && (
                <>
                  <span className="text-xl whitespace-pre">{employeeName}</span>
                  <span className="text-sm text-gray-500">Employee</span>
                </>
              )}
            </div>
          </div>

          <ul className="whitespace-pre px-2.5 text-[1rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/time And Reporting"} className="link">
                <AiOutlineAppstore size={23} className="min-w-max" />
                Time And Reporting
              </NavLink>
            </li>

            {(open || isTabletMid) && (
              <div>
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
            <li>
              <NavLink to={"/Job Details"} className="link">
                <FiFile size={23} className="min-w-max" />
                Job Vacancies
              </NavLink>
            </li>
            <li>
              <NavLink to={"/over time tracking"} className="link">
                <IoMdPie size={23} className="min-w-max" />
                Overtime Tracking
              </NavLink>
            </li>
          </ul>

          <div className="mt-auto px-2.5 mb-5">
            <NavLink to="/logout" onClick={handleLogout} className="link mt-2">
              <IoExitOutline size={23} className="min-w-max" />
              Log Out
            </NavLink>
          </div>
        </div>

        <div
          className={`m-3 md:hidden cursor-pointer ${
            !open && "transform translate-x-[15px]"
          }`}
          onClick={handleToggleSidebar}
        >
          <MdMenu size={25} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
