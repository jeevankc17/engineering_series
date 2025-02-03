# set-3

#### 101. Why do we use a destructor in C++?

1. To destroy an object when the lifetime of the object ends
2. To create an object when the object needs to be created
3. To initialize the data members of an object when it is created
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) To destroy an object when the lifetime of the object ends

**Explanation:**

* A **destructor** is used to:
  * Release resources (e.g., memory, file handles) allocated to an object.
  * Perform cleanup tasks when the object goes out of scope or is explicitly deleted.
* Therefore, the correct answer is `To destroy an object when the lifetime of the object ends`.

</details>

#### 102. A destructor is preceded by:

1. /
2. |
3. ?
4. \~

<details>

<summary>Show me the answer</summary>

**Answer:** 4) \~

**Explanation:**

* A **destructor** is preceded by the **tilde symbol (`~`)**.
*   For example:

    ```cpp
    class MyClass {
    public:
        ~MyClass() {
            cout << "Destructor called!";
        }
    };
    ```
* Therefore, the correct answer is `~`.

</details>

#### 103. Which of the following statements is correct?

1. A constructor has the same name as that of the class
2. A destructor has the same name as that of the class with a tilde symbol at the beginning.
3. A constructor is a member function of the class
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the statements are correct:
  * A **constructor** has the same name as the class.
  * A **destructor** has the same name as the class but is preceded by a tilde (`~`).
  * Both constructors and destructors are **member functions** of the class.
* Therefore, the correct answer is `All of the Above`.

</details>

#### 104. When an object goes out of scope, which of the following gets called?

1. Constructor
2. Destructor
3. Main
4. Void

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Destructor

**Explanation:**

* When an object goes out of scope, its **destructor** is automatically called to clean up resources.
* Therefore, the correct answer is `Destructor`.

</details>

#### 105. Which of the following can be declared as virtual?

1. Destructor
2. Constructor
3. Data Members
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Destructor

**Explanation:**

* A **destructor** can be declared as **virtual** to ensure proper cleanup of derived class objects when deleted through a base class pointer.
* Constructors and data members **cannot** be declared as virtual.
* Therefore, the correct answer is `Destructor`.

</details>

#### 106. The constructor that either has no parameters, or if it has parameters, all the parameters have default values:

1. Default
2. Copy
3. Parameterized
4. Friend function

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Default

**Explanation:**

* A **default constructor** is either:
  * A constructor with no parameters.
  * A constructor where all parameters have default values.
* Therefore, the correct answer is `Default`.

</details>

#### 107. Per class, how many default constructors are possible?

1. 1
2. 2
3. 3
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 1) 1

**Explanation:**

* Only **one default constructor** can exist per class.
* If multiple constructors are defined, only one can be the default constructor.
* Therefore, the correct answer is `1`.

</details>

#### 108. A destructor takes how many arguments?

1. 0
2. 1
3. 2
4. 3

<details>

<summary>Show me the answer</summary>

**Answer:** 1) 0

**Explanation:**

* A **destructor** does not take any arguments. It is called automatically when an object goes out of scope.
* Therefore, the correct answer is `0`.

</details>

#### 109. How many times is a constructor called in the lifetime of an object?

1. Only once
2. 3
3. 2
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Only once

**Explanation:**

* A **constructor** is called **only once** when an object is created.
* Therefore, the correct answer is `Only once`.

</details>

#### 110. The area where the local variables are stored is called:

1. Heap
2. Stack
3. Free Memory
4. Cache

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Stack

**Explanation:**

* Local variables are stored in the **stack**, which is a memory area used for function calls and local data.
* Therefore, the correct answer is `Stack`.

</details>

#### 111. What is the return type of malloc()?

1. Char\*
2. Int \*
3. Void \*
4. Void \*\*

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Void \*

**Explanation:**

* The `malloc()` function returns a **void pointer (`void*`)**, which can be cast to any data type.
*   For example:

    ```cpp
    int* ptr = (int*)malloc(sizeof(int));
    ```
* Therefore, the correct answer is `Void *`.

</details>

#### 112. Which of the following obtains a block of memory dynamically?

1. Malloc
2. Calloc
3. Free
4. Both A & B

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Both A & B

**Explanation:**

* Both `malloc` and `calloc` are used to allocate memory dynamically:
  * `malloc` allocates memory without initializing it.
  * `calloc` allocates memory and initializes it to zero.
* Therefore, the correct answer is `Both A & B`.

</details>

#### 113. Which of the following operators is used to release the dynamically allocated memory in C++?

1. New
2. Delete
3. Free
4. Remove

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Delete

**Explanation:**

* The **`delete`** operator is used to release memory allocated using `new` in C++.
*   For example:

    ```cpp
    int* ptr = new int;
    delete ptr;
    ```
* Therefore, the correct answer is `Delete`.

</details>

#### 114. Which of the following is used to free the allocated memory for an object in C++?

1. Free
2. Delete
3. Release
4. Either delete or free

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Delete

**Explanation:**

* In C++, the **`delete`** operator is used to free memory allocated for an object using `new`.
* The `free` function is used in C, not C++.
* Therefore, the correct answer is `Delete`.

</details>

#### 115. Which of the following is correct?

1. The 'this' pointer is accessible within all the member functions of the class
2. The 'this' pointer is accessible only within functions returning void
3. The 'this' pointer is accessible only within non-static functions
4. The 'this' pointer is accessible within the member functions with zero arguments

<details>

<summary>Show me the answer</summary>

**Answer:** 3) The 'this' pointer is accessible only within non-static functions

**Explanation:**

* The **`this` pointer** is a hidden pointer available in all **non-static member functions** of a class.
* It points to the object for which the member function is called.
* Therefore, the correct answer is `The 'this' pointer is accessible only within non-static functions`.

</details>

#### 116. The 'this' pointer can be used to:

1. Guard against any kind of reference
2. Guard against self-reference
3. Guard from other pointers
4. Guard from parameter referencing

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Guard against self-reference

**Explanation:**

* The **`this` pointer** is used to:
  * Avoid ambiguity between class members and function parameters with the same name.
  * Guard against **self-reference** in assignment operations.
* Therefore, the correct answer is `Guard against self-reference`.

</details>

#### 117. The 'this' pointer is:

1. Modifiable
2. Non-Modifiable
3. Are made variables
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Non-Modifiable

**Explanation:**

* The **`this` pointer** is a **constant pointer**, meaning its value cannot be changed.
* Therefore, the correct answer is `Non-Modifiable`.

</details>

#### 118. Which of the following are types of 'this' pointer?

1. Const
2. Volatile
3. Both A & B
4. Int

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Both A & B

**Explanation:**

* The **`this` pointer** can be:
  * **Const**: When used in a `const` member function.
  * **Volatile**: When used in a `volatile` member function.
* Therefore, the correct answer is `Both A & B`.

</details>

#### 119. The static member functions have access to:

1. All the members of a class
2. Only constant members of a class
3. Only the static members of a class
4. All other class members also

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Only the static members of a class

**Explanation:**

* **Static member functions** can only access **static data members** and other **static member functions** of the class.
* They cannot access non-static members directly.
* Therefore, the correct answer is `Only the static members of a class`.

</details>

#### 120. The static members are:

1. Created and initialized only once
2. Created and initialized twice
3. Created when necessary
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Created and initialized only once

**Explanation:**

* **Static members** are:
  * Created and initialized **only once** when the program starts.
  * Shared among all objects of the class.
* Therefore, the correct answer is `Created and initialized only once`.

</details>

#### 121. Which of the following is correct?

1. The static data member can’t be mutable
2. If static data members are made inline, those can be initialized within the class
3. We can use the static member functions and static data members even if the class object is not created
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the statements are correct:
  * Static data members **cannot** be declared as `mutable`.
  * Static data members can be **initialized within the class** if they are declared as `inline`.
  * Static members (functions and data) can be accessed **without creating an object** of the class.
* Therefore, the correct answer is `All of the Above`.

</details>

#### 122. The keyword 'friend' is placed only in the:

1. Function Declaration
2. Function Definition
3. Main Function
4. Void Function

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Function Declaration

**Explanation:**

* The **`friend` keyword** is used in the **function declaration** inside the class to grant access to private and protected members.
* It is **not** used in the function definition or other parts of the program.
* Therefore, the correct answer is `Function Declaration`.

</details>

#### 123. Which of the following is correct?

1. Friend functions can be invoked as a normal function
2. Friend functions cannot access the members of the class directly
3. Friend functions can be private or public
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the statements are correct:
  * Friend functions are **not member functions** and can be invoked like normal functions.
  * Friend functions **can access private and protected members** of the class directly.
  * Friend functions can be declared in the **private or public** section of the class.
* Therefore, the correct answer is `All of the Above`.

</details>

#### 124. The syntax of a friend function is:

1. Friend class;
2. Friend class
3. Friend class1, class2
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Friend class

**Explanation:**

*   The correct syntax for declaring a **friend function** is:

    ```cpp
    friend returnType functionName(parameters);
    ```
*   For example:

    ```cpp
    class MyClass {
    private:
        int data;
    public:
        friend void display(MyClass obj);
    };
    ```
* Therefore, the correct answer is `Friend class`.

</details>

#### 125. A binary operator performs its action on:

1. A single operand
2. Two operands
3. Three operands
4. Any number of operands

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Two operands

**Explanation:**

* A **binary operator** operates on **two operands**.
* Examples include `+`, `-`, `*`, `/`, `==`, etc.
* Therefore, the correct answer is `Two operands`.

</details>

#### 126. Which of the following is a unary operator?

1. &
2. \==
3.
   *
4. /

<details>

<summary>Show me the answer</summary>

**Answer:** 3) -

**Explanation:**

* A **unary operator** operates on a **single operand**.
* Examples include `-` (negation), `++`, `--`, `!`, etc.
* Therefore, the correct answer is `-`.

</details>

#### 127. Which of the following is a binary operator?

1. &
2. \==
3. /
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the given operators are **binary operators**:
  * `&` (bitwise AND)
  * `==` (equality)
  * `/` (division)
* Therefore, the correct answer is `All of the Above`.

</details>

#### 128. Which is called the ternary operator?

1. ?:
2. &&
3. ||
4. \===

<details>

<summary>Show me the answer</summary>

**Answer:** 1) ?:

**Explanation:**

* The **ternary operator** is `?:`.
* It takes **three operands** and is used as a shorthand for `if-else` statements.
*   For example:

    ```cpp
    int result = (a > b) ? a : b;
    ```
* Therefore, the correct answer is `?:`.

</details>

#### 129. C-style type casting is also known as:

1. Cast notation
2. Type casting
3. Function notation
4. C notation

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Type casting

**Explanation:**

* **C-style type casting** is also known as **type casting**.
*   It uses the syntax:

    ```cpp
    (type) expression;
    ```
* Therefore, the correct answer is `Type casting`.

</details>

#### 130. There are three major ways in which we can use explicit conversion in C++:

1. 2
2. 3
3. 4
4. 5

<details>

<summary>Show me the answer</summary>

**Answer:** 2) 3

**Explanation:**

* The three major ways to perform **explicit conversion** in C++ are:
  1. **C-style casting**: `(type) expression`
  2. **Static casting**: `static_cast<type>(expression)`
  3. **Reinterpret casting**: `reinterpret_cast<type>(expression)`
* Therefore, the correct answer is `3`.

</details>

#### 131. How many parameters does a conversion operator may take?

1. 0
2. 1
3. 2
4. 3

<details>

<summary>Show me the answer</summary>

**Answer:** 1) 0

**Explanation:**

* A **conversion operator** does not take any parameters.
* It is used to convert an object of one type to another type.
* Therefore, the correct answer is `0`.

</details>

#### 132. What type of operator is a cast operator?

1. Unary
2. Binary
3. Ternary
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Unary

**Explanation:**

* A **cast operator** is a **unary operator** because it operates on a single operand.
* Therefore, the correct answer is `Unary`.

</details>

#### 133. The compiler carries out which type of casting?

1. Implicit
2. Explicit
3. Ex-Implicit
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Implicit

**Explanation:**

* The **compiler** performs **implicit casting** automatically when data types are compatible.
*   For example:

    ```cpp
    int x = 10;
    double y = x; // Implicit casting from int to double
    ```
* Therefore, the correct answer is `Implicit`.

</details>

#### 134. The programmer initiates which type of casting?

1. Implicit
2. Explicit
3. Ex-Implicit
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Explicit

**Explanation:**

* The **programmer** initiates **explicit casting** using casting operators like `static_cast`, `dynamic_cast`, etc.
* Therefore, the correct answer is `Explicit`.

</details>

#### 135. How many types of inheritance are there in C++?

1. 3
2. 4
3. 5
4. 6

<details>

<summary>Show me the answer</summary>

**Answer:** 3) 5

**Explanation:**

* The **five types of inheritance** in C++ are:
  1. Single inheritance
  2. Multiple inheritance
  3. Multilevel inheritance
  4. Hierarchical inheritance
  5. Hybrid inheritance
* Therefore, the correct answer is `5`.

</details>

#### 136. Single-level inheritance is:

1. A class inheriting a derived class
2. A class inheriting a base class
3. A class inheriting a nested class
4. A class which gets inherited by 2 classes

<details>

<summary>Show me the answer</summary>

**Answer:** 2) A class inheriting a base class

**Explanation:**

* **Single-level inheritance** occurs when a **derived class** inherits from a **single base class**.
*   For example:

    ```cpp
    class Base {};
    class Derived : public Base {};
    ```
* Therefore, the correct answer is `A class inheriting a base class`.

</details>

#### 137. Multiple Inheritance is not supported by:

1. JAVA
2. C++
3. C
4. JAVA and Smalltalk

<details>

<summary>Show me the answer</summary>

**Answer:** 1) JAVA

**Explanation:**

* **Multiple inheritance** is not supported by **JAVA** to avoid complexity and ambiguity (e.g., the diamond problem).
* C++ supports multiple inheritance.
* Therefore, the correct answer is `JAVA`.

</details>

#### 138. The feature of multiple inheritance in JAVA is done through:

1. Interfaces Concept
2. Diamond Problem
3. Reusability concept
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Interfaces Concept

**Explanation:**

* In **JAVA**, the concept of **multiple inheritance** is achieved using **interfaces**.
* A class can implement multiple interfaces, thus simulating multiple inheritance.
* Therefore, the correct answer is `Interfaces Concept`.

</details>

#### 139. The diamond problem is associated with:

1. Single
2. Multiple
3. Multi-Level
4. Hierarchical

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Multiple

**Explanation:**

* The **diamond problem** occurs in **multiple inheritance** when a class inherits from two classes that both inherit from a common base class.
* This creates ambiguity in accessing the base class members.
* Therefore, the correct answer is `Multiple`.

</details>

#### 140. Which constructor is called first if a derived class object is created?

1. Base Class Constructor
2. Copy Constructor
3. Default
4. Not possible

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Base Class Constructor

**Explanation:**

* When a derived class object is created, the **base class constructor** is called first to initialize the base class part of the object.
* Then, the derived class constructor is called.
* Therefore, the correct answer is `Base Class Constructor`.

</details>

#### 141. In a single program, how many types of inheritance can be used?

1. 2
2. 3
3. 4
4. Any type, any number of times

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Any type, any number of times

**Explanation:**

* In a single program, **any type of inheritance** (single, multiple, multilevel, hierarchical, hybrid) can be used **any number of times**.
* Therefore, the correct answer is `Any type, any number of times`.

</details>

#### 142. If we use single inheritance, then the program will contain how many classes?

1. At least 2
2. 3
3. 4
4. At most 4

<details>

<summary>Show me the answer</summary>

**Answer:** 1) At least 2

**Explanation:**

* In **single inheritance**, there must be **at least two classes**: a base class and a derived class.
* Therefore, the correct answer is `At least 2`.

</details>

#### 143. Which constructor will be called first from the classes involved in single inheritance from the object of the derived class?

1. Base class constructor
2. Derived class constructor
3. Both class constructors at a time
4. Runtime error

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Base class constructor

**Explanation:**

* In **single inheritance**, the **base class constructor** is called first when a derived class object is created.
* Therefore, the correct answer is `Base class constructor`.

</details>

#### 144. Multilevel inheritance is:

1. A class derived from another derived class
2. Classes being derived from other derived classes
3. Continuing single-level inheritance
4. A class which has more than one parent

<details>

<summary>Show me the answer</summary>

**Answer:** 1) A class derived from another derived class

**Explanation:**

* **Multilevel inheritance** occurs when a class is derived from another derived class.
*   For example:

    ```cpp
    class A {};
    class B : public A {};
    class C : public B {};
    ```
* Therefore, the correct answer is `A class derived from another derived class`.

</details>

#### 145. The minimum number of levels for implementing multilevel inheritance is:

1. 1
2. 2
3. 3
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 3) 3

**Explanation:**

* **Multilevel inheritance** requires at least **three levels**: a base class, a derived class, and a further derived class.
* Therefore, the correct answer is `3`.

</details>

#### 146. In multilevel inheritance, one class inherits:

1. 1 class
2. 2 classes
3. 3 classes
4. 4 classes

<details>

<summary>Show me the answer</summary>

**Answer:** 1) 1 class

**Explanation:**

* In **multilevel inheritance**, each class inherits from **only one class**.
* Therefore, the correct answer is `1 class`.

</details>

#### 147. In multilevel inheritance, which is the most significant feature of OOP used?

1. Code readability
2. Flexibility
3. Code reusability
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Code reusability

**Explanation:**

* The most significant feature of OOP used in **multilevel inheritance** is **code reusability**.
* Derived classes reuse the code from their base classes.
* Therefore, the correct answer is `Code reusability`.

</details>

#### 148. Multiple inheritance is defined as:

1. A class is derived from another class
2. A class is derived from two or more classes
3. When a class is derived from other two derived classes
4. When a class is derived from exactly one class

<details>

<summary>Show me the answer</summary>

**Answer:** 2) A class is derived from two or more classes

**Explanation:**

* **Multiple inheritance** occurs when a class is derived from **two or more base classes**.
*   For example:

    ```cpp
    class A {};
    class B {};
    class C : public A, public B {};
    ```
* Therefore, the correct answer is `A class is derived from two or more classes`.

</details>

#### 149. To implement multiple inheritance, at least how many classes should a program contain?

1. 1
2. 2
3. 3
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 3) 3

**Explanation:**

* To implement **multiple inheritance**, a program must contain at least **three classes**: two base classes and one derived class.
* Therefore, the correct answer is `3`.

</details>
