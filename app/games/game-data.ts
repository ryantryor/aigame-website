export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const games: Record<string, Game> = {
  "crazy-cattle-3d": {
    id: "crazy-cattle-3d",
    title: "Crazy Cattle 3D",
    description: "The original free online 3D action game with explosive physics-based gameplay. Control crazy cattle and battle it out!",
    image: "/assets/crazycattle3d-howto.jpg",
    url: "/",
  },
  "crazy-cow-3d": {
    id: "crazy-cow-3d",
    title: "Crazy Cow 3D",
    description: "Experience unpredictable fun with Crazy Cow 3D's physics engine! Send objects flying and discover comical interactions.",
    image: "/assets/crazy-cow-3d/crazy-cow-3d.png",
    url: "/crazy-cow-3d",
  },
  "cheese-chompers-3d": {
    id: "cheese-chompers-3d",
    title: "Cheese Chompers 3D",
    description: "A hilarious free online knockout game! Control a goofy rat and battle it out in a chaotic arena to be the last rat standing.",
    image: "/assets/cheese-chompers-3d/cheese-chompers-3d.png",
    url: "/cheese-chompers-3d",
  },
  "brainrot-clicker": {
    id: "brainrot-clicker",
    title: "Italian Brainrot Clicker",
    description: "Dive into Italian Brainrot Clicker! Tap through meme madness in this addictive online clicker game. Instant play, no download!",
    image: "/assets/brainrot-clicker/brainrot-clicker.jpg",
    url: "/brainrot-clicker",
  },
  "basketball-bros-unblocked": {
    id: "basketball-bros-unblocked",
    title: "Basketball Bros Unblocked",
    description: "Experience exciting basketball action with unique characters. Play online for free, no download required!",
    image: "/assets/basketball-bros-unblocked/basketball-bros-unblocked.png",
    url: "/basketball-bros-unblocked",
  },
  "pokemon-gamma-emerald": {
    id: "pokemon-gamma-emerald",
    title: "Pokemon Gamma Emerald",
    description: "Play this enhanced Pokemon ROM hack with new features, Pokemon, and challenging gameplay.",
    image: "/assets/pokemon-gamma-emerald/pokemon-gamma-emerald.webp", // 更新为实际的图片
    url: "/pokemon-gamma-emerald",
  },
  "crazy-chicken-3d": {
    id: "crazy-chicken-3d",
    title: "Crazy Chicken 3D",
    description: "Experience unpredictable fun with Crazy Chicken 3D's physics engine! Control a chaotic chicken in this hilarious action game.",
    image: "/assets/crazy-chicken-3d/crazy-chicken-3d.webp",
    url: "/crazy-chicken-3d",
  },
  "sprunki-incredibox": {
    id: "sprunki-incredibox",
    title: "Sprunki Incredibox",
    description: "Create amazing music beats with colorful characters in this fun interactive music game. Drag and drop to make music!",
    image: "/assets/sprunki-incredibox/sprunki-incredibox.webp",
    url: "/sprunki-incredibox",
  },
  "doodle-baseball": {
    id: "doodle-baseball",
    title: "Doodle Baseball",
    description: "Classic Google Doodle baseball game! Control cute food characters as batters and test your timing skills in this fun and addictive baseball experience.",
    image: "https://doodle-baseball.net/assets/doodle-baseball/doodle-baseball.webp",
    url: "https://doodle-baseball.net/",
  }
};

// 获取其他游戏列表
export function getOtherGames(): Game[] {
  return Object.values(games);
}



