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
    <div>
      <h1 className="text-white font-semibold text-4xl w-full mb-20">
        Current Turn : <span className="p-2 ">{isXNext ? "X" : "O"}</span>
      </h1>
      <div className=" grid grid-cols-3 gap-2 mb-10">
        {board.map((value, index) => {
          return <Card onPlay={play} icon={value} index={index} key={index} />;
        })}
      </div>
      {winner ? (
        <h1 className="text-white font-semibold text-2xl w-full mb-10">
          Winner is : {winner}
        </h1>
      ) : (
        ""
      )}
      {winner ? (
        <button onClick={resetGame} className="bg-blue-400 px-4 py-2 text-2xl">
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Grid;
