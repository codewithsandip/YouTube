import java.rmi.server.SocketSecurityException;
import java.util.Scanner;

public class PremiumHomes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome to Premium Homes!");
        System.out.println("Select option 'a' to buy a house");
        System.out.println("Select option 'b' to sell a house");

        String option = scanner.nextLine();

        switch (option) {
            case "a":
                System.out.println("You chose to buy a house");
                System.out.println("\nWhat's your budget?");

                int budget = scanner.nextInt();

                if (budget > 10000000) {
                    System.out.println("\nA premium 3 BHK flat is available");
                    System.out.println("\nAre you an Indian resident? yes or no");
                    scanner.nextLine();
                    String residentOfIndia = scanner.nextLine();
                    System.out.println("\nWhat's your take home salary?");
                    double takeHomeSalary = scanner.nextDouble();
                    System.out.println("\nWhat's your Credit Score?");
                    int creditScore = scanner.nextInt();

                    if (residentOfIndia.equals("yes")
                            && takeHomeSalary > 500000 && creditScore > 600) {
                        System.out.println("Congratulations! house sold!");
                    } else {
                        System.out.println("Sorry! you are not eligible!");
                    }
                } else {
                    System.out.println("Sorry, we dont sell below 1Cr");
                }
                break;
            case "b":
                System.out.println("You chose to sell a house");
                break;
            default:
                System.out.println("Invalid option");
        }
    }
}
