import styles from "../../styles/WeatherWear.module.css";

export default function Weatherwear() {
  return (
    <section className={styles.wrapper}>
      {/* ===== Background base===== */}
      <div
        className={styles.bgBase}
        style={{
          backgroundImage: "url(/assets/weatherwear-bg.png)",
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
              <p className={styles.kicker}>오늘 날씨, 오늘의 스타일</p>
              <h1 className={styles.title}>WEATHER WEAR</h1>
            </div>

            {/* Right : Overview */}
            <div className={styles.overview}>
              <h3>Overview</h3>
              <p>
                날씨와 위치 정보를 기반으로 옷차림을 추천하는 스타일 제안 플랫폼입니다.
              </p>
              <p>
                포토샵으로 UI를 설계하고, 화면 흐름을 구성해 전체 컨셉을 완성했습니다.
              </p>
            </div>
          </div>

          {/* ⭐ CTA + Meta 묶음 (위치 조절용 핵심 블록) */}
          <div className={styles.infoBlock}>
           <a
            href="https://yyj-beep.github.io/weatherwear-portfolio/"
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
                <span>2025. 03</span>
                </div>
            </li>

            <li>
                <span className={styles.label}>Work</span>
                <div className={styles.value}>
                <span>60% / 4인 프로젝트</span>
                <span>서비스 기획 및 콘텐츠 구조화 80%, UI 디자인 및 화면 흐름 설계 60%</span>
                </div>
            </li>

            <li className={styles.toolRow}>
            <span>Tool</span>
                
            <div className={styles.toolIcons}>
                <img src="/assets/tools/ps.png" alt="Photoshop" />
                <img src="/assets/tools/git.png" alt="Git" />
            </div>
            </li>
            </ul>

          </div>
        </div>

        {/* ===== Right Device Image ===== */}
        <div className={styles.deviceArea}>
        <div className={styles.deviceGroup}>

            {/* ⭐ 디바이스 앞 레이어 이미지 1 */}
          <img
            src="/assets/weatherwear-layer-1.png"
            alt="Weatherwear floating layer 1"
            className={styles.layerOne}
          />

          {/* ⭐ 디바이스 앞 레이어 이미지 2 */}
          <img
            src="/assets/weatherwear-layer-2.png"
            alt="Weatherwear floating layer 2"
            className={styles.layerTwo}
          />

          <img
            src="/assets/weatherwear-device.png"
            alt="Weatherwear devices"
            className={styles.device}
          />
          </div>
        </div>
      </div>
    </section>
  );
}

