/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState (['남자 코트 추천', '그 오늘의 점심 추천', '오늘의 아이돌']);
  let [따봉, 따봉변경] = useState(0);
  let posts = "청라 고기 맛집";

  return (
    <div className = "App">
      <div className = "black-nav">
        <div>React Blog</div>
      </div>

      <button onClick ={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>정렬버튼</button>

      <button onClick ={()=>{
  	    let copy = [...글제목];
        copy[0] = "여자 코트 추천";
 	      글제목변경(copy);
      }}>글 수정</button>

      <div className="list">
        <h3> { 글제목[0] }<span onClick ={()=>{따봉변경(따봉+1)} }> ❤️</span> {따봉} </h3>
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
        <Modal></Modal>
      </div>
  );
}

function Modal(){
  return(
    <div className = "modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
      </div>
    
  )
}
export default App;
