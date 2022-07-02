public class BooleanComparisons {
    public static void main(String[] args) {
        int sachinOdiRuns = 18426;
        int rickyOdiRuns = 13704;
        int viratOdiRuns = 13704;

        System.out.println("sachinOdiRuns > rickyOdiRuns: " +
                (sachinOdiRuns > rickyOdiRuns));
        System.out.println("rickyOdiRuns >= viratOdiRuns: " +
                (sachinOdiRuns >= rickyOdiRuns));
        System.out.println("sachinOdiRuns != rickyOdiRuns: " +
                (sachinOdiRuns != rickyOdiRuns));

        double sachinStrikeRate = 86.2;
        double rickyStrikeRate = 80.4;

        System.out.println("sachinStrikeRate > rickyStrikeRate: " +
                (sachinStrikeRate > rickyStrikeRate));

        System.out.println("sachinStrikeRate == rickyStrikeRate: " +
                (sachinStrikeRate == rickyStrikeRate));

        int boultOdiWickets = 170;
        int bumrahOdiWickets = 110;
        int bhuviOdiWickets = 170;

        System.out.println("bumrahOdiWickets < boultOdiWickets: " +
                (bumrahOdiWickets < boultOdiWickets));
        System.out.println("bhuviOdiWickets <= boultOdiWickets: " +
                (bhuviOdiWickets <= boultOdiWickets));

        String cricketer1 = "Sachin Tendulkar";
        String cricketer2 = "Sachin Tendulkar";

        System.out.println(cricketer1.equals(cricketer2));

        String sachinPlayed = "200";
        String rickyPlayed = "Two Hundred";

        System.out.println(!sachinPlayed.equals(rickyPlayed));

    }
}
