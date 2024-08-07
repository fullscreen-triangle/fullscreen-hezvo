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
                                <Image className={"cover-bg-img"} src="/img/fullscreen/gifs/bailey-sprint-clip-01.gif" alt="" fill/>
                            </div>
                            <div className="box-inner-img p-absolute">
                                <Image className={"cover-bg-img"} src="/img/fullscreen/gifs/DonovanBaileyWinsGoldinMens100MetresatAtlanta1996-01.gif" alt="" fill/>
                            </div>

                        </div>
                        <div className="box-information">
                            <TitleSection className="align-items-start mb-50" description="SELECT"
                                          defaultSpace={false}>
                                US $1.5 million 
                            </TitleSection>
                            <p className="mb-30">
                                The year was 1996, a mere 4 years after Donovan Bailey had officially started 
                                training and competing as a sprinter. In 1992, whilst watching TV, Bailey was 
                                astounded at what his eyes were witnessing, the Canadian Olympic team selecting 
                                individuals he was way quicker than. He signed up for training and in a space of 
                                three years, he was now the undisputed Canadian, Commonwealth and World Champion. 
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

export default NightOfSpeed;



