describe('Withdrawal', function() {

  beforeEach(function(){
    withdrawal = new Withdrawal(20, "2018/1/1");
  });

  it('Returns withdrawal amount', function(){
    expect(withdrawal.amount()).toEqual(20);
  });

  it('Returns the date', function(){
    expect(withdrawal.date()).toEqual("2018/1/1");
  });
});
