import React, { useState } from 'react';
import './Topbar.css';

const SCREEN_TITLES = {
  dashboard:   '📊 Dashboard',
  schedule:    '📅 Class Schedule',
  assignments: '📝 Assignments',
  notices:     '📢 Notice Board',
  materials:   '📁 Study Materials',
  events:      '🎉 Events',
};

export default function Topbar({ user, screenName, notifications, onToggleSidebar, onNotificationRead }) {
  const [showBell, setShowBell] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="toggle-btn" onClick={onToggleSidebar} title="Toggle Sidebar">☰</button>
        <h1 className="screen-title">{SCREEN_TITLES[screenName] || screenName}</h1>
      </div>

      <div className="topbar-right">
        {/* Search */}
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search..." className="search-input" />
        </div>

        {/* Notification Bell */}
        <div className="notif-wrap">
          <button className="icon-btn" onClick={() => { setShowBell(p=>!p); onNotificationRead(); }}>
            🔔
            {notifications > 0 && <span className="notif-badge">{notifications}</span>}
          </button>
          {showBell && (
            <div className="notif-dropdown">
              <p className="notif-item">📢 Mid-Term exam schedule released</p>
              <p className="notif-item">📝 Assignment due in 2 days</p>
              <p className="notif-item">🎉 Sports Gala registration open</p>
            </div>
          )}
        </div>

        {/* User avatar */}
        <div className="topbar-avatar">{user.name[0]}</div>
      </div>
    </header>
  );
}
