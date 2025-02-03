# set-6

### 51. The number of sign bits in a 32-bit IEEE format is \_\_\_\_\_\_.

1. 1
2. 11
3. 9
4. 23

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 1

**Explanation:**

* In the **32-bit IEEE floating-point format**, there is **1 sign bit** to indicate whether the number is positive or negative. The remaining bits are divided into exponent and mantissa fields.

</details>

### 52. The transfer between CPU and Cache is \_\_\_\_\_\_.

1. Block transfer
2. Word transfer
3. Set transfer
4. Associative transfer

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Word transfer

**Explanation:**

* Data transfer between the CPU and cache typically occurs in **word-sized units**. A word is the natural unit of data used by the CPU, usually 32 or 64 bits.

</details>

### 53. What is Interprocess communication?

1. Allows processes to communicate and synchronize their actions when using the same address space
2. Allows processes to communicate and synchronize their actions
3. Allows the processes to only synchronize their actions without communication
4. None of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Allows processes to communicate and synchronize their actions

**Explanation:**

* **Interprocess communication (IPC)** allows processes to communicate and synchronize their actions, even if they do not share the same address space. Common IPC mechanisms include pipes, message queues, and shared memory.

</details>

### 54. Message passing system allows processes to \_\_\_\_\_\_.

1. Communicate with each other without sharing the same address space
2. Communicate with one another by resorting to shared data
3. Share data
4. Name the recipient or sender of the message

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Communicate with each other without sharing the same address space

**Explanation:**

* A **message passing system** allows processes to communicate without sharing the same address space. Messages are sent and received through a communication channel, ensuring data isolation between processes.

</details>

### 55. Which of the following two operations are provided by the IPC facility?

1. Write & delete message
2. Delete & receive message
3. Send & delete message
4. Receive & send message

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Receive & send message

**Explanation:**

* The **IPC facility** provides two primary operations: **send** and **receive**. These operations allow processes to exchange messages and synchronize their actions.

</details>

### 56. Messages sent by a process \_\_\_\_\_\_.

1. Have to be of a fixed size
2. Have to be a variable size
3. Can be fixed or variable sized
4. None of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Can be fixed or variable sized

**Explanation:**

* Messages sent by a process can be either **fixed-size** or **variable-size**, depending on the IPC mechanism used. Some systems support both types of messages.

</details>

### 57. The link between two processes P and Q to send and receive messages is called \_\_\_\_\_\_.

1. Communication link
2. Message-passing link
3. Synchronization link
4. All of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Communication link

**Explanation:**

* The **communication link** is the connection between two processes (P and Q) that allows them to send and receive messages. This link can be implemented using shared memory, message queues, or other IPC mechanisms.

</details>

### 58. Which memory storage is widely used in PCs and Embedded Systems?

1. EEPROM
2. Flash memory
3. SRAM
4. DRAM

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Flash memory

**Explanation:**

* **Flash memory** is widely used in PCs and embedded systems due to its non-volatile nature, high density, and relatively fast access times. It is commonly used for firmware storage and solid-state drives (SSDs).

</details>

### 59. How is the protection and security for an embedded system made?

1. Security chips
2. Memory disk security
3. IPR
4. OTP

<details>

<summary>Show me the answer</summary>

**Answer:** 4. OTP

**Explanation:**

* **OTP (One-Time Programmable)** memory is often used in embedded systems to provide protection and security. Once programmed, the data cannot be altered, making it secure against tampering.

</details>

### 60. Which of the following task swapping method is a better choice in the embedded systems design?

1. Time slice
2. RMS
3. Cooperative multitasking
4. Pre-emptive

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Pre-emptive

**Explanation:**

* **Pre-emptive multitasking** is a better choice for embedded systems because it allows the operating system to interrupt a running task and switch to a higher-priority task. This ensures timely execution of critical tasks.

</details>

### 61. Which type of memory is suitable for low volume production of embedded systems?

1. Non-volatile
2. RAM
3. Volatile
4. ROM

<details>

<summary>Show me the answer</summary>

**Answer:** 4. ROM

**Explanation:**

* **ROM (Read-Only Memory)** is suitable for low-volume production of embedded systems because it is cost-effective and can be programmed once during manufacturing. It is non-volatile, meaning it retains data even when power is off.

</details>

### 62. Which level simulates the algorithms that are used within the embedded systems?

1. Algorithmic level
2. Switch level
3. Gate level
4. Circuit level

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Algorithmic level

**Explanation:**

* The **algorithmic level** simulates the high-level algorithms used in embedded systems. It focuses on the functionality and behavior of the system rather than the low-level hardware details.

</details>

### 63. How an embedded system communicate with the outside world?

1. Memory
2. Output
3. Peripherals
4. Input

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Peripherals

**Explanation:**

* Embedded systems communicate with the outside world through **peripherals** such as sensors, actuators, and communication interfaces (e.g., UART, SPI, I2C). These peripherals enable interaction with the environment.

</details>

### 64. What does MESI stand for?

1. Modified exclusive system input
2. Modifies embedded shared invalid
3. Modified exclusive shared invalid
4. Modified exclusive stale invalid

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Modified exclusive shared invalid

**Explanation:**

* **MESI** stands for **Modified, Exclusive, Shared, Invalid**. It is a cache coherence protocol used in multiprocessor systems to maintain consistency between caches.

</details>

### 65. Which of the following is the pin efficient method of communicating between other devices?

1. Memory port
2. Peripheral port
3. Parallel port
4. Serial port

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Serial port

**Explanation:**

* **Serial ports** are more pin-efficient than parallel ports because they transmit data one bit at a time over a single communication line, reducing the number of pins required.

</details>

### 66. Which of the following is a traditional method for emulating the processor?

1. CPU simulator
2. SDS
3. ICE
4. Low-level language simulator

<details>

<summary>Show me the answer</summary>

**Answer:** 3. ICE

**Explanation:**

* **ICE (In-Circuit Emulator)** is a traditional method for emulating a processor. It allows developers to debug and test embedded systems by replacing the processor with an emulator that provides real-time control and monitoring.

</details>

### 67. Which of the following unit protects the memory?

1. Memory management unit
2. Peripheral unit
3. Execution unit
4. Bus interface unit

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Memory management unit

**Explanation:**

* The **Memory Management Unit (MMU)** protects memory by managing virtual memory, translating virtual addresses to physical addresses, and enforcing memory access permissions.

</details>

### 68. Identify the standard software components that can be reused in an embedded system design?

1. Memory
2. Application software
3. Application manager
4. Operating system

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Operating system

**Explanation:**

* The **operating system** is a standard software component that can be reused in embedded system designs. It provides a platform for running applications and managing hardware resources.

</details>

### 69. What does ICE stand for?

1. In-circuit EPOM
2. In-code emulation
3. In-circuit emulation
4. In-code EPROM

<details>

<summary>Show me the answer</summary>

**Answer:** 3. In-circuit emulation

**Explanation:**

* **ICE** stands for **In-Circuit Emulation**. It is a debugging tool that allows developers to emulate the behavior of a processor in real-time, providing insights into the system's operation.

</details>

### 70. Which of the following offers external chips for memory and peripheral interface circuits?

1. Embedded system
2. Peripheral system
3. Microcontroller
4. Microprocessor

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Microprocessor

**Explanation:**

* A **microprocessor** typically requires external chips for memory and peripheral interface circuits, as it does not integrate these components on-chip like a microcontroller.

</details>

### 71. What kind of socket does an external EPROM to plugged in for prototyping?

1. Piggyback reset socket
2. Multi-socket
3. Piggyback
4. Single socket

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Piggyback

**Explanation:**

* A **piggyback socket** is used to plug in an external EPROM for prototyping. It allows the EPROM to be easily replaced or reprogrammed during development.

</details>

### 72. Which is the single device capable of providing prototyping support for a range of microcontroller?

1. Umbrella device
2. OTP
3. RAM
4. ROM

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Umbrella device

**Explanation:**

* An **umbrella device** is a single device that provides prototyping support for a range of microcontrollers. It allows developers to test and debug multiple microcontroller designs using a single platform.

</details>

### 73. What does PCM stand for?

1. Peculiar code modulation
2. Pulse codec machine
3. Pulse code modulation
4. Peripheral code machine

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Pulse code modulation

**Explanation:**

* **PCM** stands for **Pulse Code Modulation**. It is a method used to digitally represent analog signals by sampling and quantizing the signal.

</details>

### 74. Which one of the following offers CPUs as integrated memory or peripheral interfaces?

1. Memory system
2. Embedded system
3. Microcontroller
4. Microprocessor

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Microcontroller

**Explanation:**

* A **microcontroller** integrates a CPU, memory, and peripheral interfaces on a single chip, making it suitable for embedded systems where space and power are limited.

</details>

### 75. Which of the following language can describe the hardware?

1. C
2. C++
3. JAVA
4. VHDL

<details>

<summary>Show me the answer</summary>

**Answer:** 4. VHDL

**Explanation:**

* **VHDL (VHSIC Hardware Description Language)** is a hardware description language used to model and describe digital systems at various levels of abstraction.

</details>

### 76. What do VHDL stand for?

1. Verilog hardware description language
2. VHSIC hardware description language
3. Very hardware description language
4. VMEbus description language

<details>

<summary>Show me the answer</summary>

**Answer:** 2. VHSIC hardware description language

**Explanation:**

* **VHDL** stands for **VHSIC Hardware Description Language**, where VHSIC stands for Very High-Speed Integrated Circuit.

</details>

### 77. Each unit to be modelled in a VHDL design is known as

1. Behavioural model
2. Design architecture
3. Design entity
4. Structural model

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Design entity

**Explanation:**

* In VHDL, each unit to be modeled is called a **design entity**. It consists of an entity declaration and an architecture body that describes the behavior or structure of the unit.

</details>

### 78. Which of the following are capable of displaying output signal waveforms resulting from stimuli applied to the inputs?

1. VHDL simulator
2. VHDL emulator
3. VHDL debugger
4. VHDL locater

<details>

<summary>Show me the answer</summary>

**Answer:** 1. VHDL simulator

**Explanation:**

* A **VHDL simulator** is capable of displaying output signal waveforms resulting from stimuli applied to the inputs. It allows designers to visualize and verify the behavior of their designs.

</details>

### 79. Which of the following describes the connections between the entity port and the local component?

1. Port map
2. One-to-one map
3. Many-to-one map
4. One-to-many maps

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Port map

**Explanation:**

* The **port map** in VHDL describes the connections between the entity port and the local component. It specifies how signals are mapped between the entity and its components.

</details>

### 80. Which of the following is an abstraction of the signal impedance?

1. Level
2. Strength
3. Size
4. Nature

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Strength

**Explanation:**

* In VHDL, **signal strength** is an abstraction of the signal impedance. It represents the driving capability of a signal, such as strong, weak, or high-impedance.

</details>

### 81. Which level simulates the algorithms that are used within the embedded systems?

1. Gate level
2. Circuit level
3. Switch level
4. Algorithmic level

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Algorithmic level

**Explanation:**

* The **algorithmic level** simulates the high-level algorithms used in embedded systems. It focuses on the functionality and behavior of the system rather than the low-level hardware details.

</details>

### 82. Which level model components like ALU, memories registers, mixes and decoders?

1. Switch level
2. Register-transfer level
3. Gate level
4. Circuit level

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Register-transfer level

**Explanation:**

* The **Register-Transfer Level (RTL)** models components like ALUs, memories, registers, mixers, and decoders. It describes the flow of data between registers and the operations performed on that data.

</details>

### 83. Which of the following is the most frequently used circuit-level model?

1. SPICE
2. VHDL
3. Verilog
4. System Verilog

<details>

<summary>Show me the answer</summary>

**Answer:** 1. SPICE

**Explanation:**

* **SPICE (Simulation Program with Integrated Circuit Emphasis)** is the most frequently used circuit-level model. It is used to simulate and analyze the behavior of electronic circuits.

</details>

### 84. Which model includes geometric information?

1. Switch-level model
2. Layout model
3. Gate level model
4. Register-transfer level

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Layout model

**Explanation:**

* The **layout model** includes geometric information about the physical placement of components on a chip. It is used in the final stages of chip design to create the physical layout.

</details>

### 85. Which model cannot simulate directly?

1. Circuit level model
2. Switch-level model
3. Gate level model
4. Layout model

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Layout model

**Explanation:**

* The **layout model** cannot be simulated directly because it represents the physical layout of the chip. It is used for manufacturing rather than simulation.

</details>

### 86. Which models communicate between the components?

1. Transaction level modelling
2. Fine-grained modelling
3. Coarse-grained modelling
4. Circuit level model

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Transaction level modelling

**Explanation:**

* **Transaction Level Modeling (TLM)** is used to model communication between components at a high level of abstraction. It focuses on the exchange of data between components rather than the detailed implementation.

</details>

### 87. How many kinds of wait statements are available in the VHDL design?

1. 3
2. 4
3. 5
4. 6

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 4

**Explanation:**

* In VHDL, there are **four kinds of wait statements**:
  1. `wait for`
  2. `wait until`
  3. `wait on`
  4. `wait` (without any condition)

</details>

### 88. Which wait statement does follow a condition?

1. Wait for
2. Wait until
3. Wait
4. Wait on

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Wait until

**Explanation:**

* The **wait until** statement follows a condition. It suspends the process until the specified condition becomes true.

</details>

### 89. Which of the following is a C++ class library?

1. C++
2. C
3. JAVA
4. SystemC

<details>

<summary>Show me the answer</summary>

**Answer:** 4. SystemC

**Explanation:**

* **SystemC** is a C++ class library used for system-level modeling and simulation of hardware and software systems.

</details>

### 90. Which model of SystemC uses floating point numbers to denote time?

1. SystemC-1.0
2. SystemC 2.0
3. SystemC 3.0
4. SystemC 4.0

<details>

<summary>Show me the answer</summary>

**Answer:** 2. SystemC 2.0

**Explanation:**

* **SystemC 2.0** introduced the use of floating-point numbers to denote time, allowing for more precise timing simulations.

</details>

### 91. Which model of SystemC uses the integer number to define time?

1. SystemC 1.0
2. SystemC 2.0
3. SystemC 3.0
4. SystemC 4.0

<details>

<summary>Show me the answer</summary>

**Answer:** 1. SystemC 1.0

**Explanation:**

* **SystemC 1.0** used integer numbers to define time, which was sufficient for basic simulations but lacked the precision of floating-point numbers.

</details>

### 92. What does ESL stand for?

1. EEPROM system level
2. Electronic-system level
3. Electrical system level
4. Electron system level

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Electronic-system level

**Explanation:**

* **ESL** stands for **Electronic-System Level**. It refers to the high-level design and modeling of electronic systems, often using tools like SystemC.

</details>

### 93. What to TLM stand for?

1. Transfer level modelling
2. Triode level modelling
3. Transaction level modelling
4. Transistor level modelling

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Transaction level modelling

**Explanation:**

* **TLM** stands for **Transaction Level Modeling**. It is a high-level approach to modeling communication between components in a system.

</details>

### 94. Which of the following provides a buffer between the user and the low-level interfaces to the hardware?

1. Operating system
2. Kernel
3. Software
4. Hardware

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Kernel

**Explanation:**

* The **kernel** provides a buffer between the user and the low-level hardware interfaces. It manages system resources and provides a secure and efficient way for applications to interact with hardware.

</details>

### 95. Which of the following enables the user to utilise the system efficiently?

1. Kernel
2. Operating system
3. Software
4. Hardware

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Operating system

**Explanation:**

* The **operating system** enables users to utilize the system efficiently by managing resources, providing a user interface, and running applications.

</details>

### 96. Which of the following can make the application program hardware independent?

1. Software
2. Application manager
3. Operating system
4. Kernel

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Operating system

**Explanation:**

* The **operating system** provides a layer of abstraction between the application program and the hardware, making the application hardware-independent.

</details>

### 97. Which of the following speed up the testing process?

1. Kernel
2. Software
3. Application manager
4. Program debugging tools

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Program debugging tools

**Explanation:**

* **Program debugging tools** speed up the testing process by allowing developers to identify and fix errors in their code more efficiently.

</details>

### 98. Which of the following includes its own I/O routine?

1. Hardware
2. Kernel
3. Operating system
4. Application manager

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Operating system

**Explanation:**

* The **operating system** includes its own I/O routines to manage input and output operations, providing a standardized interface for applications.

</details>

### 99. Which forms the heart of the operating system?

1. Kernel
2. Applications
3. Hardware
4. Operating system

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Kernel

**Explanation:**

* The **kernel** forms the heart of the operating system. It manages system resources, handles hardware communication, and ensures the smooth operation of the system.

</details>

### 100. Which of the following are not dependent on the actual hardware performing the physical task?

1. Applications
2. Hardware
3. Registers
4. Parameter block

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Applications

**Explanation:**

* **Applications** are not dependent on the actual hardware performing the physical task. They rely on the operating system and kernel to interact with the hardware, making them hardware-independent.

</details>
