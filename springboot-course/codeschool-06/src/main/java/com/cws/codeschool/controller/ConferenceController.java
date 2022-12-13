package com.cws.codeschool.controller;

import com.cws.codeschool.model.Conference;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Controller
public class ConferenceController {
  @RequestMapping("/conference")
  public String displayConferencePage(Model model) {
    List<Conference> conferences = Arrays.asList(
            new Conference("Dec 10","Springboot", "John", Conference.Occurance.WEEKEND),
            new Conference("Jan 15","Spring", "Linda", Conference.Occurance.WEEKDAY),
            new Conference("Jan 30","Python", "Shonali", Conference.Occurance.WEEKDAY),
            new Conference("Feb 29","React", "Sania", Conference.Occurance.WEEKEND),
            new Conference("Mar 10","Angular", "Anthony", Conference.Occurance.WEEKEND),
            new Conference("Mar 20","Vue", "Priya", Conference.Occurance.WEEKEND),
            new Conference("Mar 30","SQL", "Sandip", Conference.Occurance.WEEKDAY),
            new Conference("Apr 15","HTML/CSS", "Rahul", Conference.Occurance.WEEKDAY)
    );

    Conference.Occurance[] occurances = Conference.Occurance.values();
    for (Conference.Occurance occurance : occurances) {
      model.addAttribute(occurance.toString(),
              (conferences.stream().filter(conference -> conference.getOccurance().equals(occurance)).collect(Collectors.toList())));
    }
    return "conference.html";
  }
}
