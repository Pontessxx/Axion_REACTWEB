import React from 'react';

export interface Plan {
  name: string;
  price: string;
  description: string;
  button: string;
  highlighted: boolean;
  current: boolean;
  features: string[];
}

interface PlanCardProps {
  plan: Plan;
  onSelect: (plan: Plan) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onSelect }) => {
  return (
    <div
      style={{
        border: plan.highlighted ? '2px solid #C45FFF' : '1px solid #d946ef',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        padding: '2rem',
        minHeight: '380px',
        width: '100%',
        boxSizing: 'border-box',
        background: plan.highlighted ? '#fdf4ff' : '#fff',
        position: 'relative',
      }}
    >
      {plan.highlighted && (
        <span
          style={{
            position: 'absolute',
            top: '-14px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#C45FFF',
            color: '#fff',
            borderRadius: '999px',
            padding: '4px 16px',
            fontSize: '12px',
            fontWeight: 600,
            whiteSpace: 'nowrap',
          }}
        >
          ⭐ Recomendado
        </span>
      )}

      <h3 style={{ margin: '0 0 8px', color: '#6B21A8' }}>{plan.name}</h3>

      <h2 style={{ margin: '0 0 4px', fontSize: '2rem' }}>
        {plan.price}
        {plan.price !== 'Grátis' && (
          <span style={{ fontSize: '14px', fontWeight: 400, color: '#888' }}>/mês</span>
        )}
      </h2>

      <p style={{ color: '#555', marginBottom: '16px' }}>{plan.description}</p>

      <ul style={{ paddingLeft: '20px', flex: 1 }}>
        {plan.features.map((feature) => (
          <li key={feature} style={{ marginBottom: '8px' }}>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={() => !plan.current && onSelect(plan)}
        disabled={plan.current}
        style={{
          width: '100%',
          marginTop: '20px',
          padding: '12px',
          borderRadius: '12px',
          border: 'none',
          background: plan.current ? '#e5e7eb' : plan.highlighted ? '#C45FFF' : '#E9D5FF',
          color: plan.current ? '#9ca3af' : plan.highlighted ? '#fff' : '#6B21A8',
          cursor: plan.current ? 'default' : 'pointer',
          fontWeight: 600,
          fontSize: '15px',
          transition: 'opacity 0.2s',
        }}
      >
        {plan.button}
      </button>
    </div>
  );
};

export default PlanCard;