import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaInstagram, FaPhoneAlt, FaYoutube, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactPage() {
  return (
    <div className="min-h-screen mt-15 md:mt-0 bg-gray-200 flex flex-col items-center justify-center p-6">
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 w-full max-w-6xl">
        
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 font-secondary">Send us a Message</h2>
          <form className="space-y-5 font-poppins">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" placeholder="Full Name *" className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Email Address *" className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <input type="text" placeholder="Phone Number" className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <select className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>General Inquiry</option>
              <option>Adoption Information</option>
              <option>Volunteer Opportunities</option>
              <option>Donation Questions</option>
              <option>Partnership Inquiry</option>
              <option>Media/Press Inquiry</option>
            </select>
            <textarea placeholder="Please tell us how we can help you..." className="border rounded-lg px-4 py-2 w-full h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <p className="text-sm text-gray-500">0/500 characters</p>
            <button type="submit"  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-full">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Side */}


        <div className="md:flex md:flex-row items-center  bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-5 text-center font-secondary">Contact Information</h2>
            <div className="space-y-4 font-poppins  ">
              <div className="flex items-start gap-5">
                <span className="bg-blue-100 text-blue-600 p-2 rounded-lg"><FaLocationDot size={20} /></span>
                <div>
                  <p className="font-semibold">Address</p>
                  <p>123 Nanjai Uthukuli<br />Erode - 638104.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <span className="bg-green-100 text-green-600 p-2 rounded-lg"><FaPhoneAlt size={20} /></span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+91 9876543210<br /><span className="text-gray-500">Mon-Fri 9:00 AM - 6:00 PM</span></p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <span className="bg-purple-100 text-purple-600 p-2 rounded-lg"><MdEmail size={20} /></span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p>lokifamily@gmail.com<br /><span className="text-gray-500">We'll respond within 24 hours</span></p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <span className="bg-orange-100 text-orange-600 p-2 rounded-lg"><FaClock size={20} /></span>
                <div>
                  <p className="font-semibold">Visit Hours</p>
                  <p>Mon - Fri: 9:00 AM - 5:00 PM<br />Sat: 10:00 AM - 2:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:w-1/4 md:flex-col  flex  mt-6 justify-center  lg:justify-center md:gap-10  ">
            <a href="https://www.linkedin.com/in/logapriyan-m/" className="link-btn text-blue-700 hover:text-blue-800"><FaLinkedin size={22} /></a>
            <a href="https://github.com/logapriyanm" className="link-btn text-gray-800 hover:text-black"><FaGithub size={22} /></a>
            <a href="https://www.instagram.com/distres_x.heart_/" className="link-btn text-pink-600 hover:text-pink-700"><FaInstagram size={22} /></a>
            <a href="https://www.youtube.com/@INFO_LOKI_TAMIL" className="link-btn text-red-600 hover:text-red-700"><FaYoutube size={22} /></a>
          </div>
        </div>

      </div>
    </div>
  );
}
