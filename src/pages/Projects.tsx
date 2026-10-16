import { useEffect, useRef, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { useGitHubStats } from '../hooks/useGitHubStats';
import {
  mergeProjects,
  profile,
  projects as curatedProjects,
  type Project,
} from '../data/content';

function projectTime(project: Project): number {
  if (project.pushedAt) return new Date(project.pushedAt).getTime();
  if (project.period && /^\d{4}$/.test(project.period)) return Date.UTC(Number(project.period), 0, 1);
  return 0;
}

export default function Projects() {
  const { state, data } = useGitHubStats(profile.githubUser);
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const liveProjects = state === 'ready' && data ? mergeProjects(data.repos) : [];
  const projects = liveProjects.length > 0 ? liveProjects : curatedProjects;
  const ordered = [...projects].sort((a, b) => projectTime(a) - projectTime(b));

  useEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;
    const items = Array.from(list.querySelectorAll<HTMLElement>('.projects-timeline-item'));
    if (items.length === 0) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const center = window.innerHeight / 2;
      let best = 0;
      let bestDistance = Number.POSITIVE_INFINITY;
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - center);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = index;
        }
      });
      setActive(best);
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ordered.length, state]);

  return (
    <div className="projects-timeline" ref={listRef}>
      {ordered.map((p, index) => (
        <div
          key={p.name}
          className="projects-timeline-item"
          data-active={index === active ? 'true' : undefined}
        >
          <ProjectCard project={p} />
        </div>
      ))}
    </div>
  );
}
