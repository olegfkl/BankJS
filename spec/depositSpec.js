
describe('Deposit', function() {

  beforeEach(function(){
    deposit = new Deposit(20);
  });

  it('Returns deposit amount', function(){
    expect(deposit.amount()).toEqual(20);
  });
});
