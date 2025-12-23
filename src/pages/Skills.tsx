// src/pages/Skills.tsx
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Skills.module.css";

type Skill = {
  id: string;
  img: string;
  hoverImg?: string;
  alt: string;
  description?: string;  // Role 설명
  level?: number;        // 바(%)
  tags?: string[];       // 태그들
};



const skills: Skill[] = [
  {
    id: "ps",
    img: "/assets/paper-clip1.png",
    hoverImg: "/assets/paper-clip1-hover.png",
    alt: "Photoshop",
    description: "그래픽 디자인 및 시각적 콘텐츠 제작",
    level: 60,
    tags: ["#Photoshop", "#WebDesign", "#GraphicDesign"],
  },
  {
    id: "ai",
    img: "/assets/paper-clip2.png",
    hoverImg: "/assets/paper-clip2-hover.png",
    alt: "Illustrator",
    description: "기본 툴 활용 및 벡터 에셋 관리",
    level: 60,
    tags: ["#Illustrator", "#GraphicDesign", "#Cardnews"],
  },
  {
    id: "ae",
    img: "/assets/paper-clip3.png",
    hoverImg: "/assets/paper-clip3-hover.png",
    alt: "After Effects",
    description: "모션 그래픽 제작 & 영상 효과 디자인",
    level: 60,
    tags: ["#AfterEffects", "#VideoEditing", "#MotionGraphics"],
  },
  {
    id: "figma",
    img: "/assets/paper-clip4.png",
    hoverImg: "/assets/paper-clip4-hover.png",
    alt: "Figma",
    description: "UI/UX 디자인 및 프로토타입 제작",
    level: 60,
    tags: ["#Figma", "#AutoLayout", "#DesignCollaboration"],
  },
  {
    id: "react",
    img: "/assets/paper-clip5.png",
    hoverImg: "/assets/paper-clip5-hover.png",
    alt: "React",
    description: "React 기반 컴포넌트 구조 설계 및 UI 구현",
    level: 40,
    tags: ["#React", "#Component", "#Portfolio"],
  },
  {
    id: "vue",
    img: "/assets/paper-clip6.png",
    hoverImg: "/assets/paper-clip6-hover.png",
    alt: "Vue",
    description: "컴포넌트 기반 인터랙션 구현 경험",
    level: 40,
    tags: ["#Vue", "#Vuetify"],
  },
  {
    id: "html",
    img: "/assets/paper-clip7.png",
    hoverImg: "/assets/paper-clip7-hover.png",
    alt: "HTML",
    description: "웹 퍼블리싱 및 반응형 레이아웃 실습",
    level: 40,
    tags: ["#HTML", "#SemanticHTML", "#ResponsiveWeb"],
  },
  {
    id: "css",
    img: "/assets/paper-clip8.png",
    hoverImg: "/assets/paper-clip8-hover.png",
    alt: "CSS",
    description: "CSS 기초와 반응형 레이아웃 실습",
    level: 40,
    tags: ["#CSS", "#WebStyling"],
  },
  {
    id: "js",
    img: "/assets/paper-clip9.png",
    hoverImg: "/assets/paper-clip9-hover.png",
    alt: "JavaScript",
    description: "Java 기초 개념 학습",
    level: 10,
    tags: ["#JavaScript"],
  },
];


export default function Skills() {
  // ⭐ 1) 이 ref가 skills 섹션 DOM을 가리킴
  const sectionRef = useRef<HTMLElement | null>(null);

  // ⭐ 2) 이게 true가 되면 "애니메이션 시작해!" 라는 뜻
  const [isVisible, setIsVisible] = useState(false);

  // ⭐ 3) 스크롤해서 섹션이 화면에 들어오면 isVisible을 true로 바꾸기
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      // 🔴 기존: 들어올 때만 true, 그리고 관찰 중단
      // if (entry.isIntersecting) {
      //   setIsVisible(true);
      //   observer.unobserve(entry.target);
      // }

      // ✅ 새 버전: 화면에 들어오면 true, 나가면 false
      setIsVisible(entry.isIntersecting);
    },
    { threshold: 0.2 }
  );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  
  return (
 <section
  id="skills"
  ref={sectionRef}
  className={`${styles.skills} ${isVisible ? styles.skillsVisible : ""}`}
>

      {/* 배경 텍스처 */}
      <img src="/assets/bg-texture.jpg" alt="" className={styles.bg} />

      <div className={styles.inner}>
        <h2 className={styles.title}>Software Skills</h2>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.id} className={styles.card}>
              {/* 기본 이미지 */}
              <img
                src={skill.img}
                alt={skill.alt}
                className={styles.cardImage}
              />

              {/* hover 이미지가 있는 카드만 렌더 */}
              {skill.hoverImg && (
                <img
                  src={skill.hoverImg}
                  alt=""
                  className={`${styles.cardImage} ${styles.hoverImage}`}
                />
              )}

              {/* 설명이 있는 카드에만 텍스트 오버레이 렌더 (지금은 ps 카드만) */}
              {skill.description && (
                <div className={styles.textOverlay}>
                  {/* Role + 설명 */}
                  <p className={styles.role}>
                    <span className={styles.roleLabel}>Role</span>
                    <span className={styles.roleText}>
                      {skill.description}
                    </span>
                  </p>

                  {/* Skill level + 바 */}
                  <div className={styles.skillLevel}>
                    <span className={styles.skillLabel}>level</span>

                    <div className={styles.bar}>
                      <span
                        className={styles.fill}
                        style={{ 
                                // ✅ CSS 변수로 level 넘기기 (0~1 사이 값)
                                ["--level" as string]: (skill.level ?? 50) / 100,
                              }}
                      />
                    </div>
                  </div>

                  {/* 태그들 */}
                  {skill.tags && (
                    <div className={styles.tags}>
                      {skill.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
