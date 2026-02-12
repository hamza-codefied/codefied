import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import AnimatedSelect from '../common/AnimatedSelect';
import { Mail, Phone } from 'lucide-react';
import { FaX } from 'react-icons/fa6';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import { LiaFaxSolid } from 'react-icons/lia';
// Custom Email Icon SVG Component
const EmailIcon = ({ style }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='25'
    height='23'
    viewBox='0 0 25 23'
    fill='none'
    style={style}
  >
    <path
      d='M6.20455 0V1.97124L0 6.01065V22.75H24.8182V6.01065L18.6136 1.97124V0H6.20455ZM8.27273 2.06818H16.5455V10.0178L12.4091 12.6999L8.27273 10.0178V2.06818ZM9.30682 4.13636V6.20455H15.5114V4.13636H9.30682ZM6.20455 4.4272V8.66051L2.9407 6.56001L6.20455 4.4272ZM18.6136 4.4272L21.8775 6.56001L18.6136 8.66051V4.4272ZM9.30682 7.23864V9.30682H15.5114V7.23864H9.30682ZM2.06818 8.46662L12.4091 15.1559L22.75 8.46662V20.6818H2.06818V8.46662Z'
      fill='black'
    />
  </svg>
);

const FaxIcon = ({ style }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='28'
    height='28'
    viewBox='0 0 28 28'
    fill='none'
  >
    <path
      d='M10.0625 1.64062V6.5625H8.09375V4.59375H2.1875V22.3125H4.15625V23.2969C4.15625 24.0967 4.44336 24.7837 5.01758 25.3579C5.6123 25.9526 6.30957 26.25 7.10938 26.25C7.90918 26.25 8.59619 25.9526 9.17041 25.3579C9.76514 24.7837 10.0625 24.0967 10.0625 23.2969V22.3125H25.8125V6.5625H21.875V1.64062H10.0625ZM12.0312 3.60938H19.9062V8.53125H12.0312V3.60938ZM4.15625 6.5625H6.125V20.3438H4.15625V6.5625ZM8.09375 8.53125H10.0625V10.5H21.875V8.53125H23.8438V20.3438H8.09375V8.53125ZM11.0469 12.4688V14.4375H13.0156V12.4688H11.0469ZM14.9844 12.4688V14.4375H16.9531V12.4688H14.9844ZM18.9219 12.4688V14.4375H20.8906V12.4688H18.9219ZM11.0469 16.4062V18.375H13.0156V16.4062H11.0469ZM14.9844 16.4062V18.375H16.9531V16.4062H14.9844ZM18.9219 16.4062V18.375H20.8906V16.4062H18.9219ZM6.125 22.3125H8.09375V23.2969C8.09375 23.5635 7.99121 23.7993 7.78613 24.0044C7.60156 24.189 7.37598 24.2812 7.10938 24.2812C6.84277 24.2812 6.60693 24.189 6.40186 24.0044C6.21729 23.7993 6.125 23.5635 6.125 23.2969V22.3125Z'
      fill='black'
    />
  </svg>
);

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
      icon: LiaPhoneVolumeSolid,
      label: 'PHONE',
      value: '+1 (832) 468-0554',
    },
    // {
    //   icon: FaxIcon,
    //   label: 'FAX',
    //   value: '03 5432 1234',
    // },
    {
      icon: EmailIcon,
      label: 'EMAIL',
      value: 'info@codefied.co',
      isLink: true,
    },
  ];

  return (
    <div className='container m-auto xl-custom:px-0'>
      <section
        id='contact-form'
        className='w-full mt-5 sm:mt-10 md:mt-[53px] py-2 md:py-10 mb-[70px]'
      >
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-10'>
          {/* LEFT COLUMN */}
          <div className='flex flex-col justify-center'>
            <h2 className='font-bold text-gray-900 text-[24px] sm:text-[30px] md:text-[40px] lg:text-[54px] mb-2 md:mb-5'>
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

            <form className='space-y-2 sm:space-y-5'>
              <div class='relative required-input'>
                <input
                  type='text'
                  placeholder='Name'
                  class='w-full rounded-lg border border-gray-300 p-3 focus:ring-1 focus:ring-[#d4575b] focus:outline-none placeholder-[#828282] placeholder:font-normal'
                />
              </div>
              <input
                type='email'
                placeholder='Email'
                className='w-full rounded-lg border border-gray-300 p-3 focus:ring-1 focus:ring-[#d4575b] focus:outline-none placeholder-[#828282] placeholder:font-normal'
              />
              <div class='relative required-input2'>
                {' '}
                <input
                  type='tel'
                  placeholder='Phone Number'
                  className='w-full rounded-lg border border-gray-300 p-3 focus:ring-1 focus:ring-[#d4575b] focus:outline-none placeholder-[#828282] placeholder:font-normal'
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
                      gap: '15px',
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
            className='xl:h-[700px] 2xl:w-[645px] overflow-hidden'
          ></div>
        </div>
      </section>
    </div>
  );
};

export default GetInTouchSection;
