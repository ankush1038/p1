import React, { useState, useEffect } from 'react';
import playersData from './players.json';

interface Player {
  name: string;
  team: string;
  credits: number;
}

const PlayersTable: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);
  const [teamStats, setTeamStats] = useState<{ [key: string]: { count: number; credits: number } }>({});

  useEffect(() => {
    setPlayers(playersData);
  }, []);

  useEffect(() => {
    const stats: { [key: string]: { count: number; credits: number } } = {};

    players.forEach((player) => {
      if (!stats[player.team]) {
        stats[player.team] = { count: 0, credits: 0 };
      }
      if (selectedPlayers.includes(player.name)) {
        stats[player.team].count++;
        stats[player.team].credits += player.credits;
      }
    });

    setTeamStats(stats);
  }, [selectedPlayers, players]);

  const handlePlayerSelection = (name: string) => {
    if (selectedPlayers.includes(name)) {
      setSelectedPlayers((prevSelectedPlayers) => prevSelectedPlayers.filter((player) => player !== name));
    } else {
      setSelectedPlayers((prevSelectedPlayers) => [...prevSelectedPlayers, name]);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Credits</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.name}>
              <td>{player.name}</td>
              <td>{player.team}</td>
              <td>{player.credits}</td>
              <td>
                <button onClick={() => handlePlayerSelection(player.name)}>
                  {selectedPlayers.includes(player.name) ? 'Remove' : 'Add'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Object.keys(teamStats).map((team) => (
          <div key={team}>
            {team}: {teamStats[team].count} Team {team} Credits: {teamStats[team].credits}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayersTable;