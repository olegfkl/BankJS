
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
});
// mock balance and maybe acc number
