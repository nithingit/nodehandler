let adder = (sum, element) => {
	let p = new Promise ((resolve) => {
    resolve(sum + element);
  });

  return p;
}


export let loop = (request, h) => {
  let numbers = [1,2,3,4,5,6,7,8,9,10];
  let sum = 0;
  console.log(`Trying to add ${numbers[0]}`);
let flag=false;

adder(sum, numbers[0])
  		.then(res => {
       
        sum = res;
loghandler (sum,numbers[1]);
 
adder(sum, numbers[1]).then(res => {
        
        sum = res;
loghandler (sum,numbers[2]);

adder(sum, numbers[2]).then(res => {
        
        sum = res;
loghandler (sum,numbers[3]);

adder(sum, numbers[3]).then(res => {
        
        sum = res;
loghandler (sum,numbers[4]);

adder(sum, numbers[4]).then(res => {
        
        sum = res;
loghandler (sum,numbers[5]);

adder(sum, numbers[5]).then(res => {
        
        sum = res;
loghandler (sum,numbers[6]);

adder(sum, numbers[6]).then(res => {
        
        sum = res;
loghandler (sum,numbers[7]);

adder(sum, numbers[7]).then(res => {
        
        sum = res;
loghandler (sum,numbers[8]);

adder(sum, numbers[8]).then(res => {
        
        sum = res;
loghandler (sum,numbers[9]);

adder(sum, numbers[9]).then(res => {
        
        sum = res;

console.log(`Current sum is ${sum}`);
flag=true;
  });

});
  });

});

  });

});

  });

});


      });

});



  return (numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]+numbers[5]+numbers[6]+numbers[7]+numbers[8]+numbers[9]);   
};

export let loghandler = (sum,n) =>{
console.log(`Current sum is ${sum}`);
console.log(`Trying to add ${n}`);

}

