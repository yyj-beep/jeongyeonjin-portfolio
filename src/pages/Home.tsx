import { useEffect, useState, useRef } from "react";
import styles from "../styles/Home.module.css";

import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import Header from "../layout/Header";

export default function Home() {
  /* =======================
     HERO PROGRESS
  ======================= */
  const [progress, setProgress] = useState(0);

  /* =======================
     SECTION STATE
  ======================= */
  const sectionIds = ["home", "about", "skills", "works", "contact"];
  const [sectionIndex, setSectionIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const isScrollingRef = useRef(false);

  /* =======================
     LONG SECTION REFS
  ======================= */
  const skillsRef = useRef<HTMLElement | null>(null);
  const worksRef = useRef<HTMLElement | null>(null);

  /* =======================
     SCROLL TO SECTION
  ======================= */
  const scrollToSection = (index: number) => {
    const target = document.getElementById(sectionIds[index]);
    if (!target) return;

    const start = window.scrollY;
    const end = target.offsetTop;
    const duration = 600;
    const startTime = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(p);

      window.scrollTo(0, start + (end - start) * eased);

      if (p < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  /* =======================
     NAV CLICK
  ======================= */
  const handleNavClick = (id: string) => {
    const index = sectionIds.indexOf(id);
    if (index === -1) return;

    setSectionIndex(index);
    setActiveSection(id);
    scrollToSection(index);
  };

  /* =======================
     CURRENT SECTION INDEX
  ======================= */
  const getCurrentSectionIndex = () => {
    const y = window.scrollY + 5;
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (!el) continue;
      if (y >= el.offsetTop) return i;
    }
    return 0;
  };

  /* =======================
     ACTIVE SECTION SYNC
  ======================= */
  useEffect(() => {
    const onScroll = () => {
      const idx = getCurrentSectionIndex();
      const id = sectionIds[idx];
      setActiveSection(id);
      setSectionIndex(idx);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* =======================
     WHEEL HANDLER (안정 버전)
  ======================= */
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
    const worksEl = document.getElementById("works");

    if (
      worksEl &&
      worksEl.getBoundingClientRect().top < window.innerHeight &&
      worksEl.getBoundingClientRect().bottom > 0
    ) {
      // 🔥 Works가 화면에 보일 때만 Home 스크롤 개입 금지
      return;
    }


      const target = e.target as HTMLElement;
      if (target.closest("header")) return;

      // Contact에서는 Home 스크롤 개입 금지
      if (sectionIndex === 4) {
        return;
      }


      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }

      const MAX_DELTA = 130;
      const delta = Math.max(Math.min(e.deltaY, MAX_DELTA), -MAX_DELTA);
      const isAtTop = window.scrollY === 0;

      /* ===== HERO ===== */
      if (isAtTop) {
        if (
          (delta > 0 && progress < 1) ||
          (delta < 0 && progress > 0)
        ) {
          e.preventDefault();
          setProgress((prev) =>
            Math.min(Math.max(prev + delta * 0.0005, 0), 1)
          );
          return;
        }

        if (delta > 0 && progress === 1) {
          e.preventDefault();
          isScrollingRef.current = true;

          setSectionIndex(1);
          setActiveSection("about");
          scrollToSection(1);

          setTimeout(() => {
            isScrollingRef.current = false;
          }, 900);
          return;
        }
      }

      /* ===== SKILLS ===== */
      if (sectionIndex === 2 && skillsRef.current) {
        const { top, bottom } = skillsRef.current.getBoundingClientRect();
        const OFFSET = 80;

        if (
          (delta > 0 && bottom > window.innerHeight) ||
          (delta < 0 && top < -OFFSET)
        ) {
          return;
        }
      }

      /* ===== WORKS ===== */
      if (sectionIndex === 3) {
        const saved = sessionStorage.getItem("worksProgress");
        const worksFinished =
          saved !== null && parseFloat(saved) >= 0.999;

        if (!worksFinished) {
          return;
        }
      }

      /* ===== PAGE SNAP ===== */
      const currentIndex = getCurrentSectionIndex();

      if (delta > 0 && currentIndex < sectionIds.length - 1) {
        e.preventDefault();
        isScrollingRef.current = true;

        const next = currentIndex + 1;
        setSectionIndex(next);
        setActiveSection(sectionIds[next]);
        scrollToSection(next);

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
        return;
      }

      if (delta < 0 && currentIndex > 0) {
        e.preventDefault();
        isScrollingRef.current = true;

        const prev = currentIndex - 1;
        setSectionIndex(prev);
        setActiveSection(sectionIds[prev]);
        scrollToSection(prev);

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 750);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [progress, sectionIndex]);

  /* =======================
     HERO VALUES (유지)
  ======================= */
  const scale = 1 - progress * 0.3;
  const translateY = progress * -420;
  const blurAmount = progress * 8;
  const paperTranslateX = (1 - progress) ** 2 * 320;

  return (
    <>
      <Header activeSection={activeSection} onNavClick={handleNavClick} />

      <section id="home" className={styles.home}>
        <div
          className={styles.bg}
          style={{
            backgroundImage: "url('/assets/bg-texture.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div
          className={styles.title}
          style={{
            transform: `translateY(${translateY}px) scale(${scale})`,
          }}
        >
          <span
            className={styles.line1}
            style={{ filter: `blur(${blurAmount}px)` }}
          >
            NOT JUST SEEN
          </span>
          <span className={styles.line2}>
            —FELT<span className={styles.copy}>©</span>
          </span>
        </div>

        <div
          className={styles.paper}
          style={{
            transform: `translateX(${paperTranslateX}px)`,
          }}
        >
          <img src="/assets/paper-brown.png" alt="torn paper" />
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills" ref={skillsRef}>
        <Skills />
      </section>

      <section id="works" ref={worksRef}>
        <Works />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
