import React from "react";
import Layout from "../layout/Layout";
import SliderPortfolio from "../components/slider-portfolio/SliderPortfolio";
import HeroSection from "../components/hero-section/HeroSection";
import TitleSection from "../components/heading/TitleSection";
import ServiceOne from "../components/services/grid/ServiceOne";
import ParallaxImage from "../components/Image/ParallaxImage";
import MoveBox from "../components/move-box/MoveBox";
import Button from "../components/button/Button";
import PortfolioSwiper from "../components/portfolio/PortfolioSwiper";
import SwiperPagination from "../components/swiper-pagination/SwiperPagination";
import Testimonial from "../components/testimonial/Testimonial";
import Accordion, { AccordionItem } from "../components/accordion/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DsnGrid from "../layout/DsnGrid";
import Dimensions from "components/maps/track/Dimensions";
import List from "components/list/List";
import { ListItem } from "components/list/List";
import HeaderFull from "components/header/HeaderFull";
import TitleCover from "../components/heading/TitleCover";
import BlogSwiper from "../components/bolg/BlogSwiper";
import Team from "../components/Team/Team";
import BrandClient from "../components/brand-client/BrandClient";
import ButtonPopup from "../components/button-popup/ButtonPopup";
import NextPage from "../components/next/NextPage";
import Footer from "../components/footer/Footer";
import ModalContact from "../components/model-right/ModalContact";
import HeaderNormal from "../components/header/HeaderNormal";
import HumanBody from "components/human-anatomy/HumanBody";
import Sub10s from "components/maps/globes/Sub10s";
import FastestNations from "components/maps/globes/FastestNations";
import MedalScoreGlobe from "components/maps/globes/MedalScoreGlobe";
import BerlinHundredHeat from "components/maps/mapbox-gl/BerlinHundredHeat";
import AllTimesHundredFilter from "components/charts/crossfilter/AllTimesHundredFilter";
import RouteCamera from "components/maps/mapbox-gl/RouteCamera";
import HundredMetresCamera from "components/maps/mapbox-gl/HundredMetresCamera";
import Resume from "../components/resume/Resume";
import Head from "next/head";
import Image from "next/image";
import Skills, { SkillProgressBar } from "../components/skill/Skills";
import ServiceTow from "../components/services/grid/ServiceTow";
import BrandClientSwiper from "../components/brand-client/BrandClientSwiper";
import ArchaicOlympics from "components/maps/mapbox-gl/ArchaicOlympics";
import {
  Equation,
  EquationEvaluate,
  EquationContext,
  EquationOptions,
  defaultErrorHandler,
} from "react-equation";
import { defaultVariables, defaultFunctions } from "equation-resolver";

function Home() {
  TitleSection.defaultProps = {
    classDesc: "line-shape line-shape-before",
    classDesInner: "line-bg-right",
  };

  return (
    <Layout
      modelRight={{
        children: <ModalContact />,
        propsModal: { textBtn: "Contact" },
      }}
    >
      <Head>
        <title>FullScreen</title>
        <HeaderFull
          className="dsn-container"
          heroContent={headerData}
          overlay={5}
          fullWidth
        >
          <p className="mt-20 max-w570">
            What does it mean to be the fastest man, in the present and in
            perpetuity till heat death of the universe ? The core requirements
            for recorded time to be recognized are a maximum wind speed of 2m/s,
            an altitude below 1000m and the use of Fully Automated Timing.
          </p>
        </HeaderFull>
      </Head>
      <SliderPortfolio
        webgel
        fullWidth
        className={"align-items-end pb-80"}
        webgelOptions={{
          displacement: "/img/displacement/8.jpg",
          speedIn: 3.5,
        }}
        metaData={{ hasSeparator: true }}
      />
      <HeroSection
        className="container section-margin  fill-right-container"
        data-dsn-title="Defination"
      />

      <div className="flex container resize z-10">
        <ArchaicOlympics />
      </div>

      <div
        className="relative container section-margin justify-items-start"
        data-dsn-title="Divinity"
      >
        <p className="sub-heading line-bg-left mb-15 text-uppercase">
          A discourse on the magnificent Divinity of the Spectacular Dash
        </p>

        <DsnGrid col={2}>
          <div className="box-left">
            <p className="text-justify max-w570 dsn-up mb-15 ">
              The fact that sports form a sizeable chunck of our daily
              activities and the economy should be a clear indicator of the role
              they play in defining homo sapiens. The two quintissential
              abilities of delaying gratification and believing enabled the
              invention of the concept of sports. The Bar Headed Goose flies
              once a year, way above the mountains in the Himalayas, in a 19
              hour non stop grueling exercise all in effort to reach the
              breeding grounds. One would imagine that the geese would somehow
              take measures to prepare themselves for the journey, but alas,
              they do not even know what they will have for breakfast before
              flying. Why is it that, when lions or leopards hunt, they try by
              no means to make the process an optimal and private affair ? Other
              than humans, all the other apex predators are primed to maintain
              an environment of terror, they have to persistantly announce their
              abilities. Do animals actually teach their young the tricks to
              their trade ? If teaching is defined as an exercise whereby
              instructions are transmitted between two individuals with remedial
              action being assumed to rectify misunderstandings. Adult animals
              unreservedly show their young how to complete some tasks but do
              not offer solutions for cases beyond the normal. A lion cub with
              shorter than average nails will not receive instructions on
              hunting for lions with shorter than average nails nor does it
              receive homework.
            </p>

            <p className="text-justify max-w570 dsn-up mb-15 ">
              Human knowledge is an aggregate of information acquired from self
              experiences, information necessary to exist and function in a
              society and intuition. Consider an experiment comparing the
              efficiency of a human bank teller and an atm. When presented with
              a dirty and unacceptable bill, both are expected to reject it. If
              it so happens, that the individual presenting the note makes an
              effort to clean the note, and retried submitting it, the human
              teller could react in a number of ways but the atm, having sensors
              installed, will always reject the bill as long as the sensors
              detect something. Human society is based on our ability to believe
              things and this is well illustrated in language. Languages can
              only exist if speakers agree on and believe that a specific word
              signifies a specific thing. Only through belief are we able to
              construct sophisticated entities from countries, armies,
              currencies, time, religion and a lot more. If an individual
              claimed that the state of Germany did not exist, which is true in
              the realistic sense, they would still be flagged as insane.
            </p>
          </div>
          <div className="box-right">
            <p className="text-justify max-w570 dsn-up mb-15 ">
              The true origin of the Olympics is a ridiculus adventure whose
              specifics serve no role explaining the reason why they happened.
              The origin story can only shed light on why they first did it, but
              not why it continued and flourished into the behemoth it has
              become. Humans have throughout existence, participated in various
              games and festivities which can all be categorically rejected as
              instances of sport. The probability of a million in one event
              occuring is once every 30 days, if events are experienced at a
              rate of an instance per second for an individual who has a wake
              period of 8 hours. Despite witnessing people running fast or
              making amazing catches, the same reverence is not awarded to these
              events as compared to sports. A sport requires the presense of
              umpires who in theory, understand the rules of the sport and
              enforce the upkeep of rules and administer punishments for
              infractions. Participating in a sport requires one to train, one
              to forgoe available pleasures, to practice, to understand the
              sport in order to win.
            </p>

            <p className="text-justify max-w570 dsn-up mb-15 ">
              The Olympics were a far much bigger deal in the past. So fabulous
              where sprinters that, each four year period on the calender was
              named after the reigning champion. In the case where men had been
              exchanging volleys of atrocities, they ceased the carnage in order
              to compete. The fact that the competitions were a cruscendo to
              some delightful religious festivals definately contributed to the
              longevity of the event. Whilst the modern world rewards champions
              with material gains, such a system was untenable in the ancient
              times. Diagoras, a man declared by some, to be the happiest
              individual who has ever lived, achieved so, through olympic
              victory. Diagoras was a defending champion in Stadion (foot race),
              Tethrippon (chariot race) and Boxing (pygmachia). When his eldest
              managed to achieve the same and improve his record, Diagoras had
              every reason to be living carelessely. In the next games, the same
              event happened, only this time, it was his second oldest son. As
              he was perched high on the shoulders of spectactors, an oracle
              informed him that he had achieved the highest possible state of
              happiness and dying was quitting whilst still ahead. So he died.
            </p>

            <p className="text-justify max-w570 dsn-up">
              All these facts are not sufficient to explain for the continous
              existence of the event for more than 700 years. Most sports
              require some prior knowledge or investment in understanding the
              rules in order for the person to enjoy or follow the sport. If one
              has no grasp of cricket, they would not be able to comprehend that
              they are watching a game that might last a whole week. In stark
              constrast to other predators that show strength through terror
              regimes, human beings show strength in struggle. If killing people
              is considered to have been the sole point of gladiator games,
              constructing large collesiums flies against reason. The
              fascination with agonal activities should be expected in humans
              due to our need to constantly update our beliefs. Adult men
              dashing towards some destination in a spectacular fashion because.
              they have trained for it whilst bringing with them all that is
              left in their tank, is hard to look away from. Every other sport
              requires some prior familiarity with rules before one can
              comprehend reality, let alone enjoy it. The simple nature of of
              the dash is a testament to its inherent divine origin and eternal
              nature.
            </p>
          </div>
        </DsnGrid>
        <List
          className="pt-50 mt-50 border-top mt-md-30 pt-md-30"
          col={3}
          iconSize="20px"
        >
          <List.item
            icon={<FontAwesomeIcon icon={faCheck} className="theme-color" />}
            className="align-items-center"
          >
            Advanced Grid
          </List.item>
          <List.item
            icon={<FontAwesomeIcon icon={faCheck} className="theme-color" />}
            className="align-items-center"
          >
            Top Performance
          </List.item>
          <List.item
            icon={<FontAwesomeIcon icon={faCheck} className="theme-color" />}
            className="align-items-center"
          >
            Responsive Design
          </List.item>
        </List>
      </div>

      <div className="fixed flex container mx-auto p-0 m-0 box-border resize antialiased">
        <Dimensions />
      </div>

      {/*Start Blog*/}
      <div className="section-margin" data-dsn-title="Fundamentals">
        <TitleSection
          className={`container  align-items-center text-center`}
          description={"Fundamentals of Sprinting"}
        >
          Basis for
          <br />
          Recognition
        </TitleSection>
        <BlogSwiper
          className="dsn-container"
          grabCursor
          desktop={{ spaceBetween: 50, slidesPerView: 1.5 }}
          tablet={{ spaceBetween: 30, slidesPerView: 1.3 }}
          mobile={{ spaceBetween: 0, slidesPerView: 1 }}
          centeredSlides
          loop
          blur
          parallax
          speed={1200}
          watchSlidesProgress
          loopedSlides={2}
          parallaxImage={{ "data-swiper-parallax-scale": "0.85" }}
          parallaxContent={{ "data-swiper-parallax-opacity": "0.5" }}
        >
          <SwiperPagination
            className={`justify-content-between dsn-container mt-30`}
          />
        </BlogSwiper>
      </div>

      {/*<!-- ========== End About Section ========== */}

      {/*<!-- ========== box-gallery-vertical image left ========== */}
      <DsnGrid
        className="p-relative mt-section over-hidden"
        col={2}
        colTablet={1}
        colGap={0}
        rowGap={0}
        data-dsn-title="Feature"
      >
        <div className="box-img">
          <ParallaxImage alt="" src={"/img/rachel-claire.jpg"} height="100%" />
        </div>
        <div className="box-info box-padding background-section">
          <TitleSection
            className={"mb-50"}
            defaultSpace={false}
            description="Some Feature"
          >
            We combine design and thinking and technical craft.
          </TitleSection>
          <p className="max-w570 dsn-up mb-10 ">
            When our team provides design and digital marketing. Applied arts
            can include industrial design, graphic design,
          </p>

          <p className="max-w570 dsn-up">
            {" "}
            fashion design, and the decorative arts which traditionally includes
            craft objects.
          </p>

          <div className="border-bottom mt-30 mb-30" />
          <List className="pb-30 border-bottom" col={1} rowGap={30}>
            <ListItem
              number="1"
              headingTag="span"
              headingTitle="sm-title-block"
            >
              Next level Business consulting services
            </ListItem>
            <ListItem
              number="2"
              headingTag="span"
              headingTitle="sm-title-block"
            >
              Marketing strategies & Digital marketing
            </ListItem>
            <ListItem
              number="3"
              headingTag="span"
              headingTitle="sm-title-block"
            >
              Management & Strong Strategies
            </ListItem>
          </List>
          <Button
            href={"/services"}
            className="background-theme mt-30"
            borderStyle={false}
            borderRadius
          >
            View More <span className="icon">⟶</span>
          </Button>
        </div>
      </DsnGrid>
      {/*<!-- ========== End box-gallery-vertical image left ========== */}
      <DsnGrid
        className="p-relative mb-section over-hidden"
        col={2}
        colTablet={1}
        colGap={0}
        rowGap={0}
      >
        <div className="box-info box-padding background-section order-md-2">
          <TitleSection
            className={"mb-50"}
            defaultSpace={false}
            description="Some Feature"
          >
            Financing solutions .
          </TitleSection>

          <p className="max-w570 dsn-up">
            A business consulting agency is involved in the planning,
            implementation, and education of businesses. We work directly with
            business owners on developing a business plan, identifying marketing
            needs and developing the necessary skills for business ownership.
          </p>

          <div className="border-bottom mt-30 mb-30" />
          <Accordion className={"pb-30 border-bottom"}>
            <AccordionItem
              title="Website & Mobile App Design"
              active
              number={1}
            >
              <p>
                We’ve created a full-stack structure for our working workflow
                processes, were from the funny the century initial all the made,
                have spare to negatives.
              </p>
            </AccordionItem>
            <AccordionItem title="User Experience" number={2}>
              <p>
                We’ve created a full-stack structure for our working workflow
                processes, were from the funny the century initial all the made,
                have spare to negatives.
              </p>
            </AccordionItem>
          </Accordion>
          <Button
            href={"/services"}
            className="background-theme mt-30"
            borderStyle={false}
            borderRadius
          >
            View More <span className="icon">⟶</span>
          </Button>
        </div>
        <div className="box-img order-md-1">
          <ParallaxImage
            alt=""
            src={"/img/project/project2/4.jpg"}
            height="100%"
          />
        </div>
      </DsnGrid>

      {/*<!-- ========== box-gallery-vertical image right ========== */}

      <section className="fixed mx-auto flex w-full h-full box-border justify-center m-0 p-0 resize antialiased">
        <div className="relative flex-auto align-center container">
          <HundredMetresCamera className="flex touch-none" />
        </div>
      </section>

      <section
        className="section-padding  background-section"
        data-dsn-title="The Fastest Hundred"
      >
        <div className="container">
          <TitleSection description="WCA Berlin 2009">9.58s</TitleSection>
          <DsnGrid col={2}>
            <Resume title="Defination">
              <Resume.item title="Fastest">
                <p className="max-w570"></p>
              </Resume.item>

              <Resume.item title="Parameter Legality">
                <p className="max-w570">
                  What does it mean to be the fastest man in the world or known
                  universe ? Are the differences in body physiological variables
                  important ? Every other senior mens 100m champion has been of
                  average height of 180cm and consequently, has simulataneously
                  held the Indoor 60m and Olympic titles, except for Bolt, who
                  held the 100m, 150m, 200m and 300m records and the fastest
                  ever top speed achieved by a human being.Were innovations in
                  new synthetic materials for track surfaces responsible for the
                  unprecedented increase in sub 10s performances ? A maximum
                  speed of 2m/s and an altitude below 1000m and the use of fully
                  automated timing systems form the basic requirements for any
                  mark to be deemed legal. 11april2012exceed 2 m/s in speed.
                  Actually, wind gaugeaccuracy is a forgotten issue in
                  athletics, andfor all the trumpeted accuracy to a thousandthof
                  a second in electronic timing and in windspeed limits to a
                  tenth of a second, theaccuracy of wind speed measurements
                  maybe no better than 0.2–0.5 m/s because onlya single
                  anemometer is used and wind speedsvary with position on the
                  track3.Many world records have takenadvantage of following
                  winds. The mostnotorious set of world records in sprintsand
                  horizontal jumps were those set at theMexico Olympics in 1968
                  where the windgauge always seemed to record 2 m/s when aworld
                  record was broken! But this is certainlynot the case for
                  Bolt’s record runs. In Berlinhis 9.58 s time benefited from
                  only a modest0.9 m/s tailwind and in Beijing there was
                  nilwind, so he has a lot more still to gain fromadvantageous
                  wind conditions.Many years ago, I worked out4 how theranking
                  list of the best 100 m times is changedby wind. Interestingly,
                  the then world recordholder, Maurice Greene, was not the
                  fastestwhen his very advantageous following windwas taken into
                  account. That honour fell toFrankie Fredericks.The drag force
                  on a runner moving atspeed V with wind speed W (a tailwind
                  hasa positive W and a headwind has a negativeone) isD = –rcA(V
                  – W) 2 (1)where r is the air density, A is the frontal
                  areapresented by the athlete in the direction ofmotion, and c
                  is the drag factor (determinedby what he is wearing). For a
                  typical athlete,about 3% of his effort is expended beatingwind
                  drag and, assuming the 100 m is run atUsain Bolt crosses the
                  finishing line of the 200m in Beijing with a world record time
                  of 19.30 seconds. Photo: Ullsteinbild/TopFotoWind gauge
                  accuracy is aforgotten issue in athletics onstant speed (it is
                  not) the running time inseconds, T(W), achieved when the wind
                  speedis W m/s is related to that expected when thewind speed
                  is zero, T(0), byT(W = 0)= [1.03 – 0.03(1 – WT(W)/100)2 ] ×
                  T(W)A 2 m/s tailwind is worth about 0.11 scompared to a nil
                  wind performance at a low-altitude site. This means that there
                  was 0.06 sassistance for Bolt’s Berlin record because ofits
                  0.9 m/s tailwind. So if Bolt could combinea tough but
                  achievable 0.12 s reaction timewith a maximum allowable wind
                  assistance,he could transform the 9.58 s he achieved inBerlin
                  to 9.50 s. And if he could attain thetheoretical limiting
                  reaction time of 0.10 s withthe theoretical maximum wind
                  assistance, hewould be looking at around 9.48 s.The third
                  factor that can help Bolt recordfaster times is the
                  possibility of reducing thedensity of air that enters into the
                  drag formulain equation (1). The simplest way to achievethis
                  is to run at high altitude. Out of the 199 recorded sub 10s,
                  only 36 have occured in the Southern Hemisphere with the
                  average event occuring in the summer and autumn months of the
                  Northern Hemisphere. The list of the 50 fastest times ever
                  recorded is exclusively made up of performances assisted by a
                  tailwind. Bolt has an inequality that leads to him covering
                  more ground with this left foot.
                </p>
              </Resume.item>

              <Resume.item title="Revision of Records">
                <p className="max-w570">
                  {" "}
                  Usain Bolt improved the 100m sprint record three times,from
                  9.74s to 9.58s. The last time any man had run a sub 9.71s was
                  back in 88 in Seoul by Ben Johnson but was flagged as invalid
                  due to performance enhancement drugs. Bolt contributed a
                  whooping 0.37s which gives him the biggest ever contribution
                  to the improvement of the record by a mind numbing 3.72s.
                  Increase in time-keeping accuracy contributed a 0.5s
                  improvement in the record. Usain Bolt is the only athlete to
                  have improved the record multiple times, 3 times compared to
                  single instances by 10 other athletes over the last 40 years.
                  The 200m record was revised 6 times, from 19.83s to 19.19s
                  over a period of 40 years, with six different athlelets
                  numerically equally contributing to the record. Bolt made a
                  larger improvement to the 200m of 3.33% making him the first
                  athlete,in 30 years, to run be In the last four years Usain
                  Bolt improved the world record in the 100 m sprint three
                  times, from 9.74 s to 9.58 s. Over the last 40 years this
                  record has been revised up to thirteen times from 9.95 s to
                  9.58 s. The improvement equals 0.37 s (from 1968 to 2009)
                  which is an increase in performance of 3.72%. By comparison,
                  during the same time period, the 200 m world record was
                  revised six times from 19.83 s to 19.19 s what amounts to 3.33
                  % which seemingly contradicts the fact that, it is the only
                  record with a high probability of being improved in the
                  future. If one were to consider every single recorded athlete
                  to have participated in the Olympics, in both the Ancient and
                  Modern Olympics, no one has managed to achieve anything
                  remotely close to the salubrious and magneficent Tripple
                  Tripple. The closest ever performance was the one by Diagoras
                  of Rhodes, who together with his two sons, managed to win
                  consecutive titles in boxing (pygmachia), the stadion (sprint
                  race) and the Hiplotodromus, a sprint race in full military
                  fatigue. Whilst celebrating his second sons victory, perched
                  on the shoulders of his comrades, it is said that an oracle
                  came to him and whispered to him, that dying instantly would
                  be the most reasonable as he will never be as happy again.
                  Diagoras took this message earnestly and died, at his
                  happiest. The last time someone performed miracles at the
                  Olympics, they died and yet Bolt still roams around the
                  streets of Kingston.
                </p>
              </Resume.item>
            </Resume>

            <Resume title="Adjusted Time">
              <Resume.item title="Time Correction">
                <h6>Omission</h6>
                <p className="max-w570 mt-10">
                  The global timer starts the clock as soon as the gun goes off.
                  Anticipating the gun is discouraged through enforcement of the
                  false start. A reaction time legality starts at 0.1s and is
                  relevant only in certifying a fair start. The actual true time
                  that it takes an athlete to complete the race is lower and
                  even more so in slower athletes. Bolt recorded 9.58s after
                  spending 0.146s in the blocks which adjusts his true legal
                  time to 9.434s.
                </p>
              </Resume.item>

              <Resume.item title="Drive">
                <h6>Acceleration</h6>
                <p className="max-w570 mt-10">
                  Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin
                  vitae nulla tristique, ornare felis id, congue libero. Nam
                  volutpat euismod quam.
                </p>
              </Resume.item>

              <Resume.item title="Freelancer">
                <h6>Acceleration</h6>
                <p className="max-w570 mt-10">
                  Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin
                  vitae nulla tristique, ornare felis id, congue libero. Nam
                  volutpat euismod quam.
                </p>
              </Resume.item>

              <Resume.item title="Freelancer">
                <h6>Acceleration</h6>
                <p className="max-w570 mt-10">
                  Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin
                  vitae nulla tristique, ornare felis id, congue libero. Nam
                  volutpat euismod quam.
                </p>
              </Resume.item>

              <Resume.item title="Freelancer">
                <h6>Acceleration</h6>
                <p className="max-w570 mt-10">
                  Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin
                  vitae nulla tristique, ornare felis id, congue libero. Nam
                  volutpat euismod quam.
                </p>
              </Resume.item>
            </Resume>
          </DsnGrid>
        </div>
      </section>

      <section className="relative mx-auto flex w-full h-full box-border justify-center m-0 p-0 resize antialiased">
        <div className="relative flex-auto align-center container">
          <AllTimesHundredFilter className="flex touch-none" />
        </div>
      </section>

      <ParallaxImage
        alt={""}
        src={
          "/img/fullscreen/sprint-running/jamaicas-usain-bolt-crosses-the-fin.jpg"
        }
        height={"80vh"}
        parallaxFrom={{ scale: 1.3 }}
        parallax={{ scale: 1 }}
        overlay={5}
      />
      <HeaderNormal container={"container"}>
        <h1 className="title text-uppercase">The Limit of Performance</h1>
      </HeaderNormal>

      <section className="fixed mx-auto flex w-full h-full box-border justify-center m-0 p-0 resize antialiased">
        <div className="relative flex-auto align-center container">
          <BerlinHundredHeat className="flex touch-none" />
        </div>
      </section>

      <div
        className="container section-margin"
        data-dsn-title="Law of Miracles"
      >
        <p className="sub-heading line-bg-left mb-15 text-uppercase">
          Why 9.58s is the fastest ever time to be recorded, now, and in
          perpetuity till heat death of the universe
        </p>
        <DsnGrid col={2}>
          <div className="box-left">
            <p className="max-w570 dsn-up mb-15 ">
              Its prudent to expert improvements in any record to exhibit
              decreasing changes over time. The average sprinter is as tall as
              the average man, another straightforward expectation. What would
              happen, in the case that an individual taller than 2.0m, ran as
              fast as Usain Bolt ? The ground reaction forces generated by these
              dimensions are on the threshold of bone fracture. The maximum
              possible output force for a muscle is best modelled as being
              proportional to physiological cross-sectional area. Given a
              population of individuals, for those similar, a proportional
              relationship of the linear dimensions is expected which means,
              body mass is proportional to height cubed and mass density to be
              proportional to height squared and relative mass strength to be
              inversely proportional to height. Explicitly expressed, we would
              expect RMS to decrease with increasing height. An individual
              taller than Bolt but with the same BMI would experience
              difficulties in standing still. Standing still involves postural
              sway or reference point migration of the center of mass through
              small high frequency oscillations of the body. The reason humans
              do not fall over is due to the continous stabilization process
              that maintains equilibrium relative to slowly changing positions.
              The underlying conlusion of Bayesian Statistics is that, the more
              unexpected a result is, the more belief we should place in it
              actually occuring. Littlewoods Law is a formalization of the
              seemingly paradoxical nature of probabilities. In the course of a
              given persons life, miracles occur at a rate of one per month.
              Assuming that individuals experience reality at a rate of 1 event
              every second and the individual is awake for 8 hours per day,
              30,000 events will be registered every day and a million each
              month. If an event that happens once in a million times, the
              result would be the expectation of witnessing a miracle at least
              once a month.
            </p>

            <p className="max-w570 dsn-up">
              As it walks or runs, an animal periodically accelerates both its
              limbs and its center of gravity. These accelerations require the
              coordinated application of forces by muscles and skeletal
              `springs', and the mechanical and neural coordination of these
              forces can be complex. In turn, the acceleration of the body's
              various masses and the contraction of muscles place stresses on an
              organism's skeleton that can be potentially harmful. The metabolic
              demands of locomotion vary with the morphology, size, speed and
              gait of the animal.
            </p>
          </div>
          <div className="box-right">
            <p className="max-w570 dsn-up mb-15 ">
              Of all the athletes who have tested positive for some banned
              substance, only one, Ben Johnson, actually managed to break and
              massively improve the world record. He improved the record by
              0.26s, the greatest ever improvement of the record by a single
              individual. Even though the record lasted for a single day, it
              took humanity another 20 years before someone could break it and
              as we speak, only 4 athletes have ever run faster than the mark
              set by Ben Johnson. Unlike Ben, every other top athlete, including
              the likes of Justin Gatlin, Asafa Powell, Tyson Gay, Yohan Blake,
              Linford Christie, Carl Lewis, Treyvon Bommel, Christian Coleman,
              all who have
            </p>

            <p className="max-w570 dsn-up">
              Drugs have biologial targets which means that, its the biological
              acumen and not necessarily the drug. Taking drugs is starkly
              different from adding a propellor to a rowing boat.
            </p>
          </div>
        </DsnGrid>
      </div>

      <section className="flex relative section-padding box-border box-sizing resize !pt-0 md:!pt-16 sm:!pt-16">
        <div className="flex w-full items-start justify-between md:flex-col">
          <div className="w-1/2 lg:hidden md:inline-block md:w-full"></div>
          <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
            <p className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"></p>
            <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="mt-2 flex items-center self-start lg:self-center"></div>
          </div>
        </div>
      </section>

      <section
        className="section-padding  background-section"
        data-dsn-title="WCA London"
      >
        <div className="container">
          <TitleSection description="WCA London">Last Race</TitleSection>
          <DsnGrid col={2}>
            <Resume title="Competition">
              <Resume.item title="Lineup">
                <p className="max-w570"></p>
              </Resume.item>

              <Resume.item title="Favourites">
                <p className="max-w570">
                  This was the last opportunity any sprinter had in achieving
                  the esteemed dream of defeating Usain Bolt in a race. During
                  that season, Bolt had averaged 9.95s and was competing against
                  a respectable lineup consisting of Simbine, de Grasse, Gatlin,
                  Coleman, Blake who had all posted marks faster than 9.80s.
                  Another brilliant athlete, Su Bingtin from PCR, who was still
                  a regular at the time, later on became the first Asian athlete
                  to run a sub 10s.
                </p>
              </Resume.item>

              <Resume.item title="Retirement">
                <p className="max-w570">
                  After Rio 2016, Usain Bolt wept for there was no other way he
                  could win. He performed consistantly throughout his carrear
                  with age seeming to play no role. The varince in his
                  performance was largely dependent on his weight and the
                  tailwind speed. Its no suprise that, he ran the fastest, on
                  the race he had the highest allowed tailwind. Had it not been
                  for that one factor, predictions suggest that the 9.58s would
                  have been set in Beijing 2015 instead of Berlin 2009.
                </p>
              </Resume.item>
            </Resume>

            <Resume title="Adjusted Time">
              <Resume.item title="Time Correction">
                <h6>Omission</h6>
                <p className="max-w570 mt-10">
                  The global timer starts the clock as soon as the gun goes off.
                  Anticipating the gun is discouraged through enforcement of the
                  false start. A reaction time legality starts at 0.1s and is
                  relevant only in certifying a fair start. The actual true time
                  that it takes an athlete to complete the race is lower and
                  even more so in slower athletes. Bolt recorded 9.58s after
                  spending 0.146s in the blocks which adjusts his true legal
                  time to 9.434s.
                </p>
              </Resume.item>

              <Resume.item title="Drive">
                <h6>Acceleration</h6>
                <p className="max-w570 mt-10">
                  Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin
                  vitae nulla tristique, ornare felis id, congue libero. Nam
                  volutpat euismod quam.
                </p>
              </Resume.item>

              <Resume.item title="Freelancer">
                <h6>DDB Athens ( Tribal )</h6>
              </Resume.item>
            </Resume>
          </DsnGrid>
        </div>
      </section>

      {/*<!-- ========== Usain Bolt Body Dimensions ========== */}
      <section className="about-section-2 section-margin">
        <div className="container">
          <DsnGrid col={2} colTablet={1}>
            <div className="box-img p-relative">
              <div className="box-inner-img p-absolute">
                <HumanBody />
              </div>
              <div className="box-inner-img p-absolute">
                <Image
                  className={"cover-bg-img"}
                  src="/img/fullscreen/gifs/usain-bolt-comparison.gif"
                  alt=""
                  fill
                />
              </div>
            </div>
            <div className="box-information">
              <TitleSection
                className="align-items-start mb-50"
                description="Is it wrong to be strong"
                defaultSpace={false}
              ></TitleSection>
              <p className="mb-30">
                Most people assume that, had Usain Bolt apparently not
                celebrated, he would have recorded a faster mark. 9.69s was
                extremely fast for that day and it came as a shock to everyone.
                Usain Bolt had only transitioned to 100m sprinting just 8 months
                before the event and it was the very first of 3 occasions that
                any athlete had run sub 9.7s.
              </p>
              <Skills>
                <SkillProgressBar number={85}>Height</SkillProgressBar>
                <SkillProgressBar number={72}>
                  SEO, analytics & marketing
                </SkillProgressBar>
                <SkillProgressBar number={89}>
                  {" "}
                  Mobile Development
                </SkillProgressBar>
                <SkillProgressBar number={89}>
                  {" "}
                  Mobile Development
                </SkillProgressBar>
                <SkillProgressBar number={89}>
                  {" "}
                  Mobile Development
                </SkillProgressBar>
              </Skills>
            </div>
          </DsnGrid>
        </div>
      </section>

      <HeaderNormal container={"container"}>
        <h1 className="title text-uppercase">
          Performance Enhancement Drugs
          <br /> and Bioethics
        </h1>
      </HeaderNormal>

      <div className="container section-margin" data-dsn-title="Enhancement">
        <p className="sub-heading line-bg-left mb-15 text-uppercase">
          Why we should consider lifting the ban on doping
        </p>
        <DsnGrid col={2}>
          <div className="box-left">
            <p className="max-w570 dsn-up mb-15 ">
              The Sunday Times in collaboration with ARD, a german broadcaster,
              carried out an investigation and figured out that up to 33% of all
              medalists, participating in the World Championships and Olympics
              in the period between 2001 and 2012 had used performance
              enhancement drugs. All the 10 finalists of the Seoul 1988 Senior
              Mens 100m race tested positive for some drug, but Ben Johnson was
              singled out as having used the needle a little more than anyone
              else. The list of the 30 fastest 100m marks ever recorded, is made
              up of 29 men who have all been banned at some point in their
              carrear for abuse of some unscheduled drug. Zero tolerance policy
              means that judgements and punishments are regularly passed for
              positive tests that occured during the time in which the drug had
              not yet been disaproved. One of Usain Bolts medals has an
              extremely high chance of being rescinded because two of his team
              mates, Yohan Blake and Nestar Carter, tested positive for
              Methylhexanamine in 2009, a nasal decongestant, which is still not
              officially banned, but contains similar properties to a listed
              substance called tuaminoheptane.
            </p>

            <p className="max-w570 dsn-up">
              Shawn Crawford had his records rescinded in 2014, and was banned
              for 24 months even though he was retired. According to his coach,
              Crawford had retired after failing to qualify for the London 2012
              Olympics, information that was not forwarded to officials, who
              where shocked when they missed him three times at his old address
              in 18 months. Missing a random test is a cardinal sin by Olympic
              standards and Crawford was appropiately punished for his
              complacency and had his records wiped out. Steve Mullings, a
              sprinter of Jamaica who ran an altitude and wind legal mark of
              9.80s, failed just two tests, tested positive for testosterone and
              furosemide. Steve Mullings was given a life time ban from
              athletics and his 9.80s, which had been etched into stone as the
              8th fastest ever time, was wiped clean. Only one athlete, Tyson
              Gay, tested positive and fully coorperated with investigators
              which led to an amicable arrangement whereby, the length of his
              ban was reduced from 18 to 9months, he got to keep his records and
              most importantly, the substance in question was not disclosed to
              the public.
            </p>
          </div>
          <div className="box-right">
            <p className="max-w570 dsn-up mb-15 ">
              Of all the athletes who have tested positive for some banned
              substance, only one, Ben Johnson, actually managed to break and
              massively improve the world record. He improved the record by
              0.26s, the greatest ever improvement of the record by a single
              individual. Even though the record lasted for a single day, it
              took humanity another 20 years before someone could break it and
              as we speak, only 4 athletes have ever run faster than the mark
              set by Ben Johnson. Unlike Ben, every other top athlete, including
              the likes of Justin Gatlin, Asafa Powell, Tyson Gay, Yohan Blake,
              Linford Christie, Carl Lewis, Treyvon Bommel, Christian Coleman,
              all who have
            </p>

            <p className="max-w570 dsn-up">
              Drugs have biologial targets which means that, its the biological
              acumen and not necessarily the drug. Taking drugs is starkly
              different from adding a propellor to a rowing boat.
            </p>
          </div>
        </DsnGrid>
      </div>

      <div className="container section-margin" data-dsn-title="Our Services">
        <TitleSection description={"Our Services"}>
          Let’s Check Our <br /> Services
        </TitleSection>
        <ServiceTow className={"icon-left"} />
      </div>

      <div className="news-content mb-section mt-40">
        <div className="single-post container post-content  ">
          <h3>Dynamics</h3>

          <div>
            <h3>Analytical Solution to Bolts equation of motion</h3>
            <Equation
              value="u(t) = AB(1 - e^(-kt))/ (A + Be^(-kt))"
              errorHandler={defaultErrorHandler}
            />
          </div>
          <p>
            Mauris ut augue ac ligula commodo pretium. Cras aliquet nec purus et
            imperdiet. Donec tempor tellus ut tortor finibus, ut convallis elit
            eleifend. Etiam aliquet molestie lobortis. Morbi tempor auctor
            semper. Maecenas cursus maximus erat, tincidunt venenatis odio
            molestie tempor. Fusce sagittis leo porta dolor auctor viverra eu a
            ante. Suspendisse tristique nulla quis augue suscipit facilisis.
            Proin tincidunt, sapien sit amet malesuada scelerisque, metus dolor
            ultricies quam, vitae lobortis mauris eros non enim. Aliquam et quam
            eget mauris lacinia aliquam. Fusce vitae massa sed nisl ultrices
            imperdiet. Integer vehicula sapien eros, in bibendum sem pretium
            vitae. Nulla tempor dapibus elit, nec tempus tortor commodo
            sagittis. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </p>

          <h3>Extreme Value Theory</h3>
          <p>
            Mauris ut augue ac ligula commodo pretium. Cras aliquet nec purus et
            imperdiet. Donec tempor tellus ut tortor finibus, ut convallis elit
            eleifend. Etiam aliquet molestie lobortis. Morbi tempor auctor
            semper. Maecenas cursus maximus erat, tincidunt venenatis odio
            molestie tempor. Fusce sagittis leo porta dolor auctor viverra eu a
            ante. Suspendisse tristique nulla quis augue suscipit facilisis.
            Proin tincidunt, sapien sit amet malesuada scelerisque, metus dolor
            ultricies quam, vitae lobortis mauris eros non enim. Aliquam et quam
            eget mauris lacinia aliquam. Fusce vitae massa sed nisl ultrices
            imperdiet. Integer vehicula sapien eros, in bibendum sem pretium
            vitae. Nulla tempor dapibus elit, nec tempus tortor commodo
            sagittis. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </p>

          <h3>Threshold Theory</h3>
          <p>
            Mauris ut augue ac ligula commodo pretium. Cras aliquet nec purus et
            imperdiet. Donec tempor tellus ut tortor finibus, ut convallis elit
            eleifend. Etiam aliquet molestie lobortis. Morbi tempor auctor
            semper. Maecenas cursus maximus erat, tincidunt venenatis odio
            molestie tempor. Fusce sagittis leo porta dolor auctor viverra eu a
            ante. Suspendisse tristique nulla quis augue suscipit facilisis.
            Proin tincidunt, sapien sit amet malesuada scelerisque, metus dolor
            ultricies quam, vitae lobortis mauris eros non enim. Aliquam et quam
            eget mauris lacinia aliquam. Fusce vitae massa sed nisl ultrices
            imperdiet. Integer vehicula sapien eros, in bibendum sem pretium
            vitae. Nulla tempor dapibus elit, nec tempus tortor commodo
            sagittis. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </p>

          <h3>Theory of Records</h3>
          <p>
            Mauris ut augue ac ligula commodo pretium. Cras aliquet nec purus et
            imperdiet. Donec tempor tellus ut tortor finibus, ut convallis elit
            eleifend. Etiam aliquet molestie lobortis. Morbi tempor auctor
            semper. Maecenas cursus maximus erat, tincidunt venenatis odio
            molestie tempor. Fusce sagittis leo porta dolor auctor viverra eu a
            ante. Suspendisse tristique nulla quis augue suscipit facilisis.
            Proin tincidunt, sapien sit amet malesuada scelerisque, metus dolor
            ultricies quam, vitae lobortis mauris eros non enim. Aliquam et quam
            eget mauris lacinia aliquam. Fusce vitae massa sed nisl ultrices
            imperdiet. Integer vehicula sapien eros, in bibendum sem pretium
            vitae. Nulla tempor dapibus elit, nec tempus tortor commodo
            sagittis. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </p>

          <blockquote className="block-quote">
            <p>
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word “and” and the Little Blind Text should turn around and return
              to its own, safe country.
            </p>
          </blockquote>
          {/*Start Box Info Center Content*/}
          <div className="p-relative v-dark-head text-center">
            <ParallaxImage
              src="/img/blog/2.jpg"
              overlay={4}
              height={"80vh"}
              alt={""}
            />
            <div className="v-middle z-index-1">
              <ButtonPopup href="/videos/UsainBoltvUsainBolt.mp4" />
            </div>
          </div>
          {/*End Box Info Center Content*/}

          <div
            className="container section-margin"
            data-dsn-title="My Services"
          >
            <TitleSection
              className="align-items-center text-center"
              description={"{ Our Services }"}
            >
              We are delivering beautiful <br /> digital products for you.
            </TitleSection>
            <ServiceOne />
          </div>

          <h3>Energy Metabolism Theory</h3>
          <p>
            Nunc finibus blandit interdum. Pellentesque nec dapibus mauris, a
            placerat risus. Nullam pretium neque in justo rutrum, eu lacinia
            nibh placerat. Sed et magna metus. Sed ut lacus tincidunt nisi
            volutpat luctus. Integer eget nulla vitae nisl convallis cursus.
            Vivamus vel finibus purus. Duis pulvinar, dui nec dignissim semper,
            nibh elit finibus leo, quis feugiat arcu urna ut felis. Cras est
            risus, dapibus sed arcu at, porta blandit felis. Quisque maximus
            ante vel risus tristique aliquet. Mauris facilisis nisi nec ipsum
            feugiat pharetra. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Praesent aliquam augue
            diam, a lacinia est ornare ut. In mauris elit, elementum porttitor
            placerat a, ornare in elit. Praesent id tortor arcu.
          </p>

          <h3>Kinematics</h3>
          <p>
            Nunc finibus blandit interdum. Pellentesque nec dapibus mauris, a
            placerat risus. Nullam pretium neque in justo rutrum, eu lacinia
            nibh placerat. Sed et magna metus. Sed ut lacus tincidunt nisi
            volutpat luctus. Integer eget nulla vitae nisl convallis cursus.
            Vivamus vel finibus purus. Duis pulvinar, dui nec dignissim semper,
            nibh elit finibus leo, quis feugiat arcu urna ut felis. Cras est
            risus, dapibus sed arcu at, porta blandit felis. Quisque maximus
            ante vel risus tristique aliquet. Mauris facilisis nisi nec ipsum
            feugiat pharetra. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Praesent aliquam augue
            diam, a lacinia est ornare ut. In mauris elit, elementum porttitor
            placerat a, ornare in elit. Praesent id tortor arcu.
          </p>

          <h3>Equivalent Slope</h3>
          <p>
            Nunc finibus blandit interdum. Pellentesque nec dapibus mauris, a
            placerat risus. Nullam pretium neque in justo rutrum, eu lacinia
            nibh placerat. Sed et magna metus. Sed ut lacus tincidunt nisi
            volutpat luctus. Integer eget nulla vitae nisl convallis cursus.
            Vivamus vel finibus purus. Duis pulvinar, dui nec dignissim semper,
            nibh elit finibus leo, quis feugiat arcu urna ut felis. Cras est
            risus, dapibus sed arcu at, porta blandit felis. Quisque maximus
            ante vel risus tristique aliquet. Mauris facilisis nisi nec ipsum
            feugiat pharetra. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Praesent aliquam augue
            diam, a lacinia est ornare ut. In mauris elit, elementum porttitor
            placerat a, ornare in elit. Praesent id tortor arcu.
          </p>

          <h3>The Peak of Athletic Performance</h3>
          <p>
            Nunc finibus blandit interdum. Pellentesque nec dapibus mauris, a
            placerat risus. Nullam pretium neque in justo rutrum, eu lacinia
            nibh placerat. Sed et magna metus. Sed ut lacus tincidunt nisi
            volutpat luctus. Integer eget nulla vitae nisl convallis cursus.
            Vivamus vel finibus purus. Duis pulvinar, dui nec dignissim semper,
            nibh elit finibus leo, quis feugiat arcu urna ut felis. Cras est
            risus, dapibus sed arcu at, porta blandit felis. Quisque maximus
            ante vel risus tristique aliquet. Mauris facilisis nisi nec ipsum
            feugiat pharetra. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Praesent aliquam augue
            diam, a lacinia est ornare ut. In mauris elit, elementum porttitor
            placerat a, ornare in elit. Praesent id tortor arcu.
          </p>

          {/*<CommentForm className="mt-section"/>*/}
        </div>
      </div>

      {/*Start Service*/}
      <div className="container section-margin" data-dsn-title="Thesis">
        <TitleSection
          className="align-items-center text-center"
          description={"Thesis"}
        >
          Statistical and Biomechanical formalization of the performance
          <br /> by Usain Bolt in the senior mens 100m sprint.
        </TitleSection>
        <ServiceOne />
      </div>
      {/*End Service*/}

      {/*Start Box Info Move Content*/}
      <div className="p-relative section-margin">
        <ParallaxImage
          src="/img/fullscreen/sprint-running/olympics-day-9-athletics.jpg"
          overlay={2}
          alt={""}
        />
        <MoveBox tablet={false}>
          <TitleSection
            className={`align-items-start mb-30`}
            description={"Build perfect websites"}
            defaultSpace={false}
          >
            Unlimited power
          </TitleSection>

          <p className="mb-10">
            Most of our writings have centered on implementing strategies for
            business units, with their unique
          </p>
          <p className="mb-30">
            geeza arse it’s your round grub sloshed burke, my good sir chancer
            he legged it he lost his bottle pear shaped bugger all mate
          </p>

          <Button
            href={"work-classic-2-col"}
            className={"image-zoom"}
            data-dsn="parallax"
            transitionPage={{ title: "Our Portfolio" }}
          >
            More Projects <span>⟶</span>
          </Button>

          <p className={`sm-p mt-15 theme-color`}>
            NOTE : Some details are very important.
          </p>
        </MoveBox>
      </div>
      {/*End Box Info Move Content*/}

      {/*Start Portfolio*/}
      <div className="section-margin" data-dsn-title="Our Portfolio">
        <TitleSection
          className={`container align-items-center text-center`}
          description={"Our Works"}
        >
          Creative Portfolio <br />
          Designs
        </TitleSection>
        <PortfolioSwiper
          grabCursor
          desktop={{ spaceBetween: 50, slidesPerView: 1.5 }}
          tablet={{ spaceBetween: 0, slidesPerView: 1.3 }}
          mobile={{ slidesPerView: 1 }}
          stylePortfolio="work-section"
          className="text-left v-dark-head title-inherit h4"
          centeredSlides
          loop
          blur
          parallax
          speed={1200}
          watchSlidesProgress
          loopedSlides={2}
          parallaxImage={{ "data-swiper-parallax-scale": "0.85" }}
          parallaxContent={{ "data-swiper-parallax-opacity": "0" }}
        >
          <SwiperPagination
            className={`justify-content-between dsn-container mt-30`}
          />
        </PortfolioSwiper>
      </div>
      {/*End Portfolio*/}

      {/*Start testimonial Section*/}
      <div className="section-margin" data-dsn-title="Testimonials">
        <Testimonial
          className="container section-margin"
          title="Feedback from our clients."
          skin={["testimonials-half"]}
          backgroundColor={"background-section"}
          desktop={{ slidesPerView: 2 }}
          mobile={{ slidesPerView: 1 }}
          speed={1000}
          grabCursor
          loop
          loopedSlides={2}
          parallax
          parallaxImage={{ "data-swiper-parallax-scale": 0.7 }}
          parallaxContent={{
            "data-swiper-parallax-opacity": 0,
            "data-swiper-parallax": "30%",
          }}
        >
          <SwiperPagination
            className={`justify-content-between dsn-container mt-30`}
          />
        </Testimonial>
      </div>

      {/*End testimonial Section*/}

      {/*Start box vertical Section*/}
      <section
        className="box-gallery-vertical container section-margin"
        data-dsn-title="Our Services"
      >
        <DsnGrid
          col={2}
          colTablet={1}
          colGap={0}
          rowGap={0}
          rowGapTablet={0}
          rowGapMobile={0}
        >
          <div className="p-relative mb-lg-section">
            <div className="box-im w-100 h-100 p-absolute">
              <ParallaxImage
                alt={""}
                src={"/img/plan-project.jpg"}
                overlay={3}
                height="100%"
                heightTable={"70vh"}
                heightMobile={"70vh"}
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 70vw,33vw"
              />
            </div>
          </div>
          <div className="p-relative pt-lg-section">
            <div className="box-info h-100 box-padding background-section ">
              <DsnGrid className="box-info-inner" col={1} colGap={0}>
                <TitleCover>Eremia</TitleCover>
                <TitleSection
                  className={"text-uppercase"}
                  description={"OUR PURPOSE"}
                  defaultSpace={false}
                >
                  We Plan Your Project
                </TitleSection>
                <Accordion>
                  <AccordionItem title="Extensive Employment" active number={1}>
                    <p>
                      Quisque placerat vitae lacus ut sceleris queusce luctus
                      odio ac nibh luctus, in porttitor.
                    </p>
                  </AccordionItem>
                  <AccordionItem title="Dedicated Staff" number={2}>
                    <p>
                      Quisque placerat vitae lacus ut sceleris queusce luctus
                      odio ac nibh luctus, in porttitor.
                    </p>
                  </AccordionItem>
                  <AccordionItem title="User Experience" number={3}>
                    <p>
                      Cepteur sint occaecat cupidatat proident, taken possession
                      of my entire soul, like these sweet mornings of spring
                      which I enjoy with my whole.
                    </p>
                  </AccordionItem>
                </Accordion>
              </DsnGrid>
            </div>
          </div>
        </DsnGrid>
      </section>
      {/*End box vertical Section*/}

      {/*End Blog*/}

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

      {/*========== team Section ========== */}
      <section className="container section-margin " data-dsn-title="Our Team">
        <TitleSection
          className={` align-items-center text-center`}
          description={"Our Team"}
        >
          The Best Team Ever!
        </TitleSection>

        <Team col={3} colTablet={2} />
      </section>
      {/*========== End team Section ========== */}

      {/*========== End brand-client Section ==========*/}
      <section
        className="container section-margin"
        data-dsn-title="our clients"
      >
        <TitleSection
          className={`align-items-center text-center`}
          description={"Our clients"}
        >
          Your successful, our <br />
          reputation
        </TitleSection>

        <BrandClient
          col={4}
          colTablet={3}
          colMobile={2}
          colGap={0}
          rowGap={0}
        />
      </section>
      {/*========== End brand-client Section ==========*/}

      {/*========== Next Page ==========*/}
      <NextPage className="section-padding border-top background-section" />
      {/*========== End Next Page ==========*/}

      {/*========== Footer ==========*/}
      <Footer className="background-section" />
      {/*========== End Footer ==========*/}
    </Layout>
  );
}

export default Home;
