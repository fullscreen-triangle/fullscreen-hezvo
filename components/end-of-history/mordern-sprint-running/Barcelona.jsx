"use client"
import React from "react";
import Image from "next/image";
import Skills, {SkillProgressBar} from "@/components/skill/Skills";
import DsnGrid from "layout/DsnGrid";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RadarChart = () => {
  const series = [67];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "22px",
            color: isDark ? "#E2E8F0" : "#475569",
          },
          value: {
            fontSize: "16px",
            color: isDark ? "#E2E8F0" : "#475569",
          },
          total: {
            show: true,
            label: "Total",
            color: isDark ? "#E2E8F0" : "#475569",
            formatter: function () {
              return 249;
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    colors: ["#4669FA"],
  };

  return (
    <div>
      <Chart series={series} options={options} type="radialBar" height="320" width="100%" />
    </div>
  );
};






const Barcelona = () => {


    return (
        <div>
 
            {/*<!-- ========== End box-gallery-vertical image Right ========== */}
            <section className="about-section-2 section-margin">
                <div className="container">
                    <DsnGrid col={2} colTablet={1}>
                        <div className="box-img p-relative">

                            <div className="box-inner-img p-absolute">
                                <Image className={"cover-bg-img"} src="/img/fullscreen/gifs/christie-clip-01.gif" alt="" fill/>
                            </div>
                            <div className="box-inner-img p-absolute">
                                <Image className={"cover-bg-img"} src="/img/fullscreen/gifs/christie-clip-02.gif" alt="" fill/>
                            </div>

                        </div>
                        <div className="box-information">
                            <TitleSection className="align-items-start mb-50" description="CAPABILITIES"
                                          defaultSpace={false}>
                                Spectacular Start to a Magnificent Decade 
                            </TitleSection>
                            <p className="mb-30">
                             At 32 years old, Linford Christie was now considered a veteran, a superstar who was 
                             slowly losing their relevance but had no option to retire.  The Masters 40, the fastest 
                             individual between ages of 35 and 40 was around 10.8s and no individual above 30 had ever 
                             won gold. 
                            </p>
                            <Skills>
                                <SkillProgressBar number={85}>Web Design</SkillProgressBar>
                                <SkillProgressBar number={72}>SEO, analytics & marketing</SkillProgressBar>
                                <SkillProgressBar number={89}>Mobile Development</SkillProgressBar>
                            </Skills>

                        </div>

                    </DsnGrid>
                </div>
            </section>

         
 

    

    
        </div>


    )
}

export default Barcelona;



