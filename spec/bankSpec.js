
describe('Bank', function() {

  beforeEach(function(){
    bank = new Bank();
  });

  it('Returns bank name', function(){
    expect(bank.name()).toEqual('HSBC');
  });
  // improve this (not object but instances)
  it('Returns an array of accounts', function(){
    expect(bank.accounts()).toEqual(jasmine.any(Object));
  });
   // stub account?
  describe('#createAccount', function() {
    it('Creates a new account', function(){
      expect(bank.createAccount('John')).toEqual(jasmine.any(Object));
    });
  });

  describe('#deposit', function() {
    it('deposits an acount', function(){
      bank.createAccount('John')
      expect(bank.deposit(1, 55)).toEqual(55);
    });

    it('Throws error if account not found', function(){
      expect(function() {
        expect(bank.deposit(1, 55));
      }).toThrowError('Account was not found');
    });
  });


  // describe('#withdraw', function() {

  //   it('I can withdraw money from my account', function(){
  //     account.deposit(20)
  //     account.withdraw(20)
  //     expect(account.balance()).toEqual(0);
  //   });
  //   it("cannot withdraw more than balance", function(){
  //     expect(function() {
  //       expect(account.withdraw(20));
  //     }).toThrowError("Insufficient funds");
  //   });
  // });
});
