
describe('Balance', function() {

  beforeEach(function(){
    balance = new Balance();
  });

  it('Returns the amount on the account', function(){
    expect(balance.amount()).toEqual(0);
  });
});
