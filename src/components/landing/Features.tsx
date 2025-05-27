
import { MessageSquare, Search, Phone, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Language Queries",
      description: "Ask any question about revenue, expenses or cash flow in plain English on WhatsApp. No accounting jargon needed."
    },
    {
      icon: Search,
      title: "Multi-Platform Connectors",
      description: "Link your QuickBooks, Xero, Zoho Books, etc. accounts. datatalks.live pulls real-time data from your ledgers."
    },
    {
      icon: Phone,
      title: "Updates from Your Favorite Messaging App",
      description: "Get sales, cash flow, and business performance updates right from WhatsApp – anytime, anywhere."
    },
    {
      icon: Users,
      title: "Secure & Private",
      description: "All queries are read-only and encrypted end-to-end. Your financial data stays safe with 24/7 clear answers."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored for small businesses to simplify your financial workflows – 
            saving time, avoiding errors, and helping you stay in control.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
