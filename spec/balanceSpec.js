
describe('Balance', function() {

  beforeEach(function(){
    balance = new Balance();
  });

  it('Returns the amount on the account', function(){
    expect(balance.amount()).toEqual(0);
  });

  describe('#addMoney', function() {
    it('Add money to balance', function(){
      expect(balance.addMoney(10)).toEqual(10);
    });
  });

  describe('#reduceMoney', function() {
    it('Add money to balance', function(){
      balance.addMoney(10)
      expect(balance.reduceMoney(10)).toEqual(0);
    });
  });
});
