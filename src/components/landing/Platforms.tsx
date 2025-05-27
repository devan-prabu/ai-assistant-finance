
import { Badge } from "@/components/ui/badge";

const Platforms = () => {
  const platforms = [
    "QuickBooks",
    "Xero", 
    "Zoho Books",
    "FreshBooks",
    "Wave",
    "Sage"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Supported Platforms
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Datatalks.live works with popular accounting systems. Connect in minutes 
              and see your financial data come alive in conversation. Each integration 
              is built to be secure and reliable.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {platforms.map((platform, index) => (
                <Badge key={index} variant="secondary" className="text-lg px-4 py-2">
                  {platform}
                </Badge>
              ))}
            </div>
            
            <p className="text-gray-600">
              Connect your existing accounting software and start getting insights 
              through natural conversation immediately.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Person using MacBook Pro" 
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-transparent opacity-20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
