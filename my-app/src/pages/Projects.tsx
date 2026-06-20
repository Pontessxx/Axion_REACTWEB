import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ProjectCard, { type Project } from '@/components/projects/ProjectCard';
import '@/styles/Projects.scss';

const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Project 1',
    description: 'A little description from AI about the executable',
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'A little description from AI about the executable',
  },
  {
    id: 3,
    name: 'Project 3',
    description: 'A little description from AI about the executable',
  },
  {
    id: 4,
    name: 'Project 4',
    description: 'A little description from AI about the executable',
  },
  {
    id: 5,
    name: 'Project 5',
    description: 'A little description from AI about the executable',
  },
  {
    id: 6,
    name: 'Project 6',
    description: 'A little description from AI about the executable',
  },
  {
    id: 7,
    name: 'Project 7',
    description: 'A little description from AI about the executable',
  },
];

export default function Projects() {
  const [search, setSearch] = useState('');

  const filtered = MOCK_PROJECTS.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="projects">
      <h1 className="projects__title">ERP Projects</h1>

      <div className="projects__search">
        <input
          type="text"
          placeholder="Search executable ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className="projects__search-icon" />
      </div>

      {filtered.length > 0 ? (
        <div className="projects__grid">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="projects__empty">Nenhum projeto encontrado.</p>
      )}
    </div>
  );
}
