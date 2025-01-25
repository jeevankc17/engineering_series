# Short Questions (60\*1=60 Marks)

### 1. What is it called when multiple threads are in execution?

1. Multiprocessing
2. Multithreading
3. Parallel processing
4. Concurrent execution

<details>

<summary>Show me the answer</summary>

**Answer:**\
**2) Multithreading**

**Explanation:**\
Multithreading is the process of executing multiple threads concurrently in a program. It is a form of parallelism that allows for more efficient use of resources and better performance.

</details>

### 2. Which two main processes does Natural Language Processing (NLP) contain?

1. Natural Language Understanding (NLU) and Natural Language Generation (NLG)
2. Natural Language Interpretation (NLI) and Natural Language Synthesis (NLS)
3. Natural Language Analysis (NLA) and Natural Language Production (NLP)
4. Natural Language Recognition (NLR) and Natural Language Output (NLO)

<details>

<summary>Show me the answer</summary>

**Answer:**\
**1) Natural Language Understanding (NLU) and Natural Language Generation (NLG)**

**Explanation:**\
NLP mainly involves two key processes: Natural Language Understanding (NLU) for interpreting the meaning of text and Natural Language Generation (NLG) for producing meaningful text.

</details>

### 3. What is a key limitation of Finite State Machines (FSM)?

1. Cannot handle parallel processes
2. Cannot handle recursive functions
3. Cannot handle context-dependent behavior
4. Cannot handle non-deterministic input

<details>

<summary>Show me the answer</summary>

**Answer:**\
**3) Cannot handle context-dependent behavior**

**Explanation:**\
FSMs are limited in that they cannot handle context-dependent behavior, which means they cannot remember the past state beyond the current state in many cases.

</details>

### 4. How many parallel TCP connections does FTP use?

1. 1
2. 2
3. 3
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:**\
**2) 2** (one for control and one for data)

**Explanation:**\
FTP uses two TCP connections: one for control (commands) and the other for transferring data.

</details>

### 5. What is the formula for no-load voltage gain of a BJT in fixed bias configuration?

1. -β(Rc/re)
2. β(Rc/re)
3. -(Rc/re)
4. (β/Rc)\*re

<details>

<summary>Show me the answer</summary>

**Answer:**\
**1) -β(Rc/re)**

**Explanation:**\
The no-load voltage gain of a BJT in a fixed bias configuration is given by the formula:\
$$A_v = -\beta \left( \frac{R_c}{r_e} \right)$$\
Where β is the current gain, Rc is the collector resistance, and re is the emitter resistance.

</details>

### 6. What is the formula for 3D rotation around the z-axis?

1.

$$
\begin{bmatrix}
\cos(\theta) & -\sin(\theta) & 0 \\
\sin(\theta) & \cos(\theta) & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

2.

$$
\begin{bmatrix}
\cos(\theta) & 0 & \sin(\theta) \\
0 & 1 & 0 \\
-\sin(\theta) & 0 & \cos(\theta)
\end{bmatrix}
$$

3.

$$
\begin{bmatrix}
1 & 0 & 0 \\
0 & \cos(\theta) & -\sin(\theta) \\
0 & \sin(\theta) & \cos(\theta)
\end{bmatrix}
$$

4.

$$
\begin{bmatrix}
\cos(\theta) & \sin(\theta) & 0 \\
-\sin(\theta) & \cos(\theta) & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

<details>

<summary>Show me the answer</summary>

**Answer:**\
**1)**

**Explanation:**\
The correct formula for 3D rotation around the z-axis is:

$$\begin{bmatrix}   \cos(\theta) & -\sin(\theta) & 0 \\   \sin(\theta) & \cos(\theta) & 0 \\   0 & 0 & 1   \end{bmatrix}$$

This matrix rotates a point counterclockwise by an angle $$(\theta)$$ around the z-axis.

</details>

### 7. In a multiprocessor environment, how is synchronization typically achieved?

1. Using semaphores or mutexes
2. Using shared memory
3. Using cache coherence protocols
4. Using message passing

<details>

<summary>Show me the answer</summary>

**Answer:**\
**1) Using semaphores or mutexes**

**Explanation:**\
In a multiprocessor environment, synchronization is typically achieved using semaphores or mutexes. These tools help manage access to shared resources by ensuring that only one process or thread can access a critical section of code at a time, preventing race conditions.

</details>

### 8. What is the transformation matrix for oblique parallel projection?

1.

$$
\begin{bmatrix}
1 & 0 & 0 & 0 \\
m_x & 1 & 0 & 0 \\
m_y & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

2.

$$
\begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & m_x & 0 \\
0 & m_y & 0 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

3.

$$
\begin{bmatrix}
1 & 0 & m_x & 0 \\
0 & 1 & m_y & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

4.

$$
\begin{bmatrix}
1 & m_x & m_y & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

<details>

<summary>Show me the answer</summary>

**Answer:**\
**1)**

$$\begin{bmatrix} 1 & 0 & 0 & 0 \\ m_x & 1 & 0 & 0 \\ m_y & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

**Explanation:**\
The transformation matrix for oblique parallel projection is typically represented as shown in option 1. In this case, ( m\_x ) and ( m\_y ) represent the shear factors along the x and y axes, respectively. These shear factors cause the projection to be oblique (not perpendicular) to the projection plane.

</details>

### 9. If three 2-ohm resistors are connected in a triangle, what is the resistance measured between any two terminals?

1. 0.67 ohms
2. 1 ohm
3. 1.33 ohms
4. 2 ohms

<details>

<summary>Show me the answer</summary>

**Answer:** 1.33 ohms

**Explanation:**\
When three resistors are connected in a triangle (delta configuration), the equivalent resistance between any two terminals is calculated using the formula:

$$R_{\text{eq}} = \frac{R}{2} \quad \text{where } R \text{ is the resistance of each resistor.}$$

Substituting $$( R = 2 , \text{ohms} )$$gives $$( R_{\text{eq}} = \frac{2}{3} , \text{ohms} )$$, which simplifies to approximately **1.33 ohms**.

</details>

***

### 10. What is the time complexity of the quicksort algorithm in the average case?

1. O(n)
2. O(n²)
3. O(n log n)
4. O(log n)

<details>

<summary>Show me the answer</summary>

**Answer:** O(n log n)

**Explanation:**\
In the average case, quicksort's time complexity is $$( O(n \log n) )$$ due to the divide-and-conquer approach where the problem is recursively divided into smaller subproblems, and the partitioning operation takes linear time.

</details>

***

### 11. What is the purpose of virtual memory in operating systems?

1. To provide an illusion of larger main memory than physically available
2. To enhance the speed of the CPU
3. To increase the security of the system
4. To manage peripheral devices

<details>

<summary>Show me the answer</summary>

**Answer:** 1) To provide an illusion of larger main memory than physically available

**Explanation:**\
Virtual memory allows an operating system to use hard disk space to simulate extra memory, enabling larger programs to run than would be possible with only physical memory.

</details>

***

### 12. How many main types of parsing are there?

1. One: Top-down parsing
2. One: Bottom-up parsing
3. Two: Top-down parsing and Bottom-up parsing
4. Three: Top-down parsing, Bottom-up parsing, and Middle-out parsing

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Two: Top-down parsing and Bottom-up parsing

**Explanation:**\
The two main types of parsing are top-down parsing (building the parse tree from the root) and bottom-up parsing (building it from the leaves).

</details>

***

### 13. What is the difference between compiler and interpreter?

1. A compiler translates the entire program at once, while an interpreter translates line by line
2. A compiler translates line by line, while an interpreter translates the entire program at once
3. Both translate the entire program at once
4. Both translate line by line

<details>

<summary>Show me the answer</summary>

**Answer:** 1) A compiler translates the entire program at once, while an interpreter translates line by line

**Explanation:**\
A compiler translates the entire program into machine code before execution, while an interpreter translates and executes the program line by line.

</details>

***

### 14. How does capacitive reactance change with increasing frequency?

1. Capacitive reactance increases
2. Capacitive reactance decreases
3. Capacitive reactance remains constant
4. Capacitive reactance becomes zero

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Capacitive reactance decreases with increasing frequency

**Explanation:**\
The capacitive reactance $$( X_C )$$ is inversely proportional to the frequency ( f ), as given by:

$$X_C = \frac{1}{2 \pi f C}$$

Thus, as frequency increases, capacitive reactance decreases.

</details>

***

### 15. How many transistors are typically used in a Class A amplifier?

1. One transistor
2. Two transistors
3. Three transistors
4. Four transistors

<details>

<summary>Show me the answer</summary>

**Answer:** 1) One transistor

**Explanation:**\
A Class A amplifier typically uses a single transistor for signal amplification.

</details>

***

### 16. What does `Ti <A, v1, v2>` typically represent in database systems?

1. A table
2. A transaction
3. An attribute
4. A view

<details>

<summary>Show me the answer</summary>

**Answer:** 2) A transaction

**Explanation:**\
In database systems, the notation ( Ti \<A, v1, v2> ) represents a **transaction** where ( A ) is an attribute, and ( v1 ) and ( v2 ) are the old and new values of the attribute.

</details>

***

### 17. If the annual worth is 9000, what is the capitalized worth at 10%?

1. 10,000
2. 45,000
3. 90,000
4. 100,000

<details>

<summary>Show me the answer</summary>

**Answer:** 3) 90,000

**Explanation:**\
To calculate the capitalized worth, use the formula:

$$\text{Capitalized Worth} = \frac{\text{Annual Worth}}{i}$$

where ( i ) is the interest rate (10% = 0.10). Substituting the values:

$$\text{Capitalized Worth} = \frac{9000}{0.10} = 90,000$$

</details>

***

### 18. What are the types of perspective projections?

1. Parallel projection, Orthographic projection, Isometric projection
2. One-point perspective, Two-point perspective, Three-point perspective
3. Linear perspective, Aerial perspective, Forced perspective
4. Vanishing point, Horizon line, Ground line

<details>

<summary>Show me the answer</summary>

**Answer:** 2) One-point perspective, Two-point perspective, Three-point perspective

**Explanation:**\
Perspective projections are classified into one-point, two-point, and three-point perspectives, based on the number of vanishing points used in the representation.

</details>

***

### 19. In a semaphore problem, what do P and V operations represent?

1. P represents the signal operation (increment), and V represents the wait operation (decrement)
2. P represents the wait operation (decrement), and V represents the signal operation (increment)
3. Both represent the wait operation
4. Both represent the signal operation

<details>

<summary>Show me the answer</summary>

**Answer:** 2) P represents the wait operation (decrement), and V represents the signal operation (increment)

**Explanation:**\
In semaphore operations, ( P ) is used for the **wait** operation (decrement), and ( V ) is used for the **signal** operation (increment).

</details>

***

### 20. Who typically verifies and documents changes in a software project?

1. Project Manager
2. Software Quality Assurance (SQA) team
3. Development Team
4. End Users

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Software Quality Assurance (SQA) team

**Explanation:**\
The Software Quality Assurance (SQA) team is responsible for verifying and documenting changes in a software project to ensure quality standards are maintained.

</details>

### 21. The Waterfall model is the oldest approach for what?

1. System engineering
2. Software testing
3. Software engineering
4. Project management

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Software engineering

**Explanation:**\
The Waterfall model is the oldest approach to software engineering, where the development process is linear and sequential.

</details>

### 22. What does "fan-in" refer to in digital logic?

1. The number of outputs a logic gate can handle
2. The power consumption of a logic gate
3. The speed of a logic gate
4. The number of inputs a logic gate can handle

<details>

<summary>Show me the answer</summary>

**Answer:** 4) The number of inputs a logic gate can handle

**Explanation:**\
"Fan-in" refers to the number of inputs that a logic gate can accommodate. It is an important concept in digital logic design.

</details>

### 23. What is admissibility in the context of the A\* algorithm?

1. The heuristic overestimates the cost to the goal
2. The heuristic never underestimates the cost to the goal
3. The heuristic never overestimates the cost to the goal
4. The heuristic is always accurate

<details>

<summary>Show me the answer</summary>

**Answer:** 3) The heuristic never overestimates the cost to the goal

**Explanation:**\
In the A\* algorithm, a heuristic is admissible if it never overestimates the actual cost to reach the goal, ensuring the algorithm is optimal.

</details>

### 24. Who is considered the "Father of AI"?

1. Alan Turing
2. John McCarthy
3. Marvin Minsky
4. Herbert Simon

<details>

<summary>Show me the answer</summary>

**Answer:** 2) John McCarthy

**Explanation:**\
John McCarthy is credited as the "Father of AI" for his foundational contributions to the field, including coining the term "Artificial Intelligence."

</details>

### 25. What type of connector is typically used in Shielded Twisted Pair (STP) cable?

1. BNC connector
2. RJ11 connector
3. RJ45 connector
4. SC connector

<details>

<summary>Show me the answer</summary>

**Answer:** 3) RJ45 connector

**Explanation:**\
The RJ45 connector is commonly used in Shielded Twisted Pair (STP) cables, typically for Ethernet networking.

</details>

### 26. What is the purpose of the volatile keyword in C?

1. To optimize the variable for faster access
2. To indicate that a variable may change unexpectedly
3. To allocate memory dynamically
4. To protect the variable from modification

<details>

<summary>Show me the answer</summary>

**Answer:** 2) To indicate that a variable may change unexpectedly

**Explanation:**\
The volatile keyword in C tells the compiler not to optimize a variable because its value may change unexpectedly, such as due to hardware interrupts or other processes.

</details>

### 27. What is the difference between process and thread?

1. A process is an independent program, while a thread is a subset of a process
2. A thread is an independent program, while a process is a subset of a thread
3. A process runs within a thread, while a thread runs independently
4. A thread has its own memory space, while a process shares memory space

<details>

<summary>Show me the answer</summary>

**Answer:** 1) A process is an independent program, while a thread is a subset of a process

**Explanation:**\
A process is a complete and independent program with its own memory space, while a thread is a smaller unit of execution within a process, sharing the process's memory space.

</details>

### 28. What is the output of a given C++ program?

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << (char)93; // 93 is the ASCII value of ']'
    return 0;
}
```

1. 0
2. 1
3. ]
4. \[

<details>

<summary>Show me the answer</summary>

**Answer:** 3) ]

**Explanation:**

* **Digits (48–57)**: **0–9**
* **Uppercase Letters (65–90)**: **A–Z**
* **Lowercase Letters (97–122)**: **a–z**
* **Space (32)**: Blank space
* **Square Brackets (91–93)**: `[` and `]`

</details>

### 29. What type of oscillator is a Wien bridge oscillator?

1. High-frequency oscillator
2. Low-frequency oscillator
3. Medium-frequency oscillator
4. Voltage-controlled oscillator

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Low-frequency oscillator

**Explanation:**\
The Wien bridge oscillator is used for generating low-frequency signals and is commonly used in audio applications.

</details>

### 30. Which of the following is not a decoder: 4:2, 8:3, 16:4, or 5:32?

1. 4:2
2. 8:3
3. 16:4
4. 5:32

<details>

<summary>Show me the answer</summary>

**Answer:** 4) 5:32 is not a standard decoder configuration

**Explanation:**\
Decoders are typically designed with configurations where the number of input bits is less than the number of output bits. "5:32" is not a standard decoder configuration.

</details>

### 31. Which of these cannot be used as a variable name in C: true or while?

1. true
2. while

<details>

<summary>Show me the answer</summary>

**Answer:** 2) while (it's a reserved keyword in C)

**Explanation:**\
"while" is a reserved keyword in C used for looping, so it cannot be used as a variable name.

</details>

### 32. After which step is software typically ready in the spiral model?

1. Usually after the 1st iteration
2. Usually after the 2nd iteration
3. Usually after the 3rd iteration
4. Usually after the 4th or 5th iteration

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Usually after the 4th or 5th iteration

**Explanation:**\
In the Spiral Model, software is typically ready after multiple iterations, often after the 4th or 5th iteration, as the model emphasizes refinement.

</details>

### 33. Priority interruptions make use of which mechanisms?

1. Interrupt masking and polling
2. Polling and daisy chain
3. Interrupt masking and daisy chain
4. Daisy chain and polling

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Daisy chain and polling

**Explanation:**\
Priority interruptions use mechanisms like daisy chain (for priority assignment) and polling (to check for active interrupts).

</details>

### 34. To which pin does the CPU send a signal as a response to the Programmable Interrupt Controller (PIC)?

1. INTA (Interrupt Acknowledge)
2. IRQ (Interrupt Request)
3. NMI (Non-Maskable Interrupt)
4. INTR (Interrupt Request)

<details>

<summary>Show me the answer</summary>

**Answer:** 1) INTA (Interrupt Acknowledge)

**Explanation:**\
The CPU sends an INTA signal (Interrupt Acknowledge) in response to a signal from the PIC, acknowledging that the interrupt has been received.

</details>

### 35. What are the three main elements of a use case?

1. Actor, System, and Goal
2. Actor, System, and Process
3. System, Goal, and Action
4. Actor, Goal, and Process

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Actor, System, and Goal

**Explanation:**\
A use case typically consists of an actor (who interacts with the system), the system itself, and the goal that the actor seeks to achieve.

</details>

### 36. What is the primary function of a Device Driver?

1. To provide an interface between the operating system and hardware devices
2. To manage system memory
3. To execute user programs
4. To handle network communication

<details>

<summary>Show me the answer</summary>

**Answer:** 1) To provide an interface between the operating system and hardware devices

**Explanation:**\
A device driver acts as a translator, allowing the operating system to communicate with hardware devices.

</details>

### 37. What are some unique features of RISC (Reduced Instruction Set Computer) architecture?

1. Complex instructions, fewer registers, and complex addressing modes
2. Simple instructions, fewer registers, and complex addressing modes
3. Simple instructions, more registers, and load-store architecture
4. Complex instructions, more registers, and load-store architecture

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Simple instructions, more registers, and load-store architecture

**Explanation:**\
RISC architecture uses simple instructions, more registers for better performance, and a load-store architecture where memory operations are separate from other instructions.

</details>

### 38. What happens when an exception occurs in C++?

1. The program terminates immediately
2. The function in which the exception occurs is ignored
3. A function (exception handler) is called
4. The program continues to execute without handling the exception

<details>

<summary>Show me the answer</summary>

**Answer:** 3) A function (exception handler) is called

**Explanation:**\
In C++, when an exception occurs, an exception handler (catch block) is invoked to handle the exception and prevent program termination.

</details>

### 39. How can a weak entity set be changed into a strong entity set?

1. By introducing a foreign key
2. By introducing a primary key
3. By removing all its attributes
4. By merging it with another weak entity set

<details>

<summary>Show me the answer</summary>

**Answer:** 2) By introducing a primary key

**Explanation:**\
A weak entity set becomes a strong entity set by introducing a primary key, which enables it to be uniquely identified.

</details>

### 40. Which architecture does FTP use?

1. Peer-to-peer architecture
2. Client-server architecture
3. Distributed architecture
4. Multi-tier architecture

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Client-server architecture

**Explanation:**\
FTP (File Transfer Protocol) uses the client-server architecture, where the client requests files and the server provides them.

</details>

### 41. Which is considered the most important step in a Genetic Algorithm?

1. Mutation
2. Crossover
3. Selection
4. Initialization

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Selection

**Explanation:**\
In a Genetic Algorithm, selection is the most important step because it determines which individuals from the population will be selected for reproduction based on their fitness.

</details>

### 42. Which type of cryptography uses two keys?

1. Symmetric cryptography
2. Asymmetric cryptography
3. Hash-based cryptography
4. Elliptic curve cryptography

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Asymmetric cryptography

**Explanation:**\
Asymmetric cryptography uses two keys: a public key and a private key for encryption and decryption, making it more secure.

</details>

### 43. What is used for overloading in programming?

1. Only type
2. Only arguments
3. Both type and arguments
4. Neither type nor arguments

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Both type and arguments

**Explanation:**\
Overloading occurs when two or more functions share the same name but differ in either the type or number of arguments.

</details>

### 44. Which of these is a valid definition of a pointer in C?

1. p = \*a
2. p = \&a
3. \*p = a
4. \&p = a

<details>

<summary>Show me the answer</summary>

**Answer:** 2) p = \&a

**Explanation:**\
A pointer in C is defined by using the address-of operator `&`, which gives the memory address of a variable.

</details>

### 45. A tautology is a statement which is always what?

1. False
2. True
3. Uncertain
4. Contradictory

<details>

<summary>Show me the answer</summary>

**Answer:** 2) True

**Explanation:**\
A tautology is a logical statement that is always true, no matter the values of its components.

</details>

### 46. Excess-3 code is also known as?

1. Self-correcting code
2. Self-completing code
3. Self-adjusting code
4. Self-encrypting code

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Self-completing code

**Explanation:**\
Excess-3 code is also known as self-completing because it allows for easy detection and correction of errors in the code.

</details>

### 47. What is the purpose of normalization in database design?

1. To increase data redundancy
2. To reduce data integrity
3. To reduce data redundancy and improve data integrity
4. To increase database size

<details>

<summary>Show me the answer</summary>

**Answer:** 3) To reduce data redundancy and improve data integrity

**Explanation:**\
Normalization in database design is used to eliminate redundancy and ensure that data is stored in the most efficient way, thereby improving data integrity.

</details>

### 48. What is the difference between Stack and Queue data structures?

1. Stack is FIFO, Queue is LIFO
2. Stack is LIFO, Queue is FIFO
3. Both are FIFO
4. Both are LIFO

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Stack follows Last-In-First-Out (LIFO), while Queue follows First-In-First-Out (FIFO)

**Explanation:**\
A stack operates on a Last-In-First-Out (LIFO) principle, while a queue operates on a First-In-First-Out (FIFO) principle.

</details>

### 49. What is the purpose of a virtual function in C++?

1. To achieve compile-time polymorphism
2. To achieve runtime polymorphism
3. To improve memory efficiency
4. To prevent function overloading

<details>

<summary>Show me the answer</summary>

**Answer:** 2) To achieve runtime polymorphism

**Explanation:**\
A virtual function in C++ is used to achieve runtime polymorphism, allowing derived class methods to be called even when using base class pointers.

</details>

### 50. What is the main advantage of using optical fiber for communication?

1. Low cost
2. Easy installation
3. High bandwidth and low signal loss
4. Compatibility with older systems

<details>

<summary>Show me the answer</summary>

**Answer:** 3) High bandwidth and low signal loss

**Explanation:**\
The main advantage of optical fiber is its high bandwidth and low signal loss over long distances, making it ideal for high-speed communication.

</details>

### 51. What is the purpose of the OSI model in networking?

1. To increase network speed
2. To standardize the communication functions of a telecommunication system
3. To reduce hardware costs
4. To encrypt network traffic

<details>

<summary>Show me the answer</summary>

**Answer:** 2) To standardize the communication functions of a telecommunication system

**Explanation:**\
The OSI model provides a framework for standardizing the functions of network communication into seven layers, promoting interoperability and understanding of networking concepts.

</details>

### 52. What is the difference between static and dynamic binding in programming?

1. Static binding is slower, dynamic binding is faster
2. Static binding uses more memory, dynamic binding uses less
3. Static binding occurs at compile-time, while dynamic binding occurs at run-time
4. Static binding is for object-oriented languages, dynamic binding is for procedural languages

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Static binding occurs at compile-time, while dynamic binding occurs at run-time

**Explanation:**\
Static binding (early binding) occurs when the method or function to be called is determined at compile time, while dynamic binding (late binding) is resolved at run-time based on the object type.

</details>

### 53. What is the purpose of a cache in computer architecture?

1. To increase the main memory size
2. To reduce the average time to access data from the main memory
3. To store permanent data
4. To improve CPU clock speed

<details>

<summary>Show me the answer</summary>

**Answer:** 2) To reduce the average time to access data from the main memory

**Explanation:**\
Caches store frequently accessed data to speed up retrieval times by reducing the need to access slower main memory.

</details>

### 54. What is the difference between cohesion and coupling in software engineering?

1. Cohesion is about modules, coupling is about data
2. Cohesion is internal, coupling is external
3. Cohesion measures relationships within a module, coupling measures interdependence between modules
4. Cohesion is for design, coupling is for implementation

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Cohesion measures the strength of relationships within a module, while coupling measures the interdependence between modules

**Explanation:**\
Cohesion refers to how closely related and focused the responsibilities of a module are, while coupling refers to how dependent one module is on another.

</details>

### 55. What is the purpose of the volatile keyword in Java?

1. To make a variable constant
2. To indicate that a variable's value can be changed by multiple threads simultaneously
3. To improve variable access speed
4. To prevent variable initialization

<details>

<summary>Show me the answer</summary>

**Answer:** 2) To indicate that a variable's value can be changed by multiple threads simultaneously

**Explanation:**\
The `volatile` keyword in Java is used to ensure that updates to a variable are visible to all threads and to prevent caching of the variable by threads.

</details>

### 56. What is the difference between TCP and UDP protocols?

1. TCP is faster, UDP is more reliable
2. TCP uses IP, UDP doesn't
3. TCP is connection-oriented and reliable, UDP is connectionless and unreliable but faster
4. TCP is for web browsing, UDP is for email

<details>

<summary>Show me the answer</summary>

**Answer:** 3) TCP is connection-oriented and reliable, while UDP is connectionless and unreliable but faster

**Explanation:**\
TCP provides reliable, connection-oriented communication, while UDP is faster but unreliable and does not guarantee delivery of packets.

</details>

### 57. What is the purpose of a Fourier transform in signal processing?

1. To amplify signals
2. To filter noise
3. To convert a signal from the time domain to the frequency domain
4. To compress data

<details>

<summary>Show me the answer</summary>

**Answer:** 3) To convert a signal from the time domain to the frequency domain

**Explanation:**\
The Fourier transform is used in signal processing to convert a time-domain signal into its frequency-domain representation, aiding in analysis and filtering.

</details>

### 58. What is the difference between deep copy and shallow copy in object-oriented programming?

1. Deep copy is faster, shallow copy is slower
2. Deep copy uses less memory, shallow copy uses more
3. Deep copy creates a new object and recursively copies nested objects, shallow copy copies references
4. Deep copy is for primitive types, shallow copy is for objects

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Deep copy creates a new object and recursively copies nested objects, while shallow copy creates a new object but copies references to nested objects

**Explanation:**\
A deep copy creates an independent copy of the object, including all objects nested inside it. A shallow copy only copies the references to the objects, not the objects themselves.

</details>

### 59. What is the purpose of a load balancer in network architecture?

1. To increase network security
2. To distribute incoming network traffic across multiple servers
3. To compress network data
4. To cache frequently accessed data

<details>

<summary>Show me the answer</summary>

**Answer:** 2) To distribute incoming network traffic across multiple servers to ensure no single server becomes overwhelmed

**Explanation:**\
A load balancer ensures even distribution of network traffic across multiple servers to prevent server overload and improve availability and reliability.

</details>

### 60. What is the difference between supervised and unsupervised learning in machine learning?

1. Supervised learning is automatic, unsupervised learning requires human intervention
2. Supervised learning uses labeled data, unsupervised learning uses unlabeled data
3. Supervised learning is for classification, unsupervised learning is for regression
4. Supervised learning is slower, unsupervised learning is faster

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Supervised learning uses labeled data for training, while unsupervised learning uses unlabeled data

**Explanation:**\
Supervised learning involves training a model using labeled data, while unsupervised learning involves finding hidden patterns in data without labels.

</details>
