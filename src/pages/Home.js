import React, {useState} from 'react';
import { homeObjOne,  } from '../components/Data';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar'
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar'
 
 const Home = () => {
     const[isOpen, setIsOpen] = useState(false);

     const toggle = () => {
         setIsOpen(!isOpen);
     };

   return (
     <>
     <Sidebar isOpen={isOpen} toggle={toggle} />
     <Navbar toggle={toggle} />
     <Hero />
     <InfoSection {...homeObjOne}/>
     <Projects />
     
     </>
   );
 };
 
 export default Home