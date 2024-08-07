import React from "react";
import Image from "next/image";
import Skills, {SkillProgressBar} from "@/components/skill/Skills";
import DsnGrid from "layout/DsnGrid";



const Definition = () => {


    return (
        <div>
 
            {/*<!-- ========== End box-gallery-vertical image Right ========== */}
            <section className="about-section-2 section-margin">
                <div className="container">
                    <DsnGrid col={2} colTablet={1}>
                        <div className="box-img p-relative">

                            <div className="box-inner-img p-absolute">
                                <Image className={"cover-bg-img"} src="/img/fullscreen/gifs/spike-foot-strike.gif" alt="" fill/>
                            </div>
                            <div className="box-inner-img p-absolute">
                                <Image className={"cover-bg-img"} src="/img/fullscreen/gifs/spike-gait-cycle.gif" alt="" fill/>
                            </div>

                        </div>
                        <div className="box-information">
                            <TitleSection className="align-items-start mb-50" description="Definition"
                                          defaultSpace={false}>
                                What exactly is sprint running
                            </TitleSection>
                            <p className="flex justify-end mb-30">
                            The most fundamental discriptive quality of sprint running is the section of the 
                            foot used to achieve ground contact. When jogging, individuals make contact with the 
                            ground using their heels and differs from actual running which requires individuals 
                            to achieve the same using primarily the forefoot. The biggest hurdle for sprinters is 
                            the unavoidable breaking force that accompanies each foot plant. To minimize the break 
                            time, that is, the amount of time it takes to plant a foot and the subsequent motions 
                            resembling those of an upside spring, is to make ground contact with only the space 
                            between the foot and the toes. If athletes could do away with making ground contact, 
                            being an athlete would have been the most common job. No matter how fast any individual 
                            can move their limbs, there is still an ever present and undeniable requirement to 
                            make contact with the ground. 
                                
                            </p>
                            <p className="flex justify-end mb-30">
                             It then follows from the above, that sprint running, an exertion of physical force to 
                             the extent that, the mere reality of ground contact, becomes a liability. It becomes 
                             apparent that, sprint running can only occur in circumstances in which individuals 
                             have, at least, access to an all weather surface and spiked running shoes and at 
                             best, be running below an altitude of 1000m, a windspeed below 2m/s and the presence 
                             of fully automated timing system that simultaneously starts a timer when the pistol bangs 
                             and can scan reality at more than 10000 images per second and determine a winner by resolutions 
                             finer than a millimetre. 
                                
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

         
 

    

    
        </div>


    )
}

export default Definition;



