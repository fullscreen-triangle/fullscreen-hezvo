"use client"
import React from "react";
import Image from "next/image";
import Skills, {SkillProgressBar} from "@/components/skill/Skills";
import DsnGrid from "layout/DsnGrid";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import SeoulNationalStadium from "./maps/SeoulNationalStadium";

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
            color: "#475569",
          },
          value: {
            fontSize: "16px",
            color:  "#475569",
          },
          total: {
            show: true,
            label: "Total",
            color:  "#475569",
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

const BasicBar = () => {
    const series = [
      {
        data: [1.83, 2.87, 3.80, 4.66, 5.50, 6.33, 7.17, 8.02, 8.89, 9.79],
      },
    ];
    const options = {
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        labels: {
          style: {
            colors:  "#475569",
            fontFamily: "Inter",
          },
        },
      },
      grid: {
        show: true,
        borderColor:  "#e2e8f0",
        strokeDashArray: 10,
        position: "back",
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany",
        ],
        labels: {
          style: {
            colors:  "#475569",
            fontFamily: "Inter",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      colors: ["#4669FA"],
    };
    return (
      <div>
        <Chart options={options} series={series} type="bar" height="350" width="100%" />
      </div>
    );
  };

  const Radar = () => {
    const series = [
      {
        name: "Option A",
        data: [41, 64, 81, 60, 42, 42, 33, 23],
      },
      {
        name: "Option B",
        data: [65, 46, 42, 25, 58, 63, 76, 43],
      },
    ];
    const options = {
      chart: {
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: false,
          blur: 8,
          left: 1,
          top: 1,
          opacity: 0.2,
        },
      },
      legend: {
        show: true,
        fontSize: "14px",
        fontFamily: "Inter",
        labels: {
          colors:  "#475569",
        },
      },
      yaxis: {
        show: false,
      },
      //colors: [chartColors.donut.series1, chartColors.donut.series3],
      xaxis: {
        categories: [
          "Battery",
          "Brand",
          "Camera",
          "Memory",
          "Storage",
          "Display",
          "OS",
          "Price",
        ],
      },
      fill: {
        opacity: [1, 0.8],
      },
      stroke: {
        show: false,
        width: 0,
      },
      markers: {
        size: 0,
      },
      grid: {
        show: false,
      },
    };
    return (
      <div>
        <Chart options={options} series={series} type="radar" height={450} width="100%" />
      </div>
    );
  };

  const shapeLine1 = {
    series: [
      {
        data: [800, 600, 1000, 800, 600, 1000, 800, 900],
      },
    ],
    options: {
      chart: {
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
        offsetX: 0,
        offsetY: 0,
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      colors: ["#00EBFF"],
      tooltip: {
        theme: "light",
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },
      yaxis: {
        show: false,
      },
      fill: {
        type: "solid",
        opacity: [0.1],
      },
      legend: {
        show: false,
      },
      xaxis: {
        low: 0,
        offsetX: 0,
        offsetY: 0,
        show: false,
        labels: {
          low: 0,
          offsetX: 0,
          show: false,
        },
        axisBorder: {
          low: 0,
          offsetX: 0,
          show: false,
        },
      },
    },
  };
  const shapeLine2 = {
    series: [
      {
        data: [800, 600, 1000, 800, 600, 1000, 800, 900],
      },
    ],
    options: {
      chart: {
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
        offsetX: 0,
        offsetY: 0,
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      colors: ["#FB8F65"],
      tooltip: {
        theme: "light",
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },
      yaxis: {
        show: false,
      },
      fill: {
        type: "solid",
        opacity: [0.1],
      },
      legend: {
        show: false,
      },
      xaxis: {
        low: 0,
        offsetX: 0,
        offsetY: 0,
        show: false,
        labels: {
          low: 0,
          offsetX: 0,
          show: false,
        },
        axisBorder: {
          low: 0,
          offsetX: 0,
          show: false,
        },
      },
    },
  };
  const shapeLine3 = {
    series: [
      {
        data: [800, 600, 1000, 800, 600, 1000, 800, 900],
      },
    ],
    options: {
      chart: {
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
        offsetX: 0,
        offsetY: 0,
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      colors: ["#5743BE"],
      tooltip: {
        theme: "light",
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },
      yaxis: {
        show: false,
      },
      fill: {
        type: "solid",
        opacity: [0.1],
      },
      legend: {
        show: false,
      },
      xaxis: {
        low: 0,
        offsetX: 0,
        offsetY: 0,
        show: false,
        labels: {
          low: 0,
          offsetX: 0,
          show: false,
        },
        axisBorder: {
          low: 0,
          offsetX: 0,
          show: false,
        },
      },
    },
  };
  
  const statistics = [
    {
      name: shapeLine1,
      title: "Totel revenue",
      count: "3,564",
      bg: "bg-[#E5F9FF] dark:bg-slate-900	",
    },
    {
      name: shapeLine2,
      title: "Products sold",
      count: "564",
      bg: "bg-[#FFEDE5] dark:bg-slate-900	",
    },
    {
      name: shapeLine3,
      title: "Growth",
      count: "+5.0%",
      bg: "bg-[#EAE5FF] dark:bg-slate-900	",
    },
  ];
  const GroupChart1 = () => {
    return (
      <>
        {statistics.map((item, i) => (
          <div className={`py-[18px] px-4 rounded-[6px] ${item.bg}`} key={i}>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <div className="flex-none">
                <Chart
                  options={item.name.options}
                  series={item.name.series}
                  type="area"
                  height={48}
                  width={48}
                />
              </div>
              <div className="flex-1">
                <div className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium">
                  {item.title}
                </div>
                <div className="text-slate-900 dark:text-white text-lg font-medium">
                  {item.count}
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };


const Seoul = () => {


    return (
        <div>
 
            {/*<!-- ========== End box-gallery-vertical image Right ========== */}
            <section className="about-section-2 section-margin">
                <div className="flex fixed container resize overflow-hidden mx-auto  antialised"> 
                    <SeoulNationalStadium/>
                </div>
                <div className="container">
                    <DsnGrid col={2} colTablet={1}>
                        <div className="box-img p-relative">

                            <div className="box-inner-img p-absolute">
                                <Image className={"cover-bg-img"} src="/img/fullscreen/gifs/ben-johnson-seoul-final-01.gif" alt="" fill/>
                            </div>
                            <div className="box-inner-img p-absolute">
                                <Image className={"cover-bg-img"} src="/img/fullscreen/gifs/CarlLewis-BreakItUp-02.gif" alt="" fill/>
                            </div>

                        </div>
                        <div className="box-information">
                            <TitleSection className="align-items-start mb-50" description="Seoul"
                                          defaultSpace={false}>
                                The Most Spectacular and Magnificent Dash 
                            </TitleSection>
                            <p className="flex justify-end mb-30">
                                The first man to ever complete the 100m in under a total of 50 strides, 
                                an achievement that has only been materialised by a total of 3 humans in 
                                complete history, was Ben Johnson. The unfortunate fact that he naturally 
                                had blood red eyes did not do him any favours in disproving his extensive 
                                use of performance enhancement drugs. In the 80s, enhancers were a staple 
                                in virtually every discipline, with there being a general agreement that 
                                nothing too absurd happens. Johnson categorically employed the use of 
                                illegal substances and was villified because his performance, had just been 
                                too outrageous, it was as clear as daylight that he was plugged in the whole 
                                time. Everyone expected Lionel Messi to at least score some goal in the 
                                2022 Qatar World Cup, but no one expected him to score 10 goals in final. 
                                What if he actually  did that ? It took another 30 years before anyone was 
                                able to run below 9.71s of which, of the 3 other individuals who have done so,
                                all but Usain Bolt, have been charged and served suspensions for consumption 
                                of banned substances. With a reaction time of 0.132s, the 
                                fastest ever champion reaction time and a clear lead of more than 2 metres 
                                at a peak speed of 43.15km/h, Ben Johnson had lowered the World Record by 
                                28%, a performance that was so amazing, it left a foul taste in every one, 
                                including the officials.  All ten finalists tested positive for performance 
                                enhancement drugs not withstanding the higher than average concentrations of 
                                dieuritics in athletes to expell any substances in their systems. Despite 
                                failing the drug tests, Johnson went on to become the personal trainer for 
                                Diego Maradona and was instrumental in sculptering Maradona into a 
                                lethal striker that clinched the World Cup. This did not escape the attention 
                                of Muamar Gadaffi, the man who succeeded himself in every leadership role and 
                                was commonly known as Brotherly Leader and Dear Guide of the Lybian Revolution.
                                The Lybian senior mens team was in desparate need of a more seasoned trainer and 
                                coach and Ben Johnson, still basking in the role they played in the Argentine 
                                1988 World Cup Victory, was the only logical candidate. Ben Johnson became the 
                                personal fitness trainer for all first family members and football team.      
                            </p>
                            <p className="flex justify-end mb-30">
                                Carl Lewis, a man universally disliked, by athletes and people from a lot of 
                                other walks of life, came second. The IOC admitted to have given preferential 
                                treatment to samples from the USA, which was of immense benefit to Carl. Even 
                                though all athletes tested positive for some substance, Carl and peers were 
                                let off without any opposition due to the ambigous application of the law. 
                                Carl Lewis was an elite All American athlete who presented himself as the 
                                incarnation of Jesse Owens and modelled himself after the legend to the letter. 
                                He was arguabley one of the best long jumpers to have ever existed, posting the 
                                second best jumps ever, for both indoor and outdoor performances. As one of the 
                                first true superstars in the sport, he involved himself in a lot of questionable 
                                antics that left one suspecting if the gentleman had some sugar in his tank. The 
                                animation included is a snippet from his best musical performance, a track called 
                                'Lovers dont talk', is a true testament to the depth of Carl's  persona and the 
                                exceptionally dismal performance of the track in terms of sales, was an explicit 
                                but polite declaration by the whole universe that he just was not anything that 
                                people wanted to ponder on in during their spare and personal times. He bestowed 
                                upon himself, the need to consider shirts a suggestion and made it a point to take off 
                                his shirt before every picture. He is the first and only professional sprinter, to record 
                                and publish drivel commonly known as 80s soul.
                            </p>
                            <Skills>
                                <SkillProgressBar number={28}>Progression (%) </SkillProgressBar>
                                <SkillProgressBar number={3}>Leading Distance (m)</SkillProgressBar>
                                <SkillProgressBar number={5}>Individuals with legal sub 10s</SkillProgressBar>
                            </Skills>

                        </div>

                    </DsnGrid>
                </div>
            </section>

         
 
            <div>
    
      <div className="grid grid-cols-12 gap-5 mb-5">
        <div className="2xl:col-span-3 lg:col-span-4 col-span-12">
          <ImageBlock1 />
        </div>
        <div className="2xl:col-span-9 lg:col-span-8 col-span-12">
      
            <div className="grid md:grid-cols-3 col-span-1 gap-4">
              <GroupChart1 />
            </div>
        
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5">
        <div className="lg:col-span-8 col-span-12">
       
            <div className="legend-ring">
              <RevenueBarChart />
            </div>
        
        </div>
        <div className="lg:col-span-4 col-span-12">
        <RadialsChart />
        </div>
        <div className="lg:col-span-8 col-span-12">
    d
        </div>
        <div className="lg:col-span-4 col-span-12">
         
        </div>
        <div className="lg:col-span-8 col-span-12">
       
        <div className="border border-slate-200 dark:border-slate-700 dark:bg-slate-900 rounded p-1 flex items-center">
            
            </div>
         
        </div>
        <div className="lg:col-span-4 col-span-12">

            <RadarChart />
            <div className="bg-slate-50 dark:bg-slate-900 rounded p-4 mt-8 flex justify-between flex-wrap">
              <div className="space-y-1">
                <h4 className="text-slate-600 dark:text-slate-200 text-xs font-normal">
                  Invested amount
                </h4>
                <div className="text-sm font-medium text-slate-900 dark:text-white">
                  $8264.35
                </div>
                <div className="text-slate-500 dark:text-slate-300 text-xs font-normal">
                  +0.001.23 (0.2%)
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="text-slate-600 dark:text-slate-200 text-xs font-normal">
                  Invested amount
                </h4>
                <div className="text-sm font-medium text-slate-900 dark:text-white">
                  $8264.35
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="text-slate-600 dark:text-slate-200 text-xs font-normal">
                  Invested amount
                </h4>
                <div className="text-sm font-medium text-slate-900 dark:text-white">
                  $8264.35
                </div>
              </div>
            </div>
        
        </div>
      </div>   
    </div>
    

    
        </div>


    )
}

export default Seoul;



