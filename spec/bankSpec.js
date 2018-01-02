describe('Bank', function(){

  var Bank = require('../src/bank.js');

  it('has starting amount 10', function(){
    expect(bank.amount).toEqual(10);
  });

});
