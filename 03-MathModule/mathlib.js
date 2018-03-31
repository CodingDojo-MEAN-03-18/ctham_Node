module.exports = function (){
    return {
      add: function(num1, num2) { 
           // add code here
           console.log(`Add ${num1} and ${num2} is `,num1+num2);
      },
      multiply: function(num1, num2) {
           // add code here 
           console.log(`Multiply ${num1} and ${num2} is `,num1*num2);
      },
      square: function(num) {
           // add code here 
           console.log(`Square of ${num} is `,num*num);
      },
      random: function(num1, num2) {
           // add code here
           console.log(`Random between ${num1} and ${num2} is`,Math.floor(Math.random() * (num2 - num1) ) + num1);
      }
    }
  };
  
