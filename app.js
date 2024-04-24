// var teamscore = [];
// var team1 = +prompt('enter a team 1 score')
// var team2 = +prompt('enter a team 2 score')
// // teamscore.push(team1, team2)
// // console.log(teamscore)
// if (teamscore[0] > teamscore[1]) {
//     console.log("team 1 has won");
    
// } else {
//     console.log("team 2 has won");
// }




// var naMe= ['Faizzyhere', 31, 'Developer']
// // var age= [31]
// // var job= ['developer']
// console.log(naMe);
// function name(params) {
    
// }




// var faiu = +prompt('Enter Your Number')
// var faiu1= +prompt('Limit')
// for (var i = 1; i <=faiu1; i++){
// // document.write('<b>',i, '</br>' );
// document.write("<b>",faiu +' x '+ i + ' = ' + (faiu * i), "</br>");
// }





// paractical moment bnaya tha aye

// for(let i = 1; i<=30; i++){
//     document.write("<center>")
    
//         for(var j = 1; j<=i; j++){
//             document.write(j , "")
//         }
    
//     document.write('<b>', '<br>')

// }








// value checking is...

// var x = 359;
// function foo() {var x = 50;
   
//     console.log(x);
// }
// console.log(x);
// foo()


// loops ki madad se array ko control karna.!

// var firstname = ["Abid", "Hamza", "Zeeshan", "Danish", "Zain"];
// var lastname = ["Ali", "Parveez", "Khan", "Faraz", "Shah"];
// var finalname = [];

// for(var firstnameindex = 0; firstnameindex < firstname.length; firstnameindex++){
//     for(var lastnameindex = 0; lastnameindex < lastname.length; lastnameindex++){
//      finalname.push(firstname[firstnameindex]+ " "+ lastname[lastnameindex])
       
//     }

// }
// console.log(finalname);


// var FaizzyHERE1 = prompt('Enter You Caption')
// //  FaizzyHERE2 = prompt('Enter You Caption')
// //  FaizzyHERE3 = prompt('Enter You Caption')
// //  FaizzyHERE4 = prompt('Enter You Caption')
// //  FaizzyHERE5 = prompt('Enter You Caption')
// var faizakhan = ["Faizzy Here", "Faizzy Loverr"]
// // faizakhan.push(FaizzyHERE1, FaizzyHERE2, FaizzyHERE3, FaizzyHERE4, FaizzyHERE5)
// faizakhan.concat(FaizzyHERE1)
// console.log(faizakhan);



// var Cleancities = ["Karachi", "Lahore", "Islamabad", "Pechawar", "Multan"];
// var Userfavt = prompt("Enter Your Favourite City");
// // var isciti = false;
// for (let index = 0; index < Cleancities.length; index++) {
//     var Currentcitiy = Cleancities[index];
//     if (Currentcitiy === Userfavt) {
//         // isciti = true
//         console.log("Your City Is Clean");
//     }
//     else {
//         console.log("Your City Is Not Clean");
//     }
// // console.log(Currentcitiy);
// }
//     // if (isciti === true) {
    //     console.log("Your City Is Clean");
    // } 
    // else {
    //     console.log("Your City Is Not Clean");
    // }
    // console.log(Currentcitiy);





// var Fruit = ["Apple", "Banana", "Mango", ]
// var Faizzy = Fruit.slice(0,2)
// console.log(Faizzy);



// var Year = [2023,2024];
// var Month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var Days = ["Sunday","Monday","Tuesday"," Wednesday","Thursday","Friday","Saturday"];

// var Recordsyear = [];

// for (var Yearindex = 0; Yearindex < Year.length; Yearindex++) {
//     for (var Monthindex = 0; Monthindex < Month.length; Monthindex++) {
//         for (var Daysindex = 0; Daysindex < Days.length; Daysindex++) {
//        var Faizzy = Year[Yearindex]+ Month[Monthindex]+ Days[Daysindex]     
//             Recordsyear.push(Faizzy)
//         }
        
//     }
    
// }
// console.log(Recordsyear);



// var Fruit = ["apple","banana","mango"];
// var user = prompt("Enter Your Favorite ");
// var isavailable = false;
// for (let index = 0; index < Fruit.length; index++) {
//     var Faizzy = user.toLowerCase();
//     if (Fruit[index] === Faizzy) {
//         isavailable = true;
//         break;
//     }
   
// }
// if (isavailable === true) {
//     console.log("Yes Available");
// } else {
//     console.log("Not Available");
// }



// console.log("This program adds 1, 2 and 54");
// function addthreenumbers(a, b, c) {
//     return a + b * c;
// }
// let C = addthreenumbers(1, 2, 54)

// console.log(C);


// var Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sturday", "Sunday" ];
// var date = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];

// var Recodementions = [];


// var dummytext = "aquickbrownfox  jumpsoverthelazydog";
// var available = false;
// for (let index = 0; index < dummytext.length; index++) {
//     var currentindex = dummytext[index];
//     var checkingspace = dummytext.slice(index, index+ 2);
//     if (checkingspace ===  "  ") {
//         available = true;
//     }
// }


// if (available === true) {
//     console.log("Your text content double space");
// } else {
//     console.log("Your text do not content double space");
// }


var month = prompt("Enter a month");

var charinmonth = month.length
if (charinmonth > 3) {
    monthbreve = month.slice(1, 7)
}
console.log(monthbreve);