import ParallaxImage from "../components/Image/ParallaxImage";
import ButtonPopup from "../components/button-popup/ButtonPopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Dimensions = () => {
  return (
    <div>
      {/*========== Header Normal ========== */}

      {/*========== End Header Normal ==========*/}

      {/*Start Parallax Img*/}
      <ParallaxImage
        alt={""}
        src={"/img/fullscreen/technical/track-dimensions.png"}
        height={"80vh"}
        parallaxFrom={{ scale: 1.3 }}
        parallax={{ scale: 1 }}
        overlay={5}
      />
      {/*End Parallax Img*/}

      <div className="news-content mb-section mt-40">
        <div className="single-post container post-content  ">
          <h3>Why athletic tracks are circular</h3>
          <p className="text-justify  antialiased">
            An athletic track completely made up of straight sections would be
            grounds for quicker races but would be the most frustrating event to
            watch. At present, there are three designs of tracks which can be
            certified by the International Association of Athletics Federations
            (IAAF) [17]: standard tracks (made of straights and semi-circles)
            and two types of double bend tracks (where the double bend is made
            of three arcs of two different radii) asIt is usually admitted in
            the athletic community that the standard track is the quickest and
            there is no hope to beat a record on a double bend track, the second
            type double bend 2 (DB2) with the longest straight being the worst.
            Actually, the double bend tracks have been designed to include a
            football or rugby stadium in it, and the big disadvantage is that
            the bends have a smaller radius of curvature. Therefore, the
            centrifugal force is bigger and the double bend tracks are slower in
            total [11,18]. Moreover, on such tracks, there is a major
            disadvantage on being on lane 1, or the inside lanes where the
            curvature is the largest, because there is a bigger difference
            between extreme lanes than on standard tracks. So the multi-sports
            arenas are certainly not favourable for athletic records! The issue
            of this paper is to analyse b The problem is a particular case of
            the well-known Dubins problem [16,19] for which solutions, in
            general, are concatenations of straight lines and of arcs of a
            circle. In our case, the optimal geometry is a semi-circle leading
            to the standard track made of straights and semi-circles. If one
            ignores the obligation to have a straight of prescribed length, then
            the optimal arena from this point of view is a circle. Actually, it
            would be better to have a shorter straight than the official
            standard track in order to have a bigger radius for the two
            semi-circles and thus a smaller centrifugal force. Our simulations
            on the full runner problem (see below) indicate that below a length
            of 60 m for the straight line, the difference becomes tiny in terms
            of performance (of the order of one-thousandth of a second) because
            the centrifugal force is no longer significant. But a straight of 60
            m is definitely quicker by four hundredth of a second than the
            present straight of 84.39 m. Therefore, the present standard track
            is not favourable for athletic records. Because of the constraint to
            include a football or a rugby stadium inside the track, the
            Euclidean distance BC has to be greater than that realizing the
            minimum of problem 1. In other words, the value y(l) is prescribed.
            Then of course, the semi-circle is not possible because the length
            of the curve and the distance BC are not consistent.
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
              <ButtonPopup href="//media.w3.org/2010/05/sintel/trailer.mp4" />
            </div>
          </div>
          {/*End Box Info Center Content*/}

          <h3>Illum ad nostrum et inventore illo dolorem</h3>
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

          <div className="post-tags p-relative heading-color font-heading">
            <a href="#0" title="View All Posts in Tag " rel="tag">
              <span className="post_tag post_tag">Creative</span>
            </a>
            <a href="#0" title="View All Posts in Tag " rel="tag">
              <span className="post_tag post_tag">Design</span>
            </a>
          </div>
        </div>
      </div>
      <div className="pagination-post d-flex align-items-center border-style border-radius section-margin container background-section">
        <div className="pagination-item w-100 p-20">
          <Link href="single-blog">
            <span className="mb-5">PREVIOUS</span>
            <h4 className="title-block word-wrap">Why a public figure</h4>
          </Link>
        </div>

        <div className="icon p-20 border-right border-left">
          <a className="h-100 heading-color" href="#">
            <FontAwesomeIcon icon={faThLarge} />
          </a>
        </div>
        <div className="pagination-item w-100 p-20 text-right">
          <Link href="single-blog">
            <span className="mb-5">NEXT</span>
            <h4 className="title-block word-wrap">Newly-launched campaign</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dimensions;
