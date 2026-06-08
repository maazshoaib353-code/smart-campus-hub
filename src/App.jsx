import React, { useState, useEffect } from 'react';
import LoginScreen    from './screens/LoginScreen';
import Dashboard      from './screens/Dashboard';
import ScheduleScreen from './screens/ScheduleScreen';
import AssignmentsScreen from './screens/AssignmentsScreen';
import NoticeScreen   from './screens/NoticeScreen';
import StudyMaterials from './screens/StudyMaterials';
import EventsScreen   from './screens/EventsScreen';
import Sidebar        from './components/Sidebar';
import Topbar         from './components/Topbar';
import './App.css';

// ── Screen Map (manual routing — no React Router needed) ──
const screenMap = {
  dashboard:   Dashboard,
  schedule:    ScheduleScreen,
  assignments: AssignmentsScreen,
  notices:     NoticeScreen,
  materials:   StudyMaterials,
  events:      EventsScreen,
};

// Use matchMedia — reliable in Capacitor WebView unlike window.innerWidth at boot
const mobileQuery = window.matchMedia('(max-width: 768px)');
const isMobile = () => mobileQuery.matches;

export default function App() {
  const [user,          setUser]          = useState(null);
  const [activeScreen,  setActiveScreen]  = useState('dashboard');
  const [notifications, setNotifications] = useState(3);
  const [sidebarOpen,   setSidebarOpen]   = useState(!isMobile());

  // Keep sidebar state correct when screen rotates or resizes
  useEffect(() => {
    const handler = (e) => setSidebarOpen(!e.matches);
    mobileQuery.addEventListener('change', handler);
    return () => mobileQuery.removeEventListener('change', handler);
  }, []);

  // ── Auth ──────────────────────────────────────────────
  const handleLogin = (userData) => { setUser(userData); setActiveScreen('dashboard'); };
  const handleLogout = () => { setUser(null); setActiveScreen('dashboard'); };

  // Auto-close sidebar on mobile after tapping a nav item
  const handleNavigate = (screen) => {
    setActiveScreen(screen);
    if (isMobile()) setSidebarOpen(false);
  };

  if (!user) return <LoginScreen onLogin={handleLogin} />;

  const ActiveComponent = screenMap[activeScreen] || Dashboard;

  return (
    <div className={`app-shell ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {/* Mobile overlay — tap outside sidebar to close */}
      {sidebarOpen && isMobile() && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}
      <Sidebar
        activeScreen={activeScreen}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
        isOpen={sidebarOpen}
        user={user}
      />
      <div className="main-area">
        <Topbar
          user={user}
          screenName={activeScreen}
          notifications={notifications}
          onToggleSidebar={() => setSidebarOpen(p => !p)}
          onNotificationRead={() => setNotifications(0)}
        />
        <div className="screen-content">
          <ActiveComponent user={user} />
        </div>
      </div>
    </div>
  );
}
