import React,{useState, useEffect} from 'react'
import './ImageSlider.css'

function ImageSlider({ images, autoSlideInterval }) {

    const [currentIndex, setCurrentIndex] = useState(0);

      if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        clearInterval(autoSlideInterval)
      };
    
      const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        clearInterval(autoSlideInterval)
      };
    
      useEffect(() => {
        if (autoSlideInterval) {
          const intervalId = setInterval(goToNext, autoSlideInterval);
          return () => clearInterval(intervalId);
        }
      }, [autoSlideInterval]);


  return (
    <div className='slider-container'>
      <button className="nav-button left" onClick={goToPrevious}>❮</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />
      <button className="nav-button right" onClick={goToNext}>❯</button>
      <div className="indicators">
        {images.map((_, index) => (
          <span key={index} className={`indicator ${index === currentIndex ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
