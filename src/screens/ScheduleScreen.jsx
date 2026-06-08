import React, { useState } from 'react';
import { SCHEDULE } from '../data/mockData';

const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday'];

export default function ScheduleScreen() {
  const [activeDay, setActiveDay] = useState('Monday');
  const filtered = SCHEDULE.filter(s => s.day === activeDay);

  const colors = ['#1565C0','#0096C7','#7C3AED','#D97706','#059669'];

  return (
    <div>
      <div className="page-header">
        <h2>📅 Class Schedule</h2>
        <p>Your weekly timetable at a glance</p>
      </div>

      {/* Day tabs */}
      <div style={{ display:'flex', gap:'8px', marginBottom:'20px', flexWrap:'wrap' }}>
        {DAYS.map(day => (
          <button key={day}
            onClick={() => setActiveDay(day)}
            className={`btn ${activeDay === day ? 'btn-primary' : 'btn-outline'}`}>
            {day}
          </button>
        ))}
      </div>

      <div className="card">
        <div className="card-title">📆 {activeDay}'s Classes</div>
        {filtered.length === 0 ? (
          <div className="empty-state"><div className="icon">🎊</div><p>No classes scheduled on {activeDay}</p></div>
        ) : (
          <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
            {filtered.map((cls, i) => (
              <div key={cls.id} style={{
                display:'flex', gap:'16px', alignItems:'center',
                padding:'16px', borderRadius:'10px',
                background:'#F8FAFC', borderLeft:`4px solid ${colors[i % colors.length]}`
              }}>
                <div style={{ textAlign:'center', minWidth:'90px' }}>
                  <div style={{ fontSize:'0.8rem', color:'#64748B' }}>Time</div>
                  <div style={{ fontSize:'0.88rem', fontWeight:'700', color: colors[i % colors.length] }}>{cls.time}</div>
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:'1rem', fontWeight:'700', color:'var(--navy)', marginBottom:'4px' }}>{cls.subject}</div>
                  <div style={{ display:'flex', gap:'16px', fontSize:'0.83rem', color:'var(--gray)' }}>
                    <span>🏫 {cls.room}</span>
                    <span>👨‍🏫 {cls.teacher}</span>
                    <span>📅 {cls.day}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Full week summary */}
      <div className="card">
        <div className="card-title">📊 Weekly Summary</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'12px' }}>
          {DAYS.map((day, i) => {
            const count = SCHEDULE.filter(s => s.day === day).length;
            return (
              <div key={day} style={{ textAlign:'center', padding:'14px', borderRadius:'10px', background: activeDay===day ? '#EFF6FF' : '#F8FAFC', border: activeDay===day ? '1.5px solid #1565C0' : '1px solid #E2E8F0', cursor:'pointer' }}
                onClick={() => setActiveDay(day)}>
                <div style={{ fontSize:'0.8rem', fontWeight:'600', color:'var(--gray)', marginBottom:'6px' }}>{day.slice(0,3)}</div>
                <div style={{ fontSize:'1.5rem', fontWeight:'700', color: colors[i], fontFamily:'Poppins,sans-serif' }}>{count}</div>
                <div style={{ fontSize:'0.72rem', color:'var(--gray)' }}>classes</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
