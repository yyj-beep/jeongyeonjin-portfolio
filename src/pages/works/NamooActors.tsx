import styles from "../../styles/Namooactors.module.css";

export default function Namooactors() {
  return (
    <section className={styles.wrapper}>
      {/* ===== Background ===== */}
      <div
        className={styles.bg}
        style={{
          backgroundImage: "url(/assets/namooactors-bg.png)",
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
              <p className={styles.kicker}>나무엑터스 웹사이트 리뉴얼</p>
              <h1 className={styles.title}>NAMOOACTORS</h1>
            </div>

            {/* Right : Overview */}
            <div className={styles.overview}>
              <h3>Overview</h3>
              <p>
                브랜드의 정체성을 현대적으로 재해석하고, 깔끔하고 감각적인
                톤으로 UI를 리디자인했습니다.
              </p>
              <p>
                Vue 3와 Vuetify 기반의 SPA로 직관적이고 안정적인 사용자 경험을
                구현했습니다.
              </p>
            </div>
          </div>

          {/* ⭐ CTA + Meta 묶음 (위치 조절용 핵심 블록) */}
          <div className={styles.infoBlock}>
           <a
            href="https://yyj-beep.github.io/namooactors-portfolio/"
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
                <span>2025. 06</span>
                </div>
            </li>

            <li>
                <span className={styles.label}>Work</span>
                <div className={styles.value}>
                <span>70% / 3인 프로젝트</span>
                <span>기획 및 디자인 80%, 영상 편집 100%, 코딩 40%</span>
                </div>
            </li>

            <li className={styles.toolRow}>
            <span>Tool</span>
                
            <div className={styles.toolIcons}>
                <img src="/assets/tools/ps.png" alt="Photoshop" />
                <img src="/assets/tools/figma.png" alt="Figma" />
                <img src="/assets/tools/ae.png" alt="After Effects" />
                <img src="/assets/tools/vue.png" alt="Vue" />
                <img src="/assets/tools/git.png" alt="Git" />
            </div>
            </li>
            </ul>

          </div>
        </div>

        {/* ===== Right Device Image ===== */}
        <div className={styles.deviceArea}>
          <img
            src="/assets/namooactors-device.png"
            alt="Namooactors devices"
            className={styles.device}
          />
        </div>
      </div>
    </section>
  );
}
