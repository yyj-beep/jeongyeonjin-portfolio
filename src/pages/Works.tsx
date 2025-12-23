import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Works.module.css";

/* ================= utils ================= */

function clamp01(v: number) {
  return Math.min(Math.max(v, 0), 1);
}

function getActiveIndex(progress: number): number {
  const STEP = 0.21;
  const idx = Math.floor(progress / STEP);
  return Math.min(Math.max(idx, 0), 4) + 1;
}

function makeScramble(target: string, revealRatio: number) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:,.?/<> ";
  const len = target.length;
  const revealCount = Math.floor(len * revealRatio);

  let out = "";
  for (let i = 0; i < len; i++) {
    if (i < revealCount) out += target[i];
    else out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

/* ================= component ================= */

export default function Works() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement | null>(null);

  const [rawProgress, setRawProgress] = useState(0);
  const [smoothProgress, setSmoothProgress] = useState(0);

  /* 🔒 Home 스크롤 개입 차단 */
  useEffect(() => {
    (window as any).__IN_WORKS__ = true;
    return () => {
      (window as any).__IN_WORKS__ = false;
    };
  }, []);

  /* 🔥 뒤로가기 progress 복원 */
  useEffect(() => {
    const saved = sessionStorage.getItem("worksProgress");
    if (saved) {
      const p = parseFloat(saved);
      if (!isNaN(p)) setRawProgress(p);
    }
  }, []);

  /* ===== scroll progress ===== */
  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const visible = 1 - rect.top / window.innerHeight;
      const target = clamp01(visible - 1.4);

      setRawProgress((prev) => {
        const diff = target - prev;
        const MAX_STEP = prev < 0.8 ? 0.02 : 0.012;
        const limited =
          diff > 0
            ? Math.min(diff, MAX_STEP)
            : Math.max(diff, -MAX_STEP);

        return clamp01(prev + limited);
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ===== smooth lerp ===== */
  useEffect(() => {
    let raf = 0;
    const loop = () => {
      setSmoothProgress((prev) => prev + (rawProgress - prev) * 0.12);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [rawProgress]);

  /* ===== horizontal movement ===== */
  const maxShift = -3150;
  const x1 = smoothProgress * maxShift;
  const x2 = 430 + smoothProgress * maxShift;
  const x3 = 1260 + smoothProgress * maxShift;
  const x4 = 2150 + smoothProgress * maxShift;
  const x5 = 2730 + smoothProgress * maxShift;

  const activeText = getActiveIndex(smoothProgress);
  sessionStorage.setItem("worksActive", activeText.toString());
  sessionStorage.setItem("worksStable", smoothProgress.toString());

  const activeDevice = getActiveIndex(clamp01(smoothProgress + 0.02));

  /* ===== devices ===== */
  const devices = useMemo(
    () => [
      { id: 1, src: "/assets/work-namoo.png", alt: "NAMOOACTORS" },
      { id: 2, src: "/assets/work-dog.png", alt: "DOG SHELTER" },
      { id: 3, src: "/assets/work-weather.png", alt: "WEATHER WEAR" },
      { id: 4, src: "/assets/work-toreta.png", alt: "TORETA" },
      { id: 5, src: "/assets/work-zero.png", alt: "ZERO WASTE" },
    ],
    []
  );

  const deviceScale: Record<number, number> = {
    1: 3.1,
    2: 3.1,
    3: 2.25,
    4: 2.9,
    5: 2.55,
  };

  /* ===== caption ===== */
  const captions: Record<number, string> = {
    1: "01ㅡNAMOOACTORS Web Designed & Developed",
    2: "02ㅡDOG SHELTER Web Designed & Developed",
    3: "03ㅡWEATHER WEAR Mobile App UI/UX Design",
    4: "04ㅡTORETA Brand Promotion Video Produced",
    5: "05ㅡZERO WASTE Card News Designed",
  };

  const targetCaption = captions[activeText];
  const [captionDisplay, setCaptionDisplay] = useState(targetCaption);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();

    const animate = (t: number) => {
      const p = clamp01((t - start) / 380);
      if (p < 1) {
        setCaptionDisplay(makeScramble(targetCaption, p));
        raf = requestAnimationFrame(animate);
      } else {
        setCaptionDisplay(targetCaption);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [targetCaption]);

  /* ================= JSX ================= */

  return (
    <section className={styles.works} ref={sectionRef}>
      <div className={styles.scrollArea}>
        <div className={styles.sticky}>
          <img src="/assets/about-bg0.jpg" alt="" className={styles.bg} />

          <div className={styles.inner}>
            <h2 className={styles.sectionTitle}>Works</h2>

            <div className={styles.workItem}>
              {/* ===== devices ===== */}
              <div className={styles.deviceWrap}>
                {devices.map((d) => {
                  let state: "center" | "up" | "hidden" = "hidden";
                  if (d.id === activeDevice) state = "center";
                  else if (d.id === activeDevice - 1) state = "up";

                  let scale = deviceScale[d.id];
                  let translateY = 0;

                  if (state === "up") {
                    translateY = -430;
                    scale *= 0.65;
                  }

                  return (
                    <div
                      key={d.id}
                      className={styles.deviceLayer}
                      style={{
                        transform: `translate(-50%, -50%) translateY(${translateY}px) scale(${scale})`,
                        opacity: state === "hidden" ? 0 : 1,
                        zIndex: state === "center" ? 2 : 1,
                      }}
                    >
                      <img src={d.src} alt={d.alt} className={styles.device} />
                    </div>
                  );
                })}
              </div>

              {/* ===== 01 ===== */}
              <div
                className={styles.movingGroup}
                style={{
                  transform: `translate(-50%, -50%) translateX(${x1}px)`,
                }}
              >
                <span
                  className={styles.index}
                  style={{ color: activeText === 1 ? "#E63A2E" : "#111827" }}
                >
                  (01)
                </span>
                <div
                  className={styles.title}
                  style={{
                    color: activeText === 1 ? "#E63A2E" : "transparent",
                    WebkitTextStroke:
                      activeText === 1 ? "0px" : "1px #000",
                  }}
                >
                  NAMOOACTORS
                </div>
              </div>

              {/* ===== 02~05 ===== */}
              {[2, 3, 4, 5].map((num, i) => {
                const xs = [x2, x3, x4, x5][i];
                const titles = [
                  "DOG SHELTER",
                  "WEATHER WEAR",
                  "TORETA",
                  "ZERO WASTE",
                ];

                return (
                  <div
                    key={num}
                    className={styles.nextGroup}
                    style={{
                      transform: `translate(-50%, -50%) translateX(${xs}px)`,
                    }}
                  >
                    <span
                      className={styles.indexNext}
                      style={{
                        color: activeText === num ? "#E63A2E" : "#000",
                      }}
                    >
                      (0{num})
                    </span>

                    <div
                      className={styles.titleNext}
                      style={{
                        color: activeText === num ? "#E63A2E" : "transparent",
                        WebkitTextStroke:
                          activeText === num ? "0px" : "1px #000",
                      }}
                    >
                      {titles[i]}
                    </div>
                  </div>
                );
              })}

              {/* ===== CLICK OVERLAY ===== */}
              {[
                { id: 1, x: x1, path: "/works/namooactors" },
                { id: 2, x: x2, path: "/works/dog-shelter" },
                { id: 3, x: x3, path: "/works/weather-wear" },
                { id: 4, x: x4, path: "/works/toreta" },
                { id: 5, x: x5, path: "/works/zero-waste" },
              ].map(
                ({ id, x, path }) =>
                  activeText === id && (
                    <button
                      key={id}
                      onClick={() => {
                        sessionStorage.setItem(
                          "worksProgress",
                          rawProgress.toString()
                        );
                        navigate(path);
                      }}
                      style={{
                        position: "absolute",
                        top: "40.5%",
                        left: "52.8%",
                        transform: `translate(-10%, -50%) translateX(${x}px)`,
                        width: "700px",
                        height: "140px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        zIndex: 20,
                      }}
                    />
                  )
              )}

              {/* ===== caption ===== */}
              <p className={styles.caption}>{captionDisplay}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
