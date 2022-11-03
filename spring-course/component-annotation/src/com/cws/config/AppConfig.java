package com.cws.config;

import com.cws.beans.Vodafone;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
@ComponentScan(basePackages = "com.cws.beans")
public class AppConfig {
    @Primary
    @Bean
    Vodafone vodafone() {
        Vodafone vodafone = new Vodafone("282012810");
        return vodafone;
    }

    @Bean
    Vodafone vodafone1() {
        Vodafone vodafone = new Vodafone("12344");
        return vodafone;
    }

    @Bean
    String name() {
        return "Sandip";
    }

    @Bean
    Integer age() {
        return 35;
    }
}
