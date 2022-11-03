package com.cws.beans;

public class Vodafone {
    private String imeiNumber;

    public Vodafone(String imeiNumber) {
        this.imeiNumber = imeiNumber;
    }

    public void calling() {
        System.out.println("calling using vodafone-" + imeiNumber);
    }

    public void data() {
        System.out.println("surfing using vodafone-" + imeiNumber);
    }

    @Override
    public String toString() {
        return "Vodafone{" +
                "imeiNumber='" + imeiNumber + '\'' +
                '}';
    }
}
