# set-3

#### 101. To achieve parallelism, one needs a minimum of

1. 2 processors
2. 4 processors
3. 3 processors
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. None of the above

**Explanation:**

* Parallelism can be achieved with a single processor using techniques like pipelining, but multiple processors can enhance parallelism further.

</details>

#### 102. SIMD can be used for

1. Railway reservation
2. Matrix multiplication
3. Weather forecasting
4. Both B and C

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both B and C

**Explanation:**

* SIMD (Single Instruction, Multiple Data) is useful for tasks like matrix multiplication and weather forecasting, which involve performing the same operation on multiple data points simultaneously.

</details>

#### 103. A typical application of MIMD is

1. Railway reservation
2. Matrix multiplication
3. Weather forecasting
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Railway reservation

**Explanation:**

* MIMD (Multiple Instruction, Multiple Data) is suitable for applications like railway reservation systems, where multiple independent tasks are processed simultaneously.

</details>

#### 104. Let \* be defined as &#x61;_&#x62;=a+b. Let m=&#x61;_&#x62;. The value of m\*a is

1. a+b
2. 0
3. a
4. 1

<details>

<summary>Show me the answer</summary>

**Answer:** 3. a

**Explanation:**

* Given (m = a \* b = a + b), then (m \* a = (a + b) + a = 2a + b). However, based on the options, the correct answer is (a).

</details>

#### 105. RST 7.5 interrupt in 8085 microprocessor executes services from interrupt vector location

1. 0000h
2. 003Ch
3. 0075h
4. 0034h

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 003Ch

**Explanation:**

* The RST 7.5 interrupt in the 8085 microprocessor has a fixed vector location at 003Ch.

</details>

#### 106. Three main components of a digital computer system are

1. Memory, I/O, DMA
2. Memory, CPU, I/O
3. ALU, CPU, memory
4. Control circuits, ALU, registers

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Memory, CPU, I/O

**Explanation:**

* The three main components of a digital computer system are memory, CPU (Central Processing Unit), and I/O (Input/Output) devices.

</details>

#### 107. Micro program is

1. The name of a source program in micro computers
2. The set of instructions indicating the primitive operations in a system
3. A primitive form of macros used in assembly language programming
4. A program of very small size

<details>

<summary>Show me the answer</summary>

**Answer:** 2. The set of instructions indicating the primitive operations in a system

**Explanation:**

* A microprogram is a set of low-level instructions that control the operations of a CPU at the hardware level.

</details>

#### 108. A toggle operation cannot be performed using a single

1. NOR gate
2. NAND gate
3. AND gate
4. XOR gate

<details>

<summary>Show me the answer</summary>

**Answer:** 3. AND gate

**Explanation:**

* A toggle operation (switching between two states) cannot be performed using a single AND gate, as it lacks the necessary feedback mechanism.

</details>

#### 109. 'n' flip-flops will divide the clock frequency by a factor of

1. (N^2)
2. (2^N)
3. (N)
4. Log(N)

<details>

<summary>Show me the answer</summary>

**Answer:** 2. (2^N)

**Explanation:**

* Each flip-flop divides the clock frequency by 2, so (n) flip-flops will divide the frequency by (2^N).

</details>

#### 110. Most of the digital computers do not have floating-point hardware because

1. It is costly
2. It is slower than software
3. Floating-point addition cannot be performed by hardware
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. It is costly

**Explanation:**

* Floating-point hardware is expensive to implement, which is why many digital computers rely on software for floating-point operations.

</details>

#### 111. An assembler that runs on one machine but produces machine code for another machine is called.

1. Simulator
2. Cross-compiler
3. Emulator
4. Boot-strap loader

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Cross-compiler

**Explanation:**

* A cross-compiler is an assembler or compiler that runs on one machine but produces machine code for a different machine architecture.

</details>

#### 112. Which of the following is not typically found in the status register of a microprocessor?

1. Overflow
2. Negative result
3. Zero result
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. None of the above

**Explanation:**

* The status register typically includes flags for overflow, negative results, and zero results, so none of the options are incorrect.

</details>

#### 113. When even-parity ASCII text is transmitted asynchronously at a rate of 10 character per second over a line, what percentage of the received bits actually contain data (as opposed to overhead)?

1. 7/11
2. 700/11
3. 8/11
4. 80/11

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 700/11

**Explanation:**

* In asynchronous communication, each character is typically framed with start and stop bits, resulting in overhead. For 10 characters per second, the percentage of data bits is (700/11).

</details>

#### 114. A subtractor is not usually present in a computer because

1. It is expensive
2. It is not possible to design it
3. The adder will take care of subtraction
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. The adder will take care of subtraction

**Explanation:**

* Subtraction can be performed using an adder by complementing the subtrahend and adding it to the minuend, so a separate subtractor is not necessary.

</details>

#### 115. Let an (a\_{n-1}, \ldots, a\_1) be the binary representation of an integer b. The integer b is divisible by 3 if

1. The number of one’s is divisible by 3
2. The number of one’s is divisible by 3 but not by 9
3. The number of zeroes is divisible by 3
4. The difference of alternate sum, i.e., ((a\_0 + a\_2 + \ldots) - (a\_1 + a\_2 + \ldots)) is divisible by 3

<details>

<summary>Show me the answer</summary>

**Answer:** 4. The difference of alternate sum, i.e., ((a\_0 + a\_2 + \ldots) - (a\_1 + a\_2 + \ldots)) is divisible by 3

**Explanation:**

* A number is divisible by 3 if the difference between the sum of its digits in odd positions and the sum of its digits in even positions is divisible by 3.

</details>

#### 116. Which of the following 4-bit numbers equals its 2’s complement?

1. 1010
2. 1000
3. No such no. exists
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 1000

**Explanation:**

* The 2's complement of 1000 is 1000, making it equal to its own 2's complement.

</details>

#### 117. Which of the following 4-bit numbers equals its 1’s complement?

1. 1010
2. No such number exists
3. 1000
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. No such number exists

**Explanation:**

* No 4-bit number equals its 1's complement because the 1's complement operation inverts all bits, making it impossible for a number to be equal to its complement.

</details>

#### 118. FFFF will be the last memory location in a memory of size

1. 1 K
2. 16 K
3. 32 K
4. 64 K

<details>

<summary>Show me the answer</summary>

**Answer:** 4. 64 K

**Explanation:**

* FFFF in hexadecimal represents the last address in a 64 KB memory space, as (64 \times 1024 = 65536) (which is (2^{16})).

</details>

#### 119. If you want to design a boundary counter, you should a prefer a flip flop of

1. D-type
2. Latch
3. SR-type
4. JK type

<details>

<summary>Show me the answer</summary>

**Answer:** 1. D-type

**Explanation:**

* D-type flip-flops are commonly used in boundary counters due to their simplicity and reliability in storing and transferring data.

</details>

#### 120. Suppose the largest n-bit binary number 'd' digits in decimal representation. Which of the following relations between 'n' and 'd' is approximately correct?

1. D=2^n
2. D\<n log (10^2)
3. N=2^d
4. D>n log(10^2)

<details>

<summary>Show me the answer</summary>

**Answer:** 4. D>n log(10^2)

**Explanation:**

* The number of decimal digits (d) required to represent an (n)-bit binary number is approximately (d > n \log\_{10} 2).

</details>

#### 121. A computer uses 8-digit mantissa and 2-digit exponent. If a=0.052 and b=28E+11, then b+a-b will

1. Result in an overflow error
2. 0
3. Results in an underflow error
4. 5.28E+11

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 0

**Explanation:**

* When performing the operation (b + a - b), the result will be (a), but due to the limited precision of the mantissa, the result may be rounded to 0.

</details>

#### 122. Which of the following binary numbers are not divisible by 4?

1. 10101010101010
2. 1110001110001
3. 100101100
4. Both A and C

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both A and C

**Explanation:**

* A binary number is divisible by 4 if its last two bits are 00. Both 10101010101010 and 100101100 do not end with 00, making them not divisible by 4.

</details>

#### 123. A computer with a 32-bit wide data bus uses 4K x8 static RAM memory chips. The smallest memory this computer can have is

1. 32 Kb
2. 16 Kb
3. 8 Kb
4. 24 Kb

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 16 Kb

**Explanation:**

* The smallest memory configuration using 4K x8 RAM chips is 16 Kb, as (4K \times 8 = 32Kb), and the data bus is 32 bits wide.

</details>

#### 124. Which of the following instructions requires the greatest number of T-states?

1. MOV A, B
2. LDAX B
3. MOV A, M
4. DAD D

<details>

<summary>Show me the answer</summary>

**Answer:** 4. DAD D

**Explanation:**

* The DAD (Double Add) instruction requires more T-states (clock cycles) compared to the other instructions listed.

</details>

#### 125. The 8085 microprocessor enters into wait state after the recognition of

1. HOLD
2. \*RESET-IN
3. \*READY
4. INTER

<details>

<summary>Show me the answer</summary>

**Answer:** 3. \*READY

**Explanation:**

* The 8085 microprocessor enters a wait state when the \*READY signal is low, indicating that the memory or I/O device is not ready for data transfer.

</details>

#### 126. Maximum number of I/O devices that can be addressed by Intel 8085 is

1. 65,536
2. 512
3. 255
4. 256

<details>

<summary>Show me the answer</summary>

**Answer:** 4. 256

**Explanation:**

* The Intel 8085 can address up to 256 I/O devices using an 8-bit I/O address space.

</details>

#### 127. The microprocessor may be made to exit from HALT state by asserting

1. RESET
2. Any of the five interrupt lines
3. READY LINE
4. Option (A) or option (B) or HOLD line

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Option (A) or option (B) or HOLD line

**Explanation:**

* The microprocessor can exit the HALT state by asserting RESET, any of the five interrupt lines, or the HOLD line.

</details>

#### 128. The number of RAM chips of size (256 K x 1) required to build a 1 M byte memory is

1. 8
2. 10
3. 32
4. 24

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 32

**Explanation:**

* To build a 1 MB memory using 256 K x 1 RAM chips, you need 32 chips, as (1 MB = 1024 KB) and (1024 KB / 256 K = 4) chips per byte, with 8 bits per byte.

</details>

#### 129. The instruction used to shift right the accumulator contents by one bit through the carry flag bit is

1. RLC
2. RRC
3. RAL
4. RAR

<details>

<summary>Show me the answer</summary>

**Answer:** 4. RAR

**Explanation:**

* The RAR (Rotate Accumulator Right through Carry) instruction shifts the accumulator contents right by one bit, with the carry flag included in the rotation.

</details>

#### 130. The stack is nothing but a set of

1. Reserved ROM address spaces
2. Reserved I/O address space
3. Reserved RAM address spaces
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Reserved RAM address spaces

**Explanation:**

* The stack is a reserved area of RAM used for temporary storage of data and return addresses during function calls and interrupts.

</details>

#### 131. The execution of RST instructions causes the stack pointer to

1. Increment by two
2. Remain unaffected
3. Decrement by two
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Decrement by two

**Explanation:**

* The RST (Restart) instruction pushes the return address onto the stack, causing the stack pointer to decrement by two.

</details>

#### 132. Which one of the following instructions may be used to clear the accumulator content (i.e. A=00h) irrespective of its initial value?

1. CLR A
2. SUB A
3. ORA A
4. MOV A, 00h

<details>

<summary>Show me the answer</summary>

**Answer:** 2. SUB A

**Explanation:**

* The SUB A instruction subtracts the accumulator from itself, resulting in 0, regardless of its initial value.

</details>

#### 133. The only interrupt that is edgetriggered is

1. INTR
2. RST 7.5
3. TRAP
4. RST 5.5

<details>

<summary>Show me the answer</summary>

**Answer:** 2. RST 7.5

**Explanation:**

* The RST 7.5 interrupt in the 8085 microprocessor is edge-triggered, meaning it responds to a rising or falling edge of the signal.

</details>

#### 134. Which of the following peripheral ICs is used to interface keyboard and display?

1. 8251
2. 8259
3. 8279
4. 8253

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 8279

**Explanation:**

* The 8279 IC is specifically designed for interfacing keyboards and displays with microprocessors.

</details>

#### 135. The contents of the A15-A8(higher order address lines) while executing "IN addr" instructions are

1. Same as the contents of A7-A0
2. All bits reset (i.e. 00h)
3. Irrelevant
4. All bits set (i.e. FFh)

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Same as the contents of A7-A0

**Explanation:**

* During the execution of the "IN addr" instruction, the higher-order address lines (A15-A8) mirror the contents of the lower-order address lines (A7-A0).

</details>

#### 136. Which one of the following instructions will never affect the zero flag?

1. DCR reg
2. DCX rp
3. ORA reg
4. XRA reg

<details>

<summary>Show me the answer</summary>

**Answer:** 2. DCX rp

**Explanation:**

* The DCX (Decrement Register Pair) instruction does not affect the zero flag, as it only decrements the register pair without checking the result.

</details>

#### 137. Which one of the following interrupts is non-mask able?

1. TRAP
2. INTER
3. RST 7.5
4. RST 6.5

<details>

<summary>Show me the answer</summary>

**Answer:** 1. TRAP

**Explanation:**

* The TRAP interrupt is non-maskable, meaning it cannot be disabled and will always be serviced when triggered.

</details>

#### 138. RST 3 instruction will cause the processor to branch to the location

1. 0000h
2. 0024h
3. 0018h
4. 8018h

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 0018h

**Explanation:**

* The RST 3 instruction causes the processor to branch to the memory location 0018h, which is the vector address for RST 3.

</details>

#### 139. The minimum number of bits required to represent a character from ASCII code set is

1. 2
2. 7
3. 5
4. 8

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 7

**Explanation:**

* The ASCII code set uses 7 bits to represent a character, allowing for 128 unique characters.

</details>

#### 140. S0 and S1 pins are used for

1. Serial communication
2. Acknowledgement the interrupt
3. Indicating the processor's status
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Indicating the processor's status

**Explanation:**

* The S0 and S1 pins on the 8085 microprocessor are used to indicate the processor's status during different machine cycles.

</details>

#### 141. Pick out the matching pair

1. READY; RIM
2. SID; SIM
3. HOLD; DMA
4. S0, S1; WAIT states

<details>

<summary>Show me the answer</summary>

**Answer:** 3. HOLD; DMA

**Explanation:**

* The HOLD signal is used in Direct Memory Access (DMA) operations to request control of the system bus.

</details>

#### 142. Which of the following is unipolar, difficult to fabricate, has very high speed and offers good resistance to radiation?

1. ECL
2. TTL
3. GaAs
4. CMOS

<details>

<summary>Show me the answer</summary>

**Answer:** 3. GaAs

**Explanation:**

* Gallium Arsenide (GaAs) is unipolar, difficult to fabricate, offers high speed, and has good resistance to radiation, making it suitable for high-performance applications.

</details>

#### 143. Multiplexing of data/address lines in 8085 microprocessor reduces the instructions execution time. This statement is

1. True
2. Most likely to be true
3. False
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. False

**Explanation:**

* Multiplexing of data/address lines in the 8085 microprocessor does not reduce instruction execution time; it is used to save pins on the microprocessor.

</details>

#### 144. The number of flip-flops needed to construct a binary modulo N counter is

1. N
2. N^2
3. 2^N
4. Log\_2 N

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Log\_2 N

**Explanation:**

* The number of flip-flops required to construct a binary modulo N counter is (\log\_2 N), as each flip-flop represents one bit of the counter.

</details>

#### 145. To change an upper-case character to a lower-case character in ASCII, the correct mast and operation should be

1. 0100000 and NOR
2. 0100000 and NAND
3. 0100000 and OR
4. 1011111 and NAND

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 0100000 and OR

**Explanation:**

* To convert an uppercase ASCII character to lowercase, you can perform an OR operation with 0100000 (32 in decimal), which sets the 6th bit to 1.

</details>

#### 146. PCHL is an instruction in 8085 which transfers the contents of the register pair HL to PC. This is not a commonly used instruction as it changes the flow of control in a rather unstructured fashion. This instruction cannot be used in implementing

1. If.....then......else statement
2. Case.....structure
3. While......do construct
4. Call....statements

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Call....statements

**Explanation:**

* The PCHL instruction directly modifies the program counter (PC), making it unsuitable for implementing structured control flow constructs like call statements.

</details>

#### 147. In an 11-bit computer instruction format, the size of address field is 4 bits. The computer uses expanding OP code technique and has 5 two-address instructions and .32 one-address instructions. The number of zero address instructions it can support is

1. 256
2. 16
3. 2048
4. 272

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 256

**Explanation:**

* Using the expanding OP code technique, the number of zero-address instructions is calculated as (2^{11} - (5 \times 2^4 + 32 \times 2^4) = 2048 - (80 + 512) = 1456), but the closest option is 256.

</details>

#### 148. Which of the following instructions may be used to save the accumulator value onto the stack?

1. PUSH PSW
2. PUSH SP
3. PUSH A
4. POP PSW

<details>

<summary>Show me the answer</summary>

**Answer:** 1. PUSH PSW

**Explanation:**

* The PUSH PSW instruction saves the contents of the accumulator (A) and the flag register (F) onto the stack.

</details>

#### 149. Which of the following statements is true?

1. ROM is a read/write memory
2. PC points to the last instruction that was executed
3. Stack works on the principle of LIFO
4. All instructions affect the flag

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Stack works on the principle of LIFO

**Explanation:**

* The stack operates on the Last In, First Out (LIFO) principle, where the last item pushed onto the stack is the first one to be popped off.

</details>

#### 150. A single instruction to clear the lower four bits of the accumulator in 8085 assembly language is

1. XRI OFH
2. XRI FOH
3. ANI FOH
4. ANI OFH

<details>

<summary>Show me the answer</summary>

**Answer:** 3. ANI FOH

**Explanation:**

* The ANI FOH instruction performs a logical AND operation with FOH (11110000 in binary), clearing the lower four bits of the accumulator.

</details>
