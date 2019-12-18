// can.js
/* 호에는 x 좌표가 100, y 좌표가 75, 반경이 50입니다. 
   완전한 원을 이루려면 호는 0 라디안 (0 ° ) 각도에서 
   시작하여 2π 라디안 (360 ° ). */


   const myCan = document.querySelectorAll('.my_can'); // 캔버스를 담기위한 박스
   for(let i=0; i < myCan.length; i++){ // 반복문을 담는 박스
       myCan[i].innerHTML = '<canvas width="400" height="400" class="myC"></canvas>'
       let myC = document.querySelectorAll('.myC')[i];
       myC.style = 'transform:rotate(-90deg)';
   }
   
   // const resultArr = [90, 80, 50]; // 수치값 입력하기 위한 배열
   const resultArr = [
       {subject:'photoshop'  ,score:90}, // resultArr[index].score
       {subject:'illustrator',score:80},
       {subject:'indesign'   ,score:95}
   ];
   
   document.querySelectorAll('.myC').forEach(function(data,index){  
       let ctx = data.getContext('2d');
       const myR = function(r){ return Math.PI / 180 * (3.6 * r);   };
       const progressArc = function(r){
       ctx.arc(200 , 200 , 100 , 0 , myR(r));  };
       let j = 0;
       const graphGo = function(s){
             setInterval(function(){
               if (j < s){
                   ctx.beginPath();
                   ctx.lineWidth = 30;
                   ctx.strokeStyle = '#fa0'
                   progressArc(j++);
                   ctx.stroke();
               }else{
               clearInterval();  }
           },10);
   };
   graphGo( resultArr[index].score ); // resultArr에 입력한 숫자를 차례대로 배열
   
   });