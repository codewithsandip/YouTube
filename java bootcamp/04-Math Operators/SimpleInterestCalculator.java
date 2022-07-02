public class SimpleInterestCalculator {
    public static void main(String[] args) {
        double principal = 5000;
        double rateOfInterest = 6;

        System.out.println("Simple interest for 1 year: " + ((principal * rateOfInterest * 1) / 100));
        System.out.println("Simple interest for 2 year: " + ((principal * rateOfInterest * 2) / 100));
        System.out.println("Simple interest for 3 year: " + ((principal * rateOfInterest * 3) / 100));
        System.out.println("Simple interest for 10 year: " + ((principal * rateOfInterest * 10) / 100));
    }
}
