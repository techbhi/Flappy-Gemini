
import React, { useState, useEffect } from 'react';
import { AppView, User } from './types';
import Auth from './components/Auth';
import GameCanvas from './components/GameCanvas';
import Leaderboard from './components/Leaderboard';
import { getCurrentUser, logout } from './services/storageService';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.AUTH);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const refreshUser = () => {
    const user = getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  };

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setView(AppView.GAME);
    }
  }, []);

  const handleAuthSuccess = (user: User) => {
    setCurrentUser(user);
    setView(AppView.GAME);
  };

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
    setView(AppView.AUTH);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-0 md:p-4 bg-[#4ec0ca]">
      <div className="w-full max-w-md bg-white md:rounded-xl shadow-2xl overflow-hidden relative flex flex-col h-screen md:h-auto md:min-h-[700px]">
        {/* Header Bar */}
        {currentUser && (
          <div className="bg-[#5c2e91] text-white p-4 flex justify-between items-center z-20 text-[10px] shrink-0 border-b-4 border-black/20">
            <div className="flex items-center gap-2">
              <i className="fas fa-user-circle text-lg text-yellow-400"></i>
              <span className="truncate max-w-[80px]">{currentUser.username}</span>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setView(AppView.GAME)}
                className={`px-2 py-1 rounded ${view === AppView.GAME ? 'bg-yellow-400 text-black' : 'hover:text-yellow-400'}`}
              >
                PLAY
              </button>
              <button 
                onClick={() => setView(AppView.LEADERBOARD)}
                className={`px-2 py-1 rounded ${view === AppView.LEADERBOARD ? 'bg-yellow-400 text-black' : 'hover:text-yellow-400'}`}
              >
                HALL
              </button>
              <button onClick={handleLogout} className="text-red-300 hover:text-red-500 ml-1">
                <i className="fas fa-power-off"></i>
              </button>
            </div>
          </div>
        )}

        <main className="relative grow overflow-hidden bg-[#4ec0ca]">
          {view === AppView.AUTH && <Auth onAuthSuccess={handleAuthSuccess} />}
          {view === AppView.GAME && currentUser && (
            <GameCanvas user={currentUser} onScoreUpdate={refreshUser} />
          )}
          {view === AppView.LEADERBOARD && (
            <Leaderboard onBack={() => setView(AppView.GAME)} />
          )}
        </main>

        <footer className="bg-gray-100 p-2 text-center text-[8px] text-gray-400 border-t shrink-0">
          GEMINI ENGINE 3.0 • V1.2 STABLE
        </footer>
      </div>
    </div>
  );
};

export default App;
