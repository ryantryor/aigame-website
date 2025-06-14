
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Play, Star, Users, FolderOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

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

const allGames: Game[] = [
  {
    id: 1,
    title: "Space Shooter",
    description: "Fight against enemies in endless space.",
    category: "Action",
    image: "photo-1488590528505-98d2b5aba04b",
    route: "/game/space-shooter",
    rating: 4.8,
    players: "Single"
  },
  {
    id: 2,
    title: "Classic Snake",
    description: "Classic nostalgia, challenge your reflexes.",
    category: "Casual",
    image: "photo-1526374965328-7f61d4dc18c5",
    route: "#",
    rating: 4.6,
    players: "Single"
  },
  {
    id: 3,
    title: "Tetris",
    description: "Endless puzzle game to test your logic.",
    category: "Puzzle",
    image: "photo-1518877593221-1f28583780b4",
    route: "#",
    rating: 4.9,
    players: "Single"
  },
  {
    id: 4,
    title: "2048",
    description: "Combine tiles to reach 2048.",
    category: "Puzzle",
    image: "photo-1500673922987-e212871fec22",
    route: "#",
    rating: 4.7,
    players: "Single"
  },
  {
    id: 5,
    title: "Sudoku",
    description: "Fill the grid – a true brain teaser!",
    category: "Puzzle",
    image: "photo-1487058792275-0ad4aaf24ca7",
    route: "#",
    rating: 4.5,
    players: "Single"
  },
  {
    id: 6,
    title: "Bubble Shooter",
    description: "Match and pop bubbles for points.",
    category: "Casual",
    image: "photo-1500673922987-e212871fec22",
    route: "#",
    rating: 4.3,
    players: "Single"
  },
  {
    id: 7,
    title: "Chess Online",
    description: "Challenge friends and AI in chess.",
    category: "Board",
    image: "photo-1518877593221-1f28583780b4",
    route: "#",
    rating: 4.9,
    players: "Multiplayer"
  },
  {
    id: 8,
    title: "Racing Drift",
    description: "Experience fast & furious street racing.",
    category: "Racing",
    image: "photo-1526374965328-7f61d4dc18c5",
    route: "#",
    rating: 4.4,
    players: "Single"
  },
  {
    id: 9,
    title: "Math Duel",
    description: "Fast-paced math battle between two players.",
    category: "Education",
    image: "photo-1487058792275-0ad4aaf24ca7",
    route: "#",
    rating: 4.7,
    players: "Multiplayer"
  },
  {
    id: 10,
    title: "Falling Blocks",
    description: "Arrange the blocks before time runs out.",
    category: "Action",
    image: "photo-1488590528505-98d2b5aba04b",
    route: "#",
    rating: 4.2,
    players: "Single"
  },
  {
    id: 11,
    title: "Word Search",
    description: "Find hidden words as fast as possible.",
    category: "Puzzle",
    image: "photo-1518877593221-1f28583780b4",
    route: "#",
    rating: 4.6,
    players: "Single"
  },
  {
    id: 12,
    title: "Minesweeper",
    description: "Uncover all squares without detonating a mine.",
    category: "Puzzle",
    image: "photo-1518877593221-1f28583780b4",
    route: "#",
    rating: 4.1,
    players: "Single"
  },
  {
    id: 13,
    title: "Memory Flip",
    description: "Test your memory and find all pairs.",
    category: "Casual",
    image: "photo-1500673922987-e212871fec22",
    route: "#",
    rating: 4.2,
    players: "Single"
  },
  // ... Add more mock games if needed to expand
];

const PAGE_SIZE = 9;

const categories = [
  "All",
  ...Array.from(new Set(allGames.map(g => g.category))),
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filtered games
  const games = useMemo(() => {
    if (selectedCategory === "All") return allGames;
    return allGames.filter(game => game.category === selectedCategory);
  }, [selectedCategory]);

  // Paginated
  const totalPages = Math.ceil(games.length / PAGE_SIZE);
  const paginatedGames = games.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handleCategory = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-purple-500/20 bg-black/20 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <FolderOpen className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              GameHub
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <span className="text-gray-300">Games</span>
          </nav>
        </div>
      </header>

      {/* Category Selector */}
      <section className="container mx-auto px-4 py-6 flex flex-wrap justify-center gap-3">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-lg font-semibold ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                : "bg-purple-500/10 text-purple-200 hover:bg-purple-500/20"
            } transition-all duration-200`}
            onClick={() => handleCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Game Grid */}
      <main className="container mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {paginatedGames.map((game) => (
            <div key={game.id} className="bg-black/40 backdrop-blur-lg rounded-2xl p-5 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group flex flex-col">
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
          ))}
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    asChild
                    onClick={() => setCurrentPage(v => Math.max(1, v - 1))}
                    aria-disabled={currentPage === 1}
                    tabIndex={currentPage === 1 ? -1 : 0}
                  >
                    <button disabled={currentPage === 1}><ChevronLeft size={16} />Previous</button>
                  </PaginationPrevious>
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      isActive={currentPage === i + 1}
                      asChild
                    >
                      <button onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    asChild
                    onClick={() => setCurrentPage(v => Math.min(totalPages, v + 1))}
                    aria-disabled={currentPage === totalPages}
                    tabIndex={currentPage === totalPages ? -1 : 0}
                  >
                    <button disabled={currentPage === totalPages}>Next<ChevronRight size={16} /></button>
                  </PaginationNext>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-black/20 backdrop-blur-lg py-8 px-4 text-center text-gray-400">
        <div className="container mx-auto">
          <p>&copy; 2024 GameHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
