import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaStar, FaVideo, FaPaperclip, FaSmile, FaPaperPlane, FaEllipsisV, FaChevronLeft, FaArrowLeft } from 'react-icons/fa';

function Messaging() {
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('Focused');
  const [activeConversation, setActiveConversation] = useState(null);
  const [showMobileConversation, setShowMobileConversation] = useState(false);
  const messageEndRef = useRef(null);

  const conversations = [
    {
      id: 1,
      user: {
        name: "UFC",
        avatar: "/assets/ufcprofile.jpg",
        status: "Official Sponsor"
      },
      lastMessage: "Sponsored: UFC 300 is coming! Don't miss out on...",
      date: "Jul 17",
      messages: [
        {
          id: 1,
          content: "UFC 300 is coming! Don't miss out on the biggest event in UFC history.",
          timestamp: "2:30 PM",
          sender: "UFC"
        },
        {
          id: 2,
          content: "Thanks for the heads up! I'm definitely interested.",
          timestamp: "3:15 PM",
          sender: "You"
        },
        {
          id: 3,
          content: "Great! We'll keep you updated on ticket sales and fight card announcements.",
          timestamp: "3:20 PM",
          sender: "UFC"
        }
      ]
    },
    {
      id: 2,
      user: {
        name: "Gracie Jiu-Jitsu Academy",
        avatar: "/assets/graciejiu-jitsuacademy.jpg",
        status: "Training Partner"
      },
      lastMessage: "Your next training session is scheduled for...",
      date: "Jul 10",
      messages: [
        {
          id: 1,
          content: "Your next training session is scheduled for tomorrow at 10 AM. Don't forget your gi!",
          timestamp: "9:00 AM",
          sender: "Gracie Jiu-Jitsu Academy"
        },
        {
          id: 2,
          content: "Got it, thanks for the reminder. I'll be there!",
          timestamp: "9:05 AM",
          sender: "You"
        },
        {
          id: 3,
          content: "Great! We'll be focusing on guard passes and submissions.",
          timestamp: "9:10 AM",
          sender: "Gracie Jiu-Jitsu Academy"
        }
      ]
    },
    {
      id: 3,
      user: {
        name: "Conor McGregor",
        avatar: "/assets/conormcgregor.jpg",
        status: "Available on mobile"
      },
      lastMessage: "Hey mate, want to do some sparring next week?",
      date: "Jul 5",
      messages: [
        {
          id: 1,
          content: "Hey mate, want to do some sparring next week?",
          timestamp: "4:08 PM",
          sender: "Conor McGregor"
        },
        {
          id: 2,
          content: "I've got some new techniques I want to try out.",
          timestamp: "4:09 PM",
          sender: "Conor McGregor"
        },
        {
          id: 3,
          content: "Sounds great! How about next Tuesday at the gym?",
          timestamp: "4:15 PM",
          sender: "You"
        },
        {
          id: 4,
          content: "Perfect, see you then. Bring your A-game!",
          timestamp: "4:20 PM",
          sender: "Conor McGregor"
        }
      ]
    },
    {
      id: 4,
      user: {
        name: "Venum Fight Gear",
        avatar: "/assets/venum-profile.jpg",
        status: "Official Sponsor"
      },
      lastMessage: "Sponsored: Check out our new line of MMA gloves...",
      date: "Jul 1",
      messages: [
        {
          id: 1,
          content: "Check out our new line of MMA gloves! Designed for maximum protection and performance.",
          timestamp: "11:00 AM",
          sender: "Venum Fight Gear"
        },
        {
          id: 2,
          content: "They look great! Are they available in different sizes?",
          timestamp: "11:30 AM",
          sender: "You"
        },
        {
          id: 3,
          content: "Yes, we have sizes from S to XL. We'd be happy to send you a pair to try out!",
          timestamp: "11:35 AM",
          sender: "Venum Fight Gear"
        }
      ]
    },
    {
      id: 5,
      user: {
        name: "Coach John Kavanagh",
        avatar: "/assets/coachjohnkavanagh.jpg",
        status: "Head Coach"
      },
      lastMessage: "Here's the video analysis of your last fight...",
      date: "Jun 30",
      messages: [
        {
          id: 1,
          content: "Here's the video analysis of your last fight. Great performance overall!",
          timestamp: "3:00 PM",
          sender: "Coach John Kavanagh"
        },
        {
          id: 2,
          content: "Thanks, Coach! I'll review it right away.",
          timestamp: "3:05 PM",
          sender: "You"
        },
        {
          id: 3,
          content: "Let's discuss it in detail during our next training session. We'll work on tightening up your defense.",
          timestamp: "3:10 PM",
          sender: "Coach John Kavanagh"
        }
      ]
    },
    {
      id: 6,
      user: {
        name: "Dana White",
        avatar: "/assets/danawhite.jpg",
        status: "UFC President"
      },
      lastMessage: "You: Thanks for the opportunity, I'm ready for...",
      date: "Jun 27",
      messages: [
        {
          id: 1,
          content: "We're considering you for the main event at UFC 305. Are you interested?",
          timestamp: "10:00 AM",
          sender: "Dana White"
        },
        {
          id: 2,
          content: "Absolutely! I'm honored and ready for the challenge.",
          timestamp: "10:05 AM",
          sender: "You"
        },
        {
          id: 3,
          content: "Great! We'll send over the contract details soon. Start preparing, it's going to be a big one!",
          timestamp: "10:10 AM",
          sender: "Dana White"
        },
        {
          id: 4,
          content: "Thanks for the opportunity, I'm ready for this and won't let you down!",
          timestamp: "10:15 AM",
          sender: "You"
        }
      ]
    }
  ];

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeConversation]);

  const handleConversationClick = (conv) => {
    setActiveConversation(conv);
    setShowMobileConversation(true);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && activeConversation) {
      const newMessage = {
        id: activeConversation.messages.length + 1,
        content: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sender: 'You'
      };
      setActiveConversation(prev => ({
        ...prev,
        messages: [...prev.messages, newMessage]
      }));
      setMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left sidebar */}
      <div className={`w-full md:w-1/3 bg-white border-r ${showMobileConversation ? 'hidden md:block' : 'block'}`}>
        <div className="p-4 sticky top-0 bg-white z-10">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
  <FaArrowLeft className="mr-2" />
  Back to Dashboard
</Link>
          <h1 className="text-2xl font-bold mb-4">Fighter Messages</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search messages"
              className="w-full p-2 pl-8 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
        <div className="flex border-b overflow-x-auto">
          {['Focused', 'Unread', 'Fighters', 'Sponsors', 'Starred'].map((tab) => (
            <button
              key={tab}
              className={`flex-shrink-0 px-4 py-2 ${activeTab === tab ? 'border-b-2 border-red-600 text-red-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="overflow-y-auto h-full">
          {conversations.map((conv) => (
            <div 
              key={conv.id} 
              className="flex items-center p-4 hover:bg-gray-100 cursor-pointer transition duration-150 ease-in-out"
              onClick={() => handleConversationClick(conv)}
            >
              <img src={conv.user.avatar} alt={conv.user.name} className="w-12 h-12 rounded-full mr-4" />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 truncate">{conv.user.name}</h3>
                <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
              </div>
              <span className="text-xs text-gray-500">{conv.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right conversation area */}
      {activeConversation && (
        <div className={`flex-1 flex flex-col ${showMobileConversation ? 'block' : 'hidden md:flex'}`}>
          <div className="bg-white p-4 flex items-center justify-between border-b sticky top-0 z-10">
            <div className="flex items-center">
              <button className="md:hidden mr-2 text-gray-600" onClick={() => setShowMobileConversation(false)}>
                <FaChevronLeft />
              </button>
              <img src={activeConversation.user.avatar} alt={activeConversation.user.name} className="w-10 h-10 rounded-full mr-4" />
              <div>
                <h2 className="font-semibold">{activeConversation.user.name}</h2>
                <p className="text-sm text-gray-600">{activeConversation.user.status}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button className="text-gray-600 hover:text-gray-800 mr-4 transition duration-150 ease-in-out"><FaVideo /></button>
              <button className="text-gray-600 hover:text-gray-800 mr-4 transition duration-150 ease-in-out"><FaStar /></button>
              <button className="text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out"><FaEllipsisV /></button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {activeConversation.messages.map((msg) => (
              <div key={msg.id} className={`mb-4 flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-end ${msg.sender === 'You' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {msg.sender !== 'You' && (
                    <img src={activeConversation.user.avatar} alt={msg.sender} className="w-8 h-8 rounded-full mr-2" />
                  )}
                  <div className={`max-w-xs lg:max-w-md xl:max-w-lg ${msg.sender === 'You' ? 'bg-red-500 text-white' : 'bg-white'} rounded-lg p-3 shadow`}>
                    <p>{msg.content}</p>
                    <p className="text-xs mt-1 text-gray-500">{msg.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>
          <div className="bg-white p-4 border-t sticky bottom-0">
            <form onSubmit={handleSendMessage} className="flex items-center">
              <input
                type="text"
                placeholder="Write a message..."
                className="flex-1 p-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-red-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="button" className="ml-2 text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out"><FaPaperclip /></button>
              <button type="button" className="ml-2 text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out"><FaSmile /></button>
              <button type="submit" className="ml-2 text-red-600 hover:text-red-800 transition duration-150 ease-in-out" disabled={!message.trim()}><FaPaperPlane /></button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Messaging;