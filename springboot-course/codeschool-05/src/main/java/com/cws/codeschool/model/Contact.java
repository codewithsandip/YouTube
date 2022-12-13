package com.cws.codeschool.model;

import lombok.Data;

@Data
public class Contact {
  private String name;
  private String email;
  private String subject;
  private String message;
}
