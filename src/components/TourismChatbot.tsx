import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, X, RotateCcw, Send } from "lucide-react";

import tourismChatFlow from "../data/tourismChatFlow";
import "../utils/tourismChatbot.css";

type Message = {
  role: "bot" | "user";
  content: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  travelDate: string;
  travelers: string;
  message: string;
};

// ======================================================
// WEB3FORMS
// ======================================================

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

// ======================================================
// WHATSAPP
// ======================================================

const WHATSAPP_NUMBER = "947XXXXXXXX";

// ======================================================
// COMPONENT
// ======================================================

const TourismChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [step, setStep] = useState("start");

  const [messages, setMessages] = useState<Message[]>([]);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    travelers: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // ====================================================
  // INITIAL CHAT MESSAGE
  // ====================================================

  useEffect(() => {
    setMessages([
      {
        role: "bot",
        content: tourismChatFlow.start.message,
      },
    ]);
  }, []);

  // ====================================================
  // AUTO SCROLL
  // ====================================================

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages]);

  // ====================================================
  // CURRENT CHAT NODE
  // ====================================================

  const currentNode = tourismChatFlow[step];

  // ====================================================
  // ADD MESSAGE
  // ====================================================

  const addMessage = (role: "bot" | "user", content: string) => {
    setMessages((prev) => [
      ...prev,
      {
        role,
        content,
      },
    ]);
  };

  // ====================================================
  // HANDLE CHAT OPTION
  // ====================================================

  const handleOptionClick = (nextStep: string, label: string) => {
    addMessage("user", label);

    setStep(nextStep);

    // WhatsApp step
    if (nextStep === "whatsapp") {
      const whatsappMessage =
        "Hello CeylonVoyage, I would like information about travelling to Sri Lanka.";

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        whatsappMessage,
      )}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      return;
    }

    // Next chatbot node
    const nextNode = tourismChatFlow[nextStep];

    if (nextNode) {
      setTimeout(() => {
        addMessage("bot", nextNode.message);
      }, 250);
    }
  };

  // ====================================================
  // HANDLE FORM INPUT
  // ====================================================

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ====================================================
  // SEND INQUIRY
  // ====================================================

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("CeylonVoyage inquiry form submitted");

    // Check Web3Forms key
    if (!WEB3FORMS_ACCESS_KEY) {
      console.error("VITE_WEB3FORMS_ACCESS_KEY is missing.");

      setSubmitStatus("error");

      addMessage(
        "bot",
        "❌ The inquiry service is not configured yet. Please contact the CeylonVoyage team on WhatsApp.",
      );

      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare payload
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,

        subject: "New CeylonVoyage Travel Inquiry",

        from_name: formData.name,

        name: formData.name,

        email: formData.email,

        phone: formData.phone,

        travel_date: formData.travelDate,

        travelers: formData.travelers,

        message: formData.message,

        source: "CeylonVoyage Website Chatbot",
      };

      console.log("Sending inquiry to Web3Forms...");

      // Send request
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify(payload),
      });

      // Read response
      const result = await response.json();

      console.log("Web3Forms response:", result);

      // Check response
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit the inquiry.");
      }

      // ==================================================
      // SUCCESS
      // ==================================================

      setSubmitStatus("success");

      // Show success notification
      alert(
        "✅ Inquiry sent successfully!\n\nThank you for contacting CeylonVoyage. Our team will contact you soon.",
      );

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        travelDate: "",
        travelers: "",
        message: "",
      });

      // Close chatbot
      setIsOpen(false);

      // Reset chatbot for next opening
      setTimeout(() => {
        setStep("start");

        setMessages([
          {
            role: "bot",
            content: tourismChatFlow.start.message,
          },
        ]);

        setSubmitStatus(null);
      }, 300);
    } catch (error) {
      console.error("Web3Forms submission error:", error);

      setSubmitStatus("error");

      addMessage(
        "bot",
        "❌ Sorry, we couldn't send your inquiry. Please try again or contact us on WhatsApp.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ====================================================
  // RESET CHAT
  // ====================================================

  const resetChat = () => {
    setStep("start");

    setFormData({
      name: "",
      email: "",
      phone: "",
      travelDate: "",
      travelers: "",
      message: "",
    });

    setIsSubmitting(false);

    setSubmitStatus(null);

    setMessages([
      {
        role: "bot",
        content: tourismChatFlow.start.message,
      },
    ]);
  };

  // ====================================================
  // CLOSE CHAT
  // ====================================================

  const closeChat = () => {
    setIsOpen(false);
  };

  // ====================================================
  // OPEN WHATSAPP
  // ====================================================

  const openWhatsApp = () => {
    const message = "Hello CeylonVoyage, I would like information about your Sri Lanka tours.";

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  // ====================================================
  // RENDER
  // ====================================================

  return (
    <div className="tourism-chatbot">
      {/* ==============================================
          FLOATING BUTTON
      ============================================== */}

      {!isOpen && (
        <button
          type="button"
          className="chat-button"
          onClick={() => setIsOpen(true)}
          aria-label="Open CeylonVoyage travel assistant"
        >
          <MessageCircle size={22} />

          <span>🇱🇰 Plan Your Trip</span>
        </button>
      )}

      {/* ==============================================
          CHAT WINDOW
      ============================================== */}

      {isOpen && (
        <div className="chat-window">
          {/* ============================================
              HEADER
          ============================================ */}

          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">🇱🇰</div>

              <div>
                <h3>CeylonVoyage</h3>

                <p>Your Sri Lanka Travel Expert</p>
              </div>
            </div>

            <div className="chat-header-actions">
              {/* Restart */}

              <button
                type="button"
                className="header-action-button"
                onClick={resetChat}
                aria-label="Restart chat"
                title="Restart chat"
              >
                <RotateCcw size={17} />
              </button>

              {/* Close */}

              <button
                type="button"
                className="header-action-button close"
                onClick={closeChat}
                aria-label="Close chatbot"
                title="Close"
              >
                <X size={19} />
              </button>
            </div>
          </div>

          {/* ============================================
              MESSAGES
          ============================================ */}

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={`${msg.role}-${index}`} className={`message ${msg.role}`}>
                <div className="message-content">
                  {msg.content.split("\n").map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}

                      {lineIndex < msg.content.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* ============================================
              INQUIRY FORM
          ============================================ */}

          {step === "inquiry" ? (
            <form className="chat-form" onSubmit={handleSubmit}>
              <div className="form-title">
                <strong>📩 Travel Inquiry</strong>

                <span>Tell us about your trip.</span>
              </div>

              {/* Name */}

              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              {/* Email */}

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              {/* Phone */}

              <input
                type="tel"
                name="phone"
                placeholder="Phone / WhatsApp"
                value={formData.phone}
                onChange={handleInputChange}
              />

              {/* Travel Date */}

              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleInputChange}
              />

              {/* Travelers */}

              <select name="travelers" value={formData.travelers} onChange={handleInputChange}>
                <option value="">Number of Travelers</option>

                <option value="1-2">1–2 Travelers</option>

                <option value="3-5">3–5 Travelers</option>

                <option value="6-10">6–10 Travelers</option>

                <option value="10+">10+ Travelers</option>
              </select>

              {/* Message */}

              <textarea
                name="message"
                placeholder="Tell us about your trip..."
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
              />

              {/* Send Inquiry */}

              <button type="submit" className="submit-inquiry-button" disabled={isSubmitting}>
                <Send size={17} />

                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </button>

              {/* Success */}

              {submitStatus === "success" && (
                <div className="form-success">Inquiry sent successfully.</div>
              )}

              {/* Error */}

              {submitStatus === "error" && (
                <div className="form-error">Unable to send inquiry.</div>
              )}

              {/* WhatsApp */}

              <button type="button" className="whatsapp-button" onClick={openWhatsApp}>
                💬 Contact us on WhatsApp
              </button>
            </form>
          ) : step === "whatsapp" ? (
            /* ==========================================
               WHATSAPP SCREEN
            ========================================== */

            <div className="chat-action-screen">
              <div className="action-icon">💬</div>

              <h4>Contact CeylonVoyage</h4>

              <p>Chat directly with our travel team on WhatsApp.</p>

              <button type="button" className="whatsapp-button" onClick={openWhatsApp}>
                💬 Open WhatsApp
              </button>

              <button type="button" className="secondary-button" onClick={resetChat}>
                ← Start Again
              </button>
            </div>
          ) : (
            /* ==========================================
               CHAT OPTIONS
            ========================================== */

            <div className="chat-options">
              {currentNode?.options?.map((option) => (
                <button
                  key={option.next}
                  type="button"
                  className="chat-option"
                  onClick={() => handleOptionClick(option.next, option.label)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TourismChatbot;
