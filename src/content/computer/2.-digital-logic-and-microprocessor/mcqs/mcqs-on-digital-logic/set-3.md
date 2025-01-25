# set-3

#### 101. What is the 2’s complement of 0011 0101 1001 1100?

1. $$1100 1001 1100 1011$$
2. $$1100 1010 0110 0100$$
3. $$1100 1010 0110 0011$$
4. $$1100 1010 1111 1111$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$1100 1010 0110 0011$$

**Explanation:**

* To find the 2’s complement:
  1. Invert all bits: $$1100 1010 0110 0011$$
  2. Add 1 to the least significant bit (LSB): $$1100 1010 0110 0011 + 1 = 1100 1010 0110 0100$$.

</details>

#### 102. A flip-flop is a:

1. $$\text{Chip}$$
2. $$\text{I/O element}$$
3. $$\text{Memory element}$$
4. $$\text{Bus}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$\text{Memory element}$$

**Explanation:**

* A flip-flop is a basic memory element that stores one bit of data.

</details>

#### 103. With an RS latch, a high S and low R sets the output to:

1. $$\text{No change}$$
2. $$\text{High}$$
3. $$\text{Race}$$
4. $$\text{Set}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$\text{High}$$

**Explanation:**

* In an RS latch, when S (Set) is high and R (Reset) is low, the output is set to high.

</details>

#### 104. With a NAND latch, a low R and a low S produce a:

1. $$\text{Race condition}$$
2. $$\text{Reset condition}$$
3. $$\text{Set condition}$$
4. $$\text{No change condition}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\text{Race condition}$$

**Explanation:**

* In a NAND latch, when both R and S are low, it creates a race condition, which is an invalid state.

</details>

#### 105. Computers use thousands of flip-flops. To coordinate the overall action, a common signal called the:

1. $$\text{Latch}$$
2. $$\text{Master}$$
3. $$\text{Clock}$$
4. $$\text{Slave}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$\text{Clock}$$

**Explanation:**

* The clock signal synchronizes the operation of flip-flops and other components in a computer.

</details>

#### 106. With positive clocking, the clock signal must be:

1. $$\text{High}$$
2. $$\text{Set}$$
3. $$\text{Low}$$
4. $$\text{Race}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\text{High}$$

**Explanation:**

* In positive clocking, the flip-flop responds when the clock signal is high.

</details>

#### 107. With a JK master-slave flip-flop, the master is clocked when the clock is:

1. $$\text{Set, reset}$$
2. $$\text{High, low}$$
3. $$\text{Race, no change}$$
4. $$\text{Set, race}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$\text{High, low}$$

**Explanation:**

* In a JK master-slave flip-flop, the master is clocked when the clock is high, and the slave is triggered when the clock is low.

</details>

#### 108. When the LOAD input of a buffer register is active, the input word is stored on the next positive:

1. $$\text{Clock edge}$$
2. $$\text{Register}$$
3. $$\text{Pulse}$$
4. $$\text{Transistor}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\text{Clock edge}$$

**Explanation:**

* The input word is stored in the buffer register on the next positive clock edge when the LOAD input is active.

</details>

#### 109. A shift register moves the bits:

1. $$\text{Left or right}$$
2. $$\text{Up or down}$$
3. $$\text{Forward or backward}$$
4. $$\text{None of the above}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\text{Left or right}$$

**Explanation:**

* A shift register shifts bits either to the left or to the right.

</details>

#### 110. One flip-flop divides the clock frequency by a factor of:

1. $$\text{Two}$$
2. $$\text{Four}$$
3. $$\text{Eight}$$
4. $$\text{Sixteen}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\text{Two}$$

**Explanation:**

* A single flip-flop divides the clock frequency by 2.

</details>

#### 111. Instead of counting with binary numbers, a ring counter uses words that have a single high:

1. $$\text{Byte}$$
2. $$\text{Gate}$$
3. $$\text{Bit}$$
4. $$\text{Chip}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$\text{Bit}$$

**Explanation:**

* A ring counter uses words with a single high bit that circulates through the register.

</details>

#### 112. The memory that is ultraviolet-light erasable and electrically programmable is:

1. $$\text{EPROM}$$
2. $$\text{PROM}$$
3. $$\text{ROM}$$
4. $$\text{RAM}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\text{EPROM}$$

**Explanation:**

* EPROM (Erasable Programmable Read-Only Memory) can be erased using ultraviolet light and reprogrammed electrically.

</details>

#### 113. The memory cell of a dynamic RAM is simpler and smaller than the memory cell of a:

1. $$\text{Volatile RAM}$$
2. $$\text{Semiconductor RAM}$$
3. $$\text{Static RAM}$$
4. $$\text{Bipolar RAM}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$\text{Static RAM}$$

**Explanation:**

* Dynamic RAM (DRAM) uses a simpler and smaller memory cell compared to Static RAM (SRAM).

</details>

#### 114. How many memory locations can 14 address bits access?

1. $$16,384$$
2. $$4,096$$
3. $$8,192$$
4. $$14$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$16,384$$

**Explanation:**

* With 14 address bits, the number of memory locations is $$2^{14} = 16,384$$.

</details>

#### 115. The 2764 is a 65,536-bit EPROM organized as 8,192 words of 8 bits each. How many address lines does it have?

1. $$12$$
2. $$13$$
3. $$14$$
4. $$8$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$13$$

**Explanation:**

* To address 8,192 words, the number of address lines required is $$\log_2{8192} = 13$$.

</details>

#### 116. The 2732 is a 4096x8 EPROM. How many address lines does it have?

1. $$12$$
2. $$13$$
3. $$14$$
4. $$8$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$12$$

**Explanation:**

* To address 4,096 words, the number of address lines required is $$\log_2{4096} = 12$$.

</details>

#### 117. Address 200H contains the byte 3FH. What is the decimal equivalent of 3FH?

1. $$63$$
2. $$16$$
3. $$22$$
4. $$38$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$63$$

**Explanation:**

* The hexadecimal value 3FH is equivalent to $$3 \times 16 + 15 = 63$$ in decimal.

</details>

#### 118. What is the highest address in a 48K memory? Express in hexadecimal and decimal form.

1. $$7FFFH, 64387$$
2. $$BFFFH, 49,152$$
3. $$BFFFH, 49,151$$
4. $$7FFFH, 64,386$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$BFFFH, 49,151$$

**Explanation:**

* 48K memory corresponds to $$48 \times 1024 = 49,152$$ bytes.
* The highest address is $$49,152 - 1 = 49,151$$, which is BFFFH in hexadecimal.

</details>

#### 119. Flip-flop outputs are always:

1. $$\text{Complimentary}$$
2. $$\text{Independent of each other}$$
3. $$\text{The same}$$
4. $$\text{Same as inputs}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\text{Complimentary}$$

**Explanation:**

* The outputs of a flip-flop (Q and Q') are always complementary.

</details>

#### 120. A combinational logic circuit used to send data from a single source to two or more separate destinations is called:

1. $$\text{Decoder}$$
2. $$\text{Multiplexer}$$
3. $$\text{Encoder}$$
4. $$\text{Demultiplexer}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{Demultiplexer}$$

**Explanation:**

* A demultiplexer sends data from one input to one of several outputs based on the control signals.

</details>

#### 121. In which of the following adder circuits is the carry look ripple delay eliminated?

1. $$\text{Half adder}$$
2. $$\text{Parallel adder}$$
3. $$\text{Full adder}$$
4. $$\text{Carry-look-ahead adder}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{Carry-look-ahead adder}$$

**Explanation:**

* The carry-look-ahead adder eliminates the ripple delay by calculating carry signals in advance.

</details>

#### 122. Consider an RS flip-flop with both inputs set to 0. If a momentary '1' is applied at the input S, then the output:

1. $$Q \text{ will flip from 0 to 1}$$
2. $$Q \text{ will flip from 0 to 1 and then back to 0}$$
3. $$Q \text{ will remain unchanged}$$
4. $$Q \text{ will flip from 1 to 0}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$Q \text{ will flip from 0 to 1}$$

**Explanation:**

* In an RS flip-flop, applying a momentary '1' to the S (Set) input will set the output Q to 1.

</details>

#### 123. How many full adders are required to construct an m-bit parallel adder?

1. $$m/2$$
2. $$m-1$$
3. $$m$$
4. $$m+1$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$m$$

**Explanation:**

* An m-bit parallel adder requires m full adders, one for each bit.

</details>

#### 124. The dynamic race hazard problem occurs in:

1. $$\text{Combinational circuits only}$$
2. $$\text{Sequential circuits only}$$
3. $$\text{Both combinational and sequential circuits}$$
4. $$\text{None of the above}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$\text{Sequential circuits only}$$

**Explanation:**

* The dynamic race hazard problem occurs in sequential circuits due to timing issues in signal propagation.

</details>

#### 125. A shift register can be used for:

1. $$\text{Parallel to serial conversion}$$
2. $$\text{Digital delay line}$$
3. $$\text{Serial to parallel conversion}$$
4. $$\text{All of the above}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{All of the above}$$

**Explanation:**

* A shift register can perform parallel-to-serial conversion, serial-to-parallel conversion, and act as a digital delay line.

</details>

#### 126. Which of the following flip-flops is free from the race-around problem?

1. $$\text{T flip-flop}$$
2. $$\text{Master-slave JK flip-flop}$$
3. $$\text{SR flip-flop}$$
4. $$\text{All of the above}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$\text{Master-slave JK flip-flop}$$

**Explanation:**

* The master-slave JK flip-flop is designed to eliminate the race-around problem.

</details>

#### 127. For an input pulse train of clock period T, the delay produced by an n-stage shift register is:

1. $$(n+1)T$$
2. $$(n-1)T$$
3. $$nT$$
4. $$2nT$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$nT$$

**Explanation:**

* An n-stage shift register introduces a delay of n clock periods (nT).

</details>

#### 128. The master-slave JK flip-flop is effectively a combination of:

1. $$\text{An SR flip-flop and a T flip-flop}$$
2. $$\text{An SR flip-flop and a D flip-flop}$$
3. $$\text{A T flip-flop and a D flip-flop}$$
4. $$\text{Two T flip-flops}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\text{An SR flip-flop and a T flip-flop}$$

**Explanation:**

* The master-slave JK flip-flop combines the functionality of an SR flip-flop and a T flip-flop.

</details>

#### 129. The functional difference between SR flip-flop and JK flip-flop is:

1. $$\text{JK flip-flop is faster than SR flip-flop}$$
2. $$\text{JK flip-flop has a feedback path}$$
3. $$\text{JK flip-flop accepts both input 1}$$
4. $$\text{JK flip-flop does not require an external clock}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$\text{JK flip-flop has a feedback path}$$

**Explanation:**

* The JK flip-flop has a feedback path that allows it to toggle its output when both inputs are high.

</details>

#### 130. The term sum-of-products in Boolean algebra means:

1. $$\text{The AND function of several OR functions}$$
2. $$\text{The OR function of several AND functions}$$
3. $$\text{The OR function of several OR functions}$$
4. $$\text{The AND function of several AND functions}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$\text{The OR function of several AND functions}$$

**Explanation:**

* Sum-of-products (SOP) refers to the OR of multiple AND terms.

</details>

#### 131. A positive AND gate is also a negative:

1. $$\text{NAND gate}$$
2. $$\text{AND gate}$$
3. $$\text{NOR gate}$$
4. $$\text{OR gate}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$\text{NOR gate}$$

**Explanation:**

* A positive AND gate behaves like a negative NOR gate due to De Morgan's laws.

</details>

#### 132. What table shows the electrical state of a digital circuit's output for every possible combination of electrical states in the inputs?

1. $$\text{Function table}$$
2. $$\text{Routing table}$$
3. $$\text{Truth table}$$
4. $$\text{ASCII table}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$\text{Truth table}$$

**Explanation:**

* A truth table shows the output of a digital circuit for all possible input combinations.

</details>

#### 133. How many bits are required to encode all twenty-six letters, ten symbols, and ten numbers?

1. $$5$$
2. $$2$$
3. $$6$$
4. $$3$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$6$$

**Explanation:**

* To encode 26 letters, 10 symbols, and 10 numbers (total 46 items), at least 6 bits are required ($$2^6 = 64$$).

</details>

#### 134. The number of two-input NAND gates required to produce the two-input OR function is:

1. $$1$$
2. $$3$$
3. $$2$$
4. $$4$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$3$$

**Explanation:**

* To implement a two-input OR function using NAND gates, three NAND gates are required.

</details>

#### 135. What logic function is obtained by adding an inverter to the inputs of an AND gate?

1. $$\text{OR}$$
2. $$\text{XOR}$$
3. $$\text{NAND}$$
4. $$\text{NOR}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{NOR}$$

**Explanation:**

* Adding inverters to the inputs of an AND gate results in a NOR gate.

</details>

#### 136. Which of the following Boolean algebra expressions is incorrect?

1. $$AB + A(B + C) + B(B + C) = B + AC$$
2. $$[AB(C + BD) + AB]C = BC$$
3. $$AB(C + D) = A + B + CD$$
4. $$(A + C)(ABC + ACD) = ABC + ACD$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$AB(C + D) = A + B + CD$$

**Explanation:**

* The expression $$AB(C + D)$$ simplifies to $$ABC + ABD$$, not $$A + B + CD$$.

</details>

#### 137. Which gate is known as the universal gate?

1. $$\text{NOT gate}$$
2. $$\text{NAND gate}$$
3. $$\text{AND gate}$$
4. $$\text{XOR gate}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$\text{NAND gate}$$

**Explanation:**

* The NAND gate is a universal gate because it can be used to implement any other logic gate.

</details>

#### 138. What logic function is produced by adding an inverter to the output of an AND gate?

1. $$\text{NAND}$$
2. $$\text{XOR}$$
3. $$\text{NOR}$$
4. $$\text{OR}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\text{NAND}$$

**Explanation:**

* Adding an inverter to the output of an AND gate produces a NAND gate.

</details>

#### 139. An OR gate can be imagined as:

1. $$\text{Switches connected in parallel}$$
2. $$\text{MOS transistors connected in series}$$
3. $$\text{Switches connected in series}$$
4. $$\text{All of the above}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\text{Switches connected in parallel}$$

**Explanation:**

* An OR gate behaves like switches connected in parallel, where the output is high if any input is high.

</details>

#### 140. What logic function is produced by adding an inverter to each input and the output of an AND gate?

1. $$\text{NAND}$$
2. $$\text{OR}$$
3. $$\text{NOR}$$
4. $$\text{XOR}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$\text{NOR}$$

**Explanation:**

* Adding inverters to the inputs and output of an AND gate produces a NOR gate.

</details>

#### 141. Which of the following algebra statements represents the commutative law?

1. $$(A + B) + C = A + (B + C)$$
2. $$A + B = B + A$$
3. $$A \cdot (B + C) = (A \cdot B) + (A \cdot C)$$
4. $$A + A = A$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$A + B = B + A$$

**Explanation:**

* The commutative law states that the order of operands does not affect the result in addition or multiplication.

</details>

#### 142. For what logic gate is the output the complement of the input?

1. $$\text{NOT}$$
2. $$\text{OR}$$
3. $$\text{AND}$$
4. $$\text{XOR}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\text{NOT}$$

**Explanation:**

* The NOT gate outputs the complement of the input.

</details>

#### 143. ASCII and EBCDIC differ in:

1. $$\text{Their efficiency in storing data}$$
2. $$\text{The random and sequential access method}$$
3. $$\text{The number of bytes used to store characters}$$
4. $$\text{Their encoding sequences}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{Their encoding sequences}$$

**Explanation:**

* ASCII and EBCDIC use different encoding sequences to represent characters.

</details>

#### 144. In which code do successive code characters differ in only one bit position?

1. $$\text{Gray code}$$
2. $$\text{8421 code}$$
3. $$\text{Excess-3 code}$$
4. $$\text{Algebraic code}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\text{Gray code}$$

**Explanation:**

* Gray code ensures that successive values differ by only one bit.

</details>

#### 145. Cyclic codes are used in:

1. $$\text{Data transfer}$$
2. $$\text{Continuously varying signals}$$
3. $$\text{Arithmetic and logical computation}$$
4. $$\text{All of the above}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{All of the above}$$

**Explanation:**

* Cyclic codes are used in data transfer, signal processing, and computation.

</details>

#### 146. The 2's complement of the binary number 010111.1100 is:

1. $$101001.1100$$
2. $$010111.0011$$
3. $$101000.0100$$
4. $$101000.0011$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$101000.0100$$

**Explanation:**

* To find the 2's complement:
  1. Invert all bits: $$101000.0011$$
  2. Add 1 to the least significant bit (LSB): $$101000.0100$$.

</details>

#### 147. The ASCII code:

1. $$\text{Is a subset of 8-bit EBCDIC}$$
2. $$\text{Is used only in Western countries}$$
3. $$\text{Is version II of the ASC standard}$$
4. $$\text{Has 128 characters, including 32 control characters}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{Has 128 characters, including 32 control characters}$$

**Explanation:**

* The ASCII code includes 128 characters, with 32 being control characters.

</details>

#### 148. The Gray code for decimal 7 is:

1. $$0111$$
2. $$0100$$
3. $$1011$$
4. $$1010$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$0100$$

**Explanation:**

* The Gray code for decimal 7 is 0100.

</details>

#### 149. The octal equivalent of decimal 324.987 is:

1. $$504.771$$
2. $$815.234$$
3. $$640.781$$
4. $$90.987$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$504.771$$

**Explanation:**

* The octal equivalent of decimal 324.987 is 504.771.

</details>

#### 150. When an odd number is converted into a binary number, the least significant digit (LSD) is:

1. $$0$$
2. $$0 \text{ or } 1$$
3. $$1$$
4. $$\text{All of the above}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$1$$

**Explanation:**

* The least significant digit (LSD) of an odd binary number is always 1.

</details>
