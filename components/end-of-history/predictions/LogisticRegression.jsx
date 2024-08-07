import React from "react";
import Image from "next/image";
import Skills, {SkillProgressBar} from "@/components/skill/Skills";
import DsnGrid from "layout/DsnGrid";



const LogisticRegression = () => {


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
                            <TitleSection className="align-items-start mb-50" description="CAPABILITIES"
                                          defaultSpace={false}>
                                We help to create visual strategies.
                            </TitleSection>
                            <p className="mb-30">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati autem
                                distinctio veritatis excepturi, fugit iste repellendus, porro delectus rem
                                ducimus cum fugiat, magnam voluptates cumque? Consequatur eos debitis sit?
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

export default LogisticRegression;



