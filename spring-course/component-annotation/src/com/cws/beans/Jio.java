package com.cws.beans;

import org.springframework.stereotype.Component;

@Component
public class Jio {
    private String imeiNumber;

    public Jio(String imeiNumber) {
        this.imeiNumber = imeiNumber;
    }

    public void calling() {
        System.out.println("calling using jio");
    }

    public void data() {
        System.out.println("surfing using jio");
    }
}
