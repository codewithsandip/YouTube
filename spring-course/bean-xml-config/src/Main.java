import com.cws.beans.Jio;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
  public static void main(String[] args) {
    ApplicationContext context =
       new ClassPathXmlApplicationContext("beans.xml");
    Jio sim = context.getBean("jio", Jio.class);
    System.out.println(sim);
  }
}