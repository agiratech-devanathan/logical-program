a=4;
count=0;
for(i=1;i<=a;i++){
  if(a%i===0){
    count++;
  }
}
if(count==2){
  console.log("prime")
}
else{
  console.log(" not prime")
}
