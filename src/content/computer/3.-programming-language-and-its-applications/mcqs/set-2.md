# set-2

#### 51. Which of the following statements is correct?

1. Structure elements can be initialized at the time of declaration
2. Structure members cannot be initialized at the time of declaration
3. Only integer members of a structure can be initialized at the time of declaration
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Structure elements can be initialized at the time of declaration

**Explanation:**\
Structure elements can be initialized at the time of declaration.

For example:

```c
struct Student { 
    int id; char name[50]; 
}; 
struct Student s1 = {101, "John"}; // Initialization at declaration
```

Therefore, the correct answer is `Structure elements can be initialized at the time of declaration`.

</details>

#### 52. User-defined data types are also called:

1. Aggregate
2. Derived
3. Secondary
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
User-defined data types in C are also referred to as:

* **Aggregate**: Combines multiple data types (e.g., structures).
* **Derived**: Derived from existing data types (e.g., typedef).
* **Secondary**: Created by the user, not built into the language.

Therefore, the correct answer is `All of the Above`.

</details>

#### 53. Functions used to read or write a file in Text Mode:

1. fprintf(), fscanf()
2. fread(), fwrite()
3. fprintf(), fscanf()
4. read(), write()

<details>

<summary>Show me the answer</summary>

**Answer:** 1) fprintf(), fscanf()

**Explanation:**\
The functions `fprintf()` and `fscanf()` are used to read or write data in text mode.

For example:

```c
FILE *fp = fopen("file.txt", "w"); 
fprintf(fp, "Hello World"); // Write to file fclose(fp);
FILE *fp = fopen("file.txt", "r"); 
char str[100]; 
fscanf(fp, "%s", str); // Read from file fclose(fp);
```

Therefore, the correct answer is `fprintf(), fscanf()`.

</details>

#### 54. Correct syntax for opening a file:

1. FILE \*fopen(const char \*filename, const char \*mode);
2. FILE \*fopen(const char filename, const char mode);
3. FILE \*open(const \*filename, const char \*mode);
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) FILE \*fopen(const char \*filename, const char \*mode);

**Explanation:**\
The correct syntax for opening a file in C is:

```c
FILE *fopen(const char *filename, const char *mode);
```

For example:

```c
FILE *fp = fopen("file.txt", "r"); // Opens file.txt in read mode
```

Therefore, the correct answer is `FILE *fopen(const char *filename, const char *mode);`.

</details>

#### 55. What is the function of the mode ‘w+’?

1. Write and Open for both reading and writing
2. Open for both reading and writing
3. Open for writing
4. Open for both reading and appending in binary mode

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Open for both reading and writing

**Explanation:**\
The mode `w+` opens a file for both reading and writing. If the file exists, its contents are truncated. If the file does not exist, it is created.

Therefore, the correct answer is `Open for both reading and writing`.

</details>

#### 56. What is the function of the mode ‘a+’?

1. Write and Open for both reading and writing
2. Open for both reading and writing
3. Open for reading and appending
4. Open for both reading and appending in binary mode

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Open for reading and appending

**Explanation:**\
The mode `a+` opens a file for both reading and appending. If the file exists, new data is appended to the end of the file. If the file does not exist, it is created.

Therefore, the correct answer is `Open for reading and appending`.

</details>

#### 57. If the mode includes 'b' after the initial letter, what does it indicate?

1. Text file
2. Binary file
3. Big file
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Binary file

**Explanation:**\
The `b` in the mode (e.g., `rb`, `wb`, `ab`) indicates that the file is opened in **binary mode**. Binary mode is used for non-text files, such as images or executable files.

Therefore, the correct answer is `Binary file`.

</details>

#### 58. What does tmpfile() return when it could not create the file?

1. Stream
2. NULL
3. Both Stream and NULL
4. No result

<details>

<summary>Show me the answer</summary>

**Answer:** 2) NULL

**Explanation:**\
The `tmpfile()` function creates a temporary file and returns a pointer to the file stream. If the file cannot be created, it returns `NULL`.

Therefore, the correct answer is `NULL`.

</details>

#### 59. fwrite() can be used only with files that are opened in binary mode:

1. True
2. False
3. Depends on the Situation
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) True

**Explanation:**\
The `fwrite()` function is used to write data to a file in binary mode. It is typically used with files opened in binary mode (e.g., `wb`, `ab`).

Therefore, the correct answer is `True`.

</details>

#### 60. What are the functions that help to randomly access the file?

1. fseek()
2. ftell()
3. rewind()
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
The following functions are used for random access in files:

* **fseek()**: Moves the file pointer to a specific location.
* **ftell()**: Returns the current position of the file pointer.
* **rewind()**: Moves the file pointer to the beginning of the file.

Therefore, the correct answer is `All of the Above`.

</details>

#### 61. Data stored in a file can be accessed in:

1. Sequential and Random
2. Semi-Sequential and Random
3. Random only
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Sequential and Random

**Explanation:**\
Data in a file can be accessed in two ways:

* **Sequential access**: Data is read or written in a linear manner.
* **Random access**: Data can be accessed at any position using functions like `fseek()` and `ftell()`.

Therefore, the correct answer is `Sequential and Random`.

</details>

#### 62. The causes of function overloading are:

1. Type Conversion
2. Function with Default Arguments
3. Function with pass by reference
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
Function overloading in C++ can occur due to:

* **Type Conversion**: Different parameter types.
* **Default Arguments**: Functions with optional parameters.
* **Pass by Reference**: Functions with reference parameters.

Therefore, the correct answer is `All of the Above`.

</details>

#### 63. Which of the following is true?

1. Existing operators can only be overloaded, but new operators cannot be overloaded
2. The overloaded operator contains at least one operand of the user-defined data type
3. We cannot use a friend function to overload certain operators
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) The overloaded operator contains at least one operand of the user-defined data type

**Explanation:**\
Operator overloading in C++ requires at least one operand to be of a user-defined data type. For example:

```c
#include <iostream>
using namespace std;

class Complex {
    int real, imag; // Private data members to store real and imaginary parts

public:
    // Constructor to initialize real and imaginary parts
    Complex(int r = 0, int i = 0) : real(r), imag(i) {}

    // Overloading the + operator
    Complex operator+(Complex c) {
        Complex temp; // Temporary Complex object to store the result
        temp.real = real + c.real; // Add the real parts
        temp.imag = imag + c.imag; // Add the imaginary parts
        return temp; // Return the result
    }

    // Function to display the Complex number
    void display() const {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    Complex c1(3, 4), c2(1, 2); // Create two Complex objects
    Complex c3 = c1 + c2;       // Add two Complex objects using overloaded +
    
    cout << "Result: ";
    c3.display();               // Display the result

    return 0; // Indicate successful execution
}

```

Therefore, the correct answer is `The overloaded operator contains at least one operand of the user-defined data type`.

</details>

#### 64. Which of the following operators cannot be overloaded?

1. Scope operator (::) and Sizeof
2. Member selector(.) and member pointer selector(\*)
3. Ternary operator(?:)
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
The following operators cannot be overloaded in C++:

* Scope operator (`::`)
* Sizeof operator (`sizeof`)
* Member selector (`.`)
* Member pointer selector (`.*`)
* Ternary operator (`?:`)

Therefore, the correct answer is `All of the Above`.

</details>

#### 65. Which of the following can be overloaded?

1. Methods
2. Constructors
3. Indexed Properties
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
In C++, the following can be overloaded:

* **Methods**: Functions with the same name but different parameters.
* **Constructors**: Multiple constructors with different parameters.
* **Indexed Properties**: Overloaded subscript operator (`[]`).

Therefore, the correct answer is `All of the Above`.

</details>

#### 66. The function whose definition can be substituted at a place where its function call is made is:

1. Inline Function
2. Offline Function
3. Friend Function
4. Normal Function

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Inline Function

**Explanation:**\
An **inline function** is a function whose definition is substituted at the place where it is called. This avoids the overhead of a function call.

For example:

```c
#include <iostream>
using namespace std;

// Inline function to add two integers
inline int add(int a, int b) {
    return a + b; // Returns the sum of a and b
}

int main() {
    int result = add(5, 10); // The code of add() is substituted here
    cout << "Result: " << result << endl; // Output: Result: 15

    return 0; // Indicates successful execution
}

```

Therefore, the correct answer is `Inline Function`.

</details>

#### 67. How many ways are there to invoke a function in C++?

1. 1
2. 3
3. 2
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 3) 2

**Explanation:**\
In C++, a function can be invoked in two ways:

* **Call by Value**: Passes the value of the actual parameter.
* **Call by Reference**: Passes the address of the actual parameter.

Therefore, the correct answer is `2`.

</details>

#### 68. At what time does the inline function get expanded?

1. Compile time
2. Run time
3. At the end
4. Depends on the program

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Compile time

**Explanation:**\
An inline function is expanded at **compile time**. The compiler replaces the function call with the actual code of the function.

Therefore, the correct answer is `Compile time`.

</details>

#### 69. In a Function Prototype, where should default parameters appear?

1. Leftmost side
2. Rightmost side
3. In the middle
4. Anywhere

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Rightmost side

**Explanation:**\
Default parameters in a function prototype must appear on the **rightmost side**.

For example:

```c
#include <iostream>
using namespace std;

// Function declaration with default parameters for 'b' and 'c'
void print(int a, int b = 10, int c = 20);

int main() {
    print(5);           // Output: 5 10 20 (default values for 'b' and 'c')
    print(5, 15);       // Output: 5 15 20 (overrides 'b', default for 'c')
    print(5, 15, 25);   // Output: 5 15 25 (overrides all default values)

    return 0; // Indicates successful execution
}

// Function definition
void print(int a, int b, int c) {
    cout << a << " " << b << " " << c << endl;
}
```

Therefore, the correct answer is `Rightmost side`.

</details>

#### 70. Which one of the following is correct?

1. Only one parameter of a function can be a default parameter
2. A minimum of one parameter of a function must be a default parameter
3. All the parameters of a function can be default parameters
4. No parameter of a function can be default

<details>

<summary>Show me the answer</summary>

**Answer:** 3) All the parameters of a function can be default parameters

**Explanation:**\
In C++, all parameters of a function can have default values.

For example:

```c
#include <iostream>
using namespace std;

void print(int a = 1, int b = 2, int c = 3) {
    cout << a << " " << b << " " << c; // Prints the values of a, b, and c
}

int main() {
    print();          // Output: 1 2 3 (uses default values)
    print(10);        // Output: 10 2 3 (overrides only 'a', uses default for 'b' and 'c')
    print(10, 20);    // Output: 10 20 3 (overrides 'a' and 'b', uses default for 'c')
    print(10, 20, 30); // Output: 10 20 30 (overrides all default values)

    return 0; // Indicates successful execution
}

```

Therefore, the correct answer is `All the parameters of a function can be default parameters`.

</details>

#### 71. Execution of the program starts from:

1. Main
2. Void
3. User Defined
4. Loop

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Main

**Explanation:**\
In C++, the execution of a program always starts from the `main()` function.

For example:

```c
int main() { 
    cout << "Hello, World!"; 
    return 0; 
}
```

Therefore, the correct answer is `Main`.

</details>

#### 72. In the program, if user and default values are given, the program will take:

1. Default Value
2. User Value
3. NULL Value
4. Own Value

<details>

<summary>Show me the answer</summary>

**Answer:** 2) User Value

**Explanation:**\
If both user and default values are provided, the program will use the **user value**.

For example:

```c
#include <iostream>
using namespace std;

void print(int a = 10) {
    cout << a; // Prints the value of 'a'
}

int main() {
    print(20); // Output: 20 (user value overrides default value)
    return 0;  // Return 0 to indicate successful execution
}

```

Therefore, the correct answer is `User Value`.

</details>

#### 73. The default return type of a function is:

1. INT
2. FLOAT
3. CHAR
4. VOID

<details>

<summary>Show me the answer</summary>

**Answer:** 4) VOID

**Explanation:**\
If no return type is specified for a function, the default return type is `int` in C. However, in C++, the return type must always be explicitly specified. Therefore, the correct answer is `VOID`.

</details>

#### 74. Which of the following is correct?

1. An object is a runtime entity and created at runtime
2. An object is an entity that has state and behavior
3. An object is an instance of a class
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
An object in C++ is:

* A runtime entity created at runtime.
* An entity that has state (data members) and behavior (member functions).
* An instance of a class.

Therefore, the correct answer is `All of the Above`.

</details>

#### 75. Which of the following entities can be connected by the dot operator?

1. A class object and a member of that class
2. A class object and a class
3. A class member and a class object
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) A class object and a member of that class

**Explanation:**\
The dot operator (`.`) is used to access members of a class through an object.

For example:

```c
class Student { 
    public: int id; 
}; 
Student s1; 
s1.id = 101; // Dot operator connects object and member
```

Therefore, the correct answer is `A class object and a member of that class`.

</details>

#### 76. Which of the following is also known as an instance of a class?

1. Member Functions
2. Class
3. Object
4. Member Variables

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Object

**Explanation:**\
An **object** is an instance of a class. It represents a specific realization of the class, with its own state (data members) and behavior (member functions). For example: class Student { public: int id; }; Student s1; // s1 is an object (instance of the Student class)

Therefore, the correct answer is `Object`.

</details>

#### 77. How many objects can be created from an abstract class?

1. 0
2. 1
3. 2
4. 3

<details>

<summary>Show me the answer</summary>

**Answer:** 1) 0

**Explanation:**\
An **abstract class** in C++ cannot be instantiated directly. It is meant to be a base class for other classes. Therefore, no objects can be created from an abstract class.

Therefore, the correct answer is `0`.

</details>

#### 78. We can overload:

1. Operator
2. Function
3. Both A & B
4. Object

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Both A & B

**Explanation:**\
In C++, both **operators** and **functions** can be overloaded. For example:

* **Function overloading**: Multiple functions with the same name but different parameters.
* **Operator overloading**: Defining custom behavior for operators like `+`, `-`, etc.

Therefore, the correct answer is `Both A & B`.

</details>

#### 79. How many types of access specifiers are there?

1. 2
2. 3
3. 4
4. 5

<details>

<summary>Show me the answer</summary>

**Answer:** 2) 3

**Explanation:**\
In C++, there are **three access specifiers**:

* **Public**: Members are accessible from outside the class.
* **Private**: Members are accessible only within the class.
* **Protected**: Members are accessible within the class and derived classes.

Therefore, the correct answer is `3`.

</details>

#### 80. In a single class, which of the following can be used together?

1. Private Only
2. Public Only
3. Protected Only
4. All

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All

**Explanation:**\
In a single class, all three access specifiers (`private`, `public`, and `protected`) can be used together. For example: class Student { private: int id; public: string name; protected: float marks; };

Therefore, the correct answer is `All`.

</details>

#### 81. Which of the following can restrict class members from being inherited?

1. Private Only
2. Public Only
3. Protected Only
4. All

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Private Only

**Explanation:**\
**Private members** of a class cannot be inherited by derived classes. They are accessible only within the class itself.

Therefore, the correct answer is `Private Only`.

</details>

#### 82. Which access specifier is used for data members of a class?

1. Private
2. Default
3. Protected
4. Public

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Private

**Explanation:**\
Data members of a class are typically declared as **private** to enforce encapsulation and prevent direct access from outside the class.

Therefore, the correct answer is `Private`.

</details>

#### 83. Which access specifier should be used for member functions of a class?

1. Private
2. Default
3. Protected
4. Public

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Public

**Explanation:**\
Member functions that need to be accessed from outside the class should be declared as **public**. For example: class Student { public: void display() { cout << "Hello, World!"; } };

Therefore, the correct answer is `Public`.

</details>

#### 84. In which access specifier can all the parent class members be inherited and accessed from outside the class?

1. Private
2. Default
3. Protected
4. Public

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Public

**Explanation:**\
When a class is inherited using the **public** access specifier, all public members of the parent class remain public in the derived class and can be accessed from outside.

Therefore, the correct answer is `Public`.

</details>

#### 85. Which access specifier should be used in a class where the instances can’t be created?

1. Private default constructor
2. All private constructors
3. Public
4. Protected

<details>

<summary>Show me the answer</summary>

**Answer:** 2) All private constructors

**Explanation:**\
If all constructors of a class are declared as **private**, instances of the class cannot be created from outside the class. This is often used in singleton design patterns.

Therefore, the correct answer is `All private constructors`.

</details>

#### hich of the following is the scope resolution operator?

1. ::
2. :::
3. &
4. &&

<details>

<summary>Show me the answer</summary>

**Answer:** 1) ::

**Explanation:**

* The **scope resolution operator** in C++ is `::`.
* It is used to:
  * Access global variables when a local variable with the same name exists.
  * Define member functions outside the class.
  * Access static members of a class.
  * Access members of a namespace.
* Therefore, the correct answer is `::`.

</details>

#### 88. Which of the following is the address operator?

1. @
2. &
3. \#
4. %

<details>

<summary>Show me the answer</summary>

**Answer:** 2) &

**Explanation:**

* The **address operator** in C++ is `&`.
* It is used to:
  * Get the memory address of a variable.
  * Pass arguments by reference in functions.
*   For example:

    ```cpp
    int x = 10;
    int* ptr = &x; // ptr stores the address of x
    ```
* Therefore, the correct answer is `&`.

</details>

#### 89. To become a pure object-oriented programming language, which features must be supported?

1. Encapsulation
2. Inheritance
3. Polymorphism
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* A pure object-oriented programming language must support:
  * **Encapsulation**: Bundling data and methods that operate on the data.
  * **Inheritance**: Deriving a class from another class to reuse code.
  * **Polymorphism**: Allowing objects of different classes to be treated as objects of a common superclass.
* Therefore, the correct answer is `All of the Above`.

</details>

#### 90. The scope resolution operator is used to:

1. Overload a function in inheritance
2. Override a function in inheritance
3. Both of the Above
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Both of the Above

**Explanation:**

* The **scope resolution operator** (`::`) is used to:
  * **Overload a function**: Define a function outside the class.
  * **Override a function**: Access the base class version of an overridden function in derived classes.
* Therefore, the correct answer is `Both of the Above`.

</details>

#### 91. The scope resolution operator is used for:

1. To specify a particular class
2. Provides a conceptual framework
3. Addition
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) To specify a particular class

**Explanation:**

* The **scope resolution operator** (`::`) is primarily used to:
  * Specify a particular class or namespace when accessing its members.
  * Resolve ambiguity when multiple classes or namespaces have members with the same name.
* Therefore, the correct answer is `To specify a particular class`.

</details>

#### 92. Which class allows declaring only one object of it?

1. Abstract Class
2. Singleton class
3. Friend class
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Singleton class

**Explanation:**

* A **Singleton class** is designed to allow only one instance of itself to be created.
* This is achieved by:
  * Making the constructor private.
  * Providing a static method to access the single instance.
* Therefore, the correct answer is `Singleton class`.

</details>

#### 93. Which of the following is a member of a class?

1. Static function
2. Constant function
3. Virtual function
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the following are members of a class:
  * **Static function**: A function that belongs to the class rather than an instance.
  * **Constant function**: A function that does not modify the state of the object.
  * **Virtual function**: A function that can be overridden in derived classes.
* Therefore, the correct answer is `All of the Above`.

</details>

#### 94. The other name used for functions inside a class is:

1. Own Functions
2. Member Functions
3. Inside Functions
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Member Functions

**Explanation:**

* Functions defined inside a class are called **member functions**.
* They operate on the data members of the class and can be public, private, or protected.
* Therefore, the correct answer is `Member Functions`.

</details>

#### 95. Generally, how many types of member functions are there in C++?

1. 2
2. 3
3. 4
4. 5

<details>

<summary>Show me the answer</summary>

**Answer:** 3) 4

**Explanation:**

* The main types of member functions in C++ are:
  1. **Simple member functions**: Regular functions defined inside a class.
  2. **Static member functions**: Functions that belong to the class rather than an instance.
  3. **Const member functions**: Functions that do not modify the state of the object.
  4. **Virtual member functions**: Functions that can be overridden in derived classes.
* Therefore, the correct answer is `4`.

</details>

#### 96. In the main function, how can a static member function be called?

1. Using the Dot Operator
2. Using the Arrow Operator
3. Using the Dot or Arrow Operator
4. Using the Dot, Arrow, or using the 'scope resolution operator with class name'

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Using the Dot, Arrow, or using the 'scope resolution operator with class name'

**Explanation:**

* A **static member function** can be called in the following ways:
  * Using the **dot operator** (`.`) with an object.
  * Using the **arrow operator** (`->`) with a pointer to an object.
  * Using the **scope resolution operator** (`::`) with the class name (no object required).
*   For example:

    ```cpp
    class MyClass {
    public:
        static void myFunction() {
            cout << "Static function called!";
        }
    };

    int main() {
        MyClass::myFunction(); // Using scope resolution operator
        MyClass obj;
        obj.myFunction();      // Using dot operator
        MyClass* ptr = &obj;
        ptr->myFunction();     // Using arrow operator
        return 0;
    }
    ```
* Therefore, the correct answer is `Using the Dot, Arrow, or using the 'scope resolution operator with class name'`.

</details>

#### 97. Which of the following is correct?

1. If no constructor is explicitly declared, the compiler automatically creates a default constructor with no data members (variables) or initialization
2. A constructor is used in classes to initialize data members of the class to avoid errors/segmentation faults.
3. A copy constructor is a constructor to initialize an object with the values of another object
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the statements are correct:
  * If no constructor is explicitly declared, the compiler provides a **default constructor**.
  * A **constructor** is used to initialize data members of a class.
  * A **copy constructor** initializes an object using another object of the same class.
* Therefore, the correct answer is `All of the Above`.

</details>

#### 98. A constructor is used to:

1. Modify the data whenever required
2. Destroy an object
3. Initialize the data members of an object when it is created
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Initialize the data members of an object when it is created

**Explanation:**

* The primary purpose of a **constructor** is to initialize the data members of an object when it is created.
* It is automatically called when an object is instantiated.
* Therefore, the correct answer is `Initialize the data members of an object when it is created`.

</details>

#### 99. What will happen if we forget to define a constructor inside a class?

1. Error Occurs
2. Segmentation faults
3. The compiler provides a default constructor
4. Destructor called

<details>

<summary>Show me the answer</summary>

**Answer:** 3) The compiler provides a default constructor

**Explanation:**

* If no constructor is defined in a class, the **compiler automatically provides a default constructor**.
* This default constructor does not initialize data members but allows object creation.
* Therefore, the correct answer is `The compiler provides a default constructor`.

</details>

#### 100. How many types of constructors exist in C++?

1. 2
2. 3
3. 4
4. 5

<details>

<summary>Show me the answer</summary>

**Answer:** 2) 3

**Explanation:**

* The main types of constructors in C++ are:
  1. **Default Constructor**: No parameters.
  2. **Parameterized Constructor**: Takes parameters to initialize data members.
  3. **Copy Constructor**: Initializes an object using another object of the same class.
* Therefore, the correct answer is `3`.

</details>
