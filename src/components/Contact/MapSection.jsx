import React from 'react';
import map from '@/images/newMap.png';
import pakistanFlag from '@/images/pakflag.png';
import usaFlag from '@/images/usaflag.png';

const MapSection = () => {
  return (
    <section className='relative pt-[60px] md:pt-[100px]'>
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
            box-shadow: 0 0 0 10px rgba(220, 38, 38, 0);
          }
        }
        @keyframes pulse-glow-blue {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.7);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
            box-shadow: 0 0 0 10px rgba(14, 165, 233, 0);
          }
        }
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .location-pin {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          z-index: 10;
          cursor: pointer;
          animation: pulse-glow 2s ease-in-out infinite, blink 2s ease-in-out infinite;
        }
        .location-pin-blue {
          animation: pulse-glow-blue 2s ease-in-out infinite, blink 2s ease-in-out infinite;
        }
        .location-pin::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 10px;
          height: 10px;
          background: black;
          border-radius: 50%;
          z-index: 2;
          opacity: 1 !important;
          animation: none !important;
        }
        .location-pin::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: inherit;
          opacity: 0.3;
          animation: pulse-ring 2s ease-in-out infinite;
        }
        @keyframes pulse-ring {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
        .location-label {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          padding: 0;
          font-size: 14px;
          font-weight: 700;
          color: #1f2937;
          z-index: 10;
          white-space: nowrap;
        }
        .dotted-line {
          position: absolute;
          border-left: 2px dashed #000;
          z-index: 9;
        }
        // .flag-icon {
        //   width: 20px;
        //   height: 14px;
        //   border-radius: 2px;
        //   flex-shrink: 0;
        // }
      `}</style>
      {/* Map Image */}
      <div className='container flex items-center justify-center mx-auto xl:px-0 relative'>
        <div
          className='relative w-full max-w-[1222px]'
          style={{ aspectRatio: '1222 / 636' }}
        >
          <img
            src={map}
            alt='Global Office Map'
            className='w-full h-full object-contain'
            style={{
              maxHeight: '636px',
            }}
          />

          {/* Houston, USA - Now at Karachi's old position */}
          {/* Label - positioned above the dot */}
          <div
            className='location-label'
            style={{
              top: 'calc(58% - 110px)',
              left: '68.5%',
              transform: 'translateX(-50%)',
            }}
          >
            {/* USA Flag */}
            <img src={usaFlag} alt='USA Flag' className='' />
            <span>Houston, USA</span>
          </div>

          {/* Dotted Line for Houston - from label to dot */}
          <div
            className='dotted-line'
            style={{
              top: 'calc(58% - 80px)',
              left: '68.7%',
              height: '80px',
            }}
          />

          {/* Houston Pointer - at Karachi's old position */}
          <div
            className='location-pin location-pin-blue bg-[#00BBCA]'
            style={{
              top: '58%',
              left: '68%',
            }}
            title='Houston, USA'
          />

          {/* Karachi, Pakistan - Now at Houston's old position */}
          {/* Label - positioned above the dot */}
          <div
            className='location-label'
            style={{
              top: 'calc(42% - 110px)',
              left: '22%',
              transform: 'translateX(-50%)',
            }}
          >
            {/* Pakistan Flag */}
            <img src={pakistanFlag} alt='Pakistan Flag' className='' />
            <span>Karachi, Pakistan</span>
          </div>

          {/* Dotted Line for Karachi - from label to dot */}
          <div
            className='dotted-line'
            style={{
              top: 'calc(42% - 80px)',
              left: '22.7%',
              height: '80px',
            }}
          />

          {/* Karachi Pointer - at Houston's old position */}
          <div
            className='location-pin bg-[#d4575b]'
            style={{
              top: '42%',
              left: '22%',
            }}
            title='Karachi, Pakistan'
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
