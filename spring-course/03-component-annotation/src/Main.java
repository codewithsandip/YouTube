import com.cws.beans.Jio;
import com.cws.beans.Vodafone;
import com.cws.config.AppConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context =
                new AnnotationConfigApplicationContext(AppConfig.class);
        Jio sim3 = context.getBean(Jio.class);
        sim3.calling();
        sim3.data();
    }
}