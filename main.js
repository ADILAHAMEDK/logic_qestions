 //(Q1) find the sum of two numbers and show the sum in webpage
 let a = 100;
 let b = 100;
 let total = a + b;
 let q1Browser = document.getElementById('q1').innerHTML = "sum is" + total;

 //(Q2) aa = 10; bb = 20; cc = 30; swibe the value
 // 30,  10, 20
 let aa = 10;
 let bb = 20;
 let cc = 30;
 let total1 = aa + bb;
 let total2 = bb - aa;
 let total3 = cc - bb + 10;
 aa = total1;
 bb = total2;
 cc = total3;

console.log(aa, bb, cc);

//(Q3) find the Largest number and Smallest number 
let num1 = 50;
let num2 = 30;

if(num1 > num2 ){
    console.log("Largest number is" + num1);
}else(num2 < num1);{
    console.log("Smallest number is" + num2);
}

//(Q4) find the value is a even number
let number1 = 50;

if(number1 % 2==0){
    console.log("this is a even numbers");
}else{
    console.log("this is a odd number");
}

