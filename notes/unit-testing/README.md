# Unit Testing with Angular

## Testing methodology

* Unit Testing or isolated unit test
* Integration Testing - shallow and deep
* End to end testing - selenium or browser testing

## Structuring tests (AAA)

* Arrange
* Act
* Assert
* describe block -> it block -> AAA

## Tools

* Karma
* Jasmine

## Shallow Integration Tests

* Testing component independtly excluding its child
* native element vs debug element testing
* native element is like dom element with all dom functions
* debug element is wrapper on native element with custom functions

### Test example 01 - 
* we use TestBed to generate the DOM for testing
* we collect the fixture object to call dom methods on it
* component template file:

<img width="778" alt="image" src="https://user-images.githubusercontent.com/70803038/222087081-631d89fa-a93c-4a62-8ce8-de7700c88e16.png">
* component class file:

<img width="537" alt="image" src="https://user-images.githubusercontent.com/70803038/222087304-069cb86c-f11e-4eb9-82bc-845be263bdd5.png">
* Test file:
  
<img width="728" alt="image" src="https://user-images.githubusercontent.com/70803038/222089713-5a27fa85-6f80-40dc-9bbf-a6887842fd74.png">

### Test example 02 - 

<img width="577" alt="image" src="https://user-images.githubusercontent.com/70803038/222093004-52ff9dbd-2389-4de0-817f-147de1d69213.png">

<img width="475" alt="image" src="https://user-images.githubusercontent.com/70803038/222093088-c4efef9b-312e-4816-b68d-717e4e13b3b8.png">

<img width="486" alt="image" src="https://user-images.githubusercontent.com/70803038/222093265-09a6008c-d9a8-413c-9e3e-f92e7f5352e6.png">

## Deep Integration Tests

* Testing including child elements like components

### Component test example

<img width="591" alt="image" src="https://user-images.githubusercontent.com/70803038/222100454-fa576e4d-2e3b-4dcf-9381-ba7420347851.png">

### Service test example

<img width="747" alt="image" src="https://user-images.githubusercontent.com/70803038/222104353-240cefea-f622-4cad-b306-cca2b0cb8c26.png">

<img width="447" alt="image" src="https://user-images.githubusercontent.com/70803038/222100825-462ac195-71c3-41b7-be79-eb37c156c52d.png">

<img width="577" alt="image" src="https://user-images.githubusercontent.com/70803038/222093004-52ff9dbd-2389-4de0-817f-147de1d69213.png">
