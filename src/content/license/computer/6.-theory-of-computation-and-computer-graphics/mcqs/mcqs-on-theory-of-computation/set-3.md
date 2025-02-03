# set-3

#### 101. The set $$A = \{a^n b^n c^n / n = 1, 2, 3, \ldots\}$$ is an example of

1. Regular language
2. Non context free language
3. Context free language
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Non context free language

**Explanation:**

* The language $$A = \{a^n b^n c^n / n = 1, 2, 3, \ldots\}$$ is not context-free as it requires matching counts of $$a$$'s, $$b$$'s, and $$c$$'s.

</details>

#### 102. The intersection of CFL and a regular language

1. Need not be regular
2. Is always regular
3. Need not be context free
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Is always regular

**Explanation:**

* The intersection of a context-free language (CFL) and a regular language is always context-free.

</details>

#### 103. Choose the correct statements:

1. The power of DFSM and NDFSM are same.
2. The power of DFSM and NDFSM are different.
3. The power of DPDM and NDPDM are different.
4. Both (A) and (C) above.

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both (A) and (C) above.

**Explanation:**

* Deterministic and non-deterministic finite state machines (DFSM and NDFSM) are equivalent in power, while deterministic and non-deterministic pushdown automata (DPDM and NDPDM) are not.

</details>

#### 104. Which of the following is accepted by an NDPDM but not by a DPDM?

1. All strings in which a given symbol is present at least twice
2. Even palindromes.
3. Strings ending with a particular alphabet.
4. None of these.

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Even palindromes.

**Explanation:**

* Even palindromes are accepted by non-deterministic pushdown automata (NDPDM) but not by deterministic pushdown automata (DPDM).

</details>

#### 105. Bounded minimization is a technique for

1. Proving whether a promotive recursive function is Turing computable or not.
2. Providing whether a primitive recursive function is a total function or not.
3. Generating primitive recursive functions.
4. Generating partial recursive functions.

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Generating primitive recursive functions.

**Explanation:**

* Bounded minimization is used to generate primitive recursive functions.

</details>

#### 106. Universal Turing machine influenced the concept of

1. Stored program computers
2. Interpretive implementation of programming language
3. Computability
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* The Universal Turing Machine influenced the concepts of stored program computers, interpretive implementation of programming languages, and computability.

</details>

#### 107. The statement "A Turing machine can't solve halting problem" is

1. True
2. Still at open question
3. False
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. True

**Explanation:**

* The halting problem is undecidable, meaning no Turing machine can solve it.

</details>

#### 108. If there exists a TM which when applied to any problem in the class, terminates, if the correct answer is yes and may or may not terminate otherwise is said to be

1. Stable
2. Partially solvable
3. Unstable
4. Unstable

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Partially solvable

**Explanation:**

* A problem is partially solvable if a Turing machine terminates for "yes" instances but may not terminate for "no" instances.

</details>

#### 109. The vernacular language English, if considered a formal language is a

1. Regular language
2. Context sensitive language
3. Context free language
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Context free language

**Explanation:**

* English, as a formal language, is context-free.

</details>

#### 110. P, Q, R are three languages, if P and R are regular and if PQ = R then

1. Q = R
2. Both A and B
3. Q = P
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. None of these

**Explanation:**

* The relationship between P, Q, and R cannot be determined from the given information.

</details>

#### 111. Consider the grammar

$$S \rightarrow PQ/SQ/PS$$\
$$P \rightarrow X,$$\
$$Q \rightarrow Y$$\
To get string of n terminals, the number of productions to be used is

1. N
2. n + 1
3. 2^n
4. 2^{n-1}

<details>

<summary>Show me the answer</summary>

**Answer:** 4. 2^{n-1}

**Explanation:**

* The number of productions required to generate a string of $$n$$ terminals is $$2^{n-1}$$.

</details>

#### 112. The following grammar

$$S \rightarrow aab/bac/ab$$\
$$S \rightarrow abb/ab$$\
$$S \rightarrow aS/b$$\
$$B \rightarrow bab/b$$

1. CFG
2. Context sensitive
3. Regular
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Context sensitive

**Explanation:**

* The grammar is context-sensitive as it allows for context-dependent productions.

</details>

#### 113. Let $$A = \{0,1\}$$ and $$L = A^*$$. Let $$R = \{0^n, n > 0\}$$ then the language $$L \cup R$$ and $$R$$ are respectively.

1. Regular, regular
2. Regular, not regular
3. Not regular, regular
4. Not regular, not regular

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Regular, not regular

**Explanation:**

* $$L \cup R$$ is regular, while $$R$$ is not regular.

</details>

#### 114. Which of the following is not possible algorithmically?

1. Regular grammar to context free grammar
2. Non-deterministic finite state Automata to deterministic FSA
3. Non-deterministic PDA to deterministic PDA
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Non-deterministic PDA to deterministic PDA

**Explanation:**

* Converting a non-deterministic PDA to a deterministic PDA is not always possible algorithmically.

</details>

#### 115. As FSM can be used to add two given integers. That is

1. True
2. False
3. May be true
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. False

**Explanation:**

* Finite state machines (FSMs) cannot perform arithmetic operations like addition.

</details>

#### 116. A grammar is said to be in CNF, if all the productions are of the form $$A \rightarrow BC$$ or $$A \rightarrow a$$. Let $$G$$ be a CFG in CNF. To derive a string of terminals of length $$x$$, the number of production to be used is

1. $$2x - 1$$
2. $$2x$$
3. $$2x + 1$$
4. $$2^x$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$2x - 1$$

**Explanation:**

* In Chomsky Normal Form (CNF), deriving a string of length $$x$$ requires $$2x - 1$$ productions.

</details>

#### 117. In given fig

1. Both are equivalent
2. The first FSM accepts nothing
3. The second FSM accepts $$\epsilon$$-only
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. None of these

**Explanation:**

* The given FSMs are not equivalent, and neither accepts only $$\epsilon$$.

</details>

#### 118. The number of tokens in the Fortran statement DO 10 I = 1.25 is

1. 3
2. 4
3. 5
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. None of these

**Explanation:**

* The number of tokens in the statement is 6.

</details>

#### 119. The word 'formal' in formal languages means

1. The symbols used have well-defined language meaning
2. They are unnecessary in reality
3. Only the form of the string of symbols is significant
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Only the form of the string of symbols is significant

**Explanation:**

* In formal languages, the structure (form) of the string is significant, not the meaning.

</details>

#### 120. If $$A = \{0, 1\}$$, the number of possible strings of length 'n' is

1. $$n!$$
2. $$n \times n$$
3. $$n^n$$
4. $$2^n$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$2^n$$

**Explanation:**

* For alphabet $$A = \{0, 1\}$$, the number of possible strings of length $$n$$ is $$2^n$$.

</details>

#### 121. A mealy machine

1. May be machine
2. Has an equivalent more
3. Only context-free grammar
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Has an equivalent more

**Explanation:**

* A Mealy machine has an equivalent Moore machine.

</details>

#### 122. The recognizing capability of NDFSM and DFSM

1. May be different
2. Must be same
3. Must be different
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Must be same

**Explanation:**

* Non-deterministic finite state machines (NDFSM) and deterministic finite state machines (DFSM) have the same recognizing capability.

</details>

#### 123. Which of the following are not regular

1. String of 0's whose length is a perfect square
2. Set of all palindromes made up of 0's and 1's
3. Strings of 0's, whose length is a prime number
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* None of the given languages are regular.

</details>

#### 124. Which of the following pairs of regular expressions are equivalent?

1. $$1(01)^*$$ and $$(10)^*$$
2. $$y^+$$ and $$y^*y^+$$
3. $$Y(yy)^*$$ and $$(yy)^*y$$
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* All the given pairs of regular expressions are equivalent.

</details>

#### 125. The logic of pumping Lemma is a good example of

1. The pigeon-hole principle
2. The divide and conquer technique
3. Recursion
4. Iteration

<details>

<summary>Show me the answer</summary>

**Answer:** 1. The pigeon-hole principle

**Explanation:**

* The Pumping Lemma is based on the pigeon-hole principle.

</details>

#### 126. The FSM pictured shown in the figure

1. Mealy machine
2. Kleene machine
3. Moore machine
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Mealy machine

**Explanation:**

* The FSM represents a Mealy machine as its output depends on both the current state and input.

</details>

#### 127. The above machine

1. Complements a given bit pattern
2. Generates all strings of 0's and 1's
3. Adds 1 to a given bit pattern
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Complements a given bit pattern

**Explanation:**

* The machine complements a given bit pattern.

</details>

#### 128. The language of all words with at least 2a's can be described by the regular expression

1. $$(a + b)^*a(a + b)^*a(a + b)^*$$
2. $$b^*a^*b^*a(a + b)^*$$
3. $$(a + b)^*ab^*a(a + b)^*$$
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* All the given regular expressions describe the language of words with at least 2a's.

</details>

#### 129. For the following figure

1. Complements a given bit pattern
2. Finds 2's complement of a given bit pattern
3. Increment a given bit pattern by 1
4. Change the sign bit

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Increment a given bit pattern by 1

**Explanation:**

* The machine increments a given bit pattern by 1.

</details>

#### 130. For which of the following applications regular expression can't be used?

1. Designing compilers
2. Simulating sequential circuits
3. Developing text editors
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Simulating sequential circuits

**Explanation:**

* Regular expressions are not suitable for simulating sequential circuits.

</details>

#### 131. The following CFG

$$S \rightarrow xS/yS/x/y$$\
Is equivalent to the regular expression

1. $$(x + y)^*$$
2. $$(x + y)^*(x + y)$$
3. $$(x + y)(x + y)^*$$
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* The CFG is equivalent to all the given regular expressions.

</details>

#### 132. Any string of terminals that can be generated by the following CFG

$$S \rightarrow AB$$\
$$A \rightarrow aA/bB/a$$\
$$B \rightarrow Ba/Bb/a$$

1. Has at least one b
2. Has no consecutive a's or b's
3. Should end in an 'a'
4. Has at least two a's

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Has at least two a's

**Explanation:**

* The CFG generates strings with at least two a's.

</details>

#### 133. The following CFG

$$S \rightarrow aB/bA$$\
$$A \rightarrow b/aS/bAA$$\
$$B \rightarrow b/bs/aBB$$\
Generates strings of terminals that have

1. Equal number of a's and b's
2. Odd number of a's and odd number of b's
3. Even number of a's and number of b's
4. Odd number a's and een number of a's

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Equal number of a's and b's

**Explanation:**

* The CFG generates strings with an equal number of a's and b's.

</details>

#### 134. The set $$\{a^n b^n / n = 1, 2, \ldots\}$$ can be generated by a CFG

1. $$S \rightarrow ab/aSb$$
2. $$S \rightarrow ab/aSb/\epsilon$$
3. $$S \rightarrow aSbb/ab$$
4. $$S \rightarrow aSbb/ab/aabb$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$S \rightarrow ab/aSb$$

**Explanation:**

* The CFG $$S \rightarrow ab/aSb$$ generates the set $$\{a^n b^n / n = 1, 2, \ldots\}$$.

</details>

#### 135. Which of the following CFG's can't be simulated by an FSM?

1. $$S \rightarrow Sa/a$$
2. $$S \rightarrow a/X, X \rightarrow cY, Y \rightarrow -d/aX$$
3. $$S \rightarrow aSb/ab$$
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$S \rightarrow aSb/ab$$

**Explanation:**

* The CFG $$S \rightarrow aSb/ab$$ generates a non-regular language and cannot be simulated by an FSM.

</details>

#### 136. CFG is not closed under

1. Union
2. Complementation's
3. Kleene star
4. Product

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Complementation's

**Explanation:**

* Context-free grammars (CFGs) are not closed under complementation.

</details>

#### 137. The set $$A = \{a^n b^n c^n / n = 1, 2, 3, \ldots\}$$ is an example of a grammar that is

1. Regular
2. Not context free
3. Context-free
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Not context free

**Explanation:**

* The language $$A = \{a^n b^n c^n / n = 1, 2, 3, \ldots\}$$ is not context-free.

</details>

#### 138. Let

$$L_1 = \{a^n b^n a^m / n, m = 1, 2, 3, \ldots\}$$\
$$L_2 = \{a^n b^m a^m / n, m = 1, 2, 3, \ldots\}$$\
$$L_3 = \{a^n b^n c^n / n = 1, 2, 3, \ldots\}$$\
Of the following the correct answer is

1. $$L_3 = L_1 \cap L_2$$
2. $$L_1$$ and $$L_2$$ are not CFL, but $$L_3$$ is CFL
3. $$L_1$$ is a subset of $$L_3$$
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$L_3 = L_1 \cap L_2$$

**Explanation:**

* The language $$L_3$$ is the intersection of $$L_1$$ and $$L_2$$.

</details>

#### 139. The intersection of a CFL, and a regular language

1. Need not be regular
2. Is always regular
3. Need not be context free
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Need not be context free

**Explanation:**

* The intersection of a context-free language (CFL) and a regular language is always context-free.

</details>

#### 140. A PDM behave lie an FSM when the number of auxiliary memory it has is

1. 0
2. 1
3. 2
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 0

**Explanation:**

* A pushdown automaton (PDM) behaves like a finite state machine (FSM) when it has no auxiliary memory (stack).

</details>

#### 141. CSG can be recognized by a

1. FSM
2. NDPDM
3. DPDM
4. Linearly bounded memory machine

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Linearly bounded memory machine

**Explanation:**

* Context-sensitive grammars (CSG) are recognized by linearly bounded memory machines.

</details>

#### 142. An FSM with

1. A stack is more powerful than a FSM with no stack.
2. 2 stacks is more powerful than a FSM 1 stack
3. Both (A) and (B) above
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Both (A) and (B) above

**Explanation:**

* Adding stacks to an FSM increases its computational power.

</details>

#### 143. Recursive languages are

1. Closed under intersection
2. Closed under complementation
3. Recursively enumerable
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* Recursive languages are closed under intersection, complementation, and are recursively enumerable.

</details>

#### 144. If $$\omega \in (a, b)^*$$ satisfy $$ab\omega = \omega ab$$ then $$'\omega'$$ is

1. Even
2. Odd
3. Null
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Even

**Explanation:**

* The string $$\omega$$ must be even in length to satisfy the equation $$ab\omega = \omega ab$$.

</details>

#### 145. Let $$f : (a, b)^* \rightarrow (a, b)^*$$ be given by $$f(n) = ax$$ for every value of $$n \in \{a, b\}$$ then $$f$$ is

1. One to one not onto
2. Not one to one and not onto
3. One to one and onto
4. Not one to one and onto

<details>

<summary>Show me the answer</summary>

**Answer:** 1. One to one not onto

**Explanation:**

* The function $$f$$ is one-to-one but not onto.

</details>

#### 146. Let if $$G = (\{S\}, \{a\}, \{S \rightarrow SS\}, S)$$, find language generated by $$G$$

1. $$L(G) = \phi$$
2. $$L(G) = a^*$$
3. $$L(G) = a^n$$
4. $$L(G) = a^n ba^n$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$L(G) = a^*$$

**Explanation:**

* The grammar generates the language $$a^*$$.

</details>

#### 147. What is the highest type number which can be applied to the following grammar

$$S \varphi \rightarrow Aa; A \rightarrow Ba, B \rightarrow abc$$

1. Type0
2. Type1
3. Type2
4. Type3

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Type3

**Explanation:**

* The grammar is of Type 3 (regular grammar).

</details>

#### 148. Construct a grammar to generate $$\{(ab)^n / n \geq 1\} \cup \{(\text{ba})^n / n \geq 1\}$$

1. $$S \rightarrow S_1, S_1 \rightarrow abS_1, S_1 \rightarrow ab, S \rightarrow S_2, S_2 \rightarrow baS_2, S_2 \rightarrow ba$$
2. $$S \rightarrow S_1, S_1 \rightarrow aS_1, S_1 \rightarrow ab, S \rightarrow S_2, S_2 \rightarrow bS_2, S_2 \rightarrow bc$$
3. $$S \rightarrow S_1, S_1 \rightarrow S_2, S_2 \rightarrow S_1a, S_1 \rightarrow ab, S_2 \rightarrow ba$$
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$S \rightarrow S_1, S_1 \rightarrow abS_1, S_1 \rightarrow ab, S \rightarrow S_2, S_2 \rightarrow baS_2, S_2 \rightarrow ba$$

**Explanation:**

* The grammar generates the language $$\{(ab)^n / n \geq 1\} \cup \{(\text{ba})^n / n \geq 1\}$$.

</details>

#### 149. Which string recognize it?

1. $$(a + b)^*$$
2. $$a + b (a + bb)^* (a + (b + aa)^*)^*$$
3. $$a^*b (b + aa)^*ba(b + aa)^*a$$
4. Information is not complete

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Information is not complete

**Explanation:**

* The question lacks sufficient information to determine the correct answer.

</details>

#### 150. Regular expression corresponding to the state diagram given in below figure

1. $$(0 + 1 (1 + 01) '00)'$$
2. $$(0 + 1 (1 + 10) 00)'$$
3. $$(1 + 0)(0 + 10) '00)'$$
4. $$(1 + 0 (1 + 00) 11)'$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$(0 + 1 (1 + 01) '00)'$$

**Explanation:**

* The regular expression $$(0 + 1 (1 + 01) '00)'$$ corresponds to the given state diagram.

</details>

#### 151. $$L = \{a^p / p \text{ is a prime}\}$$ is a

1. Regular
2. Accepted by DFA
3. Not regular
4. Accepted by PDA

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Not regular

**Explanation:**

* The language $$L = \{a^p / p \text{ is a prime}\}$$ is not regular as it requires checking for primality, which cannot be done by a finite automaton.

</details>

#### 152. Regular expression corresponding to the automata given in figure below are:

1. $$1 (1 + 0 (0 + 10) '11)' 0 (0 + 10) '1$$
2. $$0 (1 + 0 (1 + 01) '11)' 1 (1 + 10) '1$$
3. $$1 (1 + 0 (1 + 01) '00)' 1 (1 + 01)'$$
4. $$0 (1 + 0 (1 + 01) '00)' 1 (1 + 01)' 1$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$1 (1 + 0 (0 + 10) '11)' 0 (0 + 10) '1$$

**Explanation:**

* The regular expression $$1 (1 + 0 (0 + 10) '11)' 0 (0 + 10) '1$$ corresponds to the given automaton.

</details>

#### 153. Grammar $$S \rightarrow aAb, A \rightarrow aAb/a$$ is in

1. LR(1) not in LR(0)
2. LR(0) but not in LR(1)
3. Both LR(0) and LR(1)
4. Neither LR(0) nor in LR(1)

<details>

<summary>Show me the answer</summary>

**Answer:** 1. LR(1) not in LR(0)

**Explanation:**

* The grammar is LR(1) but not LR(0).

</details>

#### 154. The language $$L = \{a^n b^n c^n / n \geq 1\}$$ is a

1. Regular language
2. Context-free language
3. Context-sensitive language
4. Recursively enumerable language

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Context-sensitive language

**Explanation:**

* The language $$L = \{a^n b^n c^n / n \geq 1\}$$ is context-sensitive as it requires matching counts of $$a$$'s, $$b$$'s, and $$c$$'s.

</details>

#### 155. The set $$\{a^n b^n / n = 1, 2, 3, \ldots\}$$ can be generated by the CFG

1. $$S \rightarrow ab/aSb$$
2. $$S \rightarrow ab/aSb/\epsilon$$
3. $$S \rightarrow aaSbb/ab$$
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$S \rightarrow ab/aSb$$

**Explanation:**

* The CFG $$S \rightarrow ab/aSb$$ generates the set $$\{a^n b^n / n = 1, 2, 3, \ldots\}$$.

</details>

#### 156. Which of the following CFG's can't be simulated by an FSM?

1. $$S \rightarrow Sa/a$$
2. $$S \rightarrow abX, X \rightarrow cY, Y \rightarrow a/aX$$
3. $$S \rightarrow aSb/ab$$
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$S \rightarrow aSb/ab$$

**Explanation:**

* The CFG $$S \rightarrow aSb/ab$$ generates a non-regular language and cannot be simulated by an FSM.

</details>

#### 157. The set $$A = \{a^n b^n c^n / n = 1, 2, 3, \ldots\}$$ is an example of

1. Regular language
2. Non context free language
3. Context free language
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Non context free language

**Explanation:**

* The language $$A = \{a^n b^n c^n / n = 1, 2, 3, \ldots\}$$ is not context-free.

</details>

#### 158. The intersection of CFL and a regular language

1. Need not be regular
2. Is always regular
3. Need not be context free
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Is always regular

**Explanation:**

* The intersection of a context-free language (CFL) and a regular language is always context-free.

</details>

#### 159. Choose the correct statements:

1. The power of DFSM and NDFSM are same.
2. The power of DFSM and NDFSM are different.
3. The power of DPDM and NDPDM are different.
4. Both (A) and (C) above.

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both (A) and (C) above.

**Explanation:**

* Deterministic and non-deterministic finite state machines (DFSM and NDFSM) are equivalent in power, while deterministic and non-deterministic pushdown automata (DPDM and NDPDM) are not.

</details>

#### 160. Which of the following is accepted by an NDPDM but not by a DPDM?

1. All strings in which a given symbol is present at least twice
2. Even palindromes.
3. Strings ending with a particular alphabet.
4. None of these.

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Even palindromes.

**Explanation:**

* Even palindromes are accepted by non-deterministic pushdown automata (NDPDM) but not by deterministic pushdown automata (DPDM).

</details>
