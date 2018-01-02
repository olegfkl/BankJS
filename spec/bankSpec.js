//
// describe('Account', function() {
//
//   beforeEach(function(){
//     account = new Account();
//   });
//
//   it('Returns the balance', function(){
//     expect(account.balance()).toEqual(0);
//   });
//
//   describe('#deposit', function() {
//     it('I can deposit money to my account', function(){
//       account.deposit(20)
//       expect(account.balance()).toEqual(20);
//     });
//   });
//
//   describe('#withdraw', function() {
//
//     it('I can withdraw money from my account', function(){
//       account.deposit(20)
//       account.withdraw(20)
//       expect(account.balance()).toEqual(0);
//     });
//     it("cannot withdraw more than balance", function(){
//       expect(function() {
//         expect(account.withdraw(20));
//       }).toThrowError("Insufficient funds");
//     });
//   });
// });
