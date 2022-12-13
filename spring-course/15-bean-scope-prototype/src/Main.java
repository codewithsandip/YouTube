import com.cws.beans.Person;
import com.cws.config.AppConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
  public static void main(String[] args) {
    AnnotationConfigApplicationContext context =
            new AnnotationConfigApplicationContext(AppConfig.class);
    Person p1 = context.getBean(Person.class);
    Person p2 = context.getBean("person", Person.class);
    System.out.println(p1.hashCode());
    System.out.println(p2.hashCode());
  }
}