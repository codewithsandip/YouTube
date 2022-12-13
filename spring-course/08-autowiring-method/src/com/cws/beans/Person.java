package com.cws.beans;

public class Person {
  private String name;
  private Address address;

  public Person() {
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Address getAddress() {
    return address;
  }

  public void setAddress(Address address) {
    this.address = address;
  }

  @Override
  public String toString() {
    return "Person{" +
            "name='" + name + '\'' +
            ", address=" + address.getCity() +
            '}';
  }
}
