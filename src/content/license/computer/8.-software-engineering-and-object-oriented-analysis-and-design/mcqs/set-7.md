# set-7

#### 301. Students will be allocated to one department at least but cannot be allocated to more than 3 departments. Identify the cardinality between Department and Student

1. Department: 1 and Student: 1.\*
2. Department: \* and Student: 1.\*
3. Department: 1..3 and Student: \*
4. Department: \* and Student: \*

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Department: 1..3 and Student: \*

**Explanation:**

* The cardinality between Department and Student is 1..3 for Department and \* for Student. This means a student can be allocated to 1 to 3 departments, and a department can have any number of students.

</details>

#### 302. Which one of the following best characterizes a sequence diagram?

1. A tree illustrating inheritance relationship between classes
2. A call graph illustrating all possible sequences of calls between class method members
3. A time-line illustrating a typical sequence of calls between object methods
4. A time-line illustrating the changes in inheritance and instantiation relationships between classes and objects over time

<details>

<summary>Show me the answer</summary>

**Answer:** 3. A time-line illustrating a typical sequence of calls between object methods

**Explanation:**

* A sequence diagram is a type of interaction diagram that shows how objects interact in a particular sequence of messages or method calls over time.

</details>

#### 303. \_\_\_\_\_\_ diagram helps to show Dynamic aspects related to a system.

1. Object
2. Deployment
3. Class
4. Interaction

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Interaction

**Explanation:**

* Interaction diagrams, such as sequence diagrams and collaboration diagrams, are used to show dynamic aspects of a system, such as how objects interact with each other.

</details>

#### 304. If you are working on real-time process control applications or systems that involve concurrent processing, you would use a \_\_\_\_\_\_

1. State Diagram
2. Class Diagram
3. Activity Diagram
4. Object Diagram

<details>

<summary>Show me the answer</summary>

**Answer:** 1. State Diagram

**Explanation:**

* State diagrams are used to model the behavior of systems that involve real-time process control or concurrent processing. They show the different states of an object and how it transitions between states.

</details>

#### 305. "Book has pages". In this sentence what is relation between book and page classes?

1. Inheritance
2. Aggregation
3. Composition
4. Association

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Composition

**Explanation:**

* The relationship between Book and Page is composition because a Book is composed of Pages, and Pages cannot exist independently of a Book.

</details>

#### 306. How guard condition is represented in sequence diagram

1. Using ( )
2. Using \[ ]
3. Using keyword condition
4. None of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Using \[ ]

**Explanation:**

* Guard conditions in sequence diagrams are represented using square brackets \[ ]. They specify the condition under which a message is sent.

</details>

#### 307. Bulls eye is use to denote \_\_\_\_\_\_.

1. Start state
2. Concurrent state
3. End state
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. End state

**Explanation:**

* A bullseye symbol is used to denote the end state in a state diagram, indicating the termination of a process or state.

</details>

#### 308. \_\_\_\_\_\_ shows a set of objects and their relationships.

1. Class diagram
2. Object diagram
3. Use case diagram
4. Collaboration diagram

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Object diagram

**Explanation:**

* An object diagram shows a set of objects and their relationships at a specific point in time. It is a snapshot of the system.

</details>

#### 309. A collaboration diagram depicts which one of the following types of information?

1. Structural information such as class association
2. The looping structure
3. The decision structure among the classes
4. The attribute values of the objects

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Structural information such as class association

**Explanation:**

* A collaboration diagram depicts structural information, such as how objects are associated and interact with each other.

</details>

#### 310. Because of \_\_\_\_\_\_ reason the inheritance useful.

1. It prevents inherited properties from being lost
2. It minimizes the amount of code which has to be written
3. It creates elegant tree structures in the class model
4. It divides objects up into useful classes

<details>

<summary>Show me the answer</summary>

**Answer:** 2. It minimizes the amount of code which has to be written

**Explanation:**

* Inheritance is useful because it allows code reuse, minimizing the amount of code that needs to be written. It also helps in organizing classes into a hierarchical structure.

</details>

#### 311. \_\_\_\_\_\_ characteristics of a class implies that the same message can be interpreted by it differently.

1. Polymorphism
2. Overloading
3. Overriding
4. Inheritance

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Polymorphism

**Explanation:**

* Polymorphism allows a class to interpret the same message differently based on the context or the object's type. It is a key feature of object-oriented programming.

</details>

#### 312. Consider the statement: "Test can be Objective or Subjective." Assuming that Test and Subjective are two classes, what can be said about the relationship between these two classes?

1. Aggregation
2. Composition
3. Generalization - specialization
4. Polymorphism

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Generalization - specialization

**Explanation:**

* The relationship between Test and Subjective is generalization-specialization, where Subjective is a specialized form of Test.

</details>

#### 313. Login credentials are validated by system. Which relationship exists among login and validation use cases-

1. Login include Validation
2. Validation include Login
3. Login extend Validation
4. Validation extend Login

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Login include Validation

**Explanation:**

* The Login use case includes the Validation use case because validation is a necessary step in the login process.

</details>

#### 314. “Payment can be done through Credit Card or Debit Card”. In this relation payment is consider as \_\_\_

1. Base uses case
2. Extension point
3. Inclusion
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Base uses case

**Explanation:**

* In this scenario, Payment is the base use case, and Credit Card and Debit Card are extensions or variations of the Payment use case.

</details>

#### 315. “Students work on project and get evaluated.” In this evaluation function is consider at \_\_\_

1. Project class
2. Student class
3. Association class of “works on”
4. Evaluation class

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Association class of “works on”

**Explanation:**

* The evaluation function is associated with the relationship between Student and Project, which is represented by the association class "works on."

</details>

#### 316. Solid circle is considering as start state only when \_\_\_

1. Previous states are not known
2. Idle state is not present
3. It is optional
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Previous states are not known

**Explanation:**

* A solid circle is used to denote the start state in a state diagram when the previous states are not known or when the process begins from this state.

</details>

#### 317. Merge (Hollow diamond) is use to

1. Split a single incoming flow into multiple concurrent flows
2. Bring together multiple flows that are not concurrent
3. Interrupt the flow denoted with a lightning bolt
4. Group related activities into one column

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Bring together multiple flows that are not concurrent

**Explanation:**

* A merge (hollow diamond) in an activity diagram is used to bring together multiple flows that are not concurrent into a single flow.

</details>

#### 318. The vertical line in activity diagram represents

1. Decision and branching
2. Synchronization
3. Time event
4. Swim lanes

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Swim lanes

**Explanation:**

* The vertical line in an activity diagram represents swim lanes, which are used to group activities by the responsible party or component.

</details>

#### 319. The vertical line in sequence diagram represents

1. Time line of object
2. Synchronization
3. Swim lanes
4. End of life

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Time line of object

**Explanation:**

* The vertical line in a sequence diagram represents the timeline of an object, showing the sequence of messages or interactions over time.

</details>

#### 320. \_\_\_\_\_\_ is a crucial software development activity for both Software Engineering and Knowledge Engineering.

1. Conceptual modeling
2. Visibility modeling
3. System Modeling
4. Behavior Modeling

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Conceptual modeling

**Explanation:**

* Conceptual modeling is a crucial activity in both Software Engineering and Knowledge Engineering. It involves creating abstract models to represent the system or domain.

</details>

#### 321. Domain Modeling is also known as:

1. Behavior modeling
2. Conceptual modeling
3. System modeling
4. None

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Conceptual modeling

**Explanation:**

* Domain modeling is also known as conceptual modeling, as it involves creating abstract models to represent the concepts and relationships in a domain.

</details>

#### 322. During the domain analysis, which is the initial step of domain modeling, the objects are to be identified. These objects are classified into three categories,

1. Boundary objects, Controller objects, Entity objects
2. Class objects, data objects, meta objects
3. Controller object, model object, view object
4. All of above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Boundary objects, Controller objects, Entity objects

**Explanation:**

* In domain modeling, objects are classified into boundary objects (interfaces), controller objects (logic), and entity objects (data). This classification helps in organizing the system.

</details>

#### 323. Boundary objects are also called \_\_\_\_\_\_.

1. Interface objects
2. Class objects
3. Model objects
4. Meta objects

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Interface objects

**Explanation:**

* Boundary objects are also called interface objects because they represent the interaction between the system and external entities.

</details>

#### 324. A domain model is a representation of real-world conceptual classes, not of software components.

1. True
2. False

<details>

<summary>Show me the answer</summary>

**Answer:** 1. True

**Explanation:**

* A domain model represents real-world conceptual classes and their relationships, not software components. It is used to understand the problem domain.

</details>

#### 325. IS this a domain model?

\[\begin{array}{|c|c|} \hline \text{Card} & \text{DecK} \ \hline \end{array}] \[\begin{array}{|c|c|} \hline \text{Privacy} & \text{CribbageBoard} \ \hline & \text{Peg} \ \hline \end{array}]

1. Yes
2. No

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Yes

**Explanation:**

* The given diagram represents a domain model as it shows conceptual classes (Card, Deck, CribbageBoard, Peg) and their relationships.

</details>

#### 326. Conceptual modelling represents \_\_\_\_\_\_.

1. Responsibility
2. Attributes
3. Important relationships between them
4. All of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the mentioned

**Explanation:**

* Conceptual modeling represents responsibilities, attributes, and important relationships between entities. It provides a high-level view of the system.

</details>

#### 327. \_\_\_\_\_\_ are the sequence of steps for conceptual process.

1. Add Attributes
2. Add Classes
3. Add Association
4. All of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the mentioned

**Explanation:**

* The sequence of steps for conceptual modeling includes adding classes, attributes, and associations. All these steps are essential for creating a conceptual model.

</details>

#### 328. \_\_\_\_\_\_ is the third step in sequence for conceptual class modelling.

1. Adding Class
2. Adding Association
3. Adding Attribute
4. None of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Adding Association

**Explanation:**

* The third step in conceptual class modeling is adding associations, which define the relationships between classes.

</details>

#### 329. The method of design encompassing the process of object oriented decomposition and a notation for depicting both logical and physical and as well as static and dynamic models of the system under design is known as:

1. Object-Oriented Programming
2. Object-Oriented Design
3. Object-Oriented Analysis
4. None of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Object-Oriented Design

**Explanation:**

* Object-Oriented Design (OOD) involves the process of object-oriented decomposition and the use of notation to represent logical, physical, static, and dynamic models of the system.

</details>

#### 330. What is the programming style of the object-oriented conceptual model?

1. Invariant relationships
2. Algorithms
3. Classes and objects
4. Goals, often expressed in a predicate calculus.

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Classes and objects

**Explanation:**

* The programming style of the object-oriented conceptual model is based on classes and objects, which encapsulate data and behavior.

</details>

#### 331. The essential characteristics of an object that distinguish it from all other kinds of objects and thus provide crisply defined conceptual boundaries, relative to the perspective of the viewer is called:

1. Encapsulation
2. Modularity
3. Hierarchy
4. Abstraction

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Abstraction

**Explanation:**

* Abstraction is the essential characteristic of an object that distinguishes it from other objects and provides crisply defined conceptual boundaries.

</details>

#### 332. Abstraction is classified into \_\_\_\_\_\_ types

1. 4
2. 3
3. 2
4. 1

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 3

**Explanation:**

* Abstraction is classified into three types: entity abstraction, action abstraction, and virtual machine abstraction.

</details>

#### 333. The process of compartmentalizing the elements of an abstraction that constitute its structure and behavior is called as

1. Hierarchy
2. Encapsulation
3. Modularity
4. Entity Abstraction

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Encapsulation

**Explanation:**

* Encapsulation is the process of compartmentalizing the elements of an abstraction, hiding the internal details and exposing only the necessary interfaces.

</details>

#### 334. Single inheritance, Multiple inheritance, and Aggregation comes under

1. Modularity
2. Typing
3. Hierarchy
4. None of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Hierarchy

**Explanation:**

* Single inheritance, multiple inheritance, and aggregation are all concepts related to hierarchy in object-oriented programming.

</details>

#### 335. In which of the following mechanisms, types of all variables and expressions are fixed at compilation time.

1. Strong Typing
2. Weak Typing
3. Static Binding/ early binding
4. Dynamic Binding/ late binding

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Static Binding/ early binding

**Explanation:**

* Static binding (or early binding) fixes the types of variables and expressions at compile time, ensuring type safety and efficiency.

</details>

#### 336. In which of the following mechanisms, types of all variables and expressions are not known until runtime

1. Strong Typing
2. Weak Typing
3. Static Binding/ early binding
4. Dynamic Binding/ late binding

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Dynamic Binding/ late binding

**Explanation:**

* Dynamic binding (or late binding) determines the types of variables and expressions at runtime, allowing for greater flexibility but less type safety.

</details>

#### 337. Which of the following statements about Persistence is correct?

1. It is the enforcement of the class of an object, such that objects of different types may not be interchanged, or at the most they may be interchanged only in very restricted ways.
2. It is the property of an object through which its existence transcends time and/or space.
3. It is the property that distinguishes an active object from one that is not active.
4. All of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 2. It is the property of an object through which its existence transcends time and/or space.

**Explanation:**

* Persistence is the property of an object that allows it to exist beyond the lifetime of the program or process that created it, transcending time and/or space.

</details>

#### 338. What is that concept in type theory in which a single name may denote objects of many different classes that are related by some common superclass referred to \_\_\_\_\_\_.

1. Monomorphism
2. Type Checking
3. Polymorphism
4. Generalization

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Polymorphism

**Explanation:**

* Polymorphism is the concept in type theory where a single name can denote objects of different classes that are related by a common superclass. It allows for flexibility and code reuse.

</details>

#### 339. Identify the problem of the GRASP pattern: What is a basic principle by which to assign responsibilities to objects?

1. Low coupling
2. High cohesion
3. Information Expert
4. Creator

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Information Expert

**Explanation:**

* The Information Expert pattern is a GRASP pattern that assigns responsibilities to the class that has the most information needed to fulfill the responsibility.

</details>

#### 340. Identify the problem of the GRASP pattern: Who creates object A?

1. Low coupling
2. High cohesion
3. Information Expert
4. Creator

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Creator

**Explanation:**

* The Creator pattern is a GRASP pattern that determines which class should be responsible for creating instances of another class.

</details>

#### 341. Identify the problem of the GRASP pattern: What first object beyond the UI layer receives and coordinates “controls” a system operation?

1. Controller
2. High cohesion
3. Information Expert
4. Creator

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Controller

**Explanation:**

* The Controller pattern is a GRASP pattern that identifies the first object beyond the UI layer that receives and coordinates a system operation.

</details>

#### 342. Identify the problem of the GRASP pattern: How to reduce the impact of change? How to support low dependency and increased reuse?

1. High Coupling
2. Low Coupling
3. High Cohesion
4. Low Cohesion

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Low Coupling

**Explanation:**

* The Low Coupling pattern is a GRASP pattern that aims to reduce the impact of change by minimizing dependencies between classes, thereby increasing reuse and flexibility.

</details>

#### 343. Identify the problem of the GRASP pattern: How to keep objects focused, understandable, manageable and as a side effect support Low Coupling?

1. High Coupling
2. Low Coupling
3. High Cohesion
4. Low Cohesion

<details>

<summary>Show me the answer</summary>

**Answer:** 3. High Cohesion

**Explanation:**

* The High Cohesion pattern is a GRASP pattern that ensures objects are focused, understandable, and manageable by keeping related responsibilities together, which also supports low coupling.

</details>

#### 344. Identify the problem of the GRASP pattern: Where to assign a responsibility to avoid direct coupling between two or more things?

1. Indirection
2. Polymorphism
3. Pure Fabrication
4. Creational

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Indirection

**Explanation:**

* The Indirection pattern is a GRASP pattern that assigns a responsibility to an intermediate object to avoid direct coupling between two or more things.

</details>

#### 345. Identify the problem of the GRASP pattern: How handle alternatives based on type?

1. Pure Fabrication
2. Polymorphism
3. Information Expert
4. Creator

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Polymorphism

**Explanation:**

* The Polymorphism pattern is a GRASP pattern that handles alternatives based on type by allowing different classes to respond to the same message in different ways.

</details>

#### 346. Identify the problem of the GRASP pattern: What object should have the responsibility, when you do not want to violate High Cohesion and Low Coupling, but solutions offered by other principles are not appropriate?

1. Polymorphism
2. High Cohesion
3. Low Coupling
4. Pure Fabrication

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Pure Fabrication

**Explanation:**

* The Pure Fabrication pattern is a GRASP pattern that assigns a responsibility to a fabricated or artificial class when other principles like High Cohesion and Low Coupling cannot be satisfied.

</details>

#### 347. Identify the problem of the GRASP pattern: How to design objects, subsystems and systems so that the variations or instability in these elements does not have an undesirable impact on other elements?

1. Protected Variations
2. High Cohesion
3. Low Coupling
4. Pure Fabrication

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Protected Variations

**Explanation:**

* The Protected Variations pattern is a GRASP pattern that protects elements from variations or instability by encapsulating the points of variation, ensuring that changes do not have an undesirable impact on other elements.

</details>

#### 348. Identify the problem of GoF pattern: How do you ensure that it is never possible to create more than one instance of a singleton class?

1. Adapter
2. Singleton
3. Façade
4. Observer

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Singleton

**Explanation:**

* The Singleton pattern ensures that only one instance of a class is created and provides a global point of access to that instance.

</details>

#### 349. Identify the problem of GoF pattern: How do you reduce the interconnection between classes, especially between classes that belong to different modules or subsystems?

1. Adapter
2. Singleton
3. Façade
4. Observer

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Façade

**Explanation:**

* The Façade pattern provides a simplified interface to a complex subsystem, reducing the interconnection between classes and making the system easier to use.

</details>

#### 350. Identify the problem of GoF pattern: How can you most effectively make use of a method that already exists in the other class?

1. Adapter
2. Singleton
3. Façade
4. Delegation

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Delegation

**Explanation:**

* The Delegation pattern allows an object to delegate a task to another object, making effective use of existing methods in other classes.

</details>
