import com.cws.beans.Person;
import com.cws.config.AppConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
  public static void main(String[] args) {
    AnnotationConfigApplicationContext context =
            new AnnotationConfigApplicationContext(AppConfig.class);
    System.out.println("Before accessing the bean");
    Person p1 = context.getBean(Person.class);
    System.out.println("After accessing the bean");
  }
}