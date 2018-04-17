const fs = require('fs');

fs.readFile('./puzzleInput.txt', (err, data) => {
  let j = data.length;
  let i = 0;
  let increment = 0;
  if (err) {
    console.log(err)
  }
  data = data.toString().split('');
  
  console.time('testing');
  while(j--) {
    if(data[i] === '(') {
      increment++;
    }
    else {
      increment--;
    }
    i++;
  }
  console.log(increment);
  console.timeEnd('testing'); //2.2
});

// function whichLevel(input) {
//   let increment = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] == '(') {
//       increment += 1;
//     }
//     if (input[i] == ')') {
//       increment -= 1;
//     }
//   }
//   return increment;
// }
