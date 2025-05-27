
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WhySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Datatalks.live?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Natural language AI is changing accounting. It saves time and reduces errors 
            by automating routine tasks.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  The Future of Business Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-lg text-gray-700">
                  You ask a question as you would to a colleague, and get an immediate answer. 
                  Imagine getting weekly profit summaries, expense breakdowns, or cash-flow 
                  alerts without wading through spreadsheets.
                </CardDescription>
                <CardDescription className="text-lg text-gray-700">
                  That's the simplicity datatalks.live offers – clear, friendly financial 
                  answers on a platform you already use (WhatsApp).
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Turned on gray laptop computer" 
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <p className="text-sm font-semibold text-gray-900">Virtual Accountant</p>
              <p className="text-xs text-gray-600">In Your Pocket 📱</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
