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
import DsnGrid from "../layout/DsnGrid";
import TitleCover from "../components/heading/TitleCover";
import BlogSwiper from "../components/bolg/BlogSwiper";
import Team from "../components/Team/Team";
import BrandClient from "../components/brand-client/BrandClient";
import ButtonPopup from "../components/button-popup/ButtonPopup";
import NextPage from "../components/next/NextPage";
import Footer from "../components/footer/Footer";
import ModalContact from "../components/model-right/ModalContact";
import HeaderNormal from "../components/header/HeaderNormal";
import Quotes from "components/end-of-history/Quotes";
import Resume from "../components/resume/Resume";
import Sub10s from "components/maps/globes/Sub10s";
import Head from "next/head";
import Image from "next/image";
import Skills, { SkillProgressBar } from "../components/skill/Skills";
import ServiceTow from "../components/services/grid/ServiceTow";
import BrandClientSwiper from "../components/brand-client/BrandClientSwiper";
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
        data-dsn-title="End of History"
      />

      <div className="p-relative v-dark-head text-center">
        <div className="v-middle z-index-1">
          <ButtonPopup href="/videos/UsainBoltvUsainBolt.mp4" />
        </div>
      </div>

      <HeaderNormal container={"container"}>
        <h1 className="title text-uppercase">
          Performance Enhancement Drugs
          <br /> and Bioethics
        </h1>
      </HeaderNormal>

      <div className="container section-margin" data-dsn-title="About Us">
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

      <div className="section-margin" data-dsn-title="Quotes">
        <Quotes
          className="container section-margin"
          title="Comments from Experts"
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
        </Quotes>
      </div>

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
      {/*End Parallax Img*/}

      <section
        className="section-padding  background-section"
        data-dsn-title="Accomplishments"
      >
        <div className="container">
          <TitleSection description="Accomplishments">
            Education & Experience
          </TitleSection>
          <DsnGrid col={2}>
            <Resume title="Education">
              <Resume.item title="University of Studies">
                <p className="max-w570">
                  Duis posuere, quam non imperdiet egestas, eros enim mattis
                  mauris, in posuere lacus arcu quis felis. Etiam interdum erat
                  non enim venenatis fermentum.
                </p>
              </Resume.item>

              <Resume.item title="Doctoral Degree">
                <p className="max-w570">
                  Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis
                  iaculis, feugiat risus quis, aliquet urna. Quisque fringilla
                  mollis risus, eu pulvinar dolor.
                </p>
              </Resume.item>

              <Resume.item title="University of Studies">
                <p className="max-w570">
                  Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac
                  dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet
                  sem in, lobortis ante.
                </p>
              </Resume.item>
            </Resume>

            <Resume title="Education">
              <Resume.item title="University of Studies">
                <h6>Senior UX / UI Designer</h6>
                <p className="max-w570 mt-10">
                  Praesent dignissim sollicitudin justo, sed elementum quam
                  lacinia quis. Phasellus eleifend tristique posuere. Sed vitae
                  dui nec magna.
                </p>
              </Resume.item>

              <Resume.item title="Doctoral Degree">
                <h6>DDB Athens ( Tribal )</h6>
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
                <Image
                  className={"cover-bg-img"}
                  src="/img/help-project.jpg"
                  alt=""
                  fill
                />
              </div>
              <div className="box-inner-img p-absolute">
                <Image
                  className={"cover-bg-img"}
                  src="/img/help2.jpg"
                  alt=""
                  fill
                />
              </div>
            </div>
            <div className="box-information">
              <TitleSection
                className="align-items-start mb-50"
                description="CAPABILITIES"
                defaultSpace={false}
              >
                We help to create visual strategies.
              </TitleSection>
              <p className="mb-30">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                obcaecati autem distinctio veritatis excepturi, fugit iste
                repellendus, porro delectus rem ducimus cum fugiat, magnam
                voluptates cumque? Consequatur eos debitis sit?
              </p>
              <Skills>
                <SkillProgressBar number={85}>Web Design</SkillProgressBar>
                <SkillProgressBar number={72}>
                  SEO, analytics & marketing
                </SkillProgressBar>
                <SkillProgressBar number={89}>
                  Mobile Development
                </SkillProgressBar>
              </Skills>
            </div>
          </DsnGrid>
        </div>
      </section>

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

      {/*Start Blog*/}
      <div className="section-margin" data-dsn-title="Lasts post">
        <TitleSection
          className={`container  align-items-center text-center`}
          description={"Lasts post"}
        >
          Latest And Greatest <br />
          Post
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
