import React from 'react';
import { ASSIGNMENTS, NOTICES, EVENTS, SCHEDULE } from '../data/mockData';
import './Dashboard.css';

const today = new Date();
const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const todayDay = DAYS[today.getDay()];

export default function Dashboard({ user }) {
  const todayClasses   = SCHEDULE.filter(s => s.day === todayDay);
  const pendingTasks   = ASSIGNMENTS.filter(a => a.status === 'Pending');
  const urgentNotices  = NOTICES.filter(n => n.urgent);
  const upcomingEvents = EVENTS.slice(0, 3);

  const stats = [
    { icon:'📅', label:"Today's Classes",   value: todayClasses.length,  color:'#1565C0', bg:'#EFF6FF' },
    { icon:'📝', label:'Pending Tasks',     value: pendingTasks.length,  color:'#D97706', bg:'#FFFBEB' },
    { icon:'📢', label:'Urgent Notices',    value: urgentNotices.length, color:'#DC2626', bg:'#FEF2F2' },
    { icon:'🎉', label:'Upcoming Events',   value: upcomingEvents.length,color:'#059669', bg:'#F0FDF4' },
  ];

  return (
    <div>
      <div className="page-header">
        <h2>Welcome back, {user.name}! 👋</h2>
        <p>{today.toLocaleDateString('en-PK', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}</p>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        {stats.map(st => (
          <div key={st.label} className="stat-card" style={{ borderTop:`3px solid ${st.color}` }}>
            <div className="stat-icon" style={{ background: st.bg }}>{st.icon}</div>
            <div>
              <div className="stat-value" style={{ color: st.color }}>{st.value}</div>
              <div className="stat-label">{st.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="dash-grid">
        {/* Today's Schedule */}
        <div className="card">
          <div className="card-title">📅 Today — {todayDay}</div>
          {todayClasses.length === 0 ? (
            <div className="empty-state"><div className="icon">🎊</div><p>No classes today!</p></div>
          ) : (
            todayClasses.map(cls => (
              <div key={cls.id} className="schedule-row">
                <div className="sched-time">{cls.time}</div>
                <div>
                  <div className="sched-subject">{cls.subject}</div>
                  <div className="sched-meta">🏫 {cls.room} &nbsp;•&nbsp; 👨‍🏫 {cls.teacher}</div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pending Assignments */}
        <div className="card">
          <div className="card-title">📝 Pending Assignments</div>
          {pendingTasks.slice(0, 4).map(a => (
            <div key={a.id} className="assign-row">
              <div className="assign-title">{a.title}</div>
              <div className="assign-meta">
                <span className="assign-subject">{a.subject}</span>
                <span className={`badge badge-${a.priority === 'High' ? 'red' : a.priority === 'Medium' ? 'gold' : 'gray'}`}>{a.priority}</span>
              </div>
              <div className="assign-due">📅 Due: {new Date(a.dueDate).toLocaleDateString('en-PK', { month:'short', day:'numeric' })}</div>
            </div>
          ))}
        </div>

        {/* Notices */}
        <div className="card">
          <div className="card-title">📢 Latest Notices</div>
          {NOTICES.slice(0,4).map(n => (
            <div key={n.id} className="notice-row">
              {n.urgent && <span className="urgent-dot" />}
              <div>
                <div className="notice-title">{n.title}</div>
                <div className="notice-date">{n.date} &nbsp;•&nbsp; <span className={`badge badge-${n.urgent ? 'red' : 'gray'}`}>{n.category}</span></div>
              </div>
            </div>
          ))}
        </div>

        {/* Events */}
        <div className="card">
          <div className="card-title">🎉 Upcoming Events</div>
          {upcomingEvents.map(ev => (
            <div key={ev.id} className="event-row">
              <div className="event-date-block">
                <div className="event-day">{new Date(ev.date).getDate()}</div>
                <div className="event-mon">{new Date(ev.date).toLocaleString('default',{month:'short'})}</div>
              </div>
              <div>
                <div className="event-title">{ev.title}</div>
                <div className="event-meta">🕐 {ev.time} &nbsp;•&nbsp; 📍 {ev.venue}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
