import { useEffect, useState } from 'react';

export function useSectionSpy(ids: string[], offset = 140) {
  const [active, setActive] = useState(ids[0] ?? '');
  const key = ids.join('|');

  useEffect(() => {
    const sections = key.split('|');
    let frame = 0;

    const update = () => {
      frame = 0;
      let current = sections[0];
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= offset) current = id;
      }
      setActive(current);
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
  }, [key, offset]);

  return active;
}
