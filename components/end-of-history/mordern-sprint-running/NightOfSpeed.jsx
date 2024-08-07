import React from "react";
import Image from "next/image";
import Skills, {SkillProgressBar} from "@/components/skill/Skills";
import DsnGrid from "layout/DsnGrid";



const NightOfSpeed = () => {


    return (
        <div>
 
            {/*<!-- ========== End box-gallery-vertical image Right ========== */}
            <section className="about-section-2 section-margin">
                <div className="container">
                    <DsnGrid col={2} colTablet={1}>
                        <div className="box-img p-relative">

                            <div className="box-inner-img p-absolute">
                                <Image className={"cover-bg-img"} src="/img/help-project.jpg" alt="" fill/>
                            </div>
                            <div className="box-inner-img p-absolute">
                                <Image className={"cover-bg-img"} src="/img/help2.jpg" alt="" fill/>
                            </div>

                        </div>
                        <div className="box-information">
                            <TitleSection className="align-items-start mb-50" description="NIGHT OF SPEED"
                                          defaultSpace={false}>
                                The Birth of Sprint Running
                            </TitleSection>
                            <p className="mb-30">
                                On Thursday June 20, 1968, at the Hughes Stadium in Sacramentro, a rare occurance 
                                took place in the two semifinal races of the AU National Championships. The world 
                                record had at the time, a handtimed 10.0s, had been equaled on multiple occasions 
                                by 8 different men, starting from Rome 1960 by Armin Harry till Oliver Ford in April 
                                1968. 

                                Heines, Green, Bambruck, Miller, Smith and Pender posted legal hand timed sub 10s 
                                in the semi-final and wind speed-aided sub 10s in the tournament final. Men had 
                                struggled to break the 10s barrier and the first time it happened, there were more 
                                than 10 instances. The IAAF found these events to be an extreme cause for concern 
                                which was further supported by the 1968 Mexico City Olympics where Charles Greene 
                                and Jim Hines repeated the same feat, only at high altitude. 

                                It was only in 1970 that Fully Automated Timing was adopted as a strict requirement 
                                for the legality of a sub 10 performance. It was only in 1984 that the first true 
                                altitude and wind legal sub 10 mark was posted by Calvin Smith who ran a solid 9.94s 
                                at the 83 World Championships. Charles Greene's record stills holds esteem as the 
                                first official sub 10s performance albeit with an asterix annotating the altitude 
                                assistance. 
                            </p>
                            <Skills>
                                <SkillProgressBar number={5}>Sub 10s Athletes</SkillProgressBar>
                                <SkillProgressBar number={2250}>m Altitude Assistance</SkillProgressBar>
                                <SkillProgressBar number={4}> % Error </SkillProgressBar>
                            </Skills>

                        </div>

                    </DsnGrid>
                </div>
            </section>

         
 

    

    
        </div>


    )
}

export default NightOfSpeed;



