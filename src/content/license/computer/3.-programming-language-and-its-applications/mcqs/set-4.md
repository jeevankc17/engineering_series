# set-4

#### 150. Why does the diamond problem arise due to multiple inheritance?

1. Methods with the same name create ambiguity and conflict
2. Methods with the same name create ambiguity
3. The derived class gets overloaded with more than two class methods
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Methods with the same name create ambiguity and conflict

**Explanation:**

* The **diamond problem** arises in **multiple inheritance** when:
  * Two base classes have methods with the same name.
  * The derived class faces ambiguity in choosing which method to call.
* Therefore, the correct answer is `Methods with the same name create ambiguity and conflict`.

</details>

#### 151. We can overcome the diamond problem by:

1. Using Alias Name
2. Using the Virtual Keyword with the same name function
3. Both A & B
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Using the Virtual Keyword with the same name function

**Explanation:**

* The **diamond problem** can be overcome by using the **`virtual` keyword** when inheriting from the base classes.
* This ensures that only one instance of the common base class is created.
* Therefore, the correct answer is `Using the Virtual Keyword with the same name function`.

</details>

#### 152. Which members can’t be accessed in the derived class in multiple inheritance?

1. Private members of the base
2. Public members of the base
3. Protected members of the base
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Private members of the base

**Explanation:**

* In **multiple inheritance**, **private members** of the base class cannot be accessed in the derived class.
* Public and protected members can be accessed.
* Therefore, the correct answer is `Private members of the base`.

</details>

#### 153. To implement hierarchical inheritance, at least how many classes must be there?

1. 1
2. 2
3. 3
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 3) 3

**Explanation:**

* To implement **hierarchical inheritance**, there must be at least **three classes**: one base class and two derived classes.
* Therefore, the correct answer is `3`.

</details>

#### 154. Hierarchical inheritance can be a subset of:

1. Single
2. Multiple
3. Multi-level
4. Hybrid

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Hybrid

**Explanation:**

* **Hierarchical inheritance** can be a subset of **hybrid inheritance**, which combines multiple types of inheritance.
* Therefore, the correct answer is `Hybrid`.

</details>

#### 155. Hybrid Inheritance is the:

1. Combination of two or more inheritance types
2. Combination of the same type of inheritance
3. Inheritance of more than 5 classes
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Combination of two or more inheritance types

**Explanation:**

* **Hybrid inheritance** is a combination of **two or more types of inheritance** (e.g., single, multiple, multilevel, hierarchical).
* Therefore, the correct answer is `Combination of two or more inheritance types`.

</details>

#### 156. In hybrid inheritance, which is true?

1. Constructor calls are in reverse
2. Constructor calls are priority-based
3. The constructor of only the derived class is called
4. Constructor calls are usual

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Constructor calls are usual

**Explanation:**

* In **hybrid inheritance**, the **constructor calls** follow the usual order:
  * Base class constructors are called first.
  * Derived class constructors are called next.
* Therefore, the correct answer is `Constructor calls are usual`.

</details>

#### 157. Which of the following is correct?

1. Virtual functions must be members of some class, and the virtual function must be defined in the base class
2. Virtual functions cannot be static members.
3. Virtual Functions are accessed through object pointers.
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the statements are correct:
  * Virtual functions must be **members of a class** and are typically defined in the base class.
  * Virtual functions **cannot** be static members.
  * Virtual functions are accessed through **object pointers** to achieve runtime polymorphism.
* Therefore, the correct answer is `All of the Above`.

</details>

#### 158. Which of the following is true about pure virtual functions?

1. A class is abstract if it has at least one pure virtual function.
2. We can have pointers and references of abstract class type.
3. Abstract classes cannot be instantiated.
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the statements are correct:
  * A class with at least one **pure virtual function** is an **abstract class**.
  * We can have **pointers and references** of abstract class type.
  * Abstract classes **cannot** be instantiated.
* Therefore, the correct answer is `All of the Above`.

</details>

#### 159. Static Binding is also called as:

1. Early Binding
2. Compile-Time Binding
3. Late Binding
4. Both A & B

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Both A & B

**Explanation:**

* **Static binding** is also known as:
  * **Early binding**: The function call is resolved at compile time.
  * **Compile-time binding**: The function call is resolved during compilation.
* Therefore, the correct answer is `Both A & B`.

</details>

#### 160. Static Binding Happens:

1. At compile time
2. At run time
3. When all information needed to call a function is available at compile-time
4. Both A & C

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Both A & C

**Explanation:**

* **Static binding** occurs:
  * At **compile time**.
  * When all information needed to call a function is available at **compile-time**.
* Therefore, the correct answer is `Both A & C`.

</details>

#### 161. To implement late binding, which concept is used?

1. Static Functions
2. Virtual Functions
3. Non-Static Functions
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Virtual Functions

**Explanation:**

* **Late binding** is implemented using **virtual functions**.
* The function call is resolved at **runtime** based on the object type.
* Therefore, the correct answer is `Virtual Functions`.

</details>

#### 162. For achieving file handling, we need:

1. Naming and opening a file
2. Writing data and reading data into/from the file
3. Closing a file
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* To achieve **file handling**, we need to:
  * Name and open a file.
  * Write data to or read data from the file.
  * Close the file after operations are complete.
* Therefore, the correct answer is `All of the Above`.

</details>

#### 163. Default open modes in a file are:

1. Ifstream, ofstream, and fstream
2. IfStream, ofstream, and fstream
3. Ifstream and ofstream
4. Ofstream and fstream

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Ifstream, ofstream, and fstream

**Explanation:**

* The **default open modes** for file handling in C++ are:
  * `ifstream`: For input operations.
  * `ofstream`: For output operations.
  * `fstream`: For both input and output operations.
* Therefore, the correct answer is `Ifstream, ofstream, and fstream`.

</details>

#### 164. Which class is derived from the class ios?

1. Istream
2. Ostream
3. Streambuf
4. Fstreambase

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Ostream

**Explanation:**

* The **`ostream`** class is derived from the **`ios`** class.
* It is used for output operations.
* Therefore, the correct answer is `Ostream`.

</details>

#### 165. Which class declares input functions such as get(), getline(), and read()?

1. Ios
2. Istream
3. Ostream
4. Streambuf

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Istream

**Explanation:**

* The **`istream`** class declares input functions like:
  * `get()`: Reads a single character.
  * `getline()`: Reads a line of text.
  * `read()`: Reads a block of data.
* Therefore, the correct answer is `Istream`.

</details>

#### 166. Which class inherits the functions get(), getline(), read(), seekg(), and tellg()?

1. Ofstream
2. Fstreambase
3. Ifstream
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Ifstream

**Explanation:**

* The **`ifstream`** class inherits input functions like:
  * `get()`, `getline()`, `read()`: For reading data.
  * `seekg()`, `tellg()`: For file pointer manipulation.
* Therefore, the correct answer is `Ifstream`.

</details>

#### 167. How many types of output stream classes are there in C++?

1. 1
2. 2
3. 3
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 3) 3

**Explanation:**

* The **output stream classes** in C++ are:
  1. `ostream`: General output stream.
  2. `ofstream`: File output stream.
  3. `ostringstream`: String output stream.
* Therefore, the correct answer is `3`.

</details>

#### 168. Which of the following are built-in functions to handle file errors?

1. Int bad()
2. Int fail()
3. Int good()
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* The built-in functions to handle file errors are:
  * `bad()`: Checks for unrecoverable errors.
  * `fail()`: Checks for input/output failures.
  * `good()`: Checks if no errors have occurred.
* Therefore, the correct answer is `All of the Above`.

</details>

#### 169. Which of the following returns a non-zero (true) value when an input or output operation has failed?

1. Int bad()
2. Int fail()
3. Int good()
4. Int eof()

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Int fail()

**Explanation:**

* The **`fail()`** function returns a non-zero (true) value when an input or output operation has failed.
* Therefore, the correct answer is `Int fail()`.

</details>

#### 170. Which of the following returns a non-zero (true) value when no error has occurred?

1. Int bad()
2. Int fail()
3. Int good()
4. Int eof()

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Int good()

**Explanation:**

* The **`good()`** function returns a non-zero (true) value when no error has occurred.
* Therefore, the correct answer is `Int good()`.

</details>

#### 171. Which of the following returns a non-zero (true) value if an invalid operation is attempted or an unrecoverable error has occurred?

1. Int bad()
2. Int fail()
3. Int good()
4. Int eof()

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Int bad()

**Explanation:**

* The **`bad()`** function returns a non-zero (true) value if an invalid operation is attempted or an unrecoverable error has occurred.
* Therefore, the correct answer is `Int bad()`.

</details>

#### 172. Which of the following returns a non-zero (true) value when the end-of-file is encountered while reading?

1. Int bad()
2. Int fail()
3. Int good()
4. Int eof()

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Int eof()

**Explanation:**

* The **`eof()`** function returns a non-zero (true) value when the end-of-file is encountered while reading.
* Therefore, the correct answer is `Int eof()`.

</details>

#### 173. Which of the following is true?

1. All the built-in functions return either non-zero to indicate true or zero to indicate false.
2. eof() returns true if eofbit is set
3. The good() returns true if there are no errors
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the statements are correct:
  * Built-in functions return **non-zero (true)** or **zero (false)**.
  * `eof()` returns true if the **eofbit** is set.
  * `good()` returns true if there are **no errors**.
* Therefore, the correct answer is `All of the Above`.

</details>

#### 174. Which of the following is true about manipulators?

1. Used to make up the program structure
2. Are special stream functions that change certain formats and characteristics of the input and output
3. To carry out the operations of the manipulators, \<iomanip.h> must be included.
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the statements are correct:
  * Manipulators are used to **format input and output**.
  * They are special stream functions that change **formats and characteristics**.
  * The `<iomanip.h>` header must be included to use manipulators.
* Therefore, the correct answer is `All of the Above`.

</details>

#### 175. Which of the following are Integer Manipulators?

1. Hex, oct, dec
2. Fixed, scientific
3. Hex, Fixed, and Scientific
4. Dec, Fixed, and Scientific

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Hex, oct, dec

**Explanation:**

* The **integer manipulators** are:
  * `hex`: For hexadecimal output.
  * `oct`: For octal output.
  * `dec`: For decimal output.
* Therefore, the correct answer is `Hex, oct, dec`.

</details>

#### 176. Which of the following are float manipulators?

1. Hex, oct, dec
2. Fixed, scientific
3. Hex, Fixed, and Scientific
4. Dec, Fixed, and Scientific

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Fixed, scientific

**Explanation:**

* The **float manipulators** are:
  * `fixed`: For fixed-point notation.
  * `scientific`: For scientific notation.
* Therefore, the correct answer is `Fixed, scientific`.

</details>

#### 177. Which of the following is not a manipulator?

1. Base
2. Ends
3. Oct
4. Skipws

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Base

**Explanation:**

* The **manipulators** in C++ include:
  * `ends`: Adds a null character to the output.
  * `oct`: Sets the output to octal format.
  * `skipws`: Skips whitespace during input.
* `Base` is **not** a manipulator.
* Therefore, the correct answer is `Base`.

</details>

#### 178. Which of the following header files is used for manipulators?

1. Iomanipulator.h
2. Sidiomanip.h
3. iomanip.h
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) iomanip.h

**Explanation:**

* The **`<iomanip.h>`** header file is used for manipulators in C++.
* Therefore, the correct answer is `iomanip.h`.

</details>

#### 179. \_\_\_\_\_\_ functions allow supplying input or displaying output in the user's desired format.

1. Formatted I/O
2. Unformatted I/O
3. Scattered I/O
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Formatted I/O

**Explanation:**

* **Formatted I/O functions** allow input and output to be displayed in a specific format (e.g., using `printf` and `scanf`).
* Therefore, the correct answer is `Formatted I/O`.

</details>

#### 180. \_\_\_\_\_\_ functions are the most basic form of input and output, and they do not allow supplying input or displaying output in the user's desired format.

1. Formatted I/O
2. Unformatted I/O
3. Scattered I/O
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Unformatted I/O

**Explanation:**

* **Unformatted I/O functions** are the most basic and do not allow formatting (e.g., `getchar`, `putchar`).
* Therefore, the correct answer is `Unformatted I/O`.

</details>

#### 181. Printf() and scanf() are examples of \_\_\_\_\_\_.

1. Formatted I/O
2. Unformatted I/O
3. Scattered I/O
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Formatted I/O

**Explanation:**

* **`printf()`** and **`scanf()`** are examples of **formatted I/O functions** because they allow input and output in a specific format.
* Therefore, the correct answer is `Formatted I/O`.

</details>

#### 182. Getch(), getche(), getchar(), gets(), puts(), putchar(), etc. are examples of \_\_\_\_\_\_.

1. Formatted I/O
2. Unformatted I/O
3. Scattered I/O
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Unformatted I/O

**Explanation:**

* Functions like **`getch()`**, **`getchar()`**, **`puts()`**, and **`putchar()`** are examples of **unformatted I/O functions** because they do not allow formatting.
* Therefore, the correct answer is `Unformatted I/O`.

</details>

#### 183. \_\_\_\_\_\_ contain format specifiers in their syntax.

1. Formatted I/O
2. Unformatted I/O
3. Scattered I/O
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Formatted I/O

**Explanation:**

* **Formatted I/O functions** (e.g., `printf`, `scanf`) contain **format specifiers** in their syntax (e.g., `%d`, `%f`).
* Therefore, the correct answer is `Formatted I/O`.

</details>

#### 184. \_\_\_\_\_\_ do not contain format specifiers in their syntax.

```c
#include<stdio.h>
#include<conio.h>
void main() { 
    int x; 
    printf("Please enter value of x:"); 
    scanf("%d", &x); 
    printf("x = %d", x); 
    getch(); 
}
```

1. Formatted I/O
2. Unformatted I/O
3. Scattered I/O
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Unformatted I/O

**Explanation:**

* **Unformatted I/O functions** (e.g., `getchar`, `putchar`) do not use **format specifiers**.
* Therefore, the correct answer is `Unformatted I/O`.

</details>

#### 185. Consider an example and determine which Input/Output function this example belongs to:

```c
#include<stdio.h> 
#include<conio.h> 
void main() { 
    int x; 
    printf("Please enter value of x:"); 
    scanf("%d", &x); 
    printf("x = %d", x); 
    getch(); 
}
```

1. Formatted I/O
2. Unformatted I/O
3. Scattered I/O
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Formatted I/O

**Explanation:**

* The example uses **`printf()`** and **`scanf()`**, which are **formatted I/O functions** because they use format specifiers (`%d`).
* Therefore, the correct answer is `Formatted I/O`.

</details>

#### 186. The iomanip.h and iostream.h header files are used to perform the \_\_\_\_\_\_ operations in C++.

A. Formatted I/O\
B. Unformatted I/O\
C. Scattered I/O\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. Formatted I/O

**Explanation:**

* The **`iomanip.h`** and **`iostream.h`** header files are used for **formatted I/O operations** in C++.
* They provide functions and manipulators to format input and output (e.g., `setw`, `setprecision`).
* Therefore, the correct answer is `Formatted I/O`.

</details>

#### 187. In C++, \_\_\_\_\_\_ is one of the ways to perform the formatted I/O operations.

A. Using the member functions of the ios class.\
B. Using the special functions called manipulators defined in iomanip.h.\
C. Both A and B\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** C. Both A and B

**Explanation:**

* In C++, **formatted I/O operations** can be performed using:
  1. Member functions of the **`ios` class** (e.g., `width`, `precision`).
  2. Special functions called **manipulators** defined in `<iomanip.h>` (e.g., `setw`, `setprecision`).
* Therefore, the correct answer is `Both A and B`.

</details>

#### 188. Width(int), fill(char), precision(int) provides the details of the functions of the ios class used to perform \_\_\_\_\_\_ in C++.

A. Formatted I/O\
B. Unformatted I/O\
C. Scattered I/O\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. Formatted I/O

**Explanation:**

* Functions like **`width(int)`**, **`fill(char)`**, and **`precision(int)`** are part of the **`ios` class** and are used for **formatted I/O operations**.
* Therefore, the correct answer is `Formatted I/O`.

</details>

#### 189. The functions width(int), fill(char), precision(int) are called using the built-in object \_\_\_\_\_\_ in formatted I/O in OOP.

A. Cin()\
B. Cout()\
C. Printf()\
D. Scanf()

<details>

<summary>Show me the answer</summary>

**Answer:** B. Cout()

**Explanation:**

* The functions **`width(int)`**, **`fill(char)`**, and **`precision(int)`** are called using the built-in object **`cout`** in C++.
* Therefore, the correct answer is `Cout()`.

</details>

#### 190. A template can be represented in how many ways?

A. 2\
B. 3\
C. 4\
D. 5

<details>

<summary>Show me the answer</summary>

**Answer:** A. 2

**Explanation:**

* A **template** can be represented in **two ways**:
  1. **Function templates**: For generic functions.
  2. **Class templates**: For generic classes.
* Therefore, the correct answer is `2`.

</details>

#### 191. The ways in which the template can be represented are:

A. Function and Class Templates\
B. Function and Structure Templates\
C. Class and Structure Templates\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. Function and Class Templates

**Explanation:**

* Templates can be represented as:
  1. **Function templates**: For generic functions.
  2. **Class templates**: For generic classes.
* Therefore, the correct answer is `Function and Class Templates`.

</details>

#### 192. Which of the following is true?

A. A generic function is created by using the keyword template\
B. Generic functions use the concept of a function template\
C. The type of the data that the function will operate on depends on the type of the data passed as a parameter\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** D. All of the Above

**Explanation:**

* All the statements are correct:
  1. A **generic function** is created using the **`template`** keyword.
  2. Generic functions use the concept of a **function template**.
  3. The type of data the function operates on depends on the type of data passed as a parameter.
* Therefore, the correct answer is `All of the Above`.

</details>

#### 193. Which of the following is correct?

A. Template classes and functions eliminate the code duplication of different data types\
B. Multiple parameters can be used in both class and function templates.\
C. Template functions can also be overloaded.\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** D. All of the Above

**Explanation:**

* All the statements are correct:
  1. Template classes and functions eliminate **code duplication** for different data types.
  2. Multiple parameters can be used in **class and function templates**.
  3. Template functions can be **overloaded**.
* Therefore, the correct answer is `All of the Above`.

</details>

#### 194. We can restrict a function to throw certain exceptions by:

A. Defining the function with a throw clause\
B. Defining multiple try and catch blocks inside a function\
C. Both A & B\
D. Not possible in C++

<details>

<summary>Show me the answer</summary>

**Answer:** A. Defining the function with a throw clause

**Explanation:**

* A function can be restricted to throw certain exceptions by defining it with a **`throw` clause**.
* For example:

```c
void myFunction() 
throw(int, char) { 
// Function body 
}
```

* Therefore, the correct answer is `Defining the function with a throw clause`.

</details>

#### 195. What is the return type of an uncaught exception?

A. String\
B. Char\
C. Bool\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** D. None of the Above

**Explanation:**

* An **uncaught exception** does not have a return type. It causes the program to terminate abnormally.
* Therefore, the correct answer is `None of the Above`.

</details>

#### 196. STL stands for:

A. SQL Template Library\
B. Standard Template Library\
C. Standardized Template Library\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** B. Standard Template Library

**Explanation:**

* **STL** stands for **Standard Template Library**, which is a collection of template classes and functions in C++.
* Therefore, the correct answer is `Standard Template Library`.

</details>

#### 197. The Standard Template Library is:

A. A set of C++ template classes to provide common programming data structures and functions\
B. A set of Functions\
C. A set of programming data structures only\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. A set of C++ template classes to provide common programming data structures and functions

**Explanation:**

* The **Standard Template Library (STL)** is a set of **C++ template classes** that provide common data structures (e.g., vectors, lists) and functions (e.g., sorting, searching).
* Therefore, the correct answer is `A set of C++ template classes to provide common programming data structures and functions`.

</details>

#### 198. Which of the following provides a different interface for sequential containers?

A. Associative Container\
B. Container Adaptors\
C. Unordered Associative Containers\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** B. Container Adaptors

**Explanation:**

* **Container adaptors** (e.g., stack, queue) provide a different interface for sequential containers.
* Therefore, the correct answer is `Container Adaptors`.

</details>

#### 199. The number of components that STL has:

A. 2\
B. 3\
C. 4\
D. 5

<details>

<summary>Show me the answer</summary>

**Answer:** C. 4

**Explanation:**

* The **STL** has **four components**:
  1. Containers
  2. Algorithms
  3. Iterators
  4. Functors
* Therefore, the correct answer is `4`.

</details>

#### 200. What are containers?

A. That stores all the algorithms\
B. That contain overloaded functions\
C. That stores objects and data\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** C. That stores objects and data

**Explanation:**

* **Containers** in STL are used to **store objects and data** (e.g., vectors, lists, maps).
* Therefore, the correct answer is `That stores objects and data`.

</details>
