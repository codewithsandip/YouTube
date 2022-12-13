package com.cws.config;

import com.cws.beans.Address;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
@ComponentScan(basePackages = "com.cws.beans")
public class AppConfig {
  @Bean
  Address address1() {
    Address address1 = new Address();
    address1.setCity("Mumbai");
    return address1;
  }

  @Bean
  @Primary
  Address address2() {
    Address address1 = new Address();
    address1.setCity("Delhi");
    return address1;
  }

  @Bean
  Address address3() {
    Address address1 = new Address();
    address1.setCity("Pune");
    return address1;
  }
}
