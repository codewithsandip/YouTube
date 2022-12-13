package com.cws.config;

import com.cws.beans.Vodafone;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean(name="v1")
    Vodafone vodafone() {
        Vodafone vodafone = new Vodafone("282012810");
        return vodafone;
    }

    @Bean(name="v2")
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
