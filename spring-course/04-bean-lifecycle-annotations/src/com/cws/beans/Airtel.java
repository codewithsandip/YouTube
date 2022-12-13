package com.cws.beans;

import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

@Component
public class Airtel {
    private String imeiNumber;

    @PostConstruct
    private void init() {
        this.imeiNumber = "01111";
    }

    @PreDestroy
    private void destroy() {
        System.out.println("destroying airtel sim");
    }

    public Airtel(String imeiNumber) {
        this.imeiNumber = imeiNumber;
    }

    public void calling() {
        System.out.println("calling using airtel");
    }

    public void data() {
        System.out.println("surfing using airtel");
    }

    @Override
    public String toString() {
        return "Airtel{" +
                "imeiNumber='" + imeiNumber + '\'' +
                '}';
    }
}
