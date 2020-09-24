import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import Netflix from './Netflix';
import Amazon from './Amazon';

const favS = "netflix";

// const FavSeries = () => {
//   if(favS == 'netflix'){
//     return (
//       <Netflix/>
//     )
//   }else{
//     return (
//       <Amazon/>
//     )
//   }
// }

const App = () => (
  <>
    <h1 className="heading_style">List of top 3 netflix series</h1>
     {Sdata.map((val) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          seriesname={val.seriesname}
          link={val.links}
        />
      )
    } )}
    {/* <FavSeries/> */}
    {/* { favS == 'netflix' ? <Netflix/> : <Amazon/> } */}
     
  </>
);

export default App;