import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBookAlt } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { RiMessage3Line } from 'react-icons/ri';
import { gsap } from 'gsap';

type LinkItem = { key: string; id: string };

const Links: LinkItem[] = [
  { key: '#', id: 'top' },
  { key: '#about-me', id: 'about-me' },
  { key: '#portfolio', id: 'portfolio' },
  { key: '#testimonials', id: 'testimonials' },
  { key: '#contact-me', id: 'contact-me' },
];

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>('#');
  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // function to set refs for each nav link
  const setNavRefs = (key: string) => (el: HTMLAnchorElement | null): void => {
    navRefs.current[key] = el;
  };

  // click handler: prevent immediate jump, set activeNav, scroll to section
  const handleClick = (e: React.MouseEvent, key: string, id: string) => {
    e.preventDefault();
    setActiveNav(key);

    const target = document.getElementById(id);
    
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // GSAP animation on activeNav change
  useEffect(() => {
    Object.entries(navRefs.current).forEach(([key, el]) => {
      if (!el) return;

      if (key === activeNav) {
        gsap.to(el, {
          scale: 1.25,
          duration: 0.35,
          ease: 'back.out(2)',
          overwrite: true,
        });
      } else {
        gsap.to(el, {
          scale: 1,
          duration: 0.25,
          ease: 'power1.out',
          overwrite: true,
        });
      }
    })
  }, [activeNav]);

  // IntersectionObserver -> set activeNav on section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).id;
            const key = id === 'top' ? '#' : `#${id}`;

            // avoid unnecessary state updates
            setActiveNav((prev) => (prev === key ? prev : key));
          }
        })
      },
      {
        root: null,
        // rootMargin moves the "window" considered for section visibility.
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0.2,
      }
    );

    // observe ONLY the sections corresponding to the links
    Links.forEach(({ id }) => {
      const el = document.getElementById(id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      {Links.map(({ key, id }) => {
        // choose an icon based on the key (or use an external mapping)
        let Icon = AiOutlineHome;

        if (key === '#about-me') Icon = AiOutlineUser;
        if (key === '#portfolio') Icon = BiBookAlt;
        if (key === '#testimonials') Icon = RiServiceLine;
        if (key === '#contact-me') Icon = RiMessage3Line;

        const isDisabled = key === '#portfolio';

        return (
          <a
            key={key}
            href={key}
            ref={setNavRefs(key)}
            onClick={(e) => handleClick(e, key, id)}
            className={`${activeNav === key ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`}
            aria-current={activeNav === key ? 'true' : undefined}
          >
            <Icon />
          </a>
        )
      })}
    </nav>
  )
}

export default Navbar;
