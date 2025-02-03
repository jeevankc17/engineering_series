# set-11

#### 501. The output of an OR gate is HIGH when

1. Any input is HIGH
2. No inputs are HIGH
3. All inputs are HIGH
4. Both answers (A) and (C)

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both answers (A) and (C)

**Explanation:**

* The output of an OR gate is **HIGH** when **any input is HIGH** or **all inputs are HIGH**.
* Therefore, the correct answer is **Both answers (A) and (C)**.

</details>

#### 502. How many 3 lines to 8 line decoder are required for a 1 of 32 decoder?

1. 1
2. 4
3. 8
4. 16

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 4

**Explanation:**

* To create a **1 of 32 decoder**, you need **4** 3-to-8 line decoders.
* Therefore, the correct answer is **4**.

</details>

#### 503. Convert BCD 0001 0010 0110 to binary

1. 1111110
2. 1111101
3. 1111000
4. 1111111

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 1111110

**Explanation:**

* The BCD number **0001 0010 0110** converts to binary as:\
  $$0001 = 1, 0010 = 2, 0110 = 6$$\
  $$126 = 1111110$$
* Therefore, the correct answer is **1111110**.

</details>

#### 504. How many data select lines are required for selecting eight inputs?

1. 1
2. 2
3. 3
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 3

**Explanation:**

* To select **8 inputs**, you need **3** data select lines, as:\
  $$2^3 = 8$$
* Therefore, the correct answer is **3**.

</details>

#### 505. How many 1 -of-16 decoders are required for decoding a 7 bit binary number?

1. 5
2. 6
3. 7
4. 8

<details>

<summary>Show me the answer</summary>

**Answer:** 4. 8

**Explanation:**

* To decode a **7-bit binary number**, you need **8** 1-of-16 decoders.
* Therefore, the correct answer is **8**.

</details>

#### 506. The implementation of simplified sum- of – products expressions may be easily implemented into actual logic circuits using all universal ……gates with little or no increase in circuit complexity.

1. AND/OR
2. NAND
3. NOR
4. OR/AND

<details>

<summary>Show me the answer</summary>

**Answer:** 2. NAND

**Explanation:**

* **NAND gates** are universal gates and can be used to implement any logic function with little or no increase in circuit complexity.
* Therefore, the correct answer is **NAND**.

</details>

#### 507. Which of the following combinations cannot be combined into k-map groups?

1. Corners in the same row
2. Corners in the same column
3. Diagonal corners
4. Overlapping combinations

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Diagonal corners

**Explanation:**

* **Diagonal corners** cannot be combined into k-map groups because they do not share common variables.
* Therefore, the correct answer is **Diagonal corners**.

</details>

#### 508. Which gate is best used as a basic comparator?

1. NOR
2. OR
3. XOR
4. AND

<details>

<summary>Show me the answer</summary>

**Answer:** 3. XOR

**Explanation:**

* The **XOR gate** is best used as a basic comparator because it outputs **1** when the inputs are different.
* Therefore, the correct answer is **XOR**.

</details>

#### 509. The binary numbers A = 1100 and B = 1001 are applied to the inputs of a comparator. What are the output levels?

1. A > B = 1, A < B = 0, A < B = 1
2. A > B = 0, A < B = 1, A = B = 0
3. A > B = 1, A < B = 0, A = B = 0
4. A > B = 1, A < B = 0, A = B = 0

<details>

<summary>Show me the answer</summary>

**Answer:** 3. A > B = 1, A < B = 0, A = B = 0

**Explanation:**

* For **A = 1100** and **B = 1001**, the comparator outputs:\
  $$A > B = 1, A < B = 0, A = B = 0$$
* Therefore, the correct answer is **A > B = 1, A < B = 0, A = B = 0**.

</details>

#### 510. A logic probe is placed on the output of a gate and the display indicator is dim. A pulser is used on each of the input terminals, but the output indication does not change. What is wrong?

1. The output of the gate appears to be open
2. The dim indication on the logic probe indicates that the supply voltage is probably low
3. The dim indication is a result of a bad ground connection on the logic probe
4. The gate may be a tri state logic.

<details>

<summary>Show me the answer</summary>

**Answer:** 1. The output of the gate appears to be open

**Explanation:**

* If the output of the gate is **open**, the logic probe will show a **dim indication** and the output will not change when inputs are pulsed.
* Therefore, the correct answer is **The output of the gate appears to be open**.

</details>

#### 511. Two 4-bit binary numbers (1011 and 1111) are applied to a 4-bit parallel adder. The carry input is 1. What are the values for the sum and carry output?

1. $$(\sum_2 \sum_3 \sum_2 \sum_1 = 0111), (C_{out} = 0)$$
2. $$(\sum_2 \sum_3 \sum_2 \sum_1 = 1111), (C_{out} = 1)$$
3. $$(\sum_2 \sum_3 \sum_2 \sum_1 = 1011), (C_{out} = 1)$$
4. $$(\sum_2 \sum_3 \sum_2 \sum_1 = 1100), (C_{out} = 1)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$(\sum_2 \sum_3 \sum_2 \sum_1 = 1011), (C_{out} = 1)$$

**Explanation:**

* Adding **1011** and **1111** with a carry input of **1** results in:\
  $$1011 + 1111 + 1 = 11011$$\
  The sum is **1011** and the carry output is **1**..

</details>

#### 512. Each "1" entry in a K-map square represents:

1. A HIGH for each input truth table condition that produces a HIGH output.
2. A HIGH output on the truth table for all LOW input combinations.
3. A LOW output for all possible HIGH input conditions.
4. A DON'T CARE condition for all possible input truth table combinations.

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A HIGH for each input truth table condition that produces a HIGH output.

**Explanation:**

* Each **"1"** in a K-map represents a **HIGH output** for a specific input combination in the truth table.
* Therefore, the correct answer is **A HIGH for each input truth table condition that produces a HIGH output**.

</details>

#### 513. Looping on a k-map always results in the elimination of:

1. Variables within the loop that appear only in their complemented form
2. Variables that remain unchanged within the loop
3. Variables within the loop that appear in both complemented and uncomplemented form
4. Variables within a loop that appear only in their un complemented form

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Variables within the loop that appear in both complemented and uncomplemented form

**Explanation:**

* Looping on a K-map eliminates **variables that appear in both complemented and uncomplemented form** within the loop.
* Therefore, the correct answer is **Variables within the loop that appear in both complemented and uncomplemented form**.

</details>

#### 514. The carry output of a half-adder circuit can be expressed as......

1. $$(C_{out} = AB)$$
2. $$(C_{out} = A + B)$$
3. $$(C_{out} = A \oplus B)$$
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$(C_{out} = A \oplus B)$$

**Explanation:**

* The carry output of a half-adder is given by:\
  $$C_{out} = AB$$

</details>

#### 515. What is the major difference between half-adders and full-adders?

1. Nothing basically; full-adders are made up of two half-adders.
2. Full adders can handle double-digit numbers.
3. Full adders have a carry input capability.
4. Half adders can handle only single-digit numbers.

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Full adders have a carry input capability.

**Explanation:**

* The major difference between half-adders and full-adders is that **full-adders have a carry input capability**.
* Therefore, the correct answer is **Full adders have a carry input capability**.

</details>

#### 516. Manipulation of individual bits of a word is often referred to as

1. Bit twidding
2. Bit swapping
3. Micro operation
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Bit twidding

**Explanation:**

* The manipulation of individual bits of a word is often referred to as **bit twidding**.
* Therefore, the correct answer is **Bit twidding**.

</details>

#### 517. The ASCII code for letter A is

1. 1100011
2. 100000
3. 1111111
4. 0010011

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 100000

**Explanation:**

* The ASCII code for the letter **A** is **1000001**.
* Therefore, the correct answer is **100000**.

</details>

#### 518. Which gate can be used as anti-coincidence detector?

1. X -NOR
2. NAND
3. X -OR
4. NOR

<details>

<summary>Show me the answer</summary>

**Answer:** 3. X -OR

**Explanation:**

* The **XOR gate** can be used as an **anti-coincidence detector** because it outputs **1** when the inputs are different.
* Therefore, the correct answer is **X -OR**.

</details>

#### 519. Which of the following is a self-complementing code?

1. 8421 code
2. 5211 code
3. Gray code
4. Binary code

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 8421 code

**Explanation:**

* The **8421 code** is a self-complementing code, meaning the 9's complement of a number can be obtained by inverting the bits.
* Therefore, the correct answer is **8421 code**.

</details>

#### 520. Excess 3 code is also known as:

1. Weighted code
2. Self-complementing code
3. Cyclic redundancy code
4. Algebraic code

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Self-complementing code

**Explanation:**

* The **Excess 3 code** is also known as a **self-complementing code** because the 9's complement of a number can be obtained by inverting the bits.
* Therefore, the correct answer is **Self-complementing code**.

</details>

#### 521. Binary equivalent of gray code number 101 is

1. 101
2. 110
3. 100
4. 111

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 110

**Explanation:**

* The binary equivalent of the Gray code **101** is **110**.
* Therefore, the correct answer is **110**.

</details>

#### 522. Which of the following expression is in the product-of-sums form?

1. (A + B) (C + D)
2. (AB) (CD)
3. AB (CD)
4. B + CD

<details>

<summary>Show me the answer</summary>

**Answer:** 1. (A + B) (C + D)

**Explanation:**

* The expression **(A + B) (C + D)** is in the **product-of-sums** form.
* Therefore, the correct answer is **(A + B) (C + D)**.

</details>

#### 523. Which of the following expressions is in the sum-of-products form?

1. (A + B) (C + D)
2. (AB) (CD)
3. AB (CD)
4. AB + CD

<details>

<summary>Show me the answer</summary>

**Answer:** 4. AB + CD

**Explanation:**

* The expression **AB + CD** is in the **sum-of-products** form.
* Therefore, the correct answer is **AB + CD**.

</details>

#### 524. Which statement below best describes a Karnaugh map?

1. A Karnaugh map can be used to replace Boolean rules.
2. The Karnaugh map eliminates the need for using NAND and NOR gates.
3. Variable complements can be eliminated by using Karnaugh maps.
4. Karnaugh maps provide a visual approach to simplifying Boolean expressions.

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Karnaugh maps provide a visual approach to simplifying Boolean expressions.

**Explanation:**

* A **Karnaugh map** provides a **visual approach** to simplifying Boolean expressions.
* Therefore, the correct answer is **Karnaugh maps provide a visual approach to simplifying Boolean expressions**.

</details>

#### 525. A decoder can be used as a de-multiplexer by

1. tying all enable pins LOW
2. tying all data-select lines LOW
3. tying all data-select lines HIGH
4. using the input lines for data selection and an enable line for data input

<details>

<summary>Show me the answer</summary>

**Answer:** 4. using the input lines for data selection and an enable line for data input

**Explanation:**

* A **decoder** can be used as a **de-multiplexer** by using the input lines for data selection and an enable line for data input.
* Therefore, the correct answer is **using the input lines for data selection and an enable line for data input**.

</details>

#### 526. How many 4-bit parallel adders would be required to add two binary numbers each representing decimal numbers up through 300:0?

1. 1
2. 2
3. 3
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 3

**Explanation:**

* To add two binary numbers representing decimal numbers up to **300**, you need **3** 4-bit parallel adders.
* Therefore, the correct answer is **3**.

</details>

#### 527. A certain BCD-to-decimal decoder has active-HIGH inputs and active-LOW outputs. Which output goes LOW when the inputs are 1001?

1. 0
2. 3
3. 9
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 9

**Explanation:**

* When the inputs are **1001**, the **9th output** goes LOW in a BCD-to-decimal decoder.
* Therefore, the correct answer is **9**.

</details>

#### 528. A full-adder has a Cin = 0. What are the sum $$((\Sigma))$$ and the carry (Cout) when A = 1 and B = 1?

1. $$(\Sigma = 0), (C_{out} = 0)$$
2. $$(\Sigma = 0), (C_{out} = 1)$$
3. $$(\Sigma = 1), (C_{out} = 0)$$
4. $$(\Sigma = 1), (C_{out} = 1)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$(\Sigma = 0), (C_{out} = 1)$$

**Explanation:**

* For a full-adder with **A = 1**, **B = 1**, and **Cin = 0**, the sum and carry are:\
  $$\Sigma = 0, C_{out} = 1$$

</details>

#### 529. Which of the following gates is a series circuit gate?

1. AND GATE
2. OR GATE
3. XOR GATE
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. AND GATE

**Explanation:**

* The **AND gate** is a series circuit gate because all inputs must be HIGH for the output to be HIGH.
* Therefore, the correct answer is **AND GATE**.

</details>

#### 530. A+B can be implemented by

1. NAND gate alone
2. Both (A) and (B)
3. NOR gate alone
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Both (A) and (B)

**Explanation:**

* The expression **A + B** can be implemented using **NAND gates alone** or **NOR gates alone**.
* Therefore, the correct answer is **Both (A) and (B)**.

</details>

#### 531. Which of the following logic expression is incorrect?

1. $$1(\oplus)0 = 1$$
2. $$(\oplus)1 (\oplus)0 = 1$$
3. $$1 (\oplus)1 (\oplus)1 = 1$$
4. $$1 (\oplus)1 = 0$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$(\oplus)1 (\oplus)0 = 1$$

**Explanation:**

* The expression is incorrect because the XOR operation is not associative in this form.

</details>

#### 532. Let x and y be the input and z be the output of NAND gate. The value of Z is given by:

1. x.y
2. x+y
3. x+y
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. x.y

**Explanation:**

* The output of a NAND gate is given by:\
  $$Z = \overline{x.y}$$
* Therefore, the correct answer is **x.y**.

</details>

#### 533. (NOR) (XOR) (NAND) =

1. NOR
2. XOR
3. NAND
4. XNOR

<details>

<summary>Show me the answer</summary>

**Answer:** 2. XOR

**Explanation:**

* The combination of **NOR**, **XOR**, and **NAND** gates results in an **XOR** gate.
* Therefore, the correct answer is **XOR**.

</details>

#### 534. The total number of Boolean functions which can be realized with four variables is

1. 4
2. 256
3. 17
4. 65,536

<details>

<summary>Show me the answer</summary>

**Answer:** 4. 65,536

**Explanation:**

* The total number of Boolean functions that can be realized with **4 variables** is:\
  $$2^{2^4} = 65,536$$
* Therefore, the correct answer is **65,536**.

</details>

#### 535. The Boolean function A + BC is reduced form of...

1. AB + BC
2. A B + ABC
3. (A+B) (A+C)
4. (A+C) B

<details>

<summary>Show me the answer</summary>

**Answer:** 3. (A+B) (A+C)

**Explanation:**

* The Boolean function **A + BC** is the reduced form of **(A+B) (A+C)**.
* Therefore, the correct answer is **(A+B) (A+C)**.

</details>

#### 536. The logical expression y = A + A B is equivalent to...

1. Y = AB
2. Y = A' + B
3. Y = A+B
4. Y = A B

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Y = A+B

**Explanation:**

* The logical expression **y = A + A B** simplifies to **Y = A + B**.
* Therefore, the correct answer is **Y = A+B**.

</details>

#### 537. What is the maximum number of different Boolean functions involving n Boolean variables?

1. $$( n^2 )$$
2. $$( 2^{2^n} )$$
3. $$( 2^n )$$
4. $$( 2^{2^n} )$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$( 2^{2^n} )$$

**Explanation:**

* The maximum number of different Boolean functions involving **n** variables is:\
  $$2^{2^n}$$
* Therefore, the correct answer is $$( 2^{2^n} )$$.

</details>

#### 538. With three variables maximum possible logical expression is:

1. 6
2. 512
3. 256
4. 65536

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 256

**Explanation:**

* With **3 variables**, the maximum number of possible logical expressions is:\
  $$2^{2^3} = 256$$
* Therefore, the correct answer is **256**.

</details>

#### 539. In n variables maximum possible dual expression is:

1. $$( n^2 )$$
2. $$( 2^{2^n-1} )$$
3. $$( 2^n )$$
4. $$(2^{n^2})$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$( 2^{2^n-1} )$$

**Explanation:**

* In **n variables**, the maximum number of possible dual expressions is:\
  $$2^{2^n-1}$$
* Therefore, the correct answer is $$( 2^{2^n-1} ).$$

</details>

#### 540. Which of the following expression is not equivalent to x

1. X NAND x
2. X NAND 1
3. X NOR X
4. X NOR 1

<details>

<summary>Show me the answer</summary>

**Answer:** 4. X NOR 1

**Explanation:**

* The expression **X NOR 1** is not equivalent to **X**.
* Therefore, the correct answer is **X NOR 1**.

</details>

#### 541. The address bus width of a memory of size 1024 x 8 bits is

1. 8 bits
2. 13 bits
3. 10 bits
4. 15 bits

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 10 bits

**Explanation:**

* The address bus width for a memory of size **1024 x 8 bits** is:\
  $$\log_2{1024} = 10 \text{ bits}$$
* Therefore, the correct answer is **10 bits**.

</details>

#### 542. The final step in designing the combinational circuit is

1. To determine the input and output variables
2. To draw the truth table
3. To minimize the Boolean function for each output obtained
4. To draw the minimized logic diagram

<details>

<summary>Show me the answer</summary>

**Answer:** 4. To draw the minimized logic diagram

**Explanation:**

* The final step in designing a combinational circuit is **to draw the minimized logic diagram**.
* Therefore, the correct answer is **To draw the minimized logic diagram**.

</details>

#### 543. The fetching, decoding and executing of an instruction is broken down into several time intervals. Each of these intervals, involving one or more clock period is called

1. Instruction cycle
2. Machine cycle
3. Process cycle
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Machine cycle

**Explanation:**

* The **machine cycle** refers to the time intervals involved in fetching, decoding, and executing an instruction.
* Therefore, the correct answer is **Machine cycle**.

</details>

#### 544. A combinational circuit consist of

1. Logic gate and memory elements
2. Logic gates only
3. Memory elements only
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Logic gates only

**Explanation:**

* A **combinational circuit** consists of **logic gates only** and does not include memory elements.
* Therefore, the correct answer is **Logic gates only**.

</details>

#### 545. Full adder circuit can be implemented by

1. Multiplexer
2. AND and OR gates
3. Half adders
4. Decoders

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Multiplexer

**Explanation:**

* A **full adder** circuit can be implemented using a **multiplexer**.
* Therefore, the correct answer is **Multiplexer**.

</details>

#### 546. How many full adders are required to construct an m-bit parallel adders?

1. m
2. m/2
3. m-1
4. m+1

<details>

<summary>Show me the answer</summary>

**Answer:** 1. m

**Explanation:**

* To construct an **m-bit parallel adder**, you need **m** full adders.
* Therefore, the correct answer is **m**.

</details>

#### 547. select the statement that best describes the parity method of error detection:

1. Parity checking is best suited for detecting double-bit errors that occur during the transmission of codes from one location to another.
2. Arity checking is not suitable for detecting single-bit errors in transmitted codes.
3. Parity checking is best suited for detecting single-bit errors in transmitted codes
4. Parity checking is not suitable for detecting single-bit errors in transmitted codes.

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Parity checking is best suited for detecting single-bit errors in transmitted codes

**Explanation:**

* **Parity checking** is best suited for detecting **single-bit errors** in transmitted codes.
* Therefore, the correct answer is **Parity checking is best suited for detecting single-bit errors in transmitted codes**.

</details>

#### 548. A logic circuit that provides a HIGH output for both inputs HIGH or both inputs LOW is a(n)

1. EX-NOR gate
2. OR gate
3. EX-OR gate
4. NAND gate

<details>

<summary>Show me the answer</summary>

**Answer:** 1. EX-NOR gate

**Explanation:**

* An **EX-NOR gate** provides a **HIGH output** when both inputs are **HIGH** or both are **LOW**.
* Therefore, the correct answer is **EX-NOR gate**.

</details>

#### 549. A logic circuit that provides a HIGH output if one input or the other input, but not both, is HIGH, is a(n):

1. EX-NOR gate
2. OR gate
3. EX-OR gate
4. NAND gate

<details>

<summary>Show me the answer</summary>

**Answer:** 3. EX-OR gate

**Explanation:**

* An **EX-OR gate** provides a **HIGH output** if **one input or the other input, but not both**, is HIGH.
* Therefore, the correct answer is **EX-OR gate**.

</details>

#### 550. Identify the type of gate below from the equation $$( X = A \oplus B = \overline{A}B + AB )$$

1. OR GATE
2. NOR GAT
3. EX-OR GAT
4. NAND GATE

<details>

<summary>Show me the answer</summary>

**Answer:** 3. EX-OR GAT

**Explanation:**

* The equation ( X = A \oplus B = \overline{A}B + AB ) represents an **EX-OR gate**.
* Therefore, the correct answer is **EX-OR GAT**.

</details>
