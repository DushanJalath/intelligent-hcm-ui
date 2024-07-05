import React from "react";

import StaffForm from "../components/StaffForm";
import { useLocation } from "react-router-dom";

export default function StaffFormPage() {
  const location = useLocation();
  const { vacancy_id } = location.state || {};
  const userType = localStorage.getItem("userType");

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <StaffForm title="Apply for Vacancy" vacancy_id={vacancy_id} />{" "}
      </div>
    </div>
  );
}
