import { useMemo, useState } from 'react';
import type { ChangeEvent } from 'react';
import {
  FaBell,
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
  FaCloud,
  FaCreditCard,
  FaDownload,
  FaEnvelope,
  FaFingerprint,
  FaKey,
  FaLayerGroup,
  FaLock,
  FaMapMarkerAlt,
  FaPen,
  FaPhoneAlt,
  FaShieldAlt,
  FaSlidersH,
  FaUserTie,
  FaUsers,
} from 'react-icons/fa';
import '@/styles/Profile.scss';

type UserProfile = {
  name: string;
  role: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
};

type PreferenceKey = 'emailReports' | 'aiInsights' | 'securityAlerts' | 'weeklyDigest';

const initialProfile: UserProfile = {
  name: 'Rafael Costa',
  role: 'Product Owner',
  company: 'Axion Labs',
  email: 'rafael.costa@axion.app',
  phone: '+55 11 98234-5100',
  location: 'Sao Paulo, Brasil',
  bio: 'Coordena operacoes, prioridades de produto e analises financeiras dentro do AXION.',
};

const profileStats = [
  {
    label: 'Projetos ativos',
    value: '12',
    helper: '4 em prioridade alta',
    icon: <FaLayerGroup />,
    tone: 'blue',
  },
  {
    label: 'Equipe',
    value: '18',
    helper: '3 convites pendentes',
    icon: <FaUsers />,
    tone: 'teal',
  },
  {
    label: 'Armazenamento',
    value: '14.8 GB',
    helper: 'de 20 GB usados',
    icon: <FaCloud />,
    tone: 'amber',
  },
  {
    label: 'Seguranca',
    value: '96%',
    helper: 'conta protegida',
    icon: <FaShieldAlt />,
    tone: 'green',
  },
];

const preferenceOptions: { key: PreferenceKey; title: string; description: string }[] = [
  {
    key: 'emailReports',
    title: 'Relatorios por e-mail',
    description: 'Resumo financeiro e progresso dos projetos.',
  },
  {
    key: 'aiInsights',
    title: 'Insights de IA',
    description: 'Alertas de risco, prazo e custo.',
  },
  {
    key: 'securityAlerts',
    title: 'Alertas de seguranca',
    description: 'Novos logins e alteracoes criticas.',
  },
  {
    key: 'weeklyDigest',
    title: 'Digest semanal',
    description: 'Um consolidado executivo por semana.',
  },
];

const activityLog = [
  {
    title: 'Atualizou o fluxo financeiro',
    description: 'Revisou premissas do forecast trimestral.',
    time: 'Hoje, 10:24',
  },
  {
    title: 'Criou o projeto Portal Cliente',
    description: 'Definiu responsaveis, prazo e marcos iniciais.',
    time: 'Ontem, 17:10',
  },
  {
    title: 'Ativou resumo semanal por IA',
    description: 'Relatorios passam a chegar toda segunda-feira.',
    time: '08 Jun, 09:35',
  },
];

const sessions = [
  { device: 'Windows - Chrome', location: 'Sao Paulo', status: 'Sessao atual', current: true },
  { device: 'iPhone - Safari', location: 'Campinas', status: '2 horas atras', current: false },
  { device: 'MacBook - Edge', location: 'Rio de Janeiro', status: 'Ontem', current: false },
];

const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase() || 'AX';

const Profile = () => {
  const [profile, setProfile] = useState<UserProfile>(initialProfile);
  const [formProfile, setFormProfile] = useState<UserProfile>(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [preferences, setPreferences] = useState<Record<PreferenceKey, boolean>>({
    emailReports: true,
    aiInsights: true,
    securityAlerts: true,
    weeklyDigest: false,
  });

  const hasProfileChanges = useMemo(
    () =>
      (Object.keys(profile) as (keyof UserProfile)[]).some(
        (field) => profile[field] !== formProfile[field],
      ),
    [profile, formProfile],
  );

  const initials = useMemo(() => getInitials(profile.name), [profile.name]);

  const handleProfileChange =
    (field: keyof UserProfile) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormProfile((currentProfile) => ({
        ...currentProfile,
        [field]: event.target.value,
      }));
      setSaveMessage('');
    };

  const handleEdit = () => {
    setIsEditing(true);
    setSaveMessage('');
  };

  const handleCancel = () => {
    setFormProfile(profile);
    setIsEditing(false);
    setSaveMessage('');
  };

  const handleSave = () => {
    if (!hasProfileChanges) return;
    setProfile(formProfile);
    setIsEditing(false);
    setSaveMessage('Perfil atualizado nesta sessao.');
  };

  const togglePreference = (key: PreferenceKey) => {
    setPreferences((currentPreferences) => ({
      ...currentPreferences,
      [key]: !currentPreferences[key],
    }));
  };

  const profileDetails = [
    { label: 'E-mail', value: profile.email, icon: <FaEnvelope /> },
    { label: 'Telefone', value: profile.phone, icon: <FaPhoneAlt /> },
    { label: 'Empresa', value: profile.company, icon: <FaBuilding /> },
    { label: 'Localizacao', value: profile.location, icon: <FaMapMarkerAlt /> },
  ];

  return (
    <main className="profile">
      <section className="profile__hero" aria-labelledby="profile-title">
        <div className="profile__identity">
          <div className="profile__avatar" aria-hidden="true">
            {initials}
          </div>

          <div className="profile__identity-text">
            <span className="profile__eyebrow">Perfil profissional</span>
            <h1 id="profile-title">{profile.name}</h1>
            <p>
              {profile.role} em {profile.company}
            </p>

            <div className="profile__badges" aria-label="Status da conta">
              <span><FaCheckCircle /> Conta verificada</span>
              <span><FaCreditCard /> Standard Pro</span>
              <span><FaCalendarAlt /> Membro desde 2025</span>
            </div>
          </div>
        </div>

        <div className="profile__hero-actions">
          <p className="profile__save-message" role="status" aria-live="polite">
            {saveMessage}
          </p>

          {isEditing ? (
            <div className="profile__button-row">
              <button type="button" className="profile__button profile__button--ghost" onClick={handleCancel}>
                Cancelar
              </button>
              <button
                type="button"
                className="profile__button profile__button--primary"
                onClick={handleSave}
                disabled={!hasProfileChanges}
              >
                <FaCheckCircle /> Salvar
              </button>
            </div>
          ) : (
            <button type="button" className="profile__button profile__button--primary" onClick={handleEdit}>
              <FaPen /> Editar perfil
            </button>
          )}
        </div>
      </section>

      <section className="profile__stats" aria-label="Resumo da conta">
        {profileStats.map((stat) => (
          <article className={`profile__stat profile__stat--${stat.tone}`} key={stat.label}>
            <span className="profile__stat-icon">{stat.icon}</span>
            <div className="profile__stat-body">
              <p>{stat.label}</p>
              <strong>{stat.value}</strong>
              <span>{stat.helper}</span>
            </div>
          </article>
        ))}
      </section>

      <div className="profile__grid">
        <div className="profile__column profile__column--main">
          <section className="profile__panel" aria-labelledby="profile-data-title">
            <div className="profile__panel-header">
              <div>
                <span className="profile__section-kicker">Dados principais</span>
                <h2 id="profile-data-title">Informacoes pessoais</h2>
              </div>
              <span className="profile__status-pill">92% completo</span>
            </div>

            <div className="profile__form-grid">
              <label>
                Nome
                <input
                  type="text"
                  value={formProfile.name}
                  onChange={handleProfileChange('name')}
                  disabled={!isEditing}
                />
              </label>

              <label>
                Cargo
                <input
                  type="text"
                  value={formProfile.role}
                  onChange={handleProfileChange('role')}
                  disabled={!isEditing}
                />
              </label>

              <label>
                Empresa
                <input
                  type="text"
                  value={formProfile.company}
                  onChange={handleProfileChange('company')}
                  disabled={!isEditing}
                />
              </label>

              <label>
                E-mail
                <input
                  type="email"
                  value={formProfile.email}
                  onChange={handleProfileChange('email')}
                  disabled={!isEditing}
                />
              </label>

              <label>
                Telefone
                <input
                  type="tel"
                  value={formProfile.phone}
                  onChange={handleProfileChange('phone')}
                  disabled={!isEditing}
                />
              </label>

              <label>
                Localizacao
                <input
                  type="text"
                  value={formProfile.location}
                  onChange={handleProfileChange('location')}
                  disabled={!isEditing}
                />
              </label>

              <label className="profile__field--full">
                Bio
                <textarea
                  value={formProfile.bio}
                  onChange={handleProfileChange('bio')}
                  disabled={!isEditing}
                  rows={4}
                />
              </label>
            </div>
          </section>

          <section className="profile__panel" aria-labelledby="profile-preferences-title">
            <div className="profile__panel-header">
              <div>
                <span className="profile__section-kicker">Workspace</span>
                <h2 id="profile-preferences-title">Preferencias</h2>
              </div>
              <FaSlidersH className="profile__panel-icon" aria-hidden="true" />
            </div>

            <div className="profile__toggle-list">
              {preferenceOptions.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  className="profile__toggle"
                  aria-pressed={preferences[option.key]}
                  onClick={() => togglePreference(option.key)}
                >
                  <span>
                    <strong>{option.title}</strong>
                    <small>{option.description}</small>
                  </span>
                  <i aria-hidden="true" />
                </button>
              ))}
            </div>
          </section>

          <section className="profile__panel" aria-labelledby="profile-activity-title">
            <div className="profile__panel-header">
              <div>
                <span className="profile__section-kicker">Linha do tempo</span>
                <h2 id="profile-activity-title">Atividade recente</h2>
              </div>
            </div>

            <div className="profile__timeline">
              {activityLog.map((activity) => (
                <article className="profile__timeline-item" key={activity.title}>
                  <span aria-hidden="true" />
                  <div>
                    <strong>{activity.title}</strong>
                    <p>{activity.description}</p>
                  </div>
                  <time>{activity.time}</time>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="profile__column profile__column--aside">
          <section className="profile__panel" aria-labelledby="profile-card-title">
            <div className="profile__panel-header">
              <div>
                <span className="profile__section-kicker">Contato</span>
                <h2 id="profile-card-title">Cartao do usuario</h2>
              </div>
            </div>

            <div className="profile__contact-list">
              {profileDetails.map((item) => (
                <div className="profile__contact-item" key={item.label}>
                  <span>{item.icon}</span>
                  <div>
                    <p>{item.label}</p>
                    <strong>{item.value}</strong>
                  </div>
                </div>
              ))}
            </div>

            <button type="button" className="profile__button profile__button--secondary">
              <FaDownload /> Exportar vCard
            </button>
          </section>

          <section className="profile__panel" aria-labelledby="profile-security-title">
            <div className="profile__panel-header">
              <div>
                <span className="profile__section-kicker">Acesso</span>
                <h2 id="profile-security-title">Seguranca</h2>
              </div>
              <FaLock className="profile__panel-icon" aria-hidden="true" />
            </div>

            <div className="profile__security-score">
              <div
                className="profile__score-ring"
                role="img"
                aria-label="Pontuacao de seguranca: 96 de 100"
              >
                <span>96</span>
                <small>/100</small>
              </div>
              <div>
                <strong>Protecao forte</strong>
                <p>Autenticacao em dois fatores, senha recente e dispositivos conhecidos.</p>
              </div>
            </div>

            <div className="profile__security-actions">
              <button type="button"><FaFingerprint /> 2FA ativo</button>
              <button type="button"><FaKey /> Trocar senha</button>
            </div>
          </section>

          <section className="profile__panel" aria-labelledby="profile-sessions-title">
            <div className="profile__panel-header">
              <div>
                <span className="profile__section-kicker">Dispositivos</span>
                <h2 id="profile-sessions-title">Sessoes ativas</h2>
              </div>
            </div>

            <div className="profile__session-list">
              {sessions.map((session) => (
                <article className="profile__session" key={`${session.device}-${session.status}`}>
                  <FaUserTie aria-hidden="true" />
                  <div>
                    <strong>{session.device}</strong>
                    <p>{session.location}</p>
                  </div>
                  <span className={session.current ? 'profile__session-current' : undefined}>
                    {session.status}
                  </span>
                </article>
              ))}
            </div>
          </section>

          <section className="profile__panel profile__plan" aria-labelledby="profile-plan-title">
            <div className="profile__panel-header">
              <div>
                <span className="profile__section-kicker">Assinatura</span>
                <h2 id="profile-plan-title">Plano atual</h2>
              </div>
            </div>

            <div className="profile__plan-main">
              <span><FaCreditCard /></span>
              <div>
                <strong>Standard Pro</strong>
                <p>Renovacao em 21 Jul 2026</p>
              </div>
            </div>

            <div className="profile__usage">
              <div>
                <span>Projetos</span>
                <strong>12 / ilimitado</strong>
              </div>
              <div>
                <span>Usuarios</span>
                <strong>18 / 25</strong>
              </div>
            </div>

            <button type="button" className="profile__button profile__button--secondary">
              <FaCreditCard /> Gerenciar plano
            </button>
          </section>
        </aside>
      </div>

      <section className="profile__footer-panel" aria-label="Governanca da conta">
        <div>
          <FaBell aria-hidden="true" />
          <div>
            <strong>Centro de notificacoes sincronizado</strong>
            <p>Preferencias aplicadas ao workspace, relatorios financeiros e alertas de projeto.</p>
          </div>
        </div>
        <span>Ultima revisao: 11 Jun 2026</span>
      </section>
    </main>
  );
};

export default Profile;