"use strict"

// console.log("salam");
//1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

// let divideThreeorSeven = (num) => {
//     if(num % 21 ==0){
//         console.log("bolunur")
//     }else{
//         console.log("bolunmur")
//     }
// }
// divideThreeorSeven(42)

// function divideThreeorSeven (num){
//     if(num % 21 ==0){
//         console.log("bolunur")
//     }else{
//         console.log("bolunmur")
//     }
// }
// divideThreeorSeven(84)

//2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 


// let getFactorial = (num) =>{
//     let multiple=1;
//     for(let i = 1;i<=num;i++){
//         multiple*=i
//     }
//     console.log(multiple);

// }
// getFactorial(5)

// function getFactorial (num){
//     let multiple=1;
//     for(let i=1;i<=num;i++){
//         multiple*=i
//     }
//     console.log(multiple);
// }
// getFactorial(7)

//3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

// let squareSumEvenNumsOfArray = (arr) => {
//     let square = 1;
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             square = arr[i] ** 2;
//             sum += square;
//         }



//     }
//     console.log(sum)

// }
// let arr = [1,2,8,10]
// squareSumEvenNumsOfArray(arr);

// function squareSumEvenNumsOfArray (arr){
//     let square=1;
//     let sum=0;
//   for(let i =0;i<arr.length;i++){
//        if(arr[i]%2==0){
//         square=arr[i]**2;
//         sum+=square;
//        }
//   }
//   console.log(sum);
// }
// let nums=[2,3,4,6,8,9]
// squareSumEvenNumsOfArray(nums);

//4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 

// let login =(email,password)=>{
//     if(email == "cavid@code.edu.az" && password == 12345){
//         console.log("Girish olundu");
//     }else{
//         console.log("Mail ve yaxud password sehvdir");
//     }
// }
// login("cavid@code.edu.az",12345)

// function login (email,password){
//     if(email == "cavid@code.edu.az" && password == 12345){
//         console.log("Girish olundu");
//     }else{
//         console.log("Mail ve yaxud password sehvdir");
//     }
// }
// login("cavid@code.edu.az",12345)

//5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

// let getSumOddNums =(arr) => {
//     let sum=0;
//   for(let i =0;i<arr.length;i++){
//     if(arr[i] % 2 == 1){
//        sum+=arr[i];
//     }
//   }
//   return sum;
// }
// let nums=[1,2,3,5,7]
// console.log(getSumOddNums(nums));

// function getSumOddNums (arr) {
//     let sum=0;
//     for(let i =0;i<arr.length;i++){
//       if(arr[i] % 2 == 1){
//          sum+=arr[i];
//       }
//     }
//     return sum;

// }
// let nums=[1,3,5,13]
// console.log(getSumOddNums(nums));


//6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// let getCountEvenNums = (arr) =>{
//     let count=0;
//     for(let i = 0;i < arr.length;i++){
//         if(arr[i] % 2 == 0){
//               count++;
//         }
//     }
//     return count;
// }
// let nums = [1,2,3,4,5,6,7,9,10]
// console.log(getCountEvenNums(nums));

// function getCountEvenNums (arr){
//     let count=0;
//     for(let i = 0;i < arr.length;i++){
//         if(arr[i] % 2 == 0){
//               count++;
//         }
//     }
//     return count;
// }
// let nums = [1,2,3,4,5,6,7]
// console.log(getCountEvenNums(nums));