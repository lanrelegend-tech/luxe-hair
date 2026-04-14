import LandingPage from "./components/LandingPage";
import Reviews from "./components/Reviews";
import HairStylist from "./components/HairStylist";
import Services from "./components/Services";

export const metadata = {
  title: "Luxe Hair | Luxury Salon London",
  description:
    "Premium luxury hair salon in London offering precision cuts, styling, and online booking.",
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <LandingPage />
      <HairStylist />
      <Services />
      <Reviews />
    </main>
  );
}