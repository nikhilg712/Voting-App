import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import aap from '../assets/AAP.png';
import bjp from '../assets/BJP.png';
import bsp from '../assets/BSP.png';
import inc from '../assets/INC.png';
import inp from '../assets/INP.png';

const VotingPortal = () => {
  const [voted, setVoted] = useState(false);

  const clickHandler = () => {
    setVoted(true);
  };

  const parties = [
    { symbol: aap, name: 'Aam Aadmi Party' },
    { symbol: bjp, name: 'Bharatiya Janata Party' },
    { symbol: bsp, name: 'Bahujan Samaj Party' },
    { symbol: inc, name: 'Indian National Congress' },
    { symbol: inp, name: "National People's Party" },
  ];

  return (
    <div className="flex items-center justify-center">
      {voted ? (
        <div className="p-8 bg-white rounded-lg shadow-md flex flex-col items-center gap-4">
          <p className="text-2xl font-bold text-center text-gray-700">Your Vote Has Been Submitted!</p>
          <Link to="/login" className="text-blue-500 hover:underline">
             Log Out
          </Link>
        </div>
      ) : (
        <div className="w-full max-w-4xl p-8 h-[450px] bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Cast Your Vote Here</h2>
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Symbol</th>
                <th className="px-4 py-2 border">Party Name</th>
                <th className="px-4 py-2 border">Cast Vote</th>
              </tr>
            </thead>
            <tbody>
              {parties.map((party, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border text-center">
                    <img src={party.symbol} alt={`${party.name} symbol`} className="h-8 w-8 mx-auto" />
                  </td>
                  <td className="px-4 py-2 border">{party.name}</td>
                  <td className="px-4 py-2 border text-right">
                    <button
                      onClick={clickHandler}
                      className="px-4 py-2 text-white bg-green-700 rounded-md hover:bg-green-800 focus:outline-none focus:bg-blue-600"
                    >
                      Vote
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default VotingPortal;
