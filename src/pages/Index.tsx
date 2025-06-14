
import { Play, Star, Clock, Users, ArrowRight, Gamepad2, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const games = [
    {
      id: 1,
      title: "太空射击游戏",
      description: "驾驶太空战舰，在无尽宇宙中与敌人战斗",
      rating: 4.8,
      players: "单人",
      duration: "5-15分钟",
      category: "动作",
      image: "space-shooter",
      featured: true
    },
    {
      id: 2,
      title: "经典贪吃蛇",
      description: "经典怀旧游戏，挑战你的反应速度",
      rating: 4.6,
      players: "单人",
      duration: "3-10分钟",
      category: "休闲",
      image: "snake",
      featured: false
    },
    {
      id: 3,
      title: "俄罗斯方块",
      description: "永恒的益智游戏，考验逻辑思维",
      rating: 4.9,
      players: "单人",
      duration: "10-30分钟",
      category: "益智",
      image: "tetris",
      featured: false
    }
  ];

  const stats = [
    { icon: Gamepad2, value: "50+", label: "精品游戏" },
    { icon: Users, value: "10万+", label: "活跃玩家" },
    { icon: Star, value: "4.8", label: "平均评分" },
    { icon: Zap, value: "99%", label: "在线时间" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-purple-500/20 bg-black/20 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Gamepad2 className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                GameHub
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">首页</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">游戏</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">排行榜</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">关于</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            探索无限
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              游戏世界
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            在这里发现最精彩的在线游戏，从经典街机到现代创新，每一款都精心挑选为你带来最佳体验
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/game/space-shooter"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Play size={20} />
              开始游戏
            </Link>
            <button className="border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
              <Target size={20} />
              浏览游戏
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                  <stat.icon className="text-purple-400" size={24} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Game */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">精选游戏</h3>
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-sm mb-4">
                  <Star size={14} />
                  本周推荐
                </div>
                <h4 className="text-4xl font-bold text-white mb-4">太空射击游戏</h4>
                <p className="text-gray-300 text-lg mb-6">
                  驾驶你的太空战舰穿越危险的宇宙空间，与外星敌人展开激烈战斗。这款游戏结合了经典街机游戏的精髓与现代化的游戏体验，为你带来前所未有的太空冒险。
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-400" size={16} />
                    <span className="text-white">4.8/5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="text-blue-400" size={16} />
                    <span className="text-white">单人游戏</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-green-400" size={16} />
                    <span className="text-white">5-15分钟</span>
                  </div>
                </div>

                <Link
                  to="/game/space-shooter"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Play size={20} />
                  立即游戏
                  <ArrowRight size={16} />
                </Link>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl border border-purple-500/40 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center">
                    <Gamepad2 className="text-purple-400 mx-auto mb-4" size={64} />
                    <p className="text-purple-300">点击"立即游戏"开始体验</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">热门游戏</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <div key={game.id} className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg mb-4 flex items-center justify-center border border-purple-500/30">
                  <Gamepad2 className="text-purple-400 group-hover:text-purple-300 transition-colors" size={48} />
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-300 text-sm bg-purple-500/20 px-2 py-1 rounded">
                    {game.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400" size={14} />
                    <span className="text-white text-sm">{game.rating}</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2">{game.title}</h4>
                <p className="text-gray-300 mb-4">{game.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{game.players}</span>
                  <span>{game.duration}</span>
                </div>
                
                {game.id === 1 ? (
                  <Link
                    to="/game/space-shooter"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Play size={16} />
                    开始游戏
                  </Link>
                ) : (
                  <button className="w-full bg-gray-600/50 text-gray-300 py-2 px-4 rounded-lg font-semibold cursor-not-allowed">
                    即将推出
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-black/20 backdrop-blur-lg py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Gamepad2 className="text-white" size={20} />
                </div>
                <h5 className="text-xl font-bold text-white">GameHub</h5>
              </div>
              <p className="text-gray-400">为玩家提供最佳的在线游戏体验</p>
            </div>
            
            <div>
              <h6 className="text-white font-semibold mb-4">游戏分类</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">动作游戏</a></li>
                <li><a href="#" className="hover:text-white transition-colors">益智游戏</a></li>
                <li><a href="#" className="hover:text-white transition-colors">休闲游戏</a></li>
                <li><a href="#" className="hover:text-white transition-colors">街机游戏</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="text-white font-semibold mb-4">帮助支持</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">游戏指南</a></li>
                <li><a href="#" className="hover:text-white transition-colors">技术支持</a></li>
                <li><a href="#" className="hover:text-white transition-colors">反馈建议</a></li>
                <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="text-white font-semibold mb-4">关注我们</h6>
              <p className="text-gray-400 mb-4">获取最新游戏资讯</p>
              <div className="flex gap-2">
                <button className="w-10 h-10 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-purple-400">f</span>
                </button>
                <button className="w-10 h-10 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-purple-400">t</span>
                </button>
                <button className="w-10 h-10 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-purple-400">w</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GameHub. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
