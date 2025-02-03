# set-5

### 1. The most common addressing techniques employed by a CPU is:

1. Direct
2. Indirect
3. Immediate
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* CPUs use various addressing techniques to access data and instructions in memory. The most common addressing techniques include:
  * **Direct Addressing:** The operand's address is directly specified in the instruction.
  * **Indirect Addressing:** The instruction contains the address of a memory location that holds the actual address of the operand.
  * **Immediate Addressing:** The operand itself is included in the instruction, so no memory access is needed to fetch the operand.
* These techniques are fundamental to how CPUs process instructions and data efficiently.

</details>

### 2. \_\_\_\_\_\_ have been developed specifically for pipelined systems.

1. Utility software
2. Speed up utilities
3. Optimizing compilers
4. None of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Optimizing compilers

**Explanation:**

* Optimizing compilers are designed to generate efficient machine code for pipelined systems. They rearrange instructions to minimize pipeline stalls and maximize throughput by ensuring that the CPU's pipeline is utilized effectively. This is crucial for improving the performance of modern processors.

</details>

### 3. The pipelining process is also called as\_\_\_\_\_\_.

1. Superscalar operation
2. Assembly line operation
3. Von Neumann cycle
4. None of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Assembly line operation

**Explanation:**

* Pipelining in CPUs is often compared to an assembly line in manufacturing. Just as an assembly line divides a task into smaller stages performed simultaneously, pipelining divides instruction execution into stages (e.g., fetch, decode, execute, write-back) to improve throughput and efficiency.

</details>

### 4. Each stage in pipelining should be completed within \_\_\_\_\_\_ cycle.

1. 1
2. 2
3. 3
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 1

**Explanation:**

* In pipelining, each stage (e.g., fetch, decode, execute) is designed to complete its task within **one clock cycle**. This ensures that instructions flow smoothly through the pipeline without delays, maximizing the CPU's efficiency.

</details>

### 5. To increase the speed of memory access in pipelining, we make use of\_\_\_\_\_\_.

1. Special memory locations
2. Special purpose registers
3. Cache
4. Buffers

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Cache

**Explanation:**

* Cache memory is used to increase the speed of memory access in pipelined systems. It stores frequently accessed data and instructions closer to the CPU, reducing the time needed to fetch them from slower main memory. This helps prevent pipeline stalls and improves overall performance.

</details>

### 6. The contention for the usage of a hardware device is called\_\_\_\_\_\_.

1. Structural hazard
2. Stalk
3. Deadlock
4. None of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Structural hazard

**Explanation:**

* A **structural hazard** occurs when multiple instructions in a pipeline compete for the same hardware resource (e.g., memory, ALU). This can cause delays or stalls in the pipeline, reducing its efficiency. Structural hazards are a common issue in pipelined architectures.

</details>

### 7. The situation wherein the data of operands are not available is called\_\_\_\_\_\_.

1. Data hazard
2. Stock
3. Deadlock
4. Structural hazard

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Data hazard

**Explanation:**

* A **data hazard** occurs when an instruction depends on the result of a previous instruction that has not yet completed. This can happen in pipelined systems when instructions are executed out of order or when data is not yet available in the pipeline. Techniques like forwarding and stalling are used to resolve data hazards.

</details>

### 8. The CISC stands for\_\_\_\_\_\_.

1. Computer Instruction Set Complement
2. Complete Instruction Set Complement
3. Computer Indexed Set Components
4. Complex Instruction Set Computer

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Complex Instruction Set Computer

**Explanation:**

* **CISC** stands for **Complex Instruction Set Computer**. It is a type of CPU architecture that uses a large set of complex instructions, each capable of performing multiple low-level operations. CISC architectures aim to reduce the number of instructions per program, but they can be more complex to implement.

</details>

### 9. The computer architecture aimed at reducing the time of execution of instructions is\_\_\_\_\_\_.

1. CISC
2. RISC
3. ISA
4. ANNA

<details>

<summary>Show me the answer</summary>

**Answer:** 2. RISC

**Explanation:**

* **RISC** stands for **Reduced Instruction Set Computer**. RISC architectures focus on simplifying the instruction set, allowing each instruction to execute in a single clock cycle. This reduces the time of execution and improves performance, especially in pipelined systems.

</details>

### 10. The iconic feature of the RISC machine among the following is\_\_\_\_\_\_.

1. Reduced number of addressing modes
2. Increased memory size
3. Having a branch delay slot
4. All of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Having a branch delay slot

**Explanation:**

* A **branch delay slot** is a feature in RISC architectures where the instruction immediately following a branch instruction is executed before the branch takes effect. This helps to minimize pipeline stalls caused by branches, improving performance in pipelined systems.

</details>

### 11. Both the CISC and RISC architectures have been developed to reduce the\_\_\_\_\_\_.

1. Cost
2. Time delay
3. Semantic gap
4. All of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Semantic gap

**Explanation:**

* The **semantic gap** refers to the difference between high-level programming languages and low-level machine instructions. Both CISC and RISC architectures aim to reduce this gap by providing instructions that align more closely with high-level operations, making programming easier and improving efficiency.

</details>

### 12. Pipe-lining is a unique feature of \_\_\_\_\_\_.

1. RISC
2. CISC
3. ISA
4. IANA

<details>

<summary>Show me the answer</summary>

**Answer:** 1. RISC

**Explanation:**

* Pipelining is a key feature of **RISC** architectures. RISC processors are designed with simpler instructions that can be executed in a single clock cycle, making them ideal for pipelining. This allows multiple instructions to be processed simultaneously, improving throughput and performance.

</details>

### 13. In CISC architecture most of the complex instructions are stored in \_\_\_\_\_\_.

1. Register
2. Diodes
3. CMOS
4. Transistors

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Transistors

**Explanation:**

* In **CISC** architectures, complex instructions are implemented using **transistors** on the CPU chip. These instructions are designed to perform multiple low-level operations in a single instruction, reducing the number of instructions needed for a program.

</details>

### 14. In \_\_\_\_\_\_ the operand is specified in the instruction itself.

1. Immediate addressing
2. Register mode
3. Implied addressing
4. Register Indirect

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Immediate addressing

**Explanation:**

* In **immediate addressing**, the operand is directly specified in the instruction itself. This means the value to be used is part of the instruction, and no additional memory access is required to fetch the operand.

</details>

### 15. In which mode the operand is placed in one of 8-bit or 16-bit general-purpose registers?

1. Immediate addressing
2. Register mode
3. Implied addressing
4. Register Indirect

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Register mode

**Explanation:**

* In **register mode**, the operand is placed in one of the CPU's general-purpose registers (e.g., 8-bit or 16-bit registers). This mode is faster than memory-based addressing because the data is already in the CPU's registers.

</details>

### 16. An offset is determined by adding any combination of \_\_\_\_\_\_ address elements.

1. 3
2. 4
3. 5
4. 6

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 3

**Explanation:**

* An **offset** in addressing modes is typically determined by adding up to **three address elements**: a base address, an index, and a displacement. This combination allows for flexible and efficient memory addressing.

</details>

### 17. Zero address instruction are designed with implied addressing mode.

1. TRUE
2. FALSE
3. Can be true or false
4. Cannot say

<details>

<summary>Show me the answer</summary>

**Answer:** 1. TRUE

**Explanation:**

* **Zero-address instructions** use **implied addressing mode**, where the operands are implicitly defined by the instruction itself. For example, in stack-based architectures, the operands are always on the top of the stack, so no explicit address is needed.

</details>

### 18. In the following indexed addressing mode instruction, MOV 5(R1), LOC the effective address is \_\_\_\_\_\_.

1. EA = 5 + R1
2. EA = R1
3. EA = \[R1]
4. EA = 5 + \[R1]

<details>

<summary>Show me the answer</summary>

**Answer:** 1. EA = 5 + R1

**Explanation:**

* In **indexed addressing mode**, the effective address (EA) is calculated by adding an offset (5 in this case) to the contents of a register (R1). The formula for the effective address is:\
  $$EA = 5 + R1$$

</details>

### 19. The addressing mode/s, which uses the PC instead of a general-purpose register is \_\_\_\_\_\_.

1. Indexed with offset
2. Relative
3. Direct
4. Both indexed with offset and direct

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Relative

**Explanation:**

* **Relative addressing mode** uses the **Program Counter (PC)** as a base register. The effective address is calculated by adding an offset to the current value of the PC. This mode is commonly used for branching and jump instructions.

</details>

### 20. \_\_\_\_\_\_ addressing mode is most suitable to change the normal sequence of execution of instructions.

1. Relative
2. Indirect
3. Index with Offset
4. Immediate

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Relative

**Explanation:**

* **Relative addressing mode** is ideal for changing the normal sequence of instruction execution because it allows branching to a new address relative to the current Program Counter (PC). This is commonly used in loops and conditional jumps.

</details>

### 21. Sign magnitude is a very simple representation of?

1. Positive number
2. Negative numbers
3. Infinity
4. Zero

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Negative numbers

**Explanation:**

* **Sign magnitude** is a method of representing negative numbers in binary. The most significant bit (MSB) represents the sign (0 for positive, 1 for negative), and the remaining bits represent the magnitude of the number.

</details>

### 22. Sign bit 1 represents

1. Positive number
2. FALSE
3. TRUE
4. Negative Number

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Negative Number

**Explanation:**

* In **sign magnitude representation**, a sign bit of **1** indicates a **negative number**, while a sign bit of **0** indicates a positive number.

</details>

### 23. The logic 1 in positive logic system is represented by?

1. Zero voltage
2. Lower voltage level
3. Higher voltage level
4. Negative voltage

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Higher voltage level

**Explanation:**

* In a **positive logic system**, a **logic 1** is represented by a **higher voltage level**, while a **logic 0** is represented by a lower voltage level. This is the standard convention in digital systems.

</details>

### 24. The m-bit parallel adder consists of

1. m full adders
2. m+1 full adders
3. m-1 full adders
4. m/2 full adders

<details>

<summary>Show me the answer</summary>

**Answer:** 1. m full adders

**Explanation:**

* An **m-bit parallel adder** consists of **m full adders**, one for each bit of the input numbers. Each full adder handles one bit of the addition, including the carry-in and carry-out for the next stage.

</details>

### 25. Input or output devices that are connected to a computer are called \_\_\_\_\_\_.

1. Input/Output Subsystem
2. Peripheral Devices
3. Interfaces
4. Interrupt

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Peripheral Devices

**Explanation:**

* **Peripheral devices** are external devices connected to a computer, such as keyboards, mice, printers, and monitors. They provide input to or receive output from the computer system.

</details>

### 26. How many types of modes of I/O Data Transfer?

1. 2
2. 3
3. 4
4. 5

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 3

**Explanation:**

* There are **three main modes of I/O data transfer**:
  1. **Programmed I/O:** The CPU directly controls the data transfer.
  2. **Interrupt-driven I/O:** The device interrupts the CPU when it is ready to transfer data.
  3. **Direct Memory Access (DMA):** The device transfers data directly to/from memory without CPU intervention.

</details>

### 27. The method which offers higher speeds of I/O transfers is \_\_\_\_\_\_.

1. Interrupts
2. Memory mapping
3. Program-controlled I/O
4. DMA

<details>

<summary>Show me the answer</summary>

**Answer:** 4. DMA

**Explanation:**

* **Direct Memory Access (DMA)** offers the highest speed for I/O transfers because it allows devices to transfer data directly to/from memory without involving the CPU. This reduces CPU overhead and speeds up data transfer.

</details>

### 28. In memory-mapped I/O \_\_\_\_\_\_.

1. The I/O devices have a separate address space
2. The I/O devices and the memory share the same address space
3. A part of the memory is specifically set aside for the I/O operation
4. The memory and I/O devices have an associated address space

<details>

<summary>Show me the answer</summary>

**Answer:** 2. The I/O devices and the memory share the same address space

**Explanation:**

* In **memory-mapped I/O**, I/O devices and memory share the same address space. This means that I/O devices are accessed using the same instructions and addressing modes as memory, simplifying the programming model.

</details>

### 29. The ISA is an architectural standard developed by \_\_\_\_\_\_.

1. IBM
2. AT\&T Labs
3. Microsoft
4. Oracle

<details>

<summary>Show me the answer</summary>

**Answer:** 1. IBM

**Explanation:**

* **ISA (Instruction Set Architecture)** is a standard developed by **IBM** to define the set of instructions that a CPU can execute. It serves as the interface between hardware and software.

</details>

### 30. The SCSI BUS is used to connect the video devices to a processor by providing a \_\_\_\_\_\_.

1. Single Bus
2. USB
3. SCSI
4. Parallel BUS

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Parallel BUS

**Explanation:**

* The **SCSI (Small Computer System Interface) BUS** is a **parallel bus** used to connect devices like hard drives, scanners, and video devices to a processor. It provides high-speed data transfer and supports multiple devices on the same bus.

</details>

### 31. The registers of the controller are \_\_\_\_\_\_.

1. 16 bit
2. 32 bit
3. 64 bit
4. 128 bit

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 32 bit

**Explanation:**

* Many modern controllers use **32-bit registers** to handle data and control signals efficiently. This allows them to process larger amounts of data and perform complex operations.

</details>

### 32. Auxiliary memory access time is generally \_\_\_\_\_\_ times that of the main memory.

1. 10
2. 100
3. 1000
4. 10000

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 1000

**Explanation:**

* **Auxiliary memory** (e.g., hard drives, SSDs) has a much slower access time compared to **main memory** (RAM). Typically, auxiliary memory access time is about **1000 times slower** than main memory.

</details>

### 33. What is the formula for Hit Ratio?

1. Hit/(Hit + Miss)
2. Miss/(Hit + Miss)
3. (Hit + Miss)/Miss
4. (Hit + Miss)/Hit

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Hit/(Hit + Miss)

**Explanation:**

* The **hit ratio** is a measure of cache performance and is calculated as:\
  $$\text{Hit Ratio} = \frac{\text{Number of Hits}}{\text{Number of Hits} + \text{Number of Misses}}$$\
  A higher hit ratio indicates better cache performance.

</details>

### 34. Which of the following is correct example for Auxiliary Memory?

1. Magnetic disks
2. Tapes
3. Flash memory
4. Both A and B

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both A and B

**Explanation:**

* **Auxiliary memory** includes storage devices like **magnetic disks** and **tapes**, which are used for long-term data storage. These devices are slower than main memory but have much larger storage capacities.

</details>

### 35. The fastest data access is provided using \_\_\_\_\_\_.

1. Cache
2. DRAM's
3. SRAM's
4. Registers

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Registers

**Explanation:**

* **Registers** provide the fastest data access because they are located directly within the CPU. They are used to store data that is currently being processed, enabling extremely fast access times.

</details>

### 36. The next level of memory hierarchy after the L2 cache is \_\_\_\_\_\_.

1. Secondary storage
2. Main memory
3. Register
4. TLB

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Main memory

**Explanation:**

* The memory hierarchy typically follows this order:\
  Registers → L1 Cache → L2 Cache → **Main Memory (RAM)** → Secondary Storage. After the L2 cache, the next level is **main memory**.

</details>

### 37. Which Processors includes multicolcks?

1. Complex Instruction Set Computer
2. Reduced Instruction Set Computer
3. ISA
4. ANNA

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Complex Instruction Set Computer

**Explanation:**

* **CISC (Complex Instruction Set Computer)** processors often include **multiclocks** to handle complex instructions that may require multiple clock cycles to execute.

</details>

### 38. Which Processors Data transfer Register to register?

1. Complex Instruction Set Computer
2. Reduced Instruction Set Computer
3. ISA
4. ANNA

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Reduced Instruction Set Computer

**Explanation:**

* **RISC (Reduced Instruction Set Computer)** processors primarily use **register-to-register data transfer**. This simplifies the instruction set and improves performance by reducing memory access.

</details>

### 39. Which of the following is true?

1. The RISC processor has a more complicated design than CISC.
2. RISC Focus on software
3. CISC Focus on software
4. RISC has Variable sized instructions

<details>

<summary>Show me the answer</summary>

**Answer:** 2. RISC Focus on software

**Explanation:**

* **RISC** processors focus on **software optimization** by using a simpler instruction set. This allows compilers to generate more efficient code, improving overall performance.

</details>

### 40. Which processor requires more number of registers?

1. CISC
2. ISA
3. RISC
4. ANNA

<details>

<summary>Show me the answer</summary>

**Answer:** 3. RISC

**Explanation:**

* **RISC** processors require **more registers** to support their register-to-register operations and reduce the need for memory access. This improves performance by keeping frequently used data in registers.

</details>

### 41. Both the CISC and RISC architectures have been developed to reduce the \_\_\_\_\_\_.

1. Semantic gap
2. Time Delay
3. Cost
4. Reduced Code

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Semantic gap

**Explanation:**

* Both **CISC** and **RISC** architectures aim to reduce the **semantic gap** between high-level programming languages and low-level machine instructions. This makes programming easier and improves efficiency.

</details>

### 42. Which of the following is true about CISC processor?

1. Micro programmed control unit is found in CISC.
2. Data transfer is from memory to memory.
3. In this instructions are not register based.
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* **CISC** processors have the following characteristics:
  * They use a **microprogrammed control unit**.
  * They support **memory-to-memory data transfer**.
  * Instructions are **not strictly register-based**, allowing for more complex operations.

</details>

### 43. What is the high-speed memory between the main memory and the CPU called?

1. Register Memory
2. Cache Memory
3. Storage Memory
4. Virtual Memory

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Cache Memory

**Explanation:**

* **Cache memory** is a small, high-speed memory located between the CPU and main memory. It stores frequently accessed data and instructions to reduce the time needed to access them from slower main memory.

</details>

### 44. Cache Memory is implemented using the DRAM chips.

1. True
2. False

<details>

<summary>Show me the answer</summary>

**Answer:** 2. False

**Explanation:**

* Cache memory is typically implemented using **SRAM (Static RAM)** chips, not **DRAM (Dynamic RAM)**. SRAM is faster and more expensive, making it suitable for cache memory.

</details>

### 45. Whenever the data is found in the cache memory it is called as \_\_\_\_\_\_.

1. HIT
2. MISS
3. FOUND
4. ERROR

<details>

<summary>Show me the answer</summary>

**Answer:** 1. HIT

**Explanation:**

* When the CPU finds the required data in the cache memory, it is called a **cache hit**. This results in faster data access compared to a **cache miss**, where the data must be fetched from main memory.

</details>

### 46. LRU stands for \_\_\_\_\_\_.

1. Low Rate Usage
2. Least Rate Usage
3. Least Recently Used
4. Low Required Usage

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Least Recently Used

**Explanation:**

* **LRU (Least Recently Used)** is a cache replacement policy where the least recently accessed data is replaced when the cache is full. This helps to keep the most frequently used data in the cache.

</details>

### 47. When the data at a location in cache is different from the data located in the main memory, the cache is called \_\_\_\_\_\_.

1. Unique
2. Inconsistent
3. Variable
4. Fault

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Inconsistent

**Explanation:**

* When the data in the cache does not match the data in the main memory, the cache is said to be **inconsistent**. This can occur due to write operations that update the cache but not the main memory.

</details>

### 48. Which of the following is not a write policy to avoid Cache Coherence?

1. Write through
2. Write within
3. Write back
4. Buffered write

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Write within

**Explanation:**

* The common write policies to maintain cache coherence are:
  * **Write through:** Data is written to both the cache and main memory simultaneously.
  * **Write back:** Data is written only to the cache and later written to main memory when the cache line is replaced.
  * **Buffered write:** Data is temporarily stored in a buffer before being written to memory.
  * **Write within** is not a valid write policy.

</details>

### 49. Which of the following is an efficient method of cache updating?

1. Snoopy writes
2. Write through
3. Write within
4. Buffered write

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Snoopy writes

**Explanation:**

* **Snoopy writes** is an efficient method for cache updating in multiprocessor systems. It involves monitoring the bus for memory updates and invalidating or updating cache lines accordingly to maintain coherence.

</details>

### 50. In \_\_\_\_\_\_ mapping, the data can be mapped anywhere in the Cache Memory.

1. Associative
2. Direct
3. Set Associative
4. Indirect

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Associative

**Explanation:**

* In **fully associative mapping**, any block of main memory can be mapped to any line in the cache. This provides maximum flexibility but requires more complex hardware to search the cache.

</details>

