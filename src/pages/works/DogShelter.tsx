import styles from "../../styles/DogShelter.module.css";

export default function Dogshelter() {
  return (
    <section className={styles.wrapper}>
      {/* ===== Background base===== */}
      <div
        className={styles.bgBase}
        style={{
          backgroundImage: "url(/assets/dogshelter-bg.png)",
        }}
      />

        {/* ===== Background overlay (leaf shadow) ===== */}
      <div
        className={styles.bgOverlay}
        style={{
          backgroundImage: "url(/assets/leaf-shadow.png)",
        }}
      />

      {/* ===== Content ===== */}
      <div className={styles.container}>
        {/* ===== Left Text Area ===== */}
        <div className={styles.textArea}>
          {/* ===== Top Row (타이틀 + Overview 같은 선상) ===== */}
          <div className={styles.topRow}>
            {/* Left : Title */}
            <div className={styles.titleGroup}>
              <p className={styles.kicker}>종합 유기견 보호센터 웹사이트 리뉴얼</p>
              <h1 className={styles.title}>DOG SHELTER</h1>
            </div>

            {/* Right : Overview */}
            <div className={styles.overview}>
              <h3>Overview</h3>
              <p>
                사용자 친화성이 부족했던 유기견 보호센터 웹사이트를 React 기반 SPA로 리디자인했습니다.
              </p>
              <p>
                UI와 정보 구조를 개선하고, Bootstrap과 Sass를 활용해 직관적인 사용자 경험을 구현했습니다.
              </p>
            </div>
          </div>

          {/* ⭐ CTA + Meta 묶음 (위치 조절용 핵심 블록) */}
          <div className={styles.infoBlock}>
           <a
            href="https://yyj-beep.github.io/animalshelter-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
            >
            View Prototype <span>→</span>
          </a>


           <ul className={styles.meta}>
            <li>
                <span className={styles.label}>Date</span>
                <div className={styles.value}>
                <span>2025. 07</span>
                </div>
            </li>

            <li>
                <span className={styles.label}>Work</span>
                <div className={styles.value}>
                <span>60% / 3인 프로젝트</span>
                <span>기획 및 디자인 80%, 코딩 40%</span>
                </div>
            </li>

            <li className={styles.toolRow}>
            <span>Tool</span>
                
            <div className={styles.toolIcons}>
                <img src="/assets/tools/ps.png" alt="Photoshop" />
                <img src="/assets/tools/figma.png" alt="Figma" />
                <img src="/assets/tools/react.png" alt="After Effects" />
                <img src="/assets/tools/git.png" alt="Git" />
            </div>
            </li>
            </ul>

          </div>
        </div>

        {/* ===== Right Device Image ===== */}
        <div className={styles.deviceArea}>
          <img
            src="/assets/dogshelter-device.png"
            alt="Dogshelter devices"
            className={styles.device}
          />
        </div>
      </div>
    </section>
  );
}
