
describe('Transaction', function() {

  beforeEach(function() {
    transaction = new Transaction(578657, new Deposit(50));
  });

  it('Returns operation type', function(){
    expect(transaction.operation()).toEqual(jasmine.any(Object));
  });

  it('Returns operation amount', function(){
    expect(transaction.amount()).toEqual(50);
  });

  it('Returns destination account', function(){
    expect(transaction.destination(578657)).toEqual(578657);
  });
});
