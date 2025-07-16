import React, { useState } from "react";
import Card from "../Card/Card";

function GameOver(board, symbol) {
  // Rows
  if (board[0] === symbol && board[1] === symbol && board[2] === symbol)
    return true;
  if (board[3] === symbol && board[4] === symbol && board[5] === symbol)
    return true;
  if (board[6] === symbol && board[7] === symbol && board[8] === symbol)
    return true;

  // Columns
  if (board[0] === symbol && board[3] === symbol && board[6] === symbol)
    return true;
  if (board[1] === symbol && board[4] === symbol && board[7] === symbol)
    return true;
  if (board[2] === symbol && board[5] === symbol && board[8] === symbol)
    return true;

  // Diagonals
  if (board[0] === symbol && board[4] === symbol && board[8] === symbol)
    return true;
  if (board[2] === symbol && board[4] === symbol && board[6] === symbol)
    return true;

  return false;
}

const Grid = ({ numberOfCard }) => {
  const [isXNext, setIsXNext] = useState(true);
  const [board, setBoard] = useState(Array(numberOfCard).fill(""));
  const [winner, setWinner] = useState(false);

  function play(index) {
    if (winner) return;
    const currentPlayerMark = isXNext ? "cross" : "circle";

    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      if (newBoard[index] !== "") return prevBoard;

      newBoard[index] = currentPlayerMark;

      if (GameOver(newBoard, currentPlayerMark)) {
        setWinner(currentPlayerMark);
      } else {
        setIsXNext((prev) => !prev);
      }
      return newBoard;

    });
  }

  function resetGame() {
    setBoard(Array(numberOfCard).fill(""));
    setIsXNext(true);
    setWinner(false);
  }

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-white font-bold text-5xl mb-8">Tic Tac Toe</h1>
  
      <div className="text-white font-semibold text-2xl mb-6">
        Current Turn {" "}
        <span
          className={`px-4 py-1 rounded-md font-bold ${
            isXNext ? "bg-red-500 text-white" : "bg-blue-500 text-white"
          }`}
        >
          {isXNext ? "X" : "O"}
        </span>
      </div>
  
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        {board.map((value, index) => (
          <Card
            onPlay={play}
            icon={value}
            index={index}
            key={index}
          />
        ))}
      </div>
  
      {winner && (
        <div className="mt-10 text-white text-3xl font-semibold bg-green-600 px-6 py-3 rounded-md shadow-lg">
          Winner {winner === "cross" ? "X" : "O"}
        </div>
      )}
  
      {winner && (
        <button
          onClick={resetGame}
          className="mt-6 bg-white text-gray-800 px-6 py-2 rounded-md text-lg font-semibold shadow-md hover:bg-gray-200 transition"
        >
          🔄 Reset Game
        </button>
      )}
    </div>
  );
  
};

export default Grid;
