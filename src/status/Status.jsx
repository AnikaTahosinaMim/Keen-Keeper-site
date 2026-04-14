import React, { useContext } from "react";
import { TimeContext } from "../context/TimeContext";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const Status = () => {
  const { time} = useContext(TimeContext);
  const countCall = time.filter((item) => item.type === "call").length;
  const countText = time.filter((item) => item.type === "text").length;
  const countVideo = time.filter((item) => item.type === "video").length;
  console.log(countCall, countText, countVideo);
  const data = [
    { name: "call", value: countCall, fill: "#0088FE" },
    { name: "text", value: countText, fill: "#244D3F" },
    { name: "video", value: countVideo, fill: "#FFBB28" },
  ];

  return (
    <div>
      <h2>Friendship Analytics</h2>
      <div className="text-center justify-center items-center mx-auto">
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
            textAlign: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />

          <Legend></Legend>
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default Status;
