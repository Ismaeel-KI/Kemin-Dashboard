"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Send, Bot, User, Loader2 } from "lucide-react"

const staticResponses = {
  "what products does Grainzo  offer for animal nutrition":
    "Grainzooffers a comprehensive range of animal nutrition products including:\n\n• Feed additives - Antioxidants, acidifiers, and preservatives\n• Nutritional ingredients - Amino acids, vitamins, and minerals\n• Gut health solutions - Probiotics and prebiotics\n• Performance enhancers - Growth promoters and feed efficiency improvers\n• Specialty ingredients - Enzymes and organic trace minerals\n\nOur solutions are designed to improve animal health, performance, and food safety across poultry, swine, ruminants, and aquaculture.",

  "how can i improve feed efficiency in my livestock":
    "Here are key strategies to improve feed efficiency in livestock:\n\n• Optimize nutrition - Use high-quality feed ingredients and balanced formulations\n• Add enzymes - Improve nutrient digestibility and absorption\n• Maintain gut health - Use probiotics and prebiotics to support digestive function\n• Control feed quality - Prevent oxidation and maintain freshness with antioxidants\n• Monitor feed intake - Ensure consistent and adequate nutrition delivery\n• Use performance enhancers - Consider approved growth promoters where applicable\n\Grainzo's feed additives and nutritional solutions can help optimize these areas for better feed conversion ratios.",

  "what are Grainzo's sustainability initiatives":
    "Grainzois committed to sustainability through several key initiatives:\n\n• Sustainable sourcing - Responsible procurement of raw materials\n• Carbon footprint reduction - Energy-efficient manufacturing processes\n• Waste reduction - Minimizing waste and maximizing resource utilization\n• Water conservation - Implementing water-saving technologies\n• Renewable energy - Investing in clean energy solutions\n• Sustainable packaging - Reducing packaging waste and using eco-friendly materials\n• Community impact - Supporting local communities and environmental stewardship\n\nWe're dedicated to improving quality of life while protecting our planet for future generations.",

  "tell me about aquaculture solutions":
    "Grainzo's aquaculture solutions are designed to optimize fish and shrimp health and performance:\n\n• Feed additives - Antioxidants to maintain feed quality and shelf life\n• Gut health products - Probiotics and organic acids for digestive health\n• Immune support - Nutritional solutions to enhance disease resistance\n• Water quality management - Products to maintain optimal aquatic environments\n• Growth performance - Ingredients to improve feed conversion and growth rates\n• Stress reduction - Solutions to help aquatic animals cope with environmental stress\n\nOur aquaculture team works closely with producers to develop customized nutrition programs for various species and production systems.",

  "how do i contact technical support":
    "You can reach Grainzo's technical support team through several channels:\n\n• Phone Contact your regional Grainzooffice\n• Email Send inquiries to our technical support team\n• Website Visit .com for contact information and resources\n• Field representatives Connect with your local Grainzorepresentative\n• Online portal Access technical resources and submit support requests\n\nOur technical experts are available to help with product applications, troubleshooting, and optimization strategies. Response times are typically within 24-48 hours for most inquiries.",

  "what food safety solutions does Grainzoprovide":
    "Grainzooffers comprehensive food safety solutions including:\n\n• Antimicrobials - Natural and synthetic preservatives to control pathogens\n• Antioxidants - Prevent rancidity and extend shelf life\n• Mold inhibitors - Control fungal growth in feed and food products\n• Sanitizers - Cleaning and disinfection solutions for processing facilities\n• Testing services - Analytical support for quality assurance\n• HACCP support - Guidance on food safety management systems\n• Regulatory compliance - Help navigate food safety regulations\n\nOur solutions help ensure food safety from farm to fork, protecting both animal and human health.",

  "hello":
    "Hello! Welcome to GrainzoCustomer Service. I'm here to help you with questions about our products, services, and solutions. How can I assist you today?",

  "hi": "Hi there! I'm your Grainzocustomer service assistant. Whether you need information about animal nutrition, food safety, aquaculture, or any of our other solutions, I'm here to help. What can I do for you?",

  "help": "I'm here to help you with:\n\n• Product information and applications\n• Technical support and troubleshooting\n• Sustainability initiatives\n• Contact information\n• General inquiries about Grainzo's solutions\n\nFeel free to ask me anything about Grainzo's products and services, or choose from the quick questions below!",

  "thank you":
    "You're welcome! I'm glad I could help. If you have any other questions about Grainzo's products or services, please don't hesitate to ask. Have a great day!",

  "thanks": "You're welcome! Is there anything else I can help you with regarding Grainzo's solutions or services?",

  "does Grainzooffer lab testing or analysis services":
  "Yes, Grainzooffers lab testing services as part of our technical support:\n\n• Feed analysis – Nutritional composition, contaminants, moisture, etc.\n• Microbial testing – Pathogen detection in feed and water\n• Quality assurance – Ingredient and additive verification\n• Custom R&D – Analytical support for tailored solutions\n\nThese services help ensure product quality and support performance optimization.",

  "how can i preserve grain quality during storage":
  "To preserve grain quality:\n\n• Use mold inhibitors – Control fungal growth in stored grains\n• Apply antioxidants – Prevent oxidation and spoilage\n• Monitor moisture levels – Keep grain dry to avoid mold development\n• Use sealed storage systems – Limit oxygen and pest intrusion\n\nGrainzooffers preservation additives for mold control and freshness retention in grain storage.",

  "how can i support immune health in livestock":
  "To support immune health in livestock:\n\n• Provide balanced nutrition – Ensure adequate vitamins, minerals, and trace elements\n• Use immune-modulating additives – Such as beta-glucans and nucleotides\n• Minimize stress – Provide proper housing, handling, and biosecurity\n• Vaccinate strategically – Work with veterinarians for effective vaccine protocols\n• Promote gut health – A healthy gut supports systemic immunity\n\nGrainzooffers additives and nutritional tools to strengthen animal immunity and resilience.",

  "how can i contact sales" : 
  "To speak with a Grainzosales representative:\n\n• Regional contact – Reach out to your local Grainzooffice or distributor\n• Website form – Submit a sales inquiry through our official website\n• Email – Send your request to our sales team at sales@bi.com (example)\n• Field reps – Connect with your assigned Grainzorepresentative for personalized support\n\nOur sales team can help with product information, pricing, availability, and custom solutions for your operation.",

  "what are the latest sales statistics": 
  "Here are some of Grainzo's recent sales highlights:\n\n• Global Reach – Products sold in over 90 countries\n• Annual Sales Growth – 8.2% year-over-year growth (2024)\n• Top Markets – North America, Europe, and Southeast Asia\n• Leading Segments – Poultry and ruminant feed solutions account for over 60% of total sales\n• Aquaculture Growth – 12% increase in sales due to expanded demand for gut health products\n\nThese figures reflect our continued commitment to innovation, sustainability, and customer satisfaction across the animal nutrition industry.",

  "sales performance this year": 
  "Grainzohas achieved strong sales performance this year, with key growth in gut health additives and feed preservatives. Our aquaculture segment has also seen double-digit growth thanks to expanded global partnerships.",

  "what are Grainzo's target markets":
  "Grainzooperates in a wide range of markets globally with a strong focus on:\n\n• Animal Nutrition – Poultry, swine, ruminants, and aquaculture\n• Food Safety – Solutions for feed mills, processors, and integrators\n• Pet Nutrition – Functional ingredients and shelf-life solutions\n• Emerging Markets – Southeast Asia, Latin America, and Africa show rapid growth\n\nOur primary customers include feed manufacturers, integrators, nutritionists, and producers across over 90 countries. We tailor solutions to meet the needs of local market challenges and regulatory environments.",

  "what are the current market trends":
  "Current market trends in animal nutrition include:\n\n• Gut Health Focus – Rising use of probiotics and postbiotics\n• Antibiotic Reduction – Demand for natural alternatives is increasing\n• Sustainability – Strong interest in carbon-neutral and eco-friendly feed solutions\n• Precision Nutrition – Customized formulations for performance and health\n• Aquaculture Expansion – Particularly in shrimp and freshwater fish sectors\n\nGrainzois actively innovating to align with these evolving trends.",

  
}

const findStaticResponse = (message: string): string | null => {
  const normalizedMessage = message.toLowerCase().trim()

  // Check for exact matches first
  if (Object.prototype.hasOwnProperty.call(staticResponses, normalizedMessage)) {
    return staticResponses[normalizedMessage as keyof typeof staticResponses]
  }

  // Check for partial matches
  for (const [key, response] of Object.entries(staticResponses)) {
    if (
      key.toLowerCase().includes(normalizedMessage) ||
      normalizedMessage.includes(key.toLowerCase())
    ) {
      return response
    }
  }

  return null
}

export function CustomerServiceChat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [chatStarted, setChatStarted] = useState(false)
  const [usedQuickActions, setUsedQuickActions] = useState(new Set())
  const [hasUserSentMessage, setHasUserSentMessage] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { id: Date.now().toString(), role: "user", content: input.trim() }
    setMessages((prev) => [...prev, userMessage])

    // Mark that user has sent a message
    setHasUserSentMessage(true)

    const currentInput = input.trim()
    setInput("")
    setIsLoading(true)

    // Check for static response first
    const staticResponse = findStaticResponse(currentInput)

    if (staticResponse) {
      // Use static response
      setTimeout(() => {
        const assistantMessage = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: staticResponse,
        }
        setMessages((prev) => [...prev, assistantMessage])
        setIsLoading(false)
      }, 500) // Small delay to simulate thinking
    } else {
      // Use AI API for complex queries
      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [...messages, userMessage].map((m) => ({ role: m.role, content: m.content })),
          }),
        })

        if (!response.ok) throw new Error("Failed to get response")

        const reader = response.body?.getReader()
        if (!reader) throw new Error("No reader available")

        const assistantMessage = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "",
        }

        setMessages((prev) => [...prev, assistantMessage])

        const decoder = new TextDecoder()
        let receivedContent = false;
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value)
          const lines = chunk.split("\n")

          for (const line of lines) {
            if (line.startsWith("0:")) {
              try {
                const data = JSON.parse(line.slice(2))

                if (data.content) {
                  receivedContent = true;
                  assistantMessage.content += data.content
                  setMessages((prev) =>
                    prev.map((m) => (m.id === assistantMessage.id ? { ...m, content: assistantMessage.content } : m)),
                  )
                }
              } catch (e) {
                // Ignore parsing errors
              } 
            }
          }
        }
        if (!receivedContent) {
          assistantMessage.content =
            "I'm sorry, I didn’t quite understand that. Could you rephrase or choose one of the quick questions?";
          setMessages((prev) =>
            prev.map((m) => (m.id === assistantMessage.id ? { ...m, content: assistantMessage.content } : m))
          );
}
      } catch (error) {
        const errorMessage = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "I apologize, but I'm having trouble connecting to our AI service right now. Please try again later or contact our support team directly.",
        }
        setMessages((prev) => [...prev, errorMessage])
      }
      finally{setIsLoading(false)}
      
    }
  }

  const startChat = () => {
    setChatStarted(true)
  }

  const quickQuestions = [
    "How can I improve feed efficiency in my livestock?",
    "What are Grainzo's sustainability initiatives?",
    "Tell me about aquaculture solutions",
    "How do I contact technical support?",
    "What food safety solutions does Grainzoprovide?",
    "What are the current market trends",
    "Sales performance this year",
    "How can i contact sales",
  ]

  const handleQuickQuestion = async (question: string) => {
    if (!chatStarted) setChatStarted(true)
    setUsedQuickActions((prev) => new Set([...prev, question]))
    setHasUserSentMessage(true)
    setInput("") // Clear input in case
  
    const userMessage = { id: Date.now().toString(), role: "user", content: question }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setIsLoading(true)
  
    const staticResponse = findStaticResponse(question)
  
    if (staticResponse) {
      // use static response
      setTimeout(() => {
        const assistantMessage = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: staticResponse,
        }
        setMessages((prev) => [...prev, assistantMessage])
        setIsLoading(false)
      }, 500)
      return
    } else {
      // fallback response before API call
      const fallbackMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I'm sorry, I didn't quite understand that. Could you rephrase or choose one of the quick questions?",
      }
      setMessages((prev) => [...prev, fallbackMessage])
      setIsLoading(false)
      return
    }
  }

  // Filter out used quick actions
  const availableQuickActions = quickQuestions.filter((question) => !usedQuickActions.has(question))

  return (
    <div className="space-y-6">
      
      <Card className="flex flex-col">
        <CardHeader className="border-b flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-kemin-red" />
                Grainzo Customer Service AI
              </CardTitle>
              <CardDescription>Get instant help with your Grainzo-related questions</CardDescription>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Online
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0 min-h-0">
          {!chatStarted ? (
            /* Welcome Screen */
            <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-6">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-kemin-red/10 rounded-full flex items-center justify-center mx-auto">
                  <Bot className="h-8 w-8 text-kemin-red" />
                </div>
                <h3 className="text-lg font-semibold">Welcome to Grainzo Customer Service</h3>
                <p className="text-muted-foreground max-w-md">
                  I'm here to help you with questions about our products, services, and solutions. How can I assist you
                  today?
                </p>
              </div>

              <div className="space-y-3 w-full max-w-md">
                <p className="text-sm font-medium text-center">Quick Questions:</p>
                <div className="grid gap-2">
                  {availableQuickActions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="text-left h-auto p-3 whitespace-normal bg-transparent hover:bg-muted transition-colors"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>

              <Button onClick={startChat} className="bg-kemin-red hover:bg-kemin-red-dark">
                Start Chat
              </Button>
            </div>
          ) : (
            /* Chat Messages */
            <>
              <div className="flex-1 min-h-0 p-4 overflow-hidden">
                <ScrollArea className="h-full w-full">
                  <div className="flex flex-col space-y-4 pr-4 max-h-[400px] overflow-y-auto">
                    {messages.length === 0 && (
                      <div className="text-center text-muted-foreground py-8">
                        <Bot className="h-8 w-8 mx-auto mb-2 text-kemin-red" />
                        <p>Hello! I'm your Grainzocustomer service assistant. How can I help you today?</p>
                      </div>
                    )}

                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {message.role === "assistant" && (
                          <Avatar className="w-8 h-8 flex-shrink-0">
                            <AvatarFallback className="bg-kemin-red text-white">
                              <Bot className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                        )}

                        <div
                          className={`max-w-[80%] rounded-lg px-4 py-2 ${
                            message.role === "user" ? "bg-kemin-red text-white" : "bg-muted text-foreground"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
                        </div>

                        {message.role === "user" && (
                          <Avatar className="w-8 h-8 flex-shrink-0">
                            <AvatarFallback className="bg-blue-500 text-white">
                              <User className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    ))}

                    {isLoading && (
                      <div className="flex gap-3 justify-start">
                        <Avatar className="w-8 h-8 flex-shrink-0">
                          <AvatarFallback className="bg-kemin-red text-white">
                            <Bot className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="bg-muted rounded-lg px-4 py-2">
                          <div className="flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span className="text-sm text-muted-foreground">Typing...</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
              </div>

              {/* Chat Input - Fixed at bottom */}
              <div className="flex-shrink-0 border-t p-4 bg-background">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-kemin-red hover:bg-kemin-red-dark"
                  >
                    {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-2">
                  Press Enter to send • AI responses are generated and may not always be accurate
                </p>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions - Only show if chat started and user hasn't sent message yet */}
      {chatStarted && !hasUserSentMessage && availableQuickActions.length > 0 && (
        <Card className="bg-background border shadow-md">
          <CardHeader className="bg-muted/30">
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription>Common requests and helpful resources</CardDescription>
          </CardHeader>
          <CardContent className="bg-background">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {availableQuickActions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="text-left h-auto p-3 whitespace-normal justify-start bg-background hover:bg-muted transition-colors"
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Show message when all quick actions are used or user has sent a message */}
      {chatStarted && (hasUserSentMessage || availableQuickActions.length === 0) && (
        <Card className="bg-muted/20 border-dashed">
          <CardContent className="text-center py-8">
            <MessageCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
            <h3 className="text-lg font-semibold mb-2">Continue the Conversation</h3>
            <p className="text-muted-foreground">
              {hasUserSentMessage
                ? "Feel free to ask any other questions about Kemin's products and services."
                : "All quick actions have been used. Type your own questions above to continue."}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default CustomerServiceChat
