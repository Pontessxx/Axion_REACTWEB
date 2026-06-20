import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '@/styles/Historychat.scss';

interface ChatHistory {
  id: number;
  title: string;
}

const MOCK_HISTORY: ChatHistory[] = [
  { id: 1, title: 'History chat 1 - Theme #filter' },
  { id: 2, title: 'History chat 1 - Theme #filter' },
  { id: 3, title: 'History chat 1 - Theme #filter' },
  { id: 4, title: 'History chat 1 - Theme #filter' },
  { id: 5, title: 'History chat 1 - Theme #filter' },
  { id: 6, title: 'History chat 1 - Theme #filter' },
  { id: 7, title: 'History chat 1 - Theme #filter' },
  { id: 8, title: 'History chat 1 - Theme #filter' },
];

export default function Historychat() {
  const [search, setSearch] = useState('');

  const filtered = MOCK_HISTORY.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="historychat">
      <h1 className="historychat__title">History chat</h1>

      <div className="historychat__search">
        <input
          type="text"
          placeholder="Search executable ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className="historychat__search-icon" />
      </div>

      {filtered.length > 0 ? (
        <ul className="historychat__list">
          {filtered.map((item) => (
            <li key={item.id} className="historychat__item">
              {item.title}
            </li>
          ))}
        </ul>
      ) : (
        <p className="historychat__empty">Nenhum histórico encontrado.</p>
      )}
    </div>
  );
}
