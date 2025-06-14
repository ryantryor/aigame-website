
import { ArrowLeft, Play, Star, Users, Clock, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const GameDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-purple-500/20 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors"
          >
            <ArrowLeft size={20} />
            返回首页
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Game Header */}
        <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-purple-500/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                太空射击游戏
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                驾驶你的太空战舰，在无尽的宇宙中与敌人战斗，收集能量块，挑战你的反应速度和策略思维！
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-purple-500/20 px-3 py-2 rounded-lg">
                  <Star className="text-yellow-400" size={16} />
                  <span className="text-white">4.8/5</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-500/20 px-3 py-2 rounded-lg">
                  <Users className="text-blue-400" size={16} />
                  <span className="text-white">单人游戏</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-500/20 px-3 py-2 rounded-lg">
                  <Clock className="text-green-400" size={16} />
                  <span className="text-white">5-15分钟</span>
                </div>
              </div>

              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Play size={20} />
                开始游戏
              </button>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30 flex items-center justify-center">
                <Gamepad2 className="text-purple-400" size={64} />
              </div>
            </div>
          </div>
        </div>

        {/* Game Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Game Frame */}
          <div className="lg:col-span-2">
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">游戏区域</h2>
              <div className="aspect-video bg-black rounded-lg border border-purple-500/30 overflow-hidden">
                <iframe 
                  src="data:text/html;charset=utf-8,%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3Ctitle%3E太空射击游戏%3C/title%3E%3Cstyle%3Ebody%7Bmargin:0;padding:0;background:%23000;overflow:hidden;font-family:Arial,sans-serif%7D%23gameCanvas%7Bdisplay:block;background:linear-gradient(45deg,%20%23001122,%20%23003366)%7D%23gameInfo%7Bposition:absolute;top:10px;left:10px;color:white;font-size:18px;z-index:100%7D%23gameOver%7Bposition:absolute;top:50%25;left:50%25;transform:translate(-50%25,-50%25);color:white;text-align:center;display:none;background:rgba(0,0,0,0.8);padding:20px;border-radius:10px%7D%3C/style%3E%3C/head%3E%3Cbody%3E%3Cdiv%20id%3D%22gameInfo%22%3E分数:%20%3Cspan%20id%3D%22score%22%3E0%3C/span%3E%3C/div%3E%3Ccanvas%20id%3D%22gameCanvas%22%3E%3C/canvas%3E%3Cdiv%20id%3D%22gameOver%22%3E%3Ch2%3E游戏结束%3C/h2%3E%3Cp%3E最终分数:%20%3Cspan%20id%3D%22finalScore%22%3E0%3C/span%3E%3C/p%3E%3Cbutton%20onclick%3D%22restartGame()%22%20style%3D%22background:%23ff6b6b;color:white;border:none;padding:10px%2020px;border-radius:5px;cursor:pointer%22%3E重新开始%3C/button%3E%3C/div%3E%3Cscript%3Econst%20canvas%3Ddocument.getElementById('gameCanvas');const%20ctx%3Dcanvas.getContext('2d');canvas.width%3Dwindow.innerWidth;canvas.height%3Dwindow.innerHeight;let%20player%3D%7Bx:canvas.width/2,y:canvas.height-50,width:40,height:40,speed:5%7D;let%20bullets%3D%5B%5D;let%20enemies%3D%5B%5D;let%20particles%3D%5B%5D;let%20score%3D0;let%20gameRunning%3Dtrue;let%20keys%3D%7B%7D;function%20createEnemy()%7Benemies.push(%7Bx:Math.random()*(canvas.width-30),y:-30,width:30,height:30,speed:2%2BMath.random()*3%7D)%7Dfunction%20createParticle(x,y)%7Bfor(let%20i%3D0;i%3C8;i%2B%2B)%7Bparticles.push(%7Bx:x,y:y,vx:(Math.random()-0.5)*8,vy:(Math.random()-0.5)*8,life:30,maxLife:30%7D)%7D%7Dfunction%20drawPlayer()%7Bctx.fillStyle%3D'%23ff6b6b';ctx.fillRect(player.x,player.y,player.width,player.height);ctx.fillStyle%3D'%23ff4757';ctx.fillRect(player.x%2B5,player.y%2B5,player.width-10,player.height-10)%7Dfunction%20drawBullets()%7Bctx.fillStyle%3D'%23feca57';bullets.forEach(bullet%3D%3E%7Bctx.fillRect(bullet.x,bullet.y,bullet.width,bullet.height)%7D)%7Dfunction%20drawEnemies()%7Bctx.fillStyle%3D'%2348dbfb';enemies.forEach(enemy%3D%3E%7Bctx.fillRect(enemy.x,enemy.y,enemy.width,enemy.height);ctx.fillStyle%3D'%230abde3';ctx.fillRect(enemy.x%2B5,enemy.y%2B5,enemy.width-10,enemy.height-10);ctx.fillStyle%3D'%2348dbfb'%7D)%7Dfunction%20drawParticles()%7Bparticles.forEach(particle%3D%3E%7Bconst%20alpha%3Dparticle.life/particle.maxLife;ctx.fillStyle%3D%60rgba(255,255,255,$%7Balpha%7D)%60;ctx.fillRect(particle.x,particle.y,3,3)%7D)%7Dfunction%20update()%7Bif(!gameRunning)return;if(keys%5B'ArrowLeft'%5D%7C%7Ckeys%5B'a'%5D)player.x-=player.speed;if(keys%5B'ArrowRight'%5D%7C%7Ckeys%5B'd'%5D)player.x%2B=player.speed;if(keys%5B'ArrowUp'%5D%7C%7Ckeys%5B'w'%5D)player.y-=player.speed;if(keys%5B'ArrowDown'%5D%7C%7Ckeys%5B's'%5D)player.y%2B=player.speed;player.x%3DMath.max(0,Math.min(canvas.width-player.width,player.x));player.y%3DMath.max(0,Math.min(canvas.height-player.height,player.y));if(keys%5B'%20'%5D)%7Bbullets.push(%7Bx:player.x%2Bplayer.width/2-2,y:player.y,width:4,height:10,speed:7%7D);delete%20keys%5B'%20'%5D%7Dbullets.forEach((bullet,index)%3D%3E%7Bbullet.y-=bullet.speed;if(bullet.y%3C0)bullets.splice(index,1)%7D);enemies.forEach((enemy,enemyIndex)%3D%3E%7Benemy.y%2B=enemy.speed;if(enemy.y%3Ecanvas.height)enemies.splice(enemyIndex,1);bullets.forEach((bullet,bulletIndex)%3D%3E%7Bif(bullet.x%3Cenemy.x%2Benemy.width%26%26bullet.x%2Bbullet.width%3Eenemy.x%26%26bullet.y%3Cenemy.y%2Benemy.height%26%26bullet.y%2Bbullet.height%3Eenemy.y)%7BcreateParticle(enemy.x%2Benemy.width/2,enemy.y%2Benemy.height/2);enemies.splice(enemyIndex,1);bullets.splice(bulletIndex,1);score%2B=10%7D%7D);if(player.x%3Cenemy.x%2Benemy.width%26%26player.x%2Bplayer.width%3Eenemy.x%26%26player.y%3Cenemy.y%2Benemy.height%26%26player.y%2Bplayer.height%3Eenemy.y)%7BgameRunning%3Dfalse;document.getElementById('gameOver').style.display%3D'block';document.getElementById('finalScore').textContent%3Dscore%7D%7D);particles.forEach((particle,index)%3D%3E%7Bparticle.x%2B=particle.vx;particle.y%2B=particle.vy;particle.life--;if(particle.life%3C=0)particles.splice(index,1)%7D);if(Math.random()%3C0.02)createEnemy();document.getElementById('score').textContent%3Dscore%7Dfunction%20draw()%7Bctx.clearRect(0,0,canvas.width,canvas.height);drawPlayer();drawBullets();drawEnemies();drawParticles()%7Dfunction%20gameLoop()%7Bupdate();draw();requestAnimationFrame(gameLoop)%7Dfunction%20restartGame()%7Bplayer.x%3Dcanvas.width/2;player.y%3Dcanvas.height-50;bullets%3D%5B%5D;enemies%3D%5B%5D;particles%3D%5B%5D;score%3D0;gameRunning%3Dtrue;document.getElementById('gameOver').style.display%3D'none';document.getElementById('score').textContent%3D0%7Ddocument.addEventListener('keydown',(e)%3D%3E%7Bkeys%5Be.code%5D%3Dtrue;keys%5Be.key%5D%3Dtrue%7D);document.addEventListener('keyup',(e)%3D%3E%7Bdelete%20keys%5Be.code%5D;delete%20keys%5Be.key%5D%7D);window.addEventListener('resize',()%3D%3E%7Bcanvas.width%3Dwindow.innerWidth;canvas.height%3Dwindow.innerHeight%7D);gameLoop()%3C/script%3E%3C/body%3E%3C/html%3E"
                  className="w-full h-full border-0"
                  title="太空射击游戏"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Game Info Sidebar */}
          <div className="space-y-6">
            {/* How to Play */}
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4">游戏玩法</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400">↑</span>
                  </div>
                  <span>WASD 或 箭头键移动</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400">⎵</span>
                  </div>
                  <span>空格键发射子弹</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400">⚡</span>
                  </div>
                  <span>击败敌人获得分数</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400">💀</span>
                  </div>
                  <span>避免碰到敌人</span>
                </div>
              </div>
            </div>

            {/* Game Features */}
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4">游戏特色</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>流畅的太空战斗体验</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>精美的粒子爆炸效果</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>随机生成的敌人</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>实时分数系统</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>响应式控制</span>
                </li>
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4">游戏技巧</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <p>• 保持移动，不要停留在一个位置太久</p>
                <p>• 预判敌人的移动轨迹进行射击</p>
                <p>• 优先消灭距离较近的敌人</p>
                <p>• 利用屏幕边缘进行走位</p>
                <p>• 连续射击可以提高命中率</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
