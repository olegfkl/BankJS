describe('Withdrawal', function() {

  beforeEach(function(){
    withdrawal = new Withdrawal(20);
  });

  it('Returns withdrawal amount', function(){
    expect(withdrawal.amount()).toEqual(20);
  });

  it('Returns its type', function(){
    expect(withdrawal.type()).toEqual('debit');
  });
});
