import React, {useEffect, useRef, useState} from 'react';

const VideoCarousel = ({ videos }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRefs = useRef([]);

    const handleMove=()=>{
      setCurrentIndex((prevIndex)=>prevIndex===videos.length-1?0:prevIndex+1);
    }

    useEffect(() => {
        if (videoRefs.current[currentIndex]) {
            videoRefs.current[currentIndex].currentTime = 0;
            videoRefs.current[currentIndex].play();
        }
    }, [currentIndex]);

    return (

        <div className="relative  w-full">
            <div className="overflow-hidden">
                <div
                    className="flex rounded-lg transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {videos.map((video, index) => (
                        <video
                            key={index}
                            className="w-full flex-shrink-0"
                            ref={(el) => (videoRefs.current[index] = el)}
                            autoPlay
                            muted
                            playsInline
                            onEnded={handleMove}
                        >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ))}
                </div>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-1 left-0 right-0 flex justify-center space-x-2">
                {videos.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default VideoCarousel;
