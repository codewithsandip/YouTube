public class LogicalOperators {
    public static void main(String[] args) {
        String indiaBattingPerformance = "Good";
        String indiaBowlingPerformance = "Good";

        /*
         * if (!indiaBattingPerformance.equals("Poor")
         * || !indiaBowlingPerformance.equals("Poor")) {
         * System.out.println("India has chances of winning the match!");
         * } else {
         * System.out.println("India has high chances of losing the match!");
         * }
         */

        if (indiaBattingPerformance.equals("Good") &&
                indiaBowlingPerformance.equals("Good")) {
            System.out.println("India has high chances of wining match!");
        } else {
            System.out.println("India might lose the game!");
        }

    }
}
