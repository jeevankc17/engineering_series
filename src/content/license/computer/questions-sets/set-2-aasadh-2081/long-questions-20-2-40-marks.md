# Long Questions (20\*2=40 Marks)

### 1. Which of the following expressions represents the logical AND operation followed by the logical OR operation in sequence?

1. $$T_{ij}(k) = T_{ij}(k-1) \, \text{OR} \, (T_{ij}(k-1) \, \text{AND} \, T_{ij}(k-1))$$
2. $$T_{ij}(k) = (T_{ij}(k-1) \, \text{AND} \, T_{ij}(k-1)) \, \text{OR} \, T_{ij}(k-1)$$
3. $$T_{ij}(k) = T_{ij}(k-1) \, \text{AND} \, (T_{ij}(k-1) \, \text{OR} \, T_{ij}(k-1))$$
4. $$T_{ij}(k) = (T_{ij}(k-1) \, \text{OR} \, T_{ij}(k-1)) \, \text{AND} \, T_{ij}(k-1)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1) $$T_{ij}(k) = T_{ij}(k-1) \, \text{OR} \, (T_{ij}(k-1) \, \text{AND} \, T_{ij}(k-1))$$

**Explanation:**\
This expression first applies the logical AND operation on $$T_{ij}(k-1)$$ and then applies the logical OR operation to combine the result with $$T_{ij}(k-1)$$.

</details>

### 2. Which of the following terms best describes a problem for which there exists an algorithm that always halts with a correct yes/no answer?

1. Turing Decidable
2. Recursive
3. Turing Undecidable
4. Recursive Enumerable

<details>

<summary>Show me the answer</summary>

**Answer:** A) Turing Decidable

**Explanation:**\
A Turing Decidable problem is one for which there exists an algorithm that will always halt with a correct yes/no answer.

</details>

***

### 3. What is the primary purpose of decomposing a reference architecture?

1. To increase the overall system's complexity
2. To simplify the design and implementation process by breaking it into manageable components
3. To eliminate the need for standardization
4. To reduce the number of components in the system

<details>

<summary>Show me the answer</summary>

**Answer:** B) To simplify the design and implementation process by breaking it into manageable components

**Explanation:**\
Decomposing a reference architecture simplifies the design and implementation process by dividing the system into manageable parts, making it easier to handle.

</details>

***

### 4. Which of the following correctly describes a one-to-many relationship?

1. One department can have multiple employees.
2. One student can enroll in multiple courses, and each course can have multiple students.
3. Each order can be linked to multiple customers.
4. Each customer can place multiple orders.

<details>

<summary>Show me the answer</summary>

**Answer:** A) One department can have multiple employees.

**Explanation:**\
A one-to-many relationship is where one entity, such as a department, can be associated with multiple instances of another entity, like employees.

</details>

***

### 5: Given the vector $$(2,0,3)$$ and the scaling vector $$(2,2,4)$$, what is the result of scaling the original vector by the scaling vector?

1. $$(4,0,12)$$
2. $$(4,2,7)$$
3. $$(2,0,7)$$
4. $$(1,0,3)$$

<details>

<summary>Show me the answer</summary>

**Answer:** A) $$(4,0,12)$$

**Explanation:**\
Scaling each component of the original vector by the corresponding component of the scaling vector results in $$(2 \times 2, 0 \times 2, 3 \times 4) = (4,0,12)$$.

</details>

### 6: In a genetic algorithm used to generate class routines, if the fitness function is defined as $$f(x) = \frac{1}{1 + \text{routine conflict}}$$, what does this fitness function measure?

1. The total number of classes in the schedule
2. The number of conflicts in the schedule
3. The total duration of the class schedule
4. The number of students enrolled in the classes

<details>

<summary>Show me the answer</summary>

**Answer:** B) The number of conflicts in the schedule

**Explanation:**\
The fitness function is designed to penalize routines with conflicts by incorporating them in the denominator. A higher number of conflicts leads to a lower fitness value. Thus, it measures the number of conflicts in the schedule, aiming to minimize them for an optimal solution.

</details>

### 7. In the demand paging memory, a page table is held in registers. If it takes 1000ms to service a page fault and if the memory access time is 20ms, what is the effective access time for a page fault rate of 0.01?

1. 30.8ms
2. 40ms
3. 22ms
4. 29.8ms

<details>

<summary>Show me the answer</summary>

**Answer:** 30.8ms

**Explanation:**\
The effective access time (EAT) can be calculated using the formula: $$EAT = \left( 1 - \text{page fault rate} \right) \times \text{memory access time} + \text{page fault rate} \times \left( \text{page fault service time} + \text{memory access time} \right)$$

***

Substituting the given values:\
$$EAT = (1 - 0.01) \times 20 \, \text{ms} + 0.01 \times (1000 \, \text{ms} + 20 \, \text{ms})$$\
$$EAT = 0.99 \times 20 \, \text{ms} + 0.01 \times 1020 \, \text{ms}$$\
$$EAT = 19.8 \, \text{ms} + 10.2 \, \text{ms} = 30.8 \, \text{ms}$$

***

Thus, the effective access time is 30.8ms.

</details>

### 8. Capacitance is directly proportional to \_\_\_\_\_\_\_\_\_

1. &#x20;Area of cross section between the plates
2. Distance of separation between the plates
3. Both area and distance
4. Neither area nor distance

<details>

<summary>Show me the answer</summary>

#### Answer:

1\. Area of cross section between the plates

#### Explanation:

The relation between capacitance, area, and distance between the plates is:\
$$( C = \epsilon \cdot \frac{A}{D} )$$.\
According to this relation, the capacitance is directly proportional to the area.

</details>

***

### 9. Convert the decimal number 156 to its octal representation.

1. 254
2. 20
3. 1234
4. 234

<details>

<summary>Show me the answer</summary>

#### Answer:

4\. 234

#### Explanation:

To convert the decimal number 156 to octal, you divide the number by 8 and keep track of the remainders:

* $$( 156 \div 8 = 19 )$$ with a remainder of 4
* $$( 19 \div 8 = 2 )$$ with a remainder of 3
* $$( 2 \div 8 = 0 )$$ with a remainder of 2

Reading the remainders from bottom to top, the octal representation of 156 is **234**.

</details>

### 10. Identify error in the program below;

```cpp
#include <iostream>
using namespace std;

void printArray(int arr[], int size) {
    for (int i = 0; i <= size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    int myArray[] = {1, 2, 3, 4, 5};
    int arraySize = sizeof(myArray) / sizeof(myArray[0]);
    printArray(myArray, arraySize);
    return 0;
}

```

1. Syntax Error
2. &#x20;Runtime Error
3. &#x20;Logical Error
4. Linker Error

<details>

<summary>Show me the answer</summary>

#### Answer:

2\. Runtime Error

#### Explanation:

A runtime error occurs while the program is running. These errors happen due to invalid operations, such as dividing by zero or accessing invalid memory, and can cause the program to crash or behave unexpectedly.

</details>

### 11. What will be the output in following C++ program.

```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 5;
    int *p = &a;
    *p = *p * 2;
    a = a + 3;

    cout << *p << endl;
    cout << a << endl;

    return 0;
}

```

1. &#x20;10 13
2. 8 8
3. 10 10
4. 8 10

<details>

<summary>Show me the answer</summary>

#### Answer:&#x20;

#### 1. 10 13

#### Explanation:

The given code performs the following steps:

1. `int a = 5;`
   * Variable `a` is initialized with the value `5`.
2. `int *p = &a;`
   * Pointer `p` is declared and assigned the address of `a`. So, `p` points to `a`.
3. `*p = *p * 2;`
   * `*p` dereferences the pointer to access the value of `a`.
   * The value of `a` is multiplied by `2` and assigned back to `a`.
   * Now, `a = 10`.
4. `a = a + 3;`
   * The value of `a` is incremented by `3`.
   * Now, `a = 13`. Since `*p` refers to the same memory location as `a`, the value pointed to by `p` is also `13`.
5. `cout << *p << endl;`
   * Prints the value pointed to by `p`, which is `13`.
6. `cout << a << endl;`
   * Prints the value of `a`, which is also `13`.

</details>

### 12. What is the output of the following production rule?

**Production Rules:**

* $$S \to AB \ | \ BA$$
* $$A \to aA \ | \ a$$
* $$B \to bB \ | \ b$$

1. abba
2. aabb
3. bbaa
4. baab

<details>

<summary>Show me the answer</summary>

#### Answer:

**2. aabb**

#### Explanation:

To derive the string ‘aabb’:

1. Start with $$S \to AB$$.
2. Expand $$A$$:\
   $$A \to aA \to aa$$.
3. Expand $$B$$:\
   $$B \to bB \to bb$$.

So, the derivation follows:\
$$S \to AB \to aa \ bb$$.

Final string: **aabb**.

</details>

### 13. Which category of transmission media includes twisted pair cables?

1. Guided Media
2. Coaxial Cables
3. Fiber Optic Cables
4. Unguided Media

<details>

<summary>Show me the answer</summary>

#### Answer:

**1. Guided Media**

#### Explanation:

Twisted pair cables fall under the category of **guided media**, which refers to transmission media where signals are guided along a physical path. Examples include twisted pair cables, coaxial cables, and fiber optic cables. In contrast, **unguided media** refers to wireless communication, such as radio waves or satellite signals.

</details>

### 14. Consider the following four processes in the shortest job next scheduling. Calculate the average turnaround time.

**Processes:**

| Process | Arrival Time | Burst Time |
| ------- | ------------ | ---------- |
| P1      | 0            | 8          |
| P2      | 1            | 4          |
| P3      | 2            | 2          |
| P4      | 3            | 6          |

1. 10
2. 11.5
3. 12
4. 13

<details>

<summary>Show me the answer</summary>

#### Answer:

**2. 11.5**

#### Explanation:

The shortest job next (SJN) scheduling prioritizes processes with the shortest burst time. The processes are executed in the following order:

1. **P1:** Runs first from time $$0$$ to $$8$$ (completion time = $$8$$).
2. **P3:** Next, the shortest job is $$P3$$, which runs from $$8$$ to $$10$$ (completion time = $$10$$).
3. **P2:** Then $$P2$$ runs from $$10$$ to $$14$$ (completion time = $$14$$).
4. **P4:** Finally, $$P4$$ runs from $$14$$ to $$20$$ (completion time = $$20$$).

**Calculating Turnaround Time:**\
$$\text{Turnaround Time} = \text{Completion Time} - \text{Arrival Time}$$

* **P1:** $$8 - 0 = 8$$
* **P2:** $$14 - 1 = 13$$
* **P3:** $$10 - 2 = 8$$
* **P4:** $$20 - 3 = 17$$

**Average Turnaround Time:**\
$$\text{Average Turnaround Time} = \frac{(8 + 13 + 8 + 17)}{4} = \frac{46}{4} = 11.5$$

</details>

### 15. What is the correct order of phases in the Waterfall model of software development?

1. Requirement Analysis → System Design → Implementation → Integration and Testing → Deployment → Maintenance
2. Requirement Analysis → Implementation → System Design → Integration and Testing → Deployment → Maintenance
3. Implementation → System Design → Requirement Analysis → Integration and Testing → Deployment → Maintenance
4. System Design → Requirement Analysis → Implementation → Integration and Testing → Maintenance → Deployment

<details>

<summary>Show me the answer</summary>

#### Answer:

**1) Requirement Analysis → System Design → Implementation → Integration and Testing → Deployment → Maintenance**

#### Explanation:

The Waterfall model is a linear and sequential approach to software development. Each phase must be completed before the next begins.

* **Requirement Analysis**: Collect and document user requirements.
* **System Design**: Create a blueprint of the system.
* **Implementation**: Translate the design into code.
* **Integration and Testing**: Verify that components work together and meet requirements.
* **Deployment**: Deliver the software to the user.
* **Maintenance**: Update and fix issues in the software after deployment.

</details>

***

### 16. Which of the following characteristics is true for an ideal operational amplifier?

1. The ideal op-amp has a finite open-loop gain, resulting in a non-zero voltage difference between the inverting and non-inverting inputs.
2. The ideal op-amp has infinite input impedance and zero output impedance.
3. The ideal op-amp can only be used in linear configurations and cannot be used in switching applications.
4. The ideal op-amp has a non-zero input bias current, which affects the accuracy of the amplifier.

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) The ideal op-amp has infinite input impedance and zero output impedance.**

#### Explanation:

An ideal operational amplifier has the following characteristics:

* Infinite input impedance to prevent current flow into the input terminals.
* Zero output impedance to allow maximum power transfer.
* Infinite open-loop gain, ensuring accurate amplification.

</details>

***

### 17. In supervised learning, what is the main objective during training?

1. To group similar data points
2. To predict outputs without labeled data
3. To learn the mapping from inputs to outputs using labeled data
4. To find hidden patterns without predefined labels

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) To learn the mapping from inputs to outputs using labeled data.**

#### Explanation:

Supervised learning involves training a model using a dataset with labeled examples. The objective is to learn a function that maps input data to the correct output. Once trained, the model can predict outputs for new, unseen inputs.

</details>

### 18. In a full binary tree, if the number of internal nodes is ( I ), then the number of leaves ( L ) is?

1. $$( L = 2 \cdot I )$$
2. $$( L = I + 1 )$$
3. $$( L = I - 1 )$$
4. $$( L = 2 \cdot I - 1 )$$

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) ( L = I + 1 )**

#### Explanation:

In a full binary tree:

* Every internal node has exactly two children.
* The total number of nodes ( N ) in the tree is related to the number of leaves ( L ) and internal nodes ( I ) as ( N = 2 \cdot I + 1 ).
* Since ( L = N - I ), substituting the total nodes gives ( L = I + 1 ).

</details>

***

### 19. A process refers to 5 pages (A, B, C, D, E) in the order: A, B, C, D, A, B, E, A, B, C, D, E. If the page replacement algorithm is FIFO, and the number of page frames is increased to 4, what happens to the number of page transfers?

1. Decreases
2. Increases
3. Remains the same
4. None of the mentioned

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) Increases**

#### Explanation:

In the FIFO (First-In-First-Out) page replacement algorithm:

* Pages are replaced in the order they were brought into memory.
* Increasing the number of page frames may sometimes lead to an increase in page faults due to the **Belady's Anomaly**.
* In this case, increasing the number of frames to 4 results in more page transfers as the anomaly occurs.

</details>

### 20. You plan to invest $1,000 in a savings account that offers an annual interest rate of 5%, compounded quarterly. You want to know the future value of this investment after 3 years.

1. $1130
2. $1227.5
3. $1500
4. $2000

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) $1227.5**

#### Explanation:

The formula for compound interest is:

$$FV = P \times \left(1 + \frac{r}{n}\right)^{n \cdot t}$$

Where:

* FV = Future Value
* P = Principal amount = 1000
* r = Annual interest rate = 0.05
* n = Number of compounding periods per year = 4 (quarterly)
* t = Time in years = 3

Substituting values:

$$FV = 1000 \times \left(1 + \frac{0.05}{4}\right)^{4 \cdot 3}$$

$$FV = 1000 \times \left(1 + 0.0125\right)^{12}$$

$$FV = 1000 \times \left(1.0125\right)^{12}$$

Using a calculator:

$$FV = 1000 \times 1.2275 = 1227.5$$

The future value of the investment after 3 years is $1227.5.

</details>
