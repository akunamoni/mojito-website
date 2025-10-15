import React from "react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import { featureLists, goodLists } from "../../Data/index";

const Art = () => {
  // ✅ Mobile check karne ke liye (screen size <= 767px)
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    // Mobile aur Desktop ke liye alag start point
    const start = isMobile ? "top 20%" : "top top";

    // GSAP timeline with ScrollTrigger
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",       // section trigger
        start,                 // mobile/desktop condition ke hisaab se start
        end: "bottom center",  // kahaan tak chalega
        scrub: 1.5,            // smooth scrolling sync
        pin: true,             // section ko pin kar dega
      },
    });

    // Animations
    maskTimeline
      // pehle text fade-out ho jaayega
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      // image scale up aur mask effect
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      // final content appear karega
      .to("#masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  });

  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        {/* Section heading */}
        <h2 className="will-fade">The ART</h2>

        {/* Left features - Image - Right features */}
        <div className="content">
          {/* Left features */}
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          {/* Cocktail image with mask */}
          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          {/* Right features */}
          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Masked content reveal */}
        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This isn’t just a drink. It’s a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;