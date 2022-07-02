public class MathOperations {
    public static void main(String[] args) {
        int runsScoreBySachin = 18426;
        int runsScoreByKapil = 3783;

        long minWatchedOnFacebook = 6000000000L;
        long minWatchedOnYoutube = 60000000000L;

        double sachinOdiAvg = 50.6;
        double kapilOdiAvg = 23.8;

        System.out.println("Sachin and Kapil combined score: " + (runsScoreBySachin + runsScoreByKapil) + " in ODI");
        System.out.println("Combined min video watch time on Youtube and Facebook: "
                + (minWatchedOnYoutube + minWatchedOnFacebook) + " min daily");
        System.out.println("Sachin and Kapil combined average: " + (sachinOdiAvg + kapilOdiAvg) + " in ODI");

        System.out.println("Sachin scored " + (runsScoreBySachin - runsScoreByKapil) + " more than Kapil in ODI");
        System.out.println("Youtube being watched more than Facebook "
                + (minWatchedOnYoutube - minWatchedOnFacebook) + " min daily");
        System.out.println("Sachin averaged " + (sachinOdiAvg - kapilOdiAvg) + " more than Kapil in ODI");

        System.out.println("Sachin and Kapil ODI scores multiplied: " + (runsScoreBySachin * runsScoreByKapil));
        System.out.println("Sachin and Kapil averaged multiplied: " + (sachinOdiAvg * kapilOdiAvg));

        System.out.println("Sachin scored " + (runsScoreBySachin / runsScoreByKapil) + " times more than Kapil in ODI");
        System.out.println("Youtube being watched "
                + (minWatchedOnYoutube / minWatchedOnFacebook) + " times more daily");
        System.out.println("Sachin averaged " + (sachinOdiAvg / kapilOdiAvg) + " times more than Kapil in ODI");

        System.out.println("When we divide 10 by 2 we get " + (10 % 2) + " as remainder");
        System.out.println("When we divide 5 by 2 we get " + (5 % 2) + " as remainder");

        int counter = 0;
        counter++;
        counter++;
        counter++;
        System.out.println("I counted: " + counter);
        counter--;
        counter--;
        counter--;
        System.out.println("I counted: " + counter);

        counter += 10;
        System.out.println("I counted: " + counter);
        counter -= 10;
        System.out.println("I counted: " + counter);
    }
}
