import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import React from 'react';

const About = () => {
  useGSAP(() => {
    // h2 ko SplitText se words me tod rahe hai
    const titleSplit = SplitText.create('#about h2', {
      type: 'words',
    });

    // scroll hone par chalne wala timeline banaya
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',      // trigger hoga jab #about section viewport me aayega
        start: 'top center',    // jab about section ka top viewport ke center ko touch karega tab start hoga
      },
    });

    // animation sequence
    scrollTimeline
      // h2 ke words ek ek karke niche se aayenge + fade in honge
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: 'expo.out',
        stagger: 0.02, // har word thoda delay ke sath aayega
      })
      // upar aur niche wale grid div fade in honge
      .from(
        '.top-grid div, .bottom-grid div',
        {
          opacity: 0,
          duration: 1,
          ease: 'power1.inOut',
          stagger: 0.04, // ek ek div thoda delay ke sath
        },
        '-=0.5' // -0.5 sec overlap pe start hoga (title ke animation ke sath hi chalne lagega)
      );
  });

  return (
    <div id="about">
      {/* text aur content wala section */}
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* upar wali grid images */}
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="grid-img-5" />
        </div>
      </div>

      {/* niche wali grid images */}
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
};

export default About;