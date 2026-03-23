import Studynotion from '../assets/InfoWorkImage/Studynotion.png'
import MovieRecommendor from '../assets/InfoWorkImage/MovieRecommendor.png'
import Communication from '../assets/InfoWorkImage/Communication.png'
import Zkp2 from '../assets/InfoWorkImage/Zkp2.png'
import Robotics  from '../assets/InfoWorkImage/Robotics.png'
import hotel  from '../assets/InfoWorkImage/hotel.jpeg'




export const InfoWorkData=[



    {
    title:"Hotel Management System",
    image:hotel,
    description:"Built a full hotel management system covering room booking, availability management, guest records, billing, and staff operations — all in one platform. This architecture directly transfers to dental appointment systems, restaurant reservation platforms, gym booking tools, and any service business that manages appointments and customer records. The core booking and scheduling engine alone saves businesses 10–15 hours of manual admin work per week.",
       tag: "MERN",
  live: "https://hotel-management-system-silk-sigma.vercel.app",
  github: "https://github.com/Ayushkhoke/Hotel-Management-System.git"
},
{
    title:"Full-stack EdTech SaaS platform — instructors earn, students learn, payments run automatically.",
    image:Studynotion,
    description:"Built a production-grade online learning platform from scratch — instructors can create, publish, and sell courses while students get a seamless learning experience. Features role-based access (admin, instructor, student), Razorpay payment integration, course progress tracking, and a scalable Node.js backend designed to handle real user load — not just a demo. This is the kind of system a growing EdTech startup would pay $15,000+ to build.",
     tag: "MERN",
  live: "https://studynotion3-eight.vercel.app",
  github: "https://github.com/Ayushkhoke/Studynotion3.git"
},
// {
//     title:"Zero Knowledge Proof",
//     image:Zkp2,
//     description:"This project implements a Zero-Knowledge Proof–based authentication system using blockchain to verify user identity without exposing passwords or sensitive data, leveraging cryptographic proofs and decentralized verification to eliminate traditional credential vulnerabilities while ensuring privacy, security, and tamper-resistant, trustless authentication.",
// },
{
    title:"MovieRecommendor System",
    image:MovieRecommendor,
    description:"Movie Recommender System is an AI-based application that suggests movies to users by analyzing movie content such as genre, keywords, and overview. It uses machine learning techniques like vectorization and cosine similarity to recommend movies similar to the one selected by the user.",
},




]