import React, { useState, useEffect, useRef } from "react";
// ... other imports ...
import { FaRobot, FaTimes, FaMinus, FaPaperPlane } from "react-icons/fa";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const botResponses = [
    "How can I assist you today?",
    "I'm here to help with your rental needs!",
    "Could you please clarify that?",
    "Let me check that for you...",
    "Thanks for asking! Here's what I found:",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

 const handleSendMessage = async (e) => {
   e.preventDefault();
   if (!inputMessage.trim()) return;

   // Add user message
   const newMessage = {
     text: inputMessage,
     isBot: false,
     timestamp: new Date().toLocaleTimeString(),
   };

   setMessages((prev) => [...prev, newMessage]);
   setInputMessage("");

   try {
     const response = await fetch("http://localhost:3001/api/chat", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ message: inputMessage }),
     });

     if (!response.ok) throw new Error("Failed to get response");

     const data = await response.json();
     const botMessage = {
       text: data.response,
       isBot: true,
       timestamp: new Date().toLocaleTimeString(),
     };
     setMessages((prev) => [...prev, botMessage]);
   } catch (error) {
     const errorMessage = {
       text: "Sorry, I'm having trouble connecting. Please try again later.",
       isBot: true,
       timestamp: new Date().toLocaleTimeString(),
     };
     setMessages((prev) => [...prev, errorMessage]);
   }
 };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div
          className={`bg-white rounded-xl shadow-2xl w-96 ${
            isMinimized ? "h-16" : "h-[500px]"
          } transition-all duration-300`}
        >
          <div className="bg-gradient-to-r from-[#E63946] to-[#F1FAEE] text-white p-4 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FaRobot className="text-xl" />
              <span className="font-semibold">Rental Assistant</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-white/20 p-1 rounded-full"
              >
                <FaMinus />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1 rounded-full"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="p-4 h-[calc(500px-112px)] overflow-y-auto">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.isBot ? "justify-start" : "justify-end"
                    } mb-4`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.isBot
                          ? "bg-gray-100 text-gray-800"
                          : "bg-[#E63946] text-white"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleSendMessage} className="p-4 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                  />
                  <button
                    type="submit"
                    className="bg-[#E63946] text-white p-2 rounded-lg hover:bg-[#C53030] transition-colors"
                  >
                    <FaPaperPlane />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#E63946] text-white p-4 rounded-full shadow-xl hover:bg-[#C53030] hover:scale-110 transition-all"
        >
          <FaRobot className="text-2xl" />
        </button>
      )}
    </div>
  );
};
export default ChatBot;
// Add this component to your UserDashboard component
// In UserDashboard's return statement, add <ChatBot /> before the closing </> tag



// server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const axios = require('axios');

// const app = express();
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/rental_chatbot', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // FAQ Schema
// const faqSchema = new mongoose.Schema({
//   keywords: [String],
//   question: String,
//   answer: String
// });
// const FAQ = mongoose.model('FAQ', faqSchema);

// // Hugging Face GPT API (Using Free Inference API)
// const HF_API_KEY = 'your_huggingface_api_key';
// const GPT_MODEL = 'gpt2'; // or other available models

// app.post('/api/chat', async (req, res) => {
//   const { message } = req.body;

//   try {
//     // First check MongoDB for keyword matches
//     const keywords = message.toLowerCase().split(' ');
//     const faq = await FAQ.findOne({ keywords: { $in: keywords } });

//     if (faq) {
//       return res.json({ response: faq.answer });
//     }

//     // If no FAQ found, use GPT model
//     const response = await axios.post(
//       `https://api-inference.huggingface.co/models/${GPT_MODEL}`,
//       {
//         inputs: message,
//         parameters: {
//           max_length: 100,
//           temperature: 0.7
//         }
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${HF_API_KEY}`
//         }
//       }
//     );

//     res.json({ response: response.data[0].generated_text });
//   } catch (error) {
//     console.error('Chat error:', error);
//     res.status(500).json({ error: 'Error processing your request' });
//   }
// });

// app.listen(3001, () => console.log('Server running on port 3001'));

// Create some sample FAQs in your database:

// javascript
// Copy
// // Seed database with sample FAQs
// const faqs = [
//   {
//     keywords: ['rent', 'policy', 'terms'],
//     question: 'What is your rental policy?',
//     answer: 'Our standard rental period is 7 days with possible extension. A security deposit of 20% is required.'
//   },
//   {
//     keywords: ['payment', 'method', 'credit'],
//     question: 'What payment methods do you accept?',
//     answer: 'We accept all major credit cards and PayPal payments.'
//   },
//   {
//     keywords: ['damage', 'broken', 'accident'],
//     question: 'What happens if I damage an item?',
//     answer: 'Please report any damage immediately. Minor damage is covered by our protection plan, major damage may incur repair costs.'
//   }
// ];

// FAQ.insertMany(faqs);
// To use this setup:

// a. Get a free Hugging Face token:

// Go to https://huggingface.co/

// Create an account

// Get your API token from Settings