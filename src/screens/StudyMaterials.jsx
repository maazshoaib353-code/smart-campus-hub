import React, { useState } from 'react';
import { STUDY_MATERIALS } from '../data/mockData';

const TYPE_ICONS = { PDF:'📄', PPTX:'📊', Image:'🖼️', DOC:'📝' };
const TYPE_COLORS = { PDF:'#DC2626', PPTX:'#D97706', Image:'#7C3AED', DOC:'#1565C0' };

export default function StudyMaterials() {
  const [filter, setFilter] = useState('All');
  const subjects = ['All', ...new Set(STUDY_MATERIALS.map(m => m.subject))];
  const filtered = filter === 'All' ? STUDY_MATERIALS : STUDY_MATERIALS.filter(m => m.subject === filter);

  return (
    <div>
      <div className="page-header">
        <h2>📁 Study Materials</h2>
        <p>Access course notes, slides and resources shared by instructors</p>
      </div>

      {/* Subject Filter */}
      <div style={{ display:'flex', gap:'8px', marginBottom:'20px', flexWrap:'wrap' }}>
        {subjects.map(s => (
          <button key={s} className={`btn btn-sm ${filter===s ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setFilter(s)}
            style={{ fontSize:'0.78rem' }}>{s}</button>
        ))}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'16px' }}>
        {filtered.map(mat => (
          <div key={mat.id} className="card" style={{ marginBottom:0 }}>
            {/* File type banner */}
            <div style={{ background: TYPE_COLORS[mat.type] || '#1565C0', borderRadius:'8px', padding:'14px', textAlign:'center', marginBottom:'14px' }}>
              <div style={{ fontSize:'2rem' }}>{TYPE_ICONS[mat.type] || '📄'}</div>
              <div style={{ color:'white', fontSize:'0.75rem', fontWeight:'700', marginTop:'4px' }}>{mat.type}</div>
            </div>

            <h3 style={{ fontSize:'0.92rem', fontWeight:'700', color:'var(--navy)', marginBottom:'8px', lineHeight:1.4 }}>{mat.title}</h3>
            <div style={{ fontSize:'0.8rem', color:'var(--gray)', display:'flex', flexDirection:'column', gap:'4px', marginBottom:'14px' }}>
              <span>📚 {mat.subject}</span>
              <span>👨‍🏫 {mat.uploadedBy}</span>
              <span>📅 {mat.date} &nbsp;•&nbsp; 💾 {mat.size}</span>
            </div>

            <div style={{ display:'flex', gap:'8px' }}>
              <button className="btn btn-primary btn-sm" style={{ flex:1 }}>👁 View</button>
              <button className="btn btn-outline btn-sm" style={{ flex:1 }}>⬇ Download</button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && <div className="empty-state card"><div className="icon">📂</div><p>No materials found for this subject.</p></div>}
    </div>
  );
}
