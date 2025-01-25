# set-6

#### 251. Translate English to FOPL: All kings are person.

1. "x: Kings(x) → Person(x).
2. "x: Kings(x) V Person(x).
3. "x: Kings(x) ←→ Person(x).
4. "x: Kings(x) ^Person(x).

<details>

<summary>Show me the answer</summary>

**Answer:** 1. "x: Kings(x) → Person(x).

**Explanation:**

* The correct translation of "All kings are person" into FOPL is **∀x: Kings(x) → Person(x)**.
* This means "for all x, if x is a king, then x is a person."

</details>

#### 252. Translate English to FOPL: Nobody loves Harry\_Maguire

1. -Loves (x, Harry\_Maguire).
2. ILoves (x, Harry\_Maguire).
3. Loves (nobody, Harry\_Maguire).
4. -Loves (Harry\_Maguire).

<details>

<summary>Show me the answer</summary>

**Answer:** 1. -Loves (x, Harry\_Maguire).

**Explanation:**

* The correct translation of "Nobody loves Harry\_Maguire" into FOPL is **¬∃x: Loves(x, Harry\_Maguire)**.
* This means "there does not exist an x such that x loves Harry\_Maguire."

</details>

#### 253. The primary difference between PL and FOPL is their ontological commitment (What exists in the world — TRUTH). Do you satisfy with the statement?

1. Do not Satisfy
2. Satisfy
3. Partially Satisfy
4. Rather not say

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Satisfy

**Explanation:**

* The primary difference between **Propositional Logic (PL)** and **First-Order Predicate Logic (FOPL)** is their ontological commitment.
* FOPL allows for more expressive statements about the existence of objects and their properties, while PL is limited to simple propositions.

</details>

#### 254. Propositional logic is declarative. i.e., the pieces of syntax correspond to facts so FOPL was introduced.

1. Strongly True
2. Strongly False
3. May be True
4. May be False

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Strongly True

**Explanation:**

* **Propositional Logic (PL)** is declarative, meaning its syntax corresponds to facts.
* **First-Order Predicate Logic (FOPL)** was introduced to extend this expressiveness by allowing quantification and predicates.

</details>

#### 255. \_\_\_\_\_\_ is the major families of first-order inference algorithms.

1. Forward chaining
2. Backward chaining
3. Resolution
4. All of above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of above

**Explanation:**

* The major families of first-order inference algorithms include **forward chaining**, **backward chaining**, and **resolution**.
* These algorithms are used to derive conclusions from logical statements in FOPL.

</details>

#### 256. Bayes' theorem is also known as Bayes' rule, Bayes' law, or Bayesian reasoning, which determines the probability of an event with \_\_\_\_\_\_.

1. Unwanted knowledge
2. Uncertain knowledge

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Uncertain knowledge

**Explanation:**

* **Bayes' theorem** is used to update the probability of an event based on new information, even when the knowledge is uncertain.
* It is a fundamental concept in probability theory and statistics.

</details>

#### 257. \_\_\_\_\_\_ is unavoidable in everyday reasoning and in many real-world domains.

1. Certainty in reasoning
2. Uncertainty in reasoning
3. Probability
4. Logic

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Uncertainty in reasoning

**Explanation:**

* **Uncertainty** is a common aspect of everyday reasoning and real-world domains.
* It arises due to incomplete or ambiguous information, making it a key challenge in AI and decision-making.

</details>

#### 258. \_\_\_\_\_\_ is the main sources on uncertainty in reasoning.

1. Imprecise knowledge
2. Incomplete knowledge
3. Unreliable knowledge
4. All of above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of above

**Explanation:**

* The main sources of uncertainty in reasoning include **imprecise knowledge**, **incomplete knowledge**, and **unreliable knowledge**.
* These factors contribute to the complexity of decision-making in uncertain environments.

</details>

#### 259. Representing a certain knowledge using Predicate logic (PL) and First order logic (FOL): Eg; "Patient Akshay has a cavity". Represent this English sentence in logic.

1. PL: Cavity FOL: Dental Disease (Akshay, Cavity)
2. PL: Akshay FOL: Dental Disease (Akshay, Cavity)
3. PL: Akshay ⇔ Cavity FOL: Dental Disease (Cavity, Akshay)
4. PL: Cavity,Akshay FOL: Dental Disease (Akshay, Cavity)

<details>

<summary>Show me the answer</summary>

**Answer:** 1. PL: Cavity FOL: Dental Disease (Akshay, Cavity)

**Explanation:**

* In **Propositional Logic (PL)**, the statement can be represented as **Cavity**.
* In **First-Order Logic (FOL)**, it can be represented as **Dental\_Disease(Akshay, Cavity)**, where "Dental\_Disease" is the predicate, "Akshay" is the subject, and "Cavity" is the object.

</details>

#### 260. In \_\_\_\_\_\_ commitments: An agent believes a sentence to be true; false or has no opinion.

1. Ontological
2. Epistemological
3. Both A and B
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Epistemological

**Explanation:**

* **Epistemological commitments** refer to an agent's beliefs about the truth, falsity, or uncertainty of a sentence.
* This is related to the agent's knowledge and reasoning about the world.

</details>

#### 261. In \_\_\_\_\_\_ commitments: Facts hold or do not hold in the world.

1. Ontological
2. Epistemological
3. Both A and B
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Ontological

**Explanation:**

* **Ontological commitments** refer to the existence of facts in the world, regardless of an agent's beliefs.
* This is related to the nature of reality and what exists in the world.

</details>

#### 262. How many terms are required for building a bayes model?

1. 1 conditional probability and 2 unconditional probability
2. 2 conditional probability and 1 unconditional probability
3. 3 conditional probability and 0 unconditional probability
4. 0 conditional probability and 1 unconditional probability

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 1 conditional probability and 2 unconditional probability

**Explanation:**

* Building a **Bayesian model** typically requires **1 conditional probability** (e.g., P(A|B)) and **2 unconditional probabilities** (e.g., P(A) and P(B)).
* These probabilities are used to calculate the posterior probability using Bayes' theorem.

</details>

#### 263. During \_\_\_\_\_\_ the bayes rule can be implemented

1. Accessing queries
2. Increasing reliability
3. Decreasing reliability
4. Answering probabilistic query

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Answering probabilistic query

**Explanation:**

* **Bayes' rule** is implemented when answering **probabilistic queries**, such as calculating the probability of an event given new evidence.
* It is a key tool in probabilistic reasoning and decision-making.

</details>

#### 264. Bayesian network provides \_\_\_\_\_\_.

1. Complete description of the domain
2. Few descriptions of the domain
3. Complete description of the problem
4. Few descriptions of the problem

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Complete description of the domain

**Explanation:**

* A **Bayesian network** provides a **complete description of the domain** by modeling the probabilistic relationships between variables.
* It is a graphical representation of the joint probability distribution of a set of variables.

</details>

#### 265. By implementing \_\_\_\_\_\_ Bayesian network can be used to answer any user query.

1. Partial distribution
2. Joint distribution
3. Full distribution
4. Random Variable

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Joint distribution

**Explanation:**

* By implementing the **joint distribution**, a Bayesian network can be used to answer any user query about the probabilities of events.
* The joint distribution represents the probabilities of all possible combinations of variables in the network.

</details>

#### 266. Belief network, decision network, Bayesian model are all known as \_\_\_\_\_\_

1. Non-bayesian belief network
2. Bayesian belief network
3. Bayesian non-belief network
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Bayesian belief network

**Explanation:**

* **Belief network**, **decision network**, and **Bayesian model** are all terms used to describe **Bayesian belief networks**.
* These networks are used to model probabilistic relationships between variables.

</details>

#### 267. The Bayesian network graph does not contain any cyclic graph. So, it is known as a \_\_\_\_\_\_.

1. Direct Cyclic Graph
2. Direct Acyclic Graph
3. Cyclic Acyclic Graph
4. Significant Acyclic Graph

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Direct Acyclic Graph

**Explanation:**

* A **Bayesian network** is represented as a **Directed Acyclic Graph (DAG)**, meaning it has no cycles.
* This structure ensures that the network can be used for probabilistic inference without logical inconsistencies.

</details>

#### 268. Bayesian Network has \_\_\_\_\_\_ variables.

1. Discrete
2. Asynchronous
3. Continuous
4. Both A and D

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both A and D

**Explanation:**

* A **Bayesian network** can have both **discrete** and **continuous** variables.
* This flexibility allows it to model a wide range of real-world scenarios.

</details>

#### 269. A belief network is a graph in which the following holds \_\_\_\_\_\_.

1. A set of random variables
2. A set of directive links or arrows connects pairs of nodes.
3. The conditional probability table for each node
4. The graph has no directed cycles
5. All of above

<details>

<summary>Show me the answer</summary>

**Answer:** 5. All of above

**Explanation:**

* A **belief network** is a graph that includes a set of random variables, directed links between nodes, conditional probability tables, and no directed cycles.
* These properties define the structure and behavior of the network.

</details>

#### 270. A Belief network with one node for each state and sensor variable for each time step is called a \_\_\_\_\_\_

1. Dynamic belief network
2. Static belief network
3. Serial belief network
4. Probability belief network

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Dynamic belief network

**Explanation:**

* A **dynamic belief network** is a type of Bayesian network that models temporal processes by including nodes for each state and sensor variable at each time step.
* It is used to model systems that evolve over time.

</details>

#### 271. In \_\_\_\_\_\_ expertise is transferred from an expert to a computer and it is stored in computer.

1. User Interface
2. Expert System
3. Inference Engine
4. Natural Language Processing

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Expert System

**Explanation:**

* An **expert system** is a computer system that transfers expertise from a human expert to a computer, where it is stored and used to solve problems.
* It is a key application of AI in knowledge-based systems.

</details>

#### 272. In \_\_\_\_\_\_ users can call on the computer for specific advice as needed for the user.

1. User Interface
2. Expert System
3. Inference Engine
4. Natural Language Processing

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Expert System

**Explanation:**

* An **expert system** allows users to request specific advice or solutions to problems based on the knowledge stored in the system.
* It is designed to mimic the decision-making ability of a human expert.

</details>

#### 273. In \_\_\_\_\_\_ the computer can make inferences and arrive at the conclusion.

1. User Interface
2. Expert System
3. Inference Engine
4. Natural Language Processing

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Inference Engine

**Explanation:**

* The **inference engine** is the component of an expert system that performs logical reasoning and draws conclusions from the knowledge base.
* It is responsible for making inferences based on the rules and data provided.

</details>

#### 274. In \_\_\_\_\_\_ the computer system advices the non-experts and explains, if necessary, the actual logic behind the advice which it has provided.

1. User Interface
2. Expert System
3. Inference Engine
4. Natural Language Processing

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Expert System

**Explanation:**

* An **expert system** provides advice to non-experts and can explain the reasoning behind its recommendations.
* This feature makes it a valuable tool for decision support and problem-solving.

</details>

#### 275. Expert System can \_\_\_\_\_\_.

1. Display intelligent behavior
2. Draw conclusions from complex relationships
3. Provide portable knowledge
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* An **expert system** can display intelligent behavior, draw conclusions from complex relationships, and provide portable knowledge that can be used across different domains.
* These capabilities make it a powerful tool in AI.

</details>

#### 276. \_\_\_\_\_\_ is one of the components of expert system.

1. Knowledge base and Inference Engine
2. User Interface and Explanation subsystem (facility)
3. Working Area
4. All of above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of above

**Explanation:**

* The components of an **expert system** include the **knowledge base**, **inference engine**, **user interface**, **explanation subsystem**, and **working area**.
* These components work together to provide expert-level advice and solutions.

</details>

#### 277. The \_\_\_\_\_\_ is one of the components of an expert system which represents facts and rules.

1. Inference Engine
2. Knowledge Base
3. User Interface
4. Explanation Subsystem

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Knowledge Base

**Explanation:**

* The **knowledge base** is the component of an expert system that stores facts, rules, and other information used to solve problems.
* It is the repository of domain-specific knowledge.

</details>

#### 278. The most basic function of the \_\_\_\_\_\_ is to acquire relevant data from the knowledge base, interpret it, and find a solution to the user’s problem.

1. User interface
2. Inference engine
3. Explanation Subsystem / module
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Inference engine

**Explanation:**

* The **inference engine** is responsible for acquiring data from the knowledge base, interpreting it, and deriving solutions to user problems.
* It is the core reasoning component of an expert system.

</details>

#### 279. \_\_\_\_\_\_ is used to allow the expert systems to acquire more data from various sources and store it in the knowledge base.

1. User interface
2. Knowledge acquisition and learning module
3. Explanation Subsystem / module
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Knowledge acquisition and learning module

**Explanation:**

* The **knowledge acquisition and learning module** is responsible for acquiring new data and knowledge from various sources and updating the knowledge base.
* It ensures that the expert system remains up-to-date and accurate.

</details>

#### 280. \_\_\_\_\_\_ is essential for a non-expert user to interact with the expert system and find solutions.

1. User interface
2. Knowledge acquisition and learning module
3. Explanation Subsystem / module
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. User interface

**Explanation:**

* The **user interface** is essential for non-expert users to interact with the expert system, input queries, and receive solutions.
* It provides a user-friendly way to access the system's capabilities.

</details>

#### 281. \_\_\_\_\_\_ and \_\_\_\_\_\_ are 2 strategies used by inference engine in Expert system.

1. Forward gaining, backward gaining
2. Forward processing, backward processing
3. Forward chaining, backward chaining
4. Forward debugging, backward debugging

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Forward chaining, backward chaining

**Explanation:**

* The **inference engine** in an expert system uses **forward chaining** (data-driven reasoning) and **backward chaining** (goal-driven reasoning) to derive conclusions.
* These strategies are used to solve problems based on the available knowledge.

</details>

#### 282. With \_\_\_\_\_\_ strategy, an expert system is able to answer the question, “What can happen next?”

1. Backward chaining
2. Forward chaining
3. Forward debugging
4. Backward debugging

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Forward chaining

**Explanation:**

* **Forward chaining** is a strategy where the expert system starts with known facts and applies rules to derive new conclusions.
* It is used to answer questions like "What can happen next?" by predicting future outcomes based on current data.

</details>

#### 283. With \_\_\_\_\_\_ strategy, an expert system is able to answer the question, “Why did this happen?”

1. Backward chaining
2. Forward chaining
3. Forward debugging
4. Backward debugging

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Backward chaining

**Explanation:**

* **Backward chaining** is a strategy where the expert system starts with a goal and works backward to determine the conditions that led to it.
* It is used to answer questions like "Why did this happen?" by identifying the causes of observed outcomes.

</details>

#### 284. Rule-based is the type of \_\_\_\_\_\_.

1. Computer System
2. Knowledge Base
3. Expert System
4. Inference Engine

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Expert System

**Explanation:**

* A **rule-based system** is a type of **expert system** that uses a set of rules to derive conclusions from known facts.
* It is a common approach in AI for implementing expert systems.

</details>

#### 285. A \_\_\_\_\_\_ is nothing but expert system without knowledge base.

1. Tools
2. User Interface
3. Shell
4. Inference Engine

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Shell

**Explanation:**

* A **shell** is an expert system framework without a specific knowledge base.
* It provides the structure and tools for building expert systems but requires the addition of domain-specific knowledge.

</details>

#### 286. What is the full form of JESS Expert System Technology?

1. Javascript Expert Sub System
2. Javascript Expert System Shell
3. Java Expert Sub System
4. Java Expert System Shell

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Java Expert System Shell

**Explanation:**

* **JESS** stands for **Java Expert System Shell**.
* It is a rule-based expert system shell written in Java, used for developing expert systems.

</details>

#### 287. \_\_\_\_\_\_ means how a particular thing can be accomplished in AI.

1. Procedural knowledge
2. Declarative knowledge
3. Tacit Knowledge
4. Explicit Knowledge

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Procedural knowledge

**Explanation:**

* **Procedural knowledge** refers to the knowledge of how to perform specific tasks or procedures.
* It is about knowing the steps or methods to achieve a particular goal.

</details>

#### 288. \_\_\_\_\_\_ means basic knowledge about something in AI.

1. Procedural knowledge
2. Declarative knowledge
3. Tacit Knowledge
4. Explicit Knowledge

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Declarative knowledge

**Explanation:**

* **Declarative knowledge** refers to the basic knowledge about facts, concepts, and relationships.
* It is about knowing "what" rather than "how."

</details>

#### 289. \_\_\_\_\_\_ emphasize how to do something to solve a given problem.

1. Procedural knowledge
2. Declarative knowledge
3. Tacit Knowledge
4. Explicit Knowledge

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Procedural knowledge

**Explanation:**

* **Procedural knowledge** emphasizes the methods or steps required to solve a problem.
* It is focused on the "how" of problem-solving.

</details>

#### 290. \_\_\_\_\_\_ emphasize what to do something to solve a given problem.

1. Procedural knowledge
2. Declarative knowledge
3. Tacit Knowledge
4. Explicit Knowledge

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Declarative knowledge

**Explanation:**

* **Declarative knowledge** emphasizes the facts and information needed to solve a problem.
* It is focused on the "what" of problem-solving.

</details>

#### 291. \_\_\_\_\_\_ is the extraction of knowledge from sources of expertise, and transfer to the knowledge base.

1. Knowledge requisition
2. Knowledge acquisition
3. Knowledge processing
4. Knowledge debugging

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Knowledge acquisition

**Explanation:**

* **Knowledge acquisition** is the process of extracting knowledge from experts and transferring it to the knowledge base of an expert system.
* It is a critical step in building expert systems.

</details>

#### 292. \_\_\_\_\_\_ may also include acquiring knowledge from other sources such as books, technical manuscript and drawings.

1. Knowledge requisition
2. Knowledge elicitation
3. Knowledge processing
4. Knowledge debugging

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Knowledge elicitation

**Explanation:**

* **Knowledge elicitation** involves acquiring knowledge from various sources, including books, technical manuscripts, and drawings.
* It is a broader process that complements knowledge acquisition.

</details>

#### 293. Knowledge engineer performs important tasks

1. Identifying the problem domain.
2. Choosing the right expert.
3. Preparing for knowledge acquisition.
4. All of above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of above

**Explanation:**

* A **knowledge engineer** performs tasks such as identifying the problem domain, choosing the right expert, and preparing for knowledge acquisition.
* These tasks are essential for building effective expert systems.

</details>

#### 294. During choosing the right expert for implementing on Expert System \_\_\_\_\_\_ should be one of the desirable characteristics of expert.

1. Knows when to follow heuristics and when to make exceptions.
2. Sees the big picture.
3. Possesses good communication skills.
4. All of above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of above

**Explanation:**

* The right expert for an expert system should possess characteristics such as knowing when to follow heuristics, seeing the big picture, and having good communication skills.
* These traits ensure that the expert can effectively contribute to the system's knowledge base.

</details>

#### 295. \_\_\_\_\_\_ are the tasks performed in knowledge acquisition.

1. Collect and interpret
2. Analyze
3. Design
4. All of above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of above

**Explanation:**

* The tasks performed in **knowledge acquisition** include collecting and interpreting data, analyzing the information, and designing the knowledge base.
* These steps are crucial for building a robust expert system.

</details>

#### 296. Introspection, Observation, Induction, Protocol Analysis, Prototyping and Interviewing are the techniques of \_\_\_\_\_\_.

1. Knowledge Processing
2. Knowledge elaboration
3. Knowledge acquisition
4. Knowledge debugging

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Knowledge acquisition

**Explanation:**

* Techniques such as **introspection**, **observation**, **induction**, **protocol analysis**, **prototyping**, and **interviewing** are used in **knowledge acquisition**.
* These methods help extract knowledge from experts and other sources.

</details>

#### 297. \_\_\_\_\_\_ is the process of communicating with a computer in natural language via keyboard or voice.

1. Natural Language Processing
2. Natural Sentence Processing
3. Machine Learning
4. Computer Visioning

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Natural Language Processing

**Explanation:**

* **Natural Language Processing (NLP)** is the process of enabling computers to understand and interact with human language, whether through text or speech.
* It is a key area of AI research and application.

</details>

#### 298. \_\_\_\_\_\_ refers to AI method of communicating with an intelligent system using a natural language such as English, Nepali, Hindi etc.

1. Natural Language Processing
2. Natural Sentence Processing
3. Machine Learning
4. Computer Visioning

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Natural Language Processing

**Explanation:**

* **Natural Language Processing (NLP)** refers to the AI methods used to enable communication between humans and intelligent systems using natural languages like English, Nepali, or Hindi.
* It is a critical component of human-computer interaction.

</details>

#### 299. \_\_\_\_\_\_ is the main challenges of NLP.

1. Handling Ambiguity of Sentences
2. Handling Tokenization
3. Handling POS-Tagging
4. All of the mentioned

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the mentioned

**Explanation:**

* The main challenges of **Natural Language Processing (NLP)** include handling ambiguity in sentences, tokenization, and POS-tagging.
* These challenges arise due to the complexity and variability of human language.

</details>

#### 300. These are the 2 components of natural language processing.

1. Natural language debugging and natural language compiling
2. Natural language publishing and natural language maintenance
3. Natural language organizing and natural language implementing
4. Natural language understanding and natural language generation

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Natural language understanding and natural language generation

**Explanation:**

* The two main components of **Natural Language Processing (NLP)** are **natural language understanding** (NLU) and **natural language generation** (NLG).
* NLU focuses on understanding human language, while NLG focuses on generating human-like language.

</details>
