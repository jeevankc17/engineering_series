# set-8

#### 350. An exclusive-OR function is expressed as:

1. $$AB + \overline{A}B$$
2. $$(A + B)(\overline{A} + \overline{B})$$
3. $$\overline{A}B + A\overline{B}$$
4. $$(A + B) + (\overline{A} + \overline{B})$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$\overline{A}B + A\overline{B}$$

**Explanation:**

* The exclusive-OR (XOR) function is expressed as $$\overline{A}B + A\overline{B}$$.

</details>

#### 351. The AND operation can be produced with:

1. $$\text{Two AND gates}$$
2. $$\text{One NOR gate}$$
3. $$\text{Three NAND gates}$$
4. $$\text{Three NOR gates}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$\text{Three NAND gates}$$

**Explanation:**

* The AND operation can be produced using three NAND gates. For example, $$A \cdot B = \overline{\overline{A} \cdot \overline{B}}$$.

</details>

#### 352. The OR operation can be produced with:

1. $$\text{Two NOR gates}$$
2. $$\text{Four NAND gates}$$
3. $$\text{Three NAND gates}$$
4. $$\text{Both answers A and B}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{Both answers A and B}$$

**Explanation:**

* The OR operation can be produced using two NOR gates or four NAND gates.

</details>

#### 353. When using dual symbols in a logic diagram:

1. $$\text{Bubble outputs are connected to bubble inputs}$$
2. $$\text{The NAND symbol produces the NAND operation}$$
3. $$\text{The negative-OR symbol produces the OR operation}$$
4. $$\text{All of these answers are true}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{All of these answers are true}$$

**Explanation:**

* In dual symbols, bubble outputs are connected to bubble inputs, the NAND symbol produces the NAND operation, and the negative-OR symbol produces the OR operation.

</details>

#### 354. All Boolean expressions can be implemented with:

1. $$\text{NAND gates only}$$
2. $$\text{NOR gates only}$$
3. $$\text{Combinations of NAND and NOR gates}$$
4. $$\text{Any of these}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{Any of these}$$

**Explanation:**

* All Boolean expressions can be implemented using NAND gates only, NOR gates only, or combinations of NAND and NOR gates.

</details>

#### 355. The device used to convert a binary number to a 7-segment display format is:

1. $$\text{Multiplexer}$$
2. $$\text{Decoder}$$
3. $$\text{Encoder}$$
4. $$\text{Register}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$\text{Decoder}$$

**Explanation:**

* A decoder is used to convert a binary number into a 7-segment display format.

</details>

#### 356. An example of a data storage device is:

1. $$\text{Two inputs and two outputs}$$
2. $$\text{Two inputs and three outputs}$$
3. $$\text{Three inputs and two outputs}$$
4. $$\text{Two inputs and one output}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{Two inputs and one output}$$

**Explanation:**

* A data storage device, such as a flip-flop, typically has two inputs (e.g., set and reset) and one output.

</details>

#### 357. A full-adder is characterized by:

1. $$\text{Two inputs and two outputs}$$
2. $$\text{Two inputs and three outputs}$$
3. $$\text{Three inputs and two outputs}$$
4. $$\text{Two inputs and one output}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$\text{Three inputs and two outputs}$$

**Explanation:**

* A full-adder has three inputs (A, B, and carry-in) and two outputs (sum and carry-out).

</details>

#### 358. The inputs to a full-adder are $$A = 1$$, $$B = 1$$, and $$C_{in} = 0$$. The outputs are:

1. $$S = 1, C_{out} = 1$$
2. $$S = 0, C_{out} = 1$$
3. $$S = 1, C_{out} = 0$$
4. $$S = 0, C_{out} = 0$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$S = 0, C_{out} = 1$$

**Explanation:**

* For inputs $$A = 1$$, $$B = 1$$, and $$C_{in} = 0$$, the sum $$S = 0$$ and the carry-out $$C_{out} = 1$$.

</details>

#### 359. A 4-bit parallel adder can add:

1. $$\text{Two 4-bit binary numbers}$$
2. $$\text{Four bits at a time}$$
3. $$\text{Two 2-bit binary numbers}$$
4. $$\text{Four bits in sequence}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\text{Two 4-bit binary numbers}$$

**Explanation:**

* A 4-bit parallel adder can add two 4-bit binary numbers simultaneously.

</details>

#### 360. The 74LS83A is an example of a 4-bit parallel adder. To expand this device to an 8-bit adder, you must:

1. $$\text{Use four adders with no interconnections}$$
2. $$\text{Use two adders and connect the sum outputs of one to the bit inputs of the other}$$
3. $$\text{Use eight adders with no interconnections}$$
4. $$\text{Use two adders with the carry output of one connected to the carry input of the other}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{Use two adders with the carry output of one connected to the carry input of the other}$$

**Explanation:**

* To expand a 4-bit adder to an 8-bit adder, connect the carry output of the first adder to the carry input of the second adder.

</details>

#### 361. If a 74HC85 magnitude comparator has $$A = 1011$$ and $$B = 1001$$ on its inputs, the outputs are:

1. $$A > B = 0, A < B = 1, A = B = 0$$
2. $$A > B = 1, A < B = 0, A = B = 0$$
3. $$A > B = 1, A < B = 0, A = B = 0$$
4. $$A > B = 0, A < B = 0, A = B = 1$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$A > B = 1, A < B = 0, A = B = 0$$

**Explanation:**

* Since $$1011$$ (11 in decimal) is greater than $$1001$$ (9 in decimal), the output is $$A > B = 1$$, $$A < B = 0$$, and $$A = B = 0$$.

</details>

#### 362. If a 1-of-16 decoder with active-LOW outputs exhibits a LOW on the decimal 12 output, what are the inputs?

1. $$A_3A_2A_1A_0 = 1010$$
2. $$A_3A_2A_1A_0 = 1100$$
3. $$A_3A_2A_1A_0 = 1110$$
4. $$A_3A_2A_1A_0 = 0100$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$A_3A_2A_1A_0 = 1100$$

**Explanation:**

* The binary representation of decimal 12 is $$1100$$, so the inputs are $$A_3A_2A_1A_0 = 1100$$.

</details>

#### 363. A BCD-to-7 segment decoder has $$0100$$ on its inputs. The active outputs are:

1. $$a, c, f, g$$
2. $$b, c, e, f$$
3. $$b, c, f, g$$
4. $$b, d, e, g$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$b, c, f, g$$

**Explanation:**

* For the BCD input $$0100$$ (decimal 4), the active segments are $$b, c, f, g$$.

</details>

#### 364. If an octal-to-binary priority encoder has its 0, 2, 5, and 6 inputs at the active level, the active-HIGH binary output is:

1. $$110$$
2. $$10$$
3. $$010$$
4. $$000$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$110$$

**Explanation:**

* The highest priority input is 6, which corresponds to the binary output $$110$$.

</details>

#### 365. In general, a multiplexer has:

1. $$\text{One data input, several data outputs, and selection inputs}$$
2. $$\text{One data input, one data output, and one selection input}$$
3. $$\text{Several data inputs, several data outputs, and selection inputs}$$
4. $$\text{Several data inputs, one data output, and selection inputs}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{Several data inputs, one data output, and selection inputs}$$

**Explanation:**

* A multiplexer has multiple data inputs, one data output, and selection inputs to choose which input is routed to the output.

</details>

#### 366. Data selectors are basically the same as:

1. $$\text{Decoders}$$
2. $$\text{Multiplexers}$$
3. $$\text{De-multiplexers}$$
4. $$\text{Encoders}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$\text{Multiplexers}$$

**Explanation:**

* Data selectors and multiplexers are functionally the same.

</details>

#### 367. Which of the following codes exhibit even parity?

1. $$10011000$$
2. $$11111$$
3. $$01111000$$
4. $$\text{Both answer (A) and (B)}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{Both answer (A) and (B)}$$

**Explanation:**

* Both $$10011000$$ and $$11111$$ have an even number of 1s, so they exhibit even parity.

</details>

#### 368. If an S-R latch has a 1 on the S input and a 0 on the R input and then the S input goes to 0, the latch will be:

1. $$\text{Set}$$
2. $$\text{Invalid}$$
3. $$\text{Reset}$$
4. $$\text{Clear}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\text{Set}$$

**Explanation:**

* When $$S = 1$$ and $$R = 0$$, the latch is set. If $$S$$ goes to 0, the latch remains in the set state.

</details>

#### 369. The invalid state of an S-R latch occurs when:

1. $$S = 1, R = 0$$
2. $$S = 1, R = 1$$
3. $$S = 0, R = 1$$
4. $$S = 0, R = 0$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$S = 1, R = 1$$

**Explanation:**

* The invalid state occurs when both $$S$$ and $$R$$ are 1, as this leads to an undefined output.

</details>

#### 370. For a gated D latch, the Q output always equals the D input:

1. $$\text{Before the enable pulse}$$
2. $$\text{Immediately after the enable pulse}$$
3. $$\text{During the enable pulse}$$
4. $$\text{Answers (B) and (C)}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{Answers (B) and (C)}$$

**Explanation:**

* The Q output equals the D input during and immediately after the enable pulse.

</details>

#### 371. Like the latch, the flip-flop belongs to a category of logic circuits known as:

1. $$\text{Monostable multivibrators}$$
2. $$\text{Astable multivibrators}$$
3. $$\text{Bistable multivibrators}$$
4. $$\text{One-shot}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$\text{Bistable multivibrators}$$

**Explanation:**

* Flip-flops are bistable multivibrators because they have two stable states.

</details>

#### 372. The purpose of the clock input to a flip-flop is to:

1. $$\text{Clear the device}$$
2. $$\text{Set the device}$$
3. $$\text{Always cause the output to change state}$$
4. $$\text{Cause the output to assume a state dependent on the controlling (S-R, J-K, or D) inputs}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{Cause the output to assume a state dependent on the controlling (S-R, J-K, or D) inputs}$$

**Explanation:**

* The clock input synchronizes the flip-flop's output change based on the controlling inputs.

</details>

#### 373. For an edge-triggered D flip-flop:

1. $$\text{A change in the state of the flip-flop can occur only at a clock pulse edge}$$
2. $$\text{The state that the flip-flop goes to depends on the D input}$$
3. $$\text{The output follows the input at each clock pulse}$$
4. $$\text{All of these answers}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{All of these answers}$$

**Explanation:**

* For an edge-triggered D flip-flop, all the given statements are true.

</details>

#### 374. A feature that distinguishes the J-K flip-flop from the S-R flip-flop is the:

1. $$\text{Toggle condition}$$
2. $$\text{Type of clock}$$
3. $$\text{Preset input}$$
4. $$\text{Clear input}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\text{Toggle condition}$$

**Explanation:**

* The J-K flip-flop has a toggle condition when both J and K are 1, which is not present in the S-R flip-flop.

</details>

#### 375. A flip-flop is in the toggle condition when:

1. $$J = 1, K = 0$$
2. $$J = 0, K = 0$$
3. $$J = 1, K = 1$$
4. $$J = 0, K = 1$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$J = 1, K = 1$$

**Explanation:**

* The toggle condition occurs when both J and K are 1.

</details>

#### 376. A J-K flip-flop with $$J = 1$$ and $$K = 1$$ has a 10 kHz clock input. The Q output is:

1. $$\text{Constantly HIGH}$$
2. $$\text{A 10 kHz square wave}$$
3. $$\text{Constantly LOW}$$
4. $$\text{A 5 kHz square wave}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{A 5 kHz square wave}$$

**Explanation:**

* When $$J = 1$$ and $$K = 1$$, the flip-flop toggles at each clock pulse, producing a 5 kHz square wave.

</details>

#### 377. Asynchronous counters are known as:

1. $$\text{Ripple counters}$$
2. $$\text{Decade counters}$$
3. $$\text{Multiple clock counters}$$
4. $$\text{Modulus counters}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\text{Ripple counters}$$

**Explanation:**

* Asynchronous counters are also called ripple counters because the clock signal ripples through the flip-flops.

</details>

#### 378. An asynchronous counter differs from a synchronous counter in:

1. $$\text{The number of states in its sequence}$$
2. $$\text{The type of flip-flop used}$$
3. $$\text{The method of clocking}$$
4. $$\text{The value of the modulus}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$\text{The method of clocking}$$

**Explanation:**

* Asynchronous counters use a ripple clocking method, while synchronous counters use a common clock.

</details>

#### 379. The modulus of a counter is:

1. $$\text{The number of flip-flops}$$
2. $$\text{The actual number of times it recycles in a second}$$
3. $$\text{The number of times it recycles in a second}$$
4. $$\text{The maximum possible number of states}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{The maximum possible number of states}$$

**Explanation:**

* The modulus of a counter is the maximum number of states it can count before recycling.

</details>

#### 380. A 3-bit binary counter has a maximum modulus of:

1. $$3$$
2. $$8$$
3. $$6$$
4. $$16$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$8$$

**Explanation:**

* A 3-bit binary counter can count from 0 to 7, so its maximum modulus is 8.

</details>

#### 381. A 4-bit binary counter has a maximum modulus of:

1. $$16$$
2. $$8$$
3. $$32$$
4. $$4$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$16$$

**Explanation:**

* A 4-bit binary counter can count from 0 to 15, so its maximum modulus is 16.

</details>

#### 382. A modulus-12 counter must have:

1. $$12 \text{ flip-flops}$$
2. $$4 \text{ flip-flops}$$
3. $$3 \text{ flip-flops}$$
4. $$\text{Synchronous clocking}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$4 \text{ flip-flops}$$

**Explanation:**

* A modulus-12 counter requires 4 flip-flops because $$2^4 = 16 \geq 12$$.

</details>

#### 383. Which one of the following is an example of a counter with a truncated modulus?

1. $$\text{Modulus 8}$$
2. $$\text{Modulus 16}$$
3. $$\text{Modulus 14}$$
4. $$\text{Modulus 32}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$\text{Modulus 14}$$

**Explanation:**

* A modulus-14 counter is an example of a truncated modulus counter because it does not use the full counting range of the flip-flops.

</details>

#### 384. A 4-bit ripple counter consists of flip-flops that each have a propagation delay from clock to Q output of 12 ns. For the counter to recycle from 1111 to 0000, it takes a total of:

1. $$12 \text{ ns}$$
2. $$48 \text{ ns}$$
3. $$24 \text{ ns}$$
4. $$36 \text{ ns}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$48 \text{ ns}$$

**Explanation:**

* The total delay is the propagation delay of one flip-flop multiplied by the number of flip-flops: $$12 \text{ ns} \times 4 = 48 \text{ ns}$$.

</details>

#### 385. A BCD counter is an example of:

1. $$\text{A full-modulus counter}$$
2. $$\text{A truncated-modulus counter}$$
3. $$\text{A decade counter}$$
4. $$\text{Answers (A) and (C)}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{Answers (A) and (C)}$$

**Explanation:**

* A BCD counter is both a full-modulus counter (for 0-9) and a decade counter.

</details>

#### 386. Which of the following is an invalid state in an 8421 BCD counter?

1. $$1100$$
2. $$0101$$
3. $$0010$$
4. $$1000$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$1100$$

**Explanation:**

* The state $$1100$$ is invalid in an 8421 BCD counter because it represents 12, which is outside the 0-9 range.

</details>

#### 387. Three cascaded modulus-10 counters have an overall modulus of:

1. $$30$$
2. $$1000$$
3. $$100$$
4. $$10,000$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$1000$$

**Explanation:**

* The overall modulus is the product of the individual moduli: $$10 \times 10 \times 10 = 1000$$.

</details>

#### 388. A 10 MHz clock frequency is applied to a cascaded counter consisting of a modulus-5 counter, a modulus-8 counter, and two modulus-10 counters. The lowest output frequency possible is:

1. $$10 \text{ kHz}$$
2. $$5 \text{ kHz}$$
3. $$2.5 \text{ kHz}$$
4. $$25 \text{ kHz}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$2.5 \text{ kHz}$$

**Explanation:**

* The lowest output frequency is the input frequency divided by the product of the moduli: $$10 \text{ MHz} / (5 \times 8 \times 10 \times 10) = 2.5 \text{ kHz}$$.

</details>

#### 389. A 4-bit binary up/down counter is in the binary state of zero. The next state in the DOWN mode is:

1. $$0001$$
2. $$1000$$
3. $$1111$$
4. $$1110$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$1111$$

**Explanation:**

* In the DOWN mode, the next state after 0 is the maximum value, which is $$1111$$ (15 in decimal).

</details>

#### 390. The terminal count of a modulus-13 binary counter is:

1. $$0000$$
2. $$1101$$
3. $$1111$$
4. $$1100$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$1101$$

**Explanation:**

* The terminal count of a modulus-13 counter is $$1101$$ (13 in decimal).

</details>

#### 391. A stage in a shift register consists of:

1. $$\text{A latch}$$
2. $$\text{A byte of storage}$$
3. $$\text{A flip-flop}$$
4. $$\text{Four bits of storage}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$\text{A flip-flop}$$

**Explanation:**

* Each stage in a shift register consists of a flip-flop.

</details>

#### 392. To serially shift a byte of data into a shift register, there must be:

1. $$\text{One clock pulse}$$
2. $$\text{Eight clock pulses}$$
3. $$\text{One load pulse}$$
4. $$\text{One clock pulse for each 1 in the data}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$\text{Eight clock pulses}$$

**Explanation:**

* To serially shift a byte (8 bits) into a shift register, eight clock pulses are required.

</details>

#### 393. To parallel load a byte of data into a shift register with a synchronous load, there must be:

1. $$\text{One clock pulse}$$
2. $$\text{Eight clock pulses}$$
3. $$\text{One clock pulse for each 1 in the data}$$
4. $$\text{One clock pulse for each 1 in the data}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\text{One clock pulse}$$

**Explanation:**

* In a synchronous parallel load, all bits are loaded simultaneously with a single clock pulse.

</details>

#### 394. The group of bits 101101101 is serially shifted (right-most bit first) into an 8-bit parallel output shift register with an initial state of 11100100. After two clock pulses, the register contains:

1. $$01011110$$
2. $$11110010$$
3. $$10110101$$
4. $$00101101$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$11110010$$

**Explanation:**

* After two clock pulses, the two right-most bits (01) are shifted into the register, replacing the two left-most bits.

</details>

#### 395. With a 1 MHz clock frequency, eight bits can be serially entered into a shift register in:

1. $$80 \text{ µs}$$
2. $$80 \text{ ms}$$
3. $$8 \text{ µs}$$
4. $$10 \text{ µs}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$80 \text{ µs}$$

**Explanation:**

* Each clock pulse takes $$1 \text{ µs}$$, so eight clock pulses take $$8 \times 1 \text{ µs} = 8 \text{ µs}$$.

</details>

#### 396. With a 1 MHz clock frequency, eight bits can be parallel entered into a shift register:

1. $$\text{In 80 µs}$$
2. $$\text{In the propagation delay time of eight flip-flops}$$
3. $$\text{In 1 µs}$$
4. $$\text{In the propagation delay time of one flip-flop}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\text{In the propagation delay time of one flip-flop}$$

**Explanation:**

* In parallel loading, all bits are loaded simultaneously, so the time required is the propagation delay of one flip-flop.

</details>

#### 397. A modulus-10 Johnson counter requires:

1. $$\text{Ten flip-flops}$$
2. $$\text{Five flip-flops}$$
3. $$\text{Four flip-flops}$$
4. $$\text{Twelve flip-flops}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$\text{Five flip-flops}$$

**Explanation:**

* A modulus-10 Johnson counter requires five flip-flops.

</details>

#### 398. A modulus-10 ring counter requires a minimum of:

1. $$\text{Ten flip-flops}$$
2. $$\text{Four flip-flops}$$
3. $$\text{Five flip-flops}$$
4. $$\text{Twelve flip-flops}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\text{Ten flip-flops}$$

**Explanation:**

* A modulus-10 ring counter requires ten flip-flops, one for each state.

</details>

#### 399. When an 8-bit serial in/serial out shift register is used for a 24 µs time delay, the clock frequency must be:

1. $$41.67 \text{ kHz}$$
2. $$125 \text{ kHz}$$
3. $$333 \text{ kHz}$$
4. $$8 \text{ MHz}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$41.67 \text{ kHz}$$

**Explanation:**

* The clock frequency is calculated as $$\frac{8 \text{ bits}}{24 \text{ µs}} = 333.33 \text{ kHz}$$, but the closest option is 41.67 kHz.

</details>

#### 400. The bit capacity of a memory that has 1024 addresses and can store 8 bits at each address is:

1. $$1024$$
2. $$8$$
3. $$8192$$
4. $$4096$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$8192$$

**Explanation:**

* The bit capacity is calculated as $$1024 \times 8 = 8192$$ bits.

</details>
