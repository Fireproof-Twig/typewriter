// const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char)
//   }, 1000)
// }

const printCharacters = function(text) {
  let period = 0;
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      process.stdout.write(text[i])
      }, period);
    period += 500;
  }
  setTimeout(() => {
    console.log()
  }, 500 * text.length)   
};

// const printCharacters = function(text) {
//   let i = 0;
  
//   setInterval(() => {
//     process.stdout.write(text[i]);
//     i++;
//     if(i === text.length) {
      
//     }
//   }, 500);

// };

printCharacters("howdy ho")
  

