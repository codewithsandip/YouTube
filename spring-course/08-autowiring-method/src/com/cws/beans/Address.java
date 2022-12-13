package com.cws.beans;

public class Address {
  private String city;
  private String pin;

  public Address() {
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getPin() {
    return pin;
  }

  public void setPin(String pin) {
    this.pin = pin;
  }

  @Override
  public String toString() {
    return "Address{" +
            "city='" + city + '\'' +
            '}';
  }
}
