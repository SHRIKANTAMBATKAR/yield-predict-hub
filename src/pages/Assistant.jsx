import { useState } from "react";
import { Send, Mic, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const Assistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Namaste! Main FarmGPT hoon, aapka AI kheti saathi. Main aapki madad kar sakta hoon:\n\n• Fasal ki sehat aur yield prediction\n• Paani aur sinchai ki salah\n• Mausam ki jankari\n• Bima claim ki process\n• Beej aur khad ki salah\n\nAap Hindi ya English mein baat kar sakte hain. Kya main aapki kuch madad kar sakta hoon?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const simulateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("yield") || lowerMessage.includes("utpadan") || lowerMessage.includes("fasal")) {
      return "Aapki fasal ka predicted yield dashboard mein dekh sakte hain. Is season mein:\n\n• Rice: 4,200 kg/ha expected\n• NDVI index: 0.75 (healthy)\n• Comparison: 12% better than last year\n\nYield badhane ke liye:\n1. Timely irrigation maintain karein\n2. Recommended fertilizer dose follow karein\n3. Pest monitoring regularly karein";
    }
    
    if (lowerMessage.includes("paani") || lowerMessage.includes("water") || lowerMessage.includes("irrigation")) {
      return "Paani management ke liye advice:\n\n• Current soil moisture: 68%\n• Next irrigation: 2 days mein\n• Best time: Subah 6-8 AM ya shaam 5-7 PM\n\nWeather forecast:\n• Light rain expected in 3 days\n• Temperature: 28-35°C\n\nTip: Drip irrigation se 40% paani bach sakta hai!";
    }
    
    if (lowerMessage.includes("claim") || lowerMessage.includes("bima") || lowerMessage.includes("insurance")) {
      return "Insurance claim file karne ki process:\n\n1. Dashboard pe Login karein\n2. 'Reports' section mein jaayein\n3. Apna farm select karein\n4. 'Generate Claim Report' button click karein\n5. Documents upload karein\n6. Submit karein\n\nAapka claim blockchain par verify hoga. Status real-time track kar sakte hain.\n\nKoi problem ho to helpline: 1800-XXX-XXXX";
    }
    
    if (lowerMessage.includes("health") || lowerMessage.includes("sehat") || lowerMessage.includes("disease")) {
      return "Fasal ki health monitoring:\n\n• Current health score: 85% (Good)\n• NDVI: 0.75 (Healthy range)\n• Stress factors: Minor water stress in zone B\n\nRecommendations:\n1. Scout for pests regularly\n2. Check for yellow leaves\n3. Maintain proper spacing\n4. Use organic pest control\n\nKoi suspicious symptoms dikhe to turant photo share karein!";
    }
    
    if (lowerMessage.includes("weather") || lowerMessage.includes("mausam")) {
      return "Agle 7 din ka weather forecast:\n\n📅 Today: Sunny, 32°C\n📅 Tomorrow: Partly cloudy, 30°C, 20% rain\n📅 Day 3: Light rain, 28°C\n📅 Days 4-7: Clear skies, 29-33°C\n\n⚠️ Advisory: Heat wave expected. Extra paani ka dhyan rakhein.\n\nDetailed forecast dashboard mein available hai.";
    }
    
    if (lowerMessage.includes("price") || lowerMessage.includes("market") || lowerMessage.includes("mandi")) {
      return "Market price information:\n\n• Rice (Pune mandi): ₹2,100/quintal\n• Wheat: ₹2,350/quintal\n• Cotton: ₹6,800/quintal\n\nBest selling time: After 15 days (price may increase 8%)\n\nMSP Information:\n• Rice: ₹2,183/quintal\n• Wheat: ₹2,275/quintal\n\nNearest mandi: 12 km away";
    }

    return "Main aapki madad ke liye yahan hoon! Aap mujhse pooch sakte hain:\n\n• Yield prediction\n• Irrigation advice (paani)\n• Crop health (fasal ki sehat)\n• Insurance claims (bima)\n• Weather forecast (mausam)\n• Market prices (mandi bhav)\n\nKoi bhi sawal ho to beshak puchiye!";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: simulateAIResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const exampleQuestions = [
    "Meri fasal ka yield kya hai?",
    "Paani kab dena chahiye?",
    "Claim kaise file karu?",
    "Weather forecast kya hai?",
    "Fasal ki health kaisi hai?",
    "Market price kya chal raha hai?",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                <Bot className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold mb-2">FarmGPT Assistant</h1>
              <p className="text-muted-foreground">Your AI farming companion - Ask anything in Hindi or English</p>
            </div>

            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle>Chat with FarmGPT</CardTitle>
                <CardDescription>Get instant advice on crops, weather, irrigation, and claims</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[500px] px-6">
                  <div className="space-y-6 py-6">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`flex items-start space-x-3 max-w-[85%]`}>
                          {message.role === "assistant" && (
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                              <Bot className="h-5 w-5 text-primary-foreground" />
                            </div>
                          )}
                          <div
                            className={`rounded-lg px-4 py-3 ${
                              message.role === "user"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                            }`}
                          >
                            <p className="text-sm whitespace-pre-line">{message.content}</p>
                            <p className="text-xs opacity-70 mt-2">
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                          {message.role === "user" && (
                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                              <User className="h-5 w-5 text-secondary-foreground" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                            <Bot className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div className="bg-muted rounded-lg px-4 py-3">
                            <div className="flex space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                              <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                              <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                <div className="border-t p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {exampleQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setInput(question);
                          setTimeout(handleSend, 100);
                        }}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Mic className="h-5 w-5" />
                    </Button>
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your question... (Hindi या English में लिखें)"
                      className="flex-1"
                    />
                    <Button size="icon" onClick={handleSend} disabled={!input.trim()}>
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Assistant;
