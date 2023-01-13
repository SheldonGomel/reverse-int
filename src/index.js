module.exports = function reverse (n) {
      // Your solution here
      let result = "";
      n = Math.abs(n);
      let valstr = n + "";
      for (let i = 0; i < valstr.length; i++) { 
          result = result + valstr[valstr.length-i-1];
          }
      
      return ((isNaN(Number(result))) ? "It is not Number" : Number(result));
}
