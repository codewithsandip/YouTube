package com.cws.codeschool.model;

import lombok.Data;

@Data
public class Conference {
  private final String day;
  private final String title;
  private final String author;
  private final Occurance occurance;

  public enum Occurance {
    WEEKDAY, WEEKEND
  }
}
