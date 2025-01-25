# set-9

#### 415. Which would you use if you wanted a relatively permanent connection between sender & receiver objects?

1. Attribute, or global
2. Parameter, or local
3. Both A and B
4. Only parameter

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Attribute, or global

**Explanation:**

* An attribute or global variable provides a relatively permanent connection between sender and receiver objects, as it persists throughout the object's lifecycle.

</details>

#### 416. Which would you use if you didn’t want a permanent connection?

1. Parameter, or local
2. Attribute, or global
3. Both A and B
4. Only Attribute

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Parameter, or local

**Explanation:**

* A parameter or local variable provides a temporary connection between sender and receiver objects, which is useful when a permanent connection is not needed.

</details>

#### 417. \_\_\_\_\_\_ is the way to achieve global visibility.

1. Use a global variable in C++,
2. Static (or class) variable (in C++ or Java) or
3. The .Singleton pattern (a static method that returns the object)
4. All of them

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of them

**Explanation:**

* Global visibility can be achieved using global variables, static/class variables, or the Singleton pattern. All these methods provide a way to access an object globally.

</details>

#### 418. Design class diagrams (DCD) provides details of the software classes along with \_\_\_\_\_\_

1. Parameters
2. Visibility
3. Use cases
4. Methods

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Methods

**Explanation:**

* Design Class Diagrams (DCD) provide details of software classes, including their methods, attributes, and relationships. Methods are a key part of class design.

</details>

#### 419. A Class consists of which of these abstractions?

1. Set of the objects
2. Attributes
3. Operations
4. All of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the mentioned

**Explanation:**

* A class consists of a set of objects, attributes (data), and operations (methods). These abstractions define the structure and behavior of the class.

</details>

#### 420. A class is divided into which of these compartments?

1. Name Compartment
2. Attribute Compartment
3. Operation Compartment
4. All of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the mentioned

**Explanation:**

* A class is divided into compartments for the class name, attributes, and operations. These compartments organize the information about the class in a UML diagram.

</details>

#### 421. An attribute is a data item held by which of the following?

1. Class
2. Object
3. All of the mentioned
4. None of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 3. All of the mentioned

**Explanation:**

* An attribute is a data item held by both classes and objects. It represents the state or characteristics of the class or object.

</details>

#### 422. What Does a Composite name consist of in a UML Class and object diagram?

1. Delimiter
2. Simple names
3. Digits
4. All of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the mentioned

**Explanation:**

* A composite name in UML consists of simple names, digits, and delimiters. It is used to create unique and meaningful names for classes and objects.

</details>

#### 423. Select which one is model static data structures.

1. Deployment diagram
2. Class diagrams
3. Activity diagrams
4. Interaction diagrams
5. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Class diagrams

**Explanation:**

* Class diagrams model static data structures, showing the classes, attributes, and relationships in a system. They provide a static view of the system's structure.

</details>

#### 424. Select the diagrams that are used to explain data structures, and the static snapshots parts of the things place in the class diagrams.

1. Use case
2. Collaboration
3. Object
4. Sequence
5. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Object

**Explanation:**

* Object diagrams are used to explain data structures and provide static snapshots of the objects and their relationships at a specific point in time.

</details>

#### 425. \_\_\_\_\_\_ select from the following in which engineering and reverse engineering can be applicable

1. Tagged values
2. Stereotypes
3. Class diagram
4. Both 1 and 2

<details>

<summary>Show me the answer</summary>

**Answer:** 5. Both 1 and 2

**Explanation:**

* Engineering and reverse engineering can be applied to tagged values and stereotypes in UML. These elements provide additional information about the model and can be used in both forward and reverse engineering processes.

</details>

#### 426. \_\_\_\_\_\_ are part of the class operation specification format?

1. Name
2. Parameter list
3. Return-type list
4. All of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the mentioned

**Explanation:**

* The class operation specification format includes the operation name, parameter list, and return-type list. These elements define the behavior of the operation.

</details>

#### 427. Which among these are the rules to be considered to form Class diagrams?

1. Class symbols must have at least a name compartment
2. Compartment can be in random order
3. Attributes and operations can be listed at any suitable place
4. None of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Class symbols must have at least a name compartment

**Explanation:**

* Class symbols in UML must have at least a name compartment. The order of compartments (attributes, operations) is not random and follows a standard convention.

</details>

#### 428. Given this class diagram, suppose we execute the following code:

1. In Minivan
2. In Minivan or Car
3. In Minivan, Car, or Vehicle
4. In Car
5. In Car or Vehicle

<details>

<summary>Show me the answer</summary>

**Answer:** 3. In Minivan, Car, or Vehicle

**Explanation:**

* The `drivesOnRoad()` method could be defined in Minivan, Car, or Vehicle, as Minivan inherits from Car, which inherits from Vehicle. The method could be overridden in any of these classes.

</details>

#### 429. Given this class diagram, suppose there is a method pass, defined in Car as

Suppose imp is an instance of Car (or one of its subtypes).

When I invoke the above method using imp.pass(pokey), what must be true of actual parameter pokey?

1. Its actual type is Car
2. Its actual type is Car, SportsCar, or Minivan
3. Its actual type is Car or Vehicle
4. It depends on the actual type of imp
5. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Its actual type is Car, SportsCar, or Minivan

**Explanation:**

* The parameter `pokey` must be of type `Car` or one of its subtypes (`SportsCar` or `Minivan`). This is because the method `pass` is defined to accept a parameter of type `Car`.

</details>

#### 430. Given the below class diagram and code fragment, what happens?

1. The code compiles and executes fine
2. Code fails at compile time, error in line 2
3. Code fails at compile time, error in line 5 \[correct]
4. Code fails at execution time, error in line 2
5. Code fails at execution time, error in line 5

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Code fails at compile time, error in line 5

**Explanation:**

* The code fails at compile time because the `Garage` class does not have a `parkCar` method defined. This results in a compilation error in line 5.

</details>

#### 431. Implementation in an OOP language requires writing source code for:

1. Class and interface definitions
2. Method definitions
3. Both A and B
4. None

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Both A and B

**Explanation:**

* Implementation in an OOP language involves writing source code for both class and interface definitions, as well as method definitions. These are essential components of object-oriented programming.

</details>

#### 432. Basic class definitions can be written from the design class diagrams. Which of the following information can be extracted:

1. Class name
2. Attributes: name, type and access specifier
3. Method: name, return type, parameters and their types, and its access specifier
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* Design class diagrams provide all the necessary information to write basic class definitions, including class names, attributes (name, type, access specifier), and methods (name, return type, parameters, and access specifier).

</details>

#### 433. During the creation of methods form interaction diagram, the sequence of messages in an interaction diagram translates to a series of statements in the method definitions. Is this statement true?

1. Yes
2. No

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Yes

**Explanation:**

* The sequence of messages in an interaction diagram translates directly to a series of statements in the method definitions. This helps in implementing the behavior defined in the interaction diagram.

</details>

#### 434. One-to-many relationships are common. For example, a Sale is associated with a group of SalesLineItem objects. In OO programming languages, these relationships are usually implemented using collection objects such as Vectors, Lists, Maps, arrays and so on. In which phase these relations are maintained?

1. CREATING CLASS DEFINITIONS FROM DCDS
2. CONTAINER/COLLECTION CLASSES IN CODE
3. ORDER OF IMPLEMENTATION
4. EXCEPTIONS AND ERROR HANDLING

<details>

<summary>Show me the answer</summary>

**Answer:** 2. CONTAINER/COLLECTION CLASSES IN CODE

**Explanation:**

* One-to-many relationships are implemented using container/collection classes such as Vectors, Lists, or Maps. These relationships are maintained during the implementation phase.

</details>

#### 435. How to maintain the visibility to a group of other objects? For example, a Sale must maintain visibility to a group of SalesLineItem instances. Which phases handles these?

1. CREATING CLASS DEFINITIONS FROM DCDS
2. CONTAINER/COLLECTION CLASSES IN CODE
3. ORDER OF IMPLEMENTATION
4. EXCEPTIONS AND ERROR HANDLING

<details>

<summary>Show me the answer</summary>

**Answer:** 2. CONTAINER/COLLECTION CLASSES IN CODE

**Explanation:**

* Visibility to a group of objects (e.g., a Sale maintaining visibility to SalesLineItem instances) is handled using container/collection classes during the implementation phase.

</details>

#### 436. In order of implementation phase, Classes need to be implemented (and ideally, fully unit tested) from least-coupled to most-coupled. Is this statement true?

1. Yes
2. No

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Yes

**Explanation:**

* Classes should be implemented and unit tested from least-coupled to most-coupled to ensure that dependencies are managed effectively and testing can be done incrementally.

</details>

#### 437. \_\_\_\_\_\_ are anomalous situations during a program's execution.

1. Exceptions
2. Errors
3. Delay
4. Noise

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Exceptions

**Explanation:**

* Exceptions are anomalous situations that occur during a program's execution, such as invalid input or resource unavailability. They are used to handle unexpected events gracefully.

</details>

#### 438. The unexpected situations that may occur during program execution are

1. Running out of memory
2. Resource allocation errors
3. Inability to find a file
4. Problems in network
5. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 5. All of the above

**Explanation:**

* Unexpected situations during program execution include running out of memory, resource allocation errors, inability to find a file, and network problems. These are all examples of exceptions.

</details>

#### 439. Every try statement should be followed by at least one catch statement; otherwise \_\_\_\_\_\_ will occur.

1. No execution
2. Null
3. Zero
4. Compilation error

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Compilation error

**Explanation:**

* In most programming languages, a `try` block must be followed by at least one `catch` block or a `finally` block. If not, a compilation error will occur.

</details>

#### 440. State whether the following statements are True or False.

1. A catch can have comma-separated multiple arguments.
2. Throwing an Exception always causes program termination.
3. True, False
4. False, True
5. True, True
6. False, False

<details>

<summary>Show me the answer</summary>

**Answer:** 1. True, False

**Explanation:**

* A `catch` block can have multiple arguments separated by commas in some languages (e.g., Java 7+). However, throwing an exception does not always cause program termination; it depends on whether the exception is caught and handled.

</details>
