import com.cws.beans.Jio;
import com.cws.beans.Vodafone;
import com.cws.config.AppConfig;
import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.Random;
import java.util.function.Supplier;

public class Main {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context =
                new AnnotationConfigApplicationContext(AppConfig.class);

        // Step 1: Creating the suppliers
        Jio jio = new Jio("000");
        Supplier<Jio> jioSupplier = () -> {
            return jio;
        };

        Supplier<Vodafone> vodafoneSupplier = () -> {
            return new Vodafone("111");
        };

        // Step 2: Generate random number
        Random random = new Random();
        int number = random.nextInt(20);
        System.out.println("random number: " + number);

        // Step 3: Register bean based on condition
        if (number % 2 == 0) {
            context.registerBean("jio", Jio.class, jioSupplier);
        } else {
            context.registerBean("vodafone", Vodafone.class, vodafoneSupplier);
        }

        Jio jioSim = null;
        Vodafone vodaSim = null;

        // Step 4: Exception handling
        try {
            jioSim = context.getBean("jio", Jio.class);
        } catch (NoSuchBeanDefinitionException e) {
            System.out.println("Error creating Jio Sim");
        }

        try {
            vodaSim = context.getBean("vodafone", Vodafone.class);
        } catch (NoSuchBeanDefinitionException e) {
            System.out.println("Error creating Vodafone Sim");
        }

        // Step 5: Logging the beans
        if (jioSim != null) {
            System.out.println("Jio Sim created programmatically: " + jioSim);
        } else {
            System.out.println("Vodafone Sim created programmatically: " + vodaSim);
        }
    }
}