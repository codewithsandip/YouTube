import com.cws.beans.Airtel;
import com.cws.config.AppConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
 public static void main(String[] args) {
  AnnotationConfigApplicationContext context =
   new AnnotationConfigApplicationContext
           (AppConfig.class);
  Airtel sim = context.getBean(Airtel.class);
  System.out.println(sim);
  context.close();
 }
}