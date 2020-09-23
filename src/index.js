import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {Card} from './Card';
 

ReactDom.render(
  <>
    <Card
      imgsrc="https://wallpapercave.com/wp/90XU9Sz.jpg"
      title="A netflix original Series"
      seriesname="Walking Dead"
      link="https://www.netflix.com/in/title/70177057"
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp3999805.jpg"
      title="A netflix original Series"
      seriesname="Lost"
      link="https://www.netflix.com/kr-en/title/70136118"
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp1935737.jpg"
      title="A netflix original Series"
      seriesname="13 reasons why"
      link="https://www.netflix.com/in/title/80117470"
    />
  </>,
  document.getElementById('root') 
)