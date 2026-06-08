import React from 'react';
import './Sidebar.css';

const NAV_ITEMS = [
  { key: 'dashboard',   icon: '📊', label: 'Dashboard'        },
  { key: 'schedule',    icon: '📅', label: 'Class Schedule'   },
  { key: 'assignments', icon: '📝', label: 'Assignments'      },
  { key: 'notices',     icon: '📢', label: 'Notice Board'     },
  { key: 'materials',   icon: '📁', label: 'Study Materials'  },
  { key: 'events',      icon: '🎉', label: 'Events'           },
];

export default function Sidebar({ activeScreen, onNavigate, onLogout, isOpen, user }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {/* Brand */}
      <div className="sidebar-brand">
        <span className="brand-icon">🎓</span>
        {isOpen && <span className="brand-name">Campus Hub</span>}
      </div>

      {/* User chip */}
      {isOpen && (
        <div className="sidebar-user">
          <div className="avatar">{user.name[0]}</div>
          <div>
            <div className="user-name">{user.name}</div>
            <div className="user-roll">{user.roll}</div>
          </div>
        </div>
      )}

      {/* Nav */}
      <nav className="sidebar-nav">
        {NAV_ITEMS.map(item => (
          <button
            key={item.key}
            className={`nav-item ${activeScreen === item.key ? 'active' : ''}`}
            onClick={() => onNavigate(item.key)}
            title={!isOpen ? item.label : ''}
          >
            <span className="nav-icon">{item.icon}</span>
            {isOpen && <span className="nav-label">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Logout */}
      <button className="sidebar-logout" onClick={onLogout} title="Logout">
        <span>🚪</span>
        {isOpen && <span>Logout</span>}
      </button>
    </aside>
  );
}
