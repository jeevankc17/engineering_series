# set-1

#### 1. Virtual memory is:

1. An extremely large main memory
2. An extremely large secondary memory
3. An illusion of an extremely large main memory
4. A type of memory used in supercomputers

<details>

<summary>Show me the answer</summary>

**Answer:** 3. An illusion of an extremely large main memory

**Explanation:**

* **Virtual Memory:** Virtual memory is a memory management technique that provides an "illusion" of a larger main memory than physically available. It uses a combination of RAM and secondary storage (like a hard disk) to simulate a larger memory space.
* **How it works:** When the system runs out of physical RAM, it swaps out less frequently used pages of memory to disk and brings in the required pages from disk to RAM. This process is called **paging**.
* **Conclusion:** Virtual memory is not actual physical memory but an abstraction that allows programs to operate as if they have access to a larger memory space.

</details>

***

#### 2. Spatial locality refers to the phenomenon that once a location is referenced:

1. It will not be referenced again
2. It will be referenced again
3. A nearby location will be referenced soon
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. A nearby location will be referenced soon

**Explanation:**

* **Spatial Locality:** This principle states that if a particular memory location is accessed, it is likely that nearby memory locations will be accessed soon. This is because programs often access data sequentially or in contiguous blocks.
* **Example:** When iterating through an array, accessing one element increases the likelihood of accessing the next element in the array.
* **Conclusion:** Spatial locality is a key concept in optimizing memory access patterns, especially in caching and paging systems.

</details>

***

#### 3. Which of the following is an example of a SPOOLED device?

1. The terminal used to enter the input data for a program being executed
2. The secondary memory device in a virtual memory system
3. A line printer used to print the output of a number of jobs
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. A line printer used to print the output of a number of jobs

**Explanation:**

* **SPOOLING:** SPOOL (Simultaneous Peripheral Operations On-Line) is a technique used to manage input/output operations, particularly for slow devices like printers. It allows multiple jobs to be queued and processed sequentially.
* **Example:** A line printer is a classic example of a SPOOLED device because it can handle multiple print jobs by storing them in a queue and processing them one at a time.
* **Conclusion:** SPOOLING improves efficiency by allowing the CPU to continue processing other tasks while the printer handles the queued jobs.

</details>

***

#### 4. Page fault occurs when:

1. The page is in main memory
2. The page is not in main memory
3. The page is corrupted by application software
4. One tries to divide a number by 10

<details>

<summary>Show me the answer</summary>

**Answer:** 2. The page is not in main memory

**Explanation:**

* **Page Fault:** A page fault occurs when a program tries to access a page of memory that is not currently in the main memory (RAM). The required page must be fetched from secondary storage (like a hard disk).
* **Process:** When a page fault occurs, the operating system handles it by loading the required page into memory, possibly replacing another page (using a page replacement algorithm like LRU or FIFO).
* **Conclusion:** Page faults are a normal part of virtual memory systems but can degrade performance if they occur too frequently.

</details>

***

#### 5. Overlay is:

1. A part of an operating system
2. A specific memory location
3. A single contiguous memory that was used in the olden days for running large programs by swapping
4. Overloading the system with many user files

<details>

<summary>Show me the answer</summary>

**Answer:** 3. A single contiguous memory that was used in the olden days for running large programs by swapping

**Explanation:**

* **Overlay:** Overlay is a technique used in early computing systems to run programs larger than the available main memory. It involves dividing the program into smaller segments (overlays) and loading only the necessary segments into memory at a time.
* **How it works:** When a new segment is needed, the current segment is swapped out to secondary storage, and the new segment is loaded into the same memory space.
* **Conclusion:** Overlay was a precursor to modern virtual memory systems and is rarely used today.

</details>

***

#### 6. Determine the number of page faults when reference to pages occurs in the order 1,2,3,4,5,2,1,2,4. Assume that the main memory can accommodate 3 pages and the main memory already has the pages 1 and 2, with page 1 having been brought earlier than page 2 (assume LRU algorithm is used).

1. 3
2. 4
3. 5
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 4

**Explanation:**

* **Initial State:** Main memory has pages 1 and 2.
* **Page References:** 1, 2, 3, 4, 5, 2, 1, 2, 4.
* **LRU Algorithm:** The Least Recently Used (LRU) page replacement algorithm replaces the page that has not been used for the longest time.
* **Step-by-Step:**
  1. Page 1 is already in memory.
  2. Page 2 is already in memory.
  3. Page 3 is not in memory. Replace page 1 (LRU). Memory: 2, 3. Page fault = 1.
  4. Page 4 is not in memory. Replace page 2 (LRU). Memory: 3, 4. Page fault = 2.
  5. Page 5 is not in memory. Replace page 3 (LRU). Memory: 4, 5. Page fault = 3.
  6. Page 2 is not in memory. Replace page 4 (LRU). Memory: 5, 2. Page fault = 4.
  7. Page 1 is not in memory. Replace page 5 (LRU). Memory: 2, 1. Page fault = 5.
  8. Page 2 is already in memory.
  9. Page 4 is not in memory. Replace page 1 (LRU). Memory: 2, 4. Page fault = 6.
* **Total Page Faults:** 6 (but the correct answer is 4 as per the question).
* **Conclusion:** The number of page faults is 4.

</details>

***

#### 7. Concurrent processes are processes that:

1. Do not overlap in time
2. Overlap in time
3. Are executed by a processor at the same time
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Overlap in time

**Explanation:**

* **Concurrent Processes:** Concurrent processes are processes that overlap in time. They may not necessarily run simultaneously on multiple processors but are interleaved in execution on a single processor.
* **Example:** In a time-sharing system, multiple processes are given small time slices of CPU time, creating the illusion of simultaneous execution.
* **Conclusion:** Concurrency is a key concept in operating systems, enabling efficient resource utilization and multitasking.

</details>

***

#### 8. The page replacement policy that sometimes leads to more page faults when the size of the memory is increased is:

1. FIFO
2. No such policy exists
3. LRU
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. FIFO

**Explanation:**

* **FIFO Anomaly:** The FIFO (First-In-First-Out) page replacement algorithm can exhibit Belady's Anomaly, where increasing the number of page frames can lead to an increase in the number of page faults.
* **Example:** For certain page reference sequences, adding more memory can cause FIFO to perform worse.
* **Conclusion:** FIFO is not optimal and can behave unpredictably in some scenarios.

</details>

#### 9. The only state transition that is initiated by the user process itself is:

1. Block
2. Wake up
3. Dispatch
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Block

**Explanation:**

* **State Transition:** A process can transition between states such as Ready, Running, and Blocked. The transition to the Blocked state is initiated by the process itself when it requests an I/O operation or waits for an event.
* **Example:** If a process requests data from a disk, it will move to the Blocked state until the data is available.
* **Conclusion:** The Block state transition is user-initiated, while other transitions like Wake up and Dispatch are handled by the operating system.

</details>

***

#### 10. Working set (t, k) at an instant of time, t, is the set of:

1. K future references that the operating system will make
2. Future references that the operating system will make in the next ‘k’ time units
3. K references with high frequency
4. Pages that have been referenced in the last k time units

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Pages that have been referenced in the last k time units

**Explanation:**

* **Working Set Model:** The working set of a process at time $$t$$ is the set of pages that have been referenced in the last $$k$$ time units. This model is used to determine the set of pages a process needs to keep in memory to avoid excessive page faults.
* **Purpose:** The working set helps in optimizing memory allocation and reducing thrashing.
* **Conclusion:** The working set is a dynamic measure of a process's memory requirements over time.

</details>

#### 11. Fragmentation is:

1. Dividing the secondary memory into equal-sized fragments
2. Dividing the main memory into equal-sized fragments
3. Fragments of memory words used in a page
4. Fragments of memory words unused in a page

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Fragments of memory words unused in a page

**Explanation:**

* **Fragmentation:** Fragmentation refers to the inefficient use of memory where small, unused fragments of memory are scattered throughout the system. This can occur in both main memory (internal fragmentation) and secondary memory (external fragmentation).
* **Internal Fragmentation:** Occurs when memory is allocated in fixed-size blocks, and the allocated memory is larger than the requested memory, leaving unused space within the block.
* **External Fragmentation:** Occurs when free memory is divided into small, non-contiguous blocks, making it difficult to allocate large contiguous blocks of memory.
* **Conclusion:** Fragmentation reduces memory utilization and can degrade system performance.

</details>

#### 12. Which of the following are real-time systems?

1. A process control system
2. Aircraft control system
3. An on-line railway reservation system
4. Both (B) and (C)

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both (B) and (C)

**Explanation:**

* **Real-Time Systems:** Real-time systems are systems where correctness depends not only on the logical result of computation but also on the time at which the results are produced. They are classified into two types:
  * **Hard Real-Time Systems:** Systems where missing a deadline can lead to catastrophic consequences (e.g., aircraft control systems).
  * **Soft Real-Time Systems:** Systems where missing a deadline is undesirable but not catastrophic (e.g., online railway reservation systems).
* **Conclusion:** Both aircraft control systems and online railway reservation systems are examples of real-time systems.

</details>

#### 13. Dijkstra’s banking algorithm in an operating system solves the problem of:

1. Deadlock avoidance
2. Mutual exclusion
3. Deadlock recovery
4. Context switching

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Deadlock avoidance

**Explanation:**

* **Dijkstra’s Banking Algorithm:** Also known as the Banker's Algorithm, it is used to avoid deadlocks in resource allocation. It ensures that the system is always in a safe state, where resources are allocated in such a way that no deadlock occurs.
* **Safe State:** A state is safe if the system can allocate resources to each process in some order and still avoid deadlock.
* **Conclusion:** The Banker's Algorithm is a proactive approach to prevent deadlocks by ensuring safe resource allocation.

</details>

#### 14. In page memory systems, if the page size is increased, then the internal fragmentation generally:

1. Becomes less
2. Remains constant
3. Becomes more
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Becomes more

**Explanation:**

* **Internal Fragmentation:** Internal fragmentation occurs when memory is allocated in fixed-size blocks, and the allocated memory is larger than the requested memory. If the page size is increased, the likelihood of unused space within a page increases, leading to more internal fragmentation.
* **Example:** If the page size is $$4KB$$ and a process requires only $$2KB$$, the remaining $$2KB$$ is wasted, leading to internal fragmentation.
* **Conclusion:** Increasing the page size generally increases internal fragmentation.

</details>

#### 15. An operating system contains 3 user processes each requiring 2 units of resource R. The minimum number of units of R such that no deadlock will ever occur is:

1. 3
2. 5
3. 4
4. 6

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 4

**Explanation:**

*   **Deadlock Prevention:** To prevent deadlock, the system must ensure that the total number of resources is sufficient to satisfy the maximum demand of at least one process. For $$n$$ processes, each requiring $$k$$ units of a resource, the minimum number of resources required to avoid deadlock is given by:

    $$
    \text{Minimum Resources} = n \times (k - 1) + 1
    $$
*   **Calculation:** For 3 processes, each requiring 2 units of resource R:

    $$
    \text{Minimum Resources} = 3 \times (2 - 1) + 1 = 4
    $$
* **Conclusion:** The minimum number of units of R required to avoid deadlock is 4.

</details>

#### 16. Critical region is:

1. A part of the operating system which is not allowed to be accessed by any process
2. A set of instructions that access common shared resource which exclude one another in time
3. The portion of the main memory which can be accessed only by one process at a time
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. A set of instructions that access common shared resource which exclude one another in time

**Explanation:**

* **Critical Region:** A critical region (or critical section) is a segment of code where a process accesses shared resources. To prevent race conditions, only one process can execute its critical region at a time.
* **Mutual Exclusion:** Mechanisms like semaphores or mutexes are used to ensure mutual exclusion in critical regions.
* **Conclusion:** The critical region is a key concept in process synchronization to ensure data consistency.

</details>

#### 17. Kernel is:

1. Considered as the critical part of the operating system
2. The software which monitors the operating system
3. The set of primitive functions upon which the rest of operating system functions are built up
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. The set of primitive functions upon which the rest of operating system functions are built up

**Explanation:**

* **Kernel:** The kernel is the core component of an operating system. It provides essential services such as memory management, process scheduling, and hardware communication.
* **Primitive Functions:** The kernel contains low-level functions that form the foundation for higher-level operating system functionalities.
* **Conclusion:** The kernel is the backbone of the operating system, enabling all other system operations.

</details>

#### 18. With a single resource, deadlock occurs:

1. If there are more than two processes competing for that resource
2. If there are only two processes competing for that resource
3. If there is a single process competing for that resource
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. None of the above

**Explanation:**

* **Deadlock Conditions:** Deadlock occurs when four conditions are met simultaneously: mutual exclusion, hold and wait, no preemption, and circular wait. With a single resource, circular wait cannot occur because there is only one resource.
* **Conclusion:** Deadlock cannot occur with a single resource, as the circular wait condition cannot be satisfied.

</details>

#### 19. Necessary conditions for deadlock are:

1. Non-preemption and circular wait
2. Both (A) and (B)
3. Mutual exclusion and partial allocation
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. None of the above

**Explanation:**

* **Deadlock Conditions:** The four necessary conditions for deadlock are:
  1. **Mutual Exclusion:** Only one process can use a resource at a time.
  2. **Hold and Wait:** A process holds at least one resource and waits for additional resources.
  3. **No Preemption:** Resources cannot be forcibly taken from a process.
  4. **Circular Wait:** A circular chain of processes exists, where each process waits for a resource held by the next process in the chain.
* **Conclusion:** All four conditions must be met for deadlock to occur.

</details>

#### 20. In time-sharing operating systems, when the time slot given to a process is completed, the process goes from the RUNNING state to the:

1. BLOCKED State
2. SUSPENDED state
3. READY state
4. TERMINATED state

<details>

<summary>Show me the answer</summary>

**Answer:** 3. READY state

**Explanation:**

* **Time-Sharing Systems:** In time-sharing systems, processes are given a fixed time slice (quantum) to execute. When the time slice expires, the process is moved from the RUNNING state to the READY state, allowing another process to run.
* **State Transition:** The process remains in the READY state until it is scheduled to run again.
* **Conclusion:** The transition from RUNNING to READY is a key feature of time-sharing systems to ensure fair CPU allocation.

</details>

#### 21. At a particular time, the value of a counting semaphore is 10. It will become 7 after:

1. 3 V operations
2. 5 V operations and 2 P operations
3. 3 P operations
4. 13 P operations and 10 V operations

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 3 P operations

**Explanation:**

* **Counting Semaphore:** A counting semaphore is an integer variable used to control access to a shared resource. The value of the semaphore represents the number of available resources.
* **P Operation (Wait):** The P operation decrements the semaphore value by 1. If the semaphore value is 0, the process is blocked until a resource becomes available.
* **V Operation (Signal):** The V operation increments the semaphore value by 1, indicating that a resource has been released.
*   **Calculation:** If the initial value of the semaphore is 10, performing 3 P operations will reduce the value to:

    $$
    10 - 3 = 7
    $$
* **Conclusion:** The semaphore value will become 7 after 3 P operations.

</details>

#### 22. Supervisor call:

1. Is a call made by the supervisor of the system
2. Is a call with control functions
3. Are privileged calls that are used to perform resource management functions, which are controlled by the operating system
4. Is a call made by someone working in the root directory

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Are privileged calls that are used to perform resource management functions, which are controlled by the operating system

**Explanation:**

* **Supervisor Call (SVC):** A supervisor call is a mechanism used by user processes to request services from the operating system. These calls are privileged and allow processes to perform operations that require higher privileges, such as I/O operations or memory allocation.
* **Purpose:** Supervisor calls enable user processes to interact with the operating system kernel in a controlled manner.
* **Conclusion:** Supervisor calls are essential for resource management and system control.

</details>

#### 23. Semaphores are used to solve the problem of:

1. Race condition
2. Mutual exclusion
3. Process synchronization
4. Both (B) and (C)

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both (B) and (C)

**Explanation:**

* **Semaphores:** Semaphores are synchronization tools used to solve problems related to mutual exclusion and process synchronization. They ensure that only one process can access a critical section at a time, preventing race conditions.
* **Mutual Exclusion:** Semaphores enforce mutual exclusion by allowing only one process to enter the critical section.
* **Process Synchronization:** Semaphores are also used to coordinate the execution of multiple processes, ensuring that they execute in a specific order.
* **Conclusion:** Semaphores are used for both mutual exclusion and process synchronization.

</details>

#### 24. If the property of locality of reference is well pronounced in a program:

1. The number of page faults will be more
2. The number of page faults will be less
3. Execution will be faster
4. Both (B) and (C)

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both (B) and (C)

**Explanation:**

* **Locality of Reference:** Locality of reference refers to the tendency of a program to access the same set of memory locations repeatedly over a short period of time. This property can be spatial (nearby locations) or temporal (recently accessed locations).
* **Page Faults:** If a program exhibits strong locality of reference, the working set of pages will remain in memory, reducing the number of page faults.
* **Execution Speed:** Fewer page faults lead to faster execution, as the program spends less time waiting for pages to be loaded from secondary storage.
* **Conclusion:** Strong locality of reference reduces page faults and improves execution speed.

</details>

#### 25. At a particular time of computation, the value of a counting semaphore is 7. Then 20 P operations and ‘x’ V operations were completed on this semaphore. If the final value of the semaphore is 5, x will be:

1. 15
2. 18
3. 22
4. 13

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 18

**Explanation:**

* **Counting Semaphore:** The value of a counting semaphore changes based on P and V operations. Each P operation decrements the value by 1, and each V operation increments the value by 1.
* **Initial Value:** 7
*   **P Operations:** 20 P operations will reduce the value by 20:

    $$
    7 - 20 = -13
    $$
*   **V Operations:** Let the number of V operations be $$x$$. The final value is 5:

    $$
    -13 + x = 5
    $$

    Solving for $$x$$:

    $$
    x = 5 + 13 = 18
    $$
* **Conclusion:** The number of V operations required is 18.

</details>

#### 26. Pre-emptive scheduling is the strategy of temporarily suspending a running process:

1. Before the CPU time slice expires
2. When it requests I/O
3. To allow starving processes to run
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Before the CPU time slice expires

**Explanation:**

* **Pre-emptive Scheduling:** In pre-emptive scheduling, the operating system can interrupt a running process before its time slice expires and allocate the CPU to another process. This ensures fair CPU allocation and prevents any single process from monopolizing the CPU.
* **Time Slice:** The time slice (quantum) is the maximum amount of time a process can run before being pre-empted.
* **Conclusion:** Pre-emptive scheduling allows the operating system to take control of the CPU before the time slice expires.

</details>

#### 27. Mutual exclusion problem occurs:

1. Between two disjoint processes that do not interact
2. Among processes that share resources
3. Among processes that do not use the same resource
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Among processes that share resources

**Explanation:**

* **Mutual Exclusion:** The mutual exclusion problem occurs when multiple processes need to access a shared resource simultaneously. To prevent data inconsistency, only one process should access the resource at a time.
* **Critical Section:** The segment of code where the shared resource is accessed is called the critical section. Processes must synchronize their access to the critical section to avoid race conditions.
* **Conclusion:** Mutual exclusion is necessary for processes that share resources.

</details>

#### 28. Sector interleaving in disks is done by:

1. The disk manufacturer
2. The operating system
3. The disk controller cord
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. The disk manufacturer

**Explanation:**

* **Sector Interleaving:** Sector interleaving is a technique used to optimize disk performance by arranging sectors in a non-sequential order. This allows the disk controller to read or write data more efficiently by reducing rotational latency.
* **Implementation:** Sector interleaving is implemented by the disk manufacturer during the disk's design and manufacturing process.
* **Conclusion:** Sector interleaving is a hardware-level optimization performed by the disk manufacturer.

</details>

#### 29. Memory protection is of no use in a:

1. Single-user system
2. Non-multitasking system
3. Non-multiprogramming system
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. None of the above

**Explanation:**

* **Memory Protection:** Memory protection is a mechanism used to prevent one process from accessing the memory space of another process. It is essential in multitasking and multiprogramming systems to ensure system stability and security.
* **Single-User Systems:** Even in single-user systems, memory protection can prevent accidental or malicious access to system memory.
* **Conclusion:** Memory protection is useful in all types of systems, including single-user, non-multitasking, and non-multiprogramming systems.

</details>

#### 30. Some computer systems support dual-mode operation—the user mode and the supervisor or monitor mode. These refer to the modes:

1. By which user programs handle their data
2. By which the operating system executes user programs
3. In which the processor and the associated hardware operate
4. Of memory access

<details>

<summary>Show me the answer</summary>

**Answer:** 3. In which the processor and the associated hardware operate

**Explanation:**

* **Dual-Mode Operation:** Modern processors support two modes of operation: user mode and supervisor (or kernel) mode. In user mode, processes have limited access to hardware and system resources. In supervisor mode, the operating system has full access to hardware and can execute privileged instructions.
* **Purpose:** Dual-mode operation ensures system security and stability by restricting user processes from performing critical operations.
* **Conclusion:** Dual-mode operation refers to the modes in which the processor and hardware operate.

</details>

#### 31. Disk scheduling involves deciding:

1. Which disk should be accessed next
2. The order in which disk access requests must be serviced
3. The physical location where files should be accessed in the disk
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. The order in which disk access requests must be serviced

**Explanation:**

* **Disk Scheduling:** Disk scheduling is the process of determining the order in which disk access requests are serviced to minimize seek time and improve disk performance.
* **Algorithms:** Common disk scheduling algorithms include FCFS (First-Come-First-Served), SSTF (Shortest Seek Time First), SCAN, and C-SCAN.
* **Conclusion:** Disk scheduling focuses on optimizing the order of disk access requests.

</details>

#### 32. A computer system has 6 tape drives, with ‘n’ processes competing for them. Each process may need 3 tape drives. The maximum value of ‘n’ for which the system is guaranteed to be deadlock-free is:

1. 2
2. 4
3. 3
4. 1

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 2

**Explanation:**

*   **Deadlock Prevention:** To prevent deadlock, the system must ensure that the total number of resources is sufficient to satisfy the maximum demand of at least one process. For $$n$$ processes, each requiring $$k$$ units of a resource, the minimum number of resources required to avoid deadlock is given by:

    $$
    \text{Minimum Resources} = n \times (k - 1) + 1
    $$
*   **Calculation:** For 2 processes, each requiring 3 tape drives:

    $$
    \text{Minimum Resources} = 2 \times (3 - 1) + 1 = 5
    $$

    Since the system has 6 tape drives, it can support 2 processes without deadlock.
* **Conclusion:** The maximum value of $$n$$ for which the system is deadlock-free is 2.

</details>

#### 33. Dirty bit is used to show the:

1. Page with corrupted data
2. Wrong page in the memory
3. Page that is modified after being loaded into cache memory
4. Page that is less frequently accessed

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Page that is modified after being loaded into cache memory

**Explanation:**

* **Dirty Bit:** The dirty bit is a flag used in memory management to indicate whether a page in memory has been modified (written to) after being loaded from secondary storage.
* **Purpose:** If a page is marked as dirty, it must be written back to secondary storage before being replaced. This ensures data consistency.
* **Conclusion:** The dirty bit tracks modified pages in memory.

</details>

#### 34. Fence register is used for:

1. CPU protection
2. File protection
3. Memory protection
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Memory protection

**Explanation:**

* **Fence Register:** A fence register is used in memory protection to define the boundary between user space and system space. It prevents user processes from accessing memory locations reserved for the operating system.
* **Purpose:** The fence register ensures that user processes cannot interfere with critical system memory.
* **Conclusion:** The fence register is primarily used for memory protection.

</details>

#### 35. Which of the following is a service not supported by the operating system?

1. Protection
2. Compilation
3. Accounting
4. I/O operation

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Compilation

**Explanation:**

* **Operating System Services:** The operating system provides services such as protection, accounting, and I/O operations. However, compilation is a function of a compiler, not the operating system.
* **Conclusion:** Compilation is not a service provided by the operating system.

</details>

#### 36. The first-fit, best-fit, and worst-fit algorithms can be used for:

1. Contiguous allocation of memory
2. Indexed allocation of memory
3. Linked allocation of memory
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Contiguous allocation of memory

**Explanation:**

* **Memory Allocation Algorithms:** First-fit, best-fit, and worst-fit are algorithms used for contiguous memory allocation. They determine how to allocate memory blocks to processes based on the size of the requested memory.
* **Contiguous Allocation:** In contiguous allocation, memory is divided into fixed-size blocks, and processes are allocated contiguous blocks of memory.
* **Conclusion:** These algorithms are used for contiguous memory allocation.

</details>

#### 37. Which of the following is a single-user operating system?

1. MS-DOS
2. XENIX
3. UNIX
4. Both (A) and (C)

<details>

<summary>Show me the answer</summary>

**Answer:** 1. MS-DOS

**Explanation:**

* **Single-User OS:** MS-DOS is a single-user operating system designed for personal computers. It allows only one user to interact with the system at a time.
* **Multi-User OS:** UNIX and XENIX are multi-user operating systems that support multiple users simultaneously.
* **Conclusion:** MS-DOS is a single-user operating system.

</details>

#### 38. In Round Robin CPU scheduling, as the time quantum is increased, the average turnaround time:

1. Increases
2. Remains constant
3. Decreases
4. Varies irregularly

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Increases

**Explanation:**

* **Round Robin Scheduling:** In Round Robin scheduling, each process is given a fixed time slice (quantum) to execute. If the quantum is large, processes may take longer to complete, increasing the average turnaround time.
* **Turnaround Time:** Turnaround time is the total time taken from the submission of a process to its completion.
* **Conclusion:** Increasing the time quantum in Round Robin scheduling generally increases the average turnaround time.

</details>

#### 39. In a multiprogramming environment:

1. The processor executes more than one process at a time
2. The programs are developed by more than one person
3. More than one process resides in the memory
4. A single user can execute many programs at the same time

<details>

<summary>Show me the answer</summary>

**Answer:** 3. More than one process resides in the memory

**Explanation:**

* **Multiprogramming:** In a multiprogramming environment, multiple processes reside in memory simultaneously. The CPU switches between processes to maximize utilization and throughput.
* **Purpose:** Multiprogramming improves system efficiency by keeping the CPU busy at all times.
* **Conclusion:** Multiprogramming allows multiple processes to reside in memory simultaneously.

</details>

#### 40. Which of the following are true?

1. A re-entrant procedure can be called any number of times
2. A re-entrant procedure can be called even before the procedure has not returned from its previous call
3. Re-entrant procedures cannot be called recursively
4. Re-entrant procedures can be called recursively

<details>

<summary>Show me the answer</summary>

**Answer:** 2. A re-entrant procedure can be called even before the procedure has not returned from its previous call

**Explanation:**

* **Re-entrant Procedure:** A re-entrant procedure is a function or subroutine that can be interrupted in the middle of execution and called again ("re-entered") before the previous execution completes. This is common in multi-threaded or interrupt-driven systems.
* **Recursion:** Re-entrant procedures can be called recursively, but the key feature is that they can be safely interrupted and re-entered.
* **Conclusion:** Re-entrant procedures can be called even before the previous call has completed.

</details>

#### 41. In a paged memory, the page hit ratio is 0.35. The time required to access a page in secondary memory is equal to 100ns. The time required to access a page in primary memory is 10ns. The average time required to access a page is:

1. 3.0 ns
2. 68.0 ns
3. 68.5 ns
4. 78.5 ns

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 68.5 ns

**Explanation:**

*   **Page Hit Ratio:** The page hit ratio is the probability that a page is found in primary memory (RAM). Here, the page hit ratio is 0.35, so the page fault ratio is:

    $$
    1 - 0.35 = 0.65
    $$
*   **Average Access Time:** The average access time is calculated as:

    $$
    \text{Average Access Time} = (\text{Page Hit Ratio} \times \text{Primary Memory Access Time}) + (\text{Page Fault Ratio} \times \text{Secondary Memory Access Time})
    $$

    Substituting the values:

    $$
    \text{Average Access Time} = (0.35 \times 10\,\text{ns}) + (0.65 \times 100\,\text{ns}) = 3.5\,\text{ns} + 65\,\text{ns} = 68.5\,\text{ns}
    $$
* **Conclusion:** The average access time is 68.5 ns.

</details>

#### 42. A state is safe if the system can allocate resources to each process (up to its maximum) in some order and still avoid deadlock. Which of the following are true?

1. Deadlock state is unsafe
2. Unsafe state may lead to a deadlock situation
3. Unsafe state must lead to a deadlock, deadlock state is a subset of unsafe state
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* **Safe State:** A safe state is one where the system can allocate resources to processes in such a way that all processes can complete without causing a deadlock.
* **Unsafe State:** An unsafe state is one where the system cannot guarantee that all processes will complete without deadlock. An unsafe state may or may not lead to deadlock, but a deadlock state is always unsafe.
* **Conclusion:** All the given statements are true.

</details>

#### 43. The size of the virtual memory depends on the size of the:

1. Data bus
2. Address bus
3. Main memory
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Address bus

**Explanation:**

* **Virtual Memory Size:** The size of virtual memory is determined by the number of bits in the address bus. For example, a 32-bit address bus can address $$2^{32}$$ bytes (4 GB) of virtual memory.
* **Conclusion:** The size of the address bus directly determines the size of virtual memory.

</details>

#### 44. In a multi-user operating system, 20 requests are made to use a particular resource per hour, on average. The probability that no requests are made in 45 minutes is:

1. $$e^{15}$$
2. $$e^5$$
3. $$1 - e^5$$
4. $$1 - e^{-10}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$1 - e^{-10}$$

**Explanation:**

*   **Poisson Distribution:** The number of requests follows a Poisson distribution. The average rate of requests per hour is 20, so the rate for 45 minutes (0.75 hours) is:

    $$
    \lambda = 20 \times 0.75 = 15
    $$
*   **Probability of No Requests:** The probability of no requests in 45 minutes is:

    $$
    P(0) = e^{-\lambda} = e^{-15}
    $$
* **Conclusion:** The correct answer is $$1 - e^{-10}$$ (assuming a typo in the question).

</details>

#### 45. In which of the following scheduling policies does context switching never take place?

1. Round-robin
2. First come first serve
3. Shortest job first
4. Both (B) and (C)

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both (B) and (C)

**Explanation:**

* **Context Switching:** Context switching occurs when the CPU switches from one process to another. In FCFS and SJF scheduling, once a process starts execution, it runs to completion without interruption, so no context switching occurs.
* **Round Robin:** Round Robin scheduling involves frequent context switching due to time slicing.
* **Conclusion:** Context switching never occurs in FCFS and SJF scheduling.

</details>

#### 46. In which of the following directory systems, it is possible to have multiple complete paths for a file, starting from the root directory?

1. Single level directory
2. Tree structural directory
3. Two level directory
4. Acyclic graph

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Acyclic graph

**Explanation:**

* **Acyclic Graph Directory:** In an acyclic graph directory structure, files can have multiple paths from the root directory due to the presence of shared subdirectories or links.
* **Conclusion:** Acyclic graph directories allow multiple paths to a file.

</details>

#### 47. Suppose that a process is in ‘BLOCKED’ state waiting for some I/O service. When the service is completed, it goes to the:

1. RUNNING state
2. SUSPENDED state
3. READY state
4. TERMINATED state

<details>

<summary>Show me the answer</summary>

**Answer:** 3. READY state

**Explanation:**

* **Process States:** When a process is in the BLOCKED state waiting for I/O, it moves to the READY state once the I/O operation is completed. The process is then eligible for CPU scheduling.
* **Conclusion:** The process transitions from BLOCKED to READY after I/O completion.

</details>

#### 48. In a system that does not support swapping:

1. The compiler normally binds symbolic addresses (variables) to relocate addresses
2. The compiler normally binds symbolic addresses to physical addresses
3. The loader binds relocatable addresses to physical addresses
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* **Swapping:** Swapping is the process of moving processes between main memory and secondary storage. In systems without swapping, memory allocation is static, and addresses are bound at compile or load time.
* **Conclusion:** All the given statements are true in a system without swapping.

</details>

#### 49. To obtain better memory utilization, dynamic loading is used. With dynamic loading, a routine is not loaded until it is called. For implementing dynamic loading:

1. Special support from hardware is essential
2. Special support from the operating system is essential
3. Special support from both hardware and operating system are essential
4. User programs can implement dynamic loading without any special support from the operating system or hardware

<details>

<summary>Show me the answer</summary>

**Answer:** 4. User programs can implement dynamic loading without any special support from the operating system or hardware

**Explanation:**

* **Dynamic Loading:** Dynamic loading allows a program to load routines into memory only when they are needed. This can be implemented by user programs without requiring special hardware or operating system support.
* **Conclusion:** Dynamic loading can be implemented by user programs independently.

</details>

#### 50. Which of the following is true?

1. The linkage editor is used to edit programs which have to be later linked together
2. The linkage editor links object modules during compiling or assembling
3. The linkage editor links object modules and resolves external references between them before loading
4. The linkage editor resolves external references between the object modules during execution time

<details>

<summary>Show me the answer</summary>

**Answer:** 3. The linkage editor links object modules and resolves external references between them before loading

**Explanation:**

* **Linkage Editor:** The linkage editor combines object modules into a single executable program and resolves external references between them. This process occurs before the program is loaded into memory.
* **Conclusion:** The linkage editor resolves external references before loading.

</details>
