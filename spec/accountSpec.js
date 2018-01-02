
describe('Account', function() {

  describe('#deposit', function() {
    it('I can deposit money to the account', function(){
      account.deposit(20)
      expect(account.balance()).toEqual(20);
    });
  });

  describe('#withdraw', function() {

    it('I can withdraw money from my account', function(){
      account.deposit(20)
      account.withdraw(20)
      expect(account.balance()).toEqual(0);
    });
  });
});
