import com.cws.beans.Address;
import com.cws.beans.Person;
import com.cws.config.AppConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
  public static void main(String[] args) {
    AnnotationConfigApplicationContext context =
            new AnnotationConfigApplicationContext(AppConfig.class);
    Person person = context.getBean(Person.class);
    System.out.println(person);
    Address address = context.getBean(Address.class);
    System.out.println(address);
  }
}