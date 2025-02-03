# set-12

#### 601. Recognition of basic syntactic constructs through reductions, this task is performed by:

1. Lexical Analysis
2. Semantic Analysis
3. Syntax Analysis
4. Structure Analysis

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Syntax Analysis

**Explanation:**

* **Syntax Analysis:** Syntax analysis recognizes the syntactic structure of source code by reducing it to basic constructs.
* **Conclusion:** Syntax analysis performs this task.

</details>

#### 602. A grammar for a programming language is a formal description of:

1. Syntax
2. Structure
3. Semantics
4. Code

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Syntax

**Explanation:**

* **Grammar:** A grammar defines the syntax of a programming language, specifying how valid programs are structured.
* **Conclusion:** Grammar describes the syntax of a language.

</details>

#### 603. \_\_\_\_\_\_ is a technique of temporarily removing inactive programs from the memory of a computer system:

1. Swapping
2. Semaphore
3. Spooling
4. Scheduler

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Swapping

**Explanation:**

* **Swapping:** Swapping involves moving inactive processes out of memory to secondary storage to free up memory for active processes.
* **Conclusion:** Swapping temporarily removes inactive programs from memory.

</details>

#### 604. \_\_\_\_\_\_ is a technique of improving the priority of processes waiting in the queue for CPU allocation:

1. Starvation
2. Revocation
3. Aging
4. Relocation

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Aging

**Explanation:**

* **Aging:** Aging gradually increases the priority of long-waiting processes to prevent starvation.
* **Conclusion:** Aging improves the priority of waiting processes.

</details>

#### 605. \_\_\_\_\_\_ is the time required by a sector to reach below the read/write head:

1. Seek Time
2. Access Time
3. Latency Time
4. None

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Latency Time

**Explanation:**

* **Latency Time:** Latency time is the time required for the desired sector to rotate under the read/write head.
* **Conclusion:** Latency time is the time for a sector to reach the read/write head.

</details>

#### 606. Which of the following is the most general phase-structured grammar?

1. Context-Sensitive
2. Context-Free
3. Regular
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Context-Sensitive

**Explanation:**

* **Context-Sensitive Grammar:** Context-sensitive grammar is the most general phase-structured grammar, allowing rules that depend on the context of symbols.
* **Conclusion:** Context-sensitive grammar is the most general.

</details>

#### 607. File record length:

1. Should always be fixed
2. Should always be variable
3. Depends upon the size of the file
4. Should be chosen to match the data characteristics

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Should be chosen to match the data characteristics

**Explanation:**

* **File Record Length:** The length of file records should be chosen based on the characteristics of the data being stored.
* **Conclusion:** File record length should match data characteristics.

</details>

#### 608. The process is:

1. An instance of a program in execution
2. A program only
3. Processor state
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. An instance of a program in execution

**Explanation:**

* **Process:** A process is an instance of a program in execution, including the program code, data, and resources.
* **Conclusion:** A process is an executing instance of a program.

</details>

#### 609. A program is passive while a process is:

1. Inactive
2. Spontaneous
3. Active
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Active

**Explanation:**

* **Program vs. Process:** A program is a passive entity stored on disk, while a process is an active entity that executes the program.
* **Conclusion:** A process is active, while a program is passive.

</details>

#### 610. A process is created and is initially put in the:

1. Ready queue
2. Device output
3. Any of the above
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Ready queue

**Explanation:**

* **Process Creation:** When a process is created, it is placed in the ready queue, waiting to be scheduled for execution.
* **Conclusion:** A new process is placed in the ready queue.

</details>

#### 611. Exit() system call results in:

1. Forced termination
2. Normal termination
3. Abnormal termination
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Normal termination

**Explanation:**

* **Exit() System Call:** The exit() system call terminates a process normally, releasing its resources.
* **Conclusion:** Exit() results in normal termination.

</details>

#### 612. A thread is a:

1. Task
2. Process
3. Program
4. Lightweight process

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Lightweight process

**Explanation:**

* **Thread:** A thread is a lightweight process that shares memory and resources with other threads in the same process.
* **Conclusion:** A thread is a lightweight process.

</details>

#### 613. Generally, we have user-level threads and:

1. Programmer-level thread
2. Kernel-level thread
3. Program-level thread
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Kernel-level thread

**Explanation:**

* **Thread Types:** Threads can be user-level (managed by the application) or kernel-level (managed by the operating system).
* **Conclusion:** Kernel-level threads complement user-level threads.

</details>

#### 614. IPCs can be done through:

1. Mails
2. Messages
3. System calls
4. Traps

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Messages

**Explanation:**

* **IPC Mechanisms:** Inter-process communication (IPC) can be done through messages, shared memory, pipes, and other mechanisms.
* **Conclusion:** Messages are a common IPC mechanism.

</details>

#### 615. RR scheduling is a preemptive version of:

1. FIFO
2. SJF
3. MLQ
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. FIFO

**Explanation:**

* **Round Robin (RR):** RR scheduling is a preemptive version of FIFO, where each process is given a fixed time slice.
* **Conclusion:** RR is a preemptive version of FIFO.

</details>

#### 616. A scheduling where in the jobs are allowed to move between the queues:

1. Multilevel queue scheduling
2. Multilevel feedback scheduling
3. RR scheduling
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Multilevel feedback scheduling

**Explanation:**

* **Multilevel Feedback Scheduling:** This scheduling algorithm allows processes to move between queues based on their behavior and priority.
* **Conclusion:** Multilevel feedback scheduling allows job movement between queues.

</details>

#### 617. In RR Scheduling, a ready queue is treated as:

1. Circular queue
2. Doubly linked list
3. Stack
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Circular queue

**Explanation:**

* **Round Robin (RR):** In RR scheduling, the ready queue is treated as a circular queue, where processes are given time slices in a cyclic manner.
* **Conclusion:** The ready queue in RR is a circular queue.

</details>

#### 618. FIFO scheduling is:

1. Preemptive
2. Non-preemptive
3. Deadline scheduling
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Non-preemptive

**Explanation:**

* **FIFO Scheduling:** FIFO (First-In-First-Out) scheduling is non-preemptive, meaning a process runs to completion once it starts.
* **Conclusion:** FIFO is non-preemptive.

</details>

#### 619. The indefinite blocking of low-priority processes by high-priority processes is known as:

1. Starvation
2. Deadlock
3. Aging
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Starvation

**Explanation:**

* **Starvation:** Starvation occurs when low-priority processes are indefinitely blocked by high-priority processes.
* **Conclusion:** Starvation describes indefinite blocking of low-priority processes.

</details>

#### 620. The technique of gradually increasing the priority of processes that wait in the system for a long time is called:

1. Aging
2. Throughput
3. FCFS
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Aging

**Explanation:**

* **Aging:** Aging increases the priority of long-waiting processes to prevent starvation.
* **Conclusion:** Aging gradually increases the priority of waiting processes.

</details>

#### 621. The main objective of scheduling is:

1. CPU utilization
2. Increase the throughput
3. Both A and B
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Both A and B

**Explanation:**

* **Scheduling Objectives:** The main objectives of scheduling are to maximize CPU utilization and throughput.
* **Conclusion:** Scheduling aims to improve CPU utilization and throughput.

</details>

#### 622. The total time elapsed from the time the job is submitted (or process is created) to the time the job (or process) is completed is called:

1. Response time
2. Waiting time
3. Turnaround time
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Turnaround time

**Explanation:**

* **Turnaround Time:** Turnaround time is the total time from job submission to completion.
* **Conclusion:** Turnaround time measures the total time for job completion.

</details>

#### 623. \_\_\_\_\_\_ is defined as the average fraction of time during which the CPU is busy, executing either user programs or system modules:

1. Throughput
2. CPU utilization
3. Response time
4. Waiting time

<details>

<summary>Show me the answer</summary>

**Answer:** 2. CPU utilization

**Explanation:**

* **CPU Utilization:** CPU utilization measures the fraction of time the CPU is busy executing tasks.
* **Conclusion:** CPU utilization measures the busy time of the CPU.

</details>

#### 624. In \_\_\_\_\_\_ scheduling, if once a process has been allocated CPU, then the CPU cannot be taken away from that process:

1. Pre-emptive scheduling
2. Non-preemptive scheduling
3. Both A and C
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Non-preemptive scheduling

**Explanation:**

* **Non-Preemptive Scheduling:** In non-preemptive scheduling, once a process starts execution, it cannot be interrupted until it completes.
* **Conclusion:** Non-preemptive scheduling does not allow CPU reallocation.

</details>

#### 625. In \_\_\_\_\_\_, the CPU can be taken away before the completion of the process:

1. Pre-emptive scheduling
2. Non-preemptive
3. Both A and B
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Pre-emptive scheduling

**Explanation:**

* **Pre-emptive Scheduling:** In pre-emptive scheduling, the CPU can be taken away from a process before it completes.
* **Conclusion:** Pre-emptive scheduling allows CPU reallocation.

</details>

#### 626. “If there are n-processes in a ready queue and the time quantum is ‘q’ time intervals, then each process gets ‘1/n’, of the CPU time in the chunks of at most ‘q’ units of time. Each process will have to wait for (n -1) x q time unit until its next time quantum comes in” This principle is suitable for which one of the following:

1. Round robin algorithm
2. SFJ
3. FCFS
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Round robin algorithm

**Explanation:**

* **Round Robin (RR):** RR scheduling allocates CPU time in fixed time slices (quantum) to each process in the ready queue.
* **Conclusion:** This principle describes the Round Robin algorithm.

</details>

#### 627. Process can be in one of the following states:

1. New, Ready
2. Running
3. Waiting, Blocked, Terminate
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* **Process States:** A process can be in states such as New, Ready, Running, Waiting, Blocked, or Terminated.
* **Conclusion:** All of the above are valid process states.

</details>

#### 628. Process is:

1. Loosely coupled
2. Tightly coupled
3. Both A and B
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Loosely coupled

**Explanation:**

* **Process Coupling:** Processes are loosely coupled, meaning they operate independently and communicate through inter-process communication mechanisms.
* **Conclusion:** Processes are loosely coupled.

</details>

#### 629. Process is:

1. Lightweight process
2. Heavyweight process
3. Tightly coupled
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Heavyweight process

**Explanation:**

* **Process vs. Thread:** A process is a heavyweight entity with its own memory space, while a thread is a lightweight entity that shares memory with other threads.
* **Conclusion:** A process is a heavyweight entity.

</details>

#### 630. The high paging activity is called:

1. Segmentation
2. Thrashing
3. Demand Paging
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Thrashing

**Explanation:**

* **Thrashing:** Thrashing occurs when the system spends more time swapping pages in and out of memory than executing processes.
* **Conclusion:** High paging activity is called thrashing.

</details>

#### 631. The process of merging adjacent holes to form a single larger hole is called as:

1. Fragmentation
2. Coalescing
3. Swapping
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Coalescing

**Explanation:**

* **Coalescing:** Coalescing is the process of merging adjacent free memory blocks to form a larger contiguous block.
* **Conclusion:** Coalescing merges adjacent holes.

</details>

#### 632. The degree of multiprogramming is controlled by:

1. CPU scheduler
2. Context switching
3. Long-term scheduler
4. Medium-term scheduler

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Long-term scheduler

**Explanation:**

* **Long-Term Scheduler:** The long-term scheduler controls the degree of multiprogramming by deciding which jobs are admitted to the system.
* **Conclusion:** The long-term scheduler controls multiprogramming.

</details>

#### 633. Thrashing occurs:

1. When excessive swapping takes place
2. When you thrash your computer
3. Whenever deadlock occurs
4. When no swapping takes place

<details>

<summary>Show me the answer</summary>

**Answer:** 1. When excessive swapping takes place

**Explanation:**

* **Thrashing:** Thrashing occurs when the system spends more time swapping pages than executing processes, leading to poor performance.
* **Conclusion:** Thrashing is caused by excessive swapping.

</details>

#### 634. Boundary registers:

1. Are available in temporary program variables storage
2. Are only necessary with fixed partitions
3. Track the beginning and ending of programs
4. Track page boundaries

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Track the beginning and ending of programs

**Explanation:**

* **Boundary Registers:** Boundary registers track the start and end addresses of programs in memory.
* **Conclusion:** Boundary registers track program boundaries.

</details>

#### 635. A scheduling algorithm is fair:

1. If no process faces starvation
2. If a process is starved, detect it and run it with high priority
3. If it uses semaphores
4. Only if a queue is used for scheduling

<details>

<summary>Show me the answer</summary>

**Answer:** 1. If no process faces starvation

**Explanation:**

* **Fair Scheduling:** A fair scheduling algorithm ensures that no process is starved of CPU time.
* **Conclusion:** Fairness in scheduling prevents starvation.

</details>

#### 636. A critical region:

1. Is a piece of code which only one process executes at a time
2. Is a region prone to deadlock
3. Is a piece of code which only a finite number of processes executes
4. Is found only in Windows N operating system

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Is a piece of code which only one process executes at a time

**Explanation:**

* **Critical Region:** A critical region is a segment of code where shared resources are accessed, and only one process can execute it at a time to prevent race conditions.
* **Conclusion:** A critical region is executed by only one process at a time.

</details>

#### 637. In one of the deadlock prevention methods, impose a total ordering of all resource types, and require that each process requests resources in an increasing order of enumeration. This violates the \_\_\_\_\_\_ condition of deadlock:

1. Mutual exclusion
2. Hold and Wait
3. Circular wait
4. No preemption

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Circular wait

**Explanation:**

* **Circular Wait:** Imposing a total ordering of resources prevents circular wait, as processes cannot request resources in a cyclic manner.
* **Conclusion:** This method violates the circular wait condition.

</details>

#### 638. Semaphore can be used for solving:

1. Wait and signal
2. Deadlock
3. Synchronization
4. Priority

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Synchronization

**Explanation:**

* **Semaphore:** Semaphores are used for process synchronization, ensuring that processes access shared resources in a controlled manner.
* **Conclusion:** Semaphores solve synchronization problems.

</details>

#### 639. The hardware mechanism that enables a device to notify the CPU is called:

1. Polling
2. Interrupt
3. System call
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Interrupt

**Explanation:**

* **Interrupt:** An interrupt is a hardware mechanism that allows a device to notify the CPU of an event requiring attention.
* **Conclusion:** Interrupts enable devices to notify the CPU.

</details>

#### 640. \_\_\_\_\_\_ begins at the root and follows a path down to the specified file:

1. Relative path name
2. Absolute path name
3. Standalone name
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Absolute path name

**Explanation:**

* **Absolute Path Name:** An absolute path name starts at the root directory and specifies the complete path to a file.
* **Conclusion:** Absolute path names begin at the root.

</details>

#### 641. Process state is a part of:

1. Process control block
2. Node
3. File allocation table
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Process control block

**Explanation:**

* **Process Control Block (PCB):** The PCB contains information about a process, including its state.
* **Conclusion:** Process state is part of the PCB.

</details>

#### 642. Virtual memory is commonly implemented by:

1. Segmentation
2. Swapping
3. Demand paging
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Demand paging

**Explanation:**

* **Demand Paging:** Virtual memory is commonly implemented using demand paging, where pages are loaded into memory only when needed.
* **Conclusion:** Demand paging is the most common implementation of virtual memory.

</details>

#### 643. Paging:

1. Solves the memory fragmentation problem
2. Allows modular programming
3. Allows structured programming
4. Avoids deadlock

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Solves the memory fragmentation problem

**Explanation:**

* **Paging:** Paging divides memory into fixed-size pages, reducing external fragmentation.
* **Conclusion:** Paging solves the memory fragmentation problem.

</details>

#### 644. Which of the following is a criterion to evaluate a scheduling algorithm?

1. CPU Utilization: keep CPU utilization as high as possible
2. Throughput: number of processes completed per unit time
3. Waiting time: amount of time spent ready to run but not running
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* **Scheduling Criteria:** CPU utilization, throughput, and waiting time are key criteria for evaluating scheduling algorithms.
* **Conclusion:** All of the above are valid criteria.

</details>

#### 645. Which of the following is contained in Process Control Block (PCB)?

1. Process number
2. List of open files
3. Memory limits
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* **PCB Contents:** The PCB contains information such as the process number, list of open files, and memory limits.
* **Conclusion:** All of the above are contained in the PCB.

</details>

#### 646. With the round-robin CPU scheduling in a time-shared system:

1. Using very large time slice degenerates into the first-come-first-served algorithm
2. Using extremely small time slices improves performance
3. Using extremely small time slices degenerates into the last-in-first-out algorithm
4. Using medium-sized time slices leads to the shortest request time first algorithm

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Using very large time slice degenerates into the first-come-first-served algorithm

**Explanation:**

* **Round Robin (RR):** In RR scheduling, if the time slice is very large, it behaves like FCFS, as each process runs to completion within its time slice.
* **Conclusion:** A very large time slice makes RR similar to FCFS.

</details>
