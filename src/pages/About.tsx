// src/pages/About.tsx
import styles from "../styles/About.module.css";
import { CgArrowRight } from "react-icons/cg";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className={styles.about}
      style={{
        backgroundImage: "url('/assets/about-bg.png')",
      }}
    >
      <div className={styles.inner}>

        {/* ✅ 왼쪽 자리만 차지하는 빈 박스 */}
        <div className={styles.leftSpacer} />

        {/* 오른쪽 텍스트 */}
        <div className={styles.content}>
          <p className={styles.desc}>
            I design UI/UX experiences optimized for user flow by<br />
            deeply understanding customer needs. My approach<br />
            blends intuitive interaction design with strategic thinking,<br />
            ensuring every touchpoint feels seamless and intentional.
          </p>

          <button
            className={styles.button}
            onClick={() => navigate("/aboutdetail")}
          >
            READ MORE
            <i className="bi bi-arrow-right-short"></i>
          </button>

        </div>

      </div>
    </section>
  );
}
