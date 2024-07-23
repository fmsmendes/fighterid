import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaSearch } from 'react-icons/fa';

const events = [
  {
    id: 1,
    title: "UFC 300",
    date: { day: "15", month: "Jul" },
    time: "10:00 PM ET",
    location: "T-Mobile Arena, Las Vegas",
    image: "/assets/ufc-300.jpg"
  },
  {
    id: 2,
    title: "Bellator 290",
    date: { day: "05", month: "Aug" },
    time: "9:00 PM ET",
    location: "The Forum, Los Angeles",
    image: "/assets/bellator-290.jpg"
  },
  {
    id: 3,
    title: "ONE Championship: Century",
    date: { day: "10", month: "Sep" },
    time: "8:00 AM ET",
    location: "Singapore Indoor Stadium",
    image: "/assets/one-championship.jpg"
  }
];

function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Upcoming');

  const filters = [
    "This weekend", "Upcoming", "Near me", "2024", "Today", "This month", "This week", "Next month", "Olympic"
  ];

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <FaArrowLeft className="mr-2" />
        Back to Dashboard
      </Link>

      <h1 className="text-3xl font-bold mb-6">Fight Events</h1>

      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search events"
            className="w-full p-2 pl-8 pr-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-red-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedFilter === filter
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <div className="w-24 bg-red-600 text-white flex flex-col items-center justify-center p-2">
              <span className="text-3xl font-bold">{event.date.day}</span>
              <span className="text-sm">{event.date.month}</span>
            </div>
            <div className="flex-1 p-4">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-2 flex items-center">
                <FaClock className="mr-2" /> {event.time}
              </p>
              <p className="text-gray-600 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> {event.location}
              </p>
            </div>
            <img src={event.image} alt={event.title} className="w-32 object-cover" />
          </div>
        ))}
      </div>

      <button className="mt-6 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
        Search more events
      </button>
    </div>
  );
}

export default EventsPage;
