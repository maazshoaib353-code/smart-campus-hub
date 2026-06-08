import React, { useState } from 'react';
import { ASSIGNMENTS } from '../data/mockData';

export default function AssignmentsScreen() {
  const [tasks,  setTasks]  = useState(ASSIGNMENTS);
  const [filter, setFilter] = useState('All');

  const FILTERS = ['All','Pending','Completed','High','Medium','Low'];

  const filtered = tasks.filter(t => {
    if (filter === 'All')       return true;
    if (filter === 'Pending')   return t.status === 'Pending';
    if (filter === 'Completed') return t.status === 'Completed';
    return t.priority === filter;
  });

  const toggleStatus = id => setTasks(prev =>
    prev.map(t => t.id === id ? { ...t, status: t.status === 'Pending' ? 'Completed' : 'Pending' } : t)
  );

  const priorityBadge = p => `badge badge-${p==='High' ? 'red' : p==='Medium' ? 'gold' : 'gray'}`;

  return (
    <div>
      <div className="page-header">
        <h2>📝 Assignment Reminders</h2>
        <p>Track your tasks and deadlines</p>
      </div>

      {/* Stats row */}
      <div style={{ display:'flex', gap:'14px', marginBottom:'20px', flexWrap:'wrap' }}>
        {[
          { label:'Total',     val: tasks.length,                         color:'#1565C0' },
          { label:'Pending',   val: tasks.filter(t=>t.status==='Pending').length,   color:'#D97706' },
          { label:'Completed', val: tasks.filter(t=>t.status==='Completed').length, color:'#059669' },
          { label:'High Priority', val: tasks.filter(t=>t.priority==='High').length, color:'#DC2626' },
        ].map(s => (
          <div key={s.label} style={{ background:'white', borderRadius:'10px', padding:'14px 20px', minWidth:'130px', boxShadow:'0 1px 3px rgba(0,0,0,0.06)', borderTop:`3px solid ${s.color}` }}>
            <div style={{ fontSize:'1.6rem', fontWeight:'700', color:s.color, fontFamily:'Poppins,sans-serif' }}>{s.val}</div>
            <div style={{ fontSize:'0.78rem', color:'var(--gray)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ display:'flex', gap:'8px', marginBottom:'16px', flexWrap:'wrap' }}>
        {FILTERS.map(f => (
          <button key={f} className={`btn btn-sm ${filter===f ? 'btn-primary' : 'btn-outline'}`} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>

      {/* List */}
      <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
        {filtered.map(task => (
          <div key={task.id} className="card" style={{ marginBottom:0, opacity: task.status==='Completed' ? 0.7 : 1 }}>
            <div style={{ display:'flex', gap:'14px', alignItems:'flex-start' }}>
              <input type="checkbox"
                checked={task.status === 'Completed'}
                onChange={() => toggleStatus(task.id)}
                style={{ width:'18px', height:'18px', marginTop:'3px', cursor:'pointer', accentColor:'var(--blue)' }}
              />
              <div style={{ flex:1 }}>
                <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'6px', flexWrap:'wrap' }}>
                  <span style={{ fontSize:'0.98rem', fontWeight:'700', color:'var(--navy)', textDecoration: task.status==='Completed' ? 'line-through' : 'none' }}>
                    {task.title}
                  </span>
                  <span className={priorityBadge(task.priority)}>{task.priority}</span>
                  <span className={`badge ${task.status==='Completed' ? 'badge-green' : 'badge-gold'}`}>{task.status}</span>
                </div>
                <p style={{ fontSize:'0.83rem', color:'var(--gray)', marginBottom:'8px' }}>{task.description}</p>
                <div style={{ display:'flex', gap:'16px', fontSize:'0.8rem', color:'var(--gray)' }}>
                  <span>📚 {task.subject}</span>
                  <span>📅 Due: <strong style={{ color: task.status==='Pending' ? 'var(--red)' : 'var(--gray)' }}>{new Date(task.dueDate).toLocaleDateString('en-PK',{month:'short',day:'numeric',year:'numeric'})}</strong></span>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <div className="empty-state card"><div className="icon">✅</div><p>No tasks match the selected filter.</p></div>}
      </div>
    </div>
  );
}
