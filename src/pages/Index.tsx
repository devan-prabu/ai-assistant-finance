
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import ChatExample from "@/components/landing/ChatExample";
import Platforms from "@/components/landing/Platforms";
import WhySection from "@/components/landing/WhySection";
import Waitlist from "@/components/landing/Waitlist";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ChatExample />
      <Features />
      <Platforms />
      <WhySection />
      <Waitlist />
    </div>
  );
};

export default Index;
