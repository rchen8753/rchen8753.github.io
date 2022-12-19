// //產生1~100的隨機
// let answer = getAnswerNumber();
// const inputDom =document.getElementById('.input');
// const btn = document.querySelector('#enter')
// let guessNumber;
// let min = 1;
// let max = 100;
// const p = document.querySelector('p');

// console.log(answer)
// btn.addEventListener('click' , function(){
//   //get input value
//   let inputValue = inputDom.value;
//   guessNumber = parseInt(inputValue , 10);
//   if(isNaN(guessNumber)){
//     alert('欠罵')
//     inputDom.value = '';
//   } 

//   //判斷是否為答案
//   if(guessNumber === answer){
//     alert('過關')
//     inputDom.value ='';
//     answer = getAnswerNumber();
//   }else{
//     if(guessNumber < min || guessNumber > max){
//       alert('欠罵')
//       inputDom.value= '';
//     }else{
//       //看要步要換最小值
//       if (guessNumber < answer){
//         min = guessNumber;
//       }else if (guessNumber > answer){
//         max =guessNumber;
//       }
//       p.innerText = `${min}~${max}`
//     }
//   }
// })

// function getAnswerNumber(){
//   return Math.floor(Math.random() * 100 + 1)
// }

// inputDom.addEventListener('keyup', function(e))

// function showKeyCode(event){
//   console.log(event);
// }



// btnAll.forEach(x => {
//   x.addEventListener('click' , function(){
//     guessNum.value += x.value

//     if (guessNum.value == number){
//       alert(`恭喜你猜對了!`)
//     } 
//     else if (guessNum.value < number){
//       alert(`再往上猜`)
//     }
//     else if (guessNum.value > number){
//       alert(`再往下猜`)
//     }
//   })
// });


const numBtns = document.querySelectorAll('.num-btn');
const enter = document.querySelector('.enter-btn');
const clean = document.querySelector('.clean-btn')
const inputDom =document.getElementById('input');
const outputText = document.querySelector('.outputText')
let answer = getAnswerNumber();
let min = 1;
let max = 100;

numBtns.forEach((el) =>{
  el.addEventListener('click' , function(e){
    inputDom.value += e.target.innerText;
  })
})

clean.addEventListener('click' , function(e){
  inputDom.value = '';
})


enter.addEventListener('click' , function(){
let inputValue = inputDom.value;
let guessNumber = parseInt(inputValue , 10);
if(guessNumber === answer){
      alert('過關')
      inputDom.value ='';
  }


else if(guessNumber < min || guessNumber > max || isNaN(guessNumber)){
      alert('欠罵')
      inputDom.value= '';
    }
  

  //看要步要換最小值
  else if(guessNumber < answer){
        min = guessNumber;
        alert('往上猜')
      }else if (guessNumber > answer){
        max = guessNumber;
        alert('往下猜')
      }
      outputText.innerText = `${min}~${max}`
      inputDom.value = '';
      outputText.innerText = answer;  
  })
  
  
    

    console.log(answer)
function getAnswerNumber(){
  return Math.floor(Math.random() * 100 + 1)
}
// function reset(){
//   outputText.innerText = '';
// }





