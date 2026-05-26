import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

// Aby zdjęcia zadziałały po wrzuceniu na GitHub i Vercel:
// 1. Stwórz folder 'public' (jeśli go nie ma) w głównym katalogu projektu na GitHubie.
// 2. Wrzuć do niego swoje dwa zdjęcia.
// 3. Zmień ich nazwy na 'mama1.jpg' i 'mama2.jpg' (lub zaktualizuj nazwy poniżej, by pasowały).
const LEFT_PHOTO_URL = "/mama1.jpg"; 
const RIGHT_PHOTO_URL = "/mama2.jpg";

const FlyingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 16 + 12, // 12px to 28px
      duration: Math.random() * 10 + 15, // 15s to 25s
      delay: Math.random() * -20, // Start some already mid-screen
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-0 text-pink-400/40 drop-shadow-sm"
          style={{ left: `${heart.left}%` }}
          initial={{ y: "100vh", x: 0, rotate: 0 }}
          animate={{ 
            y: "-20vh", 
            x: [0, Math.random() * 100 - 50, 0], // Slight horizontal sway
            rotate: 360 
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
        >
          <Heart size={heart.size} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF5F7] flex items-center justify-center relative overflow-hidden font-sans p-4">
      {/* Background Heart Elements from Theme */}
      <div className="absolute top-10 left-1/4 text-red-300 opacity-60 text-4xl">❤</div>
      <div className="absolute top-32 left-10 text-pink-400 opacity-40 text-2xl">❤</div>
      <div className="absolute bottom-20 left-1/3 text-red-200 opacity-70 text-5xl">❤</div>
      <div className="absolute top-1/2 left-1/4 text-pink-300 opacity-50 text-xl">❤</div>
      <div className="absolute top-20 right-1/4 text-red-300 opacity-60 text-3xl">❤</div>
      <div className="absolute bottom-32 right-12 text-pink-400 opacity-40 text-6xl">❤</div>
      <div class="absolute top-1/3 right-10 text-red-200 opacity-70 text-4xl">❤</div>
      <div className="absolute bottom-10 right-1/3 text-pink-300 opacity-50 text-2xl">❤</div>
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-pink-100 text-6xl sm:text-9xl font-bold opacity-30 whitespace-nowrap">DZIEŃ MAMY</div>

      <FlyingHearts />

      {/* Main Container */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10 pt-24 lg:pt-0">
        
        {/* Left Photo */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-shrink-0 relative group"
        >
          <div className="bg-white p-3 shadow-xl transform -rotate-6 border border-pink-100 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105">
            <div className="w-48 h-64 sm:w-56 sm:h-72 bg-gray-200 flex items-center justify-center overflow-hidden">
              <img 
                src={LEFT_PHOTO_URL} 
                alt="Zdjęcie po lewej" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center mt-3 font-serif text-pink-800 text-sm italic">Najlepsza Mama</p>
          </div>
          <motion.div className="absolute -bottom-4 -left-4" animate={{ rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
            <Heart className="text-pink-500" fill="currentColor" size={32} />
          </motion.div>
        </motion.div>

        {/* Center Envelope / Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 max-w-2xl relative w-full flex justify-center mt-12 lg:mt-0"
        >
          {/* Left Flowers */}
          <motion.div 
            className="absolute -left-10 lg:-left-16 z-20 top-1/2 -translate-y-1/2 hidden sm:block"
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "bottom center" }}
          >
            <svg width="120" height="160" viewBox="0 0 120 160">
              <path d="M60 160 Q50 100 60 40" stroke="#4D7C0F" strokeWidth="4" fill="none"/>
              <circle cx="60" cy="40" r="15" fill="#F43F5E"/>
              <circle cx="75" cy="40" r="15" fill="#FB7185"/>
              <circle cx="45" cy="40" r="15" fill="#FB7185"/>
              <circle cx="60" cy="25" r="15" fill="#FB7185"/>
              <circle cx="60" cy="55" r="15" fill="#FB7185"/>
              <circle cx="60" cy="40" r="6" fill="#FCD34D"/>
              <path d="M60 100 Q80 90 90 110" fill="#65A30D"/>
            </svg>
          </motion.div>

          {/* The Envelope */}
          <div className="w-full max-w-[500px] h-auto min-h-[340px] bg-[#FFF9FB] rounded-lg shadow-2xl relative flex flex-col items-center justify-center border-2 border-pink-200 z-10 mx-auto px-2 py-6 sm:px-0">
            {/* Envelope Flap (Opened) */}
            <div className="absolute -top-16 sm:-top-32 left-0 w-full h-16 sm:h-32 overflow-hidden pointer-events-none hidden sm:block">
              <div className="w-full h-full bg-[#FFF9FB] border-t-2 border-x-2 border-pink-100 shadow-[inset_0_-10px_20px_rgba(0,0,0,0.05)]" style={{ clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)' }}></div>
            </div>
            
            {/* The Card Inside */}
            <div className="w-[90%] sm:w-[460px] h-auto min-h-[300px] bg-white rounded shadow-inner p-6 sm:p-8 flex flex-col items-center justify-center text-center border border-pink-50 relative">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-serif text-pink-900 leading-relaxed">
                Wszystkiego najlepszego z okazji Dnia Mamy, dziękujemy ci za bycie naszą Mamą <span className="text-red-500">❤</span>
              </h1>
              <div className="mt-8 h-[2px] w-24 bg-pink-200"></div>
            </div>
          </div>

          {/* Right Flowers */}
          <motion.div 
            className="absolute -right-10 lg:-right-16 z-20 top-1/2 -translate-y-1/2 hidden sm:block"
            animate={{ rotate: [10, 14, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ transformOrigin: "bottom center" }}
          >
            <svg width="120" height="160" viewBox="0 0 120 160">
              <path d="M60 160 Q70 110 60 50" stroke="#4D7C0F" strokeWidth="4" fill="none"/>
              <circle cx="60" cy="50" r="12" fill="#EC4899"/>
              <circle cx="72" cy="50" r="12" fill="#F472B6"/>
              <circle cx="48" cy="50" r="12" fill="#F472B6"/>
              <circle cx="60" cy="38" r="12" fill="#F472B6"/>
              <circle cx="60" cy="62" r="12" fill="#F472B6"/>
              <circle cx="60" cy="50" r="5" fill="#FDE68A"/>
              <path d="M60 110 Q40 100 30 120" fill="#65A30D"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* Right Photo */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="flex-shrink-0 relative group"
        >
          <div className="bg-white p-3 shadow-xl transform rotate-3 border border-pink-100 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105">
            <div className="w-48 h-64 sm:w-56 sm:h-72 bg-gray-200 flex items-center justify-center overflow-hidden">
              <img 
                src={RIGHT_PHOTO_URL} 
                alt="Zdjęcie po prawej" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center mt-3 font-serif text-pink-800 text-sm italic">Kochamy Cię!</p>
          </div>
          <motion.div className="absolute -top-4 -right-2" animate={{ rotate: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4.5 }}>
            <Heart className="text-pink-400" fill="currentColor" size={28} />
          </motion.div>
        </motion.div>

      </div>

      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 w-full h-12 flex justify-center space-x-8 pb-4">
        <div className="w-3 h-3 rounded-full bg-pink-300"></div>
        <div className="w-3 h-3 rounded-full bg-pink-200"></div>
        <div className="w-3 h-3 rounded-full bg-pink-300"></div>
        <div className="w-3 h-3 rounded-full bg-pink-200"></div>
        <div className="w-3 h-3 rounded-full bg-pink-300"></div>
      </div>
    </div>
  );
}

