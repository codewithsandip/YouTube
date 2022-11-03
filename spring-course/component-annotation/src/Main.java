import com.cws.beans.Jio;
import com.cws.beans.Vodafone;
import com.cws.config.AppConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
    public static void main(String[] args) {
        Vodafone sim1 = new Vodafone("10101001");
        sim1.calling();
        sim1.data();

        AnnotationConfigApplicationContext context =
                new AnnotationConfigApplicationContext(AppConfig.class);
        Vodafone sim2 = context.getBean(Vodafone.class);
        sim2.calling();
        sim2.data();

        String name = context.getBean(String.class);
        Integer age = context.getBean(Integer.class);

        System.out.println(name);
        System.out.println(age);

        Jio sim3 = context.getBean(Jio.class);
        sim3.calling();
        sim3.data();
    }
}