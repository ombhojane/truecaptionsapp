import { LandingNavbar } from "@/components/landing-navbar";
import { TrueCaptionsHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";

const LandingPage = () => {
  return ( 
    <div className="h-full ">
      <LandingNavbar />
      <TrueCaptionsHero />
      <LandingContent />
    </div>
   );
}
 
export default LandingPage;
