# set-8

#### 351. Identify the problem of GoF pattern: How to obtain the power of polymorphism when reusing a class whose methods have the same function but not the same signature as the other methods in the hierarchy?

1. Adapter
2. Singleton
3. Façade
4. Delegation

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Adapter

**Explanation:**

* The Adapter pattern allows a class to be reused even if its methods do not match the expected interface, enabling polymorphism by adapting the interface of one class to another.

</details>

#### 352. Identify the problem of GoF pattern: How do you simplify the view that programmers have of a complex package?

1. Adapter
2. Singleton
3. Façade
4. Delegation

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Façade

**Explanation:**

* The Façade pattern simplifies the view of a complex package by providing a unified interface to a set of interfaces in a subsystem, making it easier to use.

</details>

#### 353. \_\_\_\_\_\_ represent the best practices used by experienced object-oriented software developers.

1. EB2
2. IMS
3. Design Patterns
4. JCL

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Design Patterns

**Explanation:**

* Design Patterns represent the best practices used by experienced object-oriented software developers to solve common design problems.

</details>

#### 354. GOF stands for?

1. Gamma of four
2. Gang of four
3. Gang of helm
4. Gamma of helm

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Gang of four

**Explanation:**

* GOF stands for Gang of Four, referring to the four authors (Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides) who wrote the book "Design Patterns: Elements of Reusable Object-Oriented Software."

</details>

#### 355. Design patterns can be classified in \_\_\_\_\_\_ categories.

1. 1
2. 2
3. 3
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 3

**Explanation:**

* Design patterns are classified into three categories: Creational, Structural, and Behavioral patterns.

</details>

#### 356. Which design patterns are specifically concerned with communication between objects?

1. Creational Patterns
2. Structural Patterns
3. Behavioral Patterns
4. J2EE Patterns

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Behavioral Patterns

**Explanation:**

* Behavioral patterns are concerned with communication between objects and how they interact to achieve a common goal.

</details>

#### 357. Which pattern are identified by Sun Java Center?

1. Adapter pattern
2. Creational pattern
3. Behavioral Patterns
4. J2EE Patterns

<details>

<summary>Show me the answer</summary>

**Answer:** 4. J2EE Patterns

**Explanation:**

* J2EE Patterns are identified by Sun Java Center and are specifically designed for Java Enterprise Edition (J2EE) applications.

</details>

#### 358. Factory pattern is one of most used design pattern in Java.

1. TRUE
2. FALSE
3. Can be true or false
4. Can not say

<details>

<summary>Show me the answer</summary>

**Answer:** 1. TRUE

**Explanation:**

* The Factory pattern is one of the most commonly used design patterns in Java, as it provides a way to create objects without specifying the exact class of the object that will be created.

</details>

#### 359. In how many steps Singleton class in java created?

1. 1
2. 2
3. 3
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 2

**Explanation:**

* A Singleton class in Java is typically created in two steps: (1) making the constructor private and (2) providing a static method to access the single instance of the class.

</details>

#### 360. \_\_\_\_\_\_ works as a bridge between two incompatible interfaces.

1. Builder pattern
2. Adapter pattern
3. Bridge pattern
4. Memento pattern

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Adapter pattern

**Explanation:**

* The Adapter pattern works as a bridge between two incompatible interfaces, allowing them to work together by converting the interface of one class into another interface that clients expect.

</details>

#### 361. Filter pattern also known as?

1. Visitor pattern
2. Composite pattern
3. Filter pattern
4. Iterator pattern

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Filter pattern

**Explanation:**

* The Filter pattern is also known as the Criteria pattern, which is used to filter objects based on certain criteria.

</details>

#### 362. Can we create a clone of a singleton object?

1. Yes
2. No
3. Can be yes or no
4. Can not say

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Yes

**Explanation:**

* It is possible to create a clone of a Singleton object, but it defeats the purpose of the Singleton pattern, which is to ensure that only one instance of the class exists.

</details>

#### 363. You want to avoid multiple inheritance. Which design pattern would you choose?

1. Abstraction-Occurrence Pattern
2. Player-Role Pattern
3. General Hierarchy Pattern
4. Singleton Pattern

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Player-Role Pattern

**Explanation:**

* The Player-Role Pattern is used to avoid multiple inheritance by allowing an object to dynamically take on different roles without inheriting from multiple classes.

</details>

#### 364. The recurring aspects of designs are called design

1. Patterns
2. Documents
3. Structures
4. Methods

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Patterns

**Explanation:**

* Design patterns are recurring solutions to common problems in software design. They represent best practices and are used to solve design issues efficiently.

</details>

#### 365. Design pattern is a solution to a problem that occurs repeatedly in a variety of contexts.

1. True
2. False

<details>

<summary>Show me the answer</summary>

**Answer:** 1. True

**Explanation:**

* Design patterns are solutions to recurring problems in software design. They provide a template for solving common issues in a variety of contexts.

</details>

#### 366. Which pattern prevents one from creating more than one instance of a variable?

1. Factory Method
2. Singleton
3. Observer
4. None of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Singleton

**Explanation:**

* The Singleton pattern ensures that only one instance of a class is created and provides a global point of access to that instance.

</details>

#### 367. Facade pattern promotes weak coupling between subsystem and its clients.

1. True
2. False

<details>

<summary>Show me the answer</summary>

**Answer:** 1. True

**Explanation:**

* The Facade pattern promotes weak coupling by providing a simplified interface to a complex subsystem, reducing the dependencies between the subsystem and its clients.

</details>

#### 368. Which design pattern defines one-to-many dependency among objects?

1. State pattern
2. Adapter Pattern
3. Observer pattern
4. Factory method pattern

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Observer pattern

**Explanation:**

* The Observer pattern defines a one-to-many dependency among objects, where a change in one object (the subject) triggers updates in all its dependents (observers).

</details>

#### 369. Facade pattern couples a subsystem from its clients.

1. True
2. False

<details>

<summary>Show me the answer</summary>

**Answer:** 2. False

**Explanation:**

* The Facade pattern does not couple a subsystem from its clients; instead, it provides a simplified interface to the subsystem, reducing coupling.

</details>

#### 370. In factory method pattern, the framework must instantiate classes but it only knows about the abstract classes, which it cannot initiate. How would one solve this problem?

1. Encapsulating the knowledge of which document subclass to is to be created and
2. Moving this knowledge out of the framework
3. Instantiating the application specific documents without knowing their class
4. All of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the mentioned

**Explanation:**

* The Factory Method pattern solves the problem by encapsulating the knowledge of which subclass to create, moving this knowledge out of the framework, and allowing the framework to instantiate application-specific documents without knowing their exact class.

</details>

#### 371. Which mechanism is applied to use a design pattern in an OO system?

1. Inheritance
2. Composition
3. All of the mentioned
4. None of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 3. All of the mentioned

**Explanation:**

* Both inheritance and composition are mechanisms used to implement design patterns in an object-oriented system. Inheritance allows for code reuse, while composition allows for flexible object relationships.

</details>

#### 372. Design patterns does not follow the concept of software reuse.

1. True
2. False

<details>

<summary>Show me the answer</summary>

**Answer:** 2. False

**Explanation:**

* Design patterns are based on the concept of software reuse. They provide reusable solutions to common design problems, promoting code reuse and maintainability.

</details>

#### 373. The use of design patterns for the development of object-oriented software has important implications for \_\_\_\_\_\_.

1. Component-based software engineering
2. Reusability in general
3. All of the mentioned
4. None of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 3. All of the mentioned

**Explanation:**

* The use of design patterns has important implications for both component-based software engineering and reusability in general. They promote modularity, flexibility, and code reuse.

</details>

#### 374. Which of the following is a design pattern?

1. Behavioral
2. Structural
3. Abstract Factory
4. All of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the mentioned

**Explanation:**

* Behavioral, Structural, and Abstract Factory are all design patterns. Behavioral patterns deal with object interaction, Structural patterns deal with object composition, and Abstract Factory is a creational pattern.

</details>

#### 375. You want to minimize development cost by reusing methods? Which design pattern would you choose?

1. Adapter Pattern
2. Singleton Pattern
3. Delegation pattern
4. Builder Pattern

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Delegation pattern

**Explanation:**

* The Delegation pattern allows you to reuse methods by delegating tasks to other objects, minimizing development costs and promoting code reuse.

</details>

#### 376. Which of the following is the correct list of entities of Composite Entity pattern?

1. Composite Entity, Coarse-Grained Object, Strategies
2. Composite Entity, Dependent Object, Strategies
3. Composite Entity, Coarse-Grained Object, Dependent Object, Strategies
4. Composite Entity, Coarse-Grained Object, Dependent Object

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Composite Entity, Coarse-Grained Object, Dependent Object

**Explanation:**

* The Composite Entity pattern consists of Composite Entity, Coarse-Grained Object, and Dependent Object. These entities work together to represent a complex object structure.

</details>

#### 377. Which of the following describes the Behavioral pattern correctly?

1. This type of patterns provide a way to create objects while hiding the creation logic, rather than instantiating objects directly using new operator
2. This type of patterns concern class and object composition. Concept of inheritance is used to compose interfaces and define ways to compose objects to obtain new functionalities.
3. This type of pattern are specifically concerned with communication between objects.
4. This type of pattern are specifically concerned with the presentation tier.

<details>

<summary>Show me the answer</summary>

**Answer:** 3. This type of pattern are specifically concerned with communication between objects.

**Explanation:**

* Behavioral patterns are concerned with communication between objects and how they interact to achieve a common goal. They focus on object collaboration and responsibility distribution.

</details>

#### 378. Which of the following is correct about Abstract Factory design pattern.

1. This type of design pattern comes under creational pattern.
2. Abstract Factory patterns work around a super-factory which creates other factories.
3. In Abstract Factory pattern an interface is responsible for creating a factory of related objects without explicitly specifying their classes.
4. All of the above.

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above.

**Explanation:**

* The Abstract Factory pattern is a creational pattern that provides an interface for creating families of related objects without specifying their concrete classes. It works around a super-factory that creates other factories.

</details>

#### 379. Which of the following pattern refers to creating duplicate object while keeping performance in mind?

1. Proxy Pattern
2. Composite Pattern
3. Prototype Pattern
4. Facade Pattern

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Prototype Pattern

**Explanation:**

* The Prototype Pattern is used to create duplicate objects while keeping performance in mind. It allows objects to be cloned without knowing their specific classes.

</details>

#### 380. Which of the following pattern is primarily used to reduce the number of objects created and to decrease memory footprint and increase performance?

1. Iterator Pattern
2. Observer Pattern
3. Flyweight Pattern
4. Visitor Pattern

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Flyweight Pattern

**Explanation:**

* The Flyweight Pattern is used to reduce the number of objects created, decrease memory footprint, and increase performance by sharing objects that are similar in nature.

</details>

#### 381. GRASP stands for \_\_\_\_\_\_.

1. Global responsibility assignment software patterns
2. General responsibility assignment software patterns
3. General responsibility assignment system patterns
4. General research assignment software patterns

<details>

<summary>Show me the answer</summary>

**Answer:** 2. General responsibility assignment software patterns

**Explanation:**

* GRASP stands for General Responsibility Assignment Software Patterns. It provides guidelines for assigning responsibilities to classes and objects in object-oriented design.

</details>

#### 382. There are \_\_\_\_\_\_ GRASP patterns.

1. 7
2. 8
3. 9
4. 10

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 9

**Explanation:**

* There are 9 GRASP patterns: Creator, Information Expert, Low Coupling, High Cohesion, Controller, Polymorphism, Pure Fabrication, Indirection, and Protected Variations.

</details>

#### 383. Which GRASP pattern is suitable to handle alternatives based on type?

1. Indirection
2. Pure fabrication
3. Polymorphism
4. Creator

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Polymorphism

**Explanation:**

* The Polymorphism pattern is suitable for handling alternatives based on type. It allows different classes to respond to the same message in different ways.

</details>

#### 384. Which GRASP pattern helps to find out answer for “Who should be responsible for creating a new instance of some class?”

1. Adapter
2. Protected variations
3. Creator
4. Controller

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Creator

**Explanation:**

* The Creator pattern helps determine which class should be responsible for creating a new instance of another class. It is based on the principle that a class that contains or aggregates another class should be responsible for creating instances of that class.

</details>

#### 385. You want all the clients using class A to use the same instance of class A, what should you do to achieve this goal?

1. Override a method of class A
2. Mark class a abstract
3. Apply the singleton pattern to class “A”
4. Apply the command pattern to class “A”

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Apply the singleton pattern to class “A”

**Explanation:**

* The Singleton pattern ensures that only one instance of a class is created and provides a global point of access to that instance. This ensures that all clients use the same instance of class A.

</details>

#### 386. Which design pattern you would you use to have a prototypical instance determine the concrete class of object being created?

1. Prototype factory design pattern
2. Virtual prototype design pattern
3. Non-abstract prototype design pattern
4. Prototype design pattern

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Prototype design pattern

**Explanation:**

* The Prototype design pattern allows a prototypical instance to determine the concrete class of the object being created. It involves cloning an existing object rather than creating a new one from scratch.

</details>

#### 387. Which Design Pattern should you use when you want to parameterize objects by an action to perform?

1. Command
2. Prototype
3. Memento
4. Iterator

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Command

**Explanation:**

* The Command pattern is used to parameterize objects by an action to perform. It encapsulates a request as an object, allowing for parameterization of clients with different requests, queuing of requests, and logging of requests.

</details>

#### 388. Which design pattern you would you use to decouple the creation procedure of a complex object from its concrete instance to be able to apply that procedure on variety of implementations.

1. Factory builder design pattern
2. Method builder design pattern
3. Builder design pattern
4. Observer method design pattern

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Builder design pattern

**Explanation:**

* The Builder design pattern is used to decouple the creation procedure of a complex object from its concrete instance. It allows the same construction process to create different representations of the object.

</details>

#### 389. Which Design Pattern should you use when you want to represent part-whole hierarchies of objects?

1. Composite
2. Decorator
3. Adapter
4. State

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Composite

**Explanation:**

* The Composite pattern is used to represent part-whole hierarchies of objects. It allows clients to treat individual objects and compositions of objects uniformly.

</details>

#### 390. Given the following scenario: You want to create families of related objects, to be used interchangeably to configure you application. What is most appropriate GoF pattern to use?

1. Mediator
2. Abstract factory
3. Visitor
4. Iterator

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Abstract factory

**Explanation:**

* The Abstract Factory pattern is used to create families of related objects that can be used interchangeably to configure an application. It provides an interface for creating families of related or dependent objects without specifying their concrete classes.

</details>

#### 391. When would you use the GOF Decorator design pattern?

1. To translate an existing class interface into a compatible target interface
2. To assign more functionality to an object without sub-classing it
3. To decouple an abstraction from its implementation so that the two can vary independently
4. To nest layers of decorators to add more functionality

<details>

<summary>Show me the answer</summary>

**Answer:** 2. To assign more functionality to an object without sub-classing it

**Explanation:**

* The Decorator pattern is used to add additional functionality to an object dynamically without sub-classing. It allows for flexible extension of object behavior at runtime.

</details>

#### 392. When would you use the GOF Composite design pattern?

1. To decouple an abstraction from its implementation so that the two can vary independently
2. To translates an existing class interface into a compatible target interface
3. To arrange object hierarchies such that the client code can access both the individual objects and compositions in a uniform manner
4. To improve the system overall performance

<details>

<summary>Show me the answer</summary>

**Answer:** 3. To arrange object hierarchies such that the client code can access both the individual objects and compositions in a uniform manner

**Explanation:**

* The Composite pattern is used to arrange object hierarchies so that clients can treat individual objects and compositions of objects uniformly. It is useful for representing part-whole hierarchies.

</details>

#### 393. \_\_\_\_\_\_ are the consequences of applying the GOF Singleton pattern.

1. It introduces thread safety issue when the singleton instance is instantiated on demand
2. The client code can creates multiple instances at run time
3. It reduces of the class hierarchy as compared to the other factory design patterns
4. It makes it easier for a certain family of objects to work together

<details>

<summary>Show me the answer</summary>

**Answer:** 1. It introduces thread safety issue when the singleton instance is instantiated on demand

**Explanation:**

* One of the consequences of applying the Singleton pattern is that it can introduce thread safety issues when the singleton instance is instantiated on demand. Proper synchronization mechanisms must be used to ensure thread safety.

</details>

#### 394. \_\_\_\_\_\_ describes the Builder pattern correctly.

1. This pattern builds a complex object using simple objects and using a step by step approach.
2. This pattern refers to creating duplicate object while keeping performance in mind.
3. This pattern is used when creation of object directly is costly.
4. This pattern is used when we need to decouple an abstraction from its implementation so that the two can vary independently.

<details>

<summary>Show me the answer</summary>

**Answer:** 1. This pattern builds a complex object using simple objects and using a step by step approach.

**Explanation:**

* The Builder pattern builds a complex object using simple objects and follows a step-by-step approach. It separates the construction of a complex object from its representation, allowing the same construction process to create different representations.

</details>

#### 395. \_\_\_\_\_\_ is not one of the elements of a design pattern.

1. Content
2. Environment
3. Problem
4. Solution

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Content

**Explanation:**

* The elements of a design pattern include the problem, solution, and environment. Content is not considered one of the core elements of a design pattern.

</details>

#### 396. Which GOF design pattern is applied in the code snippet below?

```java
public class PrintSpooler {
    private static final PrintSpooler INSTANCE = new PrintSpooler();
    private PrintSpooler() {
    public static PrintSpooler getInstance() {
    return INSTANCE;
    }
    }
}
```

1. Proxy design pattern
2. Singleton design pattern
3. Façade design pattern
4. Abstract singleton design pattern

<details>

<summary>Show me the answer</summary>

**Answer:**

2. Singleton design pattern

**Explanation:**

* The code snippet implements the Singleton design pattern, which ensures that only one instance of the `PrintSpooler` class is created and provides a global point of access to that instance.

</details>

1. Can send a message
2. Cannot send a message
3. May send a message
4. Can’t send a message because Register and ProductCatalog are instance of a class

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Can send a message

**Explanation:**

* Since the Register class has a reference to the ProductCatalog, it can send a message to it. This is an example of visibility in object-oriented design.

</details>
