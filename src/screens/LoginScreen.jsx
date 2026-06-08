import React, { useState } from 'react';
import { USERS } from '../data/mockData';
import './LoginScreen.css';

export default function LoginScreen({ onLogin }) {
  const [mode,   setMode]   = useState('login'); // 'login' | 'signup'
  const [form,   setForm]   = useState({ name:'', email:'', password:'', roll:'' });
  const [error,  setError]  = useState('');
  const [loading,setLoading]= useState(false);

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    setError('');
    if (!form.email || !form.password) { setError('Please fill in all fields.'); return; }
    setLoading(true);
    setTimeout(() => {
      if (mode === 'login') {
        const user = USERS.find(u => u.email === form.email && u.password === form.password);
        if (user) onLogin(user);
        else setError('Invalid email or password.');
      } else {
        if (!form.name || !form.roll) { setError('All fields are required.'); setLoading(false); return; }
        onLogin({ id: Date.now(), name: form.name, email: form.email, roll: form.roll });
      }
      setLoading(false);
    }, 700);
  };

  const handleDemo = () => onLogin(USERS[0]);

  return (
    <div className="login-bg">
      <div className="login-left">
        <div className="login-brand">🎓 Smart Campus Hub</div>
        <h2 className="login-tagline">Your Complete University Companion</h2>
        <p className="login-sub">Schedules · Assignments · Notices · Events · Study Materials</p>
        <div className="login-features">
          {['📅 Smart Timetable','📝 Assignment Tracker','📢 Live Notices','📁 Study Materials'].map(f => (
            <div key={f} className="feature-chip">{f}</div>
          ))}
        </div>
        <div className="login-demo-hint">
          <strong>Demo Credentials:</strong><br />
          maaz@maju.edu.pk / 123456
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <h2 className="login-title">{mode === 'login' ? 'Welcome Back 👋' : 'Create Account 🎓'}</h2>
          <p className="login-subtitle">
            {mode === 'login' ? 'Sign in to access your campus portal' : 'Join Smart Campus Hub today'}
          </p>

          {mode === 'signup' && (
            <>
              <label className="field-label">Full Name</label>
              <input className="field" name="name" placeholder="e.g. Maaz Ahmed" value={form.name} onChange={handleChange} />
              <label className="field-label">Roll Number</label>
              <input className="field" name="roll" placeholder="FA23-BSCS-0170" value={form.roll} onChange={handleChange} />
            </>
          )}

          <label className="field-label">Email Address</label>
          <input className="field" name="email" type="email" placeholder="you@maju.edu.pk" value={form.email} onChange={handleChange} />

          <label className="field-label">Password</label>
          <input className="field" name="password" type="password" placeholder="••••••••" value={form.password} onChange={handleChange}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()} />

          {error && <div className="login-error">⚠ {error}</div>}

          <button className="login-btn" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Please wait...' : (mode === 'login' ? 'Sign In' : 'Create Account')}
          </button>

          {mode === 'login' && (
            <button className="demo-btn" onClick={handleDemo}>⚡ Quick Demo Login</button>
          )}

          <p className="toggle-mode">
            {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
            <button onClick={() => { setMode(m => m === 'login' ? 'signup' : 'login'); setError(''); }}>
              {mode === 'login' ? ' Sign Up' : ' Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
