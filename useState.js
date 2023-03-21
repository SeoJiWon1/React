/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState (['남자 코트 추천', '오늘의 점심 추천', '오늘의 아이돌']);
  

  let posts = "청라 고기 맛집";
  return (
    <div className = "App">
      <div className = "black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { 글제목[0] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className ="list">
        <h3> { 글제목[1] } </h3>
        <p>3월 21일 발행</p>
        <hr/>  
      </div>
      <div className ="list">
        <h3> { 글제목[2] } </h3>
        <p>3월 24일 발행</p>
        <hr/>  
      </div>
      
    </div>
  );
}
export default App;
