import React, { useState } from 'react';
import { NOTICES } from '../data/mockData';

const CAT_COLORS = { Exam:'red', Project:'blue', General:'gray', IT:'accent', Event:'green' };

export default function NoticeScreen() {
  const [selected, setSelected] = useState(null);
  const [filter,   setFilter]   = useState('All');

  const categories = ['All', ...new Set(NOTICES.map(n => n.category))];
  const filtered = filter === 'All' ? NOTICES : NOTICES.filter(n => n.category === filter);

  return (
    <div>
      <div className="page-header">
        <h2>📢 Notice Board</h2>
        <p>Stay updated with campus announcements</p>
      </div>

      <div style={{ display:'flex', gap:'8px', marginBottom:'20px', flexWrap:'wrap' }}>
        {categories.map(c => (
          <button key={c} className={`btn btn-sm ${filter===c ? 'btn-primary' : 'btn-outline'}`} onClick={() => setFilter(c)}>{c}</button>
        ))}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px' }}>
        {filtered.map(n => (
          <div key={n.id} className="card" style={{ marginBottom:0, cursor:'pointer', borderLeft:`4px solid ${n.urgent ? 'var(--red)' : '#E2E8F0'}`, transition:'transform 0.15s, box-shadow 0.15s' }}
            onClick={() => setSelected(n)}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 4px 12px rgba(0,0,0,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'8px' }}>
              <span className={`badge badge-${CAT_COLORS[n.category] || 'gray'}`}>{n.category}</span>
              {n.urgent && <span className="badge badge-red">🔴 Urgent</span>}
            </div>
            <h3 style={{ fontSize:'0.95rem', fontWeight:'700', color:'var(--navy)', marginBottom:'8px', lineHeight:1.4 }}>{n.title}</h3>
            <p style={{ fontSize:'0.82rem', color:'var(--gray)', overflow:'hidden', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical' }}>{n.body}</p>
            <div style={{ fontSize:'0.75rem', color:'var(--gray)', marginTop:'10px' }}>📅 {n.date}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.45)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:200 }}
          onClick={() => setSelected(null)}>
          <div style={{ background:'white', borderRadius:'16px', padding:'32px', maxWidth:'520px', width:'90%', maxHeight:'80vh', overflow:'auto' }}
            onClick={e => e.stopPropagation()}>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'12px' }}>
              <span className={`badge badge-${CAT_COLORS[selected.category] || 'gray'}`}>{selected.category}</span>
              {selected.urgent && <span className="badge badge-red">🔴 Urgent</span>}
            </div>
            <h2 style={{ fontSize:'1.2rem', color:'var(--navy)', marginBottom:'10px' }}>{selected.title}</h2>
            <p style={{ fontSize:'0.85rem', color:'var(--gray)', marginBottom:'16px' }}>📅 Posted on: {selected.date}</p>
            <p style={{ fontSize:'0.93rem', color:'var(--dark)', lineHeight:1.7 }}>{selected.body}</p>
            <button className="btn btn-primary" style={{ marginTop:'20px', width:'100%' }} onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
