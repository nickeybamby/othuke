import React from "react";

const SkillsCard = ({ theme, skill, index }) => {
  return (
    <div className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10">

      {/* Gradient background blob */}
      <div className="pointer-events-none rounded-full blur-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute -top-20 -left-20 z-0 transition-opacity duration-500 mix-blend-lighten opacity-70" />

      {/* Card Content */}
      <div className="flex items-center gap-6 p-4 bg-white/40 dark:bg-gray-900 relative z-10 transition-all duration-300 hover:scale-105">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-2">
          <img
            src={theme === "dark" ? skill.iconDark : skill.iconLight}
            alt={skill.title}
            className="w-8 rounded-full"
          />
        </div>
        <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-gray-100">
          {skill.title}
        </h3>
      </div>
    </div>
  );
};

export default SkillsCard;
