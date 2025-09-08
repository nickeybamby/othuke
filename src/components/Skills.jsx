import skillLight from "../assets/skillLight.png";
import skillDark from "../assets/skillDark.png";
import bgImage1 from "../assets/bgImage1.png";
import bgImage2 from "../assets/bgImage2.png";
import Title from "./Title";
import SkillsCard from "./SkillsCard";

const Skills = ({ theme }) => {
  const skillsData = [
    {
      iconLight: skillLight,
      iconDark: skillDark,
      title: "Strategic Vision & Planning",
    },
    {
      iconLight: skillLight,
      iconDark: skillDark,
      title: "Cross Cultural Communication",
    },
    {
      iconLight: skillLight,
      iconDark: skillDark,
      title: "Public Speaking & Engagement",
    },
    {
      iconLight: skillLight,
      iconDark: skillDark,
      title: "Media & Public Relations",
    },
    {
      iconLight: skillLight,
      iconDark: skillDark,
      title: "Organizational Leadership",
    },
    {
      iconLight: skillLight,
      iconDark: skillDark,
      title: "Supply Chain Management",
    },
  ];

  return (
    <div className="relative flex flex-col items-center gap-5 px-4 sm:px-8 lg:px-16 xl:px-32 pt-30 text-gray-700 dark:text-gray-200">
      <Title title="Skills & Expertise" desc="From strategy to Execution" />

      <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((skill, index) => (
          <SkillsCard key={index} skill={skill} index={index} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
