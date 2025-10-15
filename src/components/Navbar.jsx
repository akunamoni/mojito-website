import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { navLinks } from '../../Data/index';

const Navbar = () => {
  useGSAP(() => {
    gsap.fromTo(
      'nav',
      { backgroundColor: 'transparent' },
      {
        backgroundColor: '#00000050',
        backdropFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: 'nav',
          start: 'bottom top',
        },
      }
    );
  });

  return (
    <nav>
      <div className="flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>MojitoLuxe</p>
        </a>

        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;