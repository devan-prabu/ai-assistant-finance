
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!isValidEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email: email.toLowerCase().trim() }]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already Registered",
            description: "This email is already on our waitlist. We'll notify you when datatalks.live is ready!",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Success!",
          description: "You've been added to our waitlist. We'll notify you when datatalks.live is ready!",
        });
        setEmail("");
      }
    } catch (error) {
      console.error('Error adding to waitlist:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get Early Access
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Ready to transform your workflow? Be the first in line. Join our waitlist now 
          and we'll notify you when datatalks.live is live. Empower your business to 
          understand its financials in minutes – no accountant required.
        </p>
        
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-white">Join the Waitlist</CardTitle>
            <CardDescription className="text-gray-300">
              Don't miss out on early access
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                required
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isLoading}
              >
                {isLoading ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            © 2024 datatalks.live. Transforming business intelligence through conversation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
