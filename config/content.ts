import { siteConfig } from "./site";

export const content = {
  header: {
    title: siteConfig.name,
    search: {
      placeholder: "Find your next favorite game...",
      ariaLabel: "Search games",
      buttonAriaLabel: "Search",
    },
    navigation: {
      links: [
        { text: "Start Play", href: "#game-section" },
        { text: "Hot Games", href: "#other-games" },
        { text: "Features", href: "#features" },
        { text: "What Is", href: "#what-is" },
        { text: "How to Play", href: "#how-to-play" },
        { text: "FAQ", href: "#faq" },
      ]
    }
  },
  footer: {
    about: {
      title: "About",
      description: `Play ${siteConfig.name} - a free physics-based battle game right in your browser. No downloads required.`,
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "Evernote", href: "https://lite.evernote.com/note/87300725-c873-8deb-1d2a-bf31aa95ac39" },
        { text: "CAL", href: "https://cal.com/vincent-ai" },
        { text: "Patreon", href: "https://www.patreon.com/posts/play-free-crazy-130738673" },
        { text: "Linktr", href: "https://linktr.ee/vincent20250520" },
        { text: "Creem", href: "https://www.creem.io/bip/vincent-ai" },
        { text: "GetAllMyLinks", href: "https://getallmylinks.com/vincent" },
        { text: "Pinterest | Crazy Cattle 3D", href: "https://www.pinterest.com/pin/581245895696208484/" },
        { text: "Pinterest | Doodle Baseball", href: "https://www.pinterest.com/pin/581245895696901681/" },
        { text: "Github | Crazy Cattle 3D", href: "https://github.com/WeiWenxing/crazycattle3d/blob/main/README_EN.md" },
      ]
    },
    games: {  // 添加 games section
      title: "Games",
      links: [
        { text: "Crazy Cattle 3D", href: "/" },
        { text: "Crazy Cow 3D", href: "/crazy-cow-3d" },
        { text: "Crazy Chicken 3D", href: "/crazy-chicken-3d" },
        { text: "Cheese Chompers 3D", href: "/cheese-chompers-3d" },
        { text: "Italian Brainrot Clicker", href: "/brainrot-clicker" },
        { text: "Basketball Bros Unblocked", href: "/basketball-bros-unblocked" },
        { text: "Pokemon Gamma Emerald", href: "/pokemon-gamma-emerald" },
        { text: "Sprunki Incredibox", href: "/sprunki-incredibox" },
      ]
    },
    social: {
      title: "Share",
      links: [
        {
          icon: "Facebook",
          href: `https://www.facebook.com/sharer.php?t=${encodeURIComponent(siteConfig.name)}&u=${encodeURIComponent(siteConfig.url)}`
        },
        {
          icon: "Twitter",
          href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(siteConfig.name)}&url=${encodeURIComponent(siteConfig.url)}&hashtags=${siteConfig.social.twitter},Games`
        }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Contact Us", href: "/contact" },
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Terms of Service", href: "/terms-of-service" }
      ]
    },
    copyright: {
      text: "© {year} Crazy Cattle 3D. All rights reserved.",
      subText: "All games on this platform are free to play and do not require downloads."
    }
  },
  rating: {
    title: "Rate CrazyCattle3D",
    votes: "votes",
    initialRating: 4.8,
    initialVotes: 146
  },
  gameSection: {
    title: "Crazy Cattle 3D",
    game: {
      url: '/crazy-cattle-3d.embed',
      title: "crazycattle3d",
      externalUrl: '/game/crazycattle3d/index.html'
    }
  },
  otherGames: {
    title: "Hot Games",
    cardLabels: {
      playButton: "Play Now",
    }
  },
  howToPlay: {
    // Added "Online Free", "Play"
    title: "How to Play Crazy Cattle 3D Online Free - Game Controls & Guide",
    // Added "unblocked", "play this free game"
    description: "Playing Crazy Cattle 3D online unblocked is easy: Use WASD keys for movement and mouse for precise sheep steering when you play this free browser game. The space bar triggers your special collision ability in Crazy Cattle 3D - master the timing for devastating impacts. Perfect your control over the sheep's momentum as you navigate through the 3D battle arena.\n\n" +
      // Added "online game"
      "Success in Crazy Cattle 3D multiplayer battles depends on mastering the physics-based momentum system in this online game. Strategically build speed by moving downhill in the 3D arena, then unleash powerful attacks or execute quick escapes. Crazy Cattle 3D's unique collision mechanics reward skillful timing - precisely angled hits send opponents flying off the map, while mistimed attacks leave your sheep exposed.\n\n" +
      // Added "play", "free online game"
      "Win more Crazy Cattle 3D matches by starting defensively - focus on survival and strategic positioning. Study each arena's layout to discover prime attack positions and danger zones. After defeats when you play Crazy Cattle 3D, spectate top players to learn pro techniques. Keep practicing this free online physics game, and you'll soon master the art of sheep combat!",
    // Image path unchanged
    image: "/assets/crazycattle3d-howto.jpg",
    // Added "Play Online Unblocked"
    imageAlt: "Crazy Cattle 3D Game Guide - Play Online Unblocked, Controls, Physics, and Strategy Tutorial"
  },
  whatIs: {
    // Added "Play Game Online Free"
    title: "Everything about Crazy Cattle 3D - Play Game Online Free",
    // Added "free online game", "unblocked"
    description: "Crazy Cattle 3D is an independently developed free online battle royale game where players control explosive sheep across varied terrain. You can play this game unblocked anytime. Unlike traditional battle royales, we focus on physics-based gameplay with momentum and collision mechanics rather than weapon collection.\n\n" +
      // Added "online game"
      "Master the art of sheep locomotion across three distinct environments in this exciting online game: the rolling hills of Ireland, volcanic Iceland, and mountainous New Zealand. Each map offers unique strategic opportunities, creating a chaotic yet strategic 30-minute battle experience.\n\n" +
      // Added "play this free online game", "unblocked"
      "While the game's high difficulty level may challenge newcomers, mastering our unique physics system delivers a deeply satisfying experience. Play this free online game directly in your browser unblocked - no downloads needed, just pure explosive sheep action that keeps you coming back for more.",
    logo: {
      // Image path unchanged
      src: "/assets/img/android-chrome-512x512.png",
      // Added "Free Online Unblocked Game"
      alt: "Crazy Cattle 3D - Free Online Unblocked Game Logo"
    }
  },
  faq: {
    // Title already well-optimized
    title: "Frequently Asked Questions - Crazy Cattle 3D Online Game",
    items: [
      {
        value: "where-to-play-original", // New item based on PAA
        question: "Where can I find and play the original Crazy Cattle 3D online?",
        answer: "The original Crazy Cattle 3D game can officially be found on itch.io. However, you can also play Crazy Cattle 3D unblocked on various free online games websites that host web-based versions. This allows you to play the game directly in your browser on Windows, Mac, Linux, and other web-supported environments."
      },
      {
        value: "play-on-mobile", // New item based on PAA
        question: "Can I play Crazy Cattle 3D online on my mobile device?",
        answer: "Yes, since Crazy Cattle 3D is available in web-based environments (as a browser game), you can often play this free online game on mobile devices (phones and tablets) that support modern web browsers. Look for unblocked versions to play the game on the go."
      },
      {
        value: "creator-info", // New item based on PAA
        question: "Who is the creator of the Crazy Cattle 3D game?",
        answer: "Currently, little is publicly known about the specific original creator or development team behind the Crazy Cattle 3D game. Most assets appear to be original works. Many players enjoy playing this free online game for its unique physics and fun regardless!"
      },
      {
        value: "game-rating", // New item based on PAA
        question: "What is the rating for the Crazy Cattle 3D online game?",
        answer: "There isn't a single official 'rating' (like ESRB) for Crazy Cattle 3D, as it's often found on various platforms and unblocked games sites. However, it's widely regarded as a fun, chaotic, and engaging free online physics game. You can find player opinions and community feedback on sites where you play the game."
      },
      {
        value: "new-player-difficulty", // Adjusted existing item's value for clarity
        question: "How difficult is the Crazy Cattle 3D online game for new players?",
        answer: "Crazy Cattle 3D is designed with an intuitive physics-based control system that's easy to grasp but challenging to master. The game starts with basic movement mechanics, allowing new players to enjoy immediate action while gradually discovering advanced techniques when you play this free game. Our tutorial mode helps you understand momentum-based gameplay, and the forgiving respawn system encourages experimentation without frustration."
      },
      {
        value: "technical-requirements-online", // Adjusted existing item's value
        question: "What are the technical requirements to play Crazy Cattle 3D online smoothly?",
        answer: "To best play Crazy Cattle 3D online for free and unblocked, we recommend using a modern browser (Chrome, Firefox, or Edge) and a stable internet connection. The game's physics engine is optimized to run smoothly on most devices, but for best performance, ensure your device has at least 4GB RAM and updated graphics drivers. If you experience any slowdown, try adjusting the quality settings in the game menu when you play this online game."
      },
      {
        value: "available-game-modes", // Adjusted existing item's value
        question: "What game modes are available when you play Crazy Cattle 3D online?",
        answer: "Crazy Cattle 3D currently features an exciting single-player arena mode in this free online game where you compete against intelligent AI opponents. Each match offers a unique experience thanks to our dynamic physics system and varied arena layouts. Practice mode lets you perfect your skills without pressure, while Challenge mode puts your abilities to the test with increasingly difficult scenarios and objectives. Many play these game modes unblocked."
      },
      {
        value: "comfort-settings-online-game", // Adjusted existing item's value
        question: "How can I adjust Crazy Cattle 3D for a more comfortable online gaming experience?",
        answer: "Crazy Cattle 3D includes several comfort options to enhance your free online game experience. You can adjust camera sensitivity, enable smooth camera transitions, and customize control responsiveness. We recommend starting with default settings and gradually adjusting them to match your play style. The game also features visual indicators for better spatial awareness during intense physics-based battles when you play this game."
      },
      {
        value: "winning-tactics-game", // Adjusted existing item's value
        question: "What tactics help secure victories when I play the Crazy Cattle 3D game?",
        answer: "Mastering the Crazy Cattle 3D online game requires understanding of momentum and timing. Start by learning the arena layouts and identifying high-ground advantages. Use the environment to build speed, and practice the signature 'bounce boost' technique for quick escapes. Advanced players can master the 'precision impact' strategy, where carefully timed collisions can send opponents off balance. Remember, strategic positioning often matters more than aggressive charging in this free unblocked game."
      }
    ]
  },
  features: {
    // Title already has "Online Game", added "Play Free"
    title: "Revolutionary Features of Crazy Cattle 3D - Play Free Online Game",
    items: [
      {
        title: "Advanced Physics Engine",
        // Added "play this free game"
        description: "Crazy Cattle 3D introduces a groundbreaking physics engine specifically designed for authentic cattle movement. Every animal responds realistically to environmental factors, creating dynamic and unpredictable gameplay moments when you play this free game. The physics system in Crazy Cattle 3D ensures precise collision detection, allowing players to execute tactical maneuvers like momentum-based attacks and strategic dodges. Whether you're performing a calculated aerial assault or narrowly escaping elimination, our physics engine delivers consistently engaging combat scenarios."
      },
      {
        title: "Global Battle Environments",
        // Added "unblocked online game"
        description: "Explore Crazy Cattle 3D's three meticulously crafted battle arenas: Ireland's rolling hills perfect for building momentum and executing aerial strikes, Iceland's treacherous volcanic terrain offering tactical hazard zones, and New Zealand's mountainous landscape enabling vertical combat strategies. Each environment in this unblocked online game features carefully balanced power-up locations and strategic choke points. The diverse landscapes of Crazy Cattle 3D fundamentally change how you approach combat and survival, ensuring every match brings fresh tactical challenges."
      },
      {
        title: "Pure Skill-Based Combat",
        // Added "play Crazy Cattle 3D online free"
        description: "Crazy Cattle 3D sets itself apart with a pure skill-based progression system - no paid advantages, just pure tactical gameplay when you play Crazy Cattle 3D online free. Master the physics-based combat where perfectly timed collisions send opponents flying off the map. Our carefully tuned difficulty curve ensures new players can learn the basics while veterans discover advanced techniques. The competitive spirit of Crazy Cattle 3D shines through as top players showcase incredible movement mastery and strategic thinking."
      },
      {
        title: "Battle Royale Innovation",
        // Added "free to play online game"
        description: "Experience Crazy Cattle 3D's unique take on the battle royale format, where physics-based combat meets strategic gameplay. Each 30-minute match features a dynamically shrinking arena that forces tactical confrontations. The streamlined gameplay loop makes Crazy Cattle 3D easy to understand but challenging to master, delivering consistent excitement from start to finish in this free to play online game. Rise through the ranks based purely on your skill and strategic prowess."
      }
    ]
  }
} as const;


