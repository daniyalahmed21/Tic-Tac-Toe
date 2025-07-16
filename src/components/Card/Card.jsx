// Card.js
const Card = ({ icon, index, onPlay }) => {
    return (
      <div
        onClick={() => onPlay(index)}
        className="p-4 h-20 bg-gray-800 text-white flex items-center justify-center text-3xl"
      >
        {icon === "cross" ? "X" : icon === "circle" ? "O" : ""}
      </div>
    );
  };
  
  export default Card;
  