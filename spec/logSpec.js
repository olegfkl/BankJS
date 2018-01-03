describe('History', function() {

  beforeEach(function(){
    log = new Log({amount: 30}, 50, '2018/1/1');
  });

  it('Returns a transaction', function(){
    expect(log.view()).toEqual(jasmine.any(Object));
  });

  it('Returns a balance', function(){
    expect(log.balance()).toEqual(50);
  });

  it('Returns the date', function(){
    expect(log.date()).toEqual('2018/1/1');
  });
});
// mock transaction, currentBalance, date
