
describe('Account', function() {

  describe('#deposit', function() {
    it('I can deposit money to the account', function(){
      bank.deposit(20)
      expect(bank.balance()).toEqual(20);
    });
  });

  describe('#withdraw', function() {

    it('I can withdraw money from my account', function(){
      bank.deposit(20)
      bank.withdraw(20)
      expect(bank.balance()).toEqual(0);
    });
  });
});
