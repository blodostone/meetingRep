/**
A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished
**/

  //input: num, num, function
  //output: underfined
function sum(from, to, printer) {
    let sum = 0;
    while (from < to) {
        sum += from;
        from++
    }

    printer(sum)
  }

  //input: num
  //output: underfined
  function printResult(res) {
    console.log('Result is: '+ res)
  }

  sum(5, 10, printResult);
  