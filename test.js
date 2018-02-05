




const print= function lovepreet(n,m){
  addition(n,m,function(result){
    console.log(result);
  })
}


const addition=function fn(n,m,useless)
{
  total=n+m

useless(total)
}


print('love','singh')



function getfunction(n){

if(n%2===0)
return ()=>  n+2
else {
  return ()=>  n-2
}

}

const fn=getfunction(9)
console.log(fn());
