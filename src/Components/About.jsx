import AboutImg from "../assets/Images/About.jpg";
import { CoreData, Impact, journeyData, TeamData } from "../assets/Images/Assets";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      {/* Header */}
      <div className="w-full py-10 bg-linear-to-r pt-40 md:pb-20 from-blue-600 to-[#7C23CE] text-center flex flex-col items-center">
        <h1 className="text-2xl md:text-5xl text-white font-semibold font-secondary mb-4">
          About Hope Haven
        </h1>
        <p className="text-base font-primary md:text-xl text-white mb-6">
          For over 25 years, we have been a beacon of hope for children in need,
          providing love, care, education, and pathways to brighter futures.
        </p>
      </div>

      {/* Mission and Vision */}

      <div className="md:flex md:m-20 gap-10">
        <div className="md:w-1/2 m-5">
          <img src={AboutImg} alt="About" className="md:h-100 rounded-xl" />
        </div>

        <div className="md:w-1/2 md:flex md:flex-col m-5 gap-10">
          <div>
            <h1 className="md:text-4xl font-semibold text-2xl font-secondary md:text-left text-center my-2">
              Our Mission
            </h1>
            <p className="text-base md:text-xl font-primary text-gray-600">
              To provide a safe, nurturing environment where every child can grow,
              learn, and thrive. We are committed to protecting children's rights,
              promoting their well-being, and creating pathways to permanent,
              loving families.
            </p>
          </div>

          <div>
            <h1 className="md:text-4xl font-semibold font-secondary text-2xl my-2 md:text-left text-center">
              Our Vision
            </h1>
            <p className="text-base md:text-xl font-primary text-gray-600">
              A world where every child has access to love, care, education, and the
              opportunity to reach their full potential in a supportive family
              environment.
            </p>
          </div>
        </div>
      </div>

      {/* Our Core Values */}

      <div className="bg-gray-200">
        <div className="flex flex-col items-center">
          <h1 className="md:text-4xl font-secondary font-semibold text-2xl my-5 md:mt-10">
            Our Core Values
          </h1>
          <p className="text-base  md:text-xl text-gray-600">
            The principles that guide everything we do
          </p>
        </div>

        <div className="md:flex md:flex-wrap grid  justify-center gap-8 p-8 w-full">
          {CoreData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white p-6 shadow-md md:w-100 text-center rounded-xl"
            >
              <div className="flex items-center justify-center gap-5">
                <div className="inline-block text-blue-600 mb-3 border-2 rounded-xl p-2 bg-blue-100">
                  {item.logo}
                </div>
                <h2 className="text-2xl font-bold font-secondary text-gray-800">{item.title}</h2>
              </div>
              <p className="text-gray-600 text-center font-extra text-lg mt-2">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Journey Timeline */}

      <div className="bg-gray-200 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold font-secondary  mb-2">Our Journey</h1>
          <p className="text-base md:text-xl font-primary text-gray-600">
            Milestones in our mission to help children
          </p>
        </div>

        {/* Timeline */}

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-400 z-0"></div>

          <div className="flex flex-col space-y-24 relative z-10">
            {journeyData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div className="grid md:grid-cols-3 items-center gap-8 w-full">

                  {/* Left Card */}
                  {isLeft ? (
                    <div className="hidden md:block text-right col-span-1">
                      <div className="bg-white p-6 rounded-xl shadow-md font-secondary max-w-md ml-auto">
                        <h3 className="text-blue-600 font-bold text-xl">{item.year}</h3>
                        <h4 className="font-semibold text-gray-800 text-md ">{item.title}</h4>
                        <p className="text-gray-600 text-base mt-1 ">{item.description}</p>
                      </div>
                    </div>
                  ) : <div></div>}

                  {/* Center Icon with line */}
                  <div className="flex flex-col items-center justify-center col-span-1 relative">
                    <div className="absolute h-full w-1 bg-blue-400 left-1/2 transform -translate-x-1/2 z-0"></div>
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center z-10">
                      {item.icon}
                    </div>
                  </div>

                  {/* Right Card */}
                  {!isLeft ? (
                    <div className="hidden md:block text-left col-span-1">
                      <div className="bg-white p-6 rounded-xl shadow-md font-secondary max-w-md">
                        <h3 className="text-blue-600 font-bold text-xl">{item.year}</h3>
                        <h4 className="font-semibold text-gray-800 text-md">{item.title}</h4>
                        <p className="text-gray-600 text-base mt-1">{item.description}</p>
                      </div>
                    </div>
                  ) : <div></div>}

                  {/* Mobile stacked card */}
                  <div className="md:hidden w-full text-center">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-blue-600 font-bold text-lg">{item.year}</h3>
                      <h4 className="font-semibold text-gray-800 text-md">{item.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>

              );
            })}


          </div>
        </div>
      </div>
      {/* Our LeaderShip Team  */}

      <div className="flex flex-col items-center m-10">
        <div className="flex  flex-col items-center ">
          <h1 className="md:text-4xl text-2xl font-semibold mb-2 font-secondary ">Our Leadership Team</h1>
          <p className=" text-xl text-gray-600">Experienced professionals dedicated to child welfare</p>
        </div>
        <div className="md:flex grid justify-center gap-8 p-8 w-full m-2">
          {TeamData.map((item, index) => (
            <div key={index}
              className="flex flex-col items-center justify-center bg-gray-200 p-6 shadow-md w-80 text-center rounded-xl"
            >
              <img src={item.image} alt={item.name}
                className="w-60 h-70 rounded-xl object-cover"
              />
              <h2 className="text-xl font-bold font-secondary m-1">{item.name}</h2>
              <p className="text-sm text-gray-500  font-medium mb-3 font-poppins">{item.role}</p>
              <p className="text-gray-600 text-base font-normal font-extra">{item.about}</p>
            </div>

          ))}

        </div>
      </div>

      <div className="flex flex-col items-center text-center bg-blue-600 text-white p-10">
        <div className="m-3">
          <h1 className="text-4xl font-semibold font-secondary">Our Impact by Numbers</h1>
          <p className="text-2xl text-gray-700 mt-2">The difference we've made over the years</p>
        </div>
        <div className="md:flex md:flex-wrap grid  justify-center gap-8 p-8 w-full">
          {Impact.map((item, index) => (
            <div key={index}
            className="flex flex-col items-center justify-center bg-white rounded-xl   p-6 shadow-md w-60 ">
            <h2 className="text-2xl font-bold text-gray-800 font-secondary">{item.string}</h2>
            <p className="text-gray-600 text-center  mt-2 font-extra">{item.purpose}</p>
            </div>
           
          ))}

        </div>
      </div>

      <div className="w-full px-4 py-10 bg-white text-center flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl  font-semibold mb-4 font-secondary">Join Our Mission</h1>
        <p className="text-base md:text-xl md:w-3xl text-gray-700 mb-6 font-primary">Whether you're interested in adoption, volunteering, or supporting our programs, there are many ways to get involved and make a difference.
        </p>
        <div className="flex flex-col md:flex-row gap-4 ">
         <Link to="/contact"><button className="px-10 py-3 font-poppins bg-blue-700 text-white hover:bg-blue-800 hover:cursor-pointer rounded-lg font-medium">
           Contact Us
          </button></Link> 
          <Link to="/contact"><button className="px-10 py-3  hover:bg-blue-700 font-poppins hover:text-white border-3 text-blue-800 border-blue-700 hover:cursor-pointer  rounded-lg font-medium">
          Volunteer Today
          </button></Link>
        </div>
      </div>

    </section>
  );
};

export default About;
