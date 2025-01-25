# set-3

#### 134. \_\_\_\_\_\_ is similar to Hill climbing searching but with revising or backtracking.

1. Depth first search
2. Breadth first search
3. Best first search
4. Binary Search

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Best first search

**Explanation:**

* **Best-First Search** is similar to Hill Climbing but allows for revising or backtracking.
* It uses a heuristic function to guide the search.

</details>

#### 135. The best first search uses the concept of a \_\_\_\_\_\_ and heuristic search.

1. Circular queue
2. Linear queue
3. Priority queue
4. Stack

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Priority queue

**Explanation:**

* **Best-First Search** uses a **priority queue** to prioritize nodes based on a heuristic function.
* This ensures that the most promising nodes are explored first.

</details>

#### 136. \_\_\_\_\_\_ is the time and \_\_\_\_\_\_ is the space complexity of Best first search. Where b= branching factor and d= depth.

1. $$O(b^{d-1})$$, $$O(b^{d-1})$$
2. $$O(b^{d+1})$$, $$O(b^{d+1})$$
3. $$O(b^{d-1})$$, $$O(b^{d+1})$$
4. $$O(bd^2)$$, $$O(bd)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$O(b^{d-1})$$, $$O(b^{d-1})$$

**Explanation:**

* The **time complexity** of Best-First Search is $$O(b^{d-1})$$.
* The **space complexity** is also $$O(b^{d-1})$$ because it stores nodes in the priority queue.

</details>

#### 137. Greedy best first search evaluates nodes by using only \_\_\_\_\_\_

1. Linear function
2. Non-linear function
3. Friend function
4. Heuristic function

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Heuristic function

**Explanation:**

* **Greedy Best-First Search** evaluates nodes using only a **heuristic function**.
* This function estimates the cost to reach the goal from the current node.

</details>

#### 138. Why greedy best first search is not complete?

1. Because it can override the heuristic function
2. Because it can traverse to outer loop
3. Because it can get stuck in loop
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Because it can get stuck in loop

**Explanation:**

* **Greedy Best-First Search** is **not complete** because it can get stuck in loops.
* It does not guarantee finding a solution if one exists.

</details>

#### 139. \_\_\_\_\_\_ is the time and \_\_\_\_\_\_ is the space complexity of Greedy Best first search.

1. $$O(bm)$$, $$O(b^{m})$$
2. $$O(b^{m})$$, $$O(bm)$$
3. $$O(b^{m+1})$$, $$O(b^{m+1})$$
4. $$O(b^{m})$$, $$O(b^{m})$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$O(b^{m})$$, $$O(b^{m})$$

**Explanation:**

* The **time complexity** of Greedy Best-First Search is $$O(b^{m})$$.
* The **space complexity** is also $$O(b^{m})$$ because it stores nodes in the priority queue.

</details>

#### 140. The main idea of A\* searching is to a \_\_\_\_\_\_

1. Do not expand expensive path
2. Expand expensive path
3. All path cost are same in searching
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Do not expand expensive path

**Explanation:**

* The main idea of _A Search_\* is to avoid expanding expensive paths by using a heuristic function.
* It combines the cost to reach the current node and the estimated cost to reach the goal.

</details>

#### 141. Evaluation function is \_\_\_\_\_\_ for A\* searching, where, g(n) - cost so far to reach n h(n) - estimated cost to goal from n f(n) - estimated total cost of path through n to goal.

1. $$f(n) = g(n) / h(n)$$
2. $$f(n) = g(n) - h(n)$$
3. $$f(n) = g(n) + h(n)$$
4. $$f(n) = g(n) \times h(n)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$f(n) = g(n) + h(n)$$

**Explanation:**

* The **evaluation function** in A\* Search is $$f(n) = g(n) + h(n)$$.
* Here, $$g(n)$$ is the cost to reach node $$n$$, and $$h(n)$$ is the estimated cost to reach the goal from $$n$$.

</details>

#### 142. A\* search uses an \_\_\_\_\_\_ heuristic; that is, h(n) < h\*(n) where h\*(n) is the true cost from ‘n’.

1. Non- admissible
2. Admissible
3. Anchoring
4. Constant

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Admissible

**Explanation:**

* _A Search_\* uses an **admissible heuristic**, meaning $$h(n) < h^*(n)$$.
* This ensures that the heuristic never overestimates the true cost to reach the goal.

</details>

#### 143. When should A\* searching terminate?

1. After we enqueue a goal
2. After we dequeue a goal
3. No enqueue and dequeue
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. After we dequeue a goal

**Explanation:**

* _A Search_\* terminates when a goal node is **dequeued** from the priority queue.
* This ensures that the optimal path has been found.

</details>

#### 144. A\* search theorem states that:

1. If h(n) is not admissible, A\* using TREE-SEARCH is optimal.
2. If h(n) is admissible, A\* using TREE-SEARCH is optimal.
3. If h(n) is admissible, A\* using TREE-SEARCH is not optimal.
4. If h(n) is not admissible, A\* using TREE-SEARCH is also not optimal.

<details>

<summary>Show me the answer</summary>

**Answer:** 2. If h(n) is admissible, A\* using TREE-SEARCH is optimal.

**Explanation:**

* The _A Search Theorem_\* states that if the heuristic $$h(n)$$ is **admissible**, A\* using TREE-SEARCH is **optimal**.
* This means it will find the least-cost path to the goal.

</details>

#### 145. \_\_\_\_\_\_ is the time and \_\_\_\_\_\_ is the space complexity of A\* Search. Where b= branching factor and d= depth

1. $$O(b^{d+1})$$, $$O(b^b)$$
2. $$O(b^b)$$, $$O(b^b)$$
3. $$O(b^{d+1})$$, $$O(b^{d+1})$$
4. $$O(b^b)$$, $$O(b^{d+1})$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$O(b^b)$$, $$O(b^b)$$

**Explanation:**

* The **time complexity** of A\* Search is $$O(b^b)$$.
* The **space complexity** is also $$O(b^b)$$ because it stores nodes in the priority queue.

</details>

#### 146. A\* is an admissible algorithm that \_\_\_\_\_\_ optimal solution.

1. Does not guarantee
2. Guarantee
3. Partially guarantee
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Guarantee

**Explanation:**

* _A Search_\* is an **admissible algorithm** that **guarantees** an optimal solution.
* It finds the least-cost path to the goal if the heuristic is admissible.

</details>

#### 147. The main application of A\* Search Algorithm is: Path/ Routing problems can be solved by using A\* Searching algorithm.

1. True
2. False
3. Partially True
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. True

**Explanation:**

* _A Search_\* is widely used for solving **pathfinding** and **routing problems**.
* It is efficient and guarantees the optimal path if the heuristic is admissible.

</details>

#### 148. A\* using Tree search is optimal if heuristic is \_\_\_\_\_\_.

1. Constant
2. Admissible
3. Anchoring
4. Representative

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Admissible

**Explanation:**

* _A Search_\* using Tree Search is **optimal** if the heuristic is **admissible**.
* This means the heuristic never overestimates the true cost to reach the goal.

</details>

#### 149. A\* using Graph search is optimal if heuristic is \_\_\_\_\_\_.

1. Constant
2. Admissible
3. Representative
4. Anchoring

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Admissible

**Explanation:**

* _A Search_\* using Graph Search is **optimal** if the heuristic is **admissible**.
* This ensures that the algorithm finds the least-cost path to the goal.

</details>

#### 150. \_\_\_\_\_\_ is sometimes called greedy local search because it grabs a good neighbor state without thinking ahead about where to go next.

1. Mini Max
2. Alpha beta pruning
3. Hill Climbing
4. BFS

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Hill Climbing

**Explanation:**

* **Hill Climbing** is sometimes called **greedy local search** because it selects the best neighbor state without considering future steps.
* It focuses on immediate improvements rather than long-term planning.

</details>
