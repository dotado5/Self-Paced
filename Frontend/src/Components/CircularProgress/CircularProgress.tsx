// CircularProgressBar.tsx
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CircularProgressBarProps {
  percentage: number;
  width: string;
  height: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  width,
  height,
}) => {
  return (
    <div style={{ width, height }}>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(99.21)">
            <stop offset="72.67%" stopColor="#1082C5" />
            <stop offset="112.96%" stopColor="#3CBC49" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: `url(#gradient)`,
          textColor: "#2B2B2B",
          trailColor: "#d6d6d6",
          // textSize: "12px",
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
