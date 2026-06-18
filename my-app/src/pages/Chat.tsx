import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '@/styles/Chat.scss';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface LocationState {
  firstMessage?: string;
}

// ── Mock responses ────────────────────────────────────────

const MOCK_RESPONSES: { keywords: string[]; response: string }[] = [
  {
    keywords: ['oi', 'olá', 'ola', 'hey', 'hello', 'bom dia', 'boa tarde', 'boa noite', 'tudo bem', 'tudo bom'],
    response: 'Olá! Tudo ótimo por aqui, obrigado por perguntar! 😊 Como posso te ajudar hoje?',
  },
  {
    keywords: ['plano', 'planos', 'preço', 'preco', 'valor', 'assinar', 'assinatura', 'upgrade', 'premium'],
    response: 'Temos três planos disponíveis:\n\n• **Starter** — Gratuito, ideal para começar\n• **Pro** — R$ 49/mês, recursos avançados\n• **Enterprise** — Sob consulta, para grandes times\n\nQuer saber mais detalhes sobre algum deles?',
  },
  {
    keywords: ['finance', 'financeiro', 'financeira', 'fatura', 'pagamento', 'cobrança', 'cobranca', 'boleto', 'pix'],
    response: 'Na área financeira você consegue visualizar suas faturas, histórico de pagamentos e gerenciar seu método de pagamento. Posso te ajudar com algo específico sobre sua conta?',
  },
  {
    keywords: ['perfil', 'profile', 'conta', 'dados', 'nome', 'email', 'senha', 'foto'],
    response: 'Você pode editar seu perfil acessando o menu lateral e clicando em "Profile". Lá é possível alterar nome, e-mail, foto e senha. Precisa de ajuda com algum campo específico?',
  },
  {
    keywords: ['erro', 'bug', 'problema', 'falha', 'não funciona', 'nao funciona', 'quebrado'],
    response: 'Entendo que está enfrentando um problema. Para te ajudar melhor, pode descrever com mais detalhes o que está acontecendo? Se possível, informe em qual página o erro ocorre.',
  },
  {
    keywords: ['obrigado', 'obrigada', 'valeu', 'thanks', 'thank you', 'brigado'],
    response: 'Fico feliz em ajudar! 😊 Se tiver mais alguma dúvida, é só chamar.',
  },
  {
    keywords: ['tchau', 'bye', 'até logo', 'ate logo', 'até mais', 'ate mais', 'flw', 'falou'],
    response: 'Até logo! Foi um prazer conversar. Qualquer dúvida, estarei por aqui. 👋',
  },
  {
    keywords: ['axion', 'empresa', 'sobre', 'quem', 'o que é', 'o que e'],
    response: 'A Axion Tech é uma plataforma de gestão inteligente que utiliza IA para simplificar processos do seu negócio. Oferecemos ferramentas de automação, análise financeira e suporte 24/7. Como posso te ajudar?',
  },
  {
    keywords: ['ajuda', 'help', 'suporte', 'support', 'dúvida', 'duvida', 'como'],
    response: 'Claro, estou aqui para ajudar! 🤖 Pode me perguntar sobre:\n\n• Planos e preços\n• Área financeira\n• Configurações de perfil\n• Funcionalidades da plataforma\n\nO que você precisa?',
  },
];

const DEFAULT_RESPONSE =
  'Entendi! Estou processando sua solicitação. No momento estou em modo de demonstração, mas em breve terei acesso completo para te ajudar ainda melhor. Tem mais alguma coisa que posso esclarecer?';

const getMockResponse = (userMessage: string): string => {
  const lower = userMessage.toLowerCase();
  const match = MOCK_RESPONSES.find(({ keywords }) =>
    keywords.some((kw) => lower.includes(kw))
  );
  return match?.response ?? DEFAULT_RESPONSE;
};

const simulateDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// ── Component ─────────────────────────────────────────────

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const location = useLocation();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const state = location.state as LocationState;
    if (state?.firstMessage) {
      sendMessage(state.firstMessage);
    }
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || loading) return;

    setInput('');

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    const userMsg: Message = { role: 'user', content };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    // Simula tempo de resposta entre 800ms e 1.6s
    const delay = 800 + Math.random() * 800;
    await simulateDelay(delay);

    const reply = getMockResponse(content);
    setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 160)}px`;
  };

  return (
    <div className="chat">
      <div className="chat__messages">
        {messages.map((msg, i) => (
          <div key={i} className={`chat__message chat__message--${msg.role}`}>
            <div className="chat__bubble">{msg.content}</div>
          </div>
        ))}

        {loading && (
          <div className="chat__message chat__message--assistant">
            <div className="chat__bubble chat__bubble--typing">
              <span />
              <span />
              <span />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <div className="chat__input-wrapper">
        <div className="chat__input-container">
          <textarea
            ref={textareaRef}
            className="chat__input"
            placeholder="Ask anything..."
            value={input}
            rows={1}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
          />

          <button
            type="button"
            className="chat__button"
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
          >
            Send
          </button>
        </div>

        <p className="chat__disclaimer">
          Axion pode cometer erros. Verifique informações importantes.
        </p>
      </div>
    </div>
  );
};

export default Chat;