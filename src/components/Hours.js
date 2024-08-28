import React from "react";

const Hours = () => {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const shelterHours = [
    { day: "Monday", open: "10:00", close: "16:00" },
    { day: "Tuesday", open: "10:00", close: "16:00" },
    { day: "Wednesday", open: "10:00", close: "16:00" },
    { day: "Thursday", open: "10:00", close: "16:00" },
    { day: "Friday", open: "10:00", close: "16:00" },
    { day: "Saturday", open: "9:00", close: "20:00" },
    { day: "Sunday", open: "9:00", close: "20:00" },
  ];

  const todayHours = shelterHours.find((day) => day.day === today);

  return (
    <div className="hours-container"> {/* Main container with styling */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7UIzEuCLsay6Xpb3Kre4MOCQdRGdk2Gk8g&s" 
        alt="Calendar Icon"
        className="calendar-icon"
      /> {/* Calendar image */}
      <div className="hours-info"> {/* Container for hours content */}
        <h2>Today's Hours</h2>
        <p>
          {todayHours.day} {todayHours.open} - {todayHours.close}
        </p>
      </div>
    </div>
  );
};

export default Hours;