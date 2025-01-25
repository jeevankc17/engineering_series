# set-4

#### 151. Main features of hill climbing algorithm is \_\_\_\_\_\_.

1. Generate and test variant
2. No back tracking
3. Greedy approach
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* **Hill Climbing** is a **generate-and-test variant** that does not backtrack.
* It uses a **greedy approach** to move towards the best neighbor state.

</details>

#### 152. \_\_\_\_\_\_ is the problem in Hill climbing searching.

1. Local Maximum
2. Plateau
3. Ridges
4. All of mentioned above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of mentioned above

**Explanation:**

* **Hill Climbing** can get stuck in **local maxima**, **plateaus**, and **ridges**.
* These are common problems that prevent the algorithm from finding the global optimum.

</details>

#### 153. In \_\_\_\_\_\_ we escape local maxima by allowing some "bad" moves but gradually decrease their frequency.

1. Hill Climbing
2. Simulated Annealing
3. Mini max
4. Alpha beta pruning

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Simulated Annealing

**Explanation:**

* **Simulated Annealing** allows some "bad" moves to escape local maxima.
* The frequency of these moves decreases over time, helping the algorithm converge to the global optimum.

</details>

#### 154. Simulated Annealing is \_\_\_\_\_\_ optimization technique.

1. Local
2. Global
3. Both Local and Global
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Global

**Explanation:**

* **Simulated Annealing** is a **global optimization technique**.
* It is designed to find the global optimum by exploring the search space more thoroughly.

</details>

#### 155. Simulated Annealing is a \_\_\_\_\_\_ algorithm, the algorithm does not use any information gathered during the search.

1. Memory equipped
2. Memory less
3. Processor equipped
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Memory less

**Explanation:**

* **Simulated Annealing** is a **memoryless algorithm**.
* It does not use any information gathered during the search to guide future moves.

</details>

#### 156. The process of annealing can be simulated with the metropolis algorithm which is based on \_\_\_\_\_\_ techniques.

1. Closed form solution
2. Monte-Carlo simulation
3. Numerical Transformation Method
4. Proposed Method

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Monte-Carlo simulation

**Explanation:**

* The **Metropolis Algorithm** used in Simulated Annealing is based on **Monte-Carlo simulation** techniques.
* It uses random sampling to explore the search space.

</details>

#### 157. Adversarial Search uses \_\_\_\_\_\_ environment

1. Collective
2. Competitive
3. Cooperative
4. Both Collective and Cooperative

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Competitive

**Explanation:**

* **Adversarial Search** is used in **competitive environments** where multiple agents compete against each other.
* Examples include games like chess and tic-tac-toe.

</details>

#### 158. General game involves \_\_\_\_\_\_ agents

1. Multi
2. Single
3. Only single and multi
4. Neither single nor multi

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Only single and multi

**Explanation:**

* **General games** can involve either **single-agent** or **multi-agent** scenarios.
* The nature of the game determines the number of agents involved.

</details>

#### 159. \_\_\_\_\_\_ search methods only consider how close the agent is to the goal state.

1. Multi-agent
2. Single-agent
3. Both single and multi-agent
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Single-agent

**Explanation:**

* **Single-agent search methods** focus on how close the agent is to the goal state.
* They do not consider the actions of other agents.

</details>

#### 160. In \_\_\_\_\_\_ games, decisions of both agents have to be taken into account: a decision made by one agent will affect the resulting search space that the other agent would need to explore.

1. Single player
2. Two-player
3. No Player
4. Both Single and Two player

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Two-player

**Explanation:**

* In **two-player games**, the decisions of both agents affect the search space.
* Each agent's move influences the possible moves of the other agent.

</details>

#### 161. To formalize a two-player game as a search problem an agent can be called \_\_\_\_\_\_ and the opponent can be called \_\_\_\_\_\_.

1. MINI, MAX
2. MAX, MIN
3. MIN, MIN
4. MAX, MAX

<details>

<summary>Show me the answer</summary>

**Answer:** 2. MAX, MIN

**Explanation:**

* In **two-player games**, the agent is often called **MAX** (aiming to maximize its score), and the opponent is called **MIN** (aiming to minimize the agent's score).
* This is the basis of the **Minimax Algorithm**.

</details>

#### 162. MINI MAX Algorithm is perfect for deterministic and is a \_\_\_\_\_\_ game.

1. Single player (Computer)
2. Two-player (Computer and User)
3. Single player (User)
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Two-player (Computer and User)

**Explanation:**

* The **Minimax Algorithm** is perfect for **deterministic two-player games**.
* It is commonly used in games like chess and tic-tac-toe.

</details>

#### 163. Free cell, 8-puzzle, Rubrik’s cube is an example of \_\_\_\_\_\_.

1. Deterministic Multi player
2. Deterministic Single player
3. Non-Deterministic single player
4. Non-deterministic multi player

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Deterministic Single player

**Explanation:**

* **Free cell**, **8-puzzle**, and **Rubik’s cube** are examples of **deterministic single-player games**.
* The outcome is determined solely by the player's actions.

</details>

#### 164. Tic-tac-toe, Chess, Checker is a example of \_\_\_\_\_\_.

1. Deterministic Multi player
2. Deterministic Single player
3. Non-Deterministic single player
4. Non-deterministic multi player

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Deterministic Multi player

**Explanation:**

* **Tic-tac-toe**, **chess**, and **checkers** are examples of **deterministic multi-player games**.
* The outcome depends on the actions of both players.

</details>

#### 165. In \_\_\_\_\_\_ game, one player maximize result, another player minimize result.

1. Zero-player
2. One-player
3. Two-player
4. Thee-player

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Two-player

**Explanation:**

* In **two-player games**, one player aims to **maximize** their result, while the other aims to **minimize** it.
* This is the basis of the **Minimax Algorithm**.

</details>

#### 166. \_\_\_\_\_\_ is the time and \_\_\_\_\_\_ is the space complexity of MINI MAX Algorithm.

1. $$O(b^m)$$, $$O(bm)$$
2. $$O(b^{m+1})$$, $$O(bm)$$
3. $$O(b^m)$$, $$O(b^m)$$
4. $$O(bm)$$, $$O(b^m)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$O(b^m)$$, $$O(bm)$$

**Explanation:**

* The **time complexity** of the Minimax Algorithm is $$O(b^m)$$, where $$b$$ is the branching factor and $$m$$ is the maximum depth.
* The **space complexity** is $$O(bm)$$ because it stores the current path in the stack.

</details>

#### 167. The minimax algorithm performs a complete \_\_\_\_\_\_ exploration of the game tree.

1. Breadth-first
2. Depth-first
3. Best-first
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Depth-first

**Explanation:**

* The **Minimax Algorithm** performs a **depth-first exploration** of the game tree.
* It explores each branch to the maximum depth before backtracking.

</details>

#### 168. Is MINI MAX Search complete if tree is finite?

1. May be
2. No
3. Yes
4. Rather not say

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Yes

**Explanation:**

* **Minimax Search** is **complete** if the game tree is finite.
* It will eventually find the optimal solution if one exists.

</details>

#### 169. For making decision of win/lose, we apply \_\_\_\_\_\_ algorithm on game tree.

1. Greedy search Algorithm
2. Hill Climbing Algorithm
3. Mini Max Algorithm
4. BFS/DFS Algorithm

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Mini Max Algorithm

**Explanation:**

* The **Minimax Algorithm** is used to make decisions about winning or losing in game trees.
* It evaluates all possible moves to determine the best strategy.

</details>

#### 170. In Alpha-Beta Pruning Algorithm, Pruning \_\_\_\_\_\_ the final result.

1. Might affect
2. Does not affect
3. Affect
4. Sometime affects, sometime doesn’t affect

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Does not affect

**Explanation:**

* **Alpha-Beta Pruning** does not affect the final result.
* It only reduces the number of nodes evaluated, improving efficiency without changing the outcome.

</details>

#### 171. Why it is called Alpha-Beta? α is the value of the best \_\_\_\_\_\_ choice found so far at any choice point along the path for max.

1. Lowest value
2. Average value
3. Highest value
4. Infinite value

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Highest value

**Explanation:**

* In **Alpha-Beta Pruning**, $$\alpha$$ represents the **highest value** choice found so far for the MAX player.
* $$\beta$$ represents the **lowest value** choice found so far for the MIN player.

</details>

#### 172. \_\_\_\_\_\_ is a modified version of the Mini Max Algorithm.

1. Hill climbing
2. Alpha beta pruning
3. BFS
4. DFS

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Alpha beta pruning

**Explanation:**

* **Alpha-Beta Pruning** is a modified version of the **Minimax Algorithm**.
* It reduces the number of nodes evaluated by pruning branches that cannot influence the final decision.

</details>

#### 173. To \_\_\_\_\_\_ depth does the alpha-beta pruning can be applied.

1. 12 states
2. 5 States
3. 1 States
4. Any depth

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Any depth

**Explanation:**

* **Alpha-Beta Pruning** can be applied to **any depth** in the game tree.
* It is not limited to a specific number of states or levels.

</details>

#### 174. In alpha-beta pruning, the initial value of alpha is \_\_\_\_\_\_ and beta is \_\_\_\_\_\_.

1. Negative Infinity, Positive Infinity
2. -1, +1
3. Positive Infinity, Negative Infinity
4. +1, -1

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Negative Infinity, Positive Infinity

**Explanation:**

* In **Alpha-Beta Pruning**, the initial value of $$\alpha$$ is **negative infinity**, and $$\beta$$ is **positive infinity**.
* These values are updated as the algorithm explores the game tree.

</details>

#### 175. The main condition which required for alpha-beta pruning is?

1. alpha>=beta
2. alpha=beta
3. alpha<=bet
4. alpha!=beta

<details>

<summary>Show me the answer</summary>

**Answer:** 1. alpha>=beta

**Explanation:**

* The main condition for **Alpha-Beta Pruning** is $$\alpha \geq \beta$$.
* When this condition is met, the algorithm prunes the remaining branches.

</details>

#### 176. The 2 types of move ordering in Alpha-Beta Pruning are \_\_\_\_\_\_ and \_\_\_\_\_\_.

1. Best ordering, Ideal Ordering
2. Worst ordering, Ideal Ordering
3. Best ordering, Random Ordering
4. Worst ordering, Random Ordering

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Worst ordering, Ideal Ordering

**Explanation:**

* The two types of move ordering in **Alpha-Beta Pruning** are **worst ordering** and **ideal ordering**.
* Ideal ordering maximizes pruning efficiency, while worst ordering minimizes it.

</details>

#### 177. In Alpha-Beta pruning, With "perfect ordering," time complexity = \_\_\_\_\_\_.

1. $$O(b^{m/2})$$
2. $$O(b^{m+1/2})$$
3. $$O(b^m)$$
4. $$O(bm)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$O(b^{m/2})$$

**Explanation:**

* With **perfect ordering**, the **time complexity** of Alpha-Beta Pruning is $$O(b^{m/2})$$.
* This significantly reduces the number of nodes evaluated compared to Minimax.

</details>

#### 178. Identify the type of knowledge in Artificial Intelligence.

1. Procedural and Declarative Knowledge
2. Meta Knowledge
3. Structural and Heuristic Knowledge
4. All of above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of above

**Explanation:**

* In AI, knowledge can be **procedural**, **declarative**, **meta**, **structural**, or **heuristic**.
* These types of knowledge are used to represent and reason about information in AI systems.

</details>

#### 179. \_\_\_\_\_\_ Knowledge is also known as Imperative Knowledge.

1. Procedural
2. Meta
3. Structural
4. Heuristic

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Procedural

**Explanation:**

* **Procedural Knowledge** is also known as **Imperative Knowledge**.
* It involves knowing how to perform tasks or procedures.

</details>

#### 180. \_\_\_\_\_\_ is non procedural, independent of targets and problem solving.

1. Procedural Knowledge
2. Declarative Knowledge
3. Meta Knowledge
4. Structural Knowledge

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Declarative Knowledge

**Explanation:**

* **Declarative Knowledge** is non-procedural and independent of specific targets or problem-solving methods.
* It involves knowing facts and information.

</details>

#### 181. \_\_\_\_\_\_ is a knowledge about knowledge and how to gain them.

1. Procedural Knowledge
2. Declarative Knowledge
3. Meta Knowledge
4. Structural Knowledge

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Meta Knowledge

**Explanation:**

* **Meta Knowledge** is knowledge about knowledge and how to acquire it.
* It involves understanding the nature and structure of knowledge itself.

</details>

#### 182. \_\_\_\_\_\_ represents a knowledge of some experts in a field or subject.

1. Procedural Knowledge
2. Declarative Knowledge
3. Heuristic Knowledge
4. Structural Knowledge

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Heuristic Knowledge

**Explanation:**

* **Heuristic Knowledge** represents the knowledge of experts in a field or subject.
* It involves rules of thumb and practical strategies for problem-solving.

</details>

#### 183. \_\_\_\_\_\_ talks about what relationship exists between concept/objects.

1. Procedural Knowledge
2. Declarative Knowledge
3. Heuristic Knowledge
4. Structural Knowledge

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Structural Knowledge

**Explanation:**

* **Structural Knowledge** describes the relationships between concepts or objects.
* It involves understanding how different elements are connected.

</details>

#### 184. Knowledge Representation and Reasoning represents information from the real world for a computer to understand and then utilize this knowledge to solve \_\_\_\_\_\_.

1. Simplest real-life problems
2. Complex real-life problems
3. Neither simplest nor complex problems
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Complex real-life problems

**Explanation:**

* **Knowledge Representation and Reasoning** is used to represent real-world information in a way that computers can understand.
* This knowledge is then utilized to solve **complex real-life problems**.

</details>

#### 185. Different kinds of knowledge that need to be represented in AI are \_\_\_\_\_\_.

1. Object, Events, Performance, Facts
2. Knowledge base
3. Meta knowledge
4. All of above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of above

**Explanation:**

* In AI, knowledge about **objects**, **events**, **performance**, **facts**, **knowledge bases**, and **meta knowledge** needs to be represented.
* These types of knowledge are essential for reasoning and problem-solving.

</details>

#### 186. \_\_\_\_\_\_ is the technique of knowledge representation in AI

1. Logical Representation
2. Semantic Network and Frame Representation
3. Production Rules
4. All of above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of above

**Explanation:**

* **Logical Representation**, **Semantic Networks**, **Frame Representation**, and **Production Rules** are all techniques used for knowledge representation in AI.
* These techniques help in organizing and reasoning about knowledge.

</details>

#### 187. \_\_\_\_\_\_ is a language with some definite rules which deal with propositions & has no ambiguity in representation.

1. Semantic Network representation
2. Logical Representation
3. Frame Representation
4. Production Rules

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Logical Representation

**Explanation:**

* **Logical Representation** is a language with definite rules that deal with propositions.
* It ensures there is no ambiguity in the representation of knowledge.

</details>

#### 188. In order to give information to agent and get info without errors in communication, we use \_\_\_\_\_\_ technique of knowledge representation.

1. Semantic Network representation
2. Logical Representation
3. Frame Representation
4. Production Rules

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Logical Representation

**Explanation:**

* **Logical Representation** is used to give information to agents and retrieve it without errors.
* It provides a clear and unambiguous way to represent knowledge.

</details>

#### 189. \_\_\_\_\_\_ work as an alternative of predicate logic for knowledge representation.

1. Semantic Network Representation
2. Logical Representation
3. Frame Representation
4. Production Rules

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Semantic Network Representation

**Explanation:**

* **Semantic Network Representation** is an alternative to predicate logic for knowledge representation.
* It uses nodes and links to represent relationships between concepts.

</details>

#### 190. \_\_\_\_\_\_ knowledge representation consists of < condition, action > pairs

1. Semantic Network Representation
2. Logical Representation
3. Frame Representation
4. Production Rules

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Production Rules

**Explanation:**

* **Production Rules** consist of < condition, action > pairs.
* These rules are used to represent knowledge in a way that can be easily applied to solve problems.

</details>

#### 191. \_\_\_\_\_\_ is a knowledge representation technique where knowledge is represented as a set of objects and their attributes.

1. Semantic Network Representation
2. Logical Representation
3. Frame Representation
4. Production Rules

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Frame Representation

**Explanation:**

* **Frame Representation** is a knowledge representation technique where knowledge is represented as a set of objects and their attributes.
* It is similar to object-oriented programming.

</details>

#### 192. \_\_\_\_\_\_ is a knowledge representation technique where knowledge is represented as a graph of nodes and links.

1. Semantic Network Representation
2. Logical Representation
3. Frame Representation
4. Production Rules

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Semantic Network Representation

**Explanation:**

* **Semantic Network Representation** uses a graph of nodes and links to represent knowledge.
* Nodes represent concepts, and links represent relationships between them.

</details>

#### 193. \_\_\_\_\_\_ is a knowledge representation technique where knowledge is represented as a set of rules.

1. Semantic Network Representation
2. Logical Representation
3. Frame Representation
4. Production Rules

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Production Rules

**Explanation:**

* **Production Rules** represent knowledge as a set of rules.
* These rules are used to infer new knowledge from existing knowledge.

</details>

#### 194. \_\_\_\_\_\_ is a knowledge representation technique where knowledge is represented as a set of logical statements.

1. Semantic Network Representation
2. Logical Representation
3. Frame Representation
4. Production Rules

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Logical Representation

**Explanation:**

* **Logical Representation** uses logical statements to represent knowledge.
* It is based on formal logic and provides a precise way to represent information.

</details>

#### 195. \_\_\_\_\_\_ is a knowledge representation technique where knowledge is represented as a set of frames.

1. Semantic Network Representation
2. Logical Representation
3. Frame Representation
4. Production Rules

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Frame Representation

**Explanation:**

* **Frame Representation** uses frames to represent knowledge.
* Each frame contains slots that represent attributes of an object or concept.

</details>

#### 196. \_\_\_\_\_\_ is a knowledge representation technique where knowledge is represented as a set of if-then rules.

1. Semantic Network Representation
2. Logical Representation
3. Frame Representation
4. Production Rules

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Production Rules

**Explanation:**

* **Production Rules** represent knowledge as a set of if-then rules.
* These rules are used to infer new knowledge from existing knowledge.

</details>

#### 197. \_\_\_\_\_\_ is a knowledge representation technique where knowledge is represented as a set of nodes and links.

1. Semantic Network Representation
2. Logical Representation
3. Frame Representation
4. Production Rules

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Semantic Network Representation

**Explanation:**

* **Semantic Network Representation** uses nodes and links to represent knowledge.
* Nodes represent concepts, and links represent relationships between them.

</details>

#### 198. \_\_\_\_\_\_ is a knowledge representation technique where knowledge is represented as a set of logical statements.

1. Semantic Network Representation
2. Logical Representation
3. Frame Representation
4. Production Rules

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Logical Representation

**Explanation:**

* **Logical Representation** uses logical statements to represent knowledge.
* It is based on formal logic and provides a precise way to represent information.

</details>

#### 199. \_\_\_\_\_\_ is a knowledge representation technique where knowledge is represented as a set of frames.

1. Semantic Network Representation
2. Logical Representation
3. Frame Representation
4. Production Rules

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Frame Representation

**Explanation:**

* **Frame Representation** uses frames to represent knowledge.
* Each frame contains slots that represent attributes of an object or concept.

</details>

#### 200. \_\_\_\_\_\_ is a knowledge representation technique where knowledge is represented as a set of if-then rules.

1. Semantic Network Representation
2. Logical Representation
3. Frame Representation
4. Production Rules

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Production Rules

**Explanation:**

* **Production Rules** represent knowledge as a set of if-then rules.
* These rules are used to infer new knowledge from existing knowledge.

</details>
