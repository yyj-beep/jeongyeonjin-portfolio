import styles from "../../styles/Toreta.module.css";

export default function Toreta() {
  return (
    <section className={styles.wrapper}>
      {/* ===== Background base===== */}
      <div
        className={styles.bgBase}
        style={{
          backgroundImage: "url(/assets/toreta-bg.png)",
        }}
      />

        {/* ===== Background overlay (leaf shadow) ===== */}
      <div
        className={styles.bgOverlay}
        style={{
          backgroundImage: "url(/assets/window-shadow.png)",
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
              <p className={styles.kicker}>브랜드 광고 영상 프로젝트</p>
              <h1 className={styles.title}>TORETA</h1>
            </div>

            {/* Right : Overview */}
            <div className={styles.overview}>
              <h3>Overview</h3>
              <p>
                브랜드 광고 영상 제작 프로젝트로, 브랜드 아이덴티티를 효과적으로 전달할 수 있도록 기획했습니다.
              </p>
              <p>
                Adobe After Effects로 영상 편집과 최종 합성을 주도하며 완성도 높은 결과물을 구현했습니다.              </p>
            </div>
          </div>

          {/* ⭐ CTA + Meta 묶음 (위치 조절용 핵심 블록) */}
          <div className={styles.infoBlock}>
            <a
              href="/toreta-video"
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
                <span>2025. 04</span>
                </div>
            </li>

            <li>
                <span className={styles.label}>Work</span>
                <div className={styles.value}>
                <span>60% / 4인 프로젝트</span>
                <span>프로젝트 기획 및 디자인 60%, 영상 편집 50%</span>
                </div>
            </li>

            <li className={styles.toolRow}>
            <span>Tool</span>
                
            <div className={styles.toolIcons}>
                <img src="/assets/tools/ai.png" alt="Ai" />
                <img src="/assets/tools/ae.png" alt="After Effects" />
            </div>
            </li>
            </ul>

          </div>
        </div>

        {/* ===== Right Device Image ===== */}
        <div className={styles.deviceArea}>
          <img
            src="/assets/toreta-device.png"
            alt="Dogshelter devices"
            className={styles.device}
          />
        </div>
      </div>
    </section>
  );
}
