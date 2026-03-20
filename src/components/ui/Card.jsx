export default function Card({ children, className = "", glowColor }) {
  return (
    <div
      className={`relative overflow-hidden bg-bg-surface border border-bg-elevated hover:border-accent transition-colors duration-300 p-4 rounded-lg ${className}`}
      style={{
        background: "linear-gradient(45deg, #13171f 0%, #0f1218 100%)",
      }}
    >
      {glowColor && (
        <div
          className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full"
          style={{
            background: glowColor,
            filter: "blur(60px)",
            opacity: 0.08,
          }}
        />
      )}
      {children}
    </div>
  );
}