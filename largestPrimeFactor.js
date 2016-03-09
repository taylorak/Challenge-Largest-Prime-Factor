exports.largestPrimeFactor = function(n){
  var primeNumber = 0;

  while(n % 2 === 0) {
      primeNumber = 2;
      n /= 2;
  }

  for( var i = 3; i < Math.sqrt(n); i = i + 2) {
      while(n % i === 0) {
          primeNumber = i;
          n /= i;
      }
  }

  if(n > 2) {
      primeNumber = n;
  }

  return primeNumber;
};