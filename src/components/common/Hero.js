import React, { useState, useEffect, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import heroSlides from '../../data/heroData';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Auto-play: Change slide every 3 seconds with pause on hover
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = heroSlides.length - 1;
      if (next >= heroSlides.length) next = 0;
      return next;
    });
  };

  const currentData = heroSlides[currentSlide];
  
  // Get foreground cards - use the cards array from current slide
  const foregroundCards = currentData.cards || [];

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.05
    },
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      scale: 0.95
    }
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image with Smooth Transitions */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={`bg-${currentSlide}`}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 2, ease: [0.22, 1, 0.36, 1] }
          }}
          className="absolute inset-0 will-change-transform"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center will-change-transform"
            style={{ 
              backgroundImage: `url(${currentData.bgImage})`,
              transform: 'translateZ(0)'
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative h-full flex items-center px-6 lg:px-16 max-w-[1600px] mx-auto">
        {/* Left Side - Text Content */}
        <div className="flex-1 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Category */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="h-1 bg-amber-500 mb-6"
              />
              
              <motion.p 
                className="text-white/80 text-sm md:text-base mb-4 tracking-wider uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.4 }}
              >
                {currentData.category}
              </motion.p>

              {/* Main Title */}
              <motion.h1 
                className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight whitespace-pre-line"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {currentData.title}
              </motion.h1>

              {/* Description */}
              <motion.p 
                className="text-white/70 text-base md:text-lg max-w-md mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                {currentData.description}
              </motion.p>

              {/* CTA Button */}
              <motion.button
                className="flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPlay className="text-sm" />
                EXPLORE PRODUCTS
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Foreground Cards - Bottom Right - Smaller & Smoother */}
      <div className="absolute bottom-24 right-0 left-0 lg:left-auto lg:right-12 z-20 overflow-hidden pointer-events-none">
        <div className="flex justify-center lg:justify-end px-4 lg:px-0">
          <div className="relative w-full max-w-3xl lg:max-w-[700px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={`cards-row-${currentSlide}`}
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {foregroundCards.map((card, index) => (
                  <motion.div
                    key={`card-${currentSlide}-${index}`}
                    className="flex-shrink-0 pointer-events-auto"
                    style={{ width: '140px' }}
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    animate={{ 
                      opacity: 1,
                      y: 0, 
                      scale: 1
                    }}
                    transition={{
                      delay: 0.2 + (index * 0.08),
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <motion.div 
                      className="relative h-52 rounded-xl overflow-hidden shadow-xl cursor-pointer group will-change-transform"
                      onClick={() => index === 0 && paginate(1)}
                      whileHover={{ 
                        scale: 1.08,
                        y: -8,
                        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                      }}
                      whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                    >
                      {/* Card Image */}
                      <img 
                        src={card.image} 
                        alt={card.subtitle}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 will-change-transform"
                        loading="lazy"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      
                      {/* Card Text */}
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white/70 text-[10px] mb-0.5 uppercase tracking-wide">{card.title}</p>
                        <h3 className="text-white text-sm font-bold leading-tight">{card.subtitle}</h3>
                      </div>

                      {/* Glossy Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Border Glow */}
                      <div className="absolute inset-0 rounded-xl border border-white/20" />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:left-12 lg:transform-none flex items-center gap-4 z-20">
        <motion.button
          onClick={() => paginate(-1)}
          className="w-12 h-12 rounded-full border-2 border-white/30 hover:border-white/60 flex items-center justify-center text-white transition-colors duration-200 backdrop-blur-sm hover:bg-white/10"
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          <FaChevronLeft size={14} />
        </motion.button>

        <motion.button
          onClick={() => paginate(1)}
          className="w-12 h-12 rounded-full border-2 border-white/30 hover:border-white/60 flex items-center justify-center text-white transition-colors duration-200 backdrop-blur-sm hover:bg-white/10"
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          <FaChevronRight size={14} />
        </motion.button>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 right-4 lg:right-12 z-20">
        <div className="flex items-center gap-3">
          <div className="hidden lg:block w-40 h-0.5 bg-white/20 relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-amber-500 will-change-transform"
              animate={{ scaleX: (currentSlide + 1) / heroSlides.length }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left' }}
            />
          </div>
          
          <div className="text-white text-4xl lg:text-5xl font-bold tabular-nums">
            {String(currentSlide + 1).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Slide Dots - Mobile */}
      <div className="lg:hidden absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-amber-500 w-6' : 'bg-white/30 w-1.5'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;