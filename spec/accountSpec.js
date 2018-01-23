
describe('Account', function() {

  beforeEach(function(){
    account = new Account('John Smith', 123456);
  });

  it('Returns account holder name', function(){
    expect(account.name()).toEqual('John Smith');
  });

  it('Returns account number', function(){
    expect(account.number()).toEqual(123456);
  });

  it('Returns the balance', function(){
    expect(account.balance()).toEqual(0);
  });

  xit('Adds money to the account', function(){
    expect(account.receive()).toEqual();
  });

  xit('Adds transaction to account history', function(){
    expect(account.addToHistory(1)).toEqual(1);
  });

  xit('Returns account history', function(){
    account.addLog(1)
    expect(account.history()).toEqual(1);
  });
});
