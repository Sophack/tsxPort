import React from 'react';
import { HiArrowDown } from 'react-icons/hi';

interface ScrollButtonProps {
  showAbout: boolean;
  toggleAbout: (value: boolean) => void;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ showAbout, toggleAbout }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
    toggleAbout(!showAbout);
  };

  return (
    <div>
      {showAbout && (
        <button onClick={scrollToAbout} className="scroll-button">
          <HiArrowDown size={35} className="animate-bounce" />
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
