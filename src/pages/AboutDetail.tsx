// src/pages/AboutDetail.tsx
import styles from "../styles/AboutDetail.module.css";

export default function AboutDetail() {
  return (
    <section
      className={styles.aboutDetail}
      style={{
        backgroundImage: "url('/assets/about-bg0.jpg')",
      }}
    >
      <div className={styles.inner}>

        {/* 왼쪽 영역 */}
        <div className={styles.left}>
          <h1 className={styles.title}>
            관찰을 디자인으로 구현하는<br />
            <strong>정연진</strong>입니다.
          </h1>

        <div className={styles.titleBg} />

          <p className={styles.description}>
            고객의 니즈를 깊이 이해하고,<br />
            사용자 흐름에 최적화된 UI/UX 경험을 설계합니다.<br /><br />
            서비스 운영과 현업 경험을 바탕으로,<br />
            사용자가 ‘멈추는 지점’을 관찰하고<br />
            디자인으로 흐름을 다시 잇는 일을 합니다.
          </p>
        </div>

        {/* 오른쪽 영역 */}
        <div className={styles.right}>

          {/* Profile */}
        <div className={styles.block}>
        <h3>Profile</h3>
        <ul className={styles.profileList}>
            <li>
            <span className={styles.profileLabel}>Birth</span>
            <span className={styles.profileValue}>1994. 04. 24</span>
            </li>
            <li>
            <span className={styles.profileLabel}>Phone</span>
            <span className={styles.profileValue}>010-2887-3647</span>
            </li>
            <li>
            <span className={styles.profileLabel}>Mail</span>
            <span className={styles.profileValue}>nini94@naver.com</span>
            </li>
        </ul>
        </div>


          {/* Education */}
          <div className={`${styles.block} ${styles.hasLine}`}>
            <h3>Education</h3>
            <ul>
              <li className={styles.item}>
                <p className={styles.itemTitle}>
                  MBC아카데미 컴퓨터 교육센터<br />
                  [UI/UX엔지니어링] 챗 GPT 생성형 AI를 활용한<br />
                  반응형 웹콘텐츠(영상제작&코딩) 개발 과정 이수<br />
                </p>
                <span className={styles.itemDate}>
                  2025. 08
                </span>
              </li>
              <li className={styles.item}>
                <p className={styles.itemTitle}>
                  배재대학교 호텔컨벤션경영학과 졸업
                </p>
                <span className={styles.itemDate}>
                  2019. 02
                </span>
              </li>
              <li className={styles.item}>
                <p className={styles.itemTitle}>
                  혜원여자고등학교 졸업
                </p>
                <span className={styles.itemDate}>
                  2013. 02
                </span>
              </li>
            </ul>
          </div>

          {/* Career */}
          <div className={`${styles.block} ${styles.hasLine} ${styles.career}`}>
            <h3>Career</h3>
            <ul>
              <li className={styles.item}>
                <p className={styles.itemTitle}>
                  에이블현대호텔앤리조트 주식회사
                </p>
                <span className={styles.itemDate}>
                  2022. 06 - 2025. 02
                </span>
              </li>
              <li className={styles.item}>
                <p className={styles.itemTitle}>
                  신라에이치엠 주식회사
                </p>
                <span className={styles.itemDate}>
                  2021. 04 - 2022. 06
                </span>
              </li>
              <li className={styles.item}>
                <p className={styles.itemTitle}>
                  서울미라마 유한회사
                </p>
                <span className={styles.itemDate}>
                  2019. 10 - 2020. 10
                </span>
              </li>
            </ul>
          </div>

          {/* Certificate */}
          <div className={`${styles.block} ${styles.hasLine}`}>
            <h3>Certificate</h3>
            <ul>
              <li className={styles.item}>
                <p className={styles.itemTitle}>
                  GTQ 그래픽기술자격 1급 (포토샵)
                </p>
                <span className={styles.itemDate}>
                  2025. 05
                </span>
              </li>
              <li className={styles.item}>
                <p className={styles.itemTitle}>
                  2종보통운전면허
                </p>
                <span className={styles.itemDate}>
                  2020. 12
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

