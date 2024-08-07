import ParallaxImage from "../components/Image/ParallaxImage";
import ButtonPopup from "../components/button-popup/ButtonPopup";
import React from "react";


const  Pelops = () => {
    


    return (
        <div >
      

            {/*Start Parallax Img*/}
            <ParallaxImage alt={""} src={"/img/fullscreen/ancient/ancient-olympic-stadium-at-olympia-in-greece.jpeg"} height={"80vh"}
                           parallaxFrom={{scale: 1.3}} parallax={{scale: 1}}
                           overlay={5}/>
            {/*End Parallax Img*/}

            <div className="news-content mb-section mt-40">
                <div className="single-post container post-content ">

                    <h3>An Absurd Prerequisite</h3>
                    <p> If the true story behind the origin of the Olympics, was in anyway tangible, it would be at best, 
                        a collection of events and ideas presented as practical falsehoods. The transition from a civilization 
                        whose peak had been organised games to a society whose definition would be incomplete without sport, 
                        had to have been the furthest thing from the ordinary. Most of the ideas and inventions in current 
                        use were either discovered or invented simulatenously by individuals working independently. The history 
                        of progress in a number of fields is full of individuals that, if replaced, their contributions would 
                        have eventually been done by someone else. 

                        The invention of sport is unlike the above and is solely based on the existence of an individual who was 
                        the grandson of Zeus, the closest companion of Poseidon, and the fastest chariot rider known to mankind.
                        Peloponnese, the southern most part of the Balkans, the largest Greek Island and home to the cities of 
                        Sparta, Corinthia, Argos, Messenia and Patras, is named after Pelops. The existence of plenty of archeological
                        artefacts, varying from sculptures, paintings and minted coins, present undeniable evidence of the existence 
                        of Pelops.
                        
                        How many individuals from 500 years ago can one give off the fly ? From the response, how many of these 
                        individuals invented some device, method or process ? how many are still actively applied in modern life ?
                        The sheer length of the continous adherence to the practise of gathering every four years for the sole 
                        purpose of sprinting, and other activities later on, is a clear nudge in the direction of expecting 
                        absurdities. Sprint running presents itself as one of the handful of ideas from periods a thousand 
                        years before Christ, that have survived and enjoy regular use in modern day.

                        There was a village-state by the name of Pisa, located 2.5km from a village called Olympia and in a 
                        conferadation of 8 states with Salmone, Heracleia, Harpinna, Cycesium, and Dyspontium. Even back then, 
                        the villagers had contantly wrestled for control of the sacred precint reverred by everyone in Greece. 
                        There happened to be an extremely scrumptious young woman named Hippodamia, for her endless affection 
                        for horses, who was at the time, fortunately single.
                        
                    </p>

                    <blockquote className="block-quote">
                        <p></p>
                    </blockquote>
                    <div className="p-relative v-dark-head text-center">
                        <ParallaxImage src="/img/fullscreen/ancient/competition-between-pelops-and-oenomaus.jpeg" overlay={4} height={"80vh"} alt={""}/>
                    </div>
                  

                    <h3>Deadly Turn</h3>
                    <p> Onemous, King of Pisa, was well known for his unreservedly crooked fondness for his daughter.
                        An oracle had advised him on his pending doom, that his future son-in-law would be his downfall
                        and death. Of all the reasonable steps anyone could have taken, Onemous leaned towards hubris 
                        and arranged that, all potential suitors be required to first defeat him, in a chariot race of 
                        death. Oenomous was a superior charioter by Pisa standards, but a disappointment if competitors 
                        beyond the villge were involved. His over confidence was warranted by the fact that he had, 
                        12 skulls of unfortunate would be suitors, who had lost the race, and now served as tacky 
                        art installations for a palace entrance.

                        Tantalus, father of Pelops, was a trusted person by the gods which came with a lot of perks including, 
                        full access to the kitchen facilities at Mount Olympus. Titanomachia, a war amoung gods, was a common 
                        theme in Greek mythology and is reported to have occured for all three generations of gods. Chronus, son of 
                        Uranus, rebelled against his father, cut off his genitals, and damned him to spent his life locked up. 
                        As fate would have it, Chronus, fearing the possibility of ending up like his father, started the 
                        reasonable practise of eating his children. One by the name of Zeus, escaped, matured somewhere else 
                        and returned to, depose his father, just like he had to his own father. 



                        When the Greeks became more luxurious, and their circumstances more opulent, they began to provide dining rooms, chambers, and storerooms of provisions for their guests from abroad, and on the first day they would invite them to dinner, sending them on the next chickens, eggs, vegetables, fruits, and other country produce. This is why artists called pictures representing the things which were sent to guests ‘xenia.’"


                                                
                    </p>


                    {/*Add sysphus, prometheus, tantalus, disobedience*/}

                </div>


            </div>
       
        </div>
    );
}

export default Pelops;
