import React from 'react';
import { useTranslation } from 'react-i18next';

const FlexVideoContent = ({ ifExists, endpoint: { videoSrc, url } }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={`flex items-center justify-between lg:flex-col lg:justify-center nike-container ${ifExists ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className='max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center'>
          <h1 className='text-4xl sm:text-3xl font-bold text-gradient'>{t('highlight.heading')}</h1>
          <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg'>{t('highlight.storeTitle')}</h1>
          <p className='xl:text-sm my-4 text-slate-900'>{t('highlight.storeSubtitle')}</p>
          <a href={url} className="flex items-center" target={"_blank"} role="button">
            <button type='button' className='button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5'>{t('highlight.storeBtnText')}</button>
          </a>
        </div>
        <div className='flex items-center justify-center max-w-xl relative lg:max-w-none w-full'>
          <video
            src={videoSrc}
            alt={`video/${t('highlight.heading')}`}
            className={`w-auto object-fill transitions-theme ${ifExists ? 'h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36' : 'h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-40'} rounded-lg`} // Add rounded-lg class for smooth corners
            controls
          />
        </div>
      </div>
    </>
  );
}

export default FlexVideoContent;
