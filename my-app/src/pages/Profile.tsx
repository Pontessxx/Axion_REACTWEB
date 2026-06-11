import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Theme = 'light' | 'dark';

const Toggle = ({ value, onChange }: { value: boolean; onChange: () => void }) => (
  <button
    onClick={onChange}
    style={{
      width: '44px',
      height: '24px',
      borderRadius: '999px',
      border: 'none',
      background: value ? '#7C3AED' : '#d1d5db',
      cursor: 'pointer',
      position: 'relative',
      flexShrink: 0,
      transition: 'background 0.2s',
    }}
  >
    <span
      style={{
        position: 'absolute',
        top: '3px',
        left: value ? '23px' : '3px',
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        background: '#fff',
        transition: 'left 0.2s',
      }}
    />
  </button>
);

const Profile = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<Theme>('light');
  const [notifResponse, setNotifResponse] = useState(true);
  const [notifDispatch, setNotifDispatch] = useState(true);
  const [fullName, setFullName] = useState('');
  const [aiName, setAiName] = useState('');

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
    background: '#fff',
  };

  const divider: React.CSSProperties = {
    borderBottom: '1px solid #e5e7eb',
    margin: '24px 0',
  };

  const sectionTitle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 600,
    color: '#111',
    margin: '0 0 16px 0',
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff' }}>

      <div
        style={{
          flex: 1,
          maxWidth: '800px',
          width: '100%',
          margin: '48px auto',
          padding: '0 24px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Settings */}
        <p style={sectionTitle}>Settings</p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: '#1f2937',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', flex: 1 }}>
            <input
              style={inputStyle}
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              style={inputStyle}
              placeholder="What should AI call you"
              value={aiName}
              onChange={(e) => setAiName(e.target.value)}
            />
          </div>
        </div>

        <div style={divider} />

        {/* Notification */}
        <p style={sectionTitle}>Notification</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '8px' }}>
          {[
            {
              label: 'Response completions',
              desc: 'Get notified when AI has finished a response, most useful for long running tasks like tool calls and Research',
              value: notifResponse,
              toggle: () => setNotifResponse((v) => !v),
            },
            {
              label: 'Dispatch messages',
              desc: 'Get a push notification on your phone when AI messages you in dispatch',
              value: notifDispatch,
              toggle: () => setNotifDispatch((v) => !v),
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px' }}
            >
              <div>
                <p style={{ margin: 0, fontWeight: 500, fontSize: '14px', color: '#111' }}>{item.label}</p>
                <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#6b7280' }}>{item.desc}</p>
              </div>
              <Toggle value={item.value} onChange={item.toggle} />
            </div>
          ))}
        </div>

        <div style={divider} />

        {/* Theme */}
        <p style={sectionTitle}>Theme</p>

        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
          {([
            { key: 'light', label: 'Light', emoji: '☀️', bg: '#D4F047' },
            { key: 'dark',  label: 'Dark',  emoji: '🌙', bg: '#374151' },
          ] as { key: Theme; label: string; emoji: string; bg: string }[]).map((t) => (
            <button
              key={t.key}
              onClick={() => setTheme(t.key)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
            >
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '14px',
                  background: t.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  border: theme === t.key ? '2px solid #7C3AED' : '2px solid transparent',
                }}
              >
                {t.emoji}
              </div>
              <span style={{ fontSize: '13px', color: theme === t.key ? '#7C3AED' : '#374151', fontWeight: theme === t.key ? 600 : 400 }}>
                {t.label}
              </span>
            </button>
          ))}
        </div>

        <div style={divider} />

        {/* Botões */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            style={{
              padding: '10px 28px',
              background: '#7C3AED',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            Salvar alterações
          </button>

          <button
            onClick={() => navigate('/finance')}
            style={{
              padding: '10px 28px',
              background: '#F3E8FF',
              color: '#7C3AED',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            Plano atual
          </button>
        </div>

      </div>
    </div>
  );
};

export default Profile;