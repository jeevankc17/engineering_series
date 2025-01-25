# set-7

#### 301. A certain processor supports only the immediate and the direct addressing modes. Which of the following programming language features cannot be implemented on this pointer?

1. Pointers
2. Records
3. Arrays
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* Without indirect addressing, features like pointers, records, and arrays cannot be fully implemented.

</details>

#### 302. The 8085 microprocessor responds to the presence of an interrupt:

1. As soon as the TRAP pin becomes high
2. By checking the TRAP pin for high status at the end of each instruction fetch
3. By checking the TRAP pin for high status at the end of the execution of each instruction
4. By checking the TRAP pin for high status at regular intervals

<details>

<summary>Show me the answer</summary>

**Answer:** 3. By checking the TRAP pin for high status at the end of the execution of each instruction

**Explanation:**

* The 8085 checks the TRAP pin at the end of each instruction execution to detect interrupts.

</details>

#### 303. Which of the following need not necessarily be saved on a context switch between processes?

1. General purpose registers
2. Program counter
3. Translation look aside buffer
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Translation look aside buffer

**Explanation:**

* The Translation Lookaside Buffer (TLB) is not necessarily saved during a context switch.

</details>

#### 304. If a processor does not have any stack pointer register then:

1. It cannot have subroutine call instruction
2. It can have subroutine call instruction, but no nested subroutine calls
3. Nested subroutine calls are possible, but interrupts are not
4. All sequence of subroutine calls and also interrupts are possible

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All sequence of subroutine calls and also interrupts are possible

**Explanation:**

* Even without a stack pointer, subroutine calls and interrupts can be managed using other mechanisms.

</details>

#### 305. CPU has two modes-privileged and non-privileged. In order to change the mode from privileged to non-privileged:

1. A hardware interrupt is needed
2. A software interrupt is needed
3. A privileged instruction (which does not generate an interrupt) is needed
4. A non-privileged instruction (which does not generate an interrupt) is needed

<details>

<summary>Show me the answer</summary>

**Answer:** 3. A privileged instruction (which does not generate an interrupt) is needed

**Explanation:**

* A privileged instruction is required to switch from privileged to non-privileged mode.

</details>

#### 306. In the absolute addressing mode:

1. An operand is inside the instruction
2. Address of the operand is inside the instruction
3. Register containing the address of the operand is specified inside the instruction
4. Location of the operand is implicit

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Address of the operand is inside the instruction

**Explanation:**

* In absolute addressing mode, the instruction contains the direct address of the operand.

</details>

#### 307. The capacity of program counter (PC) is:

1. 8 bits
2. 16 bits
3. 12 bits
4. 32 bits

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 16 bits

**Explanation:**

* The program counter (PC) in many microprocessors is 16 bits wide.

</details>

#### 308. The function of program counter (PC) holds:

1. Temporary
2. Memory operand
3. Address for memory
4. Address for instruction

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Address for instruction

**Explanation:**

* The program counter holds the address of the next instruction to be executed.

</details>

#### 309. The Program Counter (PC):

1. Is a register
2. During execution of the current instruction, its content changes
3. Both (A) and (B)
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Both (A) and (B)

**Explanation:**

* The PC is a register, and its content changes during instruction execution.

</details>

#### 310. The TRAP interrupt mechanism of the 8085 microprocessor executes:

1. An RST by hardware
2. The instructions supplied by external device through the INTA signal
3. An instruction from memory location 20H
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. An RST by hardware

**Explanation:**

* The TRAP interrupt executes an RST (Restart) instruction by hardware.

</details>

#### 311. Pseudo-instructions are:

1. Assembler directives
2. Instructions in any program that have no corresponding machine code instruction
3. Instruction in any program whose presence or absence will not change the output for any input
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Assembler directives

**Explanation:**

* Pseudo-instructions are assembler directives that do not translate directly into machine code.

</details>

#### 312. “The number of instructions needed to add ‘n’ numbers and store the result in memory using only one address instructions is:

1. n
2. n-1
3. n+1
4. Independent of n

<details>

<summary>Show me the answer</summary>

**Answer:** 3. n+1

**Explanation:**

* Adding $$n$$ numbers requires $$n$$ instructions, and one additional instruction to store the result.

</details>

#### 313. The addressing mode used in the instruction PUSH B is:

1. Direct
2. Register indirect
3. Register
4. Immediate

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Register indirect

**Explanation:**

* The PUSH B instruction uses register indirect addressing to push the contents of the B register onto the stack.

</details>

#### 314. The process of fetching and executing instructions one at a time, in order to increasing an address is called:

1. Instruction execution
2. Instruction fetch
3. Straight line sequencing
4. Random sequencing

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Straight line sequencing

**Explanation:**

* Straight line sequencing refers to executing instructions in a linear, sequential manner.

</details>

#### 315. The CPU of a computer takes instruction from the memory and executes them. This process is called:

1. Load cycle
2. Fetch-execute cycle
3. Time sequence
4. Clock cycle

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Fetch-execute cycle

**Explanation:**

* The fetch-execute cycle is the process by which the CPU retrieves and executes instructions.

</details>

#### 316. In a microprocessor, WAIT states are used to:

1. Make the processor wait during a DMA operation
2. Make the processor wait during a power interrupt processing
3. Make the processor wait during a power shutdown
4. Interface slow peripheral to the processor

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Interface slow peripheral to the processor

**Explanation:**

* WAIT states are used to synchronize the processor with slower peripherals.

</details>

#### 317. When a program is being executed in an 8085 microprocessor, its program counter contains:

1. Number of instructions in the current program that have already been executed
2. The total number of instructions in the program being executed
3. Memory address of the instructions that is being currently executed
4. Memory address of the instructions that is to be executed next

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Memory address of the instructions that is to be executed next

**Explanation:**

* The program counter holds the address of the next instruction to be executed.

</details>

#### 318. When the HLT instructions of an 8085 microprocessor is executed, the microprocessor:

1. Is disconnected from the system bus till the reset is pressed
2. Halts execution of the program and returns to monitor
3. Enters into a halt-state and the buses are tri-stated
4. Reloads the program from the location 0024 and 0025

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Enters into a halt-state and the buses are tri-stated

**Explanation:**

* The HLT instruction stops the processor and tri-states the buses.

</details>

#### 319. Serial input data of 8085 can be loaded into bit 7 of the accumulator by:

1. Executing a RIM instruction
2. Using TRAP
3. Executing RST 1
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Executing a RIM instruction

**Explanation:**

* The RIM (Read Interrupt Mask) instruction loads serial input data into bit 7 of the accumulator.

</details>

#### 320. Which of the following interrupts are unmaskable interrupts?

1. RST 5.5
2. TRAP
3. RST 7.5
4. INTR 1

<details>

<summary>Show me the answer</summary>

**Answer:** 2. TRAP

**Explanation:**

* The TRAP interrupt is non-maskable and cannot be disabled.

</details>

#### 321. The memory address ranges to which RAM will respond:

1. 0000 H to 1 FFF H
2. 4000 H to 5 FFF H
3. 0000 H to 5 FFF H
4. 3000 H to FFFF H

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 4000 H to 5 FFF H

**Explanation:**

* The RAM responds to addresses within the range 4000 H to 5 FFF H.

</details>

#### 322. The address range to which I/O chip will respond is:

1. 0000 H to FFFF H
2. 4000H to 5FFF H
3. 0000H to 5FFFH
4. 3000 H to FFFF H

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 0000H to 5FFFH

**Explanation:**

* The I/O chip responds to addresses within the range 0000 H to 5 FFF H.

</details>

#### 323. Both the arithmetic logic unit (ALU) and control section of CPU employ special purpose storage location called:

1. Decoder
2. Multiplexer
3. Buffers
4. Registers

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Registers

**Explanation:**

* Registers are used for temporary storage in the ALU and control unit.

</details>

#### 324. A basic instruction that can be interpreted by a computer generally has:

1. An operand and an address
2. Sequence register and decoder
3. A decoder and an accumulator
4. An address and decoder

<details>

<summary>Show me the answer</summary>

**Answer:** 1. An operand and an address

**Explanation:**

* A basic instruction typically consists of an operand and an address.

</details>

#### 325. The differences between PLA and ROM is:

1. PLA is combination ROM is sequential
2. PLA economizes on the number of minterms
3. PLA has fixed AND array, ROM has fixed OR array
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. PLA economizes on the number of minterms

**Explanation:**

* PLA (Programmable Logic Array) reduces the number of minterms compared to ROM.

</details>

#### 326. The control unit of computer:

1. Performs ALU operations on the data
2. Controls the operation of the output devices
3. Is a device for manually operating the computer
4. Directs the other unit of computers

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Directs the other unit of computers

**Explanation:**

* The control unit directs the operations of other units in the computer.

</details>

#### 327. The ALU of a computer normally contains a number of high-speed storage elements called:

1. Semiconductor memory
2. Hard disk
3. Registers
4. Magnetic disks

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Registers

**Explanation:**

* The ALU uses registers for high-speed storage of data.

</details>

#### 328. The unit of a computer system which executes program, communication with and often controls the operation of other subsystems of the computer is the:

1. CPU
2. I/O unit
3. Control unit
4. Peripheral unit

<details>

<summary>Show me the answer</summary>

**Answer:** 1. CPU

**Explanation:**

* The CPU (Central Processing Unit) executes programs and controls other subsystems.

</details>

#### 329. The ability of a medium size computer system to increase in data processing capability by addition of such devices as mass storage device, I/O device etc. is called:

1. Computer expandability
2. Computer enhancement
3. Computer mobility
4. Computer upward capability

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Computer expandability

**Explanation:**

* Computer expandability refers to the ability to increase processing capability by adding devices.

</details>

#### 330. The technique which repeatedly uses the same block of internal storage during different stage of problem is called:

1. Overlay
2. Swapping
3. Overlapping
4. Reuse

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Overlay

**Explanation:**

* Overlay is a technique where the same memory block is reused for different stages of a program.

</details>

#### 331. The registers used as a working area in CPU is:

1. Program counter
2. Instruction decoder
3. Instruction register
4. Accumulator

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Accumulator

**Explanation:**

* The accumulator is a working register used for arithmetic and logic operations.

</details>

#### 332. Which of the following information holds the information before going to the decoder?

1. Control register
2. Accumulator
3. Data register
4. Address register

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Data register

**Explanation:**

* The data register holds information before it is sent to the decoder.

</details>

#### 333. Which of the following unit is used to supervise each instruction in the CPU?

1. Control logic unit
2. ALU
3. Accumulator
4. Control register

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Control logic unit

**Explanation:**

* The control logic unit supervises the execution of each instruction in the CPU.

</details>

#### 334. The bus which is used to transfer data from main memory to peripheral device is:

1. Data bus
2. DMA bus
3. Input bus
4. Output bus

<details>

<summary>Show me the answer</summary>

**Answer:** 2. DMA bus

**Explanation:**

* The DMA (Direct Memory Access) bus is used for transferring data between memory and peripherals.

</details>

#### 335. The device which is used to connect a peripheral to bus is called:

1. Control register
2. Communication protocol
3. Interface
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Interface

**Explanation:**

* An interface connects peripherals to the bus.

</details>

#### 336. The bus connected between the CPU and main memory that permits transfer of information between main memory and the CPU is called:

1. DMA bus
2. Address bus
3. Memory bus
4. Control bus

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Memory bus

**Explanation:**

* The memory bus facilitates data transfer between the CPU and main memory.

</details>

#### 337. What is the storage capacity of a Hollerith card which is organized into nibbles?

1. 32
2. 120
3. 64
4. 240

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 120

**Explanation:**

* A Hollerith card organized into nibbles can store 120 bits of data.

</details>

#### 338. How many addresses are required for 25x40 video RAM?

1. 1020
2. 1000
3. 1920
4. 2000

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 1000

**Explanation:**

* A 25x40 video RAM requires 1000 addresses (25 rows x 40 columns).

</details>

#### 339. Microprogramming is a technique for:

1. Writing small program effectively
2. Programming output/input routines
3. Programming the microprocessor
4. Programming the control steps of a computer

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Programming the control steps of a computer

**Explanation:**

* Microprogramming is used to program the control steps of a computer.

</details>

#### 340. A device that works in conjunction with a computer but not as part of it is called:

1. Microprocessor
2. Hardware
3. Peripheral device
4. Memory

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Peripheral device

**Explanation:**

* A peripheral device works with a computer but is not part of the core system.

</details>

#### 341. A system of letters, numbers symbols adopted by computer manufacture as an abbreviation form of instruction sets is called

1. Mesh
2. Modern
3. Monitor
4. Mnemonic

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Mnemonic

**Explanation:**

* Mnemonics are symbolic representations of instructions used in assembly language programming.

</details>

#### 342. When a subroutine is called, then address of the instruction following the CALL instruction is stored in/on the

1. Stack pointer
2. Program counter
3. Accumulator
4. Stack

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Stack

**Explanation:**

* When a subroutine is called, the return address (the address of the instruction following the CALL) is stored on the stack.

</details>

#### 343. In 8085 microprocessors, the value of the most significant bit of the result following the execution of any arithmetic or Boolean instruction is stored in the

1. Carry status flag
2. Sign status flag
3. Auxiliary carry status flag
4. Zero status flag

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Sign status flag

**Explanation:**

* The Sign flag (S) in the 8085 microprocessor stores the value of the most significant bit (MSB) of the result after arithmetic or logical operations.

</details>

#### 344. PLA

1. Produces sum of products as the outputs
2. Is dedicated for a particular operation
3. Is general
4. Both A and B

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both A and B

**Explanation:**

* PLA (Programmable Logic Array) produces sum-of-products outputs and can be dedicated for specific operations.

</details>

#### 345. The sequence of events that happen during a typical fetch operation is

1. PC-MAR-Memory-MDR-IR
2. PC-Memory-IR
3. PC-Memory-MDR-IR
4. PC-MAR-Memory-IR

<details>

<summary>Show me the answer</summary>

**Answer:** 1. PC-MAR-Memory-MDR-IR

**Explanation:**

* During a fetch operation, the Program Counter (PC) sends the address to the Memory Address Register (MAR), which fetches the instruction from memory into the Memory Data Register (MDR), and then the instruction is loaded into the Instruction Register (IR).

</details>

#### 346. Which of the following is not a form of memory?

1. Instruction cache
2. Instruction opcode
3. Instruction register
4. Translation lookaside buffer

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Instruction opcode

**Explanation:**

* Instruction opcode is part of the instruction itself, not a form of memory.

</details>

#### 347. Which memory is difficult to interface with processor?

1. Static memory
2. ROM
3. Dynamic memory
4. RAM

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Dynamic memory

**Explanation:**

* Dynamic memory (DRAM) requires periodic refreshing, making it more complex to interface with the processor compared to static memory.

</details>

#### 348. Desirable characteristic(s) of a memory system is(are)

1. Speed and reliability
2. Durability and compactness
3. Low power consumption
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* A good memory system should be fast, reliable, durable, compact, and consume low power.

</details>

#### 349. The minimum time delay required between initiation of two successive memory operation is called

1. Memory cycle time
2. Transmission time
3. Memory access time
4. Skip time

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Memory cycle time

**Explanation:**

* Memory cycle time is the minimum time required between two successive memory operations.

</details>

#### 350. Which of the following statement is wrong?

1. RAM is a type of volatile
2. Magnetic tape is non-volatile
3. Magnetic core and semiconductor memories are used as mass memory medium
4. An EPROM can be programmed, erased and reprogrammed by user with an EPROM programming instruction

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Magnetic core and semiconductor memories are used as mass memory medium

**Explanation:**

* Magnetic core memory is outdated and not used as a mass memory medium today. Semiconductor memories like DRAM and flash memory are more common.

</details>
