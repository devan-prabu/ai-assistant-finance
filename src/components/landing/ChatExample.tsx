
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
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* WhatsApp Header */}
                  <div className="bg-green-600 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm">datatalks.live</h3>
                        <p className="text-green-100 text-xs">Online</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Phone className="w-5 h-5 text-white" />
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="flex-1 bg-gray-50 px-4 py-6 space-y-4 min-h-[500px]">
                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="bg-green-500 text-white rounded-2xl rounded-br-md px-4 py-3 max-w-xs">
                        <p className="text-sm">How were my bakery's sales last week?</p>
                        <div className="text-xs text-green-100 mt-1 text-right">2:14 PM</div>
                      </div>
                    </div>
                    
                    {/* AI Response */}
                    <div className="flex justify-start">
                      <div className="bg-white border rounded-2xl rounded-bl-md px-4 py-3 max-w-xs shadow-sm">
                        <p className="text-sm text-gray-800">
                          You made $4,320 in total sales, up 12% from the previous week. 🍰
                        </p>
                        <p className="text-sm text-gray-800 mt-2">
                          Your best-selling items were chocolate croissants and birthday cakes.
                        </p>
                        <div className="text-xs text-gray-500 mt-1">2:14 PM</div>
                      </div>
                    </div>
                    
                    {/* User Follow-up */}
                    <div className="flex justify-end">
                      <div className="bg-green-500 text-white rounded-2xl rounded-br-md px-4 py-3 max-w-xs">
                        <p className="text-sm">What about my expenses?</p>
                        <div className="text-xs text-green-100 mt-1 text-right">2:15 PM</div>
                      </div>
                    </div>
                    
                    {/* AI Response 2 */}
                    <div className="flex justify-start">
                      <div className="bg-white border rounded-2xl rounded-bl-md px-4 py-3 max-w-xs shadow-sm">
                        <p className="text-sm text-gray-800">
                          Your total expenses were $2,890 last week. Main costs: ingredients ($1,200), rent ($800), utilities ($390).
                        </p>
                        <p className="text-sm text-gray-800 mt-2">
                          Net profit: $1,430 💰
                        </p>
                        <div className="text-xs text-gray-500 mt-1">2:15 PM</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Input Area */}
                  <div className="bg-white border-t px-4 py-3 flex items-center gap-3">
                    <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                      <p className="text-sm text-gray-500">Type a message...</p>
                    </div>
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20"></div>
            </div>
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
