
import { TiTick } from "react-icons/ti";
import MissionPhoto from "../assets/Images/Mission.jpg";

import { data } from "../assets/Images/Assets.jsx";

import { FeedbackData } from "../assets/Images/Assets.jsx";
import { Link } from "react-router-dom";





const Home = () => {
  return (
    <div className="">
      {/* Large screens */}
      <section className="hidden md:flex w-full h-screen bg-[url('/home.png')] bg-cover bg-center items-center justify-center">
        <h1 className="text-white text-7xl font-medium text-center px-4 font-poppins leading-tight">
          Every Child Deserves a Loving <br />
          <span className="text-amber-300">Home</span>

        </h1>
      </section>

      {/* Small screens */}
      <section className="block md:hidden w-full h-screen">
        <div className="bg-[url('/mobilehome.png')] bg-cover bg-center h-full w-full flex items-center justify-center">
          <h1 className="text-white text-2xl  font-bold text-center px-4 leading-snug">
            Every Child Deserves a <br />
            <span className="text-amber-300">Loving Home</span>

          </h1>
        </div>
      </section>

      {/* Mission Stats */}
      <section className="md:flex md:flex-wrap grid justify-center gap-10 p-20 w-full  bg-gray-200 size-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-xl   p-6 shadow-md w-60"
          >
            <div className="text-blue-600 mb-3 border-2 rounded-full p-5 bg-blue-100">
              {item.logo}
            </div>
            <h2 className="text-2xl font-bold  text-gray-800">{item.string}</h2>
            <p className="text-gray-600 text-center font-extra mt-2">{item.purpose}</p>
          </div>
        ))}
      </section>

      {/* Our Mission Description */}

      <section className="md:flex p-8 md:m-10 bg-white">
        <div className="md:w-1/2 ">
          <h1 className="text-4xl font-medium md:font-semibold my-5 font-poppins">Our Mission</h1>
          <p className="text-lg font-secondary text-gray-700 mb-3">
            Hope Haven is dedicated to providing a safe, nurturing environment
            where children can grow, learn, and thrive. We believe every child
            deserves love, education, and the opportunity for a bright future.
          </p>
          <div className="flex flex-col gap-3 font-secondary text-lg mt-5">
            <div className="flex items-center gap-2">
              <TiTick size={24} /> Comprehensive healthcare and nutrition programs
            </div>
            <div className="flex items-center gap-2">
              <TiTick size={24} /> Quality education and skill development
            </div>
            <div className="flex items-center gap-2">
              <TiTick size={24} /> Loving adoption and family reunification services
            </div>
          </div>
        </div>
        <div className="flex md:w-1/2 justify-center mt-8 md:mt-0">
          <img
            src={MissionPhoto}
            alt="Mission"
            className="rounded-2xl "
          />
        </div>
      </section>

     
      {/* Feedback Section */}

      <section>
        <div className="bg-gray-200 flex flex-col justify-center items-center">
          <h1 className="md:text-4xl md:mt-15 text-3xl  font-medium m-5 md:font-semibold font-poppins">
            What People Say
          </h1>
          <p className="mx-5 md:text-3xl text-xl font-secondary">
            Hear from families, volunteers, and supporters who have experienced our impact
          </p>

          <div className="md:flex grid justify-center gap-8 p-8 w-full m-5 mb-10">
            {FeedbackData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white p-6 shadow-md w-80 text-center rounded-xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-30 h-30 rounded-full object-cover mb-4"
                />
                <h2 className="text-xl font-bold text-gray-800 font-primary">{item.name}</h2>
                <p className="text-sm text-gray-500 mb-1 font-medium font-poppins">{item.role}</p>
                <p className="text-gray-600 text-base font-normal font-extra">{item.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <div className="w-full px-4 py-10 bg-linear-to-r from-blue-600 to-[#7C23CE] text-center flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl text-white font-semibold mb-4 font-secondary">Ready to Make a Difference?</h1>
        <p className="text-base md:text-xl text-white font-primary mb-6">
          Join our mission to provide every child with the love, care, and opportunities they deserve.
        </p>
        <div className="flex flex-col md:flex-row gap-4 ">
            <Link to="/donate"><button className="px-10 py-3 bg-white font-poppins text-blue-700 hover:cursor-pointer  rounded-lg font-medium">
            Donate Today
          </button></Link>
         <Link to="/contact"> <button className="px-10 py-3  hover:bg-white font-poppins text-white border-2 hover:text-blue-700 hover:cursor-pointer border-white rounded-lg font-medium">
            Become a Volunteer
          </button></Link>
        </div>
      </div>

      <div className="w-full px-4 py-10 bg-[#111827] text-center flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl text-white font-semibold mb-4 font-secondary">Every Action Counts</h1>
        <p className="text-base md:text-xl text-white font-primary  mb-6">
          Whether through donations, volunteering, or spreading awareness, you can help change a child's life.
        </p>
        <div className="flex flex-col md:flex-row gap-4  ">
          <Link to="/contact"> <button className="px-12 py-3 font-poppins bg-blue-700 text-white hover:bg-blue-900 hover:cursor-pointer rounded-lg font-medium">
          Contact Us
          </button></Link>
          <Link to="/contact"> <button  className="px-10 py-3 font-poppins hover:bg-[#232c3f] text-white border-2 hover:cursor-pointer border-gray-700 rounded-lg font-medium">
            Learn About Adoption
          </button></Link>
        </div>
      </div>





    </div>
  );
};

export default Home;
