import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { getSub10Data } from "../../../data/sub10";
import TitleSection from "../components/heading/TitleSection";
import DsnGrid from "../layout/DsnGrid";
import Skills, { SkillProgressBar } from "../components/skill/Skills";
import BrandClientSwiper from "../components/brand-client/BrandClientSwiper";
import Facts from "../components/facts/Facts";
import ParallaxImage from "../components/Image/ParallaxImage";
import ServiceOne from "../components/services/grid/ServiceOne";
import Sub10s from "components/maps/globes/Sub10s";


const SubTenAverages = () => {
  return (
    <main>
      {/*<!-- ========== About Section ========== */}
      <section
        className="about-me container p-relative section-margin"
        data-dsn-title="Below the Horizon"
      >
        <TitleSection description={"{ Below 10s }"}>Sub 10s</TitleSection>
        <DsnGrid col={2} colTablet={1} rowGapTablet={50}>
          <div className="box-info">
            <h4 className="title-block mb-20">A Little Bit about Myself</h4>
            <p className="mb-15 border-top pt-20">
              When asked to think of the fastest person anyone personally knows, there 
              is an extremely high chance that, whoever they imagine, is definately not 
              remarkable and will never deliver a hallmark performance, in this life and 
              any to follow. One can be absolutely certain, that, for a period stretching 
              back 2 million years from the year 1968, no single human had ever run 
              close to the speeds required for below 10s performances. The current world 
              record would be 0.5s slower had it not been for advancements in track 
              surfaces, time-keeping, injury therapy and preventation and nutrition. 
              One is more likely to meet a billionaire,a Pope, person older than a 100 years, a 
              Nobel Prize Winner or the champion of 
              any major sporting trophy encompassing all from world wide competitions
               such FIFA World Cup, ICC, RWC to regional and domestic fixtures in NFL,
              NHL, UEFA, Copa America, Tour de France, Giro Italia, Afcon, KHL, AFL, Super 14, Ashes,
              and British and Irish Lions Tour. As of writing, there are more Isle of Men TT (including 
              Manx Grand Prix) fatalities recorded than there are individuals who have recorded sub 10s.
              If one"s goal was to be part of the most exclusive clubs available to humans, one would 
              need to either win a Fields medal, conduct lunar missions or set off on projects considered 
              to be out there, such as piloting a supersonic car or aeroplane, base jumping from the 
              stratosphere or cross the entire Amazon or Sahara with just a machete and no internet access. 
            </p>
            <p className="mb-30 border-bottom pb-20">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using Content here,
              content here, making it look like readable English.
            </p>
          </div>
          <div className="box-skills">
            <div>
            <Skills>
              <SkillProgressBar bgColor={"pattern"} number={62}>
                North America
              </SkillProgressBar>
              <SkillProgressBar bgColor={"pattern"} number={17}>
                Africa
              </SkillProgressBar>
              <SkillProgressBar bgColor={"pattern"} number={12}>
                Europe 
              </SkillProgressBar>
            </Skills>
           </div>
           <div className="w-66 w-full rounded-lg bg-white bg-darkblack-600 p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-bgray-900 text-white text-2xl text-xl font-bold">
          Most locations
        </h3>
        <LocationSelector />
      </div>
      <div className="flex space-x-[26px] items-center">
        <div className="flex-1 w-full mb-4 mb-0">
          <div className="flex space-x-2 items-end mb-1">
            <h1 className="text-2xl text-white font-bold leading-[30px] text-bgray-900">
              76,345
            </h1>
            <div className="w-[60px] h-[22px] rounded-full bg-success-400 flex justify-center items-center">
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 5.89575L3.5 2.89575L5.5 4.89575L9.5 0.895752"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 0.895752H9.5V4.39575"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-white text-xs font-medium">12,00%</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-bgray-600 text-darkblack-300 mb-7">
            Compared to last month
          </p>
          <div className="flex flex-col space-y-2.5">
            <div className="w-full h-[32px] px-2 bg-bgray-100 bg-darkblack-500 rounded-lg flex justify-between items-center">
              <div className="flex space-x-2 items-center">
                <div className="w-2 h-2 rounded-full bg-success-300"></div>
                <span className="text-bgray-900 text-white text-sm font-medium">
                  United States
                </span>
              </div>
              <span className="text-bgray-600 text-sm font-medium">15,732</span>
            </div>
            <div className="w-full h-[32px] px-2 rounded-lg flex justify-between items-center">
              <div className="flex space-x-2 items-center">
                <div className="w-2 h-2 rounded-full bg-warning-300"></div>
                <span className="text-bgray-900 text-white text-sm font-medium">
                  California
                </span>
              </div>
              <span className="text-bgray-600 text-sm font-medium">15,732</span>
            </div>
            <div className="w-full h-[32px] px-2 bg-bgray-100 bg-darkblack-500 rounded-lg flex justify-between items-center">
              <div className="flex space-x-2 items-center">
                <div className="w-2 h-2 rounded-full bg-purple"></div>
                <span className="text-bgray-900 text-white text-sm font-medium">
                  Dhaka
                </span>
              </div>
              <span className="text-bgray-600 text-sm font-medium">15,732</span>
            </div>
            <div className="w-full h-[32px] px-2 rounded-lg flex justify-between items-center">
              <div className="flex space-x-2 items-center">
                <div className="w-2 h-2 rounded-full bg-error-300"></div>
                <span className="text-bgray-900 text-white text-sm font-medium">
                  Los Angels
                </span>
              </div>
              <span className="text-bgray-600 text-sm font-medium">15,732</span>
            </div>
          </div>
        </div>
        <div className="w-[412px] w-full flex justify-center">
          <div className="w-full md:w-[350px] w-[300px]">
            <Sub10s />
          </div>
        </div>
      </div>
    </div>

          </div>
        </DsnGrid>

        <BrandClientSwiper className="mt-50" grabCursor />
      </section>
      {/*<!-- ========== End About Section ========== */}

      {/*<!-- ========== facts-section ==========*/}
      <div className="section-padding p-relative v-dark-head">
        <ParallaxImage
          alt={""}
          src={"/img/header.jpg"}
          overlay={7}
          asBackground
        />
        <div className="container">
          <Facts className="text-center" col={4} colTablet={2} />
        </div>
      </div>
      {/*<!-- ========== end facts-section ========== */}

      {/*Start Service*/}
      <div className="container section-margin" data-dsn-title="My Services">
        <TitleSection
          className="align-items-center text-center"
          description={"{ Our Services }"}
        >
          We are delivering beautiful <br /> digital products for you.
        </TitleSection>
        <ServiceOne />
      </div>
      {/*End Service*/}

      {/*========== End Work Section ==========*/}

      {/*Start testimonial Section*/}
      {/*End testimonial Section*/}

      {/*Start Blog*/}

      {/*End Blog*/}

  

      {/*========== Footer ==========*/}
      {/*========== End Footer ==========*/}
    </main>
  );
};

export default SubTenAverages;
