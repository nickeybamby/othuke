import React, { useRef, useState } from "react";

const SkillsCard = ({ theme, skill, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div
      className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
      ref={divRef}
    >
      {/* Gradient background blob */}
      <div
        className={`absolute rounded-full blur-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] transition-opacity duration-500 ${
          hovering ? "opacity-70" : "opacity-0"
        }`}
        style={{ top: position.y - 150, left: position.x - 150 }}
      />

      {/* Card Content */}
      <div className="card_content relative z-10  flex items-center gap-8 p-5 hover:p-4 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-800">
        <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-gray-100 ">
          {skill.title}
        </h3>
      </div>
    </div>
  );
};

export default SkillsCard;
