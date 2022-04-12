# Spring Overview

## Why Spring?
- Popular Java framework to build enterprise java apps.
- Simpler and lighweight alternative to j2ee.
- Make things easier through helper classes.
- EJB were extremely complex and had a poor performance.
- Founder of Spring: Rod Johnson.
- You should learn Spring and j2ee both.
- Core container: beans, core, spel, context
- AOP: aop, aspects, instrumentation, messaging
- Data access layer: jdbc, orm, transaction, oxm, jms
- Web layer: servlet, web socket, web, portlet
- Test layer: unit, integration, mock

## Dev Env
- Java JDK
- Tomcat
- Intellij or eclipse

## Spring XML configuration
- IOC: the approach of outsourcing construction and management of objects.
- Spring container primary functions:
  - Inversion of control: create and manage objects
  - Dependency Injection: Inject object dependencies
- Configure spring container:
  - XML
  - Java annotations
  - Java source code

## Spring XML dependency injection
- Constructor injection
- Setter injection
- Injecting literal values
- Injecting values from properties files

## Spring beans scope and lifecycle
- Default scope: singleton
- Other types: prototype, request, session, global session
- Bean lifecycle 
  - container started -> bean instantiated -> dependencies injected -> internal spring processing -> your custom init method -> container shutdown -> your custom destroy method
  - init-method
  - destroy-method

## Spring configuration java annotations
- Annotations are special labels/markers added to java classes.
- Annotations provides metadata about the class.
- Annotations are processed at compile time or runtime.
- Steps
  - configure package in config file.
  - use @Component annotation to make a java class as bean.
  - retrieve the bean using same function like we did in xml.
- If you dont specify bean name in @Component annotation deafault camel case name of class will be used.

## Spring java annotations dependency injection
- Construction injection use @Autowired. Not needed from spring 4.
- Setter injection use @Autowired.
- Method injection: any method can be used to inject dependencies using @Autowired annotation.
- Field injection: inject dependencies using @Autowired directly on field name.
- If you have multiple bean implementations, to resolve dependency conflict use: @Qualifier

## Spring java annotations scope and lifecycle
- @Scope: singleton or prototype
- @PostConstruct, @PreDestroy
