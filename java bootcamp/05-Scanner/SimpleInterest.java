import java.util.Scanner;

public class SimpleInterest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("What's your name?");
        String name = scanner.nextLine();
        System.out.println("Welcome " + name);
        System.out.println("\nEnter the principal:");
        double principal = scanner.nextDouble();
        System.out.println("\nEnter interest rate:");
        double rateOfInterest = scanner.nextDouble();
        System.out.println("\nEnter tenure:");
        double time = scanner.nextDouble();
        double simpleInterest = (principal * rateOfInterest * time) / 100;
        System.out.println("\nFor principal of " + principal +
                " at the interest rate of " + rateOfInterest + "% for tenure of " +
                time + " year(s) you will pay Rs. " + simpleInterest + " of interest");
        scanner.close();
    }
}