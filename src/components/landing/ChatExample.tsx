
import { MessageSquare, Phone } from "lucide-react";

const ChatExample = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Financial Insights Through Natural Conversation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The example shows a realistic WhatsApp-style chat between a business owner and datatalks.live. 
            Simply ask questions and get instant financial answers.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Business owner using mobile device" 
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-10 rounded-2xl"></div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-green-600" />
                <span className="font-semibold text-green-800">Sugar Bloom Bakery Owner</span>
              </div>
              <p className="text-green-700">"How were my bakery's sales last week?"</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-blue-800">datatalks.live</span>
              </div>
              <p className="text-blue-700">
                "You made $4,320 in total sales, up 12% from the previous week. 🍰 
                Your best-selling items were chocolate croissants and birthday cakes."
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-gray-700 font-medium">
                This highlights our core value: get immediate financial insights via natural language 
                on WhatsApp, without hiring an accountant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatExample;
