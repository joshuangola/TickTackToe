import { useState } from "react";
import "./App.css";
import Square from "./Square";
import CalculateWinner from "./CalculateWinner";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""]);
    setPlayer(true);
  };

  return (
    <div className="App">
      <div className="container">
        {squares.map((value, index) => {
          return (
            <Square
              key={Math.random(1000)}
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
              squareValue={value}
              index={index}
            />
          );
        })}
        <button onClick={handleClick}>Reset</button>
      </div>
      <span>{CalculateWinner(squares)}</span>
    </div>
  );
}

export default App;
