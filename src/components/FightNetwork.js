import React, { useState } from 'react';
import { FaFilter, FaTrophy, FaMapMarkerAlt, FaCheckCircle, FaTimesCircle, FaUser, FaArrowLeft } from 'react-icons/fa';
import { GiBoxingGlove } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const fighters = [
  { id: 1, name: "Amanda Nunes", age: 33, weight: 145, martialArts: ["MMA", "BJJ", "Boxing"], image: "./assets/Amanda-Nunes.jpg", record: "21-5-0", belts: ["UFC Women's Featherweight Champion", "UFC Women's Bantamweight Champion"], lastFight: "UFC 269: Nunes vs. Peña", location: "Miami, Florida", availableToFight: true, totalFights: 26 },
  { id: 2, name: "Israel Adesanya", age: 31, weight: 185, martialArts: ["MMA", "Kickboxing"], image: "./assets/Israel-Adesanya-card.jpg", record: "21-1-0", belts: ["UFC Middleweight Champion"], lastFight: "UFC 263: Adesanya vs. Vettori 2", location: "Auckland, New Zealand", availableToFight: true, totalFights: 22 },
  { id: 3, name: "Khabib Nurmagomedov", age: 32, weight: 155, martialArts: ["MMA", "Sambo", "Wrestling"], image: "./assets/Khabib-Nurmagomedov-card.jpg", record: "29-0-0", belts: ["Former UFC Lightweight Champion"], lastFight: "UFC 254: Khabib vs. Gaethje", location: "Dagestan, Russia", availableToFight: false, totalFights: 29 },
  { id: 4, name: "Rose Namajunas", age: 29, weight: 115, martialArts: ["MMA", "Karate", "Taekwondo"], image: "./assets/rosenamajunas.jpg", record: "11-4-0", belts: ["UFC Women's Strawweight Champion"], lastFight: "UFC 268: Usman vs. Covington 2", location: "Denver, Colorado", availableToFight: true, totalFights: 15 },
  { id: 5, name: "Jon Jones", age: 33, weight: 205, martialArts: ["MMA", "Wrestling", "Boxing"], image: "./assets/Jon-Jones.jpg", record: "26-1-0", belts: ["Former UFC Light Heavyweight Champion"], lastFight: "UFC 247: Jones vs. Reyes", location: "Albuquerque, New Mexico", availableToFight: true, totalFights: 28 },
  { id: 6, name: "Valentina Shevchenko", age: 33, weight: 125, martialArts: ["MMA", "Muay Thai", "Boxing"], image: "./assets/Valentina-Shevchenko.jpg", record: "22-3-0", belts: ["UFC Women's Flyweight Champion"], lastFight: "UFC 266: Volkanovski vs. Ortega", location: "Bishkek, Kyrgyzstan", availableToFight: true, totalFights: 25 },
  { id: 7, name: "Conor McGregor", age: 32, weight: 155, martialArts: ["MMA", "Boxing", "Karate"], image: "./assets/Conor-McGregor.jpg", record: "22-6-0", belts: ["Former UFC Featherweight Champion", "Former UFC Lightweight Champion"], lastFight: "UFC 264: Poirier vs. McGregor 3", location: "Dublin, Ireland", availableToFight: true, totalFights: 28 },
  { id: 8, name: "Zhang Weili", age: 31, weight: 115, martialArts: ["MMA", "Kung Fu", "Wrestling"], image: "./assets/Zhang-Weili.jpg", record: "21-3-0", belts: ["Former UFC Women's Strawweight Champion"], lastFight: "UFC 268: Usman vs. Covington 2", location: "Hebei, China", availableToFight: true, totalFights: 24 },
  { id: 9, name: "Dustin Poirier", age: 32, weight: 155, martialArts: ["MMA", "Boxing", "BJJ"], image: "./assets/Dustin-Poirier.jpg", record: "28-6-0", belts: ["Former UFC Interim Lightweight Champion"], lastFight: "UFC 264: Poirier vs. McGregor 3", location: "Lafayette, Louisiana", availableToFight: true, totalFights: 34 },
  { id: 10, name: "Kamaru Usman", age: 34, weight: 170, martialArts: ["MMA", "Wrestling", "Boxing"], image: "./assets/Kamaru-Usman.jpg", record: "20-1-0", belts: ["UFC Welterweight Champion"], lastFight: "UFC 268: Usman vs. Covington 2", location: "Dallas, Texas", availableToFight: true, totalFights: 21 },
];

function FightNetwork() {
  const [filteredFighters, setFilteredFighters] = useState(fighters);
  const [filters, setFilters] = useState({ minAge: 18, maxAge: 50, minWeight: 100, maxWeight: 300, martialArts: [], availableToFight: false, minFights: 0, sortBy: 'name' });
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const applyFilters = () => {
    const filtered = fighters.filter(fighter => {
      return (
        fighter.age >= filters.minAge &&
        fighter.age <= filters.maxAge &&
        fighter.weight >= filters.minWeight &&
        fighter.weight <= filters.maxWeight &&
        (filters.martialArts.length === 0 || filters.martialArts.some(art => fighter.martialArts.includes(art))) &&
        (filters.availableToFight === false || fighter.availableToFight === filters.availableToFight) &&
        fighter.totalFights >= filters.minFights
      );
    });
    const sorted = filtered.sort((a, b) => {
      if (filters.sortBy === 'name') return a.name.localeCompare(b.name);
      if (filters.sortBy === 'age') return a.age - b.age;
      if (filters.sortBy === 'weight') return a.weight - b.weight;
      if (filters.sortBy === 'totalFights') return b.totalFights - a.totalFights;
      return 0;
    });
    setFilteredFighters(sorted);
    setShowFilters(false);
  };

  return (
  
    <div className="bg-gray-100 min-h-screen p-8">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
  <FaArrowLeft className="mr-2" />
  Back to Dashboard
</Link>
      <h1 className="text-3xl font-bold mb-8">Fight Network</h1>
      
      <div className="mb-8">
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center transition duration-300"
        >
          <FaFilter className="mr-2" /> {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        
        {showFilters && (
          <div className="mt-4 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Filter Fighters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age Range: {filters.minAge} - {filters.maxAge}</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    name="minAge"
                    min="18"
                    max="50"
                    value={filters.minAge}
                    onChange={handleFilterChange}
                    className="w-full"
                  />
                  <input
                    type="range"
                    name="maxAge"
                    min="18"
                    max="50"
                    value={filters.maxAge}
                    onChange={handleFilterChange}
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Weight Range (lbs): {filters.minWeight} - {filters.maxWeight}</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    name="minWeight"
                    min="100"
                    max="300"
                    value={filters.minWeight}
                    onChange={handleFilterChange}
                    className="w-full"
                  />
                  <input
                    type="range"
                    name="maxWeight"
                    min="100"
                    max="300"
                    value={filters.maxWeight}
                    onChange={handleFilterChange}
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Martial Arts</label>
                <div className="space-y-2">
                  {['MMA', 'BJJ', 'Boxing', 'Kickboxing', 'Wrestling', 'Karate'].map((art) => (
                    <label key={art} className="inline-flex items-center mr-4">
                      <input
                        type="checkbox"
                        name="martialArts"
                        value={art}
                        checked={filters.martialArts.includes(art)}
                        onChange={handleFilterChange}
                        className="form-checkbox h-4 w-4 text-indigo-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">{art}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Min Number of Fights: {filters.minFights}</label>
                <input
                  type="range"
                  name="minFights"
                  min="0"
                  max="50"
                  value={filters.minFights}
                  onChange={handleFilterChange}
                  className="w-full"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="availableToFight"
                  checked={filters.availableToFight}
                  onChange={handleFilterChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-900">
                  Available to Fight
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                <select
                  name="sortBy"
                  value={filters.sortBy}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="name">Name</option>
                  <option value="age">Age</option>
                  <option value="weight">Weight</option>
                  <option value="totalFights">Total Fights</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button 
                onClick={() => {
                  setFilters({
                    age: 40,
                    weight: 200,
                    martialArt: '',
                    availableToFight: false,
                    minFights: 0
                  });
                  applyFilters();
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md transition duration-300"
              >
                Reset Filters
              </button>
              <button 
                onClick={applyFilters}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredFighters.length > 0 ? (
          filteredFighters.map(fighter => (
            <div key={fighter.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl">
              <img src={fighter.image} alt={fighter.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{fighter.name}</h2>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-600">Age: {fighter.age}</p>
                  <p className="text-gray-600">Weight: {fighter.weight} lbs</p>
                </div>
                <p className="text-gray-600 mb-2">Record: {fighter.record}</p>
                <div className="mb-2">
                  {fighter.belts.map((belt, index) => (
                    <div key={index} className="flex items-center text-yellow-600 mb-1">
                      <FaTrophy className="mr-1" />
                      <span className="text-sm">{belt}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 mb-2 flex items-center">
                  <GiBoxingGlove className="mr-1" />
                  Last Fight: {fighter.lastFight}
                </p>
                <p className="text-gray-600 mb-2 flex items-center">
                  <FaMapMarkerAlt className="mr-1" />
                  {fighter.location}
                </p>
                <p className="text-gray-600 mb-2 flex items-center">
                  {fighter.availableToFight ? (
                    <>
                      <FaCheckCircle className="mr-1 text-green-500" />
                      <span className="text-green-500">Available to Fight</span>
                    </>
                  ) : (
                    <>
                      <FaTimesCircle className="mr-1 text-red-500" />
                      <span className="text-red-500">Not Available to Fight</span>
                    </>
                  )}
                </p>
                <p className="text-gray-600 mb-2">Total Fights: {fighter.totalFights}</p>
                <div className="flex flex-wrap mb-4">
                  {fighter.martialArts.map(art => (
                    <span key={art} className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                      {art}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 flex items-center justify-center">
                  <FaUser className="mr-2" /> View Profile
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">No fighters found matching the current filters.</p>
        )}
      </div>
    </div>
  );
}

export default FightNetwork;
