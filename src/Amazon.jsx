import React from 'react';
import Sdata from './Sdata';
import Card from './Card';

const Amazon = () => (
    <Card
          key={Sdata[2].id}
          imgsrc={Sdata[2].imgsrc}
          title={Sdata[2].title}
          seriesname={Sdata[2].seriesname}
          link={Sdata[2].links}
    />
)

export default Amazon;