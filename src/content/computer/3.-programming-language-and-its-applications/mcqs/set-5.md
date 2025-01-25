# set-5

#### 201. How many types of Container Adaptors are present?

A. 3\
B. 4\
C. 5\
D. 6

<details>

<summary>Show me the answer</summary>

**Answer:** A. 3

**Explanation:**

* The **Container Adaptors** in STL are:
  1. **Stack**: LIFO (Last In First Out) data structure.
  2. **Queue**: FIFO (First In First Out) data structure.
  3. **Priority Queue**: Elements are ordered by priority.
* Therefore, the correct answer is `3`.

</details>

#### 202. How many types of associative containers are present?

A. 1\
B. 2\
C. 3\
D. 4

<details>

<summary>Show me the answer</summary>

**Answer:** C. 3

**Explanation:**

* The **associative containers** in STL are:
  1. **Set**: Stores unique elements in a sorted order.
  2. **Map**: Stores key-value pairs in a sorted order.
  3. **Multiset**: Allows duplicate elements in a sorted order.
* Therefore, the correct answer is `3`.

</details>

#### 203. How many Unordered Associative containers are present?

A. 2\
B. 3\
C. 4\
D. 5

<details>

<summary>Show me the answer</summary>

**Answer:** C. 4

**Explanation:**

* The **Unordered Associative Containers** in STL are:
  1. **Unordered Set**: Stores unique elements in no particular order.
  2. **Unordered Map**: Stores key-value pairs in no particular order.
  3. **Unordered Multiset**: Allows duplicate elements in no particular order.
  4. **Unordered Multimap**: Allows duplicate key-value pairs in no particular order.
* Therefore, the correct answer is `4`.

</details>

#### 204. Unordered associative containers are containers that:

A. Implement unsorted (hashed) data structures for quick search in O(1)\
B. Implement sorted data structures that can be quickly searched (O(log n) complexity)\
C. Provide a different interface for sequential containers.\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. Implement unsorted (hashed) data structures for quick search in O(1)

**Explanation:**

* **Unordered associative containers** use **hash tables** to implement unsorted data structures, allowing for **O(1)** average time complexity for search operations.
* Therefore, the correct answer is `Implement unsorted (hashed) data structures for quick search in O(1)`.

</details>

#### 205. A container adaptor is that:

A. Containers that implement unsorted (hashed) data structures for quick search in O(1)\
B. Implement sorted data structures that can be quickly searched (O(log n) complexity)\
C. Provide a different interface for sequential containers.\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** C. Provide a different interface for sequential containers.

**Explanation:**

* **Container adaptors** (e.g., stack, queue) provide a **different interface** for sequential containers, allowing them to be used in specific ways (e.g., LIFO, FIFO).
* Therefore, the correct answer is `Provide a different interface for sequential containers.`.

</details>

#### 206. An associative container is that:

A. Containers that implement unsorted (hashed) data structures for quick search in O(1)\
B. Implement sorted data structures that can be quickly searched (O(log n) complexity)\
C. Provide a different interface for sequential containers.\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** B. Implement sorted data structures that can be quickly searched (O(log n) complexity)

**Explanation:**

* **Associative containers** (e.g., set, map) implement **sorted data structures** that allow for quick search operations with **O(log n)** complexity.
* Therefore, the correct answer is `Implement sorted data structures that can be quickly searched (O(log n) complexity)`.

</details>

#### 207. Exception specification is:

A. A function is limited to throwing only a specified list of exceptions\
B. A function is allowed to throw all list of exceptions\
C. Both A & B\
D. A function can throw any type of exceptions

<details>

<summary>Show me the answer</summary>

**Answer:** A. A function is limited to throwing only a specified list of exceptions

**Explanation:**

* **Exception specification** restricts a function to throwing only a **specified list of exceptions**.
*   For example:

    ```cpp
    void myFunction() throw(int, char) {
        // Function body
    }
    ```
* Therefore, the correct answer is `A function is limited to throwing only a specified list of exceptions`.

</details>

#### 208. When a program throws any other type of exception other than specified, then?

A. Run\
B. Arises error\
C. No response\
D. Throw

<details>

<summary>Show me the answer</summary>

**Answer:** B. Arises error

**Explanation:**

* If a program throws an exception **not specified** in the exception specification, it results in a **runtime error**.
* Therefore, the correct answer is `Arises error`.

</details>

#### 209. No Exception specification means:

A. Throw Nothing\
B. Catch nothing\
C. Throw anything\
D. Catch anything

<details>

<summary>Show me the answer</summary>

**Answer:** C. Throw anything

**Explanation:**

* If a function has **no exception specification**, it means the function can **throw any type of exception**.
* Therefore, the correct answer is `Throw anything`.

</details>

#### 210. Which of the following operations does not throw anything?

A. Operations which are irreversible\
B. Operations which are reversible\
C. Operations which are continuous\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. Operations which are irreversible

**Explanation:**

* **Irreversible operations** (e.g., deleting a file) typically do not throw exceptions because they cannot be undone.
* Therefore, the correct answer is `Operations which are irreversible`.

</details>

#### 211. The ellipsis operator is used to:

A. Catch all handlers\
B. Throw all handlers\
C. Catch and throw all handlers\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. Catch all handlers

**Explanation:**

* The **ellipsis operator (`...`)** is used in a `catch` block to **catch all types of exceptions**.
*   For example:

    ```cpp
    try {
        // Code that may throw exceptions
    } catch (...) {
        // Catches all exceptions
    }
    ```
* Therefore, the correct answer is `Catch all handlers`.

</details>

#### 212. When we move the try block far away from the catch block, then?

A. Reduces the amount of code in the cache\
B. Increases the amount of code in the cache\
C. Doesn’t alter anything\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** B. Increases the amount of code in the cache

**Explanation:**

* Moving the `try` block far away from the `catch` block **increases the amount of code in the cache** because the compiler has to handle the exception handling mechanism over a larger scope.
* Therefore, the correct answer is `Increases the amount of code in the cache`.

</details>

#### 213. It is expensive to use objects for exceptions because:

A. The exception object is created only if an error actually happens\
B. Large time and space\
C. Both A & B\
D. Large execution time

<details>

<summary>Show me the answer</summary>

**Answer:** C. Both A & B

**Explanation:**

* Using objects for exceptions is expensive because:
  1. The exception object is created **only if an error occurs**, which adds overhead.
  2. It requires **large time and space** to handle the exception.
* Therefore, the correct answer is `Both A & B`.

</details>

#### 214. Iterators are used to:

A. Point to memory addresses of STL containers\
B. Iterate over pointers\
C. Iterate over C-like arrays\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** D. All of the Above

**Explanation:**

* **Iterators** are used to:
  1. Point to memory addresses of STL containers.
  2. Iterate over pointers.
  3. Iterate over C-like arrays.
* Therefore, the correct answer is `All of the Above`.

</details>

#### 215. Exception handling consists of how many keywords?

A. 2\
B. 3\
C. 4\
D. 5

<details>

<summary>Show me the answer</summary>

**Answer:** B. 3

**Explanation:**

* Exception handling in C++ consists of **three keywords**:
  1. **`try`**: Defines a block of code to be tested for errors.
  2. **`catch`**: Defines a block of code to handle the error.
  3. **`throw`**: Throws an exception when a problem is detected.
* Therefore, the correct answer is `3`.

</details>

#### 216. The advantages of exception handling are:

A. Separation of Error Handling code from Normal Code\
B. Functions/Methods can handle only the exceptions they choose\
C. Grouping of Error Types\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** D. All of the Above

**Explanation:**

* The advantages of exception handling include:
  1. **Separation of error handling code** from normal code.
  2. Functions/methods can handle **only the exceptions they choose**.
  3. **Grouping of error types** for better organization.
* Therefore, the correct answer is `All of the Above`.

</details>

#### 217. Which of the following statements is true?

A. Exceptions are runtime anomalies or abnormal conditions that a program encounters during its execution.\
B. Types of exceptions are synchronous and asynchronous\
C. Grouping of error types is an advantage of error handling\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** D. All of the Above

**Explanation:**

* All the statements are correct:
  1. Exceptions are **runtime anomalies** or abnormal conditions.
  2. Types of exceptions are **synchronous** (e.g., division by zero) and **asynchronous** (e.g., hardware interrupts).
  3. Grouping of error types is an **advantage of error handling**.
* Therefore, the correct answer is `All of the Above`.

</details>

#### 218. Which of the following is used to catch all the exceptions?

A. Catch(.....)\
B. Catch(...)\
C. Catch()\
D. Catch(&)

<details>

<summary>Show me the answer</summary>

**Answer:** B. Catch(...)

**Explanation:**

* The **`catch(...)`** block is used to **catch all types of exceptions**.
* Therefore, the correct answer is `Catch(...)`.

</details>

#### 219. Which of the following is used to handle exceptions in C++?

A. Catch\
B. Throw\
C. Exception\
D. Exception handler

<details>

<summary>Show me the answer</summary>

**Answer:** D. Exception handler

**Explanation:**

* The **exception handler** is used to handle exceptions in C++. It consists of `try`, `catch`, and `throw` blocks.
* Therefore, the correct answer is `Exception handler`.

</details>

#### 220. In C++, what types of exceptions are available?

A. Static\
B. Dynamic\
C. Both A & B\
D. Unhandled

<details>

<summary>Show me the answer</summary>

**Answer:** C. Both A & B

**Explanation:**

* In C++, exceptions can be:
  1. **Static**: Known at compile time (e.g., syntax errors).
  2. **Dynamic**: Occur at runtime (e.g., division by zero).
* Therefore, the correct answer is `Both A & B`.

</details>

#### 221. Which of the following is used to check the error in the block?

A. Try\
B. Catch\
C. Throw\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. Try

**Explanation:**

* The **`try`** block is used to **check for errors** in a block of code.
* Therefore, the correct answer is `Try`.

</details>

#### 222. The C++ code which causes abnormal termination/behavior of a program should be written under:

A. Try\
B. Catch\
C. Throw\
D. Any one of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. Try

**Explanation:**

* Code that may cause **abnormal termination or behavior** should be written inside a **`try`** block to handle potential exceptions.
* Therefore, the correct answer is `Try`.

</details>

#### 223. What does a program do when it detects an exception?

A. Continue running\
B. Calls other functions of the program\
C. Results in the termination of the program\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** C. Results in the termination of the program

**Explanation:**

* When a program detects an **unhandled exception**, it **terminates abnormally**.
* Therefore, the correct answer is `Results in the termination of the program`.

</details>

#### 224. What will happen if the try-catch block is not used?

A. Error will arise\
B. Error will not arise\
C. Program generates output\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. Error will arise

**Explanation:**

* If the **`try-catch` block** is not used, the program will **terminate abnormally** when an exception occurs.
* Therefore, the correct answer is `Error will arise`.

</details>

#### 225. We can take Exception in C++ as:

A. Divide by zero\
B. Variable not declared\
C. An expression is not complete\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** D. All of the Above

**Explanation:**

* Exceptions in C++ can occur due to:
  1. **Divide by zero**.
  2. **Variable not declared**.
  3. **Incomplete expressions**.
* Therefore, the correct answer is `All of the Above`.

</details>

#### 226. Which of the following is correct?

A. Exceptions can be handled at runtime, but errors cannot\
B. There are two types of exceptions\
C. The throw keyword is used to throw an exception\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** D. All of the Above

**Explanation:**

* All the statements are correct:
  1. Exceptions can be **handled at runtime**, but errors (e.g., syntax errors) cannot.
  2. There are **two types of exceptions**: synchronous and asynchronous.
  3. The **`throw`** keyword is used to throw an exception.
* Therefore, the correct answer is `All of the Above`.

</details>

#### 227. Rethrowing Means?

A. An exception that is thrown again as it is not handled by that catching block\
B. An exception that is caught twice\
C. An exception that is not handled in one caught hence thrown again\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. An exception that is thrown again as it is not handled by that catching block

**Explanation:**

* **Rethrowing** means an exception is **thrown again** because it was not handled by the current `catch` block.
* Therefore, the correct answer is `An exception that is thrown again as it is not handled by that catching block`.

</details>

#### 228. What is encapsulation in object-oriented programming?

A. The process of hiding implementation details from users of a class.\
B. The process of exposing implementation details to users of a class.\
C. The process of defining variables and methods in a class.\
D. The process of creating objects from a class.

<details>

<summary>Show me the answer</summary>

**Answer:** A. The process of hiding implementation details from users of a class.

**Explanation:**

* **Encapsulation** is the process of **hiding implementation details** from users of a class, exposing only necessary functionality.
* Therefore, the correct answer is `The process of hiding implementation details from users of a class.`.

</details>

#### 229. Which access modifiers can be used to implement encapsulation in Java?

A. Public and private\
B. Public and protected\
C. Private and protected\
D. Public, private, and protected

<details>

<summary>Show me the answer</summary>

**Answer:** D. Public, private, and protected

**Explanation:**

* **Encapsulation** in Java is implemented using **access modifiers**:
  1. **Public**: Accessible from anywhere.
  2. **Private**: Accessible only within the class.
  3. **Protected**: Accessible within the class and its subclasses.
* Therefore, the correct answer is `Public, private, and protected`.

</details>

#### 230. Which of the following is an example of encapsulation?

A. A class with all public methods and variables.\
B. A class with all private methods and variables.\
C. A class with some public and some private methods and variables\
D. A class with no methods or variables.

<details>

<summary>Show me the answer</summary>

**Answer:** C. A class with some public and some private methods and variables

**Explanation:**

* **Encapsulation** is demonstrated when a class has:
  1. **Private** members to hide implementation details.
  2. **Public** methods to provide controlled access to the data.
* Therefore, the correct answer is `A class with some public and some private methods and variables`.

</details>

#### 231. Which of the following best describes the relationship between encapsulation and information hiding?

A. Encapsulation and information hiding are two different terms for the same thing.\
B. Encapsulation is a broader concept that includes information hiding.\
C. Information hiding is a broader concept that includes encapsulation.\
D. Encapsulation and information hiding are unrelated concepts.

<details>

<summary>Show me the answer</summary>

**Answer:** B. Encapsulation is a broader concept that includes information hiding.

**Explanation:**

* **Encapsulation** is a broader concept that includes **information hiding** as one of its principles.
* Therefore, the correct answer is `Encapsulation is a broader concept that includes information hiding.`.

</details>

#### 232. Which of the following is NOT a benefit of encapsulation?

A. Improved security of data\
B. Better organization of code\
C. Easier debugging of code\
D. Increased speed of execution

<details>

<summary>Show me the answer</summary>

**Answer:** D. Increased speed of execution

**Explanation:**

* **Encapsulation** provides benefits like improved security, better organization, and easier debugging, but it does not directly increase the **speed of execution**.
* Therefore, the correct answer is `Increased speed of execution`.

</details>

#### 233. Which of the following best describes the principle of "separation of concerns" in relation to encapsulation?

A. The idea that different classes should be responsible for different tasks, and that each class should be responsible for a single concern.\
B. The idea that all code related to a particular feature should be located in a single class.\
C. The idea that classes should be designed to be easily extended and modified without breaking existing code.\
D. The idea that all variables and methods in a class should be accessible to other classes.

<details>

<summary>Show me the answer</summary>

**Answer:** A. The idea that different classes should be responsible for different tasks, and that each class should be responsible for a single concern.

**Explanation:**

* The **separation of concerns** principle states that each class should handle a **single responsibility** or concern, making the code more modular and maintainable.
* Therefore, the correct answer is `The idea that different classes should be responsible for different tasks, and that each class should be responsible for a single concern.`.

</details>

#### 234. Which of the following statements about encapsulation in C++ is true?

A. Encapsulation is achieved through the use of access modifiers such as public, private, and protected.\
B. Encapsulation is not possible in C++.\
C. Encapsulation in C++ is achieved through the use of pointers.\
D. Encapsulation in C++ is achieved through the use of inheritance.

<details>

<summary>Show me the answer</summary>

**Answer:** A. Encapsulation is achieved through the use of access modifiers such as public, private, and protected.

**Explanation:**

* **Encapsulation** in C++ is achieved using **access modifiers** like `public`, `private`, and `protected` to control access to class members.
* Therefore, the correct answer is `Encapsulation is achieved through the use of access modifiers such as public, private, and protected.`.

</details>

#### 235. Which of the following best describes the relationship between encapsulation and inheritance?

A. Encapsulation and inheritance are two different terms for the same thing.\
B. Encapsulation is a broader concept that includes inheritance.\
C. Inheritance is a broader concept that includes encapsulation.\
D. Encapsulation and inheritance are unrelated concepts.

<details>

<summary>Show me the answer</summary>

**Answer:** D. Encapsulation and inheritance are unrelated concepts.

**Explanation:**

* **Encapsulation** and **inheritance** are separate concepts in OOP. Encapsulation focuses on data hiding, while inheritance focuses on code reuse and hierarchy.
* Therefore, the correct answer is `Encapsulation and inheritance are unrelated concepts.`.

</details>

#### 236. Which type of polymorphism is resolved at compile-time?

A. Runtime polymorphism\
B. Dynamic polymorphism\
C. Method overloading\
D. Subtyping

<details>

<summary>Show me the answer</summary>

**Answer:** C. Method overloading

**Explanation:**

* **Method overloading** is an example of **compile-time polymorphism** because the method to be called is determined at compile time based on the method signature.
* Therefore, the correct answer is `Method overloading`.

</details>

#### 237. Which type of polymorphism allows objects of a subclass to be treated as objects of its superclass?

A. Compile-time polymorphism\
B. Dynamic polymorphism\
C. Subtyping\
D. Method overriding

<details>

<summary>Show me the answer</summary>

**Answer:** B. Dynamic polymorphism

**Explanation:**

* **Dynamic polymorphism** allows objects of a subclass to be treated as objects of its superclass, enabling runtime method resolution (e.g., using virtual functions).
* Therefore, the correct answer is `Dynamic polymorphism`.

</details>

#### 238. Which of the following is NOT a form of polymorphism?

A. Method overloading\
B. Method overriding\
C. Subclassing\
D. Interface-based programming

<details>

<summary>Show me the answer</summary>

**Answer:** C. Subclassing

**Explanation:**

* **Subclassing** is a mechanism of inheritance, not a form of polymorphism.
* Therefore, the correct answer is `Subclassing`.

</details>

#### 239. Which type of polymorphism allows an object of a subclass to be used in place of an object of its superclass?

A. Subtyping\
B. Method overloading\
C. Method overriding\
D. Interface-based programming

<details>

<summary>Show me the answer</summary>

**Answer:** A. Subtyping

**Explanation:**

* **Subtyping** allows an object of a subclass to be used in place of an object of its superclass, enabling polymorphism.
* Therefore, the correct answer is `Subtyping`.

</details>

#### 240. Which of the following is correct?

A. Virtual functions must be members of some class, and the virtual function must be defined in the base class\
B. Virtual functions cannot be static members.\
C. Virtual Functions are accessed through object pointers.\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** D. All of the Above

**Explanation:**

* All the statements are correct:
  1. Virtual functions must be **members of a class** and are typically defined in the base class.
  2. Virtual functions **cannot** be static members.
  3. Virtual functions are accessed through **object pointers** to achieve runtime polymorphism.
* Therefore, the correct answer is `All of the Above`.

</details>
