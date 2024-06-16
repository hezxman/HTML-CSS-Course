// // // // const hex = document.querySelector('.color');
// // // // const button = document.querySelector('.reset');

// // // // const generateNum = ()=> {
// // // //     const randcolor = Math.random().toString(16).substring(2, 8);
// // // //     document.body.style.backgroundColor = '#' + randcolor;
// // // //     hex.innerHTML = '#' + randcolor;
// // // // }

// // // // button.addEventListener('click', generateNum);

// // // const modal = document.querySelector('.modal'),
// // //          btn = document.querySelector('.btn'),
// // //          close = document.querySelector('.close');

// // // btn.addEventListener('click', openModal);
// // // close.addEventListener('click', closeModal);
// // // modal.addEventListener('click', closeModal);

// // // function openModal(e) {
// // //     e.preventDefault();
// // //     modal.style.display = 'block';
// // // }

// // // function closeModal(e) {
// // //     e.preventDefault();
// // //     modal.style.display = 'none';
// // // }
// // const btn = document.querySelector('.btn');
// // const result = document.querySelector('.result');

// // btn.addEventListener('click', palindrome);

// // function palindrome() {
// //     const word = document.querySelector('.input-text').value;
// //     let len = word.length;
// //     let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
// //     let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

// //     let flip = end.split("").reverse().join("");

// //     if(start == flip) {
// //         result.innerHTML = `${word.toUpperCase()} is a palindrome`;
// //     } else {
// //         result.innerHTML = `${word.toUpperCase()} is NOT palindrome`;
// //     }
    
// // }

// // const word = document.querySelector('.input-text');
// // const button = document.querySelector('.btn');
// // const result = document.querySelector('.result');

// // button.addEventListener('click', checkWord);

// // function checkWord() {
// //    let vowelCount = 0;
// //    let wordVal = word.value.toLowerCase();
// //     for(let i = 0; i < wordVal.length; i++) {
// //         let letter = wordVal[i];
// //         if(letter.match(/([a, e, i, o, u])/)) {
// //             vowelCount++;
// //         }
// //     }
// //     result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`;
// // }  

// const button = document.querySelector('.btn');
// const coupon = document.querySelector('.coupon');


// const copyText = (e)=> {
//     e.preventDefault();
    
//     coupon.select();
//     coupon.setSelectionRange(0, 1000);
//     document.execCommand('copied!');

//     button.textContent = 'copied!';

//     setTimeout(()=>{
//       button.textContent = 'Copy';
//     }, 3000);
// };

// button.addEventListener('click', copyText);

// const btn = document.querySelector('.btn');
// const tip = document.querySelector('.tip');
// const total = document.querySelector('.total');
// const error = document.querySelector('.error');

// const hideError = ()=> {
//    setTimeout(()=>{
//    error.style.display = "none";
// }, 3000);
// };
   

// const calculateTip = ()=> {
//    const bill = document.querySelector('.bill').value;
//    const rate = document.querySelector('.rate').value;
//      if(bill === "" || rate === "") {
//       error.style.display = "block";
//       hideError();
//      } else if(isNaN(bill)) {
//         error.innerHTML = "Please type a number";
//         error.style.display = "block";
//          hideError();
//      } else {
//         let tipAmount = bill * rate;
//         tip.innerHTML = `Tip: $ ${tipAmount}`;
//         let totalAmount = Number(bill) + tipAmount;
//         total.innerHTML = `Total: $${totalAmount}`;
//      }
//    };
        

// btn.addEventListener('click', calculateTip);

let pounds = document.querySelector('.pounds'),
 kilograms = document.querySelector('.kilograms'),
 ounce = document.querySelector('.ounce'),
 grams = document.querySelector('.grams'),
 form = document.querySelector('.form');

 form.addEventListener('input', convertWeight);

 function convertWeight(e) {
    if(e.target.classList.contains('pounds')) {
       let x = e.target.value;
       kilograms.value = (x / 2.2046).toFixed(2);
       grams.value = (x / 0.0022046).toFixed(2);
       ounce.value = (x * 16).toFixed(2);
    }
    if(e.target.classList.contains('kilograms')) {
      let x = e.target.value;
       pounds.value = (x * 2.2046).toFixed(2);
       grams.value = (x * 1000).toFixed(2);
       ounce.value = (x * 35.274).toFixed(2);
   }
   if(e.target.classList.contains('ounce')) {
      let x = e.target.value;
       kilograms.value = (x / 35.274).toFixed(2);
       grams.value = (x / 0.035274).toFixed(2);
       pounds.value = (x * 0.0625).toFixed(2);
   }
   if(e.target.classList.contains('grams')) {
      let x = e.target.value;
       kilograms.value = (x / 100).toFixed(2);
       pounds.value = (x * 0.0022046).toFixed(2);
       ounce.value = (x * 0.035274).toFixed(2);
   }
 }