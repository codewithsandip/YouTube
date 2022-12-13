package com.cws.config;

import com.cws.beans.Address;
import com.cws.beans.Person;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean
    Person person() {
        Person person = new Person();
        person.setName("Sandip");
        person.setAddress(address());
        return person;
    }
    @Bean
    Address address() {
        Address address = new Address();
        address.setCity("Pune");
        return address;
    }
}
