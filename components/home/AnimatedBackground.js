export default function AnimatedBackground({ mousePos }) {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />
      <div 
        className="absolute w-[800px] h-[800px] opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)',
          left: `${mousePos.x - 400}px`,
          top: `${mousePos.y - 400}px`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />
    </div>
  );
}