public class IfElseNesting {
    public static void main(String[] args) {
        double money = 100;

        if (money <= 200 && money > 100) {
            System.out.println("You can buy apple airpods!");
        } else if (money <= 500) {
            System.out.println("You can buy an apple watch!");
        } else if (money <= 900) {
            System.out.println("You can buy apple ipad!");
        } else if (money <= 1200) {
            System.out.println("You can buy a macbook!");
        } else {
            System.out.println("You need to earn more to buy apple products!");
        }
    }
}
