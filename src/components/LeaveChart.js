import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

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
        >
        </RadioGroup>
      </FormControl>
      <FormControl>
        <RadioGroup
          row
          name="label-placement"
          value={tickLabelPlacement}
          onChange={(event) => setTickLabelPlacement(event.target.value)}
        >
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};

const formatDate = (date) => {
  // Convert date from MMDD to MM/DD format
  return `${date.slice(0, 2)}/${date.slice(2)}`;
};

const LeaveChart = ({ xArray, yArray }) => {
  const [tickPlacement, setTickPlacement] = useState("middle");
  const [tickLabelPlacement, setTickLabelPlacement] = useState("middle");

  const chartSetting = {
    series: [
      { dataKey: "predicted_attendance", label: "Predicted Attendance", color: "#02936F" },
    ],
    height: 300,
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
};

export default LeaveChart;
