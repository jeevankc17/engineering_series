# set-1

#### 1. Let $$R_1$$ and $$R_2$$ be regular sets defined over alphabet $$\sum$$ then

1. $$R_1 \cup R_2$$ is regular
2. $$\sum \cap R_2$$is not regular
3. $$R_1 \cap R_2$$ is not regular
4. $$R_2$$ is not regular

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$R_1 \cup R_2$$ is regular

**Explanation:**

* The union of two regular sets is also regular.

</details>

#### 2. Consider the production of the grammar

$$S \rightarrow AA$$\
$$A \rightarrow aa$$\
$$A \rightarrow bb$$

Describe the language specified by the production grammar

1. $$L = \{aaaa, aabb, bbaa, bbbb\}$$
2. $$L = \{abab, abaa, aaab, baaa\}$$
3. $$L = \{aaab, baba, bbaa, bbbb\}$$
4. $$L = \{aaaa, ababa, bbaa, aaab\}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$L = \{aaaa, aabb, bbaa, bbbb\}$$

**Explanation:**

* The grammar generates strings of even length with $$a$$ and $$b$$.

</details>

#### 3. Give a production grammar that specifies the language

$$L = \{a^i b^{2j} / i \geq 1\}$$

1. $$\{S \rightarrow aSbb, S \rightarrow abb\}$$
2. $$\{S \rightarrow aA, S \rightarrow b, A \rightarrow b\}$$
3. $$\{S \rightarrow aSb, S \rightarrow b\}$$
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\{S \rightarrow aSbb, S \rightarrow abb\}$$

**Explanation:**

* The grammar generates strings with $$a^i b^{2j}$$ where $$i \geq 1$$.

</details>

#### 4. Which of the following string can be obtained by the language

$$L = \{a^i b^{2j} / i \geq 1\}$$

1. Aaabbbbbb
2. Abbabbba
3. aabb
4. aaaabbbbbb

<details>

<summary>Show me the answer</summary>

**Answer:** 4. aaaabbbbbb

**Explanation:**

* The string $$aaaabbbbbb$$ fits the pattern $$a^i b^{2j}$$ with $$i = 4$$ and $$j = 3$$.

</details>

#### 5. Give a production grammar for the language $$L = \{x / x \in (a, b)^*$$, the number of $$a$$’s in $$x$$ is multiple of 3}

1. $$\{S \rightarrow bS, S \rightarrow b, S \rightarrow aA, S \rightarrow bA, A \rightarrow aB, B \rightarrow bB, B \rightarrow aS, S \rightarrow a\}$$
2. $$\{S \rightarrow aS, S \rightarrow bA, A \rightarrow bB, B \rightarrow bBa, B \rightarrow bB\}$$
3. $$\{S \rightarrow aaS, S \rightarrow bbA, A \rightarrow bB, B \rightarrow ba\}$$
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\{S \rightarrow bS, S \rightarrow b, S \rightarrow aA, S \rightarrow bA, A \rightarrow aB, B \rightarrow bB, B \rightarrow aS, S \rightarrow a\}$$

**Explanation:**

* The grammar ensures that the number of $$a$$’s in the string is a multiple of 3.

</details>

#### 6. Let $$L1 = \{a^b / i > j\}$$ and $$L2 = \{a^b / i < j\}$$: the union of $$L1$$ and $$L2$$ is given by

1. $$\{a^b / i, j \geq 1\}$$
2. $$a^b / i > j \geq 1\}$$
3. $$\{a^b / i, j \geq 1\}$$
4. $$\{a^b / i, j \geq 1, i \neq j\}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\{a^b / i, j \geq 1, i \neq j\}$$

**Explanation:**

* The union of $$L1$$ and $$L2$$ includes all strings where $$i \neq j$$.

</details>

#### 7. Give a production grammar for the language

$$L = \{a^b / I, j \geq 1, i \neq j\}$$

1. $$\{S \rightarrow aS, S \rightarrow aB, B \rightarrow ab, A \rightarrow aaB, B \rightarrow b\}$$
2. $$\{S \rightarrow A, S \rightarrow C, A \rightarrow aA, A \rightarrow aB, B \rightarrow aBb, B \rightarrow ab, C \rightarrow Cb, E \rightarrow Bb\}$$
3. $$\{S \rightarrow A, A \rightarrow aA, A \rightarrow aB, B \rightarrow ab\}$$
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$\{S \rightarrow A, S \rightarrow C, A \rightarrow aA, A \rightarrow aB, B \rightarrow aBb, B \rightarrow ab, C \rightarrow Cb, E \rightarrow Bb\}$$

**Explanation:**

* The grammar generates strings where the number of $$a$$’s and $$b$$’s are not equal.

</details>

#### 8. The production grammar is $$\{S \rightarrow aSbb, S \rightarrow abb\}$$ is

1. Type-3 grammar
2. Type-1 grammar
3. Type-3 grammar
4. Type-0 grammar

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Type-3 grammar

**Explanation:**

* The grammar is a regular (Type-3) grammar as it generates regular languages.

</details>

#### 9. Which of the following statement is wrong?

1. A Turing machine cannot solve halting problem
2. Set of recursively enumerable languages is closed under union
3. A finite State Machine with 2 stacks
4. Context sensitive grammar can be recognized by a linearly bounded memory machine

<details>

<summary>Show me the answer</summary>

**Answer:** 3. A finite State Machine with 2 stacks

**Explanation:**

* A finite state machine cannot have 2 stacks; it is a characteristic of a pushdown automaton.

</details>

#### 10. Which of the following statement is wrong?

1. Recursive language are closed under union
2. Recursive language are closed under union
3. If a language and its complement are both regular, then the language must be recursive
4. A language is accepted by FA if and only if it is recursive

<details>

<summary>Show me the answer</summary>

**Answer:** 4. A language is accepted by FA if and only if it is recursive

**Explanation:**

* A language accepted by a finite automaton (FA) is regular, not necessarily recursive.

</details>

#### 11. Which of the following statement is wrong?

1. Every recursive language is recursively enumerable
2. A language is accepted by FA if and only if it is context free
3. Recursive languages are closed under intersection
4. A language is accepted by a FA if and only if it is right linear

<details>

<summary>Show me the answer</summary>

**Answer:** 2. A language is accepted by FA if and only if it is context free

**Explanation:**

* A language accepted by a finite automaton (FA) is regular, not necessarily context-free.

</details>

#### 12. Which of the following statement is true?

1. All language can be generated by CFG
2. The number of symbols unnecessary to simulate a Turing Machine (TM) with $$m$$ symbols and $$n$$ states is $$mn$$
3. Any regular language has an equivalent CFG
4. The class of CFG is not closed under union

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Any regular language has an equivalent CFG

**Explanation:**

* Every regular language can be represented by a context-free grammar (CFG).

</details>

#### 13. Recursively enumerable languages are not closed under

1. Complementation
2. Intersection
3. Union
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Complementation

**Explanation:**

* Recursively enumerable languages are not closed under complementation.

</details>

#### 14. Regular expression $$(x/y)$$ denotes the set

1. $$\{xy, xy\}$$
2. $$\{x,y\}$$
3. $$\{xx,xy,yx,yy\}$$
4. $$\{x,y,xy\}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$\{x,y\}$$

**Explanation:**

* The regular expression $$(x/y)$$ represents the set $$\{x, y\}$$.

</details>

#### 15. Regular expression $$x/y$$ denotes the set

1. $$\{x,y\}$$
2. $$\{xy\}$$
3. $$\{x\}$$
4. $$\{y\}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\{x,y\}$$

**Explanation:**

* The regular expression $$x/y$$ represents the set $$\{x, y\}$$.

</details>

#### 16. The regular expressions denote a language comprising all possible strings of even length over the alphabet $$\{0,1\}$$

1. $$1 + 0 (1 + 0)^*$$
2. $$(1 + 0)$$
3. $$(0 + 1) (1 + 0)^*$$
4. $$(00 + 011 + 10)^*$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$(00 + 011 + 10)^*$$

**Explanation:**

* The regular expression $$(00 + 011 + 10)^*$$ generates all strings of even length over $$\{0,1\}$$.

</details>

#### 17. The regular expressions denote zero or more instances of an $$x$$ or $$y$$ is

1. $$(x + y)$$
2. $$(x^* + y)$$
3. $$(x + y)^*$$
4. $$(xy)^*$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$(x + y)^*$$

**Explanation:**

* The regular expression $$(x + y)^*$$ denotes zero or more instances of $$x$$ or $$y$$.

</details>

#### 18. The regular expression has all strings in which any number of 0's is followed by any number of 1's followed by any number of 2's is:

1. $$(0 + 1 + 2)^*$$
2. $$0^* + 1 + 2$$
3. $$0^* 1^* 2^*$$
4. $$(0 + 1)^* 2^*$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$0^* 1^* 2^*$$

**Explanation:**

* The regular expression $$0^* 1^* 2^*$$ generates strings with any number of 0's, followed by any number of 1's, followed by any number of 2's.

</details>

#### 19. The regular expression have all strings of 0's and 1's with no two consecutive 0's, is

1. $$(0 + 1)$$
2. $$(0 + \epsilon) (1 + 10)^*$$
3. $$(0 + 1)^*$$
4. $$(0 + 1)^* 011$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$(0 + \epsilon) (1 + 10)^*$$

**Explanation:**

* The regular expression $$(0 + \epsilon) (1 + 10)^*$$ ensures no two consecutive 0's.

</details>

#### 20. The regular expression with all strings of 0's and 1's with at least two consecutive 0's is:

1. $$1 + (10)^*$$
2. $$(0 + 1)^0$$
3. $$(0 + 1)^0(0 + 1)^*$$
4. $$0^1$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$(0 + 1)^0(0 + 1)^*$$

**Explanation:**

* The regular expression $$(0 + 1)^0(0 + 1)^*$$ generates strings with at least two consecutive 0's.

</details>

#### 21. Which of the following is NOT the set of regular expression $$R = (ab + abb)^*bbab$$

1. Ababbbbab
2. Ababbabbbbab
3. Abbbab
4. Abababab

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Abababab

**Explanation:**

* The string $$abababab$$ does not fit the pattern $$(ab + abb)^*bbab$$.

</details>

#### 22. Which string can be generated by

$$S \rightarrow aS/bA, A \rightarrow d/cA$$

1. Aabccd
2. Abcca
3. Adabcca
4. Abababd

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Aabccd

**Explanation:**

* The string $$aabccd$$ can be generated by the given grammar.

</details>

#### 23. The regular sets are closed under

1. Union
2. Kleene's closure
3. Concentration
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* Regular sets are closed under union, Kleene's closure, and concatenation.

</details>

#### 24. Which of the following statement(s) is (are) wrong?

1. The regular sets are closed under intersection
2. The class of regular sets is closed under substitution
3. The class of regular sets is closed under homomorphisms
4. Context sensitive Grammar (CGS) can be recognized by Finite State Machine

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Context sensitive Grammar (CGS) can be recognized by Finite State Machine

**Explanation:**

* Context-sensitive grammars cannot be recognized by finite state machines.

</details>

#### 25. A Finite State Machine can be considered, having finite tape length without rewinding capability and unidirectional tape movement

1. Turing machine
2. Context free languages
3. Pushdown automata
4. Regular language

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Turing machine

**Explanation:**

* A finite state machine with finite tape length and unidirectional tape movement behaves like a Turing machine.

</details>

#### 26. Which of the following statement is wrong?

1. A finite state machine can be considered to be a Turing Machine of finite tape length without rewinding capability and unidirectional tape movement
2. Turing machine is more powerful than finite state machine because it has the capability to remember arbitrary long sequences of input symbol
3. Palindromes can't be recognized by any Finite State Machine (FSM) because an FSM can't remember arbitrarily large amount of information
4. Turing machine is more powerful than FMS because it has no final state

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Turing machine is more powerful than FMS because it has no final state

**Explanation:**

* Turing machines are more powerful due to their ability to read/write and move in both directions, not because they lack a final state.

</details>

#### 27. Let $$L$$ be a Language recognizable by Finite automation. The Language REVERSE $$L' = \{ \omega / \omega$$ is the reverse of $$v$$ where $$v \in L\}$$ is

1. Regular language
2. Context-free language
3. Context-sensitive language
4. Recursively enumerable language

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Regular language

**Explanation:**

* The reverse of a regular language is also regular.

</details>

#### 28. The Grammar $$G = <\{S\}, \{0, 1\}, P, S>$$ Where $$p$$ is $$S \rightarrow 0SI, S \rightarrow 0S, S \rightarrow SI, S \rightarrow 0$$ is

1. Recursively enumerable language
2. Regular expression
3. Context-sensitive language
4. Context free language

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Context free language

**Explanation:**

* The grammar is context-free as it generates a context-free language.

</details>

#### 29. Any given transition graph has an equivalent

1. Regular expression
2. DFSM (Deterministic Finite State Machine)
3. NDFSM
4. All of them

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of them

**Explanation:**

* A transition graph can be converted into a regular expression, DFSM, or NDFSM.

</details>

#### 30. The intersection of CFL and regular language

1. Is always regular
2. Both (A) and (C) above
3. Is always context-free
4. Need not be regular

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Both (A) and (C) above

**Explanation:**

* The intersection of a context-free language (CFL) and a regular language is always context-free.

</details>

#### 31. Context-sensitive Grammar can be recognized by

1. Deterministic pushdown Automata
2. Non-deterministic pushdown automata
3. Finite State Machine (FSM)
4. Linearly Bounded Memory Machine

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Linearly Bounded Memory Machine

**Explanation:**

* Context-sensitive grammars are recognized by linearly bounded memory machines.

</details>

#### 32. Which of the following regular expression identity's are true?

1. $$r' = r$$
2. $$rS' = r + S$$
3. $$(r + S)' = r' + S'$$
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$r' = r$$

**Explanation:**

* The identity $$r' = r$$ is true for regular expressions.

</details>

#### 33. The Language $$L = \{0:1n2k3k \text{ where } n, k > 0\}$$

1. Context-sensitive language
2. Context-free language
3. Regular languages
4. Recursively enumerable language

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Context-free language

**Explanation:**

* The language $$L$$ is context-free as it can be generated by a context-free grammar.

</details>

#### 34. Consider the production grammar

$$S \rightarrow XY/XS$$\
$$X \rightarrow a/aX$$\
$$Y \rightarrow b$$\
Which of the following regular expressions corresponding to the production grammar?

1. $$(ab)$$
2. $$a(ab)^{b}$$
3. $$a^a b^b$$
4. $$a^a b$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$a^a b$$

**Explanation:**

* The grammar generates strings of the form $$a^a b$$.

</details>

#### 35. Which of the following sentences is generated by production grammar?

$$S \rightarrow aSbX$$\
$$X \rightarrow dccX$$

1. Abblod
2. aabccd
3. aabd
4. ababccd

<details>

<summary>Show me the answer</summary>

**Answer:** 2. aabccd

**Explanation:**

* The string $$aabccd$$ can be generated by the given grammar.

</details>

#### 36. Consider a NDFA shown in figure below. The Automation accepts

1. All words that contain the substring ab and end with a
2. All words that contain the substring ba and end with a
3. All words that end with a, but not the null string $$\epsilon$$
4. All words that end with a, and also the null string

<details>

<summary>Show me the answer</summary>

**Answer:** 3. All words that end with a, but not the null string $$\epsilon$$

**Explanation:**

* The NDFA accepts words ending with $$a$$ but not the null string.

</details>

#### 37. Which of the following is accepted by deterministic pushdown machine but not accepted by non-deterministic pushdown machine (NDPDM)?

1. Strings end with a particular alphabet
2. All strings in which a given symbol is present at least twice
3. Even palindrome
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Even palindrome

**Explanation:**

* Even palindromes are accepted by deterministic pushdown machines but not by non-deterministic ones.

</details>

#### 38. Consider the following grammar

$$X \rightarrow Xx/Yy$$\
$$X \rightarrow Yy/Z\omega$$\
$$Y \rightarrow y/Yw$$\
$$Z \rightarrow y$$\
Which of the regular expressions describe the same set of strings as the grammar?

1. $$x\omega y + x\omega yx + y\omega x$$
2. $$x\omega y + x\omega xy + y\omega x$$
3. $$x\omega y + x\omega xyx + y\omega x + y\omega x$$
4. $$x\omega xy + x\omega \omega y + y\omega x$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$x\omega y + x\omega yx + y\omega x$$

**Explanation:**

* The regular expression $$x\omega y + x\omega yx + y\omega x$$ matches the strings generated by the grammar.

</details>

#### 39. Which of the following instance of the post correspondence problem have a viable sequence?

1. $$\{(x, xx), (xx, xyx), (xyx, yxx), (yyxx, xyyx)\}$$
2. $$\{(yx, yxy), (xyy, yy), (yyxy, yyy)\}$$
3. $$\{(yx, yxx), (xy, yyy), (yy, y)\}$$
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$\{(yx, yxx), (xy, yyy), (yy, y)\}$$

**Explanation:**

* The instance $$\{(yx, yxx), (xy, yyy), (yy, y)\}$$ has a viable sequence.

</details>

#### 40. Which of the following statement(s) is (are) correct?

1. Recursively languages are closed under complementation
2. If a language and its complement are both recursively enumerable then language is recursive
3. Set of recursively enumerable language is closed under union
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* All the statements are correct regarding recursively enumerable languages.

</details>

#### 41. Consider the following FA shown in figure below. The language accepted by the FA is

1. $$(a + b)^* b$$
2. $$(a + b)^* b$$
3. $$a^* b$$
4. $$a^* b$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$(a + b)^* b$$

**Explanation:**

* The FA accepts all strings ending with $$b$$.

</details>

#### 42. Which of the following statement is wrong

1. Any regular language has an equivalent context-free grammar
2. Some non-regular languages can't be generated by any context-free grammar
3. The intersection of context free languages and a regular language is always context-free
4. All language can be generated by CFG

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All language can be generated by CFG

**Explanation:**

* Not all languages can be generated by context-free grammars (CFGs).

</details>

#### 43. Consider a grammar

$$S \rightarrow SS$$\
$$S \rightarrow 0S1$$\
$$S \rightarrow 1S0$$\
$$S \rightarrow \epsilon$$\
The grammar will generate

1. Regular language
2. Context-free language
3. Context sensitive language
4. Recursively enumerable language

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Recursively enumerable language

**Explanation:**

* The grammar generates a recursively enumerable language.

</details>

#### 44. The language constructs which are useful in describing nested structures such as balanced parenthesis

1. Regular expression
2. Non-context free grammars
3. Context-free grammar
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Context-free grammar

**Explanation:**

* Context-free grammars are used to describe nested structures like balanced parentheses.

</details>

#### 45. A grammar that produce more than one parse free for same sentence is called

1. Ambiguous
2. Regular
3. Unambiguous
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Ambiguous

**Explanation:**

* A grammar that produces more than one parse tree for the same sentence is ambiguous.

</details>

#### 46. Which of the regular expression denotes a language containing all possible strings over the alphabet $$\{a, b\}$$?

1. $$a^* b^*$$
2. $$(a, b)^*$$
3. $$(ab)^*$$
4. $$(a + b)^*$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$(a + b)^*$$

**Explanation:**

* The regular expression $$(a + b)^*$$ denotes all possible strings over $$\{a, b\}$$.

</details>

#### 47. Palindromes can't be recognized by any Finite State Machine because

1. An FSM can't remember arbitrarily large amount of information
2. An FSM can't fix the mid-point
3. FSM can't find whether the second half of the string matches the first half
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* Finite State Machines (FSMs) cannot recognize palindromes due to their inability to remember large amounts of information and determine mid-points.

</details>

#### 48. A language $$L$$ is accepted by FA if and only if it is

1. Context-free
2. Recursive
3. Context sensitive
4. Right-linear

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Right-linear

**Explanation:**

* A language accepted by a finite automaton (FA) is right-linear.

</details>

#### 49. A language is denoted by a regular expression $$L = \{x^*(x/y)x\}$$. Which of the following is not a legal string within $$L$$?

1. Yx
2. yxx
3. x
4. xy xyx

<details>

<summary>Show me the answer</summary>

**Answer:** 4. xy xyx

**Explanation:**

* The string $$xy xyx$$ does not fit the pattern $$x^*(x/y)x$$.

</details>

#### 50. Can a DFA simulate NFA?

1. No
2. Sometimes
3. Yes
4. Depends on NFA

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Yes

**Explanation:**

* A Deterministic Finite Automaton (DFA) can simulate a Non-deterministic Finite Automaton (NFA).

</details>
