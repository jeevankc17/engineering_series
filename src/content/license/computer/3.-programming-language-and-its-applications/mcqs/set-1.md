# set-1

#### 1. Which of the following statements is true?

1. We cannot create any program without using tokens in C
2. We can create a program without using tokens in C
3. Can use tokens to create a program if necessary
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) We cannot create any program without using tokens in C

**Explanation:**\
Tokens are the basic building blocks of a C program. They include:

* **Keywords**: Reserved words like `int`, `char`, `if`, etc.
* **Identifiers**: Names given to variables, functions, etc.
* **Operators**: Symbols like `+`, `-`, `*`, etc.
* **Constants**: Fixed values like `10`, `3.14`, etc.
* **Special symbols**: Symbols like `{}`, `[]`, `()`, etc.

Without tokens, it is impossible to write any valid C program. Therefore, the correct answer is that we cannot create any program without using tokens in C.

</details>

#### 2. Which of the following are the types of tokens?

1. Identifiers and Keywords
2. Operators and Strings
3. Special Characters and Constants
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
Tokens in C programming are categorized into several types:

* **Identifiers**: Names given to variables, functions, etc. (e.g., `int x;`).
* **Keywords**: Reserved words with special meanings (e.g., `int`, `char`, `if`).
* **Operators**: Symbols that perform operations (e.g., `+`, `-`, `*`).
* **Strings**: Text enclosed in quotes (e.g., `"Hello"`).
* **Special characters**: Symbols like `{}`, `[]`, `()`, etc.
* **Constants**: Fixed values like `10`, `3.14`, etc.

Therefore, all the options listed are types of tokens.

</details>

#### 3. Which of the following is not a keyword in C?

1. Double
2. Ripple
3. Default
4. Static

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Ripple

**Explanation:**\
Keywords in C are reserved words that have special meaning and cannot be used as variable names. Examples include:

* `Double`: A valid keyword used for double-precision floating-point numbers.
* `Default`: A valid keyword used in switch-case statements.
* `Static`: A valid keyword used to define static variables.

However, `Ripple` is not a keyword in C. Therefore, the correct answer is Ripple.

</details>

#### 4. We can classify the operator as:

1. Unary and Binary
2. Binary and Ternary
3. Unary and Ternary
4. Unary, Binary, and Ternary

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Unary, Binary, and Ternary

**Explanation:**\
Operators in C can be classified based on the number of operands they work with:

* **Unary operators**: Work on a single operand. Examples include:
  * Increment (`++`), Decrement (`--`).
  * Address-of (`&`), Dereference (`*`).
* **Binary operators**: Work on two operands. Examples include:
  * Arithmetic operators (`+`, `-`, `*`, `/`).
  * Relational operators (`==`, `!=`, `<`, `>`).
* **Ternary operators**: Work on three operands. The only ternary operator in C is the conditional operator (`? :`).

Therefore, the correct classification is Unary, Binary, and Ternary.

</details>

#### 5. What are the special characters in C?

1. () and \[]
2. (.) and {}
3. and #
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
Special characters in C are symbols that have specific meanings in the language. These include:

* Parentheses `()`: Used for function calls and expressions.
* Square brackets `[]`: Used for array indexing.
* Curly braces `{}`: Used to define blocks of code.
* Dot operator `.`: Used to access members of a structure.
* Asterisk `*`: Used for pointers and multiplication.
* Hash `#`: Used for preprocessor directives.

Therefore, all the options listed are special characters in C.

</details>

#### 6. Which of the following are examples of formatted input and output functions?

1. Print()
2. Scan()
3. Both A & B
4. Getch()

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Both A & B

**Explanation:**\
Formatted input and output functions in C allow users to specify the format of the data being read or written. Examples include:

* **Formatted output**: `printf()` is used to display data in a specified format.
* **Formatted input**: `scanf()` is used to read data in a specified format.

Therefore, both `Print()` and `Scan()` are examples of formatted input and output functions.

</details>

#### 7. Which of the following is false?

1. Unformatted I/O functions are used for storing data more compactly.
2. Formatted input and output functions contain format specifiers in their syntax.
3. getch(), getche(), getchar(), gets(), puts(), putchar() are examples of unformatted input/output functions.
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) None of the Above

**Explanation:**\
Let's analyze each statement:

* **Statement 1**: Unformatted I/O functions (e.g., `getch()`, `putchar()`) are used for compact data handling, as they do not use format specifiers. This statement is **true**.
* **Statement 2**: Formatted I/O functions (e.g., `printf()`, `scanf()`) use format specifiers like `%d`, `%f`, etc. This statement is **true**.
* **Statement 3**: Functions like `getch()`, `getche()`, `getchar()`, `gets()`, `puts()`, and `putchar()` are indeed unformatted I/O functions. This statement is **true**.

Since all statements are true, the correct answer is "None of the Above."

</details>

#### 8. Which of the following is not a looping structure?

1. While
2. If Else
3. Do-While
4. For

<details>

<summary>Show me the answer</summary>

**Answer:** 2) If Else

**Explanation:**\
Looping structures in C are used to repeat a block of code multiple times. Examples include:

* **While loop**: Repeats a block of code while a condition is true.
* **Do-While loop**: Similar to the `while` loop but guarantees at least one execution.
* **For loop**: Repeats a block of code for a fixed number of iterations.

However, `If Else` is a conditional statement, not a looping structure. It is used to execute a block of code based on a condition. Therefore, the correct answer is `If Else`.

</details>

#### 9. Which of the following is an unconditional control structure?

1. Goto
2. While
3. For
4. Do-while

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Goto

**Explanation:**\
Unconditional control structures in C allow the program to jump to a specific part of the code without any condition. Examples include:

* **Goto**: Transfers control to a labeled statement unconditionally.
* **While**, **For**, and **Do-While**: These are conditional looping structures that execute based on a condition.

Therefore, the correct answer is `Goto`.

</details>

#### 10. The main function of the continue statement is:

1. Starts from the beginning of the program
2. Does not break the loop but starts a new iteration
3. Exits the program
4. Breaks the loop and goes to the next statement after the loop

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Does not break the loop but starts a new iteration

**Explanation:**\
The `continue` statement is used in loops to skip the remaining code in the current iteration and move to the next iteration. For example:

```c
for (int i = 0; i < 5; i++) { 
    if (i == 2) continue; // Skip iteration when i == 2 printf("%d\n", i); } 
```

In this case, the loop skips the iteration where `i == 2` and continues with the next iteration. Therefore, the correct answer is that the `continue` statement does not break the loop but starts a new iteration.

</details>

#### 11. In the program, if we use a switch case:

1. The default case must be present
2. The default case need not be present
3. The default case, if used, should be the last case
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) The default case, if used, should be the last case

**Explanation:**\
The `switch` statement in C is used to execute one block of code from multiple options. Key points:

* The `default` case is optional and is executed when no other case matches.
* If the `default` case is used, it is conventionally placed at the end of the `switch` block, but it is not mandatory.

Therefore, the correct answer is that the `default` case, if used, should be the last case.

</details>

#### 12. How long does the for(x=0; x=5; x++) loop run?

1. 3 times
2. 5 times
3. 6 times
4. 2 times

<details>

<summary>Show me the answer</summary>

**Answer:** 3) 6 times

**Explanation:**\
The `for` loop syntax is:

* Initialization: `x = 0`
* Condition: `x = 5` (assignment, not comparison)
* Increment: `x++`

The condition `x = 5` assigns the value `5` to `x` and evaluates to `true` (non-zero). Since the condition is always `true`, the loop runs indefinitely. However, if we assume the condition is `x <= 5`, the loop runs 6 times (for `x = 0, 1, 2, 3, 4, 5`). Therefore, the correct answer is 6 times.

</details>

#### 13. Skip the rest of the loop and carry on from the top of the loop again?

1. Break
2. If-else
3. Continue
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Continue

**Explanation:**\
The `continue` statement is used to skip the remaining code in the current iteration of a loop and move to the next iteration.

For example:

<pre class="language-c"><code class="lang-c">for (int i = 0; i &#x3C; 5; i++) { 
<strong>    if (i == 2) 
</strong>    continue; // Skip iteration when i == 2 
    printf("%d\n", i); 
}
</code></pre>

In this case, the loop skips the iteration where `i == 2` and continues with the next iteration. Therefore, the correct answer is `Continue`.

</details>

#### 14. Which of the following is used to transfer control from a function back to the calling function?

1. Return
2. Back
3. Goto
4. Break

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Return

**Explanation:**\
The `return` statement is used to transfer control from a function back to the calling function. For example: int add(int a, int b) { return a + b; // Returns the sum of a and b to the calling function } In this case, the `return` statement sends the result back to the caller. Therefore, the correct answer is `Return`.

</details>

#### 15. Which of the following statements is true?

1. No value is passed to the function during the function call
2. Value is passed to the function during the function call
3. Function with argument is declared and defined with a parameter list
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Function with argument is declared and defined with a parameter list

**Explanation:**\
Functions in C can be declared and defined with or without arguments. Key points:

* A function with arguments is declared and defined with a parameter list (e.g., `int add(int a, int b)`).
* Values can be passed to a function during the function call (e.g., `add(5, 10)`).
* A function can also be defined without arguments (e.g., `void printHello()`).

Therefore, the correct answer is that a function with arguments is declared and defined with a parameter list.

</details>

#### 16. Which of the following data structures is used to implement recursive function calls?

1. Array
2. Stack
3. Linked List
4. Circular List

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Stack

**Explanation:**\
Recursive function calls in C are implemented using the **stack** data structure. Key points:

* Each recursive call pushes a new frame onto the stack, storing local variables and the return address.
* When the function returns, the frame is popped from the stack, and control is transferred back to the caller.

Therefore, the correct answer is `Stack`.

</details>

#### 17. The following error can arise if there is an absence of an exit condition in a recursive function:

1. Compile Time Error
2. Run Time Error
3. Depends on the program
4. Logical Error

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Run Time Error

**Explanation:**\
If a recursive function lacks an exit condition (base case), it will keep calling itself indefinitely, leading to a **stack overflow**. This results in a **run-time error**, as the program crashes due to excessive memory usage.

Therefore, the correct answer is `Run Time Error`.

</details>

#### 18. A loop is similar to which of the following?

1. Switch Case
2. Recursion
3. If-else
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Recursion

**Explanation:**\
A loop and recursion are both used to repeat a block of code. Key points:

* A loop repeats a block of code using iteration (e.g., `for`, `while`).
* Recursion repeats a block of code by calling the function itself.

Therefore, the correct answer is `Recursion`.

</details>

#### 19. Which of the following statements is true?

1. Recursion is always better than iteration
2. Iteration is always better than recursion
3. Recursion uses more memory
4. Iteration uses more memory

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Recursion uses more memory

**Explanation:**\
Recursion and iteration have their own advantages and disadvantages:

* **Recursion**: Uses more memory due to the overhead of maintaining the call stack.
* **Iteration**: Generally uses less memory and is more efficient for simple tasks.

Therefore, the correct answer is that recursion uses more memory.

</details>

#### 20. An array is:

1. A collection of similar types of elements
2. A collection of different types of elements
3. A collection of both types of elements
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) A collection of similar types of elements

**Explanation:**\
An array in C is a collection of elements of the **same data type**.

For example:

```c
int arr[5] = {1, 2, 3, 4, 5}; // Array of integers 
```

All elements in the array must be of the same type.

Therefore, the correct answer is that an array is a collection of similar types of elements.

</details>

#### 21. Initialization of an array is done through:

1. int publication\[3]={1,2,3};
2. int publication\[3]={1,2,3};
3. int publication\[3]={1,2,3};
4. int publication\[3]={1,2,3}

<details>

<summary>Show me the answer</summary>

**Answer:** 1) int publication\[3]={1,2,3};

**Explanation:**\
Arrays in C can be initialized at the time of declaration.

The correct syntax is:

```c
int publication[3] = {1, 2, 3}; // Correct initialization 
```

The size of the array is optional if the number of elements is specified (e.g., `int publication[] = {1, 2, 3};`).

Therefore, the correct answer is `int publication[3]={1,2,3};`.

</details>

#### 22. The index of the first element in an array is:

1. 0
2. 1
3. -1
4. 2

<details>

<summary>Show me the answer</summary>

**Answer:** 1) 0

**Explanation:**\
In C, arrays are zero-indexed, meaning the first element is at index `0`.

For example:

```c
int arr[3] = {10, 20, 30};
```

* `arr[0]` is `10`
* `arr[1]` is `20`
* `arr[2]` is `30`

Therefore, the correct answer is `0`.

</details>

#### 23. Elements in an array are accessed:

1. Sequentially
2. Randomly
3. Both
4. None

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Randomly

**Explanation:**\
Elements in an array can be accessed **randomly** using their index.

For example:

```c
int arr[3] = {10, 20, 30}; 
printf("%d", arr[1]); // Directly access the second element (20) 
```

This is known as random access, as elements can be accessed in any order.

Therefore, the correct answer is `Randomly`.

</details>

#### 24. Array elements are stored:

1. Randomly
2. Sequentially
3. Both
4. As Necessary

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Sequentially

**Explanation:**\
Elements in an array are stored in **contiguous memory locations**, meaning they are stored sequentially.

For example:

```c
int arr[3] = {10, 20, 30};
```

* `arr[0]` is stored at memory location `1000`
* `arr[1]` is stored at memory location `1004`
* `arr[2]` is stored at memory location `1008`

Therefore, the correct answer is `Sequentially`.

</details>

#### 25. If we pass an array as an argument to a function, what actually gets passed?

1. First element of the array
2. Value of elements in the array
3. Address of elements
4. Base address of the array

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Base address of the array

**Explanation:**\
When an array is passed as an argument to a function, the **base address** (address of the first element) of the array is passed.

For example:

```c
#include <stdio.h>

// Function to print elements of an array
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]); // Print each element of the array
    }
    printf("\n"); // Move to the next line after printing all elements
}

int main() {
    int arr[3] = {1, 2, 3};   // Initialize an array with 3 elements
    printArray(arr, 3);       // Base address of arr is passed to the function

    return 0; // Indicate successful execution
}

```

In this case, the base address of `arr` is passed to the function `printArray`.

Therefore, the correct answer is `Base address of the array`.

</details>

#### 26. In a two-dimensional array, the number of elements can be determined by:

1. Multiplying the number of rows and the number of rows
2. Multiplying the number of columns and the number of columns
3. Multiplying the number of rows and the number of columns
4. Adding the number of rows and the number of columns

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Multiplying the number of rows and the number of columns

**Explanation:**\
The total number of elements in a two-dimensional array is calculated by multiplying the number of rows by the number of columns.

For example:

```c
int arr[3][4]; // 3 rows and 4 columns 
```

Total elements = 3 \* 4 = 12.

Therefore, the correct answer is `Multiplying the number of rows and the number of columns`.

</details>

#### 27. The row and column subscripts start at:

1. 0
2. 1
3. -1
4. 2

<details>

<summary>Show me the answer</summary>

**Answer:** 1) 0

**Explanation:**\
In C, arrays are zero-indexed, meaning both row and column subscripts start at `0`. For example:

```c
int arr[2][3] = {{1, 2, 3}, {4, 5, 6}};
```

* `arr[0][0]` is `1`
* `arr[0][1]` is `2`
* `arr[1][2]` is `6`

Therefore, the correct answer is `0`.

</details>

#### 28. Two loops that are required to traverse a two-dimensional array are named:

1. Inner and Nested Loop
2. Outer and Nested Loop
3. Inner and Outer Loop
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Inner and Outer Loop

**Explanation:**\
To traverse a two-dimensional array, two loops are required:

* **Outer loop**: Iterates over the rows.
* **Inner loop**: Iterates over the columns.

For example:

```c
#include <stdio.h>

int main() {
    // Define a 2D array
    int arr[2][3] = {
        {1, 2, 3}, // Row 0
        {4, 5, 6}  // Row 1
    };

    // Outer loop iterates through the rows
    for (int i = 0; i < 2; i++) {
        // Inner loop iterates through the columns
        for (int j = 0; j < 3; j++) {
            printf("%d ", arr[i][j]); // Prints each element in the current row
        }
        printf("\n"); // Move to the next line after each row
    }

    return 0; // Indicate successful execution
}
```

**Output**:

```
1 2 3
4 5 6
```

Therefore, the correct answer is `Inner and Outer Loop`.

</details>

#### 29. Copying a string to another is done by which function?

1. Strcpy()
2. Strcmp()
3. Strcat()
4. Strcopy()

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Strcpy()

**Explanation:**\
The `strcpy()` function is used to copy one string to another.

For example:

```c
#include <stdio.h>
#include <string.h>

int main() {
    char src[] = "Hello";      // Source string
    char dest[10];             // Destination array with sufficient space

    strcpy(dest, src);         // Copies the content of 'src' to 'dest'
    printf("%s\n", dest);      // Output: Hello

    return 0; // Indicate successful execution
}
```

}

Therefore, the correct answer is `Strcpy()`.

</details>

#### 30. The gets() and puts() functions are defined in:

1. Conio.h
2. String.h
3. Stdio.h
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Stdio.h

**Explanation:**\
The `gets()` and `puts()` functions are part of the standard input/output library in C, which is included using `#include <stdio.h>`.

Therefore, the correct answer is `Stdio.h`.

</details>

#### 31. Which of the following is true in the case of pointer declaration?

1. Int p\*;
2. Int \*p;
3. Int _p_;
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Int \*p;

**Explanation:**\
The correct syntax for declaring a pointer in C is:

{% code overflow="wrap" %}
```c
int *p; // p is a pointer to an integer.
```
{% endcode %}

The `*` symbol is placed before the variable name to indicate that it is a pointer.

Therefore, the correct answer is `Int *p;`.

</details>

#### 32. A pointer variable can be:

1. Returned by a function
2. Passed to a function
3. Changed to a function
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Returned by a function

**Explanation:**\
A pointer variable can be returned by a function.

For example:

```c
int* createArray(int size) {
    int* arr = (int*)malloc(size * sizeof(int)); // Allocate memory for an array of integers
    return arr; // Returns a pointer to the allocated memory
}
```

**Key Points:**

Therefore, the correct answer is `Returned by a function`.

</details>

#### 33. Which of the following is true?

1. To pass large structures so that a complete copy of the structure can be avoided
2. Pointers enable complex data structures like linked lists and binary trees
3. Pointers allow different functions to share and modify their local variables
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
Pointers in C are powerful and versatile. They are used for:

* Avoiding the overhead of copying large structures.
* Implementing complex data structures like linked lists and binary trees.
* Allowing functions to share and modify local variables.

Therefore, the correct answer is `All of the Above`.

</details>

#### 34. A wild pointer is:

1. Which is wild in nature
2. Which has no value
3. Which is not initialized
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Which is not initialized

**Explanation:**\
A wild pointer is a pointer that has not been initialized to point to a valid memory location. For example:

```c
int *p; // Wild pointer (not initialized) 
```

Using a wild pointer can lead to undefined behavior.

Therefore, the correct answer is `Which is not initialized`.

</details>

#### 35. What is a pointer?

1. A keyword used to create variables
2. A variable that stores the address of an instruction
3. A variable that stores the address of another variable
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) A variable that stores the address of another variable

**Explanation:**\
A pointer is a variable that stores the memory address of another variable.

For example:

```c
int x = 10; 
int *p = &x; // p stores the address of x
```

Therefore, the correct answer is `A variable that stores the address of another variable`.

</details>

#### 36. The operator used to get the value at the address stored in a pointer variable is:

1. \*
2. \*\*
3. &
4. ->

<details>

<summary>Show me the answer</summary>

**Answer:** 1) \*

**Explanation:**\
The `*` operator is used to dereference a pointer, meaning it retrieves the value stored at the memory address pointed to by the pointer.

For example:

```c
#include <stdio.h>

int main() {
    int x = 10;          // Declare an integer variable x and initialize it with 10
    int *p = &x;         // p stores the address of x (pointer to x)

    printf("%d\n", *p);  // Output: 10 (value at the address stored in p)

    return 0;            // Indicate successful execution
}

```

Therefore, the correct answer is `*`.

</details>

#### 37. A void pointer points to:

1. Int
2. Float
3. Double
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
A void pointer (`void*`) is a generic pointer that can point to any data type.

For example:

```c
#include <stdio.h>

int main() {
    int x = 10;          // Declare an integer variable
    float y = 3.14;      // Declare a float variable
    void *p;             // Declare a void pointer (can point to any data type)

    p = &x;              // p points to the address of x
    printf("Value of x: %d\n", *(int *)p); // Output: 10 (cast void pointer to int pointer)

    p = &y;              // p now points to the address of y
    printf("Value of y: %.2f\n", *(float *)p); // Output: 3.14 (cast void pointer to float pointer)

    return 0; // Indicate successful execution
}

```

Therefore, the correct answer is `All of the Above`.

</details>

#### 38. Which of the following are types of pointers?

1. Null, Void, and Wild
2. Near, Far, and Huge
3. Complex and Dangling
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
Pointers in C can be categorized into various types, including:

* **Null pointer**: Points to nothing (`NULL`).
* **Void pointer**: Generic pointer that can point to any data type.
* **Wild pointer**: Uninitialized pointer.
* **Near, Far, and Huge pointers**: Used in segmented memory architectures.
* **Complex and Dangling pointers**: Pointers that point to invalid memory locations.

Therefore, the correct answer is `All of the Above`.

</details>

#### 39. Which of the following are a few operations that are allowed to perform on pointers in C?

1. Increment/Decrement and Addition of Integer
2. Subtracting two pointers and comparison of pointers
3. Both A and B
4. Count of Integer

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Both A and B

**Explanation:**\
The following operations are allowed on pointers in C:

* **Increment/Decrement**: Moves the pointer to the next/previous memory location.
* **Addition of Integer**: Adds an integer to the pointer to move it forward.
* **Subtracting two pointers**: Calculates the distance between two pointers.
* **Comparison of pointers**: Compares two pointers to check their relative positions.

Therefore, the correct answer is `Both A and B`.

</details>

#### 40. User-defined data types can be derived by:

1. Struct
2. Enum
3. Typedef
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
User-defined data types in C can be created using:

* **Struct**: Defines a structure with multiple members.
* **Enum**: Defines a set of named integer constants.
* **Typedef**: Creates an alias for an existing data type.

Therefore, the correct answer is `All of the Above`.

</details>

#### 41. Which of the following can be a structure member?

1. Function
2. Array
3. Another Structure
4. Both B & C

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Both B & C

**Explanation:**\
A structure in C can have members of various types, including:

* **Arrays**: A structure can contain arrays.
* **Another Structure**: A structure can contain another structure as a member.

However, a structure cannot directly contain a function as a member. Functions can be accessed through function pointers.

Therefore, the correct answer is `Both B & C`.

</details>

#### 42. The size of a union is determined by the size of the:

1. Biggest member in the union
2. First member in the union
3. Last member in the union
4. Sum of the sizes of all members

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Biggest member in the union

**Explanation:**\
A union in C allocates memory equal to the size of its largest member.

For example:

```c
union Data { 
    int x; 
    char y; 
    double z; 
}; 
```

The size of the union `Data` is equal to the size of `double` (the largest member).

Therefore, the correct answer is `Biggest member in the union`.

</details>

#### 43. To create a structure, which keyword is used?

1. Structure
2. Structs
3. Struct
4. Str

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Struct

**Explanation:**\
The `struct` keyword is used to define a structure in C.

For example:

```c
struct Student { 
    int id; 
    char name[50]; 
};
```

Therefore, the correct answer is `Struct`.

</details>

#### 44. We can use a structure if the number of variables is:

1. Fixed
2. Not Fixed
3. Both
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Not Fixed

**Explanation:**\
Structures in C are used when the number of variables is **not fixed**. They allow grouping of different data types under a single name.

For example:

```c
struct Student { 
    int id; 
    char name[50]; 
    float marks; 
};
```

Therefore, the correct answer is `Not Fixed`.

</details>

#### 45. Which of the following is correct?

1. A collection of variables of different data types in the same memory location
2. Allows data members which are mutually exclusive to share the same memory
3. Can define with many members, only one member can contain a value at a given point in time
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
A union in C is a special data type that allows storing different data types in the same memory location. Key points:

* Only one member can contain a value at a given time.
* The size of the union is equal to the size of its largest member.
* Members share the same memory location.

Therefore, the correct answer is `All of the Above`.

</details>

#### 46. In the case of a union, which is correct?

1. Shared by individual members
2. Several members can be initialized at once
3. Each member is assigned a unique storage area of location
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Shared by individual members

**Explanation:**\
A union in C allows its members to share the same memory location. Only one member can hold a value at a given time.

For example:

```c
#include <stdio.h>

union Data {
    int x;   // Integer member
    char y;  // Character member
};

int main() {
    union Data d;        // Declare a union variable

    d.x = 10;            // Assign value to the integer member
    printf("Value of d.x: %d\n", d.x); // Output: 10

    d.y = 'A';           // Assign value to the character member (overwrites d.x)
    printf("Value of d.y: %c\n", d.y); // Output: A
    printf("Value of d.x: %d\n", d.x); // Output: Undefined (x is overwritten)

    return 0; // Indicate successful execution
}

```

Therefore, the correct answer is `Shared by individual members`.

</details>

#### 47. Which of the following is true about call by value?

1. The value of the actual parameters is copied into the formal parameters
2. Cannot modify the value of the actual parameter by the formal parameter
3. Can modify the value of the actual parameter by the formal parameter
4. Both A & B

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Both A & B

**Explanation:**\
In **call by value**, the value of the actual parameter is copied into the formal parameter. Key points:

* Changes made to the formal parameter do not affect the actual parameter.
* The actual parameter remains unchanged.

For example:

```c
#include <stdio.h>

void modify(int x) {
    x = x + 10;  // Modifies the value of x (local to the function)
    // Changes here do not affect the original variable
}

int main() {
    int a = 5;            // Declare and initialize an integer variable
    modify(a);            // Pass 'a' by value to the function
    printf("Value of a: %d\n", a); // Output: 5 (unchanged)

    return 0; // Indicate successful execution
}

```

Therefore, the correct answer is `Both A & B`.

</details>

#### 48. Which of the following is true about call by reference?

1. The value of the actual parameters is copied into the formal parameters
2. Cannot modify the value of the actual parameter by the formal parameter
3. The address of the variable is passed into the function call as the actual parameter
4. Both A & B

<details>

<summary>Show me the answer</summary>

**Answer:** 3) The address of the variable is passed into the function call as the actual parameter

**Explanation:**\
In **call by reference**, the address of the actual parameter is passed to the function. Key points:

* Changes made to the formal parameter affect the actual parameter.
* The actual parameter is modified.

For example:

```c
#include <stdio.h>

void modify(int *x) {
    *x = *x + 10; // Dereferences the pointer and modifies the actual value
}

int main() {
    int a = 5;           // Declare and initialize an integer variable
    modify(&a);          // Pass the address of 'a' to the function
    printf("Value of a: %d\n", a); // Output: 15 (modified)

    return 0; // Indicate successful execution
}

```

Therefore, the correct answer is `The address of the variable is passed into the function call as the actual parameter`.

</details>

#### 49. Which of the following is used for invoking a function?

1. Call by Reference
2. Call by Value
3. Call by Functions
4. Both A and B

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Both A and B

**Explanation:**\
Functions in C can be invoked using:

* **Call by Value**: Passes the value of the actual parameter.
* **Call by Reference**: Passes the address of the actual parameter.

Therefore, the correct answer is `Both A and B`.

</details>

#### 50. Which of the following are two ways to access the members of a structure with the help of a structure pointer?

1. (\*) asterisk or indirection operator and (.) dot operator
2. (-) asterisk or indirection operator and (.) dot operator
3. (+) asterisk or indirection operator and (.) dot operator
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) (\*) asterisk or indirection operator and (.) dot operator

**Explanation:**\
To access the members of a structure using a structure pointer, the following operators are used:

* **Indirection operator (\*)**: Dereferences the pointer.
* **Dot operator (.)**: Accesses the member of the structure.

For example:

```c
#include <stdio.h>
#include <string.h>

// Define the Student structure
struct Student {
    int id;           // Student ID
    char name[50];    // Student Name
};

int main() {
    struct Student s1;           // Declare a structure variable
    struct Student *ptr = &s1;   // Declare a pointer to the structure and assign the address of s1

    // Assign values using the pointer and different notations
    (*ptr).id = 101;             // Using dereferencing (*) and dot (.) operator
    strcpy((*ptr).name, "John"); // Assign name using dereferencing

    // Assign values using the arrow (->) operator
    ptr->id = 102;               // Arrow operator directly accesses members
    strcpy(ptr->name, "Doe");    // Update name using the arrow operator

    // Print the values
    printf("ID: %d\n", s1.id);         // Output: 102
    printf("Name: %s\n", s1.name);     // Output: Doe

    return 0; // Indicate successful execution
}

```

Therefore, the correct answer is `(*) asterisk or indirection operator and (.) dot operator`.

</details>
