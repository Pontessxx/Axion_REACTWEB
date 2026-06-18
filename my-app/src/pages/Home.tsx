import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/styles/Home.scss';

const Home = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const getGreeting = (): string => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      return 'Bom dia';
    }

    if (currentHour < 18) {
      return 'Boa tarde';
    }

    return 'Boa noite';
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    navigate('/chat', { state: { firstMessage: text } });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="home">
      <div className="home__container">
        <h1 className="home__title">
          {getGreeting()} 👋
        </h1>

        <p className="home__subtitle">
          How can Axion help you today?
        </p>

        <div className="home__input-container">
          <input
            type="text"
            className="home__input"
            placeholder="Ask anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button
            type="button"
            className="home__button"
            id="start-conversation-button"
            onClick={handleSend}
            disabled={!input.trim()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;