import React from 'react'

import Service from "../Service";
import {getTrackData} from "../../../data/track";


const Track  = ({className}) => {
    return (
        <Service.grid col={3} colTablet={2} colMobile={1}  colGap={15} masonry
             className={className} data={getTrackData()} backgroundColor={"background-section"} styleBox={"line"}
        />
    );
};


export default Track