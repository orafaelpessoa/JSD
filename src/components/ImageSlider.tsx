import React, { useState } from 'react';
import IA01 from '../assets/IA01.jpeg'
import IA02 from '../assets/IA02.jpeg'
import IA03 from '../assets/IA03.jpeg'
import IA04 from '../assets/IA04.jpeg'
import JSDLOGO01 from '../assets/JSDLOGO01.jpeg'
import JSDLOGO02 from '../assets/JSDLOGO02.jpeg'
import JSDLOGO03 from '../assets/JSDLOGO03.jpeg'
import JSDLOGO04 from '../assets/JSDLOGO04.jpeg'


const ImageSlider: React.FC = () => {
  const images = [IA01, IA02, IA03, IA04, JSDLOGO01, JSDLOGO02, JSDLOGO03, JSDLOGO04];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-slider">
      <img src={images[currentIndex]} alt="Imagem do slider" />
      <button className="prev" onClick={prevImage}>&lt;</button>
      <button className="next" onClick={nextImage}>&gt;</button>
    </div>
  );
};

export default ImageSlider;
