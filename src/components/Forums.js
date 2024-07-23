import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaComments, FaUser, FaEye, FaReply, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const forumCategories = [
  { id: 1, name: "General Discussion", icon: "🥋", threads: 1250, posts: 8750 },
  { id: 2, name: "Technique Exchange", icon: "🥊", threads: 980, posts: 6540 },
  { id: 3, name: "Training Tips", icon: "💪", threads: 750, posts: 4200 },
  { id: 4, name: "Nutrition & Diet", icon: "🥗", threads: 620, posts: 3100 },
  { id: 5, name: "Equipment Reviews", icon: "🥋", threads: 480, posts: 2400 },
  { id: 6, name: "Competition Talk", icon: "🏆", threads: 890, posts: 5600 },
];

const recentThreads = [
  { id: 1, title: "Best ways to improve cardio for MMA?", author: "FighterJoe", category: "Training Tips", replies: 23, views: 456, lastPost: "2 hours ago" },
  { id: 2, title: "Review: New Venum Pro Series Gloves", author: "GearHead", category: "Equipment Reviews", replies: 15, views: 302, lastPost: "5 hours ago" },
  { id: 3, title: "UFC 300 Predictions Thread", author: "UFCFanatic", category: "Competition Talk", replies: 87, views: 1205, lastPost: "1 hour ago" },
  { id: 4, title: "Beginner's Guide to BJJ", author: "BJJMaster", category: "Technique Exchange", replies: 42, views: 890, lastPost: "3 hours ago" },
];

function Forums() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <FaArrowLeft className="mr-2" />
        Back to Dashboard
      </Link>

      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <FaComments className="mr-2 text-red-600" />
        FighterID Forums
      </h1>

      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search forums"
            className="w-full p-2 pl-8 pr-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-red-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Forum Categories</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {forumCategories.map((category) => (
              <div key={category.id} className="border-b last:border-b-0 p-4 hover:bg-gray-50 transition duration-150 ease-in-out">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    <div>
                      <h3 className="font-semibold text-lg">{category.name}</h3>
                      <p className="text-sm text-gray-600">
                        {category.threads} threads · {category.posts} posts
                      </p>
                    </div>
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm transition duration-300">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Recent Threads</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {recentThreads.map((thread) => (
              <div key={thread.id} className="border-b last:border-b-0 p-4 hover:bg-gray-50 transition duration-150 ease-in-out">
                <h3 className="font-semibold text-lg mb-2">{thread.title}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <FaUser className="mr-1" />
                  <span className="mr-4">{thread.author}</span>
                  <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">{thread.category}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FaReply className="mr-1" />
                  <span className="mr-4">{thread.replies} replies</span>
                  <FaEye className="mr-1" />
                  <span className="mr-4">{thread.views} views</span>
                  <span>Last post: {thread.lastPost}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Discussion</h2>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-2">The Impact of Cross-Training in MMA</h3>
          <p className="text-gray-600 mb-4">
            Join the discussion on how incorporating various martial arts and training methods can enhance an MMA fighter's performance. Share your experiences and learn from others!
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-green-600 hover:text-green-700">
                <FaThumbsUp className="mr-1" />
                <span>152</span>
              </button>
              <button className="flex items-center text-red-600 hover:text-red-700">
                <FaThumbsDown className="mr-1" />
                <span>23</span>
              </button>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition duration-300">
              Join Discussion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forums;
