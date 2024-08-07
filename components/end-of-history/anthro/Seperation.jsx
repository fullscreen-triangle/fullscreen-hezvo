import ParallaxImage from "../components/Image/ParallaxImage";
import ButtonPopup from "../components/button-popup/ButtonPopup";
import React from "react";


const  Seperation = () => {
    


    return (
        <div >
      

            {/*Start Parallax Img*/}
            <ParallaxImage alt={""} src={"/img/blog/4.jpg"} height={"80vh"}
                           parallaxFrom={{scale: 1.3}} parallax={{scale: 1}}
                           overlay={5}/>
            {/*End Parallax Img*/}

            <div className="news-content mb-section mt-40">
                <div className="single-post container post-content  ">

                    <h3>Peak Performance</h3>
                    <p> Only in sprint running is there a difference between male and female peak performance 
                        Physical exertion is not the only dealinating quality of sport
                        All animals move on their toes, standing is the fundamental motor function 
                        
                    </p>

                    <blockquote className="block-quote">
                        <p>On her way she met a copy. The copy
                            warned the Little Blind Text, that where it came from it would have been rewritten a
                            thousand
                            times and everything that was left from its origin would be the word “and” and the Little
                            Blind
                            Text should turn around and return to its own, safe country.</p>
                    </blockquote>
                    <div className="p-relative v-dark-head text-center">
                        <ParallaxImage src="/img/blog/2.jpg" overlay={4} height={"80vh"} alt={""}/>
                        <div className="v-middle z-index-1">
                            <ButtonPopup href="//media.w3.org/2010/05/sintel/trailer.mp4"/>
                        </div>
                    </div>
                  

                    <h3>Illum ad nostrum et inventore illo dolorem</h3>
                    <p>Nunc finibus blandit interdum. Pellentesque nec dapibus mauris, a placerat risus. Nullam pretium
                        neque in justo rutrum, eu lacinia nibh placerat. Sed et magna metus. Sed ut lacus tincidunt nisi
                        volutpat luctus. Integer eget nulla vitae nisl convallis cursus. Vivamus vel finibus purus. Duis
                        pulvinar, dui nec dignissim semper, nibh elit finibus leo, quis feugiat arcu urna ut felis. Cras
                        est risus, dapibus sed arcu at, porta blandit felis. Quisque maximus ante vel risus tristique
                        aliquet. Mauris facilisis nisi nec ipsum feugiat pharetra. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus. Praesent aliquam augue diam, a lacinia est
                        ornare ut. In mauris elit, elementum porttitor placerat a, ornare in elit. Praesent id tortor
                        arcu.</p>


                    {/*<CommentForm className="mt-section"/>*/}

                </div>


            </div>
       
        </div>
    );
}

export default Seperation;
