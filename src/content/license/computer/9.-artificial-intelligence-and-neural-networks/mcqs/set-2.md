# set-2

#### 51. If the next state of the environment is completely determined by the current state and the actions of the agent, then the environment is \_\_\_\_\_\_.

1. Deterministic
2. Non-Deterministic
3. Random
4. Static

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Deterministic

**Explanation:**

* In a **deterministic environment**, the next state is entirely determined by the current state and the agent's actions.
* There is no randomness or uncertainty in the outcome.

</details>

#### 52. Tic-Tac-Toe game is the example of \_\_\_\_\_\_ environment.

1. Random
2. Dynamic
3. Deterministic
4. Non-Deterministic

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Deterministic

**Explanation:**

* In **Tic-Tac-Toe**, the next state of the game is entirely determined by the current state and the player's move.
* This makes it a **deterministic environment**.

</details>

#### 53. Self-driving vehicles are an example of \_\_\_\_\_\_ AI processes.

1. Non-deterministic/Stochastic
2. Deterministic
3. Fully observable
4. Partially observable

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Non-deterministic/Stochastic

**Explanation:**

* Self-driving vehicles operate in **non-deterministic** or **stochastic** environments because they must deal with unpredictable factors like other drivers, pedestrians, and weather conditions.
* The outcomes of their actions are not always certain.

</details>

#### 54. In Episodic Environment, Experience is divided into \_\_\_\_\_\_ of agents perceiving then acting. Action taken in one \_\_\_\_\_\_ does not affect next one at all.

1. Epochs
2. Episodes
3. Time frames
4. Half

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Episodes

**Explanation:**

* In an **episodic environment**, the agent's experience is divided into **episodes**, where each episode is independent of the others.
* Actions taken in one episode do not affect the next.

</details>

#### 55. E-mail sorting system is an example of \_\_\_\_\_\_.

1. Episodic Environment
2. Static Environment
3. Non-Deterministic Environment
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Episodic Environment

**Explanation:**

* An **email sorting system** operates in an **episodic environment** because each email is processed independently.
* The sorting of one email does not affect the sorting of the next.

</details>

#### 56. Chess Game is an example of \_\_\_\_\_\_.

1. Episodic Environment
2. Static Environment
3. Non-Episodic Environment
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Non-Episodic Environment

**Explanation:**

* A **chess game** is a **non-episodic environment** because each move affects the state of the game and influences future moves.
* The game is continuous and interconnected.

</details>

#### 57. The environment is \_\_\_\_\_\_ if current decisions affect future decisions, or rely on previous ones.

1. Sequential/Non-Episodic
2. Static
3. Dynamic
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Sequential/Non-Episodic

**Explanation:**

* In a **sequential** or **non-episodic environment**, current decisions affect future decisions, and the agent must consider the history of its actions.
* This is common in games like chess or real-world planning tasks.

</details>

#### 58. If the environment does not change while an agent is acting, then it is \_\_\_\_\_\_; otherwise, it is \_\_\_\_\_\_.

1. Static, Dynamic
2. Static, Deterministic
3. Dynamic, Static
4. Dynamic, Deterministic

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Static, Dynamic

**Explanation:**

* A **static environment** does not change while the agent is acting, whereas a **dynamic environment** changes over time.
* This distinction is important for designing agents that can adapt to their surroundings.

</details>

#### 59. Consider an example, if we add 2+2=4 this will remain same they will never be change. Which environment is this?

1. Static
2. Dynamic
3. Sequential
4. Deterministic

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Static

**Explanation:**

* The equation $$2 + 2 = 4$$ is a **static environment** because it does not change over time.
* The result is always the same, regardless of when or how it is calculated.

</details>

#### 60. Consider an example of playing football game, in every action there will be new reaction. Which environment is this?

1. Static
2. Dynamic
3. Sequential
4. Deterministic

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Dynamic

**Explanation:**

* A **football game** is a **dynamic environment** because the state of the game changes continuously with each action.
* Players must constantly adapt to new situations.

</details>

#### 61. If there are a limited number of distinct, clearly defined, states of the environment, the environment is \_\_\_\_\_\_.

1. Discrete
2. Continuous
3. Static
4. Dynamic

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Discrete

**Explanation:**

* A **discrete environment** has a finite number of distinct states, each clearly defined.
* This is in contrast to a continuous environment, where states can vary infinitely.

</details>

#### 62. Consider an example of a game of chess or checkers where there are a set number of moves. Which environment is this?

1. Discrete
2. Continuous
3. Static
4. Dynamic

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Discrete

**Explanation:**

* Games like **chess** and **checkers** have a finite number of possible moves and states, making them **discrete environments**.
* The game progresses through a series of distinct states.

</details>

#### 63. Signals constantly coming into sensors, actions continually changing is \_\_\_\_\_\_ environment.

1. Discrete
2. Continuous
3. Static
4. Deterministic

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Continuous

**Explanation:**

* A **continuous environment** involves signals and actions that change continuously over time.
* This is common in real-world systems like self-driving cars or robotics.

</details>

#### 64. Consider an example, Taxi driving. In which there could be a route from to anywhere to anywhere else. Which environment is this?

1. Discrete
2. Continuous
3. Static
4. Deterministic

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Continuous

**Explanation:**

* **Taxi driving** involves navigating through a **continuous environment**, where routes and positions can vary infinitely.
* The environment is not limited to a finite set of states.

</details>

#### 65. \_\_\_\_\_\_ is not Properties of Environment.

1. Discrete / Continuous
2. Static / Dynamic
3. Deterministic / Non-deterministic
4. No agent / Multiple agents

<details>

<summary>Show me the answer</summary>

**Answer:** 4. No agent / Multiple agents

**Explanation:**

* The properties of an environment include whether it is **discrete/continuous**, **static/dynamic**, and **deterministic/non-deterministic**.
* The presence or absence of agents is not a property of the environment itself.

</details>

#### 66. What kind of environment is crossword puzzle?

1. Dynamic
2. Static
3. Semi Dynamic
4. Observable

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Static

**Explanation:**

* A **crossword puzzle** is a **static environment** because the puzzle does not change while the solver is working on it.
* The solver's actions do not alter the puzzle itself.

</details>

#### 67. \_\_\_\_\_\_ environment is called as semi dynamic.

1. Environment does not change with the passage of time
2. Agent performance changes
3. Environment does not change with the passage of time, but Agent performance changes
4. Environment will be changed

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Environment does not change with the passage of time, but Agent performance changes

**Explanation:**

* A **semi-dynamic environment** is one where the environment itself does not change over time, but the agent's performance or actions may change.
* This is a hybrid between static and dynamic environments.

</details>

#### 68. An agent's sensors give it access to the complete state of the environment at each point in time is \_\_\_\_\_\_.

1. Fully observable environment
2. Partially observable environment
3. Stochastic Environment
4. Dynamic Environment

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Fully observable environment

**Explanation:**

* If an agent's sensors provide complete access to the environment's state at all times, the environment is **fully observable**.
* The agent has all the information it needs to make decisions.

</details>

#### 69. Environment can change while agent is thinking is \_\_\_\_\_\_.

1. Static Environment
2. Dynamic Environment
3. Deterministic Environment
4. Sequential Environment

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Dynamic Environment

**Explanation:**

* In a **dynamic environment**, the environment can change while the agent is thinking or acting.
* This requires the agent to adapt to new situations in real-time.

</details>

#### 70. Environment does not change with time but, but performance score does is \_\_\_\_\_\_.

1. Dynamic Environment
2. Semi-Dynamic Environment
3. Deterministic Environment
4. Sequential Environment

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Semi-Dynamic Environment

**Explanation:**

* A **semi-dynamic environment** is one where the environment itself does not change over time, but the agent's performance or score may change.
* This is a hybrid between static and dynamic environments.

</details>

#### 71. An agent operating by itself in an environment is \_\_\_\_\_\_.

1. Single Agent
2. Multi-Agent
3. Intelligent Agent
4. Rational Agent

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Single Agent

**Explanation:**

* A **single agent** operates independently in an environment without interacting with other agents.
* This is in contrast to a multi-agent system, where multiple agents interact.

</details>

#### 72. What kind of agent is a Web Crawler?

1. Table-driven agent
2. Utility-based agent
3. Learning agent
4. Intelligent goal-based agent

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Intelligent goal-based agent

**Explanation:**

* A **web crawler** is an **intelligent goal-based agent** because it is designed to achieve specific goals, such as indexing web pages.
* It uses intelligent algorithms to navigate and collect data from the web.

</details>

#### 73. \_\_\_\_\_\_ is the main task of a problem-solving agent.

1. Solve the given problem and reach to goal
2. To find out which sequence of action will get it to the goal state
3. All of the mentioned
4. None of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 3. All of the mentioned

**Explanation:**

* The main task of a **problem-solving agent** is to solve the given problem and reach the goal.
* This involves finding the sequence of actions that will lead to the goal state.

</details>

#### 74. \_\_\_\_\_\_ is a process of generating solution from an observed data.

1. Problem generating
2. Problem Solving
3. Problem Identifying
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Problem Solving

**Explanation:**

* **Problem solving** involves generating solutions based on observed data or information.
* It is a key task for intelligent agents in AI.

</details>

#### 75. Problem solving is characterized by \_\_\_\_\_\_.

1. A set of goals
2. Set of objects
3. Set of operations
4. All of the mentioned above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the mentioned above

**Explanation:**

* Problem solving is characterized by a **set of goals**, a **set of objects**, and a **set of operations** that can be performed to achieve the goals.
* These elements define the problem space.

</details>

#### 76. Problem space is an \_\_\_\_\_\_ space.

1. Virtual
2. Abstract
3. Search
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Abstract

**Explanation:**

* The **problem space** is an **abstract representation** of the problem, including all possible states and actions.
* It is used by the agent to explore and find solutions.

</details>

#### 77. The solution to the problem space is \_\_\_\_\_\_.

1. Combination of operations and objects that achieve the goals.
2. Combination of Abstract space and objects that achieve the goals.
3. Combination of Problem and solution that achieve the goals.
4. Combination of Operation and Abstract space that achieve the goals.

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Combination of operations and objects that achieve the goals.

**Explanation:**

* The solution to a problem space involves finding the **combination of operations and objects** that achieve the desired goals.
* This is the essence of problem-solving in AI.

</details>

#### 78. Search refers to the search for a \_\_\_\_\_\_ in a problem space.

1. Problem
2. Solution
3. Idea
4. Knowledge

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Solution

**Explanation:**

* **Search** in AI refers to the process of finding a **solution** within the problem space.
* The agent explores possible states and actions to reach the goal.

</details>

#### 79. To build a system to solve a particular problem, we need to \_\_\_\_\_\_.

1. Define the problem
2. Analyze the problem
3. Isolate and represent task knowledge necessary to solve the problem
4. Choose the best problem-solving technique and apply to the particular problem
5. All of above mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 5. All of above mentioned

**Explanation:**

* To build a problem-solving system, we need to **define the problem**, **analyze it**, **represent the necessary knowledge**, and **choose the best technique** to solve it.
* These steps are essential for effective problem-solving in AI.

</details>

#### 80. A \_\_\_\_\_\_ is defined by its elements and their relations.

1. Solution
2. Problem
3. Reason
4. Idea

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Problem

**Explanation:**

* A **problem** is defined by its **elements** (e.g., objects, goals) and the **relations** between them.
* This definition helps the agent understand and solve the problem.

</details>

#### 81. \_\_\_\_\_\_ is a representation of element at given moment.

1. State
2. Space
3. Search
4. Problem

<details>

<summary>Show me the answer</summary>

**Answer:** 1. State

**Explanation:**

* A **state** represents the configuration of elements in the problem space at a given moment.
* It is a snapshot of the problem at a specific point in time.

</details>

#### 82. \_\_\_\_\_\_ is needed for state change.

1. Successor function
2. Compressor function
3. Generalization function
4. Abstract function

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Successor function

**Explanation:**

* The **successor function** is used to generate new states from the current state by applying actions.
* It is essential for exploring the problem space and finding solutions.

</details>

#### 83. A \_\_\_\_\_\_ is a set of all states, reachable from initial state.

1. Search space
2. State space
3. Problem space
4. None

<details>

<summary>Show me the answer</summary>

**Answer:** 2. State space

**Explanation:**

* The **state space** is the set of all possible states that can be reached from the initial state by applying actions.
* It represents the entire problem space that the agent can explore.

</details>

#### 84. The structure of state space is \_\_\_\_\_\_ and \_\_\_\_\_\_.

1. Root node and leaf nodes
2. Tree and Graph
3. Tree and Forest
4. Forest and Graph

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Tree and Graph

**Explanation:**

* The **state space** can be represented as a **tree** or a **graph**, depending on the problem.
* Trees are used for problems with a hierarchical structure, while graphs are used for more complex relationships.

</details>

#### 85. \_\_\_\_\_\_ explores the state space.

1. State process
2. Search process
3. Problem process
4. Successor function

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Search process

**Explanation:**

* The **search process** explores the state space to find a path from the initial state to the goal state.
* It involves evaluating and selecting actions to reach the solution.

</details>

#### 86. In \_\_\_\_\_\_ the search explores, all possible path between the initial state and the goal state.

1. Best case
2. Worst case
3. Average case
4. All case

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Worst case

**Explanation:**

* In the **worst case**, the search process explores all possible paths between the initial state and the goal state.
* This occurs when the search algorithm does not use heuristics or other optimizations.

</details>

#### 87. In the state space, a \_\_\_\_\_\_ is a path from the initial state to the goal state or sometime just the goal state.

1. Problem
2. Solution
3. Search
4. Process

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Solution

**Explanation:**

* A **solution** in the state space is a path from the initial state to the goal state.
* It represents the sequence of actions that solve the problem.

</details>

#### 88. A problem consists of description of \_\_\_\_\_\_.

1. Current state
2. Action
3. Desired state
4. All of them

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of them

**Explanation:**

* A problem consists of the **current state**, the **actions** that can be taken, and the **desired state** (goal).
* These elements define the problem and guide the search for a solution.

</details>

#### 89. What is Initial state + Goal state in Search Terminology?

1. Problem Space
2. Problem Instance
3. Search Space Graph
4. Admissibility

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Problem Instance

**Explanation:**

* In search terminology, the combination of the **initial state** and the **goal state** is called a **problem instance**.
* It defines the specific problem to be solved.

</details>

#### 90. Which of the following is the process of eliminating the detail from a given state representation?

1. Extraction
2. Exploration
3. Association
4. Abstraction

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Abstraction

**Explanation:**

* **Abstraction** is the process of removing unnecessary details from a state representation to simplify the problem.
* It helps focus on the essential aspects of the problem.

</details>

#### 91. A \_\_\_\_\_\_ is Deterministic, fully observable, known, discrete in nature.

1. Search space problem
2. State space problem
3. Conformant Problem
4. Contingency Problem

<details>

<summary>Show me the answer</summary>

**Answer:** 2. State space problem

**Explanation:**

* A **state space problem** is deterministic, fully observable, known, and discrete.
* These properties make it easier to model and solve using search algorithms.

</details>

#### 92. A \_\_\_\_\_\_ is non-observable in nature.

1. Search space problem
2. State space problem
3. Conformant Problem
4. Contingency Problem

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Conformant Problem

**Explanation:**

* A **conformant problem** is one where the agent cannot observe the state of the environment directly.
* The agent must act based on incomplete or uncertain information.

</details>

#### 93. A \_\_\_\_\_\_ is non-deterministic and/or partially observable in nature.

1. Search space problem
2. State space problem
3. Conformant Problem
4. Contingency Problem

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Contingency Problem

**Explanation:**

* A **contingency problem** involves non-deterministic and/or partially observable environments.
* The agent must handle uncertainty and adapt to changing conditions.

</details>

#### 94. A \_\_\_\_\_\_ is unknown state space.

1. Exploration problem
2. State space problem
3. Conformant Problem
4. Contingency Problem

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Exploration problem

**Explanation:**

* An **exploration problem** involves an unknown state space, where the agent must explore and learn about the environment as it acts.
* This is common in reinforcement learning and robotics.

</details>

#### 95. \_\_\_\_\_\_ are the components of well-defined problems.

1. Initial state and available actions given by the successor functions.
2. Goal test
3. Path cost
4. All of above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of above

**Explanation:**

* A **well-defined problem** includes the **initial state**, **available actions**, **goal test**, and **path cost**.
* These components are necessary for defining and solving the problem.

</details>

#### 96. Search algorithm are commonly evaluated in terms of:

1. Completeness, Time Complexity, Space Complexity, Optimality
2. Preparedness, Time Complexity, Space Complexity, Admissibility
3. Completeness, Constant Complexity, Logarithmic Complexity, Optimality
4. Preparedness, Time Complexity, Quadratic Complexity, Admissibility

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Completeness, Time Complexity, Space Complexity, Optimality

**Explanation:**

* Search algorithms are evaluated based on **completeness** (whether they find a solution if one exists), **time complexity** (how long it takes to find a solution), **space complexity** (how much memory is required), and **optimality** (whether the solution is the best possible).
* These criteria help determine the efficiency and effectiveness of the algorithm.

</details>

#### 97. \_\_\_\_\_\_ and \_\_\_\_\_\_ complexity is measured in terms of:

b- max branching factor of the search tree\
d- depth of the least-cost solution\
m- maximum depth of the search tree

1. Time, Space Complexity
2. Constant, Logarithmic Complexity
3. Time, Quadratic Complexity
4. Space, Logarithmic Complexity

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Time, Space Complexity

**Explanation:**

* **Time complexity** and **space complexity** are measured in terms of the **branching factor (b)**, **depth of the least-cost solution (d)**, and **maximum depth of the search tree (m)**.
* These parameters help analyze the efficiency of search algorithms.

</details>

#### 98. A \_\_\_\_\_\_ is a searching technique that has no additional information about the distance from the current state to the goal.

1. Informed Search
2. Uninformed Search
3. Random Search
4. Binary Search

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Uninformed Search

**Explanation:**

* **Uninformed search** techniques, such as breadth-first search and depth-first search, do not use additional information about the distance to the goal.
* They explore the state space blindly.

</details>

#### 99. A \_\_\_\_\_\_ is a searching technique that has additional information about the estimate distance from the current state to the goal.

1. Informed Search
2. Uninformed Search
3. Random Search
4. Binary Search

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Informed Search

**Explanation:**

* **Informed search** techniques, such as A\* search, use additional information (heuristics) to estimate the distance to the goal.
* This helps guide the search more efficiently.

</details>

#### 100. \_\_\_\_\_\_ search uses knowledge to find out the steps to the solutions

1. Informed Search
2. Uninformed Search
3. Random Search
4. Binary Search

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Informed Search

**Explanation:**

* **Informed search** uses knowledge, such as heuristics, to find the steps to the solution.
* This makes the search process more efficient compared to uninformed search.

</details>

1. 10 expanded nodes are: S, A, D, E, G, C, E, B, C, G
2. 10 expanded nodes are: S, S, B, E, D, C, A, B, C, G
3. 10 expanded nodes are: S, S, D, G, A, S, B, C, E, G
4. 10 expanded nodes are: S, S, A, B, C, S, A, D, E, G

<details>

<summary>Show me the answer</summary>

**Answer:** 4. 10 expanded nodes are: S, S, A, B, C, S, A, D, E, G

**Explanation:**

* **Iterative Deepening Search** combines DFS and BFS by iteratively increasing the depth limit.
* The order of expansion would be: S → S → A → B → C → S → A → D → E → G.

</details>
