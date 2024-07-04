import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import api from "../api";
import { px } from "framer-motion";

const TickParamsSelector = ({
  tickPlacement,
  tickLabelPlacement,
  setTickPlacement,
  setTickLabelPlacement,
}) => {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      sx={{ width: "100%" }}
    >
      <FormControl>
        <RadioGroup
          row
          name="tick-placement"
          value={tickPlacement}
          onChange={(event) => setTickPlacement(event.target.value)}
        ></RadioGroup>
      </FormControl>
      <FormControl>
        <RadioGroup
          row
          name="label-placement"
          value={tickLabelPlacement}
          onChange={(event) => setTickLabelPlacement(event.target.value)}
        ></RadioGroup>
      </FormControl>
    </Stack>
  );
};

const formatDate = (date) => {
  // Convert date from MMDD to MM/DD format
  return `${date.slice(0, 2)}/${date.slice(2)}`;
};

export default function LeaveChartToday() {
  const [tickPlacement, setTickPlacement] = useState("middle");
  const [tickLabelPlacement, setTickLabelPlacement] = useState("middle");
  const [xArray, setXArray] = useState([]);
  const [yArray, setYArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("token");
        const response = await api.get("/predict/chart/today/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = response.data;
        setXArray(data.map((item) => item.date));
        setYArray(data.map((item) => item.predicted_attendance));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching prediction data", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const chartSetting = {
    series: [
      {
        dataKey: "predicted_attendance",
        label: "Predicted Attendance ",
        color: "#02936F",
      },
    ],
    height: 300,
    width: 450 ,
    sx: {
      [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
        transform: "translateX(-10px)",
      },
    },
    yAxis: [
      {
        label: "Predicted Attendance",
      },
    ],
  };

  const dataset = xArray.map((date, index) => ({
    date: formatDate(date),
    predicted_attendance: yArray[index],
  }));

  return (
    <div style={{ width: "100%" }}>
      <TickParamsSelector
        tickPlacement={tickPlacement}
        tickLabelPlacement={tickLabelPlacement}
        setTickPlacement={setTickPlacement}
        setTickLabelPlacement={setTickLabelPlacement}
      />
      <BarChart
        dataset={dataset}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "date",
            tickPlacement,
            tickLabelPlacement,
          },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
