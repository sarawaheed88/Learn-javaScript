/*
Output to screen
1- window.alert()
2- document.write()
console.log()
*/
// window.alert("Hello from Js file");
//document.write("<h1>Hello <span>Page</span></h1>");
//console.log("Hello from js file");
/***************************************************************************************************/
//document.querySelector("h2").style.color = "blue";
/**********************************************************************************************************/
/*
console methods
*/
// console.log("log");
// console.error("Error");
// console.table(["Sara" , "Ahmed" , "Waheed"]);
// console.log("%cHello from %cjs file" , "color: red; font-size: 40px" , "color: blue; font-size:20px");
/*****************************************************************************************************************/
/*
ECMAScript (ES6)
*/
/*******************************************************************************************************/
/*
    Data Types 
    -String
    -Number
    -Array => object
    Boolean

*/
// console.log("Sara Waheed");
// console.log(typeof "Sara Waheed");
// console.log(typeof 5000);
// console.log(typeof 5000.9);
// console.log(typeof [10, 14, 18]);
// console.log(typeof ["sa", "Ah", "De"]);
// console.log(typeof {name: 'Sara', age: 18, country: "Eg"});
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof null);
/***************************************************************************************************************/

/*
    Variables
*/
//var user  = "Sara", age = 24;
// console.log(user);
// console.log(user);
// console.log(user);
// console.log(user);
// console.log(user);
// console.log(hello);
// hello.innerHTML = "Option";

/**********************************************************************************************************/
/*
Var [ can redeclare ]
Let [ can't redeclare ]
const [ can't redeclare ]
*/

//const a = 1 ;
// const a = 4 ;
//console.log(a);
// let aabb = 3 ;
// console.log(aabb);
/************************************************************************************************************/
/*
character Escape sequences
*/

/*
Template literals ( Template Strings)
*/

// let a = "We Love" ;
// let b = "JavaScript" ;
// let c = "And" ;
// let d = "Programming" ;

// //console.log(a + " " + b + " " + c + " " + d) ;
// console.log(`${a} " " ${b} / ${c} ${d}`)

//

/************************************************************************************************************ */

/*
Challenge one
*/

// let titleName = "Elzero" , descriptionCont = "Elzero Web School" , dateDay = "25/10" ;

// let divContent = `
//     <div class = "card">
//         <h3> ${titleName} </h3>
//         <p> ${descriptionCont} </p>
//         <span> ${dateDay} </span>
//     </div>
// `;

// let repeatVar = divContent.repeat(4);

// document.write( repeatVar );

// console.log(1_000_000)
// console.log(1e6)
// console.log(10**6)
// console.log(1_000_000)
// console.log(Number.)

/*
Number Methods
*/
// console.log((100).toString());
// console.log(100.10.toString());
// console.log(100.55555555.toFixed(3));
// console.log(Number("100 osama"));
// console.log(+"100 sara");
// console.log(parseInt("100 sara"));
// console.log(parseFloat("100.345 osama"))

// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(100.99));
// console.log(Number.isInteger(100));

// console.log(Number.isNaN(100));
// console.log(Number.isNaN("sara" / 30));

/*
Math object
*/

// console.log(Math.round(99.2));
// console.log(Math.round(99.5));

// console.log(Math.ceil(99.2));
// console.log(Math.floor(99.9));

// console.log(Math.min(10 , 20 , 100 , -100 , 90));
// console.log(Math.max(10 , 20 , 100 , -100 , 90));

// console.log(Math.pow(2 , 4));

// console.log(Math.random());

// console.log(Math.trunc(99.9));

// let a = 1_00 ;
// let b = 2_00.5 ;
// let c = 1e2 ;
// let d = 2.4 ;

// console.log(Math.min(a , b , c , d));
// console.log(Math.trunc(a , b , c , d));

/*String Methods */
//let theName = "Ahmed" ;
// let theName = "  Ahmed  " ;
// console.log(theName);
// console.log(theName[0]);
// console.log(theName[5]);

// console.log(theName.charAt(1));
// console.log(theName.charAt(5));

// console.log(theName.length);
// console.log(theName.trim());

// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());

// console.log(theName.trim().charAt(2).toUpperCase());

//let a = "Elzero Web School" ;
// console.log(a.indexOf("Web"));
// console.log(a.indexOf("Web" , 8));
// console.log(a.indexOf("Web" , 5));

// console.log(a.lastIndexOf("o"));

// console.log(a.slice(2 , 6));
// console.log(a.slice(-5  , -3));

// console.log(a.repeat(5));

// console.log(a.split(" " , 2));

// console.log(a.length);

// console.log(a.substring(2 , 6));
// console.log(a.substring(8 , 2));
// console.log(a.substring(-1 , 6));
// console.log(a.substring(a.length - 5 , a.length - 3));

// console.log(a.substr(0 , 8));
// console.log(a.substr(-5 , 2));

// console.log(a.includes("Web"));
// console.log(a.includes("Web" , 8));
// console.log(a.startsWith("E" , 4)); //length
// console.log(a.endsWith("l" , 6)); //length

/*comparison operators */

// console.log(10 == "10"); //compare value only
// console.log(-100 == "-100"); //compare value only
// console.log(10 != "10"); //compare value only

// console.log(10 === "10"); //compare value + type
// console.log(10 !== 10); //compare value + type
// console.log(10 !== "10"); //compare value + type

/*logical operators */

/*control flow 
if 
else if 
else
*/
// let price = 100 ;
// let discount = false ;
// let discountAmount = 30 ;
// let country = "Egypt" ;
// let student = true ;

// if (discount === true){
//     price -= discountAmount ;
// }else if (country === "Egypt"){
//     price -= 40 ;
// } else {
//     price -= 10 ;
// }
// console.log(price);

/*Nested If*/
// if ( country === "Egypt" ){
//     if( student === true ){
//         price -= discountAmount + 30 ;
//     }else {
//         price -= discountAmount + 10 ;
//     }
// }

/* Conditional (Ternary) Operator */

// let theName = "Ahmed";
// let theGender = "Male";
// let theAge = 24;

// if (theGender === "Male") {
//   console.log("Mr");
// } else {
//   console.log("Mrs");
// }
// //condition ? If True : If False
// theGender === "Male" ? console.log("Mr") : console.log("Mrs");

// let result = theGender === "Male" ? "Mr" : "Mrs";
// //document.write(result);
// console.log(theGender === "Male" ? "Mr" : "Mrs");
// console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

// theAge < 20
//   ? document.write(20)
//   : theAge > 20 && theAge < 60
//   ? document.write("20 To 60")
//   : theAge > 60
//   ? document.write("Larger than 60")
//   : document.write("UnKnown");

/*Switch Statment */

let day = 2 ;

switch (day) {
    case 0:
        console.log("Saturday") ;
        break ;
    case 1:
        console.log("Sunday") ;
        break ;
    case 2:
        console.log("Monday") ;
        break ;
    default:
        console.log("UnKnown Day") ;

}
