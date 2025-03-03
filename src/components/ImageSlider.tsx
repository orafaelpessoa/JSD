import React, { useState } from 'react';
import JSD01 from '../assets/JSD01.jpg'
import JSD02 from '../assets/JSD02.jpg'


const ImageSlider: React.FC = () => {
  const images = [JSD01, JSD02];
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
