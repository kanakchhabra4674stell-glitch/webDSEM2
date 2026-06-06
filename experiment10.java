abstract class BankAccount{
double balance;
abstract void interest();
}
class Savings extends BankAccount{
void interest(){
System.out.println(balance * 0.05);
}
}
public class Main{
public static void main(String[] args){
Savings s = new Savings();
s.balance = 1000;
s.interest();
}
}