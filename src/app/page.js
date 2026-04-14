import Image from "next/image";
import LandingPage from "./components/LandingPage";
import Reviews from "./components/Reviews";
import HairStylist from "./components/HairStylist";
import Services from "./components/Services";


export default function Home() {
  return (
    <div className="">
      <LandingPage/>
      <HairStylist/>
      <Services/>
      <Reviews/>
    </div>
    
  );
}
