import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import AnimatedSelect from '../common/AnimatedSelect';
import { Mail, Phone } from 'lucide-react';
import { FaX } from 'react-icons/fa6';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { LiaFaxSolid } from 'react-icons/lia';
import { FaEnvelopeOpenText } from 'react-icons/fa';

const GetInTouchSection = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const karachi = [67.0011, 24.8607]; // [lng, lat]

  useEffect(() => {
    if (map.current) return; // prevent reinitialization
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: karachi,
      zoom: 12,
    });

    // Add custom animated location pin marker
    const markerEl = document.createElement('div');
    markerEl.innerHTML = `
  <style>
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translate(-50%, -70%) rotate(-45deg);
      }
      40% {
        transform: translate(-50%, -85%) rotate(-45deg);
      }
      60% {
        transform: translate(-50%, -75%) rotate(-45deg);
      }
    }
  </style>
  <div style="position: relative; width: 50px; height: 60px;">
    <div style="
      position: absolute;
      width: 60px;
      height: 60px;
      background-color: #d4575b;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      left: 50%;
      top: 50%;
      transform-origin: center;
      translate: -50% -70%;
      box-shadow: 0 0 8px rgba(0,0,0,0.3);
      animation: bounce 1s ease-out;
    "></div>
    <div style="
      position: absolute;
      width: 24px;
      height: 24px;
      background-color: white;
      border-radius: 50%;
      left: 50%;
      top: 35%;
      translate: -50% -50%;
    "></div>
  </div>
`;

    new maplibregl.Marker({ element: markerEl })
      .setLngLat(karachi)
      .addTo(map.current);
  }, []);

  const info = [
    {
      icon: MdOutlinePhoneInTalk,
      label: 'PHONE',
      value: '03 5432 1234',
    },
    {
      icon: LiaFaxSolid,
      label: 'FAX',
      value: '03 5432 1234',
    },
    {
      icon: FaEnvelopeOpenText,
      label: 'EMAIL',
      value: 'info@marcc.com.au',
      isLink: true,
    },
  ];

  return (
    <div className='container m-auto xl:px-0'>
      <section id='contact-form' className='w-full mt-[53px] py-10 mb-[70px]'>
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-10'>
          {/* LEFT COLUMN */}
          <div className='flex flex-col justify-center'>
            <h2
              className='font-bold text-gray-900'
              style={{
                fontSize: 'clamp(32px, 5vw, 54px)',
                fontWeight: 700,
                marginBottom: 'clamp(15px, 2vw, 20px)',
              }}
            >
              Get in <span className='text-[#d4575b]'>Touch</span>
            </h2>
            <p
              className='text-black w-full sm:w-[450px]'
              style={{
                fontSize: 'clamp(12px, 1.5vw, 14px)',
                fontWeight: 400,
                marginBottom: 'clamp(25px, 3.5vw, 40px)',
              }}
            >
              We'd love to hear from you. Fill out the form below and our team
              will get back to you as soon as possible.
            </p>

            <form className='space-y-5'>
              <div class='relative required-input'>
                <input
                  type='text'
                  placeholder='Name'
                  class='w-full rounded-lg border border-gray-300 p-3 focus:ring-1 focus:ring-[#d4575b] focus:outline-none'
                />
              </div>
              <input
                type='email'
                placeholder='Email'
                className='w-full rounded-lg border border-gray-300 p-3 focus:ring-1 focus:ring-[#d4575b] focus:outline-none'
              />
              <div class='relative required-input2'>
                {' '}
                <input
                  type='tel'
                  placeholder='Phone Number'
                  className='w-full rounded-lg border border-gray-300 p-3 focus:ring-1 focus:ring-[#d4575b] focus:outline-none'
                />
              </div>

              <AnimatedSelect />

              <button
                type='submit'
                className='w-full transition text-white font-semibold py-3 rounded-lg'
                style={{
                  backgroundColor: '#D4575B',
                }}
              >
                Send
              </button>
            </form>

            <div
              className='flex flex-wrap justify-center md:justify-start gap-8 md:gap-16'
              style={{
                marginTop: 'clamp(40px, 5vw, 60px)',
              }}
            >
              {info.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className='flex items-center min-w-[120px]'
                    style={{
                      gap: '5px',
                    }}
                  >
                    <div className='flex-shrink-0 text-black'>
                      <IconComponent
                        style={{ width: '28px', height: '28px' }}
                      />
                    </div>
                    <div className='flex flex-col'>
                      <span
                        className='text-gray-800 tracking-wide'
                        style={{
                          fontSize: 'clamp(11px, 1.5vw, 13px)',
                          fontWeight: 700,
                        }}
                      >
                        {item.label}
                      </span>
                      {item.isLink ? (
                        <a
                          href={`mailto:${item.value}`}
                          className='hover:underline'
                          style={{
                            fontSize: 'clamp(11px, 1.5vw, 13px)',
                            fontWeight: 700,
                            color: '#D4575B',
                            fontFamily: 'Arial, sans-serif',
                          }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span
                          style={{
                            fontSize: 'clamp(11px, 1.5vw, 13px)',
                            fontWeight: 700,
                            color: '#D4575B',
                            fontFamily: 'Arial, sans-serif',
                          }}
                        >
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN (MAP) */}
          <div
            ref={mapContainer}
            className='w-full h-[530px] rounded-2xl overflow-hidden shadow-md'
          ></div>
        </div>
      </section>
    </div>
  );
};

export default GetInTouchSection;
