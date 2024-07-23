import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrophy, FaMedal, FaCalendarAlt, FaMapMarkerAlt, FaBirthdayCake, FaUserFriends, FaDumbbell, FaCheckCircle, FaTimesCircle, FaArrowLeft, FaFistRaised, FaHandshake, FaInfoCircle, FaHistory } from 'react-icons/fa';
import { GiBoxingGlove, GiKimono, GiPunchingBag, GiMuscleUp } from 'react-icons/gi';
import EditProfileForm from './EditProfileForm';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Amanda Nunes",
    nickname: "The Lioness",
    profilePicture: "/assets/amanda-nunes-profile.jpg",
    coverPhoto: "/ufc-arena-cover.jpg",
    bio: "UFC Women's Featherweight & Bantamweight Champion",
    location: "Miami, Florida",
    dateOfBirth: "May 30, 1988",
    followers: 2500000,
    following: 500,
    record: "21-5-0",
    totalFights: 26,
    availableToFight: false,
    titles: ["UFC Women's Featherweight Champion", "UFC Women's Bantamweight Champion"],
    gym: "American Top Team",
    about: `I am Amanda Nunes, known as "The Lioness" in the world of mixed martial arts. Born and raised in Brazil, I discovered my passion for fighting at a young age. My journey in MMA has been one of relentless determination, continuous growth, and breaking barriers.
          As the first woman in UFC history to hold championship belts in two weight classes simultaneously, I've dedicated my life to mastering various martial arts disciplines. My approach combines the technical precision of Brazilian Jiu-Jitsu, the power of boxing, the versatility of Muay Thai, and the grappling prowess of wrestling.
          Beyond the octagon, I'm an advocate for LGBTQ+ rights and women's empowerment in sports. I believe in using my platform to inspire others, especially young girls, to pursue their dreams fearlessly. When I'm not training or competing, I enjoy spending time with my family, including my wife Nina and our daughter Raegan.
          My goal is to continue pushing the boundaries of what's possible in MMA, defending my titles, and cementing my legacy as one of the greatest fighters of all time. I'm grateful for the support of my fans, my team at American Top Team, and everyone who has been part of my journey.
          In this sport, every day is an opportunity to learn, grow, and become stronger. I approach each fight with the heart of a lioness - fierce, proud, and unstoppable.`,
    martialArts: [
      { style: "Brazilian Jiu-Jitsu", rank: "Black Belt" },
      { style: "Boxing", level: "Professional" },
      { style: "Muay Thai", level: "Advanced" },
      { style: "Wrestling", level: "Collegiate" }
    ],
    recentFights: [
      { opponent: "Julianna Peña", event: "UFC 277", result: "Win", date: "July 30, 2022" },
      { opponent: "Julianna Peña", event: "UFC 269", result: "Loss", date: "December 11, 2021" },
      { opponent: "Megan Anderson", event: "UFC 259", result: "Win", date: "March 6, 2021" },
    ],
    fighterStats: {
      totalFights: 26,
      wins: 21,
      losses: 5,
      draws: 0,
      koTko: 13,
      submissions: 4,
      decisions: 4
    },
    martialArtsExperience: [
      { year: 2005, event: "Started training Brazilian Jiu-Jitsu", belt: "White Belt" },
      { year: 2008, event: "Earned Blue Belt in Brazilian Jiu-Jitsu", belt: "Blue Belt" },
      { year: 2010, event: "Started professional MMA career", belt: "" },
      { year: 2012, event: "Earned Purple Belt in Brazilian Jiu-Jitsu", belt: "Purple Belt" },
      { year: 2015, event: "Earned Brown Belt in Brazilian Jiu-Jitsu", belt: "Brown Belt" },
      { year: 2018, event: "Earned Black Belt in Brazilian Jiu-Jitsu", belt: "Black Belt" },
    ]
  });

  const getMarialArtIcon = (style) => {
    switch (style.toLowerCase()) {
      case 'brazilian jiu-jitsu':
        return <GiKimono className="h-5 w-5 text-indigo-600" />;
      case 'boxing':
        return <GiBoxingGlove className="h-5 w-5 text-indigo-600" />;
      case 'muay thai':
        return <FaFistRaised className="h-5 w-5 text-indigo-600" />;
      case 'wrestling':
        return <GiMuscleUp className="h-5 w-5 text-indigo-600" />;
      default:
        return <FaFistRaised className="h-5 w-5 text-indigo-600" />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Back to Dashboard Link */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900 flex items-center">
            <FaArrowLeft className="mr-2" /> Back to Dashboard
          </Link>
        </div>
      </div>

      {/* Cover Photo */}
      <div 
        className="relative h-64 bg-cover bg-center" 
        style={{backgroundImage: `url(${profile.coverPhoto})`}}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Profile Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:space-x-5">
                <div className="flex-shrink-0">
                  <img 
                    className="mx-auto h-32 w-32 rounded-full border-4 border-white shadow-lg" 
                    src={profile.profilePicture} 
                    alt={profile.name} 
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:pt-1 text-center sm:text-left">
                  <p className="text-xl font-bold text-gray-900 sm:text-2xl">{profile.name}</p>
                  <p className="text-sm font-medium text-gray-600">{profile.nickname}</p>
                  <p className="text-sm font-medium text-gray-600 mt-1">{profile.bio}</p>
                </div>
              </div>
              <div className="mt-5 sm:mt-0">
                <button 
                  onClick={() => setIsEditing(!isEditing)} 
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  <FaEdit className="mr-2" /> {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                </button>
              </div>
            </div>

            {isEditing ? (
              <EditProfileForm profile={profile} setProfile={setProfile} setIsEditing={setIsEditing} />
            ) : (
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-500">{profile.location}</span>
                  </div>
                  <div className="flex items-center">
                    <FaBirthdayCake className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-500">{profile.dateOfBirth}</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    <FaUserFriends className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-500">{profile.followers.toLocaleString()} followers</span>
                  </div>
                  <div className="flex items-center">
                    <GiBoxingGlove className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-500">Record: {profile.record}</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    <GiBoxingGlove className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-500">Total Fights: {profile.totalFights}</span>
                  </div>
                  <div className="flex items-center">
                    {profile.availableToFight ? (
                      <>
                        <FaCheckCircle className="h-5 w-5 text-green-500" />
                        <span className="ml-2 text-sm text-green-500">Available to Fight</span>
                      </>
                    ) : (
                      <>
                        <FaTimesCircle className="h-5 w-5 text-red-500" />
                        <span className="ml-2 text-sm text-red-500">Not Available to Fight</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
            {profile.titles.map((title, index) => (
              <div key={index} className="px-6 py-5 text-sm font-medium text-center">
                <span className="text-gray-900">
                  <FaTrophy className="inline mr-2 text-yellow-400" />
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* About Section */}
<div className="mt-8">
  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
        <FaInfoCircle className="mr-2" /> About Me
      </h3>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
      <p className="text-sm text-gray-500 whitespace-pre-line">{profile.about}</p>
    </div>
  </div>
</div>

        {/* Gym and Martial Arts */}
        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Gym and Martial Arts</h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 flex items-center">
                  <FaDumbbell className="mr-2" /> Gym/Academy
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{profile.gym}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 flex items-center">
                  <GiKimono className="mr-2" /> Martial Arts
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    {profile.martialArts.map((art, index) => (
                      <li key={index} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          {getMarialArtIcon(art.style)}
                          <span className="ml-2 flex-1 w-0 truncate">{art.style}</span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <span className="font-medium text-indigo-600 hover:text-indigo-500">
                            {art.rank || art.level}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Improved Martial Arts Experience */}
        <div className="mt-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-6 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                <FaHistory className="mr-2 text-indigo-600" /> Martial Arts Experience
              </h3>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {profile.martialArtsExperience.map((experience, index) => (
                  <li key={index} className="relative p-6 hover:bg-gray-50 transition duration-150 ease-in-out">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <span className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center ring-8 ring-white">
                          {getMarialArtIcon(experience.event.split(' ')[2])}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {experience.event}
                        </p>
                        <p className="text-sm text-gray-500">
                          {experience.belt}
                        </p>
                      </div>
                      <div className="flex-shrink-0 whitespace-nowrap text-sm text-indigo-600 font-medium">
                        {experience.year}
                        </div>
                    </div>
                    {index !== profile.martialArtsExperience.length - 1 && (
                      <div className="absolute bottom-0 left-6 right-0 h-px bg-gray-200"></div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Fighter Stats */}
        <div className="mt-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Fighter Stats</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-md font-medium text-gray-900 mb-4">Overall Record</h3>
                {['wins', 'losses', 'draws'].map((stat) => (
                  <div key={stat} className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 capitalize">{stat}</span>
                      <span className="text-sm font-medium text-gray-900">{profile.fighterStats[stat]}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${
                          stat === 'wins' ? 'bg-green-500' : stat === 'losses' ? 'bg-red-500' : 'bg-gray-500'
                        }`}
                        style={{width: `${(profile.fighterStats[stat] / profile.fighterStats.totalFights) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-md font-medium text-gray-900 mb-4">Win Methods</h3>
                {['koTko', 'submissions', 'decisions'].map((method) => (
                  <div key={method} className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {method === 'koTko' ? 'KO/TKO' : method.charAt(0).toUpperCase() + method.slice(1)}
                      </span>
                      <span className="text-sm font-medium text-gray-900">{profile.fighterStats[method]}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${
                          method === 'koTko' ? 'bg-blue-500' : method === 'submissions' ? 'bg-purple-500' : 'bg-yellow-500'
                        }`}
                        style={{width: `${(profile.fighterStats[method] / profile.fighterStats.wins) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Connect Button */}
        <div className="mt-8">
          <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300 flex items-center justify-center text-lg font-medium">
            <FaUserFriends className="mr-2" /> Connect with {profile.name}
          </button>
        </div>

        {/* Recent Fights */}
        <div className="mt-8 mb-12">
          <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Fights</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {profile.recentFights.map((fight, index) => (
                <li key={index} className="hover:bg-gray-50 transition duration-150 ease-in-out">
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        {fight.opponent}
                      </p>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <FaMedal className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        <p>{fight.event}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 flex flex-col items-end">
                      <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        fight.result === 'Win' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {fight.result}
                      </p>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <FaCalendarAlt className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        <p>{fight.date}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;