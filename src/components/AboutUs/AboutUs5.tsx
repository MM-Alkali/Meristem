import "./aboutUs5.css";
import Carousel from "./Carousel";
import CarouselCards from "./CarouselCard";

const Feedback: React.FC = () => {
  const names = [
    {
      name: "Omole Tobi",
      info: "Your Customer Service at Meristem is unparallel and I appreciate your prompt feedback irrespective of the Channel. I have used chat, mail and your branch and the experience has been superb.",
    },
    {
      name: "Efosa Edokpolo",
      info: "You have taken customer service delivery to a very new and appreciable level. The response time and feedback in Meristem are very rewarding and satisfactory. Please keep this up. I am most relaxed now knowing fully well that you have my (your clients) interest at heart all the time.",
    },
    {
      name: "Benson Odisika Elum",
      info: "Your prompt attention to matters arising is a thing of Joy. Please Keep it Up and God Bless Meristem.",
    },
    {
      name: "Oluwatobi Adekunle",
      info: "I am delighted by the prompt attention you give to any issues that arise. Your proactive approach and swift response bring me immense joy. It's reassuring to know that I can rely on your team to address my concerns promptly. Keep up the excellent work, and may Meristem continue to be blessed.",
    },
    {
      name: "Hanan Muhammad",
      info: "I want to express my appreciation for the exceptional customer service I received at Meristem. Your team's dedication and prompt feedback across various channels, including chat, email, and in-person at your branch, have been remarkable. The experience has been nothing short of superb, and it's evident that you prioritize providing top-notch support to your customers.",
    },
    {
      name: "Abdulaziz Ibrahim",
      info: "I must say, the level of customer service at your company is outstanding. The response time and feedback I received from Meristem exceeded my expectations. It's truly rewarding and satisfying to know that you have my best interests at heart. Please continue delivering such excellent service. I feel at ease knowing that I can always rely on you.",
    },
    {
      name: "Aafreen Alkali",
      info: "I am truly impressed by the exceptional customer service I have received from Meristem. The level of professionalism and attention to detail displayed by your team is commendable. Every interaction, whether it's through phone calls, emails, or in-person meetings, has been met with a genuine willingness to assist and resolve any issues. I am grateful for the dedication and customer-centric approach demonstrated by your company. Thank you for setting a high standard in customer service.",
    },
  ];

  return (
    <div className="carousel-container">
      <h1 className="about-us-header">Hear what our clients are saying</h1>
      <p className="about-us-paragraph">
        Discover how we have made a positive impact on the lives of our clients.
      </p>
      <Carousel Card={CarouselCards} names={names} />
    </div>
  );
};

export default Feedback;
