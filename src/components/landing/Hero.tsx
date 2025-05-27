
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Know Your Business.{" "}
            <span className="text-blue-600">No Accountant Required.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Get instant financial insights through natural language conversations on WhatsApp. 
            Connect your accounting software and ask questions in plain English.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              <MessageSquare className="mr-2 h-5 w-5" />
              Join Waitlist
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              See Demo
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-6 mx-auto max-w-sm">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-900">datatalks.live</span>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                <p className="text-sm text-gray-800">How were my bakery's sales last week?</p>
              </div>
              <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs ml-auto">
                <p className="text-sm">You made $4,320 in total sales, up 12% from the previous week. 🍰</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-200 rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
