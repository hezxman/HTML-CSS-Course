 let input = document.getElementById('inputText');

 let calculate = (num) => {
     input.value += num;
 }

 let result = () => {
     try {
         input.value = eval(input.value);
     }
     catch(err) {
         alert('You have typed in an invalid expression');
     }
 }

 function clr(){
     input.value = ' ';
 }

 function del(){
     input.value = input.value.slice(0, -1);
 }

const names = [
   
        {name:'Jaja', age: 24}, 
        {name:'Bouba', age: 27}, 
        {name:'Wilson', age: 30}, 
        {name:'Alex', age : 29}, 
        {name:'Dauda', age : 21}, 
        {name:'Jimmy', age : 32}, 
        {name:'Bless', age : 24}, 
        {name:'Sally', age : 34}, 
        {name:'Risika', age : 20}
   
];

const nums = [2, 4, 6, 8, 1, 5, 13, 9, 10, 15];

const squaredNum = nums.map(num => Math.sqrt(num))
                        .map(num => num * 2)
                        .map(num => Math.floor(num)); 

// let containsLetter = names.filter(function(name){
//     if(name.includes('a')){
//         return true;
//     }
// })

//let newNamesArr = names.sort((a, b)=> b - a);

//console.log(newNamesArr);
//console.log(squaredNum);





