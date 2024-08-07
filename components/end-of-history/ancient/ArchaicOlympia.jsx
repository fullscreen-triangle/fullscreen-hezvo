
import TitleSection from "../components/heading/TitleSection";
import DsnGrid from "@/layout/DsnGrid";
import Resume from "@/components/resume/Resume";
import React from "react";
import ArchaicOlympics from "components/maps/mapbox-gl/ArchaicOlympics";




const  ArchaicOlympia = () => {

    return (
        <div className="flex relative container box-border  mx-auto resize overflow-hidden">

            <div className="flex fixed container overflow-hidden resize box-border antialised"> 

              <ArchaicOlympics className=" z-10"/>
            </div>

            <section className="section-padding  background-section" data-dsn-title="Events">
                <div className="container">
                    <TitleSection description="Notable Events">
                        Ancient Olympics Timeline
                    </TitleSection>
                    <DsnGrid col={2}>
                        <Resume title="690 BC">
                            <Resume.item title="Koroibos of Elis">
                            <h6>First Champion</h6>
                                <p className="max-w570">
                                    Korobois of Elis, a man described to have been younger than 
                                    30 years and employed as a cook from a village not far from 
                                    Pisa is the first recorded Olympic Champion. 
                                </p>
                            </Resume.item>

                            <Resume.item title="Onipus of Magera">
                            <h6>Introduction of Nudity </h6>
                                <p className="max-w570">
                                    Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis
                                    iaculis, feugiat risus quis, aliquet urna. Quisque fringilla
                                    mollis risus, eu pulvinar dolor.
                                </p>
                            </Resume.item>

                            <Resume.item title="Corruption">
                            <h6>Roman Involvement</h6>

                                <p className="max-w570">
                                    Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac
                                    dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet
                                    sem in, lobortis ante.
                                </p>
                            </Resume.item>
                        </Resume>

                        <Resume title="Records">
                            <Resume.item title="Beyond the Pit">
                                <h6>Senior UX / UI Designer</h6>
                                <p className="max-w570 mt-10">
                                    Praesent dignissim sollicitudin justo, sed elementum quam
                                    lacinia quis. Phasellus eleifend tristique posuere. Sed vitae
                                    dui nec magna.
                                </p>
                            </Resume.item>

                            <Resume.item title="Diagoras of Rhodes">
                                <h6>DDB Athens ( Tribal )</h6>
                                <p className="max-w570 mt-10">
                                    Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin
                                    vitae nulla tristique, ornare felis id, congue libero. Nam
                                    volutpat euismod quam.
                                </p>
                            </Resume.item>

                            <Resume.item title="Leonidis of Rhodes">
                                <h6>DDB Athens ( Tribal )</h6>
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
            {/*<!-- ========== End Resume Section ========== */}


     

          

  
      
        </div>
    );
}

export default ArchaicOlympia;
