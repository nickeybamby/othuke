import Marquee from "react-fast-marquee";
import "./marquee.css";

import seed from "../assets/seed.png";
import hundred from "../assets/hundred.png";
import brittle from "../assets/brittle.png";
import openbook from "../assets/openbook.png";
import capa from "../assets/capa.png";

export const reviews = [
  {
    id: 1,
    desc: "With a mission to address publishing, logistics & marketing challenges for African authors. ",
    title: "Founded Masobe Books",
    thumbnail: seed,
  },
  {
    id: 2,
    desc: "Record-breaking outputs, showing a consistent upward trajectory.",
    title: "Published Over 100 Titles",
    thumbnail: hundred,
  },
  {
    id: 3,
    desc: "Brittle Paper’s Publishing House of the Year 2021 & Brittle Paper’s Literary Person of the Year 2024. ",
    title: "Brittle Paper Awards",
    thumbnail: brittle,
  },
  {
    id: 4,
    desc: "Proud publisher of global recognition, including five titles longlisted for the 2025 Nigerian Price for Literature.",
    title: "Global Recognition",
    thumbnail: openbook,
  },
  {
    id: 5,
    desc: `Masobe: Literary and fiction. 
Makere: Subsidy & self-publishing
Oremaha: Children's books.`,
    title: "Accessibility Through Imprints",
    thumbnail: capa,
  },
];

const FastMarquee = () => {
  return (
    <div className="my-20">
      <h2 className="text-center text-base sm:text-2xl bg-purple-200 px-5 py-1 rounded-full dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition duration-300 font-medium w-fit m-auto my-12">
          Achievements & Results
        </h2>
      <Marquee pauseOnHover direction="left">
        <div className="reviews-container">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="flex flex-col items-center text-center gap-2">
                <img
                  src={review.thumbnail}
                  alt={""}
                  className="w-10 h-10 object-contain "
                />
                <div className="">
                  <h3 className="review-name text-center">{review.title}</h3>
                  <p className="review-title text-center">{review.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default FastMarquee;
