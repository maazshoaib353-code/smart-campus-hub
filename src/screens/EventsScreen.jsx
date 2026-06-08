import React, { useState } from 'react';
import { EVENTS } from '../data/mockData';

const CAT_COLORS = { Academic:'#1565C0', Sports:'#059669', Tech:'#7C3AED', Cultural:'#D97706', Workshop:'#0096C7' };

export default function EventsScreen() {
  const [rsvp, setRsvp] = useState({});
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(EVENTS.map(e => e.category))];
  const filtered = filter === 'All' ? EVENTS : EVENTS.filter(e => e.category === filter);

  const toggleRsvp = id => setRsvp(p => ({ ...p, [id]: !p[id] }));

  return (
    <div>
      <div className="page-header">
        <h2>🎉 Events & Announcements</h2>
        <p>Upcoming campus activities and programs</p>
      </div>

      <div style={{ display:'flex', gap:'8px', marginBottom:'20px', flexWrap:'wrap' }}>
        {categories.map(c => (
          <button key={c} className={`btn btn-sm ${filter===c ? 'btn-primary' : 'btn-outline'}`} onClick={() => setFilter(c)}>{c}</button>
        ))}
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
        {filtered.map(ev => {
          const d = new Date(ev.date);
          const color = CAT_COLORS[ev.category] || '#1565C0';
          const registered = rsvp[ev.id];
          return (
            <div key={ev.id} className="card" style={{ marginBottom:0, display:'flex', gap:'20px', alignItems:'flex-start' }}>
              {/* Date block */}
              <div style={{ background: color, borderRadius:'12px', padding:'12px 16px', textAlign:'center', minWidth:'64px', flexShrink:0, color:'white' }}>
                <div style={{ fontSize:'1.7rem', fontWeight:'700', fontFamily:'Poppins,sans-serif', lineHeight:1 }}>{d.getDate()}</div>
                <div style={{ fontSize:'0.7rem', textTransform:'uppercase', marginTop:'2px' }}>{d.toLocaleString('default',{month:'short'})}</div>
                <div style={{ fontSize:'0.65rem', marginTop:'2px', opacity:0.85 }}>{d.getFullYear()}</div>
              </div>

              {/* Info */}
              <div style={{ flex:1 }}>
                <div style={{ display:'flex', gap:'10px', alignItems:'center', marginBottom:'8px', flexWrap:'wrap' }}>
                  <h3 style={{ fontSize:'1rem', fontWeight:'700', color:'var(--navy)' }}>{ev.title}</h3>
                  <span className="badge" style={{ background:`${color}18`, color }}>{ev.category}</span>
                </div>
                <p style={{ fontSize:'0.87rem', color:'var(--gray)', marginBottom:'10px', lineHeight:1.5 }}>{ev.description}</p>
                <div style={{ display:'flex', gap:'20px', fontSize:'0.8rem', color:'var(--gray)', marginBottom:'12px', flexWrap:'wrap' }}>
                  <span>🕐 {ev.time}</span>
                  <span>📍 {ev.venue}</span>
                </div>
                <button
                  className={`btn btn-sm ${registered ? 'btn-accent' : 'btn-outline'}`}
                  onClick={() => toggleRsvp(ev.id)}>
                  {registered ? '✅ Registered' : '📌 Register / RSVP'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && <div className="empty-state card"><div className="icon">📭</div><p>No events in this category.</p></div>}
    </div>
  );
}
