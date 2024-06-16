// let fruits = ["🍏", "🍊", "🍏", "🍏", "🍏", "🍊", "🍌", "🍌"];

// let appleShelf = document.getElementById('apple-items');
// let orangeShelf = document.getElementById('orange-items');
// let bananaShelf = document.getElementById('banana-items');

// const fruitShelf = ()=> {

//     for(let i = 0; i < fruits.length; i++){
//         if(fruits[i] === "🍏"){
//             appleShelf.textContent += "🍏";
//         }
//         else if(fruits[i] === "🍊"){
//             orangeShelf.textContent += "🍊";
//         }
//         else{
//            bananaShelf.textContent += "🍌";
//         }
//     }

// }

// fruitShelf();

let myLeads = [];
let oldLeads = [];
const saveBtn = document.getElementById('saveBTN');
const inputField = document.getElementById("input-el");
const oList = document.getElementById('oList');
const delBTN = document.getElementById('deleteBTN');
const tabBTN = document.getElementById('tabBTN');

const leadsFromLS = JSON.parse(localStorage.getItem("myLeads"));  
      
  if(leadsFromLS){
        myLeads = leadsFromLS;
        render(myLeads);
  }

  const tabs = [{url: "http://www.google.com"}];

  tabBTN.addEventListener('click', function(){
      myLeads.push(tabs[0].url);
      localStorage.setItem('myLeads', json.stringify(myLeads));
      render(myLeads);
  });
  
 function render(leads){
     
  let listItems = "";
  for(let i = 0; i < leads.length; i++){
     
      listItems += `
      <li>
          <a target = '_blank' href='${leads[i]}'> 
            ${leads[i]} 
          </a>
      </li>` 
     }
  oList.innerHTML = listItems;
 }

  delBTN.addEventListener('dblclick', function(){
       localStorage.clear();
       myLeads = [];
       render(myLeads);
  });


saveBtn.addEventListener('click', function(){
    
        myLeads.push(inputField.value);
        inputField.value = " ";
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);

 });


