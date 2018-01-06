
describe('Bank', function() {

  beforeEach(function(){
    doubleView = new DoubleView();
    bank = new Bank('HSBC', doubleView, DoubleAccount);
  });

  it('Returns bank name', function(){
    expect(bank.name()).toEqual('HSBC');
  });

  it('Returns an array of accounts', function(){
    expect(bank.accounts()).toEqual(jasmine.any(Array));
  });

  describe('#createAccount', function() {
    it('Creates a new account', function(){
      expect(bank.createAccount('John')).toEqual(jasmine.any(DoubleAccount));
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

  describe('#withdraw', function() {
    it('withdraws money from my account', function(){
      bank.createAccount('John')
      bank.deposit(1, 20)
      expect(bank.withdraw(1, 20)).toEqual(20);
    });
    it('Throws error if account not found', function(){
      expect(function() {
        expect(bank.withdraw(1, 20));
      }).toThrowError("We couldn't identify you");
    });

    it("cannot withdraw more than available balance", function(){
      bank.createAccount('John')
      expect(function() {
        expect(bank.withdraw(1, 30));
      }).toThrowError('Insufficient funds');
    });
  });

  describe('#viewAccount', function() {
    it('asks View to display account history', function(){
      bank.createAccount('John')
      bank.deposit(1, 20)
      expect(bank.viewAccount(1)).toEqual(true);
    });
  });
});
