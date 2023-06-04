import React from 'react';

function Banner() {
  return (
    <div className="relative">
        <div className="flex items-center justify-center max-h-screen -mt-4 md:mt-0 3xl:mt-12">
        <div className="relative w-full h-full overflow-hidden">
            <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', overflow: 'hidden' }}>
                <video
                style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '123%', objectFit: 'cover' }}
                autoPlay
                loop
                muted
                >
                <source src="/video.mp4" type="video/mp4" />
                </video>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Banner;
