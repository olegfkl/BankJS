
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
// write test to 'increse by' balance
    it('Throws error if account not found', function(){
      expect(function() {
        expect(bank.deposit(1, 55));
      }).toThrowError('Account was not found');
    });
  });

  // write test to 'decrese by' balance

  describe('#withdraw', function() {
    it('withdraws money from my account', function(){
      bank.createAccount('John')
      bank.deposit(1,20)
      expect(bank.withdraw(1,20)).toEqual(20);
    });
    it('Throws error if account not found', function(){
      expect(function() {
        expect(bank.withdraw(1, 20));
      }).toThrowError("We couldn't identify you");
    });

    it("cannot withdraw more than available balance", function(){
      bank.createAccount('John')
      expect(function() {
        expect(bank.withdraw(1, 20));
      }).toThrowError('Insufficient funds');
    });
  });

  describe('#viewAccount', function() {
    xit('Returns true?', function(){
      bank.createAccount('John')
      expect(bank.deposit(1, 55)).toEqual(55);
    });
  });
});
