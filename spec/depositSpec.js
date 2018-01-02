
describe('Deposit', function() {

  beforeEach(function(){
    deposit = new Deposit(20, "2018/1/1");
  });

  it('Returns deposit amount', function(){
    expect(deposit.amount()).toEqual(20);
  });

  it('Returns the date', function(){
    expect(deposit.date()).toEqual("2018/1/1");
  });
});
