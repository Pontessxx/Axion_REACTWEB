import React, { useState } from 'react';
import type { Plan } from './Plancard';

interface UpgradePageProps {
  plan: Plan;
  onBack: () => void;
  onConfirm: () => void;
}

const UpgradePage: React.FC<UpgradePageProps> = ({ plan, onBack, onConfirm }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'pix'>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const formatCardNumber = (value: string) =>
    value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    return digits.length >= 3 ? digits.slice(0, 2) + '/' + digits.slice(2) : digits;
  };

  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(onConfirm, 1800);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '10px',
    border: '1px solid #d8b4fe',
    fontSize: '15px',
    boxSizing: 'border-box',
    outline: 'none',
    background: '#fdf4ff',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '13px',
    color: '#6B21A8',
    fontWeight: 600,
    marginBottom: '6px',
    display: 'block',
  };

  if (confirmed) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          gap: '16px',
          padding: '2rem',
        }}
      >
        <div style={{ fontSize: '56px' }}>🎉</div>
        <h2 style={{ color: '#6B21A8', margin: 0 }}>Plano ativado!</h2>
        <p style={{ color: '#555', textAlign: 'center' }}>
          Seu plano <strong>{plan.name}</strong> foi ativado com sucesso.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: '520px',
        margin: '0 auto',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: '1px solid #d8b4fe',
            borderRadius: '8px',
            padding: '6px 12px',
            cursor: 'pointer',
            color: '#6B21A8',
            fontWeight: 600,
          }}
        >
          ← Voltar
        </button>
        <h2 style={{ margin: 0, color: '#6B21A8' }}>Finalizar Upgrade</h2>
      </div>

      {/* Resumo do plano */}
      <div
        style={{
          border: '1px solid #d8b4fe',
          borderRadius: '16px',
          padding: '1.25rem',
          background: '#fdf4ff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ fontWeight: 700, color: '#6B21A8', fontSize: '16px' }}>{plan.name}</div>
          <div style={{ color: '#888', fontSize: '13px' }}>{plan.description}</div>
        </div>
        <div style={{ fontWeight: 700, fontSize: '22px', color: '#C45FFF' }}>{plan.price}<span style={{ fontSize: '13px', color: '#888', fontWeight: 400 }}>/mês</span></div>
      </div>

      {/* Seleção de método */}
      <div>
        <p style={{ fontWeight: 600, color: '#374151', marginBottom: '10px' }}>Método de pagamento</p>
        <div style={{ display: 'flex', gap: '12px' }}>
          {(['card', 'pix'] as const).map((method) => (
            <button
              key={method}
              onClick={() => setPaymentMethod(method)}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: '12px',
                border: paymentMethod === method ? '2px solid #C45FFF' : '1px solid #d8b4fe',
                background: paymentMethod === method ? '#fdf4ff' : '#fff',
                cursor: 'pointer',
                fontWeight: 600,
                color: paymentMethod === method ? '#6B21A8' : '#555',
                fontSize: '15px',
              }}
            >
              {method === 'card' ? '💳 Cartão' : '⚡ Pix'}
            </button>
          ))}
        </div>
      </div>

      {/* Formulário Cartão */}
      {paymentMethod === 'card' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={labelStyle}>Número do cartão</label>
            <input
              style={inputStyle}
              placeholder="0000 0000 0000 0000"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            />
          </div>
          <div>
            <label style={labelStyle}>Nome no cartão</label>
            <input
              style={inputStyle}
              placeholder="Como aparece no cartão"
              value={cardName}
              onChange={(e) => setCardName(e.target.value.toUpperCase())}
            />
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Validade</label>
              <input
                style={inputStyle}
                placeholder="MM/AA"
                value={expiry}
                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>CVV</label>
              <input
                style={inputStyle}
                placeholder="•••"
                maxLength={4}
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
              />
            </div>
          </div>
        </div>
      )}

      {/* Pix */}
      {paymentMethod === 'pix' && (
        <div
          style={{
            border: '1px dashed #d8b4fe',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center',
            background: '#fdf4ff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {/* QR Code mockado */}
          <div
            style={{
              width: '140px',
              height: '140px',
              background: '#f3e8ff',
              border: '2px solid #C45FFF',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
            }}
          >
            📲
          </div>
          <p style={{ color: '#6B21A8', fontWeight: 600, margin: 0 }}>Escaneie o QR Code</p>
          <p style={{ color: '#888', fontSize: '13px', margin: 0 }}>
            Ou copie a chave Pix abaixo
          </p>
          <div
            style={{
              background: '#ede9fe',
              borderRadius: '8px',
              padding: '10px 16px',
              fontFamily: 'monospace',
              fontSize: '13px',
              color: '#6B21A8',
              wordBreak: 'break-all',
              cursor: 'pointer',
              userSelect: 'all',
            }}
          >
            00020126580014BR.GOV.BCB.PIX0136mock-key-financepro@empresa.com.br5204000053039865404{plan.price.replace('R$', '')}5802BR5913Finance Pro6009Sao Paulo62070503***6304ABCD
          </div>
          <span style={{ fontSize: '12px', color: '#aaa' }}>Clique para selecionar e copiar</span>
        </div>
      )}

      {/* Botão confirmar */}
      <button
        onClick={handleConfirm}
        style={{
          width: '100%',
          padding: '14px',
          borderRadius: '12px',
          border: 'none',
          background: '#C45FFF',
          color: '#fff',
          fontSize: '16px',
          fontWeight: 700,
          cursor: 'pointer',
          marginTop: '4px',
        }}
      >
        Confirmar pagamento · {plan.price}/mês
      </button>

      <p style={{ textAlign: 'center', fontSize: '12px', color: '#aaa', margin: 0 }}>
        🔒 Pagamento seguro · Cancele quando quiser
      </p>
    </div>
  );
};

export default UpgradePage;