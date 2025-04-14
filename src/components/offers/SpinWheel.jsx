import { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { toast } from "sonner";
import "./SpinWheel.css";

const prizes = [
  { text: "10% OFF", code: "WHEEL10", color: "#FFCF24" },
  { text: "Try Again", code: null, color: "#FF8D24" },
  { text: "15% OFF", code: "WHEEL15", color: "#24BEFF" },
  { text: "Free Cone", code: "FREECONE", color: "#24FF89" },
  { text: "5% OFF", code: "WHEEL05", color: "#FF4F24" },
  { text: "20% OFF", code: "WHEEL20", color: "#CB24FF" },
  { text: "Free Topping", code: "FREETOP", color: "#24FF89" },
  { text: "Try Again", code: null, color: "#FF8D24" },
];

const SpinWheel = ({ onWin }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [winner, setWinner] = useState(null);
  const [canSpin, setCanSpin] = useState(true);
  const wheelRef = useRef(null);

  const spinWheel = () => {
    if (isSpinning || !canSpin) return;
    
    setIsSpinning(true);
    setWinner(null);
    
    // Reset any previous transition
    if (wheelRef.current) {
      wheelRef.current.style.transition = 'none';
      wheelRef.current.style.transform = `rotate(${rotation}deg)`;
    }
    
    // Force reflow
    void wheelRef.current.offsetWidth;
    
    // Calculate the new rotation (between 5 and 10 full rotations + the specific prize angle)
    const prizeIndex = Math.floor(Math.random() * prizes.length);
    const prizeRotation = 360 - (prizeIndex * (360 / prizes.length)) + (360 / prizes.length / 2);
    const newRotation = rotation + 1800 + prizeRotation; // 5 full rotations (1800 degrees) + prize position
    
    // Apply the new rotation with transition
    if (wheelRef.current) {
      wheelRef.current.style.transition = 'transform 5s cubic-bezier(0.1, 0.05, 0.15, 1)';
      wheelRef.current.style.transform = `rotate(${newRotation}deg)`;
    }
    
    setRotation(newRotation);
    
    // Determine the winner after spinning
    setTimeout(() => {
      setIsSpinning(false);
      const prize = prizes[prizeIndex];
      setWinner(prize);
      
      if (prize.code) {
        toast.success(`Congratulations! You won ${prize.text}!`);
        if (onWin) onWin(prize);
      } else {
        toast.error("Better luck next time! Try again tomorrow.");
      }
      
      // Prevent spinning again for 24 hours
      setCanSpin(false);
      localStorage.setItem('lastSpinTime', Date.now().toString());
    }, 5000);
  };
  
  // Check if user can spin (once per day)
  useEffect(() => {
    const lastSpinTime = localStorage.getItem('lastSpinTime');
    if (lastSpinTime) {
      const timeElapsed = Date.now() - parseInt(lastSpinTime);
      const oneDayInMs = 24 * 60 * 60 * 1000;
      
      // For testing purposes, set to a shorter time
      const testTimeInMs = 10 * 1000; // 10 seconds
      
      // Use this for production
      // if (timeElapsed < oneDayInMs) {
      
      // Use this for testing
      if (timeElapsed < testTimeInMs) {
        setCanSpin(false);
        
        // Calculate time remaining
        const timeRemaining = testTimeInMs - timeElapsed;
        const minutes = Math.floor(timeRemaining / 60000);
        const seconds = Math.floor((timeRemaining % 60000) / 1000);
        
        toast.info(`You can spin again in ${minutes}m ${seconds}s`);
        
        // Enable spinning after the time has passed
        const timer = setTimeout(() => {
          setCanSpin(true);
          toast.info("You can now spin the wheel again!");
        }, timeRemaining);
        
        return () => clearTimeout(timer);
      } else {
        setCanSpin(true);
      }
    }
  }, []);

  return (
    <div className="spin-wheel-container">
      <div className="wheel-container">
        <div className="wheel-pointer"></div>
        <div 
          ref={wheelRef} 
          className="wheel" 
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {prizes.map((prize, index) => (
            <div 
              key={index}
              className="wheel-section"
              style={{
                transform: `rotate(${index * (360 / prizes.length)}deg)`,
                backgroundColor: prize.color,
              }}
            >
              <span 
                className="section-text"
                style={{ transform: `rotate(${180 + (360 / prizes.length) / 2}deg)` }}
              >
                {prize.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-4">
        <Button
          variant="primary"
          className="btn-lg py-3 px-4"
          disabled={isSpinning || !canSpin}
          onClick={spinWheel}
          style={{ fontSize: '1.1rem' }}
        >
          {isSpinning ? "Spinning..." : canSpin ? "Spin & Win" : "Try Again Tomorrow"}
        </Button>
        
        {winner && winner.code && (
          <div className="mt-3 text-center">
            <p className="fw-bold fs-5">You won: {winner.text}</p>
            <p className="small">Use code: <span className="font-monospace fw-bold">{winner.code}</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpinWheel; 