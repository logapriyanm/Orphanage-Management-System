// Icons
import { FaChildren, FaBookOpen ,FaComputer} from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaRegHeart, FaHandHoldingHeart, FaHeart, FaHome ,FaGraduationCap,FaClinicMedical } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { RiCommunityFill, RiPlantFill } from "react-icons/ri";
import { MdFoundation } from "react-icons/md";
import { VscTools } from "react-icons/vsc";

// Feedback Images
import Profile1 from "./Profile1.jpg";
import Profile2 from "./profile2.jpg";
import Profile3 from "./Profile3.jpg";

// Leadership team Images
import Image1 from "./image1.jpg";
import Image3 from "./image3.jpg";

// Our Work Impact Data Icons
import { MdPeopleAlt } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { RiCommunityLine } from "react-icons/ri";
// import { LiaYandexInternational } from "react-icons/lia";

// Current Project Images

import Construction from "./Construction.jpg";
import Medical from "./medical.jpg";
import PlayGround from "./Playground.jpg";
import Solar from "./Solar.jpg";


// Completed Projects Images

import Kitchen from "./Kitchen.jpg";
import Computer from "./Computer.jpg";
import Water from "./Water.jpg";



export const data = [
  {
    logo: <FaChildren />,
    string: "150+",
    purpose: "Children Helped",
  },
  {
    logo: <SlCalender size={30} />,
    string: "25+",
    purpose: "Years of Service",
  },
  {
    logo: <FaRegHeart size={30} />,
    string: "500+",
    purpose: "Families United",
  },
  {
    logo: <FaHandHoldingHeart size={30} />,
    string: "$2M+",
    purpose: "Funds Raised",
  },
];

// Feedback data Home
export const FeedbackData = [
  {
    image: Profile1,
    name: "Jon Snow",
    role: "Adaptive Parent",
    feedback:
      "Hope Haven made our adoption journey so smooth and caring. They truly care about matching children with the right families.",
  },
  {
    image: Profile2,
    name: "JohnWick",
    role: "Volunteer",
    feedback:
      "Volunteering here has been incredibly rewarding. The staff is dedicated and the children are amazing.",
  },
  {
    image: Profile3,
    name: "Tony Stark",
    role: "Donor",
    feedback:
      "I have been donating for 10 years. It is wonderful to see how my contributions help these children thrive.",
  },
];

// About page Core Values


export const CoreData = [
  {
    logo: <FaHeart size={30} />,
    title: "Love & Compassion",
    content:
      "Every child deserves to feel loved and valued. We create an environment where children experience unconditional care.",
  },
  {
    logo: <FaBookOpen size={30} />,
    title: "Education First",
    content:
      "We believe education is the key to breaking the cycle of poverty and creating opportunities for a brighter future.",
  },
  {
    logo: <FaHome size={30} />,
    title: "Family Unity",
    content:
      "Whenever possible, we work to reunite children with their families or find them loving adoptive homes.",
  },
  {
    logo: <IoShieldCheckmark size={30} />,
    title: "Integrity & Transparency",
    content:
      "We operate with the highest ethical standards and maintain complete transparency in all our operations.",
  },
  {
    logo: <RiCommunityFill size={30} />,
    title: "Community Partnership",
    content:
      "We work closely with local communities, schools, and organizations to provide comprehensive support.",
  },
  {
    logo: <RiPlantFill size={30} />,
    title: "Sustainable Impact",
    content: "Our programs are designed to create lasting positive change that extends beyond our immediate care.",
  },
];

export const journeyData = [
  {
    year: "1998",
    title: "Foundation Established",
    description: "CHope Haven was founded with a mission to provide care for orphaned and abandoned children.",
    icon:<MdFoundation/>,
  },
  {
    year: "2003",
    title: "Education Program Launch",
    description: "Started our comprehensive education program with dedicated teachers and modern facilities.",
    icon:<FaGraduationCap/>,
  },
  {
    year: "2008",
    title: "Medical Center Opens",
    description: "Opened our on-site medical facility to provide complete healthcare services.",
    icon:<FaClinicMedical/>,
  },
  {
    year: "2015",
    title: "500th Successful Adoption",
    description: "Celebrated our 500th successful adoption, uniting children with loving families.",
    icon:<FaHeart/>,
  },
  {
    year: "2020 ",
    title: "Digital Learning Initiative",
    description: "Launched digital learning programs to ensure education continuity during challenging times.",
    icon:<FaComputer/>,
  },
  {
    year: "2025 - Present ",
    title: "Expansion Project",
    description: "Currently expanding facilities to serve 300+ children with new educational and recreational areas.",
    icon:<VscTools />
    
  },
];


// About Page LeaderShip Team Data

export const TeamData = [
  {
    image: Image1,
    name: "Dr. Sarah Mitchell",
    role: "Executive Director",
    about:
      "25+ years experience in child welfare and nonprofit management. Dedicated to creating lasting positive change in children's lives.",
      education : "PhD in Child Development, Harvard University",
  },
  {
    image: Profile1,
    name: "Michael Rodriguez",
    role: "Program Director",
    about:
      "Former educator with 15 years of experience developing programs that support child development and family reunification.",
      education : "M.Ed in Educational Leadership",
  },
  {
    image: Image3,
    name: "Dr. Lisa Chen",
    role: "Medical Director",
    about:
      "Pediatrician specializing in child healthcare and development. Ensures comprehensive medical care for all children.",
      education : "MD Pediatrics, Johns Hopkins University",
  },
  {
    image: Profile2,
    name: "James Thompson",
    role: "Adoption Services Manager",
    about:
      "Licensed social worker with extensive experience in family assessment and adoption placement services.",
      education : "MSW in Family and Child Welfare",
  },
  
];

// Our Impact By Numbers

export const Impact = [
  {
    
    string: "750+",
    purpose: "Children Helped",
  },
  {
    
    string: "500+",
    purpose: "Successful Adoptions",
  },
  {
    
    string: "25+",
    purpose: "Years of Service",
  },
  {
   
    string: "95%",
    purpose: "Satisfaction Rate",
  },
];


// Current Projects Data



export const projectData = [
  {
    image: Construction,
    tags: ['High Priority', 'Infrastructure'],
    title: 'New Educational Wing Construction',
    description: 'Building a modern 3-story educational facility with 12 classrooms, computer lab, and library.',
    progress: 0.75,
    raised: 375000,
    goal: 500000,
    dueDate: '6/30/2024',
  },
  {
    image: Medical,
    tags: ['High Priority', 'Healthcare'],
    title: 'Medical Equipment Upgrade',
    description: 'Upgrading our medical facility with new equipment for better healthcare services.',
    progress: 0.6,
    raised: 90000,
    goal: 150000, 
    dueDate: '5/15/2024',
  },
  {
    image: PlayGround,
    tags: ['Medium Priority', 'Recreation'],
    title: 'Playground & Recreation Area',
    description: 'Creating a safe and fun playground area with modern equipment for children to play and exercise.',
    progress: 0.85,
    raised: 90000,
    goal: 150000, 
    dueDate: '5/15/2024',
  },
  {
    image: Solar,
    tags: ['Medium Priority', 'Sustainability'],
    title: 'Solar Power Installation',
    description: 'Installing solar panels to reduce energy costs and create a sustainable power source.',
    progress: 0.6,
    raised: 80000,
    goal:200000, 
    dueDate: '8/31/2024',
  },
];


// Our Work Impact

export const impactData = [
    {
        logo: <MdPeopleAlt size={30} />,
        string: "150+",
        purpose: "Children Currently in Care",
        about:"Providing daily care and support",
    },
    {
        logo: <FaRegHeart size={30} />,
        string: "45",
        purpose: "Successful Adoptions This Year",
         about:"Children united with forever families",
    },
    
    {
        logo: <GiGraduateCap size={30} />,
        string: "85%",
        purpose: "Educational Success Rate",
         about:"Children completing primary education",
    },
    
    {
        logo: <RiCommunityLine size={30} />,
        string: "300+",
        purpose: "Community Families Supported",
         about:"Through our outreach programs",
    },
    
];


export const SuccessStories = [
    {
        logo: <GiGraduateCap size={30} />,
        heading: "Maria's Education Journey",
        content: "From struggling with basic reading to graduating valedictorian, Maria's story shows the power of dedicated education support.",
        year:"2019 - 2023",
    },
    {
        logo: <FaRegHeart size={30} />,
        heading: "The Johnson Family Adoption",
        content: "After 3 years of careful matching and support, little Alex found his forever home with the Johnson family.",
        year:"Completed 2023",
    },
    
    {
        logo: <VscTools size={30} />,
        heading: "Carlos' Carpentry Skills",
        content: "Through our vocational program, Carlos learned carpentry and now runs his own successful furniture business.",
         year:"2020 - Present",
    },
    
];


// Completed Projects 



export const CompletedProjectsData = [
  {
    image: Kitchen,
    title: 'Kitchen & Dining Hall Renovation',
    description: 'Complete renovation of kitchen facilities and dining area to serve 200+ children daily.',
    completedDate: '12/15/2023',
    budget: 120000,
    highlight: 'Now serving 250+ nutritious meals daily',
  },
  {
    image: Computer,
    title: 'Computer Learning Center',
    description: 'Established a state-of-the-art computer lab with 30 workstations for digital literacy.',
    completedDate: '9/20/2023',
    budget: 85000,
    highlight: '150+ children learning digital skills',
  },
  {
    image: Water,
    title: 'Water Purification System',
    description: 'Installed advanced water purification system ensuring clean drinking water for all residents.',
    completedDate: '6/10/2023',
    budget: 45000,
    highlight: 'Clean water access for 300+ people',
  },
];


// Projects page Upcoming Projects

export const upcomingProjectsData = [
  {
    title: "Arts & Crafts Studio",
    description: "Creating a dedicated space for artistic expression and creative learning.",
    cost: 60000,
    startDate: "7/1/2024",
    duration: "3 months"
  },
  {
    title: "Organic Garden Project",
    description: "Establishing an organic vegetable garden for fresh produce and agricultural education.",
    cost: 25000,
    startDate: "9/1/2024",
    duration: "6 months"
  },
  {
    title: "Vocational Training Workshop",
    description: "Building workshops for carpentry, tailoring, and other vocational skills training.",
    cost: 180000,
    startDate: "12/1/2024",
    duration: "8 months"
  }
];
