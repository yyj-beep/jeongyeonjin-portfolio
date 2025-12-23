export default function ToretaVideo() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#000", // 로딩 대비
      }}
    >
      <video
        src="/assets/toreta-video.mp4"
        autoPlay
        muted
        controls
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // ⭐ 핵심
        }}
      />
    </div>
  );
}
