package com.cws.codeschool.controller;

import com.cws.codeschool.model.Contact;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Slf4j
@Controller
public class ContactController {

  @RequestMapping("/contact")
  public String displayContactPage() {
    return "contact.html";
  }

  /*@RequestMapping(value = "/saveMessage", method = RequestMethod.POST)
  public ModelAndView saveMessage(@RequestParam String name, @RequestParam String email,
    @RequestParam String subject, @RequestParam String message) {
    log.info("name: " + name);
    log.info("email: " + email);
    log.info("subject: " + subject);
    log.info("message: " + message);

    return new ModelAndView("redirect:/contact");
  }*/

  @RequestMapping(value = "/saveMessage", method = RequestMethod.POST)
  public ModelAndView saveMessage(Contact contact) {
    log.info("contact: " + contact);

    return new ModelAndView("redirect:/contact");
  }
}
