import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import characterCapGreen from '../../../elements/character-cap-green.svg';
import remindSubscription from '../../../elements/remind-subscription.svg';
import trackExpenses from '../../../elements/track-expenses.svg';
import addCustomSubscription from '../../../elements/add-custom-subscription.svg';
import featureIdeas from '../../../elements/feature-ideas.svg';

const features = [
  { name: 'Set a reminder for subscriptions', image: remindSubscription, description: "" },
  { name: 'Track your subscription expenses', image: trackExpenses },
  { name: 'Add default Custom subscriptions', image: addCustomSubscription },
  { name: 'Some ideas of features ?', image: featureIdeas }
];

export function FeatureSection() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prevFeature => {
        const currentIndex = features.findIndex(feature => feature.name === prevFeature.name);
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex];
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='feature' className="flex justify-center pb-[180px] px-8 max-sm:px-4 max-sm:pb-[80px]">
      <div className="flex justify-between max-w-[1276.8px] w-full gap-3 mx-auto max-lg:flex-col max-lg:items-center">
        <div className="feature-section-container-left max-lg:max-w-[578px]">
          <div className="flex items-start flex-col gap-5">
            <h2 className='text-[52.74px] leading-[110%] tracking-[-1.34px] font-redRoseBold text-white max-w-[578px] text-start max-lg:max-w-full max-lg:text-center max-sm:text-[32px]'>
              Features that meet the specific needs of users
            </h2>
            <p className='text-[24.8px] leading-[150%] text-white max-w-[403px] text-start mb-[30px] max-lg:max-w-full max-lg:text-center max-sm:text-[20px]'>
              Power your subscription experience with features tailored to each user.
            </p>
          </div>
          <div className="features-list flex flex-col justify-center max-sm:items-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex gap-5 items-center px-5 py-3 w-fit ${activeFeature.name === feature.name ? 'bg-[#0B0B1A]' : ''} rounded-[6px] max-lg:justify-center cursor-pointer`}
              >
                <span className={`text-[24.8px] leading-[150%] ${activeFeature.name === feature.name ? 'text-white' : 'text-[#505058]'} max-sm:text-[18px] max-sm:max-w-[300px]`}>
                  {feature.name}
                </span>
                <div className="right-arrow-icon flex items-center justify-center w-6 h-6">
                  <svg className="svg" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7882 6.48001L20.0114 11.7751C20.4572 12.1544 20.4833 12.8339 20.0679 13.2464L13.7882 19.48" stroke="white" stroke-width="3" stroke-miterlimit="10" />
                    <path d="M19.9507 12.48H4.84003" stroke="white" stroke-width="3" stroke-miterlimit="10" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-[38px] pr-[4.8px] pb-[48.52px] pl-[57.6px] bg-[#0B0B1A] inline-flex rounded-[24px] max-xl:pl-[26px]">
          <div className="inline-flex flex-col items-center gap-[50px]">
            <div className="character-cap-green flex items-center justify-end max-w-[530px] w-full">
              <img src={characterCapGreen} alt="" />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                className="remind-subscription"
                key={activeFeature.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <img src={activeFeature.image} alt={activeFeature.name} />
              </motion.div>
            </AnimatePresence>
            <p className='text-base ledading-[150%] text-[#505058] max-w-[450px] texte-center'>
              Meet your inbox. The home for your feedback from all of your sources. Make sure no feedback gets unnoticed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
