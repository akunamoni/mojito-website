import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../../Data/index";

const Cocktails = () => {
  // GSAP animation
  useGSAP(() => {
    // parallax timeline banaya
    gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails", // jab cocktails section viewport me aaye
        start: "top 30%",      // animation start hoga jab section ka top 30% par ho
        end: "bottom 80%",     // animation khatam hoga jab bottom 80% par ho
        scrub: true,           // scroll ke sath smoothly chalega
      },
    })
      .from("#c-left-leaf", { x: -100, y: 100 })  // left leaf slide-in
      .from("#c-right-leaf", { x: 100, y: 100 }); // right leaf slide-in
  });

  return (
    <section id="cocktails" className="noisy">
      {/* Decorative leaves */}
      <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id="c-right-leaf" />

      <div className="list">
        {/* Popular cocktails list */}
        <div className="popular">
          <h2>Most popular cocktails:</h2>
          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Loved mocktails list */}
        <div className="loved">
          <h2>Most loved mocktails:</h2>
          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;