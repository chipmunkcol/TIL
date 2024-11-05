function solution(_players, _callings) {
  let players = [..._players];
  const playersMap = new Map();
  const callings = [..._callings];
  players.forEach((player, index) => (
    playersMap.set(player, index)
  ));

  for (let i = 0; i < callings.length; i++) {

    const calledPlayer = callings[i];
    const calledPlayerIndex = playersMap.get(calledPlayer);
    const frontPlayerIndex = calledPlayerIndex - 1;
    const frontPlayer = players[frontPlayerIndex];
    playersMap.set(calledPlayer, frontPlayerIndex);
    playersMap.set(frontPlayer, calledPlayerIndex);

    players[calledPlayerIndex] = players[frontPlayerIndex];
    players[frontPlayerIndex] = calledPlayer;
  }

  return players;
}