# Short Questions (60\*1=60 Marks)

### 1. Decibel relation for power gain is:

1. $$N_{dB} = 20 \log_{10}\left(\frac{V_2^2}{V_1^2}\right) + 20 \log_{10}\left(\frac{Z_1}{Z_2}\right)$$
2. $$N_{dB} = 10 \log_{10}\left(\frac{V_2^2}{V_1^2}\right) + 10 \log_{10}\left(\frac{Z_1}{Z_2}\right)$$
3. $$N_{dB} = 20 \log_{10}\left(\frac{V_2}{V_1}\right) + 10 \log_{10}\left(\frac{Z_2}{Z_1}\right)$$
4. $$N_{dB} = 10 \log_{10}\left(\frac{V_2}{V_1}\right) + 10 \log_{10}\left(\frac{Z_2}{Z_1}\right)$$

<details>

<summary>Show me the answer</summary>

#### Answer:

**4)** $$N_{dB} = 10 \log_{10}\left(\frac{V_2}{V_1}\right) + 10 \log_{10}\left(\frac{Z_2}{Z_1}\right)$$

#### Explanation:

The decibel power gain is derived from the power ratio:\
$$P = \frac{V^2}{Z}$$

Substituting this into the decibel formula for power gain:\
$$N_{dB} = 10 \log_{10}\left(\frac{P_2}{P_1}\right)$$\
$$N_{dB} = 10 \log_{10}\left(\frac{V_2^2 / Z_2}{V_1^2 / Z_1}\right)$$

Simplifying:\
$$N_{dB} = 10 \log_{10}\left(\frac{V_2^2}{V_1^2}\right) + 10 \log_{10}\left(\frac{Z_1}{Z_2}\right)$$

This is rewritten using the voltage ratio:\
$$N_{dB} = 10 \log_{10}\left(\frac{V_2}{V_1}\right) + 10 \log_{10}\left(\frac{Z_2}{Z_1}\right)$$

</details>

### 2. Maximum power that can be transferred from source to load is:

1. 25%
2. 75%
3. 50%
4. 100%

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) 50%**

#### Explanation:

According to the Maximum Power Transfer Theorem:

* Maximum power is transferred when the load resistance $$( R_L )$$ equals the source resistance $$( R_S )$$.
* At this point, 50% of the total power is dissipated in the load, and the remaining 50% is lost in the source resistance.

</details>

### 3. Power factor $$( \frac{R}{Z} )$$ has maximum value of:

1. 0.0
2. 0.5
3. 1.0
4. 1.5

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) 1.0**

#### Explanation:

The power factor is defined as the ratio:\
$$\text{Power Factor} = \frac{\text{Real Power}}{\text{Apparent Power}} = \frac{R}{Z}$$

* The maximum value of the power factor is 1.0, which occurs when the circuit is purely resistive (( Z = R ), no reactive components like inductance or capacitance).

</details>

### 4. EEPROM has a drain and floating gate gap of:

1. 5 nm
2. 10 nm
3. 12 nm
4. 15 nm

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) 10 nm**

#### Explanation:

* EEPROM (Electrically Erasable Programmable Read-Only Memory) uses a floating gate to store charges.
* The gap between the drain and floating gate is typically designed to be around 10 nm to ensure reliable charge retention and efficient erase/program cycles.

</details>

### 5. Heisenberg principle of uncertainty says:

1. Signal of 10Hz can be generated.
2. Signal of 10MHz can be generated.
3. Signal of 100MHz can be generated.
4. Signal of band 100MHz-105MHz can be generated.

<details>

<summary>Show me the answer</summary>

#### Answer:

**4) Signal of band 100MHz-105MHz can be generated**

#### Explanation:

According to the Heisenberg Uncertainty Principle:

* The uncertainty in time $$(( \Delta t ))$$ and frequency $$(( \Delta f ))$$ is related as:\
  $$\Delta t \cdot \Delta f \geq \frac{1}{2\pi}$$
* This implies that precise signals cannot be generated at a single frequency, but rather within a band of frequencies. Hence, a signal band of 100MHz-105MHz is feasible.

</details>

### 6. UHF frequency signal can be amplified using:

1. Class A amplifier
2. Class AB amplifier
3. Class C amplifier
4. Class B amplifier

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) Class C amplifier**

#### Explanation:

* UHF (Ultra-High Frequency) signals operate in the range of 300 MHz to 3 GHz.
* Class C amplifiers are specifically designed for high-frequency applications like UHF due to their high efficiency and narrowband operation.
* These amplifiers are commonly used in RF transmitters.

</details>

### 7. Two’s complement of 00011011 is:

1. 11100100
2. 11100101
3. 11000101
4. 11110001

<details>

<summary>Show me the answer</summary>

#### Answer:

**1) 11100100**

#### Explanation:

* To calculate the two’s complement of a binary number:
  1. Invert all the bits of the number: ( 00011011 \to 11100100 ).
  2. Add 1 to the result: ( 11100100 + 1 = 11100101 ).
* The result is ( 11100100 ), representing the negative equivalent in two’s complement notation.

</details>

### 8. Elementary building block of combinational circuit is:

1. Logic gate
2. Flip-flop
3. Both logic gate and flip-flop
4. Memory

<details>

<summary>Show me the answer</summary>

#### Answer:

**1) Logic gate**

#### Explanation:

* A combinational circuit is built using logic gates such as AND, OR, NOT, etc.
* These gates combine multiple inputs to produce specific outputs based on logical operations.
* Flip-flops and memory are elements of sequential circuits, not combinational circuits.

</details>

### 9. Synchronous circuit that changes its state at specific clock signal is:

1. Event driven
2. Clock driven
3. Pulse driven
4. Frequency driven

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) Clock driven**

#### Explanation:

* Synchronous circuits operate based on a clock signal.
* State transitions occur at specific clock edges (rising or falling), making them "clock-driven."
* This ensures predictable timing and synchronization in the circuit.

</details>

### 10. Bandwidth of microprocessor represents:

1. Clock speed
2. Width of internal bus
3. Number of bits processed per instruction
4. Number of bits processed per second

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) Number of bits processed per instruction**

#### Explanation:

* The bandwidth of a microprocessor refers to the number of bits it can process in a single instruction.
* For instance, an 8-bit microprocessor processes 8 bits per instruction.
* This is determined by the architecture and design of the processor.

</details>

### 11. PPI 8255 has internal bus of size:

1. 4 bit
2. 8 bit
3. 16 bit
4. 32 bit

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) 8 bit**

#### Explanation:

* The Programmable Peripheral Interface (PPI) 8255 has an 8-bit internal data bus.
* This allows it to interface directly with 8-bit microprocessors for data transfer.
* It is commonly used in microprocessor-based systems for parallel data communication.

</details>

### 12. Interrupt Service Route (ISR) executes:

1. Before execution of current instructions
2. With pause of current instructions
3. After execution of current instructions
4. With execution of no instruction

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) With pause of current instructions**

#### Explanation:

* When an interrupt occurs, the current instruction execution is paused, and the processor jumps to execute the ISR.
* After completing the ISR, the processor resumes execution of the interrupted instruction.

</details>

### 13. What is the purpose of the "`printf()`" function in C programming?

1. To print output to the console
2. To read input from the console
3. To perform arithmetic operations
4. To declare variables

<details>

<summary>Show me the answer</summary>

#### Answer:

**1) To print output to the console**

#### Explanation:

* The `printf()` function is used to display output on the console.
* It can format text, variables, and special characters to provide user-readable output.
* Example: `printf("Hello, World!");` prints "Hello, World!" to the console.

</details>

### 14. What is the purpose of the "`rewind()`" function in C programming?

1. To move the file pointer to the end of the file
2. To move the file pointer to the beginning of the file
3. To read data from a file
4. To write data to a file

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) To move the file pointer to the beginning of the file**

#### Explanation:

* The `rewind()` function resets the file pointer to the start of a file.
* This is useful when you need to re-read the file from the beginning without closing and reopening it.
* Example: `rewind(filePointer);` resets the file pointer of `filePointer`.

</details>

### 15. Which of the following access specifiers in C++ allows access to class members only within the class?

1. Public
2. Private
3. Protected
4. Friend

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) Private**

#### Explanation:

* Members declared as `private` are only accessible within the class itself.
* They are not accessible from derived classes or outside the class.
* This ensures encapsulation and protects sensitive data or implementation details.

</details>

### 16. What is the purpose of a constructor in C++?

1. To create data members of a class
2. To overload operators in a class
3. To initialize data members of a class
4. To free memory used by an object

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) To initialize data members of a class**

#### Explanation:

* A constructor is a special member function in C++ used to initialize objects of a class.
* It is called automatically when an object is created.
* Its primary purpose is to set initial values for the data members of an object.

</details>

### 17. Which of the following is true about pure virtual functions in C++?

1. They have a function body
2. They can be called directly
3. They can only be declared in the derived class
4. They can only be declared in the base class

<details>

<summary>Show me the answer</summary>

#### Answer:

**4) They can only be declared in the base class**

#### Explanation:

* A pure virtual function is a function declared in the base class with no definition and is meant to be overridden by derived classes.
* It is used to create abstract classes and enforce that derived classes implement the function.
* Example: `virtual void function() = 0;`

</details>

### 18. What is the purpose of the try block in C++ exception handling?

1. To catch exceptions that are thrown by the program
2. To declare the variables that are used in the catch block
3. To handle errors that are caught by the program
4. To define the exceptions that are thrown by the program

<details>

<summary>Show me the answer</summary>

#### Answer:

**1) To catch exceptions that are thrown by the program**

#### Explanation:

* The `try` block is used to define a section of code in which exceptions may occur.
* If an exception is thrown within the `try` block, it is caught by a corresponding `catch` block to handle the error.

</details>

### 19. Which of the following is not an addressing mode?

1. Direct addressing mode
2. Indirect addressing mode
3. Inverted addressing mode
4. Indexed addressing mode

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) Inverted addressing mode**

#### Explanation:

* Direct, indirect, and indexed addressing modes are valid types of addressing modes in computer architecture.
* "Inverted addressing mode" is not a standard addressing mode.

</details>

### 20. Which of the following is a fundamental principle of cache memory design?

1. Increasing the cache size always improves performance
2. A direct mapping function is always better than an associative mapping function
3. The least recently used replacement algorithm is always the best choice
4. The cache should store frequently used data to reduce memory access time

<details>

<summary>Show me the answer</summary>

#### Answer:

**4) The cache should store frequently used data to reduce memory access time**

#### Explanation:

* The main goal of cache memory is to store frequently accessed data to improve processing speed.
* Storing frequently used data in the cache reduces the time spent accessing slower main memory.
* A good cache design ensures that commonly used data is readily available.

</details>

### 21. Which of the following is not a characteristic of multiprocessors?

1. Enhanced reliability
2. Reduced complexity
3. Sharing of resources
4. Increased throughput

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) Reduced complexity**

#### Explanation:

* Multiprocessor systems generally increase complexity as they require mechanisms for synchronization, communication, and resource management.
* While multiprocessors improve reliability, throughput, and resource sharing, they also introduce design complexities that need to be handled carefully.

</details>

### 22. What is an application-specific instruction-set processor (ASIP)?

1. A processor that is optimized for a specific application
2. A processor that can run any application
3. A processor that is designed for general-purpose computing
4. A processor that can be programmed by the user

<details>

<summary>Show me the answer</summary>

#### Answer:

**1) A processor that is optimized for a specific application**

#### Explanation:

* An ASIP is a type of processor that is specifically tailored to accelerate particular applications or tasks.
* These processors combine the advantages of custom hardware and programmable processors, making them efficient for targeted uses.
* Examples include processors optimized for signal processing, cryptography, or other domain-specific tasks.

</details>

### 23. What is the purpose of a watchdog timer in an RTOS?

1. To control the execution of tasks
2. To synchronize I/O operations
3. To monitor the system and detect faults
4. To schedule tasks based on their priority

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) To monitor the system and detect faults**

#### Explanation:

* A watchdog timer in an RTOS is used to detect and recover from faults by monitoring the system.
* If the system becomes unresponsive or stuck, the watchdog timer triggers a reset to restore normal operation.
* This mechanism helps ensure system reliability, especially in embedded and real-time systems.

</details>

### 24. What does VHDL stand for?

1. Very High Definition Logic
2. Very High-level Design Language
3. Virtual Hardware Description Language
4. Vector High-level Design Logic

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) Virtual Hardware Description Language**

#### Explanation:

* VHDL stands for **VHSIC (Very High Speed Integrated Circuit) Hardware Description Language**.
* It is a programming language used to describe the behavior and structure of electronic systems, primarily used for designing integrated circuits.

</details>

### 25. Which networking device operates at the data link layer of the OSI model and filters traffic based on MAC addresses?

1. Hub
2. Router
3. Switch
4. Bridge

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) Switch**

#### Explanation:

* A **switch** operates at the **data link layer** of the OSI model and filters traffic based on MAC (Media Access Control) addresses.
* It is used to create a network by connecting devices within the same network segment, reducing collisions compared to hubs.

</details>

### 26. Which error detection and correction technique involves adding redundant bits to the data being transmitted?

1. Parity check
2. Checksum
3. Hamming code
4. CRC

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) Hamming code**

#### Explanation:

* **Hamming code** is a technique that involves adding redundant bits (parity bits) to the original data to detect and correct errors.
* It can correct single-bit errors and detect two-bit errors.

</details>

### 27. Which routing algorithm is used by the Open Shortest Path First (OSPF) protocol?

1. Distance vector
2. Link state
3. Path vector
4. Hierarchical

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) Link state**

#### Explanation:

* **OSPF** uses the **link-state** routing algorithm.
* It maintains a map of the network topology and updates routing tables based on the state of the network links. This helps to determine the shortest path between routers.

</details>

### 28. Which protocol at the transport layer provides reliable, connection-oriented data transfer?

1. UDP
2. FTP
3. TCP
4. ICMP

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) TCP**

#### Explanation:

* **TCP (Transmission Control Protocol)** is a connection-oriented protocol that provides reliable data transfer by establishing a connection between sender and receiver before transmitting data.
* It guarantees data delivery and maintains the order of packets through sequence numbers and acknowledgments.

</details>

### 29. Which protocol is used for email transfer?

1. HTTP
2. FTP
3. SNMP
4. SMTP

<details>

<summary>Show me the answer</summary>

#### Answer:

**4) SMTP**

#### Explanation:

* **SMTP (Simple Mail Transfer Protocol)** is used for sending and transferring emails across networks.
* It works with other protocols like IMAP and POP3 to retrieve and manage email from mail servers.

</details>

### 30. Which type of network security device is used to monitor and filter incoming and outgoing network traffic?

1. Antivirus software
2. Intrusion detection system (IDS)
3. Firewall
4. Virtual private network (VPN)

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) Firewall**

#### Explanation:

* A **firewall** is a network security device that monitors and controls incoming and outgoing network traffic based on predefined security rules.
* It acts as a barrier between trusted internal networks and untrusted external networks, such as the internet, preventing unauthorized access.

</details>

### 31. What is the value of tangential component of electric field in a dielectric-conductor boundary (interface)?

1. Zero
2. Infinite
3. One
4. Three

<details>

<summary>Show me the answer</summary>

#### Answer:

**1) Zero**

#### Explanation:

* In a dielectric-conductor boundary, the tangential component of the electric field is zero at the boundary.
* This is because the conductor acts as a perfect electric shield, preventing tangential electric field lines from existing at its surface.

</details>

### 32. Which of the following statements are true regarding Bio-Savart’s Law?

1. Magnetic field directly proportional to cross-sectional area of conductor.
2. Bio-Savart’s Law deals with electric field.
3. Magnetic field directly proportional to current through the conductor.
4. Electric field directly proportional to current through the conductor.

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) Magnetic field directly proportional to current through the conductor.**

#### Explanation:

* **Bio-Savart’s Law** relates to the magnetic field generated by an electric current in a conductor.
* The magnetic field is directly proportional to the current and the geometry of the conductor.
* The cross-sectional area does not directly affect the magnetic field in Bio-Savart’s Law.
* The law does not deal with electric fields, but with magnetic fields generated by electric currents.

</details>

### 33. For a plane wave propagation in an unbound medium (free space), the minimum angle between electric field and magnetic field vector is …..

1. 0°
2. 30°
3. 90°
4. 180°

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) 90°**

#### Explanation:

* In free space, the electric and magnetic field vectors in a plane wave are always perpendicular to each other.
* Therefore, the minimum angle between them is **90°**.

</details>

### 34. What is the radiation pattern of an isotropic radiator?

1. Doughnut
2. Sphere
3. Hemisphere
4. Circular

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) Sphere**

#### Explanation:

* The radiation pattern of an **isotropic radiator** is spherical.
* An isotropic radiator radiates equally in all directions, producing a uniform radiation pattern in three-dimensional space.

</details>

### 35. Which of the following is not true with respect to antenna?

1. Lower Frequencies are radiated near the end of the transmission line.
2. Horn antennas are used to feed parabolic disk Antenna.
3. Yagi-Uda antennas have high bandwidth and low gain.
4. Higher frequencies are radiated near the feed point.

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) Yagi-Uda antennas have high bandwidth and low gain.**

#### Explanation:

* **Yagi-Uda antennas** have relatively **high gain** and are known for their **narrow bandwidth**.
* The other statements are correct:
  * Lower frequencies are typically radiated near the end of the transmission line.
  * Horn antennas are used for feeding parabolic antennas.
  * Higher frequencies are indeed radiated near the feed point of the antenna.

</details>

### 36. The path loss in free space propagation is proportional to ………..

1. Square of the distance
2. Inverse of the distance
3. Logarithm of the distance
4. Proportional to the distance

<details>

<summary>Show me the answer</summary>

#### Answer:

**1) Square of the distance**

#### Explanation:

* In free space propagation, **path loss** increases with the square of the distance. This is known as the **inverse square law**.
* The loss is proportional to the square of the distance between the transmitter and receiver.

</details>

### 37. ……………….. level is where the model becomes compatible and executable code

1. Abstract level
2. Application level
3. Implementation level
4. All of the above

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) Implementation level**

#### Explanation:

* The **implementation level** refers to the stage where the model is transformed into executable code that is compatible with the system.
* The abstract level refers to a higher-level design, while the application level refers to the functional design phase.

</details>

### 38. What is the hash function used in the division method?

1. h(k) = k/m
2. h(k) = k mod m
3. h(k) = m/k
4. h(k) = m mod k

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) h(k) = k mod m**

#### Explanation:

* The **division method** of hashing uses the hash function **h(k) = k mod m**, where **k** is the key and **m** is the size of the hash table.
* This method ensures that the key is mapped to an index within the bounds of the table.

</details>

### 39. Redundancy is reduced in a database table by using the ------------ form.

1. Abnormal
2. Normal
3. Special
4. Exactly

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) Normal**

#### Explanation:

* **Normalization** is the process of organizing data in a database to reduce redundancy and dependency.
* By using **normal forms** (like 1NF, 2NF, 3NF), redundancy is minimized, ensuring efficient storage and data integrity.

</details>

### 40. It is advisable, to store the -------- before applying the actual transaction to the database.

1. Data
2. Logs
3. Receive
4. Record

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) Logs**

#### Explanation:

* It is advisable to store **logs** before applying the actual transaction to the database. This helps in tracking and recovering data in case of errors or failures during the transaction.

</details>

### 41. To enforce ………………….. two functions are provided enter-critical and exit-critical, where each function takes as an argument the name of the resource that is the subject of competition.

1. Mutual Exclusion
2. Synchronization
3. Deadlock
4. Starvation

<details>

<summary>Show me the answer</summary>

#### Answer:

**1) Mutual Exclusion**

#### Explanation:

* **Mutual Exclusion** is a principle where only one process can access a shared resource at a time, to prevent race conditions. The **enter-critical** and **exit-critical** functions help implement mutual exclusion.

</details>

### 42. If you wanted to require that a user enter an Administrator password to perform administrative tasks, what type of user account should you create for the user?

1. Administrator User account
2. Standard User account
3. Power User account
4. Authenticated User account

<details>

<summary>Show me the answer</summary>

#### Answer:

**1) Administrator User account**

#### Explanation:

* To perform administrative tasks, you would create an **Administrator User account**. This account has elevated privileges to make system-wide changes.

</details>

### 43. The process to gather the software requirements from client, analyze and document them is known as \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_.

1. Feasibility Study
2. Requirement Gathering
3. Requirement Engineering
4. System Requirements Specification

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) Requirement Engineering**

#### Explanation:

* **Requirement Engineering** is the process of gathering, analyzing, and documenting software requirements. It involves understanding the needs of the client and translating them into functional specifications.

</details>

### 44. What is reference architecture?

1. It is a reference model mapped onto software components
2. It provided data flow with comments
3. It provides data flow with pieces
4. It is a reference model mapped onto software components & data flow with comments

<details>

<summary>Show me the answer</summary>

#### Answer:

**1) It is a reference model mapped onto software components**

#### Explanation:

* **Reference architecture** is a blueprint that provides a standard, reusable framework for designing systems. It is typically a reference model mapped onto software components that serve as a foundation for development.

</details>

### 45. Which access specifier is used to make the members of a class accessible only within the same class?

1. public
2. private
3. protected
4. public and protected

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) private**

#### Explanation:

* The **private** access specifier restricts access to class members, allowing them to be used only within the class.
* This means other classes or functions can't access or modify these members directly.
* It's a common practice to use **private** for data encapsulation and hiding implementation details.

</details>

### 46. What is operator overloading in C++?

1. Defining a new operator.
2. Overriding an existing operator.
3. Changing the behaviour of an existing operator.
4. Changing the behaviour of new operator.

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) Changing the behaviour of an existing operator.**

#### Explanation:

* **Operator overloading** allows redefining the functionality of existing operators (e.g., `+`, `-`, etc.) for user-defined types.
* For example, you can overload the `+` operator to add two objects of a custom class.
* It makes user-defined classes behave like built-in types in expressions.

</details>

### 47. What is the difference between ifstream and ofstream in C++?

1. ifstream is used for input, while ofstream is used for output.
2. ofstream is used for input, while ifstream is used for output.
3. both are used as input.
4. both are used as output.

<details>

<summary>Show me the answer</summary>

#### Answer:

**1) ifstream is used for input, while ofstream is used for output.**

#### Explanation:

* **ifstream**: used to read data from files (input).
* **ofstream**: used to write data to files (output).
* These are stream classes in C++ for file handling and are used to interact with external files.

</details>

### 48. What is a class template in C++?

1. A class that can be used to create objects of different types.
2. A function that can be used to create objects of different types.
3. A variable that can be used to create objects of different types.
4. A character that can be used to create objects of different types.

<details>

<summary>Show me the answer</summary>

#### Answer:

**1) A class that can be used to create objects of different types.**

#### Explanation:

* A **class template** in C++ allows the definition of a class blueprint that works with any data type.
* This enables the creation of objects for various data types without duplicating code.
* For example, you can define a class for a generic container that works with integers, floats, or any custom data type.

</details>

### 49. Which of the following is not a medium of transmission?

1. Microwave system
2. Wire
3. Free space
4. Fiber optic cable

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) Free space**

#### Explanation:

* **Free space** is not a medium of transmission. It refers to the environment in which transmission occurs, not a physical medium like wire, microwave, or fiber optics.
* In communication systems, **free space** is used to describe the propagation environment, but the medium itself must be physical (like a wire or fiber).

</details>

### 50. Actual radio coverage of a cell is called \_\_\_\_\_\_\_\_\_\_

1. Fingerprint
2. Footprint
3. Imprint
4. Matrix

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) Footprint**

#### Explanation:

* The **footprint** refers to the actual radio coverage area of a cell in wireless communication systems.
* It represents the region where the radio signals can reach and be reliably received.
* It is essential for planning and optimizing network coverage.

</details>

### 51. Rake Receiver does….

1. Forward Error Correction
2. Backward Error Correction
3. Resembles equalizer
4. Resembles equalizer and Counter effects multipath fading

<details>

<summary>Show me the answer</summary>

#### Answer:

**4) Resembles equalizer and Counter effects multipath fading**

#### Explanation:

* The **Rake Receiver** is used in wireless communication to counteract the effects of multipath fading.
* It combines multiple received signals (rays) with different time delays to improve the overall signal quality.
* It acts as an equalizer by adjusting for multipath interference.

</details>

### 52. The bit rate of personal communication is \_\_\_\_\_\_\_\_\_\_

1. 300 to 9600 bits/sec
2. 300 to 3400 bits/sec
3. 400 to 9600 bits/sec
4. 400 to 3500 bits/sec

<details>

<summary>Show me the answer</summary>

#### Answer:

**1) 300 to 9600 bits/sec**

#### Explanation:

* Personal communication systems, such as early mobile phones, typically have bit rates ranging from **300 to 9600 bits per second**.
* This range covers the typical bit rates for older mobile communication systems like **GSM** and **landline modems**.

</details>

### 53. The ATM is an example for \_\_\_\_\_\_\_\_\_\_\_\_\_ circuit network.

1. Datagram subnet
2. Virtual circuit subnet
3. Packet subnet
4. Volume subnet

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) Virtual circuit subnet**

#### Explanation:

* **ATM (Asynchronous Transfer Mode)** uses a **virtual circuit subnet** for data transmission.
* In virtual circuit networks, a predefined path is established between the sender and receiver before data transfer.
* The ATM uses this method to ensure that data packets travel along the same path throughout the communication, which allows for more efficient data transfer.

</details>

### 54. Which agency sets the standards for telecommunications internationally?

1. International Telecommunication Union (ITU)
2. International Centre for Telecommunication Science (ICTS)
3. International Telecommunication Protocol (ITP)
4. Integrated Telecommunication of the United Nations (ITUN)

<details>

<summary>Show me the answer</summary>

#### Answer:

**1) International Telecommunication Union (ITU)**

#### Explanation:

* The **ITU** is the specialized agency of the United Nations responsible for setting global telecommunications standards.
* It works to ensure the efficient use of telecommunication networks and promotes international cooperation in this field.
* It also allocates global radio-frequency spectrum and satellite orbits.

</details>

### 55. Standard dimensions (mm x mm) of A3 drawing sheet is

1. 11.69 × 16.54
2. 29.7 × 42
3. 297 × 420
4. 420 × 280

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) 297 × 420**

#### Explanation:

* The **A3** drawing sheet has standard dimensions of **297 mm × 420 mm**.
* The A series of paper sizes follows a standard where each size is half of the size of the previous one when folded.
* A3 is commonly used for large-format drawings, schematics, and documents.

</details>

### 56. Which of the following methods of charging depreciation of an asset has increased amount of depreciation as the age of asset increases

1. Sum-of-year digit
2. Sinking fund
3. Diminishing balance
4. Straight line

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) Diminishing balance**

#### Explanation:

* **Diminishing balance method** calculates depreciation at a fixed percentage of the asset's declining book value each year.
* As the asset's value decreases over time, the depreciation expense increases because it is calculated on the remaining book value.
* This method results in higher depreciation costs in the earlier years of the asset's life and decreases over time.

</details>

### 57. The process of optimizing the project’s limited resources without extending the project duration is known as

1. Project crashing
2. Resource levelling
3. Resource smoothing
4. Networking

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) Resource smoothing**

#### Explanation:

* **Resource smoothing** aims to optimize the use of available resources without extending the project duration.
* It adjusts the resource usage to ensure that resources are allocated in a balanced manner over time while keeping the project end date unchanged.
* It does not involve adding additional resources or changing the project's timeline.

</details>

### 58. The process of composing/raising the required fund from different sources such as equity, preferred stock, bond and debenture is known as

1. Capital structure planning
2. Project financing
3. Capital budgeting decision
4. Deducing earning per share

<details>

<summary>Show me the answer</summary>

#### Answer:

**2) Project financing**

#### Explanation:

* **Project financing** involves raising funds for a specific project through various sources like equity, bonds, debentures, and preferred stock.
* It focuses on obtaining financial resources needed for project execution, ensuring that the right mix of capital sources is used.

</details>

### 59. In which of the following society, people used to seek their existence on growing plants for their cattle and domestic animals

1. Pastoral society
2. Tribal society
3. Horticultural society
4. Agricultural society

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) Horticultural society**

#### Explanation:

* **Horticultural society** is based on the cultivation of plants for food and resources, often supporting domestic animals as well.
* People in this society primarily focus on growing crops like fruits, vegetables, and other plants that serve both human and livestock needs.

</details>

### 60. According to Nepal Engineering Council Act, 2055 (Revised, 2079), all engineering academic institutions shall be …………………….. in the Council.

1. Affiliated
2. United
3. Recognized
4. Associated

<details>

<summary>Show me the answer</summary>

#### Answer:

**3) Recognized**

#### Explanation:

* According to the **Nepal Engineering Council Act, 2055 (Revised, 2079)**, all engineering academic institutions in Nepal must be **recognized** by the Council.
* Recognition ensures that the institutions meet the necessary academic standards and are authorized to offer engineering education.

</details>
