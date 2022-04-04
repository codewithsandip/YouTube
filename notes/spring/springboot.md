## Create Spring Project
---
- Spring Initializr is a great way to create spring project.
- You can add the desired dependancy too like web, data jpa, h2 database etc.
- Later you can import the zip file in an IDE.

## JPA Entities
---
- Entities are POJO's which we map to database tables
- POJO's can be created inside domain/model/entities folder
- JPA needs to have zero args constructor for an entity
- @Entity
- @Id, @GeneratedValue
- @ManyToMany
- @JoinTable

## Repository
---
- Repo's are Java classes created for db interaction

## Dependency Injection
---
- Three types of injection - property, setter & constructor
- Constructor should be preferred
- Annotations - @Controller, @Service, @Autowired
- Annotation not needed for constructor injection
- Use @Qualifier annotation to manage which beans to be used
- Use @Primary to make bean as primary to use
- @Profile - helps manage different results based on profile set in application.properties file. I18n could be good example

