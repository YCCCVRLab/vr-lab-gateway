import React, { useState, useEffect, useRef } from 'react';
import '../styles/retro-tv.css';

interface RetroTVProps {
  theme?: 'xp' | 'vista';
}

export const RetroTV: React.FC<RetroTVProps> = ({ theme = 'vista' }) => {
  const [currentVideo, setCurrentVideo] = useState(-1); // -1 means showing static
  const [showStatic, setShowStatic] = useState(true);
  const [tvOn, setTvOn] = useState(false);
  const staticRef = useRef<HTMLDivElement>(null);

  const videos = [
    { id: 'KLOcj5qvOio', title: 'Video 1' },
    { id: '80IIEnSNwQc', title: 'Video 2' },
    { id: 'D8GMeEZSfPQ', title: 'Video 3' }
  ];

  useEffect(() => {
    // Create static noise effect
    const createStatic = () => {
      if (!staticRef.current) return;
      
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = 400;
      canvas.height = 300;
      
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      
      const animateStatic = () => {
        for (let i = 0; i < imageData.data.length; i += 4) {
          const noise = Math.random() * 255;
          imageData.data[i] = noise;     // Red
          imageData.data[i + 1] = noise; // Green
          imageData.data[i + 2] = noise; // Blue
          imageData.data[i + 3] = 255;   // Alpha
        }
        ctx.putImageData(imageData, 0, 0);
        
        if (showStatic) {
          requestAnimationFrame(animateStatic);
        }
      };
      
      if (showStatic) {
        animateStatic();
      }
      
      staticRef.current.innerHTML = '';
      staticRef.current.appendChild(canvas);
    };

    if (showStatic) {
      createStatic();
    }
  }, [showStatic]);

  const handlePowerOn = () => {
    setTvOn(true);
    setShowStatic(true);
    
    // Show static for 2 seconds, then start first video
    setTimeout(() => {
      setShowStatic(false);
      setCurrentVideo(0);
    }, 2000);
  };

  const handleChannelChange = (direction: 'next' | 'prev') => {
    setShowStatic(true);
    setCurrentVideo(-1);
    
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
      } else {
        setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
      }
      setShowStatic(false);
    }, 1000);
  };

  const handleVideoEnd = () => {
    setShowStatic(true);
    setCurrentVideo(-1);
    
    // Show static for 1 second, then move to next video
    setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
      setShowStatic(false);
    }, 1000);
  };

  const handlePowerOff = () => {
    setTvOn(false);
    setShowStatic(false);
    setCurrentVideo(-1);
  };

  return (
    <div className={`retro-tv-container ${theme}`}>
      <div className="retro-tv">
        {/* TV Frame */}
        <div className="tv-frame">
          <div className="tv-screen-bezel">
            <div className="tv-screen">
              {!tvOn ? (
                <div className="tv-off">
                  <div className="power-dot"></div>
                </div>
              ) : showStatic ? (
                <div className="tv-static">
                  <div ref={staticRef} className="static-canvas"></div>
                  <div className="static-overlay"></div>
                </div>
              ) : currentVideo >= 0 ? (
                <div className="tv-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videos[currentVideo].id}?autoplay=1&rel=0&modestbranding=1`}
                    title={videos[currentVideo].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={() => {
                      // Auto-advance after video (approximate timing)
                      setTimeout(handleVideoEnd, 180000); // 3 minutes
                    }}
                  ></iframe>
                </div>
              ) : null}
            </div>
          </div>
          
          {/* TV Brand Label */}
          <div className="tv-brand">YCCC-TV</div>
          
          {/* Control Panel */}
          <div className="tv-controls">
            <div className="control-row">
              <button 
                className={`power-button ${tvOn ? 'on' : 'off'}`}
                onClick={tvOn ? handlePowerOff : handlePowerOn}
              >
                ⏻
              </button>
              <div className="volume-knob"></div>
            </div>
            
            <div className="control-row">
              <button 
                className="channel-button"
                onClick={() => handleChannelChange('prev')}
                disabled={!tvOn}
              >
                CH-
              </button>
              <div className="channel-display">
                {tvOn ? (currentVideo >= 0 ? (currentVideo + 1).toString().padStart(2, '0') : '--') : ''}
              </div>
              <button 
                className="channel-button"
                onClick={() => handleChannelChange('next')}
                disabled={!tvOn}
              >
                CH+
              </button>
            </div>
          </div>
        </div>
        
        {/* TV Stand */}
        <div className="tv-stand"></div>
      </div>
      
      {/* Remote Control */}
      <div className="remote-control">
        <div className="remote-header">YCCC Remote</div>
        <div className="remote-buttons">
          <button 
            className="remote-power"
            onClick={tvOn ? handlePowerOff : handlePowerOn}
          >
            POWER
          </button>
          <div className="remote-numbers">
            {[1, 2, 3].map((num) => (
              <button 
                key={num}
                className="remote-number"
                onClick={() => {
                  if (tvOn) {
                    setShowStatic(true);
                    setTimeout(() => {
                      setCurrentVideo(num - 1);
                      setShowStatic(false);
                    }, 1000);
                  }
                }}
                disabled={!tvOn}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="remote-arrows">
            <button 
              className="remote-arrow"
              onClick={() => handleChannelChange('prev')}
              disabled={!tvOn}
            >
              ↑
            </button>
            <button 
              className="remote-arrow"
              onClick={() => handleChannelChange('next')}
              disabled={!tvOn}
            >
              ↓
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};