import React, { useState } from "react";
import api from "../api";
import LeaveChart from "./LeaveChart";
import "../styles/LeavePredictionchart.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs"; // Import dayjs library

function LeavePredictionchart() {
  const [date, setDate] = useState(dayjs()); // Initialize with current date
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [chartData, setChartData] = useState([
    { date: "0", predicted_attendance: 0 },
  ]); // Initialize with default zero values

  const handleDateChange = (newValue) => {
    setDate(newValue); // Update date value
    // Perform any other operations needed
  };

  const handlePredictClick = async () => {
    try {
      const accessToken = localStorage.getItem("token");
      const predictionResponse = await api.post(
        "http://127.0.0.1:8000/predict/",
        { date: date.format("MMDD") }, // Format date as MMDD before sending
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setPrediction(predictionResponse.data.predicted_attendance.toFixed(0)); // Rounded to 2 decimal places
      setError(null);

      const chartResponse = await api.post(
        "http://127.0.0.1:8000/predict/chart/",
        { date: date.format("MMDD") }, // Format date as MMDD before sending
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setChartData(chartResponse.data);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.detail);
      } else if (error.request) {
        setError("No response received. Please check your network connection.");
      } else {
        setError("An error occurred. Please try again later.");
      }
      setPrediction(null);
      setChartData([{ date: "0", predicted_attendance: 0 }]); // Reset chart data to default zero values
    }
  };

  return (
    <div className="modM">
      <div class="modm1">
        <p className="container123-title">Employee Attendance Prediction</p>
      </div>
      <div className="modL">
        <label className="momdate">
          Pick a date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
        </label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Pick the date"
              className="empdatepick"
              value={date}
              onChange={handleDateChange}
            />
          </DemoContainer>
        </LocalizationProvider>
        <div class="emp-pred-btn">
          <button className=" buttn-hrpredic" onClick={handlePredictClick}>
            Predict
          </button>
        </div>
      </div>

      {error && <div className="error_a">{error}</div>}
      {prediction !== null && (
        <div class="prediceted-emp-att">
          <h2 class="prediceted-emp-att-ph2">
            Predicted Attendance&nbsp;:&nbsp;
          </h2>
          <p class="prediceted-emp-att-p">{prediction}</p>
        </div>
      )}
      <div class="leave-chart-emp">
        <div className="modm1">
          <p className="container123-title">
            Predicted Attandance Chart That Week
          </p>
        </div>
        <div className="leave-chart-emp1">
          <LeaveChart
            xArray={chartData.map((data) => data.date)}
            yArray={chartData.map((data) => data.predicted_attendance)}
          />
        </div>
      </div>
    </div>
  );
}

export default LeavePredictionchart;
