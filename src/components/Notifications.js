import React, { useState } from 'react';
import { FaCog, FaEllipsisH, FaThumbsUp, FaComment, FaBell, FaUser, FaAt, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const mockNotifications = [
  {
    id: 1,
    user: {
      name: "John Doe",
      avatar: "/assets/john-doe-avatar.jpg"
    },
    action: "commented on",
    content: "Your recent post about UFC 300",
    time: "2 hours ago",
    reactions: 5,
    comments: 2,
    useful: null,
    type: 'comment'
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      avatar: "/assets/jane-smith-avatar.jpg"
    },
    action: "reacted to",
    content: "Your comment on Israel Adesanya's post",
    time: "4 hours ago",
    reactions: 1,
    comments: 0,
    useful: null,
    type: 'reaction'
  },
  {
    id: 3,
    user: {
      name: "Mike Johnson",
      avatar: "/assets/mike-johnson-avatar.jpg"
    },
    action: "mentioned you in",
    content: "a post about upcoming MMA events",
    time: "1 day ago",
    reactions: 0,
    comments: 3,
    useful: null,
    type: 'mention'
  },
  // Add more mock notifications as needed
];

const NotificationItem = ({ notification, onFeedback }) => {
  const getActionColor = (type) => {
    switch(type) {
      case 'comment': return 'text-blue-500';
      case 'reaction': return 'text-green-500';
      case 'mention': return 'text-purple-500';
      default: return 'text-gray-500';
    }
  };

  const getActionIcon = (type) => {
    switch(type) {
      case 'comment': return <FaComment className={`${getActionColor(type)} mr-2`} />;
      case 'reaction': return <FaThumbsUp className={`${getActionColor(type)} mr-2`} />;
      case 'mention': return <FaAt className={`${getActionColor(type)} mr-2`} />;
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={notification.user.avatar} alt={notification.user.name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="font-semibold text-gray-800">
              {notification.user.name} 
              <span className={`font-normal ${getActionColor(notification.type)} ml-1`}>
                {getActionIcon(notification.type)}
                {notification.action}
              </span>
            </p>
            <p className="text-sm text-gray-600">{notification.content}</p>
            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
          </div>
        </div>
        <div className="flex items-center">
          {notification.reactions > 0 && (
            <span className="mr-2 text-sm text-gray-600"><FaThumbsUp className="inline mr-1 text-blue-500" />{notification.reactions}</span>
          )}
          {notification.comments > 0 && (
            <span className="mr-2 text-sm text-gray-600"><FaComment className="inline mr-1 text-green-500" />{notification.comments}</span>
          )}
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <FaEllipsisH />
          </button>
        </div>
      </div>
      {notification.useful === null && (
        <div className="mt-2 text-sm">
          <span className="text-gray-600">Is this notification useful? </span>
          <button onClick={() => onFeedback(notification.id, true)} className="text-blue-500 hover:text-blue-700 font-medium mr-2">Yes</button>
          <button onClick={() => onFeedback(notification.id, false)} className="text-red-500 hover:text-red-700 font-medium">No</button>
        </div>
      )}
    </div>
  );
};

function Notifications() {
  const [filter, setFilter] = useState('all');
  const [notifications, setNotifications] = useState(mockNotifications);

  const handleFeedback = (id, isUseful) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, useful: isUseful } : notif
    ));
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'all') return true;
    if (filter === 'my-posts') return notif.content.includes('Your');
    if (filter === 'mentions') return notif.type === 'mention';
    return true;
  });

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-gray-600 hover:text-gray-900 flex items-center mb-4">
          <FaArrowLeft className="mr-2" /> Back to Dashboard
        </Link>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
            <Link to="/notification-settings" className="text-blue-500 hover:text-blue-700 flex items-center">
              <FaCog className="mr-2" /> Settings
            </Link>
          </div>
          <div className="flex mb-6 border-b">
            <button 
              onClick={() => setFilter('all')} 
              className={`mr-4 pb-2 ${filter === 'all' ? 'text-blue-500 font-semibold border-b-2 border-blue-500' : 'text-gray-500'}`}
            >
              <FaBell className="inline-block mr-1" /> All
            </button>
            <button 
              onClick={() => setFilter('my-posts')} 
              className={`mr-4 pb-2 ${filter === 'my-posts' ? 'text-blue-500 font-semibold border-b-2 border-blue-500' : 'text-gray-500'}`}
            >
              <FaUser className="inline-block mr-1" /> My posts
            </button>
            <button 
              onClick={() => setFilter('mentions')} 
              className={`mr-4 pb-2 ${filter === 'mentions' ? 'text-blue-500 font-semibold border-b-2 border-blue-500' : 'text-gray-500'}`}
            >
              <FaAt className="inline-block mr-1" /> Mentions
            </button>
          </div>
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map(notification => (
              <NotificationItem 
                key={notification.id} 
                notification={notification} 
                onFeedback={handleFeedback}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">No notifications to display.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Notifications;
