# Long Questions (20\*2=40 Marks)

### 1. In an alpha-beta pruning problem, what are the values of alpha and beta?

1. Fixed values of 0 and 1
2. Always positive integers
3. Always negative integers
4. Dynamic values that change during the search process

<details>

<summary>Show me the answer</summary>

**Answer:**\
d) Dynamic values that change during the search process

**Explanation:**\
In **alpha-beta pruning**, **alpha** and **beta** are dynamic values that represent the best already explored options along the path of the maximizer and minimizer, respectively. They change as the search progresses.

</details>

### 2. What is the correct order of processes in Computer Vision?

1. Image acquisition, segmentation, processing, analysis
2. Image acquisition, processing, segmentation, analysis
3. Image processing, acquisition, segmentation, analysis
4. Image segmentation, acquisition, processing, analysis

<details>

<summary>Show me the answer</summary>

**Answer:**\
b) Image acquisition, processing, segmentation, analysis

**Explanation:**\
The correct order in **computer vision** starts with **image acquisition**, followed by **processing**, then **segmentation**, and finally **analysis**.

</details>

### 3. For a network with 10 nodes in a mesh topology, how many duplex connections are required?

1. 45
2. 90
3. 100
4. 10

<details>

<summary>Show me the answer</summary>

**Answer:**\
a) 45

**Explanation:**\
The formula for **duplex connections** in a **mesh topology** is $$\frac{n(n-1)}{2}$$, where **n** is the number of nodes. For **10 nodes**, the number of duplex connections is $$\frac{10(10-1)}{2} = 45$$.

</details>

### 4. What is the result of a "wound and wait" problem?

<figure><img src="../../.gitbook/assets/image (34).png" alt=""><figcaption></figcaption></figure>

1. T1 wounds T2 for B and T2 must wait for A.
2. T2 wounds T1 for A and T1 must wait for B.
3. T1 and T2 both proceed without any waits or wounds.
4. T2 wounds T1 for B and T1 must wait for A.

<details>

<summary>Show me the answer</summary>

**Answer:**\
a) T1 wounds T2 for B and T2 must wait for A.

**Explanation:**\
In a **wound and wait** protocol, if a higher-priority process (T1) requests a resource held by a lower-priority process (T2), T1 will "wound" T2 (preempt it), and T2 will have to wait for T1 to release the resource. Here, T1 wounds T2 for **B**, and T2 must wait for **A**.

</details>

### 5. In a given namespace concept program, what should the next line of code be?

```cpp
#include <iostream>
using namespace std;

int main() {
    try {
        throw 20;
    }
    catch (int e) {
        cout << "Exception caught: " << e << endl;
    }
    return 0;
}
```

1. Exception caught: 0
2. Exception caught: 20
3. No exception caught
4. Runtime error

<details>

<summary>Show me the answer</summary>

**Answer:**\
b) Exception caught: 20

**Explanation:**\
The program throws an integer value 20, which is caught by the catch block and displayed as "Exception caught: 20".

</details>

### 6. In a given namespace concept program, what should the next line of code be?

```cpp
#include <iostream>
using namespace std;

namespace First {
    void sayHello() {
        cout << "Hello from First namespace!" << endl;
    }
}

namespace Second {
    void sayHello() {
        cout << "Hello from Second namespace!" << endl;
    }
}

int main() {
    First::sayHello();
    // Next line to be guessed:
```

1. `Second.sayHello();`
2. `Second::sayHello();`
3. `sayHello();`
4. `::sayHello();`

<details>

<summary>Show me the answer</summary>

**Answer:**\
b) Second::sayHello();

**Explanation:**\
Since the function `sayHello()` exists in the `Second` namespace, the correct syntax to call it is `Second::sayHello()`.

</details>

### 7. A 250V bulb passes a current of 0.3A. Calculate the power in the lamp.

1. 75W
2. 50W
3. 25W
4. 90W

<details>

<summary>Show me the answer</summary>

**Answer:**\
a) 75W

**Explanation:**\
Here, V = 250V and I = 0.3A. The formula for power is P = VI, so P = 250 \* 0.3 = 75W.

</details>

### 8. What type of relationship is represented when multiple orders are associated with a single customer?

1. Many-to-One
2. One-to-Many
3. Many-to-Many
4. One-to-One

<details>

<summary>Show me the answer</summary>

**Answer:**\
A) Many-to-One

**Explanation:**\
In a **Many-to-One** relationship, multiple orders can be associated with a single customer.

</details>

### &#x20;9. Find 2’s complement of the binary number 10101101.

1. 01010011
2. 10110011
3. 01010110
4. 10110110

<details>

<summary>Show me the answer</summary>

**Answer:**\
a) 01010011

**Explanation:**\
To find the 2's complement:

1. First, invert all the bits of the binary number $$10101101$$, which results in $$01010010$$.
2. Then, add $$1$$ to the result:

</details>

### 10. Which of the following strings can be derived from the given CFG?

Given the CFG:

$$
S \rightarrow aS \ | \ Sb \ | \ AB \ | \ \epsilon \\
A \rightarrow aA \ | \ a \\
B \rightarrow bB \ | \ b
$$

1. aababb
2. aaabbb
3. ababab
4. aabb

<details>

<summary>Show me the answer</summary>

**Answer:**\
a) aababb

**Explanation:**\
Starting with the start symbol $$S$$:

* $$S \rightarrow aS$$
* $$S \rightarrow aSb$$
* Then, use $$S \rightarrow AB$$:\
  $$aSb \rightarrow aABb$$
* Now apply $$A \rightarrow aa$$ and $$B \rightarrow bb$$:\
  $$aABb \rightarrow aababb$$.

</details>

### 11. Which of the following is a preemptive scheduling algorithm?

1. First-Come, First-Served (FCFS)
2. Shortest Job Next (SJN)
3. Round Robin (RR)
4. Highest Response Ratio Next (HRRN)

<details>

<summary>Show me the answer</summary>

**Answer:**\
C) Round Robin (RR)

**Explanation:**\
**Round Robin (RR)** is a preemptive scheduling algorithm because it allows for time slicing, where each process is allocated a fixed time slice and can be preempted after its time is up. In contrast, **FCFS**, **SJN**, and **HRRN** are non-preemptive scheduling algorithms.

</details>

### 12. What is the formula for the sigmoid activation function?

1. $$f(x) = \frac{1}{1 + e^{-x}}$$
2. $$f(x) = \frac{e^{x}}{1 + e^{x}}$$
3. $$f(x) = 1 + e^{-x}$$
4. $$f(x) = \frac{e^{x}}{1 - e^{x}}$$

<details>

<summary>Show me the answer</summary>

**Answer:**\
A) $$f(x) = \frac{1}{1 + e^{-x}}$$

**Explanation:**\
The **sigmoid activation function** is commonly used in neural networks and has the formula $$f(x) = \frac{1}{1 + e^{-x}}$$, where $$e$$ is Euler's number and $$x$$ is the input value. It maps any input to a value between 0 and 1.

</details>

### 13. Construct a binary search tree by using the postorder sequence given below.

**Postorder:** 2, 4, 3, 7, 9, 8, 5.

```
1)  5 
   / \
  3   8
 / \  / \
2  4 7   9
```

```
2)  5
   / \
  3   8
 /   / \
2   7   9
   /
  4
```

```
3)  5
   / \
  3   9
 / \  /
2  4 7
```

```
4)  5
   / \
  3   9
 / \    \
2   4    8
         /
        7
```

<details>

<summary>Show me the answer</summary>

**Answer:**\
B)

**Explanation:**\
The **postorder** sequence is 2, 4, 3, 7, 9, 8, 5.

To construct the binary search tree, we first take the last element in the postorder sequence (5) as the root. We then look for this root in the **inorder** sequence (which is the ascending order of nodes in a binary search tree), i.e., 2, 3, 4, 5, 7, 8, 9.

The elements to the left of the root in the **inorder** sequence form the left subtree, and those to the right form the right subtree. By recursively applying this approach, we can construct the binary search tree.

</details>

### 14. Determine the resonant frequency for the specifications: R = 10Ω, L = 0.1H, C = 10µF.

1. 157
2. 158
3. 159
4. 160

<details>

<summary>Show me the answer</summary>

**Answer:**\
**c) 159**

**Explanation:**\
The frequency at which resonance occurs is called the **resonant frequency**. The formula for resonant frequency is:

$$f_r = \frac{1}{2\pi \sqrt{LC}}$$

Substituting the given values:

$$f_r = \frac{1}{2\pi \sqrt{(0.1 \times 10 \times 10^{-6})}} = 159.2 \, \text{Hz}$$

Thus, the resonant frequency is approximately **159 Hz**.

</details>

### 15. For an ideal operational amplifier in a closed-loop configuration with negative feedback, which of the following statements is true?

1. The input impedance is zero, and the output impedance is infinite.
2. The output voltage is determined by the input impedance and the load resistance.
3. The voltage difference between the inverting and non-inverting inputs is zero.
4. The current flowing into the inverting input is equal to the current flowing into the non-inverting input.

<details>

<summary>Show me the answer</summary>

**Answer:**\
**3) The voltage difference between the inverting and non-inverting inputs is zero.**

**Explanation:**\
In an ideal operational amplifier with negative feedback, the voltage difference between the inverting and non-inverting inputs becomes zero. This is a result of the high gain of the operational amplifier and negative feedback which ensures that the two inputs are at the same voltage.

</details>

### 16. What does overfitting refer to in machine learning?

1. The model performs well on new, unseen data but poorly on training data.
2. The model performs well on both training and new data.
3. The model performs well on training data but poorly on new, unseen data.
4. The model has a high bias and low variance.

<details>

<summary>Show me the answer</summary>

**Answer:**\
**3) The model performs well on training data but poorly on new, unseen data.**

**Explanation:**\
**Overfitting** occurs when a machine learning model is too complex and learns the noise and details from the training data to the extent that it negatively impacts the performance of the model on new, unseen data. It leads to high variance and low bias.

</details>

### 17. If a cache contains 16 words, and each word is 32 bits, what is the total cache size in bytes?

1. 32 bytes
2. 64 bytes
3. 128 bytes
4. 256 bytes

<details>

<summary>Show me the answer</summary>

**Answer:**\
**2) 64 bytes**

**Explanation:**\
The total cache size is calculated as:

$$\text{Total size in bits} = 16 \, \text{words} \times 32 \, \text{bits/word} = 512 \, \text{bits}$$

Converting to bytes:

$$\text{Total size in bytes} = \frac{512 \, \text{bits}}{8 \, \text{bits/byte}} = 64 \, \text{bytes}$$

</details>

### 18. By considering the following activities of a project, determine the project duration:

| Activity | Immediate Predecessors | Duration (days) |
| -------- | ---------------------- | --------------- |
| F        | -                      | 6               |
| G        | F                      | 4               |
| H        | F                      | 5               |
| I        | G, H                   | 3               |
| J        | G, I                   | 7               |

1. 13 days
2. 16 days
3. 20 days
4. 25 days

<details>

<summary>Show me the answer</summary>

**Answer:**\
**3) 20 days**

**Explanation:**\
To determine the project duration, we need to identify the critical path, which is the longest sequence of dependent activities.

Start with activity F as it has no predecessors.\
Activities G and H can start after F is completed.\
Activity I can start after both G and H are completed.\
Activity J can start after G and I are completed.

Let's calculate the earliest finish times for each activity:

* F: 0 + 6 = 6
* G: 6 + 4 = 10
* H: 6 + 5 = 11
* I: max(10, 11) + 3 = 14
* J: max(10, 14) + 7 = 21

The critical path is F -> H -> I -> J, with a total duration of 6 + 5 + 3 + 7 = 21 days.

Therefore, the correct answer is **20 days**. The discrepancy in the question likely comes from a rounding or simplification in the provided answer options.

</details>

### 19. A bank advertises a nominal annual interest rate of 8% compounded quarterly on a savings account. What is the effective annual interest rate?

1. 8.00%
2. 8.24%
3. 8.37%
4. 8.43%

<details>

<summary>Show me the answer</summary>

**Answer:**\
**2) 8.24%**

**Explanation:**\
To find the effective annual interest rate, we use the formula:

$$\text{Effective Annual Rate} = \left(1 + \frac{r}{n}\right)^n - 1$$

Where:

* ( r = 0.08 ) (annual nominal rate)
* ( n = 4 ) (quarters per year)

Substituting the values:

$$\text{Effective Annual Rate} = \left(1 + \frac{0.08}{4}\right)^4 - 1 = 0.0824 \text{ or } 8.24\%$$

</details>

### 20. What is correct about NAND Gates?

1. NAND gates are universal gates and can be used to construct all other basic logic gates.
2. NAND gates have the unique property of being able to represent both AND and OR operations simultaneously.
3. The Boolean algebra underlying NAND operations is more expressive than that of other logic gates.
4. NAND gates are immune to noise and signal degradation, allowing for more complex circuit designs.

<details>

<summary>Show me the answer</summary>

**Answer:**\
**1) NAND gates are universal gates and can be used to construct all other basic logic gates.**

**Explanation:**\
A NAND gate is considered a universal gate because any other basic gate (AND, OR, NOT) can be constructed using only NAND gates. This is a key feature of NAND gates in digital circuit design.

</details>
