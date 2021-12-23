# Spring Basics

## Create Spring Project

- Spring Initializr is a great way to create spring project.
- Import the zip file in an IDE.

## Dependency and tight coupling example

## Decoupling components using an interface

## Managing beans and dependencies

> The instances and objects that spring manages are called Beans.

- @Component: Spring to create and manage objects
- @Autowired: Spring creates and injects the dependency
- @ComponentScan: Tells the location of the bean so that spring can autowire it
- @SpringApplication: @Configuration + @EnableAutoConfiguration + @ComponentScan
- appContext = SpringApplication.run
- appContext.getBean function

## Autowiring

- By type: @Primary
- By name
- @Qualifier
- Constructor injection: Use @Qualifier annotation before constructor argument
- Setter injection: Use @Qualifier annotation on setter function

