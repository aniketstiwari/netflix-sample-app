import React from 'react';
import Sdata from './Sdata';
import Card from './Card';

const Netflix = () => (
    <Card
        key={Sdata[0].id}
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        seriesname={Sdata[0].seriesname}
        link={Sdata[0].links}
    />
)

export default Netflix;