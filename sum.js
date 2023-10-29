// let sum=0
// for(let i=0;i<500;i++){
//     sum=sum+i
    
// }
// console.log(sum)
let sum=0
let n=prompt("enter the value of n")
n = Number.parseInt(n)
for(let i=0;i<n;i++){
    sum += (i+1)
}
console.log("sum of first " + n +  
 "natural number is" + sum)