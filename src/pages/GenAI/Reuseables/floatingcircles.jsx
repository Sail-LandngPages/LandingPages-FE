import gradient from "../../../assets/GenAI-assets/gradient.svg"; 

const FloatingCircles = () => {
  return (
    <div>
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${
              3 + Math.random() * 4
            }s ease-in-out infinite, pulse ${
              2 + Math.random() * 2
            }s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        >
          <img src={gradient} alt="circle" className="w-2 h-2" />
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(20px, -20px);
          }
          50% {
            transform: translate(-15px, -40px);
          }
          75% {
            transform: translate(-20px, -10px);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingCircles;
