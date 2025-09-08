import Marquee from "react-fast-marquee";
import './marquee.css'


import slider1 from "./images/slider1.png";

export const reviews = [
  {
    id: 1,
    quote:
      "Ever since Uno Telos deployed their IPTV solution, our guests have continuously complimented the ease and simplicity of its ",
    name: "Brain Hotels, Oniru",
    title: "Manager",
  },
  {
    id: 2,
    quote:
      "The best thing that happened to us was adopting the Uno Telos Revenue Assurance platform",
    name: "Leading African Operator",
    title: "Director",
  },
  {
    id: 3,
    quote:
      "Ever since Uno Telos deployed their IPTV solution, our guests have continuously complimented the ease and simplicity of its ",
    name: "Brain Hotels, Oniru",
    title: "Manager",
  },
  {
    id: 4,
    quote:
      "The best thing that happened to us was adopting the Uno Telos Revenue Assurance platform",
    name: "Leading African Operator",
    title: "Director",
  },
  {
    id: 5,
    quote:
      "Ever since Uno Telos deployed their IPTV solution, our guests have continuously complimented the ease and simplicity of its .",
    name: "Brain Hotels, Oniru",
    title: "Manager",
  },
  {
    id: 6,
    quote:
      "The best thing that happened to us was adopting the Uno Telos Revenue Assurance platform",
    name: "Leading African Operator",
    title: "Director",
  },
];


const Marquee = () => {
  return (
    <div>
        <Marquee pauseOnHover direction="left">
        <div className="reviews-container">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <p className="review-quote">"{review.quote}"</p>
              <div className="">
                <img src={''} alt={''} />
                <div className="">
                  <p className="review-name">{review.name}</p>
                  <p className="review-title">{review.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  )
}

export default Marquee