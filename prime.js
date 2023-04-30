function checkPrime(num){
  let count=0;
for(i=0;i<num;i++){
if(num%i==0){
count++
}
}
if(count==2){
console.log("Its a prime");
}
else{
console.log("its not a prime");
}
}

checkPrime(17)
