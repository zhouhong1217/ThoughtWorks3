module.exports = function main(str) {
  // Write your cade here
  let num = parseInt(str);
  var sum = 0;

  for(let i = num ; i >= 1;i = i / 10){
    var num1 = parseInt(i % 10);
    console.log(num1)
    sum = sum + num1;
  }
  return sum;
};
