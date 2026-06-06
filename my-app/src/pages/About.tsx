import '@/styles/About.scss';

const About = () => {
  return (
    <div className="about">
      {/* HERO */}
      <section className="about__hero">
        <h1>AXION</h1>
        <p className="about__subtitle">
          Uma camada unificada de inteligência para gestão de projetos, finanças e produtividade.
        </p>

        <p className="about__description">
          O AXION não é apenas mais uma ferramenta de produtividade. Ele é um ambiente estruturado
          onde projetos, decisões financeiras e assistência inteligente convergem em um único fluxo
          de trabalho. Criado para equipes e indivíduos que buscam clareza em vez de fragmentação.
        </p>
      </section>

      {/* PROBLEMA */}
      <section className="about__section">
        <h2>O problema que resolvemos</h2>

        <p>
          O trabalho moderno está espalhado entre dezenas de ferramentas. Tarefas ficam em uma plataforma,
          finanças em outra, comunicação em outro lugar completamente diferente. Essa fragmentação cria
          sobrecarga cognitiva e reduz a velocidade de execução.
        </p>

        <p>
          O AXION foi projetado para eliminar essa fricção, consolidando fluxos essenciais em um único sistema,
          reduzindo a troca constante de contexto e melhorando a tomada de decisão.
        </p>
      </section>

      {/* PRODUTO */}
      <section className="about__section">
        <h2>O que é o AXION</h2>

        <p>
          O AXION é uma plataforma SaaS modular que conecta gestão de projetos, controle financeiro
          e assistência com inteligência artificial em uma experiência única e coesa. Cada módulo é
          independente, mas foi projetado para funcionar em conjunto de forma fluida.
        </p>

        <p>
          Em vez de obrigar o usuário a se adaptar a ferramentas desconectadas, o AXION se adapta à forma
          como o trabalho realmente acontece — dinâmica, iterativa e interconectada.
        </p>
      </section>

      {/* TECNOLOGIA */}
      <section className="about__section">
        <h2>Construído para escalar</h2>

        <p>
          O sistema é desenvolvido com tecnologias modernas de web utilizando React, TypeScript e Vite.
          O frontend foi projetado para ser rápido, escalável e baseado em componentes, permitindo evolução
          contínua sem acúmulo de dívida técnica.
        </p>

        <p>
          O estilo é construído com SCSS, permitindo uma organização modular e consistente do design.
          A navegação segue padrões de SPA, garantindo uma experiência fluida e semelhante a um aplicativo.
        </p>
      </section>

      {/* FUTURO */}
      <section className="about__section">
        <h2>O que vem a seguir</h2>

        <p>
          O AXION está evoluindo para um ecossistema completo de produtividade. As próximas etapas incluem
          autenticação segura, integração com backend em C#, colaboração em tempo real e recursos de IA
          para apoiar decisões dentro da plataforma.
        </p>

        <p>
          A visão de longo prazo é transformar o AXION em uma camada operacional inteligente para produtividade —
          não apenas uma ferramenta, mas um ambiente onde a execução se torna natural, estruturada e eficiente.
        </p>
      </section>

      {/* MISSÃO */}
      <section className="about__closing">
        <h2>Missão</h2>

        <p>
          Eliminar a complexidade do trabalho digital unificando sistemas essenciais em uma plataforma inteligente
          e escalável que aumenta clareza, foco e eficiência na execução.
        </p>
      </section>
    </div>
  );
};

export default About;