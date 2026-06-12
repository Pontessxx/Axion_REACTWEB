import '@/styles/ProjectCard.scss';

export interface Project {
  id: number;
  name: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-card__preview" />
      <div className="project-card__info">
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__description">{project.description}</p>
      </div>
    </div>
  );
}
