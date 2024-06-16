// function myFunction() {
    
//     let input, filter,table, tr, i, td, txtValue;

//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     table = document.getElementById('myTable');
//     tr = table.getElementsByTagName('tr');

//     for(i = 0; i < tr.length; i++) {
//        td = tr[i].getElementsByTagName('td')[1];
//        if(td) {
//            txtValue = td.textContent || td.innerText;
//            if(txtValue.toUpperCase().indexOf(filter) > -1) {
//                tr[i].style.display = '';
//            }else {
//             tr[i].style.display = 'none';   
//            }
//        }
    
//     }

// }

function sayHi(name) {
    
    console.log("Hey...hI " + name);
}

sayHi("Bubba");
sayHi("Sonia");
sayHi("Jafay");