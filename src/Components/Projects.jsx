
import { projectData, CompletedProjectsData, upcomingProjectsData } from '../assets/Images/Assets.jsx';
import { FaCalendarAlt, FaRegLightbulb } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { LuClock3 } from "react-icons/lu";

import { Link } from 'react-router-dom';

// Completed Projects 

const CompletedProjectCard = ({ image, title, description, completedDate, budget, highlight }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full">
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="p-4">
        <div className='flex justify-center'>
          <span className="flex gap-5 bg-green-100 text-green-600 text-sm font-poppins px-3 py-1 rounded-full mb-2">
            <TiTick size={20} /> Completed
          </span>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 font-secondary">{title}</h3>
        <p className="text-gray-600 text-base mt-1 mb-3 font-primary">{description}</p>
        <div className='flex flex-col justify-between '>
          <div className="text-sm font-primary text-gray-600 mb-1">
            <strong>Completed:</strong> {completedDate}
          </div>
          <div className="text-sm font-primary text-gray-600 mb-3">
            <strong>Budget:</strong> ${budget.toLocaleString()}
          </div>
        </div>
        <div className="flex gap-5 bg-blue-50 text-blue-700 font-poppins text-sm rounded-md px-4 py-2">
          <FaRegLightbulb size={20} /> {highlight}
        </div>
      </div>
    </div>
  );
};


// Current Projects 

const Projects = () => {

  const DonationCard = ({ image, tags, title, description, progress, raised, goal, dueDate }) => {
    const progressPercent = (progress * 100).toFixed(0);

    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden w-full">
        <img src={image} alt={title} className="h-70 w-full object-cover" />

        <div className="p-4 ">
          <div className="flex flex-wrap justify-between  gap-2 mb-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={`text-sm font-medium px-2 py-1 font-poppins rounded-full ${tag === 'High Priority' ? 'bg-red-100 text-red-600' : 'bg-gray-200 text-gray-600'
                  }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 font-secondary">{title}</h3>
          <p className="text-gray-600 text-lg mt-1 mb-3 font-primary">{description}</p>

          <div className="mb-2 text-sm font-medium text-gray-600">Progress: {progressPercent}%</div>
          <div className="w-full h-2 bg-gray-200 rounded-full mb-2">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          <div className="flex justify-end text-sm font-medium gap-2 text-gray-700 mb-4">
            <span>${raised.toLocaleString()}</span>
            <span>of ${goal.toLocaleString()}</span>
          </div>

          <div className="flex  justify-between items-center">
            <p className=" flex text-sm text-gray-500 gap-2"><FaCalendarAlt size={18} /> Due: {dueDate}</p>
             <Link to="/donate"> <button className="bg-blue-600 font-poppins text-white text-sm px-4 py-2 rounded hover:cursor-pointer hover:bg-blue-700">
              Donate Now
            </button></Link>
          </div>
        </div>
      </div>

    );
  };


  // Upcoming Projects 


  const UpcomingProjectCard = ({ title, description, cost, startDate, duration }) => {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-xl shadow p-6 flex flex-col justify-between">
        <div>
          <span className="flex items-center text-blue-600 text-sm font-medium mb-2">
            <LuClock3 size={20} className="mr-2" /> Upcoming
          </span>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 font-secondary">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="text-sm text-gray-600 space-y-1">
            <p><span className="font-semibold">Estimated Cost:</span> ${cost.toLocaleString()}</p>
            <p><span className="font-semibold">Planned Start:</span> {startDate}</p>
            <p><span className="font-semibold">Duration:</span> {duration}</p>
          </div>
        </div>
        <button className="mt-5 bg-blue-600 text-white text-sm font-medium px-4 font-poppins py-2 rounded hover:cursor-pointer hover:bg-blue-700">
          Pre-register Interest
        </button>
      </div>
    );
  };

  return (
    <section>
      {/* Hero Section */}
      <div className="flex flex-col items-center bg-gradient-to-r from-[#16A34B] to-[#2563E9] mt-15 w-full p-10">
        <h1 className="md:text-4xl text-2xl font-bold font-secondary mb-3">Our Projects</h1>
        <p className="text-2xl md:w-4xl text-center  text-gray-700 m-3">
          Building a better future through strategic projects that enhance our facilities, expand
          our programs, and improve the lives of children in our care.
        </p>
      </div>

      {/* Section Title */}

      <div className="flex flex-col items-center m-3">
        <h1 className="md:text-4xl text-2xl font-bold m-5 font-secondary">Current Projects</h1>
        <p className="text-2xl font-medium text-gray-700 text-center">Projects currently in progress that need your support</p>
      </div>

      {/* Project Cards Grid */}

      <div className="px-5 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projectData.map((project, index) => (
          <DonationCard key={index} {...project} />
        ))}
      </div>

      {/* Completed Projects  */}

      <div className=' bg-gray-100' >
        <div className='flex flex-col mt-10 items-center'>
          <h1 className='p-5 text-4xl font-semibold font-secondary text-center'>Completed Projects</h1>
          <p className='p-5 text-2xl font-normal text-gray-700 text-center'>Recent successes made possible by our supporters</p>
        </div>


        <div className="px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {CompletedProjectsData.map((project, index) => (
            <CompletedProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      {/* Upcoming Projects Section */}

      <div className="flex flex-col mt-16 items-center bg-white">
        <h1 className="text-4xl font-semibold p-5 font-secondary text-center">Upcoming Projects</h1>
        <p className="text-2xl font-normal text-gray-700 text-center mb-6">
          Future initiatives we're planning to launch
        </p>

        <div className="px-5 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {upcomingProjectsData.map((project, index) => (
            <UpcomingProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      <div className="w-full px-4 py-20 bg-[#16A34B] text-center flex flex-col items-center ">
        <h1 className="text-2xl md:text-4xl text-white font-semibold mb-4 font-secondary">Help Us Build a Better Future</h1>
        <p className="text-base md:text-xl text-white md:max-w-3xl  mb-6">
         Every project we complete brings us closer to providing the best possible environment for children to grow, learn, and thrive. Your support makes it all possible.
        </p>
        <div className="flex flex-col md:flex-row gap-4  ">
          <Link to="/donate"><button className="px-12 py-3 bg-white font-poppins text-[#16a34b] hover:bg-gray-200 hover:cursor-pointer rounded-lg font-medium">
          Fund a Project
          </button></Link>
          <Link to="/contact"><button className="px-10 py-3  hover:bg-white font-poppins hover:text-[#16A34B] text-white border-2 hover:cursor-pointer border-white rounded-lg font-medium">
          Corporate Partnership
          </button></Link>
        </div>
      </div>

    </section>
  );
};


export default Projects;
