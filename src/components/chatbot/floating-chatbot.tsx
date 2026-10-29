import { useState, useEffect, useRef, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  RotateCcw,
  Minus,
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Car,
  HeartPulse,
  Building2,
  FileText,
  Clock,
  PhoneCall,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatAction {
  label: string;
  href?: string;
  actionType: "navigate" | "callback" | "query";
  queryText?: string;
  icon?: "car" | "heart" | "building" | "claims" | "phone" | "arrow";
}

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  actions?: ChatAction[];
  isCallbackForm?: boolean;
  callbackData?: {
    name: string;
    phone: string;
    service: string;
  };
}

const INITIAL_SUGGESTIONS = [
  { label: "🚗 Car Insurance Quote", query: "Tell me about car insurance options and quotes" },
  { label: "🏥 Health Plans & 80D Tax", query: "What health insurance plans and tax benefits do you offer?" },
  { label: "🏢 Commercial & Factory Risk", query: "What corporate and commercial insurance covers are available?" },
  { label: "📋 How to File a Claim", query: "How do I file or track an insurance claim?" },
  { label: "📞 Request Expert Callback", query: "I want to request an expert callback" },
];

function getCurrentTimeStr(): string {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function FloatingChatbot() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showPromptBadge, setShowPromptBadge] = useState(true);
  const [unreadCount, setUnreadCount] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Callback form state inside chat
  const [callbackName, setCallbackName] = useState("");
  const [callbackPhone, setCallbackPhone] = useState("");
  const [callbackService, setCallbackService] = useState("Car Insurance");
  const [callbackSubmitting, setCallbackSubmitting] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: "welcome-1",
      sender: "bot",
      text: "👋 Hello! Welcome to **Gitvisha Insurance & Risk Advisory**.\n\nI am your dedicated insurance advisor. Whether you need instant quotes, coverage comparison across 15+ top insurers, or emergency claim support, I'm here to help!",
      timestamp: getCurrentTimeStr(),
      actions: [
        { label: "Get Car Quote", href: "/car-insurance", actionType: "navigate", icon: "car" },
        { label: "Health Plans", href: "/health-insurance", actionType: "navigate", icon: "heart" },
        { label: "Corporate Risk", href: "/industries", actionType: "navigate", icon: "building" },
        { label: "Claims Help", href: "/claims", actionType: "navigate", icon: "claims" },
        { label: "Request Callback", actionType: "callback", icon: "phone" },
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Hydration safety
  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard accessibility: ESC closes chatbot
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView?.({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen, isMinimized]);

  // Focus input on open
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setUnreadCount(0);
      setShowPromptBadge(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen, isMinimized]);

  if (!mounted) {
    return null;
  }

  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setUnreadCount(0);
    setShowPromptBadge(false);
  };

  const handleResetChat = () => {
    setIsTyping(false);
    setMessages([
      {
        id: "reset-" + Date.now(),
        sender: "bot",
        text: "🔄 Chat reset. How can I assist you with your insurance coverage or claims today?",
        timestamp: getCurrentTimeStr(),
        actions: [
          { label: "Car Insurance", href: "/car-insurance", actionType: "navigate", icon: "car" },
          { label: "Health Insurance", href: "/health-insurance", actionType: "navigate", icon: "heart" },
          { label: "Corporate Solutions", href: "/industries", actionType: "navigate", icon: "building" },
          { label: "Claims Assistance", href: "/claims", actionType: "navigate", icon: "claims" },
          { label: "Request Callback", actionType: "callback", icon: "phone" },
        ],
      },
    ]);
  };

  const botReplyGenerator = (userQuery: string): { text: string; actions?: ChatAction[]; isCallbackForm?: boolean } => {
    const q = userQuery.toLowerCase().trim();

    // 1. Callback / Contact request
    if (
      q.includes("call") ||
      q.includes("phone") ||
      q.includes("contact") ||
      q.includes("talk to human") ||
      q.includes("expert") ||
      q.includes("advisor") ||
      q.includes("speak") ||
      q.includes("number")
    ) {
      return {
        text: "📞 **Request an Expert Insurance Consultation**\n\nOur IRDAI certified risk advisors provide independent, unbiased recommendations. Please fill in your details below and we will contact you within **15 minutes**.",
        isCallbackForm: true,
      };
    }

    // 2. Car / Vehicle / Motor Insurance
    if (
      q.includes("car") ||
      q.includes("vehicle") ||
      q.includes("motor") ||
      q.includes("bike") ||
      q.includes("auto") ||
      q.includes("zero dep") ||
      q.includes("bumper to bumper") ||
      q.includes("ncb") ||
      q.includes("idv")
    ) {
      return {
        text: "🚗 **Gitvisha Motor Insurance Advisory**\n\nWe structure real-world automotive coverage across India's top insurers:\n\n• **Zero Depreciation (Bumper-to-Bumper)**: 100% payout on fiber, metal, rubber, and glass without depreciation deductions.\n• **Engine & Gearbox Protector**: Essential for monsoon water ingression / hydrostatic lock.\n• **NCB Retention Shield**: Protects your 20%–50% No Claim Bonus even after a claim.\n• **24x7 Roadside Assistance**: Emergency towing, battery jumpstart, and flat-tyre support nationwide.\n\nWould you like an instant policy comparison or to calculate your premium?",
        actions: [
          { label: "View Car Insurance Plans", href: "/car-insurance", actionType: "navigate", icon: "car" },
          { label: "Calculate Premium", href: "/car-insurance#quote", actionType: "navigate", icon: "arrow" },
          { label: "Request Motor Callback", actionType: "callback", icon: "phone" },
        ],
      };
    }

    // 3. Health / Mediclaim / Family Insurance
    if (
      q.includes("health") ||
      q.includes("mediclaim") ||
      q.includes("medical") ||
      q.includes("hospital") ||
      q.includes("doctor") ||
      q.includes("cashless") ||
      q.includes("80d") ||
      q.includes("tax") ||
      q.includes("ped") ||
      q.includes("waiting period")
    ) {
      return {
        text: "🏥 **Gitvisha Health & Family Protection**\n\nEnsure complete medical peace of mind with tailored health policies:\n\n• **High Sum Insured (₹1 Crore+)**: Modern treatment & robotic surgery protection against runaway medical inflation.\n• **10,000+ Cashless Hospital Network**: On-the-spot TPA approvals with zero out-of-pocket expenses.\n• **Short Waiting Periods**: 1–2 year waiting periods for pre-existing diseases (PED) compared to standard 4 years.\n• **Tax Savings u/s 80D**: Save up to ₹25,000 (self/family) + ₹50,000 (parents / senior citizens) annually.\n• **Restoration Benefit**: 100% sum insured reload for unrelated subsequent hospitalizations.",
        actions: [
          { label: "Explore Health Plans", href: "/health-insurance", actionType: "navigate", icon: "heart" },
          { label: "Compare Family Floater", href: "/health-insurance#quote", actionType: "navigate", icon: "arrow" },
          { label: "Talk to Health Advisor", actionType: "callback", icon: "phone" },
        ],
      };
    }

    // 4. Commercial / Corporate / Engineering / Fire
    if (
      q.includes("commercial") ||
      q.includes("business") ||
      q.includes("corporate") ||
      q.includes("fire") ||
      q.includes("factory") ||
      q.includes("machinery") ||
      q.includes("marine") ||
      q.includes("cargo") ||
      q.includes("cyber") ||
      q.includes("liability") ||
      q.includes("d&o") ||
      q.includes("workmen") ||
      q.includes("warehouse") ||
      q.includes("infrastructure") ||
      q.includes("solar")
    ) {
      return {
        text: "🏢 **Corporate & Industrial Risk Solutions**\n\nGitvisha advises enterprises and MSMEs on enterprise-grade risk mitigation:\n\n• **Fire & Special Perils (SFSP / Bharat Sookshma/Laghu)**: Covers factory structures, plant, raw materials & finished goods against fire, storm, and earthquake.\n• **Machinery Breakdown (MBD) & FLOP**: Reimburses mechanical failure repair costs and ongoing fixed overheads during downtime.\n• **Marine Cargo & Transit**: Open and declaration policies protecting domestic transit and international EXIM freight.\n• **Executive & Cyber Liability**: D&O, Tech E&O, Cyber breach liability, and Workmen's Compensation.",
        actions: [
          { label: "Sector Risk Profiles", href: "/industries", actionType: "navigate", icon: "building" },
          { label: "Browse Products", href: "/#solutions", actionType: "navigate", icon: "arrow" },
          { label: "Corporate Consultation", actionType: "callback", icon: "phone" },
        ],
      };
    }

    // 5. Claims Assistance
    if (
      q.includes("claim") ||
      q.includes("accident") ||
      q.includes("damage") ||
      q.includes("loss") ||
      q.includes("settlement") ||
      q.includes("survey") ||
      q.includes("fir")
    ) {
      return {
        text: "📋 **4-Step Emergency Claims Assistance**\n\nAs your insurance broker, Gitvisha acts as your **dedicated claim advocate** against the insurer:\n\n1. **Immediate Intimation**: Inform us or insurer within 24 hours of incident.\n2. **Evidence Documentation**: Take clear photos/videos of damaged property or vehicle. For theft or road accidents, obtain a Police FIR.\n3. **Survey & Inspection**: We schedule the surveyor visit and ensure accurate loss assessment.\n4. **Settlement**: Rapid cashless approval or direct bank disbursement without unnecessary deductions.\n\nNeed urgent claim support?",
        actions: [
          { label: "Open Claims Desk", href: "/claims", actionType: "navigate", icon: "claims" },
          { label: "File Intimation Form", href: "/claims#file-claim", actionType: "navigate", icon: "arrow" },
          { label: "Emergency Callback", actionType: "callback", icon: "phone" },
        ],
      };
    }

    // 6. About Gitvisha / Broker vs Agent
    if (
      q.includes("about") ||
      q.includes("gitvisha") ||
      q.includes("who") ||
      q.includes("broker") ||
      q.includes("partner") ||
      q.includes("license")
    ) {
      return {
        text: "🛡️ **Why Choose Gitvisha?**\n\n• **Independent Client Advocate**: Direct insurance agents represent only one company. Gitvisha is an independent advisory broking firm that represents **YOU**, the customer.\n• **15+ Insurer Partners**: We negotiate and compare rates across HDFC ERGO, ICICI Lombard, Tata AIG, SBI General, Star Health, and top PSU insurers.\n• **Zero Advisory Fees**: You receive expert policy audit, negotiation, and claims guidance at no extra charge.\n• **Headquarters**: Delhi NCR, India (Email: info@gitvisha.com).",
        actions: [
          { label: "About Gitvisha", href: "/about", actionType: "navigate", icon: "arrow" },
          { label: "Contact Us", href: "/#contact", actionType: "navigate", icon: "phone" },
        ],
      };
    }

    // 7. General fallback
    return {
      text: "I can help you review, purchase, or claim any insurance policy with optimal terms and competitive pricing. Here are the most popular topics:",
      actions: [
        { label: "🚗 Car Insurance", href: "/car-insurance", actionType: "navigate", icon: "car" },
        { label: "🏥 Health Insurance", href: "/health-insurance", actionType: "navigate", icon: "heart" },
        { label: "🏢 Corporate / Industry", href: "/industries", actionType: "navigate", icon: "building" },
        { label: "📋 File a Claim", href: "/claims", actionType: "navigate", icon: "claims" },
        { label: "📞 Speak with an Expert", actionType: "callback", icon: "phone" },
      ],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: "user-" + Date.now(),
      sender: "user",
      text,
      timestamp: getCurrentTimeStr(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate natural response latency
    setTimeout(() => {
      const botResponse = botReplyGenerator(text);
      const botMsg: ChatMessage = {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: botResponse.text,
        timestamp: getCurrentTimeStr(),
        actions: botResponse.actions,
        isCallbackForm: botResponse.isCallbackForm,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleActionClick = (action: ChatAction) => {
    if (action.actionType === "navigate" && action.href) {
      if (action.href.startsWith("/#") || action.href.includes("#")) {
        const [path, hash] = action.href.split("#");
        navigate({ to: path || "/", hash });
      } else {
        navigate({ to: action.href });
      }
      // On mobile we minimize, on desktop we can keep open
      if (typeof window !== "undefined" && window.innerWidth < 640) {
        setIsMinimized(true);
      }
    } else if (action.actionType === "callback") {
      handleSendMessage("I want to request an expert callback");
    } else if (action.actionType === "query" && action.queryText) {
      handleSendMessage(action.queryText);
    }
  };

  const handleCallbackSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!callbackName.trim() || !callbackPhone.trim()) return;

    setCallbackSubmitting(true);

    setTimeout(() => {
      setCallbackSubmitting(false);

      const confirmationMsg: ChatMessage = {
        id: "bot-conf-" + Date.now(),
        sender: "bot",
        text: `✅ **Callback Confirmed!**\n\nThank you, **${callbackName.trim()}**! Your request regarding **${callbackService}** has been registered.\n\nOur senior advisor will call you at **${callbackPhone.trim()}** within **15 minutes**.\n\n*Reference ID: GV-${Math.floor(100000 + Math.random() * 900000)}*`,
        timestamp: getCurrentTimeStr(),
        actions: [
          { label: "Explore Products", href: "/#solutions", actionType: "navigate", icon: "arrow" },
          { label: "Claims Guide", href: "/claims", actionType: "navigate", icon: "claims" },
        ],
      };

      setMessages((prev) => [...prev, confirmationMsg]);

      // Reset form
      setCallbackName("");
      setCallbackPhone("");
    }, 600);
  };

  return (
    <>
      {/* Floating Action Button (Bottom Right) */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 select-none">
        {/* Initial Prompt Pill / Tooltip */}
        {!isOpen && showPromptBadge && (
          <div
            className="flex items-center gap-2.5 rounded-full border border-primary/25 bg-background/95 px-4 py-2.5 shadow-lg backdrop-blur-md transition-all hover:bg-background animate-in fade-in slide-in-from-bottom-2 duration-300"
            role="status"
          >
            <div className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </div>
            <button
              onClick={handleOpen}
              className="text-xs font-semibold text-foreground hover:text-primary transition-colors cursor-pointer text-left"
            >
              Need insurance advice? <span className="text-primary font-bold">Chat with us</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowPromptBadge(false);
              }}
              className="ml-1 rounded-full p-0.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
              aria-label="Dismiss chat prompt"
            >
              <X className="size-3.5" />
            </button>
          </div>
        )}

        {/* Floating Circle Button */}
        <button
          onClick={() => {
            if (isOpen) {
              setIsOpen(false);
            } else {
              handleOpen();
            }
          }}
          className={`relative flex size-14 sm:size-15 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-primary/25 cursor-pointer ${
            isOpen ? "bg-zinc-900 dark:bg-zinc-800 text-white rotate-90" : "hover:bg-primary/95"
          }`}
          aria-label={isOpen ? "Close Gitvisha Chatbot" : "Open Gitvisha Chatbot"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="size-6 transition-transform duration-200" />
          ) : (
            <>
              <MessageCircle className="size-6 transition-transform duration-200" />
              {/* Online Pulse Dot */}
              <span className="absolute -top-0.5 -right-0.5 flex size-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-4 items-center justify-center rounded-full border-2 border-background bg-emerald-500 text-[9px] font-bold text-white">
                  {unreadCount > 0 ? "1" : ""}
                </span>
              </span>
            </>
          )}
        </button>
      </div>

      {/* Floating Chat Window */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 ease-out flex flex-col overflow-hidden border border-border/80 bg-background/98 backdrop-blur-xl shadow-2xl rounded-2xl ${
            isMinimized
              ? "bottom-22 right-5 sm:bottom-24 sm:right-6 w-72 h-14"
              : "bottom-22 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-24 w-auto sm:w-[410px] h-[580px] max-h-[calc(100dvh-110px)]"
          } animate-in fade-in-0 zoom-in-95 duration-200`}
          role="dialog"
          aria-labelledby="chatbot-heading"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-3 select-none">
            <div className="flex items-center gap-3">
              <div className="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary">
                <Bot className="size-5" />
                <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-background bg-emerald-500" />
              </div>
              <div className="leading-tight">
                <div className="flex items-center gap-1.5">
                  <h3 id="chatbot-heading" className="text-sm font-bold text-foreground">
                    Gitvisha Assistant
                  </h3>
                  <span className="rounded-full bg-primary/10 px-1.5 py-0.2 text-[10px] font-semibold text-primary">
                    AI Advisor
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  Online • Instant Guidance
                </p>
              </div>
            </div>

            {/* Header Action Buttons */}
            <div className="flex items-center gap-1 text-muted-foreground">
              <button
                onClick={handleResetChat}
                title="Restart chat"
                className="rounded-lg p-1.5 hover:bg-secondary hover:text-foreground transition-colors cursor-pointer"
                aria-label="Restart conversation"
              >
                <RotateCcw className="size-3.5" />
              </button>
              <button
                onClick={() => setIsMinimized((v) => !v)}
                title={isMinimized ? "Maximize" : "Minimize"}
                className="rounded-lg p-1.5 hover:bg-secondary hover:text-foreground transition-colors cursor-pointer"
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                <Minus className="size-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close"
                className="rounded-lg p-1.5 hover:bg-secondary hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>

          {/* Chat Body (Hidden when minimized) */}
          {!isMinimized && (
            <>
              {/* Message Scroll Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm">
                {/* Security & IRDAI assurance badge */}
                <div className="mx-auto flex max-w-[280px] items-center justify-center gap-1.5 rounded-full bg-secondary/80 px-3 py-1 text-[11px] text-muted-foreground border border-border/50">
                  <ShieldCheck className="size-3.5 text-primary" />
                  <span>Licensed IRDAI Broking Advisory</span>
                </div>

                {messages.map((message) => {
                  const isBot = message.sender === "bot";
                  return (
                    <div
                      key={message.id}
                      className={`flex gap-2.5 ${isBot ? "justify-start" : "justify-end"} animate-in fade-in-50 duration-200`}
                    >
                      {isBot && (
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary mt-0.5">
                          <Bot className="size-3.5" />
                        </div>
                      )}

                      <div className={`max-w-[85%] space-y-2`}>
                        <div
                          className={`rounded-2xl px-3.5 py-2.5 shadow-xs leading-relaxed text-xs sm:text-[13px] ${
                            isBot
                              ? "bg-secondary/70 border border-border/70 text-foreground rounded-tl-sm"
                              : "bg-primary text-primary-foreground font-medium rounded-tr-sm ml-auto"
                          }`}
                        >
                          <div className="whitespace-pre-line">
                            {renderFormattedMessage(message.text)}
                          </div>
                        </div>

                        {/* Inline Callback Form */}
                        {message.isCallbackForm && (
                          <div className="rounded-xl border border-border bg-card p-3 shadow-xs space-y-2.5 animate-in fade-in duration-200">
                            <p className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                              <PhoneCall className="size-3.5 text-primary" />
                              Quick Consultation Request
                            </p>
                            <form onSubmit={handleCallbackSubmit} className="space-y-2">
                              <div>
                                <label className="text-[10px] font-medium text-muted-foreground block mb-0.5">
                                  Your Name *
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={callbackName}
                                  onChange={(e) => setCallbackName(e.target.value)}
                                  placeholder="e.g. Rahul Sharma"
                                  className="w-full h-8 rounded-md border border-input bg-background px-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                              </div>
                              <div>
                                <label className="text-[10px] font-medium text-muted-foreground block mb-0.5">
                                  Phone Number (+91) *
                                </label>
                                <input
                                  type="tel"
                                  required
                                  minLength={10}
                                  value={callbackPhone}
                                  onChange={(e) => setCallbackPhone(e.target.value)}
                                  placeholder="98765 43210"
                                  className="w-full h-8 rounded-md border border-input bg-background px-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                              </div>
                              <div>
                                <label className="text-[10px] font-medium text-muted-foreground block mb-0.5">
                                  Policy Category
                                </label>
                                <select
                                  value={callbackService}
                                  onChange={(e) => setCallbackService(e.target.value)}
                                  className="w-full h-8 rounded-md border border-input bg-background px-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                                >
                                  <option value="Car Insurance">Car / Motor Insurance</option>
                                  <option value="Health Insurance">Health & Medical Insurance</option>
                                  <option value="Commercial & Factory Fire">Commercial & Factory Fire</option>
                                  <option value="Claims Assistance">Claims Assistance</option>
                                  <option value="Other">Other Insurance Enquiry</option>
                                </select>
                              </div>
                              <Button
                                type="submit"
                                size="sm"
                                disabled={callbackSubmitting}
                                className="w-full h-8 text-xs font-semibold mt-1"
                              >
                                {callbackSubmitting ? "Submitting..." : "Request Call in 15 Mins →"}
                              </Button>
                            </form>
                          </div>
                        )}

                        {/* Interactive Action Buttons */}
                        {message.actions && message.actions.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {message.actions.map((act, i) => {
                              const IconComponent =
                                act.icon === "car"
                                  ? Car
                                  : act.icon === "heart"
                                    ? HeartPulse
                                    : act.icon === "building"
                                      ? Building2
                                      : act.icon === "claims"
                                        ? FileText
                                        : act.icon === "phone"
                                          ? Phone
                                          : ArrowRight;

                              return (
                                <button
                                  key={i}
                                  onClick={() => handleActionClick(act)}
                                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-2.5 py-1 text-[11px] font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-150 cursor-pointer shadow-2xs"
                                >
                                  <IconComponent className="size-3" />
                                  <span>{act.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        )}

                        <span
                          className={`block text-[10px] text-muted-foreground/75 px-1 ${
                            isBot ? "text-left" : "text-right"
                          }`}
                        >
                          {message.timestamp}
                        </span>
                      </div>

                      {!isBot && (
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary border border-border text-foreground mt-0.5">
                          <User className="size-3.5" />
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Bot Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2 text-muted-foreground animate-in fade-in-50 duration-150">
                    <div className="flex size-7 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary">
                      <Bot className="size-3.5" />
                    </div>
                    <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm border border-border/70 bg-secondary/60 px-3.5 py-2.5">
                      <span className="size-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                      <span className="size-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                      <span className="size-1.5 rounded-full bg-primary animate-bounce" />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Starter Suggestions Carousel */}
              {messages.length <= 2 && (
                <div className="border-t border-border/40 bg-muted/20 px-3 py-2">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Quick suggestions
                  </p>
                  <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                    {INITIAL_SUGGESTIONS.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(s.query)}
                        className="shrink-0 rounded-lg border border-border/70 bg-card px-2.5 py-1 text-[11px] text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer"
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Chat Input Bar */}
              <div className="border-t border-border bg-card p-3">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about quotes, claims, policies..."
                    className="flex-1 h-9 rounded-xl border border-input bg-background px-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={!inputValue.trim() || isTyping}
                    className="size-9 rounded-xl shrink-0 cursor-pointer"
                    aria-label="Send message"
                  >
                    <Send className="size-4" />
                  </Button>
                </form>
                <div className="mt-1.5 flex items-center justify-between text-[10px] text-muted-foreground px-1">
                  <span>Gitvisha Advisor</span>
                  <a
                    href="mailto:info@gitvisha.com"
                    className="hover:text-primary transition-colors flex items-center gap-0.5"
                  >
                    info@gitvisha.com
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

/**
 * Helper to render bold markdown segments (e.g. **text**) nicely
 */
function renderFormattedMessage(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
