import styles from "../../styles/ZeroWaste.module.css";

export default function Dogshelter() {
  return (
    <section className={styles.wrapper}>
      {/* ===== Background base===== */}
      <div
        className={styles.bgBase}
        style={{
          backgroundImage: "url(/assets/zerowaste-bg.png)",
        }}
      />

        {/* ===== Background overlay (window shadow) ===== */}
      <div
        className={styles.bgOverlay}
        style={{
          backgroundImage: "url(/assets/window-shadow100.png)",
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
              <p className={styles.kicker}>제로, 그 이상의 가치</p>
              <h1 className={styles.title}>ZERO WASTE</h1>
            </div>

            {/* Right : Overview */}
            <div className={styles.overview}>
              <h3>Overview</h3>
              <p>
                제로 웨이스트를 주제로 한 카드뉴스 콘텐츠입니다.   
              </p>
              <p>
                지속 가능한 소비와 친환경 라이프스타일의 메시지를 일러스트로 시각화하고, 콘텐츠 흐름에 맞춰 기획 및 제작했습니다.
              </p>
            </div>
          </div>

          {/* ⭐ CTA + Meta 묶음 (위치 조절용 핵심 블록) */}
          <div className={styles.infoBlock}>
           <a
            href="https://yyj-beep.github.io/zerowaste-portfolio/"
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
                <span>2025. 02</span>
                </div>
            </li>

            <li>
                <span className={styles.label}>Work</span>
                <div className={styles.value}>
                <span>70% / 4인 프로젝트</span>
                <span>서비스 기획 및 콘텐츠 구조화 70%, 비주얼 디자인 70%</span>
                </div>
            </li>

            <li className={styles.toolRow}>
            <span>Tool</span>
                
            <div className={styles.toolIcons}>
                <img src="/assets/tools/ai-white.png" alt="illustrator" />
                <img src="/assets/tools/git-white.png" alt="Git" />
            </div>
            </li>
            </ul>

          </div>
        </div>

        {/* ===== Right Device Image ===== */}
        <div className={styles.deviceArea}>
          <img
            src="/assets/zerowaste-device.png"
            alt="Dogshelter devices"
            className={styles.device}
          />
        </div>
      </div>
    </section>
  );
}

