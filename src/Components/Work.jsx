import { impactData, SuccessStories } from "../assets/Images/Assets.jsx";
import { FaBaby, FaBook, FaHome, FaHeartbeat } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";

// Our Services Image
import Child from "../assets/Images/childcare.jpg";
import Education from "../assets/Images/Education.jpg";
import Adoption from "../assets/Images/Adoption.jpg";
import HealthCare from "../assets/Images/HealthCare.jpg";
import Skill from "../assets/Images/Skill.jpg";
import Community from "../assets/Images/Community.jpg";


import { Link } from "react-router-dom";


const ServiceCard = ({ image, title, icon, description, points, reverse }) => {
    return (
        <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center bg-white rounded-xl  shadow-lg overflow-hidden`}>
            <img
                src={image}
                alt={title}
                className="w-full md:w-1/2 md:h-64 md:m-5 rounded-2xl object-cover"
            />
            <div className="p-6 md:w-1/2 space-y-3 text-left">
                <div className="flex flex-row  gap-5 items-center">
                    <span className=" text-3xl text-blue-600 mb-2 rounded-lg p-3 ">{icon}</span>
                    <h2 className="text-2xl font-bold text-gray-800 font-secondary">{title}</h2>

                </div>
                <p className="text-gray-600 ">{description}</p>
                <ul className="list-disc list-inside text-gray-700 text-base font-poppins mt-2">
                    {points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Work = () => {
    return (
        <section className="mt-15">
            <div className="bg-gray-200">

                {/* Header Section */}
                <div className="flex flex-col items-center text-white text-center bg-gradient-to-r from-[#2564E8] to-[#7C23CE]">
                    <h1 className="md:text-4xl text-2xl font-semibold mt-10 p-5 font-secondary">Our Work Makes a Difference</h1>
                    <p className="text-2xl md:w-3xl p-5 mb-5 font-primary">
                        Through comprehensive programs and dedicated care, we transform lives and create opportunities for children to reach their full potential.
                    </p>
                </div>

                {/* Impact Section */}
                <div className="flex flex-col items-center text-center">
                    <h1 className="md:text-4xl text-2xl font-semibold p-5 font-secondary">Our Impact in Numbers</h1>
                    <p className="text-2xl text-gray-700 mb-5 font-primary">Real results from our dedicated efforts</p>
                </div>

                <div className="md:flex md:flex-wrap grid justify-center  gap-8 p-8 w-full text-center size-auto">
                    {impactData.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center  justify-center bg-white rounded-xl p-6 shadow-md w-60"
                        >
                            <div className="text-blue-600 mb-3 border-2 rounded-full p-5 bg-blue-100">
                                {item.logo}
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 ">{item.string}</h2>
                            <p className="font-semibold font-primary text-center mt-2 ">{item.purpose}</p>
                            <p className="text-gray-600 text-base font-extra  text-center mt-5">{item.about}</p>
                        </div>
                    ))}
                </div>

                {/* Services Section */}
                <div className="flex flex-col items-center text-center mt-16">
                    <h1 className="md:text-4xl text-2xl font-semibold p-5 font-secondary    ">Our Services </h1>
                    <p className="text-2xl text-gray-700 mb-5 font-primary">Explore the programs we offer for children’s well-being and growth</p>
                </div>

                <div className="max-w-4xl mx-auto py-10 px-4 space-y-10">
                    <ServiceCard
                        image={Child}
                        title="Child Care & Development"
                        icon={<FaBaby />}
                        description="Comprehensive care programs focusing on physical, emotional, and social development of children."
                        points={["24/7 supervised care", "Nutritious meals", "Medical checkups", "Emotional support"]}
                    />

                    <ServiceCard
                        image={Education}
                        title="Education & Learning"
                        icon={<FaBook />}
                        description="Quality education programs designed to give every child the foundation for a successful future."
                        points={["Primary education", "Computer literacy", "Art & music classes", "Language programs"]}

                    />

                    <ServiceCard
                        image={Adoption}
                        title="Adoption Services"
                        icon={<FaHome />}
                        description="Carefully managed adoption process to unite children with loving, forever families."
                        points={["Family screening", "Counseling support", "Legal assistance", "Post-adoption follow-up"]}
                    />

                    <ServiceCard
                        image={HealthCare}
                        title="Healthcare Program"
                        icon={<FaHeartbeat />}
                        description="Complete healthcare services ensuring every child receives proper medical attention and care."
                        points={["Regular health screenings", "Vaccinations", "Dental care", "Mental health support"]}

                    />
                    <ServiceCard
                        image={Skill}
                        title="Skill Development"
                        icon={<VscTools />}
                        description="Life skills and vocational training programs to prepare older children for independent living."
                        points={["Vocational training", "Life skills workshops", "Financial literacy", "Job placement assistance"]}

                    />
                    <ServiceCard
                        image={Community}
                        title="Community Outreach"
                        icon={<FaHeartbeat />}
                        description="Programs that extend our impact beyond the orphanage to support families in the community."
                        points={["Family reunification", "Poverty alleviation", "Community education", "Emergency assistance"]}

                    />
                </div>

            </div>

            <div>
                <div className="flex flex-col items-center p-10 ">
                    <h1 className="md:text-4xl text-3xl font-semibold text-center font-secondary">Success Stories</h1>
                    <p className="text-2xl text-center  p-5 mb-5">Real stories of transformation and hope</p>
                </div>
                <div className="md:flex grid md:justify-center items-center gap-8  w-full  m-5 mb-10">
                    {SuccessStories.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center  bg-gray-200 p-6 shadow-md md:w-100 w-60 md:h-80 text-center rounded-xl m-5" >
                            <div className="text-blue-600 mb-3 border-2 rounded-full p-5 bg-blue-100">
                                {item.logo}
                            </div>
                            <h2 className="md:text-2xl text-xl font-semibold text-gray-800 font-secondary">{item.heading}</h2>
                            <p className="text-gray-600 text-lg text-center mt-2">{item.content}</p>
                            <p className="text-blue-600 font-medium text-center mt-2 font-poppins   ">{item.year}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full px-4 py-20 bg-blue-600  text-center flex flex-col items-center">
                <h1 className="text-2xl md:text-4xl text-white font-semibold mb-4 font-secondary">Join Us in Our Mission</h1>
                <p className="text-base md:text-xl text-white  mb-6">
                   Your support helps us continue these vital programs and expand our reach to help more children.
                </p>
                <div className="flex flex-col md:flex-row gap-4 ">
                    <Link to="/donate"> <button className="px-10 py-3 bg-white text-blue-700 font-poppins hover:cursor-pointer  rounded-lg font-medium">
                      Support Our Programs
                    </button></Link> 
                      <Link to="/contact"><button className="px-10 py-3  hover:bg-white text-white border-2 font-poppins hover:text-blue-700 hover:cursor-pointer border-white rounded-lg font-medium">
                        Become a Volunteer
                    </button></Link>
                </div>
            </div>
        </section>


    );
};

export default Work;
