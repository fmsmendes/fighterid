import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserFriends, FaComments, FaTrophy, FaCalendarAlt, FaUser, FaBell, FaEnvelope, FaSearch, FaThumbsUp, FaComment, FaShare, FaReply } from 'react-icons/fa';
import { GiBoxingGlove, GiNinjaMask } from 'react-icons/gi';
import Notifications from './Notifications';

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [newPost, setNewPost] = useState('');
  const [expandedComments, setExpandedComments] = useState({});
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: "Israel Adesanya",
        title: "UFC Middleweight Champion",
        avatar: "/assets/israel-adesanya.jpg"
      },
      content: "Just finished an intense training session. Always pushing the limits. #TheLastStylebender #UFC",
      image: "/assets/IsraelAdesanya_session.jpg",
      likes: 1523,
      comments: [
        {
          id: 1,
          user: {
            name: "Jon Jones",
            avatar: "/assets/jon-jones-avatar.jpg"
          },
          content: "Looking sharp, champ! Can't wait for your next fight.",
          likes: 45,
          replies: [
            {
              id: 1,
              user: {
                name: "Israel Adesanya",
                avatar: "/assets/israel-adesanya.jpg"
              },
              content: "Thanks, Jon! Stay tuned, big things coming.",
              likes: 23
            }
          ]
        },
        {
          id: 2,
          user: {
            name: "Dana White",
            avatar: "/assets/dana-white-avatar.jpg"
          },
          content: "Great work, Izzy. The fans are excited for your next title defense.",
          likes: 78,
          replies: []
        }
      ],
      shares: 34
    },
    {
      id: 2,
      user: {
        name: "UFC",
        title: "Sponsored",
        avatar: "/assets/ufcprofile.jpg"
      },
      content: "UFC 300 is coming! The biggest event in UFC history. Don't miss out on this epic night of fights. Who's your pick for the main event?",
      image: "/assets/ufc-300.jpg",
      likes: 5678,
      comments: [
        {
          id: 1,
          user: {
            name: "Conor McGregor",
            avatar: "/assets/conor-mcgregor-avatar.jpg"
          },
          content: "I'm coming for that main event spot! The Notorious is back!",
          likes: 1023,
          replies: [
            {
              id: 1,
              user: {
                name: "Dustin Poirier",
                avatar: "/assets/dustin-poirier-avatar.jpg"
              },
              content: "Let's run it back one more time, Conor!",
              likes: 567
            }
          ]
        },
        {
          id: 2,
          user: {
            name: "Khabib Nurmagomedov",
            avatar: "/assets/khabib-nurmagomedov-avatar.jpg"
          },
          content: "The lightweight division is still the most exciting. Can't wait to see who takes the belt next.",
          likes: 890,
          replies: []
        }
      ],
      shares: 98
    }
  ]);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      const newPostObj = {
        id: posts.length + 1,
        user: {
          name: "Amanda Nunes",
          title: "UFC Women's Featherweight & Bantamweight Champion",
          avatar: "/assets/amanda-nunes-profile.jpg"
        },
        content: newPost,
        likes: 0,
        comments: [],
        shares: 0
      };
      setPosts([newPostObj, ...posts]);
      setNewPost('');
    }
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleComment = (postId, comment) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
    ));
  };

  const handleReply = (postId, commentId, reply) => {
    setPosts(posts.map(post => 
      post.id === postId ? {
        ...post,
        comments: post.comments.map(comment =>
          comment.id === commentId ? { ...comment, replies: [...comment.replies, reply] } : comment
        )
      } : post
    ));
  };

  const toggleComments = (postId) => {
    setExpandedComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center">
            <img className="h-8 w-auto" src="/logo.png" alt="FitherID" />
            <div className="ml-4 relative">
              <input 
                type="text" 
                placeholder="Search fighters, gyms, events..." 
                className="border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          <nav className="flex items-center space-x-4">
  <Link to="/" className="text-gray-600 hover:text-gray-900 flex items-center"><FaHome className="mr-1" /> Home</Link>
  <Link to="/fight-network" className="text-gray-600 hover:text-gray-900 flex items-center"><FaUserFriends className="mr-1" /> Network</Link>
  <Link to="/forums" className="text-gray-600 hover:text-gray-900 flex items-center"><FaComments className="mr-1" /> Forums</Link>
  <Link to="/events" className="text-gray-600 hover:text-gray-900 flex items-center"><FaCalendarAlt className="mr-1" /> Events</Link>
  <Link to="/profile" className="text-gray-600 hover:text-gray-900 flex items-center"><FaUser className="mr-1" /> Profile</Link>
  <Link to="/notifications" className="text-gray-600 hover:text-gray-900 relative">
    <FaBell />
    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">3</span>
  </Link>
  <Link to="/messaging" className="text-gray-600 hover:text-gray-900 relative">
    <FaEnvelope />
    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">2</span>
  </Link>
</nav>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex space-x-4">
          {/* Left column */}
          <div className="w-1/4">
            <div className="bg-white shadow rounded-lg p-4 mb-4">
              <img className="h-24 w-24 rounded-full mx-auto mb-4" src="/assets/amanda-nunes-profile.jpg" alt="Amanda Nunes" />
              <h2 className="text-center text-xl font-bold">Amanda "The Lioness" Nunes</h2>
              <p className="text-center text-sm text-gray-500 mb-4">UFC Women's Featherweight & Bantamweight Champion</p>
              <div className="flex justify-around text-center">
                <div>
                  <p className="font-bold">1.5M</p>
                  <p className="text-sm text-gray-500">Followers</p>
                </div>
                <div>
                  <p className="font-bold">500</p>
                  <p className="text-sm text-gray-500">Following</p>
                </div>
                <div>
                  <p className="font-bold">21-5</p>
                  <p className="text-sm text-gray-500">Record</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4 mb-4">
              <h3 className="font-bold mb-2">Trending Topics</h3>
              <p className="text-sm text-blue-600 hover:underline cursor-pointer mb-1">#UFC300</p>
              <p className="text-sm text-blue-600 hover:underline cursor-pointer mb-1">#WomenInMMA</p>
              <p className="text-sm text-blue-600 hover:underline cursor-pointer">#ChampChamp</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="font-bold mb-2">Suggested Connections</h3>
              <div className="flex items-center mb-2">
                <img className="h-10 w-10 rounded-full mr-2" src="/assets/khabbNurmagomedov.jpg" alt="Khabib Nurmagomedov" />
                <div>
                  <p className="font-semibold">Khabib Nurmagomedov</p>
                  <p className="text-sm text-gray-500">Former UFC Lightweight Champion</p>
                </div>
              </div>
              <div className="flex items-center">
                <img className="h-10 w-10 rounded-full mr-2" src="/assets/rosenamajunas.jpg" alt="Rose Namajunas" />
                <div>
                  <p className="font-semibold">Rose Namajunas</p>
                  <p className="text-sm text-gray-500">UFC Strawweight Champion</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle column */}
          <div className="w-1/2">
            <div className="bg-white shadow rounded-lg p-4 mb-4">
              <form onSubmit={handlePostSubmit}>
                <textarea 
                  className="w-full border rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Share your thoughts, training tips, or upcoming fights..."
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                ></textarea>
                <div className="flex justify-between items-center">
                  <div>
                    <button type="button" className="text-gray-600 hover:text-gray-900 mr-2"><FaCalendarAlt /> Event</button>
                    <button type="button" className="text-gray-600 hover:text-gray-900 mr-2"><GiBoxingGlove /> Training</button>
                    <button type="button" className="text-gray-600 hover:text-gray-900"><GiNinjaMask /> Technique</button>
                  </div>
                  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">Post</button>
                </div>
              </form>
            </div>
            {posts.map(post => (
              <div key={post.id} className="bg-white shadow rounded-lg p-4 mb-4">
                <div className="flex items-center mb-4">
                  <img className="h-12 w-12 rounded-full mr-4" src={post.user.avatar} alt={post.user.name} />
                  <div>
                    <h3 className="font-bold">{post.user.name}</h3>
                    <p className="text-sm text-gray-500">{post.user.title}</p>
                  </div>
                </div>
                <p className="mb-4">{post.content}</p>
                {post.image && <img className="w-full rounded-lg mb-4" src={post.image} alt="Post content" />}
                <div className="flex justify-between text-gray-500 mb-4">
                  <button onClick={() => handleLike(post.id)} className="flex items-center hover:text-blue-600 transition duration-300">
                    <FaThumbsUp className="mr-1" /> {post.likes}
                  </button>
                  <button onClick={() => toggleComments(post.id)} className="flex items-center hover:text-blue-600 transition duration-300">
                    <FaComment className="mr-1" /> {post.comments.length}
                  </button>
                  <button className="flex items-center hover:text-blue-600 transition duration-300">
                    <FaShare className="mr-1" /> {post.shares}
                  </button>
                </div>
                {expandedComments[post.id] && (
                  <div className="border-t pt-4">
                    <h4 className="font-bold mb-2">Comments</h4>
                    {post.comments.map(comment => (
                    <div key={comment.id} className="mb-4">
                      <div className="flex items-start mb-2">
                        <img className="h-8 w-8 rounded-full mr-2" src={comment.user.avatar} alt={comment.user.name} />
                        <div className="bg-gray-100 rounded-lg p-2 flex-grow">
                          <p className="font-semibold">{comment.user.name}</p>
                          <p>{comment.content}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 ml-10">
                        <button className="mr-2 hover:text-blue-600">Like ({comment.likes})</button>
                        <button className="hover:text-blue-600">Reply</button>
                      </div>
                      {comment.replies && comment.replies.length > 0 && (
                        <div className="ml-10 mt-2">
                          {comment.replies.map(reply => (
                            <div key={reply.id} className="flex items-start mb-2">
                              <img className="h-6 w-6 rounded-full mr-2" src={reply.user.avatar} alt={reply.user.name} />
                              <div className="bg-gray-100 rounded-lg p-2 flex-grow">
                                <p className="font-semibold">{reply.user.name}</p>
                                <p>{reply.content}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    ))}
                    <div className="flex items-center mt-2">
                    <img className="h-8 w-8 rounded-full mr-2" src="/assets/amanda-nunes-profile.jpg" alt="Your Avatar" />
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      className="border rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="w-1/4">
            <div className="bg-white shadow rounded-lg p-4 mb-4">
              <h3 className="font-bold mb-2">Upcoming Events</h3>
              <div className="mb-2">
                <p className="font-semibold">UFC 300</p>
                <p className="text-sm text-gray-500">July 15, 2023 - Las Vegas, NV</p>
              </div>
              <div>
                <p className="font-semibold">Bellator 290</p>
                <p className="text-sm text-gray-500">August 5, 2023 - Los Angeles, CA</p>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="font-bold mb-2">Training Tips</h3>
              <p className="text-sm mb-2">1. Always warm up properly before intense training.</p>
              <p className="text-sm mb-2">2. Focus on technique before power in striking drills.</p>
              <p className="text-sm">3. Stay hydrated throughout your training sessions.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
