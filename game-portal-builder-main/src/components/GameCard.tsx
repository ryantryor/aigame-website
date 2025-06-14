
import { Link } from "react-router-dom";
import { Play, Star } from "lucide-react";

interface Game {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  route: string;
  rating: number;
  players: string;
}

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => (
  <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-5 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group flex flex-col">
    <div className="aspect-video bg-gradient-to-br from-purple-600/40 to-pink-600/40 rounded-lg mb-4 border border-purple-500/30 overflow-hidden flex items-center justify-center">
      <img
        src={`https://images.unsplash.com/${game.image}?auto=compress&w=400&q=80`}
        alt={game.title}
        className="object-cover w-full h-full rounded-lg group-hover:opacity-90 transition"
      />
    </div>
    <div className="flex items-center mb-2">
      <span className="text-purple-200 text-xs font-semibold bg-purple-600/30 px-2 py-0.5 rounded">{game.category}</span>
      <div className="flex items-center gap-1 ml-auto">
        <Star className="text-yellow-400" size={14} />
        <span className="text-white text-xs">{game.rating}</span>
      </div>
    </div>
    <h3 className="text-lg font-bold text-white mb-1 truncate">{game.title}</h3>
    <p className="text-gray-300 text-sm mb-3 line-clamp-2">{game.description}</p>
    <div className="flex justify-between text-xs text-gray-400 mb-3">
      <span>{game.players} player{game.players === "Single" ? "" : "s"}</span>
    </div>
    <div className="mt-auto">
      {game.route !== "#" ? (
        <Link
          to={game.route}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Play size={16} />
          Play Now
        </Link>
      ) : (
        <button className="w-full bg-gray-600/40 text-gray-300 py-2 px-4 rounded-lg font-semibold cursor-not-allowed">
          Coming Soon
        </button>
      )}
    </div>
  </div>
);

export default GameCard;
