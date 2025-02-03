# set-4

#### 151. In a vectored interrupt

1. The branch address is assigned to a fixed location in memory.
2. The interrupting source supplies the branch information to the processor through an interrupt vector.
3. The branch address is obtained from a register in the processor.
4. None of the above.

<details>

<summary>Show me the answer</summary>

**Answer:** 2. The interrupting source supplies the branch information to the processor through an interrupt vector.

**Explanation:**

* In a vectored interrupt, the interrupting device provides the address of the interrupt service routine (ISR) to the processor, allowing the processor to jump directly to the correct ISR.

</details>

#### 152. A sequence of two instructions that multiplies the contents of the DE register pair by 2 and stores the result in the HL register pair (in 8085 assembly language) is

1. XCHG and DAD B
2. XTHL and DAD H
3. PCHL and DAD D
4. XCHG and DAD H

<details>

<summary>Show me the answer</summary>

**Answer:** 4. XCHG and DAD H

**Explanation:**

* `XCHG` swaps the contents of the DE and HL register pairs, and `DAD H` adds the HL register pair to itself, effectively multiplying it by 2.

</details>

#### 153. The most relevant addressing mode to write position-independent code is

1. Direct mode
2. Relative mode
3. Indirect mode
4. Indexed mode

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Relative mode

**Explanation:**

* Relative addressing mode uses offsets from the current program counter, making the code position-independent.

</details>

#### 154. Which of the following are CISC machines?

1. IBM 360
2. 68030
3. 80386
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* IBM 360, 68030, and 80386 are all examples of CISC (Complex Instruction Set Computing) architectures.

</details>

#### 155. The working of a staircase switch is a typical example of the logical operation

1. OR
2. Exclusive-OR
3. NOR
4. Exclusive-NOR

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Exclusive-OR

**Explanation:**

* A staircase switch works on the principle of XOR logic, where the output changes state when either of the inputs changes.

</details>

#### 156. Which of the following are typical characteristics of a RISC machine?

1. Instruction taking multiple cycles
2. Multiple register sets
3. Highly pipelined
4. Both 2 and 3

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both 2 and 3

**Explanation:**

* RISC machines typically have multiple register sets and are highly pipelined to improve performance.

</details>

#### 157. A microprogrammed control unit

1. Is faster than a hardwired control unit
2. Facilitates easy implementation of new instructions
3. Is useful when very small programs are to be run
4. Usually refers to the control unit of a microprocessor

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Facilitates easy implementation of new instructions

**Explanation:**

* A microprogrammed control unit allows for easier modification and addition of new instructions compared to hardwired control units.

</details>

#### 158. Parallel printer uses

1. RS-232C interfaces
2. Handshake mode
3. Centronics interface
4. Both 2 and 3

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both 2 and 3

**Explanation:**

* Parallel printers typically use the Centronics interface and handshake mode for communication.

</details>

#### 159. The ASCII code 56 represents the character

1. V
2. A
3. 8
4. Carriage return

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 8

**Explanation:**

* The ASCII code 56 corresponds to the character '8'.

</details>

#### 160. The number of possible Boolean functions that can be defined for n Boolean variables over n-valued Boolean algebra is

1. ( 2^{n^2} )
2. ( 2^{n^2} )
3. ( n^{2^n} )
4. ( n^{n^2} )

<details>

<summary>Show me the answer</summary>

**Answer:** 4. ( n^{n^2} )

**Explanation:**

* The number of possible Boolean functions for n variables is ( n^{n^2} ).

</details>

#### 161. The advantage of a single bus over a multi-bus is the

1. Low cost
2. Flexibility in attaching peripheral devices
3. Both 1 and 2
4. High operating speed

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Both 1 and 2

**Explanation:**

* A single bus is cheaper and more flexible in attaching peripheral devices compared to a multi-bus system.

</details>

#### 162. Which of the following rules regarding the addition of 2 given numbers is correct, if negative numbers are represented in 2's complement form?

1. Add sign bit and discard carry, if any.
2. Add sign bit and add carry, if any.
3. Do not add sign bit and discard carry, if any.
4. Do not add sign bit and add carry, if any.

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Add sign bit and discard carry, if any.

**Explanation:**

* In 2's complement addition, the sign bit is added, and any carry is discarded.

</details>

#### 163. When INTR is encountered, the processor branches to the memory location, which is

1. 0024H
2. Determined by the "call address" instruction issued by the I/O device
3. Determined by the "RST N" instructions issued by the I/O device
4. Both 2 and 3

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both 2 and 3

**Explanation:**

* The processor branches to a memory location determined by either a "call address" instruction or an "RST N" instruction.

</details>

#### 164. In which of the following instructions does bus idle situation occur?

1. EI
2. INX H
3. DAD rp
4. DAA

<details>

<summary>Show me the answer</summary>

**Answer:** 3. DAD rp

**Explanation:**

* The `DAD rp` instruction causes the bus to idle while the addition operation is performed.

</details>

#### 165. Any instruction should have at least

1. 2 operands
2. 3 operands
3. 1 operand
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. None of the above

**Explanation:**

* Some instructions, like `NOP`, do not require any operands.

</details>

#### 166. If the cache needs an access time of 20ns and the main memory 120 ns, then the average access time of a CPU is (assume hit-ratio is 80%)

1. 30ns
2. 35ns
3. 40ns
4. 45ns

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 40ns

**Explanation:**

* The average access time is calculated as: ( (0.8 \times 20) + (0.2 \times 120) = 40ns ).

</details>

#### 167. The number of clock cycles necessary to complete 1 fetch cycle in 8085 (excluding wait state) is

1. 3 or 4
2. 4 or 6
3. 4 or 5
4. 3 or 5

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 4 or 6

**Explanation:**

* The fetch cycle in 8085 typically takes 4 or 6 clock cycles, depending on the instruction.

</details>

#### 168. The seek time of a disk is 30ms. It rotates at the rate of 30 rotations per second. Each track has a capacity of 300 words. The access time is approximately

1. 47ms
2. 60ms
3. 50ms
4. 62ms

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 47ms

**Explanation:**

* The access time is the sum of seek time, rotational latency, and transfer time. Rotational latency is ( \frac{1}{2} \times \frac{1}{30} \times 1000 = 16.67ms ), and transfer time is negligible. Thus, total access time is ( 30 + 16.67 \approx 47ms ).

</details>

#### 169. Motorola's 68040 is comparable to

1. 8085
2. 80386
3. 80286
4. 80486

<details>

<summary>Show me the answer</summary>

**Answer:** 4. 80486

**Explanation:**

* The Motorola 68040 is comparable to Intel's 80486 in terms of performance and features.

</details>

#### 170. The possible number of Boolean functions of 3 variables X, Y, and Z such that f(X, Y, Z) = F(X', Y', Z') is

1. 8
2. 64
3. 16
4. 32

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 16

**Explanation:**

* The number of such Boolean functions is ( 2^{2^{3-1\}} = 16 ).

</details>

#### 171. Which of the following interrupts is both level and edge sensitive?

1. RST 5.5
2. RST 7.5
3. INTR
4. TRAP

<details>

<summary>Show me the answer</summary>

**Answer:** 4. TRAP

**Explanation:**

* The TRAP interrupt is both level and edge sensitive.

</details>

#### 172. The difference between 80486 and 80386 is/are

1. Presence of floating-point co-processor
2. Speed of operation
3. Presence of 8 K cache on chip
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* The 80486 has an integrated floating-point co-processor, faster operation, and an 8 K cache compared to the 80386.

</details>

#### 173. The addressing mode used in the instruction PUSH B is

1. Direct
2. Register direct
3. Register
4. Immediate

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Register direct

**Explanation:**

* The `PUSH B` instruction uses register direct addressing mode.

</details>

#### 174. Which of the following architecture is/are not suitable for realizing SIMD?

1. Vector processor
2. Von Neumann
3. Array processor
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Von Neumann

**Explanation:**

* The Von Neumann architecture is not suitable for SIMD (Single Instruction, Multiple Data) operations.

</details>

#### 175. The total number of possible Boolean functions involving 'n' Boolean variables is

1. Infinitely many
2. ( n^2 )
3. ( n^n )
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. None of the above

**Explanation:**

* The total number of Boolean functions for n variables is ( 2^{2^n} ).

</details>

#### 176. If ((11A1B)\_8 = (12C9)\_16) (C stands for decimal 12), then the value of A and B are:

1. 5,1
2. 5,7
3. 7,5
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. None of the above

**Explanation:**

* The correct values of A and B are 7 and 5, respectively.

</details>

#### 177. Which of the following operations(s) is/are not closed as regards to computers?

1. Addition
2. Multiplication
3. Subtraction
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* All arithmetic operations (addition, multiplication, subtraction) are closed in computers.

</details>

#### 178. Which of the following units can be used to measure the speed of a computer?

1. SYPS
2. FLOPS
3. MIPS
4. Both 2 and 3

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both 2 and 3

**Explanation:**

* FLOPS (Floating Point Operations Per Second) and MIPS (Million Instructions Per Second) are used to measure computer speed.

</details>

#### 179. If A XOR B = C, THEN

1. A XOR B = B
2. A XOR B XOR C = 0
3. B XOR C = A
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* All the given statements are true based on the properties of XOR.

</details>

#### 180. Addressing capability of 8086/88 are

1. 64 K
2. 2 MB
3. 512 K
4. 1 MB

<details>

<summary>Show me the answer</summary>

**Answer:** 4. 1 MB

**Explanation:**

* The 8086/88 can address up to 1 MB of memory.

</details>

#### 181. Bubble memories are preferable to floppy disks because

1. Of their higher transfer rate
2. Of their reliability
3. They consume less power
4. Both 2 and 3

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both 2 and 3

**Explanation:**

* Bubble memories are more reliable and consume less power compared to floppy disks.

</details>

#### 182. The XOR operation is

1. Commutative
2. Associative
3. Both 1 and 2
4. Distributive over AND operator

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Both 1 and 2

**Explanation:**

* The XOR operation is both commutative and associative.

</details>

#### 183. Which of the following logic families is well suited for high-speed operation?

1. TTL
2. MOS
3. ECL
4. CMOS

<details>

<summary>Show me the answer</summary>

**Answer:** 3. ECL

**Explanation:**

* ECL (Emitter-Coupled Logic) is known for its high-speed operation.

</details>

#### 184. Which of the following does not have 8 data lines?

1. 8085
2. 8088
3. 8086
4. Z-80

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 8086

**Explanation:**

* The 8086 has a 16-bit data bus, unlike the others which have 8 data lines.

</details>

#### 185. Negative numbers cannot be represented in

1. Signed magnitude form
2. 2's complement form
3. 1's complement form
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. None of the above

**Explanation:**

* Negative numbers can be represented in signed magnitude, 1's complement, and 2's complement forms.

</details>

#### 186. The addressing mode used in an instruction of the form ADD X, Y is

1. Absolute
2. Index
3. Indirect
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Absolute

**Explanation:**

* The instruction `ADD X, Y` uses absolute addressing mode.

</details>

#### 187. Which of the following are registers?

1. Accumulator
2. Program counter
3. Stack pointer
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* Accumulator, program counter, and stack pointer are all registers.

</details>

#### 188. IBM developed a bus standard for their line of computers ‘PC AT’ called\_\_\_\_\_\_.

1. IB bus
2. ISA
3. M-bus
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. ISA

**Explanation:**

* IBM developed the ISA (Industry Standard Architecture) bus for the PC AT.

</details>

#### 189. Which of the following is the programmable internal timer?

1. 8251
2. 8253
3. 8250
4. 8275

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 8253

**Explanation:**

* The 8253 is a programmable interval timer.

</details>

#### 190. Bipolar devices are desirable in the fabrication of which of the following components?

1. Main memory
2. Microprogram memory
3. Cache memory
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* Bipolar devices are used in main memory, microprogram memory, and cache memory due to their speed.

</details>

#### 191. A+B can be implemented by

1. NAND gates alone
2. NOR gate alone
3. Both 1 and 2
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Both 1 and 2

**Explanation:**

* Both NAND and NOR gates are universal gates and can implement any logic function, including A+B.

</details>

#### 192. Which of the following are the correct statements?

1. Bus is a group of information-carrying wires
2. Bus is needed to achieve reasonable speed of operation
3. Bus can carry data or address lines, a bus can be shared by more than one device
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* All the statements about buses are correct.

</details>

#### 193. A number system uses 20 as the radix. The excess code that is necessary for its equivalent binary-coded representation is

1. 4
2. 6
3. 5
4. 7

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 6

**Explanation:**

* The excess code required for a radix of 20 is 6.

</details>

#### 194. Any given truth table can be represented by a

1. Karnaugh map
2. Sum of product of Boolean expressions
3. Product of sum of Boolean expressions
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* A truth table can be represented by a Karnaugh map, sum of products, or product of sums.

</details>

#### 195. Which of the following remarks about PLA is/are true?

1. It produces product of sum as the output
2. It produces sum of products as the output
3. It is general
4. Both 2 and 3

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both 2 and 3

**Explanation:**

* A PLA (Programmable Logic Array) produces sum of products and is a general-purpose logic device.

</details>

#### 196. The first operating system used in microprocessor is

1. Zenix
2. CP/M
3. DOS
4. Multics

<details>

<summary>Show me the answer</summary>

**Answer:** 2. CP/M

**Explanation:**

* CP/M (Control Program for Microcomputers) was the first operating system used in microprocessors.

</details>

#### 197. Which of the following does not need extra hardware for DRAM refreshing?

1. 8085
2. Z-80
3. Motorola-6800
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Z-80

**Explanation:**

* The Z-80 has built-in DRAM refresh circuitry, so it does not require extra hardware.

</details>

#### 198. The advantage of MOS devices over bipolar devices is

1. It allows higher bit densities and also cost-effective
2. It is easy to fabricate
3. Its higher impedance
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* MOS devices are cost-effective, easy to fabricate, and have higher impedance compared to bipolar devices.

</details>

#### 199. Which of the following comments about the Program Counter (PC) are true?

1. It is a register
2. It is a cell in ROM
3. During execution of the current instruction, its content changes
4. Both 1 and 3

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both 1 and 3

**Explanation:**

* The Program Counter (PC) is a register, and its content changes during the execution of instructions.

</details>

#### 200. Choose the correct statements from the following

1. By scanning a bit pattern, one can say whether it represents data or form
2. Whether a given piece of information is data or not depends on the particular applications
3. Positive number cannot be represented in 1's complement form
4. Both 2 and 3

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both 2 and 3

**Explanation:**

* The nature of data depends on the application, and positive numbers can be represented in 1's complement form.

</details>
