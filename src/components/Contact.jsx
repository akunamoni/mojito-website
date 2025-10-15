import { openingHours, socials } from '../../Data/index'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText' // ✅ correct import
import React from 'react'

// GSAP plugin register karna jaruri hai warna animation work nahi karega
gsap.registerPlugin(SplitText)

const Contact = () => {
  useGSAP(() => {
    // h2 ko words me todhna (splitText karega isko)
    const titleSplit = new SplitText('#contact h2', { type: 'words' })

    // GSAP timeline banayi scroll par trigger ke liye
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top center'
      },
      ease: 'power1.inOut'
    })

    // animation chain
    timeline
      // h2 ke words ek ek karke niche se fade in honge
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02
      })
      // h3 aur paragraph bhi slide in karenge
      .from('#contact h3, #contact p', {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02
      })
      // footer ke dono leaves ko halka upar move karna
      .to('#f-right-leaf', {
        y: '-50',
        duration: 1,
        ease: 'power1.inOut'
      })
      .to(
        '#f-left-leaf',
        {
          y: '-50',
          duration: 1,
          ease: 'power1.inOut'
        },
        '<' // iska matlab hai same time par animate karo
      )
  })

  return (
    <footer id="contact">
      {/* Background decorative leaves */}
      <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
      <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

      <div className="content">
        {/* Title */}
        <h2>Where to Find Us</h2>

        {/* Visit section */}
        <div>
          <h3>Visit Our Bar</h3>
          <p>Flat No. 302, Sai Enclave Apartments, Madhapur, Hyderabad – 500081</p>
        </div>

        {/* Contact section */}
        <div>
          <h3>Contact Us</h3>
          <p>+91 7386526988</p>
          <p>Hey@Frontend-Developer</p>
        </div>

        {/* Opening hours */}
        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        {/* Social media icons */}
        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contact