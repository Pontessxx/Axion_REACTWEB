import React from 'react';

const Finance = () => {
  const plans = [
    {
      name: 'Free',
      price: 'Grátis',
      description: 'Para explorar a plataforma sem compromisso.',
      button: 'Plano Atual',
      highlighted: false,
      current: true,
      features: [
        'Fluxo de Caixa IA básico',
        '1 usuário',
        '3 projetos',
        '500 MB armazenamento',
      ],
    },
    {
      name: 'Standard Pro',
      price: 'R$149',
      description: 'Ideal para PMEs em crescimento.',
      button: 'Iniciar 14 dias grátis',
      highlighted: true,
      current: false,
      features: [
        'Fluxo de Caixa IA avançado',
        '5 usuários',
        'Projetos ilimitados',
        '20 GB armazenamento',
      ],
    },
    {
      name: 'Enterprise',
      price: 'R$389',
      description: 'Para grandes operações.',
      button: 'Selecionar Enterprise',
      highlighted: false,
      current: false,
      features: [
        'IA completa',
        'Usuários ilimitados',
        'Projetos ilimitados',
        '500 GB armazenamento',
      ],
    },
  ];

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4rem',
      }}
    >
      {/* Toggle */}
      <div
        style={{
          display: 'flex',
          background: '#F3D7FF',
          borderRadius: '999px',
          padding: '6px',
          gap: '8px',
        }}
      >
        <button
          style={{
            border: 0,
            background: '#C45FFF',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '999px',
            cursor: 'pointer',
          }}
        >
          Mensal
        </button>

        <button
          style={{
            border: 0,
            background: 'transparent',
            padding: '8px 16px',
            cursor: 'pointer',
          }}
        >
          Anual
        </button>

        <span
          style={{
            background: '#B89CFF',
            borderRadius: '999px',
            padding: '8px 12px',
            fontSize: '12px',
          }}
        >
          -17%
        </span>
      </div>

      {/* Cards */}
        <section
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            }}
        >
      {plans.map((plan) => (
        <div
          key={plan.name}
          style={{
            border: '1px solid #d946ef',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '20px',
            padding: '2rem',
            minHeight: '380px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
            <h3>{plan.name}</h3>

            <h2>{plan.price}</h2>

            <p>{plan.description}</p>

            <ul
              style={{
                paddingLeft: '20px',
                marginTop: '20px',
              }}
            >
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <button
              style={{
                width: '100%',
                marginTop: '20px',
                padding: '12px',
                borderRadius: '12px',
                border: 'none',
                background: plan.highlighted
                  ? '#C45FFF'
                  : '#E9D5FF',
                color: plan.highlighted
                  ? '#fff'
                  : '#6B21A8',
                cursor: 'pointer',
              }}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </section>

      {/* Benefícios */}
      <section
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          textAlign: 'center',
        }}
      >
        <div>
          <p><h4>🔒 Segurança </h4> Dados criptografados ponta a ponta</p>
        </div>

        <div>
          <p><h4>✅ Compliance </h4> Adequado 100% à LGPD</p>
        </div>

        <div>
          <p><h4>🔄 Sem fidelidade</h4> Cancele quando quiser</p>
        </div>
      </section>

      {/* Comparação */}
      <section
        style={{
          width: '100%',
          textAlign: 'center',
        }}
      >
        <h2>Comparação Detalhada</h2>

        <p>
          Escolha o plano ideal para o tamanho e necessidades
          do seu negócio.
        </p>

        <div
          style={{
            marginTop: '2rem',
            border: '1px solid #d946ef',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
            }}
          >
            <thead>
              <tr>
                <th style={thStyle}>Recurso</th>
                <th style={thStyle}>Free</th>
                <th style={thStyle}>Standard</th>
                <th style={thStyle}>Enterprise</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={tdStyle}>Usuários</td>
                <td style={tdStyle}>1</td>
                <td style={tdStyle}>5</td>
                <td style={tdStyle}>Ilimitado</td>
              </tr>

              <tr>
                <td style={tdStyle}>Armazenamento</td>
                <td style={tdStyle}>500 MB</td>
                <td style={tdStyle}>20 GB</td>
                <td style={tdStyle}>500 GB</td>
              </tr>

              <tr>
                <td style={tdStyle}>Projetos</td>
                <td style={tdStyle}>3</td>
                <td style={tdStyle}>Ilimitados</td>
                <td style={tdStyle}>Ilimitados</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

const thStyle: React.CSSProperties = {
  padding: '16px',
  background: '#f8fafc',
  borderBottom: '1px solid #ddd',
  textAlign: 'center',
};

const tdStyle: React.CSSProperties = {
  padding: '16px',
  borderBottom: '1px solid #eee',
  textAlign: 'center',
};

export default Finance;