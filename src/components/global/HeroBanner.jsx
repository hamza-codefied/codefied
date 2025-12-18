import React from 'react';
import bg from '../../images/hero.png';

const HeroBanner = ({
  BannerText,
  TopText = '',
  MainText = '',
  BottomText = '',
  classNames,
  bannerTextAdjust,
}) => {
  return (
    <div
      className={`relative bg-cover bg-center bg-no-repeat overflow-hidden ${classNames}`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className='container xl:px-0 m-auto w-full h-full relative'>
        {/* Banner Text */}
        <p
          className='
            absolute bottom-0 w-full text-black/10 font-extralight text-center
            whitespace-nowrap 
          '
          style={bannerTextAdjust}
        >
          {BannerText}
        </p>

        {/*  */}
        {/* Foreground Text (HTML supported) */}
        <div className='py-28 xl:px-0'>
          {TopText && <div className=''>{TopText}</div>}
          {MainText && <div className=''>{MainText}</div>}
          {BottomText && <div className=''>{BottomText}</div>}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
