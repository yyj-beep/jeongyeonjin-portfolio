import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      {/* 배경 이미지 */}
      <img
        className={styles.bg}
        src="/assets/bg-texture.jpg"
        alt=""
        aria-hidden="true"
      />

      {/* 빨간 폴더 이미지 */}
      <img
        className={styles.folder}
        src="/assets/contact-folder.png"
        alt=""
        aria-hidden="true"
      />

      {/* ===== 마퀴 영역 ===== */}
      <div className={styles.marqueeArea}>
        {/* 첫 번째 줄 */}
        <Marquee speed={350}>
          <span className={styles.word}>ADAPTABILITY</span>
          <span className={styles.stroke}>COLLABORATION</span>
          <span className={styles.word}>ATTENTION TO DETAIL</span>
          <span className={styles.stroke}>COMMUNICATION SKILLS</span>
          <span className={styles.word}>RESPONSIBILITY</span>
        </Marquee>
        {/* 두번째 줄 */}
        <Marquee speed={350} faded>
          <span className={styles.stroke}>ADAPTABILITY</span>
          <span className={styles.word}>COLLABORATION</span>
          <span className={styles.stroke}>ATTENTION TO DETAIL</span>
          <span className={styles.word}>COMMUNICATION SKILLS</span>
          <span className={styles.stroke}>RESPONSIBILITY</span>
        </Marquee>

      </div>

      {/* ===== 하단 콘텐츠 ===== */}
      <div className={styles.content}>
        <p className={styles.msg}>
          Thank you for
          <br />
          reviewing my portfolio
          <br />
          I'm eager to hear from you!
        </p>

        <div className={styles.pills}>
          <a className={styles.pill} href="mailto:nini94@naver.com">
            nini94@naver.com
          </a>
          <a className={styles.pill} href="tel:01028873647">
            010-2887-3647
          </a>
        </div>

  {/* ===== 오른쪽 정보 블록 ===== */}
  <div className={styles.info}>
    <div className={styles.nameBlock}>
      <p className={styles.name}>yeonjin Jeong</p>
      <span className={styles.nameLine} />
    </div>

<div className={styles.locationBlock}>
  <span className={styles.pin} />

  <div className={styles.locationContent}>
    <p className={styles.locationText}>Seoul Myeonmon – dong</p>
    <span className={styles.locationLine} />
  </div>
</div>

  </div>

      </div>
    </section>
  );
}

/* =========================
   Marquee 컴포넌트
========================= */
function Marquee({
  children,
  speed = 30,
  faded = false,
}: {
  children: React.ReactNode;
  speed?: number;
  faded?: boolean;
}) {
  return (
    <div
      className={`${styles.marquee} ${faded ? styles.marqueeBack : styles.marqueeFront}`}
    >
      <div
        className={styles.track}
        style={{ ["--duration" as any]: `${speed}s` }}
      >
        {/* 1세트 */}
        {children}
        {children}

        {/* 2세트 (끊김 방지용) */}
        {children}
        {children}
      </div>
    </div>
  );
}
