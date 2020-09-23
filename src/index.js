import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Card from './Card';
import Sdata from './Sdata'; 

// function ncard(val){
//   return (
//     <Card
//       imgsrc={val.imgsrc}
//       title={val.title}
//       seriesname={val.seriesname}
//       link={val.links}
//     />
//   )
// }

ReactDom.render(
  <>
    <h1 className="heading_style">List of top 3 netflix series</h1>
    {/* <Card
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      seriesname={Sdata[0].seriesname}
      link={Sdata[0].links}
    />
    <Card
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      seriesname={Sdata[1].seriesname}
      link={Sdata[1].links}
    />
    <Card
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      seriesname={Sdata[2].seriesname}
      link={Sdata[2].links}
    /> */}
    {Sdata.map((val) => {
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          seriesname={val.seriesname}
          link={val.links}
        />
      )
    } )}
     
  </>,
  document.getElementById('root') 
)