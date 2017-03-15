/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = ( function () {
  //private
  var calculator={};
  var memory=0;
  var total=0;
  if(typeof x !== 'number') {
      throw new Error('Wrong data type you dummy');
    }
  calculator.load = function (x){
    total = x;
    return total;
  };
  calculator.getTotal =  function(){
        return total;
    };

  calculator.add =  function(x){
    total+=x;
      return total;
  };

  calculator.subtract =  function(x){
      total-=x;
      return total;
  };

  calculator.multiply =  function(x){
      total*=x;
      return total;
  };

  calculator.divide =  function(x){
      total/=x;
      return total;
  };
  calculator.recallMemory= function(){
    return memory;
  };
  calculator.saveMemory= function(){
    memory=total;
    return memory;
  };
  calculator.clearMemory= function(){
    memory=0;
    return memory;
  };


//public
return calculator;

});

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */


  /**
   * Return the value of `total`
   * @return { Number }
   */


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

