console.log("1");
const Arr =[34,"hello"];
const arr1=[12,54,"test",true]
 
let newArr=function(arr,val){
let i=arr.length-1;
while(i>=0){
arr[i+1]=arr[i]
    i=i-1
}
arr[0]=val;
    
}
newArr(Arr,"world");
console.log(Arr);


newArr(arr1,false)
console.log(arr1); 



console.log("//////////////////////////////////////////////////");
console.log("2.1");
let a =[5,"hello",undefined,10,true,"","test",null,2];

let filter=function(arr){
    let newArr=[];
    let i=0;
    arr.forEach(function(val){
      if(val>0 || typeof(val)=="string"){
        newArr[i]=val;
        i++;
        
      }

});

return newArr;
};
console.log(filter(a));
//Ստեղ դատարկ սթրինգի պահը չի ստացվում․․․պայմանի մեջ սխալ եմ անում ,բայց չգիտեմ ինչ


console.log("//////////////////////////////////////////////////");
console.log("2.2");

let b =[5,"hello",undefined,10,true,"","test",null,2];
function newArr1(arr) {
   
    return arr.filter(Boolean);
  }
 
  console.log(newArr1(b));

  
  console.log("//////////////////////////////////////////////////");
  console.log("2.3");
  let x=[5,"hello",undefined,10,true,"","test",null,2];
   
  let x2=x.filter(function(val){
    return val;
  });
  console.log(x2);