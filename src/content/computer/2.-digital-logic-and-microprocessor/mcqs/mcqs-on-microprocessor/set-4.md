# set-4

### 51. The \_\_\_\_\_\_ bus controller device decodes the signals to produce the control bus signal.

1. Internal
2. External
3. Data
4. Address

<details>

<summary>Show me the answer</summary>

**Answer:** 2. External

**Explanation:**

* In maximum mode, an external bus controller device decodes the encoded control signals (S0, S1, S2) from the 8086 microprocessor to produce the necessary control bus signals for memory and I/O operations.

</details>

### 52. A \_\_\_\_\_\_ Instruction at the end of interrupt service program takes the execution back to the interrupted program.

1. Forward
2. Data
3. Return
4. Line

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Return

**Explanation:**

* A Return (RET) instruction at the end of an interrupt service program takes the execution back to the interrupted program. The RET instruction pops the return address from the stack and transfers control back to the main program.

</details>

### 53. The main concerns of the \_\_\_\_\_\_ are to define a flexible set of commands.

1. Memory interface
2. Both A and B
3. Peripheral interface
4. Control interface

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Memory interface

**Explanation:**

* The main concerns of the memory interface are to define a flexible set of commands for accessing memory. This includes read and write operations, as well as managing memory addresses and data transfers.

</details>

### 54. Primary function of memory interfacing is that they \_\_\_\_\_\_ should be able to read from and write into register.

1. Multiprocessor
2. Dual Processor
3. Microprocessor
4. Coprocessor

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Microprocessor

**Explanation:**

* The primary function of memory interfacing is to allow the microprocessor to read from and write into memory registers. This enables the processor to access data and instructions stored in memory.

</details>

### 55. To perform any operations, the MP should identify the \_\_\_\_\_\_.

1. Register
2. Interface
3. Memory
4. System

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Register

**Explanation:**

* To perform any operations, the microprocessor (MP) must identify the appropriate registers. Registers are used to hold data, addresses, and instructions temporarily during processing.

</details>

### 56. The Microprocessor places \_\_\_\_\_\_ address on the address bus.

1. 4-bit
2. 16-bit
3. 8-bit
4. 32-bit

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 16-bit

**Explanation:**

* The microprocessor places a 16-bit address on the address bus. This address is combined with the segment register to form a 20-bit physical address, allowing the processor to access up to 1 MB of memory.

</details>

### 57. The Microprocessor places 16-bit address on the add lines from that address by \_\_\_\_\_\_ register should be selected.

1. Address
2. Two
3. One
4. Three

<details>

<summary>Show me the answer</summary>

**Answer:** 3. One

**Explanation:**

* The microprocessor places a 16-bit address on the address lines, and from that address, one register should be selected. This register is typically part of the memory or I/O device being accessed.

</details>

### 58. The \_\_\_\_\_\_ of the memory chip will identify and select the register for the EPROM.

1. Internal decoder
2. Address decoder
3. External decoder
4. Data decoder

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Internal decoder

**Explanation:**

* The internal decoder of the memory chip is responsible for identifying and selecting the appropriate register for the EPROM (Erasable Programmable Read-Only Memory). The decoder translates the address into a specific memory location.

</details>

### 59. Microprocessor provides signal like \_\_\_\_\_\_ to indicate the read operation.

1. LOW
2. MCMR
3. MCMW
4. MCMWR

<details>

<summary>Show me the answer</summary>

**Answer:** 2. MCMR

**Explanation:**

* The microprocessor provides a signal like MCMR (Memory Control Read) to indicate a read operation. This signal is used to control the flow of data from memory to the processor during a read operation.

</details>

### 60. To interface memory with the microprocessor, connect register the lines of the address bus must be added to address lines of the \_\_\_\_\_\_ chip.

1. Single
2. Multiple
3. Memory
4. Triple

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Memory

**Explanation:**

* To interface memory with the microprocessor, the lines of the address bus must be connected to the address lines of the memory chip. This allows the processor to access specific memory locations.

</details>

### 61. The remaining address line of \_\_\_\_\_\_ bus is decoded to generate chip select signal.

1. Data
2. Control bus
3. Address
4. Both A and B

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Address

**Explanation:**

* The remaining address lines of the address bus are decoded to generate the chip select signal. This signal is used to select a specific memory chip or I/O device for communication with the processor.

</details>

### 62. \_\_\_\_\_\_ signal is generated by combining RD and WR signals with IO/M.

1. Control
2. Register
3. Memory
4. System

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Control

**Explanation:**

* The control signal is generated by combining the RD (Read) and WR (Write) signals with the IO/M (Input-Output/Memory) signal. This control signal is used to manage data transfer between the processor and memory or I/O devices.

</details>

### 63. Memory is an integral part of a \_\_\_\_\_\_ system.

1. Supercomputer
2. Minicomputer
3. Microcomputer
4. Mainframe computer

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Microcomputer

**Explanation:**

* Memory is an integral part of a microcomputer system. It stores data and instructions that the microprocessor needs to execute programs and perform operations.

</details>

### 64. \_\_\_\_\_\_ has certain signal requirements write into and read from its registers.

1. Memory
2. Both A and B
3. Register
4. Control

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Memory

**Explanation:**

* Memory has certain signal requirements for writing into and reading from its registers. These signals include address lines, data lines, and control signals such as RD (Read) and WR (Write).

</details>

### 65. An \_\_\_\_\_\_ is used to fetch one address.

1. Internal decoder
2. Encoder
3. External decoder
4. Register

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Internal decoder

**Explanation:**

* An internal decoder is used to fetch one address from memory. The decoder translates the address into a specific memory location, allowing the processor to access the desired data or instruction.

</details>

### 66. The primary function of the \_\_\_\_\_\_ is to accept data from I/O devices.

1. Multiprocessor
2. Peripherals
3. Microprocessor
4. Interfaces

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Microprocessor

**Explanation:**

* The primary function of the microprocessor is to accept data from I/O devices. The processor communicates with I/O devices through input/output instructions and control signals.

</details>

### 67. \_\_\_\_\_\_ signal prevents the microprocessor from reading the same data more than once.

1. Pipelining
2. Controlling
3. Handshaking
4. Signaling

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Handshaking

**Explanation:**

* Handshaking signals prevent the microprocessor from reading the same data more than once. These signals ensure proper synchronization between the processor and I/O devices during data transfer.

</details>

### 68. Bits in IRR interrupt are \_\_\_\_\_\_.

1. Reset
2. Stop
3. Set
4. Start

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Set

**Explanation:**

* Bits in the Interrupt Request Register (IRR) are set to indicate pending interrupt requests. When an interrupt occurs, the corresponding bit in the IRR is set, and the processor services the interrupt.

</details>

### 69. \_\_\_\_\_\_ generate interrupt signal to microprocessor and receive acknowledge.

1. Priority resolver
2. Interrupt request register
3. Control logic
4. Interrupt register

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Control logic

**Explanation:**

* The control logic generates the interrupt signal to the microprocessor and receives the acknowledge signal. This logic manages the flow of interrupt requests and ensures proper handling of interrupts.

</details>

### 70. The \_\_\_\_\_\_ pin is used to select direct command word.

1. A0
2. A12
3. D7-D6
4. AD7-AD6

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A0

**Explanation:**

* The A0 pin is used to select the direct command word in the 8086 microprocessor. This pin is part of the address bus and is used to distinguish between different command words during I/O operations.

</details>

### 71. The \_\_\_\_\_\_ is used to connect more microprocessors.

1. Peripheral device
2. I/O devices
3. Cascade
4. Control unit

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Cascade

**Explanation:**

* The cascade mode is used to connect more microprocessors in a system. In this mode, multiple processors can work together, with one acting as the master and the others as slaves.

</details>

### 72. CS connects the output of \_\_\_\_\_\_.

1. Encoder
2. Slave program
3. Decoder
4. Buffer

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Decoder

**Explanation:**

* The Chip Select (CS) signal connects the output of the decoder. The decoder generates the CS signal to select a specific memory chip or I/O device for communication with the processor.

</details>

### 73. In which year, 8086 was introduced?

1. 1978
2. 1977
3. 1979
4. 1981

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 1978

**Explanation:**

* The Intel 8086 microprocessor was introduced in 1978. It was the first 16-bit microprocessor and became the foundation of the x86 architecture, which is still used in modern computers.

</details>

### 74. Expansion for HMOS technology \_\_\_\_\_\_.

1. High level mode oxygen semiconductor
2. High level metal oxygen semiconductor
3. High performance medium oxide semiconductor
4. High performance metal oxide semiconductor

<details>

<summary>Show me the answer</summary>

**Answer:** 4. High performance metal oxide semiconductor

**Explanation:**

* HMOS stands for High-performance Metal Oxide Semiconductor. It is a type of semiconductor technology used in the fabrication of microprocessors, offering high speed and low power consumption.

</details>

### 75. 8086 and 8088 contain \_\_\_\_\_\_ transistors.

1. 29000
2. 34000
3. 24000
4. 54000

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 29000

**Explanation:**

* The Intel 8086 and 8088 microprocessors contain approximately 29,000 transistors. These transistors are used to implement the various functional units of the processor, such as the ALU, control unit, and registers.

</details>

### 76. ALE stands for \_\_\_\_\_\_.

1. Address latch enable
2. Address leak enable
3. Address level enable
4. Address leak extension

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Address latch enable

**Explanation:**

* ALE stands for Address Latch Enable. It is a control signal used in the 8086 microprocessor to latch the address on the address bus during the first clock cycle of a bus cycle.

</details>

### 77. What is DEN?

1. Direct enable
2. Data enable
3. Data entered
4. Data encoding

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Data enable

**Explanation:**

* DEN stands for Data Enable. It is a control signal in the 8086 microprocessor that enables the data bus for data transfer during read or write operations.

</details>

### 78. In 8086, Example for Non-maskable interrupts are \_\_\_\_\_\_.

1. TRAP
2. INTR
3. RST6.5
4. RST6.6

<details>

<summary>Show me the answer</summary>

**Answer:** 1. TRAP

**Explanation:**

* In the 8086 microprocessor, the TRAP interrupt is an example of a non-maskable interrupt (NMI). Non-maskable interrupts cannot be disabled and are used for critical events that require immediate attention.

</details>

### 79. In 8086 the overflow flag is set when \_\_\_\_\_\_.

1. The sum is more than 16 bits.
2. Signed numbers go out of their range after an arithmetic operation.
3. Carry and sign flags are set.
4. Subtraction

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Signed numbers go out of their range after an arithmetic operation.

**Explanation:**

* The Overflow Flag (OF) in the 8086 microprocessor is set when signed numbers go out of their range after an arithmetic operation. This indicates that the result of the operation is too large to be represented in the destination operand.

</details>

### 80. In 8086 microprocessor one of the following statements is not true?

1. Coprocessor is interfaced in max mode.
2. Coprocessor is interfaced in min mode.
3. I/O can be interfaced in max/min mode.
4. Supports pipelining

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Coprocessor is interfaced in min mode.

**Explanation:**

* The statement that a coprocessor is interfaced in minimum mode is not true. Coprocessors, such as the 8087 math coprocessor, are typically interfaced in maximum mode, where additional control signals are available for coprocessor communication.

</details>

### 81. Address line for TRAP is?

1. 0023H
2. 0033H
3. 0024H
4. 0099H

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 0024H

**Explanation:**

* The address line for the TRAP interrupt in the 8086 microprocessor is 0024H. This is the memory location where the interrupt service routine for the TRAP interrupt is stored.

</details>

### 82. Access time is faster for \_\_\_\_\_\_.

1. ROM
2. DRAM
3. SRAM
4. ERAM

<details>

<summary>Show me the answer</summary>

**Answer:** 3. SRAM

**Explanation:**

* Access time is faster for SRAM (Static Random Access Memory) compared to DRAM (Dynamic Random Access Memory) and ROM (Read-Only Memory). SRAM does not require refreshing and provides faster access to data.

</details>

### 83. The First Microprocessor was \_\_\_\_\_\_.

1. Intel 4004
2. 8085
3. 8080
4. 4008

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Intel 4004

**Explanation:**

* The first microprocessor was the Intel 4004, introduced in 1971. It was a 4-bit microprocessor and marked the beginning of the microprocessor revolution.

</details>

### 84. Status register is also called as \_\_\_\_\_\_.

1. Accumulator
2. Counter
3. Stack
4. Flags

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Flags

**Explanation:**

* The status register is also called the flag register. It contains flags that indicate the status of the processor, such as the Carry Flag (CF), Zero Flag (ZF), and Overflow Flag (OF).

</details>

### 85. Which of the following is not a basic element within the microprocessor?

1. Microcontroller
2. Register array
3. Arithmetic logic unit (ALU)
4. Control unit

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Microcontroller

**Explanation:**

* A microcontroller is not a basic element within the microprocessor. The basic elements of a microprocessor include the register array, arithmetic logic unit (ALU), and control unit.

</details>

### 86. Which method bypasses the CPU for certain types of data transfer?

1. Software interrupts
2. Polled I/O
3. Interrupt-driven I/O
4. Direct memory access (DMA)

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Direct memory access (DMA)

**Explanation:**

* Direct Memory Access (DMA) bypasses the CPU for certain types of data transfer. DMA allows peripherals to transfer data directly to and from memory without CPU intervention, improving data transfer speed.

</details>

### 87. Which bus is bidirectional?

1. Address bus
2. Data bus
3. Control bus
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Data bus

**Explanation:**

* The data bus is bidirectional, meaning data can flow in both directions (to and from the processor). The address bus, on the other hand, is unidirectional, as it only carries addresses from the processor to memory or I/O devices.

</details>

### 88. The first microprocessor has a (n) \_\_\_\_\_\_.

1. 1-bit data bus
2. 4-bit data bus
3. 2-bit data bus
4. 8-bit data bus

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 4-bit data bus

**Explanation:**

* The first microprocessor, the Intel 4004, had a 4-bit data bus. This means it could process 4 bits of data at a time, making it suitable for simple calculations and control tasks.

</details>

### 89. Which microprocessor has multiplexed data and address lines?

1. 8086
2. 80386
3. 80286
4. Pentium

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 8086

**Explanation:**

* The Intel 8086 microprocessor has multiplexed data and address lines. The same physical pins are used to carry both address and data information, with the address being latched during the first clock cycle of a bus cycle.

</details>

### 90. Which is not an operand?

1. Variable
2. Memory location
3. Register
4. Assembler

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Assembler

**Explanation:**

* An assembler is not an operand. Operands are the data or memory locations that instructions operate on, such as variables, memory locations, and registers. The assembler is a program that converts assembly language code into machine code.

</details>

### 91. Which is not part of the execution unit (EU)?

1. Arithmetic logic unit (ALU)
2. General registers
3. Clock
4. Flags

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Clock

**Explanation:**

* The clock is not part of the execution unit (EU). The EU includes the Arithmetic Logic Unit (ALU), general registers, and flags, which are used to execute instructions. The clock is an external component that provides timing signals to the processor.

</details>

### 92. 'A 20-bit address bus can locate \_\_\_\_\_\_'.

1. 1,048,576 locations
2. 4,194,304 locations
3. 2,097,152 locations
4. 8,388,608 locations

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 1,048,576 locations

**Explanation:**

* A 20-bit address bus can locate $$2^{20}$$ (1,048,576) memory locations. This allows the processor to address up to 1 MB of memory.

</details>

### 93. Which of the following is not an arithmetic instruction?

1. INC (increment)
2. DEC (decrement)
3. CMP (compare)
4. ROL (rotate left)

<details>

<summary>Show me the answer</summary>

**Answer:** 4. ROL (rotate left)

**Explanation:**

* The ROL (Rotate Left) instruction is not an arithmetic instruction. It is a bitwise operation that rotates the bits of a register or memory location to the left. Arithmetic instructions include INC, DEC, and CMP.

</details>

### 94. During a read operation the CPU fetches \_\_\_\_\_\_.

1. A program instruction
2. Data itself
3. Another address
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* During a read operation, the CPU can fetch a program instruction, data itself, or another address, depending on the context of the operation. The CPU reads data from memory or I/O devices as needed to execute instructions.

</details>

### 95. Which of the following is not an 8086/8088 general-purpose register?

1. Code segment (CS)
2. Stack segment (SS)
3. Data segment (DS)
4. Address segment (AS)

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Address segment (AS)

**Explanation:**

* The Address Segment (AS) is not a general-purpose register in the 8086/8088 microprocessor. The general-purpose registers include AX, BX, CX, DX, SI, DI, BP, and SP. The segment registers are CS, DS, SS, and ES.

</details>
