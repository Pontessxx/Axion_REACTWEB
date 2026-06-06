import '@/styles/Home.scss';

const Home = () => {
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
          />

          <button
            type="button"
            className="home__button"
            id="start-conversation-button"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;