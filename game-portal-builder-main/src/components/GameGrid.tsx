
import GameCard from "./GameCard";

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

interface GameGridProps {
  games: Game[];
}

const GameGrid = ({ games }: GameGridProps) => (
  <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
    {games.map((game) => (
      <GameCard key={game.id} game={game} />
    ))}
  </div>
);

export default GameGrid;
