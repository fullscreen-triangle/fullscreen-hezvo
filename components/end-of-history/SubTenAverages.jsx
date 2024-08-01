import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { getSub10Data } from "../../../data/sub10";
import Button from "../components/button/Button";
import TitleSection from "../components/heading/TitleSection";
import DsnGrid from "../layout/DsnGrid";
import Skills, { SkillProgressBar } from "../components/skill/Skills";
import BrandClientSwiper from "../components/brand-client/BrandClientSwiper";
import Facts from "../components/facts/Facts";
import ParallaxImage from "../components/Image/ParallaxImage";
import ServiceOne from "../components/services/grid/ServiceOne";

import NextPage from "../components/next/NextPage";

const SubTenAverages = () => {
  return (
    <main>
      {/*<!-- ========== About Section ========== */}
      <section
        className="about-me container p-relative section-margin"
        data-dsn-title="About Me"
      >
        <TitleSection description={"{ HELLO }"}>About Me</TitleSection>
        <DsnGrid col={2} colTablet={1} rowGapTablet={50}>
          <div className="box-info">
            <h4 className="title-block mb-20">A Little Bit about Myself</h4>
            <p className="mb-15 border-top pt-20">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <p className="mb-30 border-bottom pb-20">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using Content here,
              content here, making it look like readable English.
            </p>
            <Button href={"#0"}>Download CV</Button>
          </div>
          <div className="box-skills">
            <Skills>
              <SkillProgressBar bgColor={"pattern"} number={96}>
                Web Design
              </SkillProgressBar>
              <SkillProgressBar bgColor={"pattern"} number={94}>
                JavaScript
              </SkillProgressBar>
              <SkillProgressBar bgColor={"pattern"} number={87}>
                PHP
              </SkillProgressBar>
            </Skills>
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

      {/*========== Next Page ==========*/}
      <NextPage className="section-padding border-top background-section" />
      {/*========== End Next Page ==========*/}

      {/*========== Footer ==========*/}
      {/*========== End Footer ==========*/}
    </main>
  );
};

export default SubTenAverages;
