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
  <div style="position: relative; width: 40px; height: 40px;">
    <div style="
      position: absolute;
      width: 40px;
      height: 40px;
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
      width: 14px;
      height: 14px;
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
      icon: <MdOutlinePhoneInTalk className='w-8 h-8 text-black' />,
      label: 'PHONE',
      value: '03 5432 1234',
    },
    {
      icon: <LiaFaxSolid className='w-8 h-8 text-black' />,
      label: 'FAX',
      value: '03 5432 1234',
    },
    {
      icon: <FaEnvelopeOpenText className='w-6 h-6 text-black' />,
      label: 'EMAIL',
      value: 'info@marcc.com.au',
      isLink: true,
    },
  ];

  return (
    <div className='container m-auto px-8'>
      <section className='w-full mt-[-20px] py-10'>
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-10'>
          {/* LEFT COLUMN */}
          <div className='flex flex-col justify-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>
              Get in <span className='text-[#d4575b]'>Touch</span>
            </h2>
            <p className='text-black w-full sm:w-[450px] mb-8'>
              We’d love to hear from you. Fill out the form below and our team
              will get back to you as soon as possible.
            </p>

            <form className='space-y-5'>
              <input
                type='text'
                placeholder='Name'
                className='w-full rounded-lg border border-gray-300 p-3 focus:ring-1 focus:ring-[#d4575b] focus:outline-none'
              />
              <input
                type='email'
                placeholder='Email'
                className='w-full rounded-lg border border-gray-300 p-3 focus:ring-1 focus:ring-[#d4575b] focus:outline-none'
              />
              <input
                type='tel'
                placeholder='Phone Number'
                className='w-full rounded-lg border border-gray-300 p-3 focus:ring-1 focus:ring-[#d4575b] focus:outline-none'
              />
              <AnimatedSelect />

              <button
                type='submit'
                className='w-full bg-[#d4575b]/80 hover:bg-[#d4575b] transition text-white font-semibold py-3 rounded-lg'
              >
                Send
              </button>
            </form>

            <div className='flex flex-wrap justify-center md:justify-start gap-8 md:gap-16 py-10'>
              {info.map((item, idx) => (
                <div
                  key={idx}
                  className='flex items-center space-x-3 min-w-[120px]'
                >
                  <div className='flex-shrink-0'>{item.icon}</div>
                  <div className='flex flex-col'>
                    <span className='text-xs font-semibold text-gray-800 tracking-wide'>
                      {item.label}
                    </span>
                    {item.isLink ? (
                      <a
                        href={`mailto:${item.value}`}
                        className='text-sm font-medium text-[#d4575b] hover:underline'
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className='text-sm font-medium text-[#d4575b]'>
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
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
