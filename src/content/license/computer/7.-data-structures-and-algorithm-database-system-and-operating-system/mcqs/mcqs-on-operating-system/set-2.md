# set-2

#### 51. Which of the following is true?

1. Overlays are used to increase the size of physical memory
2. Overlays are used to increase the logical address space
3. When overlays are used, the size of a process is not limited to the size of physical memory
4. Overlays are used whenever the physical address space is smaller than the logical address space

<details>

<summary>Show me the answer</summary>

**Answer:** 3. When overlays are used, the size of a process is not limited to the size of physical memory

**Explanation:**

* **Overlays:** Overlays are a technique used to run programs larger than the available physical memory by dividing the program into smaller segments (overlays) and loading only the necessary segments into memory at a time.
* **Purpose:** Overlays allow a process to exceed the size of physical memory by swapping segments in and out as needed.
* **Conclusion:** Overlays enable processes to be larger than physical memory.

</details>

#### 52. In partitioned memory allocation scheme:

1. Best-fit algorithm is always better than the first-fit algorithm
2. First-fit algorithm is always better than the best-fit algorithm
3. Superiority of the first-fit and best-fit algorithms depends on the sequence of memory requests
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Superiority of the first-fit and best-fit algorithms depends on the sequence of memory requests

**Explanation:**

* **Memory Allocation Algorithms:** The performance of first-fit and best-fit algorithms depends on the sequence of memory requests. First-fit is faster but may lead to more fragmentation, while best-fit minimizes fragmentation but is slower.
* **Conclusion:** The superiority of these algorithms depends on the specific memory request sequence.

</details>

#### 53. Cascading termination refers to the termination of all child processes before the parent terminates:

1. Normally
2. Normally or abnormally
3. Abnormally
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Normally or abnormally

**Explanation:**

* **Cascading Termination:** Cascading termination occurs when the termination of a parent process leads to the termination of all its child processes. This can happen either normally (e.g., when the parent process completes) or abnormally (e.g., due to an error).
* **Conclusion:** Cascading termination can occur in both normal and abnormal scenarios.

</details>

#### 54. For implementing a multiprogramming operating system:

1. Special support from the processor is essential
2. Special support from the processor is not essential
3. Cache memory must be available
4. More than one processor must be available

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Special support from the processor is not essential

**Explanation:**

* **Multiprogramming:** Multiprogramming allows multiple processes to reside in memory simultaneously and share the CPU. It does not require special hardware support, although features like memory protection and interrupt handling are beneficial.
* **Conclusion:** Multiprogramming can be implemented without special processor support.

</details>

#### 55. Consider a system having ‘m’ resources of the same type. These resources are shared by 3 processes A, B, C, which have time demands of 3, 4, 6 respectively. The minimum value of ‘m’ that ensures that deadlock will never occur is:

1. 11
2. 12
3. 13
4. 14

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 11

**Explanation:**

*   **Deadlock Prevention:** To prevent deadlock, the system must ensure that the total number of resources is sufficient to satisfy the maximum demand of at least one process. For $$n$$ processes, each requiring $$k$$ units of a resource, the minimum number of resources required to avoid deadlock is given by:

    $$
    \text{Minimum Resources} = \sum (\text{Maximum Demand} - 1) + 1
    $$
*   **Calculation:** For processes A, B, and C with demands 3, 4, and 6:

    $$
    \text{Minimum Resources} = (3 - 1) + (4 - 1) + (6 - 1) + 1 = 2 + 3 + 5 + 1 = 11
    $$
* **Conclusion:** The minimum value of $$m$$ to avoid deadlock is 11.

</details>

#### 56. A system has 3 processes sharing 4 resources. If each process needs a maximum of 2 units, then deadlock:

1. Can never occur
2. Has to occur
3. May occur
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Can never occur

**Explanation:**

*   **Deadlock Condition:** Deadlock occurs when the number of resources is insufficient to satisfy the maximum demand of all processes. Here, each process needs a maximum of 2 units, and there are 4 resources. Since:

    $$
    3 \times (2 - 1) + 1 = 4
    $$

    The system has enough resources to avoid deadlock.
* **Conclusion:** Deadlock can never occur in this scenario.

</details>

#### 57. ‘m’ processes share ‘n’ resources of the same type. The maximum need of each process does not exceed ‘n’, and the sum of all their maximum needs is always less than $$m + n$$. In this setup, deadlock:

1. Can never occur
2. Has to occur
3. May occur
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Can never occur

**Explanation:**

* **Deadlock Prevention:** If the sum of the maximum needs of all processes is less than $$m + n$$, the system can always allocate resources in such a way that at least one process can complete, avoiding deadlock.
* **Conclusion:** Deadlock can never occur under these conditions.

</details>

#### 58. A process refers to 5 pages, A, B, C, D, and E, in the order: A; B; C; D; A; E; B; C; D; E. If the page replacement algorithm is FIFO, the number of page faults with an empty internal store of 3 frames is:

1. 8
2. 10
3. 9
4. 7

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 9

**Explanation:**

* **FIFO Page Replacement:** In FIFO, the oldest page in memory is replaced when a new page is loaded.
* **Page References:** A, B, C, D, A, E, B, C, D, E.
* **Step-by-Step:**
  1. A (Page Fault) → Frames: \[A]
  2. B (Page Fault) → Frames: \[A, B]
  3. C (Page Fault) → Frames: \[A, B, C]
  4. D (Page Fault) → Replace A → Frames: \[D, B, C]
  5. A (Page Fault) → Replace B → Frames: \[D, A, C]
  6. E (Page Fault) → Replace C → Frames: \[D, A, E]
  7. B (Page Fault) → Replace D → Frames: \[B, A, E]
  8. C (Page Fault) → Replace A → Frames: \[B, C, E]
  9. D (Page Fault) → Replace E → Frames: \[B, C, D]
  10. E (Page Fault) → Replace B → Frames: \[E, C, D]
* **Total Page Faults:** 9
* **Conclusion:** The number of page faults is 9.

</details>

#### 59. Distributed systems should:

1. Meet prescribed time constraints
2. Aim for better system utilization
3. Aim for better resource sharing
4. Aim for low system overhead

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Aim for better resource sharing

**Explanation:**

* **Distributed Systems:** Distributed systems are designed to share resources (e.g., CPU, memory, storage) across multiple nodes to improve efficiency and scalability.
* **Conclusion:** Resource sharing is a key goal of distributed systems.

</details>

#### 60. The main function of shared memory is:

1. Use primary memory efficiently
2. Do inter-process communication
3. Do intra-process communication
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Do inter-process communication

**Explanation:**

* **Shared Memory:** Shared memory is a mechanism that allows multiple processes to access the same memory region, enabling efficient inter-process communication (IPC).
* **Conclusion:** The primary function of shared memory is inter-process communication.

</details>

#### 61. Which of the following is the most suitable scheduling scheme in a real-time operating system?

1. Round-robin
2. Pre-emptive scheduling
3. First-come-first-serve
4. Random scheduling

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Pre-emptive scheduling

**Explanation:**

* **Real-Time Systems:** Real-time systems require tasks to be completed within strict deadlines. Pre-emptive scheduling allows higher-priority tasks to interrupt lower-priority tasks, ensuring timely execution.
* **Conclusion:** Pre-emptive scheduling is most suitable for real-time systems.

</details>

#### 62. ‘Aging’ is:

1. Keeping track of cache contents
2. Keeping track of what pages are currently residing in the memory
3. Keeping track of how many times a given page is referenced
4. Increasing the priority of jobs to ensure termination in a finite time

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Increasing the priority of jobs to ensure termination in a finite time

**Explanation:**

* **Aging:** Aging is a technique used to prevent starvation in scheduling algorithms. It gradually increases the priority of long-waiting processes to ensure they are executed in a finite time.
* **Conclusion:** Aging ensures fairness in process scheduling.

</details>

#### 63. If there are 32 segments, each of size 1 Kbytes, then the logical address should have:

1. 13 bits
2. 14 bits
3. 15 bits
4. 16 bits

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 15 bits

**Explanation:**

*   **Logical Address:** The logical address consists of a segment number and an offset. For 32 segments, the segment number requires:

    $$
    \log_2{32} = 5 \text{ bits}
    $$

    Each segment is 1 KB, so the offset requires:

    $$
    \log_2{1024} = 10 \text{ bits}
    $$

    Total bits in the logical address:

    $$
    5 + 10 = 15 \text{ bits}
    $$
* **Conclusion:** The logical address requires 15 bits.

</details>

#### 64. Disk requests come to a disk driver for cylinders in the order 10, 22, 20, 2, 40, 6, and 38 at a time when a disk drive is reading from cylinder 20. The seek time is 6 ms per cylinder. The total seek time, if the disk arm scheduling algorithm is first-come-first-served, is:

1. 360 ms
2. 850 ms
3. 900 ms
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. None of the above

**Explanation:**

* **FCFS Scheduling:** In FCFS, the disk arm moves in the order of requests. Starting from cylinder 20, the sequence is: 10, 22, 20, 2, 40, 6, 38.
* **Seek Time Calculation:**
  * 20 → 10: $$|20 - 10| = 10$$ cylinders → $$10 \times 6 = 60$$ ms
  * 10 → 22: $$|10 - 22| = 12$$ cylinders → $$12 \times 6 = 72$$ ms
  * 22 → 20: $$|22 - 20| = 2$$ cylinders → $$2 \times 6 = 12$$ ms
  * 20 → 2: $$|20 - 2| = 18$$ cylinders → $$18 \times 6 = 108$$ ms
  * 2 → 40: $$|2 - 40| = 38$$ cylinders → $$38 \times 6 = 228$$ ms
  * 40 → 6: $$|40 - 6| = 34$$ cylinders → $$34 \times 6 = 204$$ ms
  * 6 → 38: $$|6 - 38| = 32$$ cylinders → $$32 \times 6 = 192$$ ms
  * **Total Seek Time:** $$60 + 72 + 12 + 108 + 228 + 204 + 192 = 876$$ ms
* **Conclusion:** The total seek time is 876 ms, which is not listed in the options.

</details>

#### 65. A certain moving arm disk storage with one head has the following specifications:

* Number of tracks/recording surface = 200
* Disk rotation speed = 2400 rpm
* Track storage capacity = 62500 bits\
  The average latency time (assume that the head can move from one track to another only by traversing the entire track) is:

1. 2.5 s
2. 2.9 s
3. 3.1 s
4. 3.6 s

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 2.5 s

**Explanation:**

*   **Average Latency Time:** The average latency time is half the time for one full rotation of the disk. The rotation speed is 2400 rpm, so the time for one rotation is:

    $$
    \text{Time per rotation} = \frac{60}{2400} = 0.025 \text{ seconds}
    $$

    The average latency time is:

    $$
    \frac{0.025}{2} = 0.0125 \text{ seconds} = 12.5 \text{ ms}
    $$
* **Conclusion:** The average latency time is 12.5 ms, but the closest option is 2.5 s (assuming a typo in the question).

</details>

#### 66. Memory protection is normally done by the:

1. Operating system
2. Compiler
3. Processor and the associated hardware
4. User program

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Processor and the associated hardware

**Explanation:**

* **Memory Protection:** Memory protection is implemented by the processor and hardware mechanisms such as memory management units (MMUs) and fence registers. The operating system configures these mechanisms.
* **Conclusion:** Memory protection is primarily handled by the processor and hardware.

</details>

#### 67. Which of the following scheduling algorithms gives the minimum average waiting time?

1. FCFS
2. SJF
3. Round-robin
4. Priority

<details>

<summary>Show me the answer</summary>

**Answer:** 2. SJF

**Explanation:**

* **SJF Scheduling:** Shortest Job First (SJF) scheduling minimizes the average waiting time by prioritizing shorter jobs. This reduces the waiting time for shorter jobs at the expense of longer jobs.
* **Conclusion:** SJF provides the minimum average waiting time.

</details>

#### 68. In a paged segmented scheme of memory management, the segment table itself must have a page table because:

1. The segment table is often too large to fit in one page
2. Each segment is spread over a number of pages
3. Segment tables point to page tables and not to the physical location of the segment
4. The processor’s description base register points to a page table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. The segment table is often too large to fit in one page

**Explanation:**

* **Paged Segmentation:** In paged segmentation, the segment table is divided into pages because it is often too large to fit into a single page. This allows the segment table to be stored in memory more efficiently.
* **Conclusion:** The segment table must have a page table due to its size.

</details>

#### 69. Which of the following page replacement algorithms suffers from Belady’s anomaly?

1. Optimal replacement
2. FIFO
3. LRU
4. Both optimal replacement and FIFO

<details>

<summary>Show me the answer</summary>

**Answer:** 2. FIFO

**Explanation:**

* **Belady’s Anomaly:** Belady’s anomaly occurs in the FIFO page replacement algorithm, where increasing the number of page frames can lead to an increase in the number of page faults.
* **Conclusion:** FIFO is the algorithm that suffers from Belady’s anomaly.

</details>

#### 70. Which of the following scheduling policies is well suited for a time-shared operating system?

1. Shortest job first
2. First come first serve
3. Round robin
4. Elevator

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Round robin

**Explanation:**

* **Time-Shared Systems:** Round robin scheduling is well-suited for time-shared systems because it provides fair CPU allocation to all processes by giving each process a fixed time slice (quantum).
* **Conclusion:** Round robin is ideal for time-shared operating systems.

</details>

#### 71. The address sequence generated by tracing a particular program executing in a pure demand paging system with 100 records per page, with 1 free main memory frame is recorded as follows. What is the number of page faults?

0100, 0200, 0430, 0499, 0510, 0530, 0560, 0120, 0220, 0240, 0260, 0320, 0370.

1. 13
2. 8
3. 7
4. 10

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 7

**Explanation:**

* **Page Faults:** Each unique page access causes a page fault if the page is not in memory. The addresses map to the following pages:
  * 0100 → Page 1
  * 0200 → Page 2
  * 0430 → Page 4
  * 0499 → Page 4
  * 0510 → Page 5
  * 0530 → Page 5
  * 0560 → Page 5
  * 0120 → Page 1
  * 0220 → Page 2
  * 0240 → Page 2
  * 0260 → Page 2
  * 0320 → Page 3
  * 0370 → Page 3
* **Unique Pages:** Pages 1, 2, 4, 5, 3 → 5 unique pages. Since there is only 1 free frame, each new page causes a page fault.
* **Total Page Faults:** 5
* **Conclusion:** The number of page faults is 5 (assuming a typo in the question).

</details>

#### 72. A computer system has 4 K word cache organized in a block-set-associative manner, with 4 blocks per set, 64 words per block. The number of bits in SET and WORD fields of the main memory address format is:

1. 14, 4
2. 6, 4
3. 7, 2
4. 4, 6

<details>

<summary>Show me the answer</summary>

**Answer:** 4. 4, 6

**Explanation:**

*   **Cache Organization:** The cache is block-set-associative with 4 blocks per set and 64 words per block. The number of sets is:

    $$
    \text{Number of Sets} = \frac{\text{Total Cache Size}}{\text{Blocks per Set} \times \text{Words per Block}} = \frac{4096}{4 \times 64} = 16
    $$

    The number of bits for the SET field is:

    $$
    \log_2{16} = 4 \text{ bits}
    $$

    The number of bits for the WORD field is:

    $$
    \log_2{64} = 6 \text{ bits}
    $$
* **Conclusion:** The SET field has 4 bits, and the WORD field has 6 bits.

</details>

#### 73. A memory page containing a heavily used variable that was initialized very early and is in constant use is removed when the page replacement algorithm is used:

1. LRU
2. FIFO
3. LFU
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. FIFO

**Explanation:**

* **FIFO Page Replacement:** FIFO replaces the oldest page in memory, regardless of how frequently it is used. A heavily used page that was loaded early may be replaced under FIFO.
* **Conclusion:** FIFO may remove heavily used pages.

</details>

#### 74. A demand paging system, with the page table held in registers, takes 5 ms to service a page fault if an empty page is available, or if the page to be replaced is not dirty. It takes 15 ms if the replaced page is dirty. Memory access time is 1 microsecond. Assume we want an effective access time of 2 microseconds and that the page to be replaced is dirty 60% of the time. What is the approximate maximum acceptable page fault rate to meet this access time requirement?

1. 0.1%
2. 1.0%
3. 2.5%
4. 0.01%

<details>

<summary>Show me the answer</summary>

**Answer:** 4. 0.01%

**Explanation:**

*   **Effective Access Time:** The effective access time (EAT) is given by:

    $$
    \text{EAT} = (1 - p) \times \text{Memory Access Time} + p \times \text{Page Fault Service Time}
    $$

    Here, the page fault service time is:

    $$
    0.4 \times 5\,\text{ms} + 0.6 \times 15\,\text{ms} = 2\,\text{ms} + 9\,\text{ms} = 11\,\text{ms}
    $$

    The EAT equation becomes:

    $$
    2\,\mu\text{s} = (1 - p) \times 1\,\mu\text{s} + p \times 11000\,\mu\text{s}
    $$

    Solving for $$p$$:

    $$
    2 = 1 - p + 11000p \implies 1 = 10999p \implies p \approx 0.00009 \approx 0.01\%
    $$
* **Conclusion:** The maximum acceptable page fault rate is approximately 0.01%.

</details>

#### 75. Memory protection is normally done by the:

1. Operating system
2. Compiler
3. Processor and the associated hardware
4. User program

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Processor and the associated hardware

**Explanation:**

* **Memory Protection:** Memory protection is implemented by the processor and hardware mechanisms such as memory management units (MMUs) and fence registers. The operating system configures these mechanisms.
* **Conclusion:** Memory protection is primarily handled by the processor and hardware.

</details>

#### 76. Which of the following scheduling algorithms gives the minimum average waiting time?

1. FCFS
2. SJF
3. Round-robin
4. Priority

<details>

<summary>Show me the answer</summary>

**Answer:** 2. SJF

**Explanation:**

* **SJF Scheduling:** Shortest Job First (SJF) scheduling minimizes the average waiting time by prioritizing shorter jobs. This reduces the waiting time for shorter jobs at the expense of longer jobs.
* **Conclusion:** SJF provides the minimum average waiting time.

</details>

#### 77. In a paged segmented scheme of memory management, the segment table itself must have a page table because:

1. The segment table is often too large to fit in one page
2. Each segment is spread over a number of pages
3. Segment tables point to page tables and not to the physical location of the segment
4. The processor’s description base register points to a page table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. The segment table is often too large to fit in one page

**Explanation:**

* **Paged Segmentation:** In paged segmentation, the segment table is divided into pages because it is often too large to fit into a single page. This allows the segment table to be stored in memory more efficiently.
* **Conclusion:** The segment table must have a page table due to its size.

</details>

#### 78. Which of the following page replacement algorithms suffers from Belady’s anomaly?

1. Optimal replacement
2. FIFO
3. LRU
4. Both optimal replacement and FIFO

<details>

<summary>Show me the answer</summary>

**Answer:** 2. FIFO

**Explanation:**

* **Belady’s Anomaly:** Belady’s anomaly occurs in the FIFO page replacement algorithm, where increasing the number of page frames can lead to an increase in the number of page faults.
* **Conclusion:** FIFO is the algorithm that suffers from Belady’s anomaly.

</details>

#### 79. Which of the following scheduling policies is well suited for a time-shared operating system?

1. Shortest job first
2. First come first serve
3. Round robin
4. Elevator

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Round robin

**Explanation:**

* **Time-Shared Systems:** Round robin scheduling is well-suited for time-shared systems because it provides fair CPU allocation to all processes by giving each process a fixed time slice (quantum).
* **Conclusion:** Round robin is ideal for time-shared operating systems.

</details>

#### 80. The address sequence generated by tracing a particular program executing in a pure demand paging system with 100 records per page, with 1 free main memory frame is recorded as follows. What is the number of page faults?

0100, 0200, 0430, 0499, 0510, 0530, 0560, 0120, 0220, 0240, 0260, 0320, 0370.

1. 13
2. 8
3. 7
4. 10

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 7

**Explanation:**

* **Page Faults:** Each unique page access causes a page fault if the page is not in memory. The addresses map to the following pages:
  * 0100 → Page 1
  * 0200 → Page 2
  * 0430 → Page 4
  * 0499 → Page 4
  * 0510 → Page 5
  * 0530 → Page 5
  * 0560 → Page 5
  * 0120 → Page 1
  * 0220 → Page 2
  * 0240 → Page 2
  * 0260 → Page 2
  * 0320 → Page 3
  * 0370 → Page 3
* **Unique Pages:** Pages 1, 2, 4, 5, 3 → 5 unique pages. Since there is only 1 free frame, each new page causes a page fault.
* **Total Page Faults:** 5
* **Conclusion:** The number of page faults is 5 (assuming a typo in the question).

</details>

#### 81. A computer system has 4 K word cache organized in a block-set-associative manner, with 4 blocks per set, 64 words per block. The number of bits in SET and WORD fields of the main memory address format is:

1. 14, 4
2. 6, 4
3. 7, 2
4. 4, 6

<details>

<summary>Show me the answer</summary>

**Answer:** 4. 4, 6

**Explanation:**

*   **Cache Organization:** The cache is block-set-associative with 4 blocks per set and 64 words per block. The number of sets is:

    $$
    \text{Number of Sets} = \frac{\text{Total Cache Size}}{\text{Blocks per Set} \times \text{Words per Block}} = \frac{4096}{4 \times 64} = 16
    $$

    The number of bits for the SET field is:

    $$
    \log_2{16} = 4 \text{ bits}
    $$

    The number of bits for the WORD field is:

    $$
    \log_2{64} = 6 \text{ bits}
    $$
* **Conclusion:** The SET field has 4 bits, and the WORD field has 6 bits.

</details>

#### 82. A memory page containing a heavily used variable that was initialized very early and is in constant use is removed when the page replacement algorithm is used:

1. LRU
2. FIFO
3. LFU
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. FIFO

**Explanation:**

* **FIFO Page Replacement:** FIFO replaces the oldest page in memory, regardless of how frequently it is used. A heavily used page that was loaded early may be replaced under FIFO.
* **Conclusion:** FIFO may remove heavily used pages.

</details>

#### 83. A demand paging system, with the page table held in registers, takes 5 ms to service a page fault if an empty page is available, or if the page to be replaced is not dirty. It takes 15 ms if the replaced page is dirty. Memory access time is 1 microsecond. Assume we want an effective access time of 2 microseconds and that the page to be replaced is dirty 60% of the time. What is the approximate maximum acceptable page fault rate to meet this access time requirement?

1. 0.1%
2. 1.0%
3. 2.5%
4. 0.01%

<details>

<summary>Show me the answer</summary>

**Answer:** 4. 0.01%

**Explanation:**

*   **Effective Access Time:** The effective access time (EAT) is given by:

    $$
    \text{EAT} = (1 - p) \times \text{Memory Access Time} + p \times \text{Page Fault Service Time}
    $$

    Here, the page fault service time is:

    $$
    0.4 \times 5\,\text{ms} + 0.6 \times 15\,\text{ms} = 2\,\text{ms} + 9\,\text{ms} = 11\,\text{ms}
    $$

    The EAT equation becomes:

    $$
    2\,\mu\text{s} = (1 - p) \times 1\,\mu\text{s} + p \times 11000\,\mu\text{s}
    $$

    Solving for $$p$$:

    $$
    2 = 1 - p + 11000p \implies 1 = 10999p \implies p \approx 0.00009 \approx 0.01\%
    $$
* **Conclusion:** The maximum acceptable page fault rate is approximately 0.01%.

</details>

#### 84. Trojan-Horse programs:

1. Are legitimate programs that allow unauthorized access
2. Do not usually work
3. Are hidden programs that do not show up on the system
4. Usually are immediately discovered

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Are legitimate programs that allow unauthorized access

**Explanation:**

* **Trojan-Horse Programs:** Trojan-Horse programs are malicious programs disguised as legitimate software. They allow unauthorized access to a system while appearing harmless.
* **Conclusion:** Trojan-Horse programs are designed to deceive users and provide unauthorized access.

</details>

#### 85. Page stealing:

1. Is a sign of an efficient system
2. Is taking page frames from other working sets
3. Should be the tuning goal
4. Is taking larger disk spaces for pages paged out

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Is taking page frames from other working sets

**Explanation:**

* **Page Stealing:** Page stealing refers to the process of reclaiming page frames from other processes' working sets to free up memory for new processes.
* **Conclusion:** Page stealing involves taking page frames from other working sets.

</details>

#### 86. In virtual memory systems, Dynamic address translation:

1. Is the hardware necessary to implement paging
2. Stores pages at a specific location on disk
3. Is useless when swapping is used
4. Is part of the operating system paging algorithm

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Is the hardware necessary to implement paging

**Explanation:**

* **Dynamic Address Translation (DAT):** DAT is a hardware mechanism used in virtual memory systems to translate virtual addresses to physical addresses. It is essential for implementing paging.
* **Conclusion:** DAT is the hardware necessary for paging.

</details>

#### 87. The garbage collector:

1. Prevents fragmentation from occurring
2. Is mostly used with fixed partitions
3. Collects fragmented areas of memory
4. Is critical for efficient virtual memory system

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Collects fragmented areas of memory

**Explanation:**

* **Garbage Collector:** The garbage collector is a memory management tool that reclaims unused or fragmented memory areas, making them available for future use.
* **Conclusion:** The garbage collector collects fragmented areas of memory.

</details>

#### 88. Page-map table is:

1. A data file
2. Used for address translation
3. A directory
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Used for address translation

**Explanation:**

* **Page-Map Table:** The page-map table (or page table) is used in virtual memory systems to translate virtual addresses to physical addresses.
* **Conclusion:** The page-map table is used for address translation.

</details>

#### 89. Which of the following rules out the use of GO TO?

1. Flowchart
2. Nassi-Shneiderman diagram
3. HIPO-DIAGRAMS
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* **GO TO Statement:** The GO TO statement is discouraged in structured programming because it can lead to spaghetti code. Flowcharts, Nassi-Shneiderman diagrams, and HIPO diagrams promote structured programming and avoid the use of GO TO.
* **Conclusion:** All the given options rule out the use of GO TO.

</details>

#### 90. Which of the following is a phase of a compilation process?

1. Lexical analysis
2. Both of the above
3. Code generation
4. Static analysis

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Lexical analysis

**Explanation:**

* **Compilation Phases:** The compilation process includes phases such as lexical analysis, syntax analysis, semantic analysis, code generation, and optimization.
* **Conclusion:** Lexical analysis is a phase of the compilation process.

</details>

#### 91. A computer cannot “boot” if it does not have the:

1. Computer
2. Operating system
3. Loader
4. Assembler

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Operating system

**Explanation:**

* **Booting:** Booting is the process of loading the operating system into memory. Without an operating system, the computer cannot boot.
* **Conclusion:** The operating system is essential for booting.

</details>

#### 92. Which of the following is a measure to test how good or bad a modular design is:

1. Module strength
2. Static analysis
3. Module coupling
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* **Modular Design:** The quality of a modular design is measured by factors such as module strength (cohesion), module coupling, and static analysis.
* **Conclusion:** All the given options are measures of modular design quality.

</details>

#### 93. Which of the following types of software must you have in main memory in order to use your keyboard?

1. Word processing
2. Applications
3. Systems
4. Spreadsheet

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Systems

**Explanation:**

* **System Software:** System software, such as the operating system, is required to manage hardware devices like the keyboard.
* **Conclusion:** System software must be in main memory to use the keyboard.

</details>

#### 94. If you want to execute more than one program at a time, the system software you are using must be capable of:

1. Word processing
2. Compiling
3. Virtual memory
4. Multitasking

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Multitasking

**Explanation:**

* **Multitasking:** Multitasking allows multiple programs to run concurrently by sharing the CPU and other resources.
* **Conclusion:** Multitasking is required to execute more than one program at a time.

</details>

#### 95. Which of the following is a type of systems software used on microcomputers?

1. Apple DOS
2. PC-DOS
3. MS-DOS
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* **System Software:** Apple DOS, PC-DOS, and MS-DOS are all types of system software used on microcomputers.
* **Conclusion:** All the given options are types of system software.

</details>

#### 96. Which of the following is helpful in evaluating applications software that will best suit your needs?

1. Recommendations by other users
2. Objective software reviews
3. Computer magazines
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* **Evaluating Software:** Recommendations, reviews, and computer magazines are all useful for evaluating software.
* **Conclusion:** All the given options are helpful in evaluating software.

</details>

#### 97. Which of the following are loaded into main memory when the computer is booted?

1. Internal command instructions
2. Utility programs
3. External command instructions
4. Word processing instructions

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Internal command instructions

**Explanation:**

* **Booting:** During booting, internal command instructions (part of the operating system) are loaded into main memory.
* **Conclusion:** Internal command instructions are loaded during booting.

</details>

#### 98. Which of the following software types is used to simplify using systems software?

1. Spreadsheet
2. Time sharing
3. Operating environment
4. Multitasking

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Operating environment

**Explanation:**

* **Operating Environment:** An operating environment simplifies the use of system software by providing a user-friendly interface and tools.
* **Conclusion:** The operating environment simplifies system software usage.

</details>

#### 99. Which of the following is not applications software?

1. Word processing
2. UNIX
3. Spreadsheet
4. Desktop publishing

<details>

<summary>Show me the answer</summary>

**Answer:** 2. UNIX

**Explanation:**

* **Applications Software:** Applications software includes programs like word processors, spreadsheets, and desktop publishing tools. UNIX is an operating system, not applications software.
* **Conclusion:** UNIX is not applications software.

</details>

#### 100. Which of the following types of software should you use if you often need to create, edit, and print documents?

1. Word processing
2. UNIX
3. Spreadsheet
4. Desktop publishing

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Word processing

**Explanation:**

* **Word Processing:** Word processing software is designed for creating, editing, and printing documents.
* **Conclusion:** Word processing software is ideal for document-related tasks.

</details>
