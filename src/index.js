module.exports = function getZerosCount(number, base) {
  let rez = 0;
  let rezult=0;
  let mass ={};
  let count = 2;
  let n = 1;
  let s = 1;
while(1){
  rez=base/count;
    if(Number.isInteger(rez)===true){
      base = rez;
      mass[count]=n;
      n++;
    }
    else{
      count++;
      n=1;
    }
    if(base==1)
      break;
  }

for(let i in mass){
  let ex =number;
  let sum =0;
  let del=Number.parseInt(i);
  
    while(1){
      if(ex>=1){
        ex=0;
        ex=Math.floor(number/del);
        sum+=ex;
        del*=Number.parseInt(i);
      }
      else{
        break;
      }
    }
  sum=sum/mass[i];
  if(s==1){
    rezult=sum;
  }
  else{
    if(rezult>sum){
      rezult=sum;
    }
  }
     s++;
 }
 return Math.floor(rezult);
}