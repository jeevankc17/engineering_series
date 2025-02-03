# set-5

#### 201. Which of the following is an advantage of external sorting?

1. It is faster than internal sorting
2. It can handle larger datasets
3. It requires less memory than internal sorting
4. It is easier to implement than internal sorting

<details>

<summary>Show me the answer</summary>

**Answer:** 2. It can handle larger datasets

**Explanation:**

* **External Sorting:** External sorting is used when the data to be sorted is too large to fit into the main memory (RAM). It involves reading and writing data to external storage (e.g., disk), which allows it to handle much larger datasets than internal sorting.
* **Conclusion:** The primary advantage of external sorting is its ability to handle larger datasets that cannot fit into memory.

</details>

#### 202. Which of the following is a disadvantage of external sorting?

1. It is not stable
2. It requires more disk I/O than internal sorting
3. It is not a comparison-based sorting algorithm
4. It is only suitable for datasets with a small number of distinct values

<details>

<summary>Show me the answer</summary>

**Answer:** 2. It requires more disk I/O than internal sorting

**Explanation:**

* **External Sorting:** External sorting involves frequent reading and writing of data to and from external storage (e.g., disk), which increases the amount of disk I/O compared to internal sorting.
* **Conclusion:** A disadvantage of external sorting is that it requires more disk I/O, which can slow down the sorting process.

</details>

#### 203. Which of the following sorting algorithms is based on the idea of selecting the smallest element in the unsorted part of an array and swapping it with the first element in the unsorted part of the array?

1. Bubble sort
2. Insertion sort
3. Selection sort
4. Quick sort

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Selection sort

**Explanation:**

* **Selection Sort:** Selection sort works by repeatedly finding the smallest element in the unsorted portion of the array and swapping it with the first element of the unsorted portion.
* **Conclusion:** Selection sort is based on the idea of selecting the smallest element and swapping it with the first element in the unsorted part of the array.

</details>

#### 204. Which of the following sorting algorithms is based on the idea of partitioning an array into two subarrays, with elements in the left subarray being smaller than the pivot and elements in the right subarray being larger than the pivot?

1. Bubble sort
2. Insertion sort
3. Selection sort
4. Quick sort

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Quick sort

**Explanation:**

* **Quick Sort:** Quick sort is a divide-and-conquer algorithm that works by selecting a pivot element and partitioning the array into two subarrays: one with elements smaller than the pivot and one with elements larger than the pivot.
* **Conclusion:** Quick sort is based on the idea of partitioning an array around a pivot element.

</details>

#### 205. In Insertion sort, which of the following is true about the sorted part of the array after the first iteration?

1. The first element is always the smallest element in the array
2. The first element is always the largest element in the array
3. The first element is always in its correct sorted position
4. The first element is always in its correct sorted position relative to the second element

<details>

<summary>Show me the answer</summary>

**Answer:** 3. The first element is always in its correct sorted position

**Explanation:**

* **Insertion Sort:** After the first iteration of insertion sort, the first element is considered sorted because there are no other elements to compare it with.
* **Conclusion:** The first element is always in its correct sorted position after the first iteration of insertion sort.

</details>

#### 206. What is the time complexity of Insertion sort in the worst-case scenario?

1. $$O(n)$$
2. $$O(n \log n)$$
3. $$O(n^2)$$
4. $$O(\log n)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$O(n^2)$$

**Explanation:**

* **Insertion Sort:** In the worst case, insertion sort may require up to $$n(n-1)/2$$ comparisons and swaps, which results in a time complexity of $$O(n^2)$$.
* **Conclusion:** The worst-case time complexity of insertion sort is $$O(n^2)$$.

</details>

#### 207. In Selection sort, how many comparisons are made in the first iteration of the outer loop?

1. $$n$$
2. $$n-1$$
3. $$n/2$$
4. $$\log(n)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$n-1$$

**Explanation:**

* **Selection Sort:** In the first iteration of selection sort, the algorithm compares the first element with the remaining $$n-1$$ elements to find the smallest element.
* **Conclusion:** The number of comparisons made in the first iteration of selection sort is $$n-1$$.

</details>

#### 208. What is the time complexity of Selection sort in the best-case scenario?

1. $$O(n)$$
2. $$O(n \log n)$$
3. $$O(n^2)$$
4. $$O(\log n)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$O(n^2)$$

**Explanation:**

* **Selection Sort:** Selection sort always performs $$n(n-1)/2$$ comparisons, regardless of the input. Therefore, its time complexity is $$O(n^2)$$ in both the best and worst cases.
* **Conclusion:** The best-case time complexity of selection sort is $$O(n^2)$$.

</details>

#### 209. Which of the following is an advantage of Insertion sort over Selection sort?

1. It is faster for small datasets
2. It requires fewer comparisons
3. It has a better worst-case time complexity
4. It is easier to implement

<details>

<summary>Show me the answer</summary>

**Answer:** 1. It is faster for small datasets

**Explanation:**

* **Insertion Sort:** Insertion sort is generally faster than selection sort for small datasets because it performs fewer swaps and is more efficient when the array is partially sorted.
* **Conclusion:** Insertion sort is faster for small datasets compared to selection sort.

</details>

#### 210. Which of the following is an advantage of Selection sort over Insertion sort?

1. It requires less memory
2. It has a better worst-case time complexity
3. It is stable
4. It is more efficient for large datasets

<details>

<summary>Show me the answer</summary>

**Answer:** 4. It is more efficient for large datasets

**Explanation:**

* **Selection Sort:** Selection sort is not more efficient for large datasets compared to insertion sort. Both have a time complexity of $$O(n^2)$$, but insertion sort is generally faster for small datasets.
* **Conclusion:** Selection sort does not have a significant advantage over insertion sort for large datasets.

</details>

#### 211. What is the time complexity of Insertion sort in the best-case scenario?

1. $$O(n)$$
2. $$O(n \log n)$$
3. $$O(n^2)$$
4. $$O(\log n)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$O(n)$$

**Explanation:**

* **Insertion Sort:** In the best case, when the array is already sorted, insertion sort only performs $$n-1$$ comparisons and no swaps, resulting in a time complexity of $$O(n)$$.
* **Conclusion:** The best-case time complexity of insertion sort is $$O(n)$$.

</details>

#### 212. Which of the following is a disadvantage of Selection sort?

1. It is not stable
2. It requires more memory than Insertion sort
3. It has a worse worst-case time complexity than Insertion sort
4. It is difficult to implement

<details>

<summary>Show me the answer</summary>

**Answer:** 1. It is not stable

**Explanation:**

* **Selection Sort:** Selection sort is not a stable sorting algorithm, meaning it may change the relative order of equal elements.
* **Conclusion:** A disadvantage of selection sort is that it is not stable.

</details>

#### 213. What is Warshall's algorithm used for?

1. To find the shortest path between two vertices in a graph
2. To find the transitive closure of a graph
3. To find the minimum spanning tree of a graph
4. To find the maximum flow in a network

<details>

<summary>Show me the answer</summary>

**Answer:** 2. To find the transitive closure of a graph

**Explanation:**

* **Warshall's Algorithm:** Warshall's algorithm is used to compute the transitive closure of a graph, which determines if there is a path between every pair of vertices.
* **Conclusion:** Warshall's algorithm is used to find the transitive closure of a graph.

</details>

#### 214. Warshall's algorithm is based on which concept?

1. Depth-first search
2. Breadth-first search
3. Matrix multiplication
4. Greedy algorithm

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Matrix multiplication

**Explanation:**

* **Warshall's Algorithm:** Warshall's algorithm is based on the concept of matrix multiplication and dynamic programming. It uses an adjacency matrix to compute the transitive closure of a graph.
* **Conclusion:** Warshall's algorithm is based on matrix multiplication.

</details>

#### 215. What is the time complexity of Warshall's algorithm?

1. $$O(n^2)$$
2. $$O(n \log n)$$
3. $$O(n^3)$$
4. $$O(2^n)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$O(n^3)$$

**Explanation:**

* **Warshall's Algorithm:** The time complexity of Warshall's algorithm is $$O(n^3)$$, where $$n$$ is the number of vertices in the graph. This is because it involves three nested loops over the adjacency matrix.
* **Conclusion:** The time complexity of Warshall's algorithm is $$O(n^3)$$.

</details>

#### 216. What is a priority queue?

1. A queue with elements ordered based on their priority
2. A queue with elements ordered based on their frequency of use
3. A queue with elements ordered based on their age
4. A queue with elements ordered randomly

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A queue with elements ordered based on their priority

**Explanation:**

* **Priority Queue:** A priority queue is a data structure where elements are ordered based on their priority. Elements with higher priority are dequeued before elements with lower priority.
* **Conclusion:** A priority queue orders elements based on their priority.

</details>

#### 217. What is the main difference between a min heap and a max heap?

1. Min heap has elements ordered in ascending order, while max heap has elements ordered in descending order
2. Min heap has elements ordered in descending order, while max heap has elements ordered in ascending order
3. Min heap is a complete binary tree, while max heap is not
4. Min heap is not a complete binary tree, while max heap is

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Min heap has elements ordered in ascending order, while max heap has elements ordered in descending order

**Explanation:**

* **Min Heap:** In a min heap, the smallest element is at the root, and the elements are ordered in ascending order.
* **Max Heap:** In a max heap, the largest element is at the root, and the elements are ordered in descending order.
* **Conclusion:** The main difference between a min heap and a max heap is the order in which elements are arranged.

</details>

#### 218. What is the time complexity of inserting an element into a heap?

1. $$O(n)$$
2. $$O(\log n)$$
3. $$O(1)$$
4. $$O(n \log n)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$O(\log n)$$

**Explanation:**

* **Heap Insertion:** Inserting an element into a heap involves adding the element to the end of the heap and then performing a "heapify" operation to maintain the heap property, which takes $$O(\log n)$$ time.
* **Conclusion:** The time complexity of inserting an element into a heap is $$O(\log n)$$.

</details>

#### 219. What is the time complexity of deleting the minimum element from a min heap?

1. $$O(n)$$
2. $$O(\log n)$$
3. $$O(1)$$
4. $$O(n \log n)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$O(\log n)$$

**Explanation:**

* **Heap Deletion:** Deleting the minimum element from a min heap involves removing the root element and then performing a "heapify" operation to maintain the heap property, which takes $$O(\log n)$$ time.
* **Conclusion:** The time complexity of deleting the minimum element from a min heap is $$O(\log n)$$.

</details>

#### 220. What is the time complexity of heap sort?

1. $$O(n)$$
2. $$O(\log n)$$
3. $$O(n \log n)$$
4. $$O(n^2)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$O(n \log n)$$

**Explanation:**

* **Heap Sort:** Heap sort involves building a heap and then repeatedly extracting the minimum (or maximum) element. Both building the heap and extracting elements take $$O(n \log n)$$ time.
* **Conclusion:** The time complexity of heap sort is $$O(n \log n)$$.

</details>

#### 221. What is topological sorting?

1. A method for sorting nodes in a directed acyclic graph (DAG) in a linear order such that for every directed edge (u, v), vertex u comes before vertex v
2. A method for finding the shortest path in a directed graph
3. A method for finding the longest path in a directed graph
4. A method for finding a cycle in a directed graph

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A method for sorting nodes in a directed acyclic graph (DAG) in a linear order such that for every directed edge (u, v), vertex u comes before vertex v

**Explanation:**

* **Topological Sorting:** Topological sorting is a linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge (u, v), vertex u comes before vertex v in the ordering.
* **Conclusion:** Topological sorting is used to order nodes in a DAG based on their dependencies.

</details>

#### 222. What is the main difference between depth-first topological sorting and breadth-first topological sorting?

1. Depth-first topological sorting sorts nodes based on their depth, while breadth-first topological sorting sorts nodes based on their breadth
2. Depth-first topological sorting sorts nodes based on their breadth, while breadth-first topological sorting sorts nodes based on their depth
3. Depth-first topological sorting uses a stack, while breadth-first topological sorting uses a queue
4. Depth-first topological sorting uses a queue, while breadth-first topological sorting uses a stack

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Depth-first topological sorting uses a stack, while breadth-first topological sorting uses a queue

**Explanation:**

* **Depth-First Topological Sorting:** This method uses a stack to keep track of nodes and processes them in a depth-first manner.
* **Breadth-First Topological Sorting:** This method uses a queue to process nodes level by level.
* **Conclusion:** The main difference is the data structure used: stack for depth-first and queue for breadth-first.

</details>

#### 223. What is the time complexity of depth-first topological sorting?

1. $$O(n)$$
2. $$O(n \log n)$$
3. $$O(n^2)$$
4. $$O(2^n)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$O(n)$$

**Explanation:**

* **Depth-First Topological Sorting:** The time complexity of depth-first topological sorting is $$O(V + E)$$, where $$V$$ is the number of vertices and $$E$$ is the number of edges. For a dense graph, this simplifies to $$O(n)$$.
* **Conclusion:** The time complexity of depth-first topological sorting is $$O(n)$$.

</details>

#### 224. What is the time complexity of breadth-first topological sorting?

1. $$O(n)$$
2. $$O(n \log n)$$
3. $$O(n^2)$$
4. $$O(2^n)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$O(n)$$

**Explanation:**

* **Breadth-First Topological Sorting:** The time complexity of breadth-first topological sorting is $$O(V + E)$$, where $$V$$ is the number of vertices and $$E$$ is the number of edges. For a dense graph, this simplifies to $$O(n)$$.
* **Conclusion:** The time complexity of breadth-first topological sorting is $$O(n)$$.

</details>

#### 225. What is the main operation performed on a linear queue?

1. Insertion
2. Deletion
3. Both A and B
4. Sorting

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Both A and B

**Explanation:**

* **Linear Queue:** A linear queue supports two main operations: insertion (enqueue) at the rear and deletion (dequeue) at the front.
* **Conclusion:** Both insertion and deletion are the main operations performed on a linear queue.

</details>

#### 226. What is the main advantage of using a circular queue over a linear queue?

1. Avoids overflow issues
2. Easy implementation
3. Faster than linear queue
4. Better memory utilization

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Avoids overflow issues

**Explanation:**

* **Circular Queue:** A circular queue reuses the empty spaces created after dequeuing elements, which helps avoid overflow issues that can occur in a linear queue.
* **Conclusion:** The main advantage of a circular queue is that it avoids overflow issues.

</details>

#### 227. What is the time complexity of inserting an element into a circular queue?

1. $$O(1)$$
2. $$O(\log n)$$
3. $$O(n)$$
4. $$O(n \log n)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$O(1)$$

**Explanation:**

* **Circular Queue Insertion:** Inserting an element into a circular queue involves updating the rear pointer, which takes constant time, $$O(1)$$.
* **Conclusion:** The time complexity of inserting an element into a circular queue is $$O(1)$$.

</details>

#### 228. What is the time complexity of deleting an element from a circular queue?

1. $$O(1)$$
2. $$O(\log n)$$
3. $$O(n)$$
4. $$O(n \log n)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$O(1)$$

**Explanation:**

* **Circular Queue Deletion:** Deleting an element from a circular queue involves updating the front pointer, which takes constant time, $$O(1)$$.
* **Conclusion:** The time complexity of deleting an element from a circular queue is $$O(1)$$.

</details>

#### 229. What is the main difference between linear queue and circular queue in terms of handling overflow?

1. Linear queue handles overflow by increasing its size dynamically, while circular queue handles overflow by making the front and rear pointers point to the first position
2. Linear queue handles overflow by making the front and rear pointers point to the first position, while circular queue handles overflow by increasing its size dynamically
3. Linear queue handles overflow by using a linked list, while circular queue handles overflow by making the front and rear pointers point to the first position
4. Linear queue handles overflow by making the front and rear pointers point to the first position, while circular queue handles overflow by using a linked list

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Linear queue handles overflow by increasing its size dynamically, while circular queue handles overflow by making the front and rear pointers point to the first position

**Explanation:**

* **Linear Queue:** A linear queue may need to dynamically increase its size to handle overflow.
* **Circular Queue:** A circular queue reuses the empty spaces created after dequeuing elements, avoiding overflow by making the front and rear pointers point to the first position.
* **Conclusion:** The main difference is how overflow is handled: dynamic resizing in linear queues and pointer reuse in circular queues.

</details>

#### 230. What is the basic syntax for checking if a stack is full in C?

1. `if(top == MAX_SIZE-1)`
2. `if(top >= MAX_SIZE)`
3. `if(top == MAX_SIZE)`
4. `if(top > MAX_SIZE-1)`

<details>

<summary>Show me the answer</summary>

**Answer:** 1. `if(top == MAX_SIZE-1)`

**Explanation:**

* **Stack Full Condition:** In C, a stack is considered full when the `top` pointer is equal to `MAX_SIZE-1`, indicating that the stack has reached its maximum capacity.
* **Conclusion:** The correct syntax for checking if a stack is full is `if(top == MAX_SIZE-1)`.

</details>

#### 231. What is the basic syntax for checking if a stack is empty in C?

1. `if(top == -1)`
2. `if(top <= -1)`
3. `if(top == 0)`
4. `if(top < 0)`

<details>

<summary>Show me the answer</summary>

**Answer:** 1. `if(top == -1)`

**Explanation:**

* **Stack Empty Condition:** In C, a stack is considered empty when the `top` pointer is equal to `-1`, indicating that no elements are present in the stack.
* **Conclusion:** The correct syntax for checking if a stack is empty is `if(top == -1)`.

</details>

#### 232. What is the basic syntax for handling overflow in a stack in C?

1. `printf("Stack overflow\n");`
2. `return -1;`
3. `exit(1);`
4. Throw an exception

<details>

<summary>Show me the answer</summary>

**Answer:** 1. `printf("Stack overflow\n");`

**Explanation:**

* **Overflow Handling:** When a stack overflow occurs, it is common to print an error message such as `"Stack overflow\n"` to inform the user.
* **Conclusion:** The basic syntax for handling overflow in a stack is `printf("Stack overflow\n");`.

</details>

#### 233. What is the basic syntax for handling underflow in a stack in C?

1. `printf("Stack underflow\n");`
2. `return -1;`
3. `exit(1);`
4. Throw an exception

<details>

<summary>Show me the answer</summary>

**Answer:** 1. `printf("Stack underflow\n");`

**Explanation:**

* **Underflow Handling:** When a stack underflow occurs, it is common to print an error message such as `"Stack underflow\n"` to inform the user.
* **Conclusion:** The basic syntax for handling underflow in a stack is `printf("Stack underflow\n");`.

</details>

#### 234. What is the basic syntax for checking if a queue is full in C?

1. `if(rear == MAX_SIZE-1)`
2. `if(rear >= MAX_SIZE)`
3. `if(rear == MAX_SIZE)`
4. `if(rear > MAX_SIZE-1)`

<details>

<summary>Show me the answer</summary>

**Answer:** 1. `if(rear == MAX_SIZE-1)`

**Explanation:**

* **Queue Full Condition:** In C, a queue is considered full when the `rear` pointer is equal to `MAX_SIZE-1`, indicating that the queue has reached its maximum capacity.
* **Conclusion:** The correct syntax for checking if a queue is full is `if(rear == MAX_SIZE-1)`.

</details>

#### 235. What is the basic syntax for checking if a queue is empty in C?

1. `if(front == rear)`
2. `if(front > rear)`
3. `if(front >= rear)`
4. `if(front == -1)`

<details>

<summary>Show me the answer</summary>

**Answer:** 1. `if(front == rear)`

**Explanation:**

* **Queue Empty Condition:** In C, a queue is considered empty when the `front` pointer is equal to the `rear` pointer, indicating that no elements are present in the queue.
* **Conclusion:** The correct syntax for checking if a queue is empty is `if(front == rear)`.

</details>

#### 236. What is the basic syntax for handling overflow in a queue in C?

1. `printf("Queue overflow\n");`
2. `return -1;`
3. `exit(1);`
4. Throw an exception

<details>

<summary>Show me the answer</summary>

**Answer:** 1. `printf("Queue overflow\n");`

**Explanation:**

* **Overflow Handling:** When a queue overflow occurs, it is common to print an error message such as `"Queue overflow\n"` to inform the user.
* **Conclusion:** The basic syntax for handling overflow in a queue is `printf("Queue overflow\n");`.

</details>

#### 237. What is the basic syntax for handling underflow in a queue in C?

1. `printf("Queue underflow\n");`
2. `return -1;`
3. `exit(1);`
4. Throw an exception

<details>

<summary>Show me the answer</summary>

**Answer:** 1. `printf("Queue underflow\n");`

**Explanation:**

* **Underflow Handling:** When a queue underflow occurs, it is common to print an error message such as `"Queue underflow\n"` to inform the user.
* **Conclusion:** The basic syntax for handling underflow in a queue is `printf("Queue underflow\n");`.

</details>

#### 238. What is the basic syntax for checking if a circular queue is full in C?

1. `if((rear+1)%MAX_SIZE == front)`
2. `if(rear == front)`
3. `if(rear == MAX_SIZE-1)`
4. `if(rear >= MAX_SIZE)`

<details>

<summary>Show me the answer</summary>

**Answer:** 1. `if((rear+1)%MAX_SIZE == front)`

**Explanation:**

*   **Circular Queue:** In a circular queue, the condition to check if the queue is full is:

    ```c
    if((rear + 1) % MAX_SIZE == front)
    ```

    This ensures that the queue does not overflow by wrapping around the array.
* **Conclusion:** The correct syntax to check if a circular queue is full is `if((rear+1)%MAX_SIZE == front)`.

</details>

#### 239. What is the basic syntax for checking if a circular queue is empty in C?

1. `if(front == rear)`
2. `if(front > rear)`
3. `if(front >= rear)`
4. `if(front == -1)`

<details>

<summary>Show me the answer</summary>

**Answer:** 1. `if(front == rear)`

**Explanation:**

*   **Circular Queue:** In a circular queue, the condition to check if the queue is empty is:

    ```c
    if(front == rear)
    ```

    This indicates that there are no elements in the queue.
* **Conclusion:** The correct syntax to check if a circular queue is empty is `if(front == rear)`.

</details>

#### 240. What is the basic syntax for handling overflow in a circular queue in C?

1. `printf("Circular queue overflow\n");`
2. `return -1;`
3. `exit(1);`
4. Throw an exception

<details>

<summary>Show me the answer</summary>

**Answer:** 1. `printf("Circular queue overflow\n");`

**Explanation:**

*   **Overflow Handling:** When a circular queue is full, the standard way to handle overflow is to print an error message:

    ```c
    printf("Circular queue overflow\n");
    ```
* **Conclusion:** The basic syntax for handling overflow in a circular queue is `printf("Circular queue overflow\n");`.

</details>

#### 241. What is the basic syntax for handling underflow in a circular queue in C?

1. `printf("Circular queue underflow\n");`
2. `return -1;`
3. `exit(1);`
4. Throw an exception

<details>

<summary>Show me the answer</summary>

**Answer:** 1. `printf("Circular queue underflow\n");`

**Explanation:**

*   **Underflow Handling:** When a circular queue is empty, the standard way to handle underflow is to print an error message:

    ```c
    printf("Circular queue underflow\n");
    ```
* **Conclusion:** The basic syntax for handling underflow in a circular queue is `printf("Circular queue underflow\n");`.

</details>

#### 242. What is the balancing factor of a node in an AVL tree?

1. The difference in height between the left and right subtrees of the node
2. The sum of the heights of the left and right subtrees of the node
3. The height of the node's parent
4. The number of children the node has

<details>

<summary>Show me the answer</summary>

**Answer:** 1. The difference in height between the left and right subtrees of the node

**Explanation:**

*   **Balancing Factor:** In an AVL tree, the balancing factor of a node is defined as the difference in height between its left and right subtrees:

    $$
    \text{Balancing Factor} = \text{Height of Left Subtree} - \text{Height of Right Subtree}
    $$
* **Conclusion:** The balancing factor of a node in an AVL tree is the difference in height between its left and right subtrees.

</details>

#### 243. What is the range of the balancing factor in an AVL tree?

1. $$-1 \text{ to } 1$$
2. $$-2 \text{ to } 2$$
3. $$-3 \text{ to } 3$$
4. $$0 \text{ to } 2$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$-1 \text{ to } 1$$

**Explanation:**

* **Balancing Factor Range:** In an AVL tree, the balancing factor of any node must be within the range $$-1 \text{ to } 1$$. If the balancing factor is outside this range, the tree is unbalanced, and rotations are performed to restore balance.
* **Conclusion:** The balancing factor in an AVL tree must be in the range $$-1 \text{ to } 1$$.

</details>

#### 244. What does a balancing factor of $$-1$$ indicate in an AVL tree?

1. The left subtree is taller than the right subtree
2. The right subtree is taller than the left subtree
3. The left and right subtrees are equal in height
4. The node is a leaf node

<details>

<summary>Show me the answer</summary>

**Answer:** 2. The right subtree is taller than the left subtree

**Explanation:**

* **Balancing Factor of** $$-1$$**:** A balancing factor of $$-1$$ indicates that the right subtree is taller than the left subtree by one level.
* **Conclusion:** A balancing factor of $$-1$$ means the right subtree is taller than the left subtree.

</details>

#### 245. What does a balancing factor of $$0$$ indicate in an AVL tree?

1. The left and right subtrees are equal in height
2. The left subtree is taller than the right subtree
3. The right subtree is taller than the left subtree
4. The node is a leaf node

<details>

<summary>Show me the answer</summary>

**Answer:** 1. The left and right subtrees are equal in height

**Explanation:**

* **Balancing Factor of** $$0$$**:** A balancing factor of $$0$$ indicates that the left and right subtrees are of equal height.
* **Conclusion:** A balancing factor of $$0$$ means the left and right subtrees are equal in height.

</details>

#### 246. What does a balancing factor of $$2$$ indicate in an AVL tree?

1. The left subtree is taller than the right subtree by 2 levels
2. The right subtree is taller than the left subtree by 2 levels
3. The left subtree is taller than the right subtree by 1 level
4. The right subtree is taller than the left subtree by 1 level

<details>

<summary>Show me the answer</summary>

**Answer:** 1. The left subtree is taller than the right subtree by 2 levels

**Explanation:**

* **Balancing Factor of** $$2$$**:** A balancing factor of $$2$$ indicates that the left subtree is taller than the right subtree by 2 levels, which violates the AVL tree property.
* **Conclusion:** A balancing factor of $$2$$ means the left subtree is taller than the right subtree by 2 levels.

</details>

#### 247. What is the maximum possible height difference between the left and right subtrees of a node in an AVL tree?

1. 1 level
2. 2 levels
3. 3 levels
4. 4 levels

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 1 level

**Explanation:**

* **Maximum Height Difference:** In an AVL tree, the maximum allowed height difference between the left and right subtrees of any node is 1 level. If the difference exceeds 1, the tree is unbalanced, and rotations are performed to restore balance.
* **Conclusion:** The maximum height difference between the left and right subtrees of a node in an AVL tree is 1 level.

</details>

#### 248. How is the balancing factor used to maintain balance in an AVL tree?

1. Whenever a node is inserted or deleted, the balancing factors of all nodes in the affected subtree are updated, and if any node has a balancing factor outside the range of $$-1$$ to $$1$$, rotations are performed to rebalance the tree.
2. Whenever a node is inserted or deleted, the balancing factors of all nodes in the tree are updated, and if any node has a balancing factor outside the range of $$-2$$ to $$2$$, rotations are performed to rebalance the tree.
3. Whenever a node is inserted or deleted, the balancing factors of all nodes in the affected subtree are updated, and if any node has a balancing factor outside the range of $$0$$ to $$2$$, rotations are performed to rebalance the tree.
4. The balancing factor is not used to maintain balance in an AVL tree.

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Whenever a node is inserted or deleted, the balancing factors of all nodes in the affected subtree are updated, and if any node has a balancing factor outside the range of $$-1$$ to $$1$$, rotations are performed to rebalance the tree.

**Explanation:**

* **Balancing Factor in AVL Trees:** The balancing factor is used to ensure that the AVL tree remains balanced. After every insertion or deletion, the balancing factors of the affected nodes are updated. If any node has a balancing factor outside the range $$-1$$ to $$1$$, rotations (e.g., left rotation, right rotation) are performed to restore balance.
* **Conclusion:** The balancing factor is used to maintain balance in an AVL tree by ensuring that the height difference between the left and right subtrees of any node does not exceed 1.

</details>

#### 249. What is the correct postfix notation for the infix expression $$3 + 4 * 2 / (1 - 5) \wedge 2 \wedge 3$$?

1. $$3 4 2 * 1 5 - 2 3 \wedge / +$$
2. $$3 4 2 * 1 5 - 3 2 \wedge / +$$
3. $$3 4 2 * 1 5 - 2 \wedge 3 \wedge / +$$
4. $$3 4 2 * 1 5 - 2 3 \wedge / +$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$3 4 2 * 1 5 - 2 3 \wedge / +$$

**Explanation:**

* **Infix to Postfix Conversion:** The infix expression $$3 + 4 * 2 / (1 - 5) \wedge 2 \wedge 3$$ is converted to postfix notation as follows:
  1. Apply the precedence and associativity rules for operators.
  2. Use a stack to convert the expression to postfix.
* **Postfix Notation:** The correct postfix notation for the given expression is $$3 4 2 * 1 5 - 2 3 \wedge / +$$.
* **Conclusion:** The correct postfix notation is $$3 4 2 * 1 5 - 2 3 \wedge / +$$.

</details>

#### 250. What is the correct infix notation for the prefix expression $$* + 3 / 2 1 - 5 \wedge 2 3$$?

1. $$3 + 2 / 1 * (5 \wedge 2 - 3)$$
2. $$+ 3 * / 2 1 - 5 2 3$$
3. $$+ 3 / 2 1 * (5 \wedge 2 - 3)$$
4. $$* + 3 / 2 1 - 5 2 3$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$3 + 2 / 1 * (5 \wedge 2 - 3)$$

**Explanation:**

* **Prefix to Infix Conversion:** The prefix expression $$* + 3 / 2 1 - 5 \wedge 2 3$$ is converted to infix notation as follows:
  1. Start from the end of the expression and work backward.
  2. Use a stack to convert the expression to infix.
* **Infix Notation:** The correct infix notation for the given expression is $$3 + 2 / 1 * (5 \wedge 2 - 3)$$.
* **Conclusion:** The correct infix notation is $$3 + 2 / 1 * (5 \wedge 2 - 3)$$.

</details>
