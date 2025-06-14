
interface GameCategorySelectorProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (cat: string) => void;
}

const GameCategorySelector = ({
  categories,
  selectedCategory,
  onSelect,
}: GameCategorySelectorProps) => (
  <section className="container mx-auto px-4 py-6 flex flex-wrap justify-center gap-3">
    {categories.map((cat) => (
      <button
        key={cat}
        className={`px-5 py-2 rounded-lg font-semibold ${
          selectedCategory === cat
            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
            : "bg-purple-500/10 text-purple-200 hover:bg-purple-500/20"
        } transition-all duration-200`}
        onClick={() => onSelect(cat)}
      >
        {cat}
      </button>
    ))}
  </section>
);

export default GameCategorySelector;
