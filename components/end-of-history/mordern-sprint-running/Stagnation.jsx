
import DsnGrid from "@/layout/DsnGrid";
import Skills, {SkillCircleBar} from "@/components/skill/Skills";

import ServiceTow from "@/components/services/grid/ServiceTow";

import ParallaxImage from "@/components/Image/ParallaxImage";
import React from "react";




function Stagnation() {


    return (
        <div>

            {/*<!-- ========== End Resume Section ========== */}

            {/*<!-- ========== Services Section ========== */}
            <section className="section-margin container" data-dsn-title="Services">
                <DsnGrid col={2} colTablet={1} rowGapTablet={60}>
                    <div className="text-left flex-column align-items-center w-100">
                        <div className="flex-column align-items-center mb-30">
                            <div className="section-title mb-20 ">
                                <p className="sub-heading  line-bg-left mb-15">
                                    Stagnation
                                </p>
                                <h4 className="text-left title-cap">
                                    The Golden Age of the Dash
                                </h4>
                            </div>
                        </div>
                        <h5 className="sm-title-block theme-color">
                            Deadly Medley
                        </h5>

                        <div className="border-bottom mt-30 mb-30"/>

                        <p className="max-w570 dsn-text">
                         By the time the 90s came rolling around, sprint running had become a true 
                         international affair and being an American amounted to zero advantages. 
                         The last American Champion had been Carl Lewis, who had won by technicalities 
                         and individuals of Carrebean or mixed African descent had creeped in and 
                         outright dominated the event. Linford Christie, Donovan Bailey, Bruny Surin, 
                         Ato Boldon, Frankie Fredricks, Francis Obikwelu and Obadele Thompson 
                         were involved in all of the most crucial and definative races of the 90s.
                         Expecting all finalists to run sub 10s in a WCA championship final or 
                         Olympics is a modern luxury that stemmed from the brunt, sweat and tears 
                         of the above mentioned gentleman who persistantly pushed the envelope.

                        Tradition dictates that, at the end of every century,relevant officials need 
                        to draw up a team, of four individuals, regarded as the most prominent and 
                        forward thinking in their specialities to display their craft in an exhibition 
                        relay. A gold medal rewards a champion with glory and reverence from the lay men 
                        but pales in comparison to the admiration that comes with being shortlisted for 
                        the deadly medley. The finalists were by no means controversial and were universally 
                        accepted to have all deserved their positions.

                        By all means, this was the most exciting period of sprint running, way more 
                        entertaining and unpredictable as compared to the time of Bolt. The most 
                        poignant point still stands, athletes ran fast, guaranteed sub 10s every 
                        race, but never extending the record below 9.80s.

                         
                         
           
                        </p>

                        <div className="border-bottom mt-30 mb-30"/>

                     
                    </div>

                    <ServiceTow className="services-no-padding" masonry />
                </DsnGrid>
            </section>
            {/*<!-- ========== End Services Section ========== */}

            <div className="p-relative section-padding" data-dsn-title="Skills">

                <div className="box-im box-im-100 h-100 p-absolute top-0 over-hidden">
                    <ParallaxImage alt={""} src={"/img/fullscreen/sprint-running/view-of-athletes-coming-around-the-bend-during-competition-in-the-final-of-the-mens-200-metres.jpg"}
                                   height={"100%"} heightMobile={"100%"} heightTable={"100%"}
                                   overlay={7} animationActive={false}/>
                </div>


                <Skills className="container p-relative  z-index-1" col={4} colTablet={2}>
                    <SkillCircleBar number={80}>WEB DESIGN</SkillCircleBar>
                    <SkillCircleBar number={60}>PHOTOSHOP</SkillCircleBar>
                    <SkillCircleBar number={40}>Graphic Design</SkillCircleBar>
                    <SkillCircleBar number={90}>Smarty / Twig</SkillCircleBar>
                </Skills>
            </div>

           
    


         
        
        </div>
    );
}

export default Stagnation;
