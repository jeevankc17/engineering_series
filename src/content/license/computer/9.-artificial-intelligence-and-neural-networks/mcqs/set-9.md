# set-9

#### 401. \_\_\_\_\_\_ is a possible mechanism for synaptic modification in the brain.

1. Hebbian Rule
2. McCulloch pits neuron
3. Hopfield network
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Hebbian Rule

**Explanation:**

* The **Hebbian Rule** is a theory that explains how neurons adapt and strengthen their connections based on activity.
* It is often summarized as "cells that fire together, wire together."

</details>

#### 402. The \_\_\_\_\_\_ can be used to train neural networks for pattern recognition.

1. Hebbian Rule
2. McCulloch pits neuron
3. Hopfield network
4. Genetic Algorithm

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Hebbian Rule

**Explanation:**

* The **Hebbian Rule** is used in training neural networks, particularly for tasks like pattern recognition.
* It helps in strengthening the connections between neurons that are frequently activated together.

</details>

#### 403. If two neurons on either side of a synapse are activated simultaneously, the strength of the synapse will increase is \_\_\_\_\_\_.

1. Hebbian Learning Rule
2. Perceptron Learning Rule
3. Delta Learning Rule
4. Genetic Algorithm Learning Rule

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Hebbian Learning Rule

**Explanation:**

* The **Hebbian Learning Rule** states that if two neurons are activated simultaneously, the synaptic connection between them strengthens.
* This is the basis of learning in neural networks.

</details>

#### 404. \_\_\_\_\_\_ is the one of the Neural Network Learning rules.

1. Hebbian Learning Rule
2. Perceptron Learning Rule
3. Delta Learning Rule
4. All of above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of above

**Explanation:**

* **Hebbian Learning Rule**, **Perceptron Learning Rule**, and **Delta Learning Rule** are all learning rules used in neural networks.
* Each rule has its own mechanism for updating weights and improving the network's performance.

</details>

#### 405. \_\_\_\_\_\_ is an error correcting the supervised learning algorithm of single layer feedforward networks with linear activation function.

1. Hebbian Learning Rule
2. Perceptron Learning Rule
3. Delta Learning Rule
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Perceptron Learning Rule

**Explanation:**

* The **Perceptron Learning Rule** is used in single-layer feedforward networks with linear activation functions.
* It corrects errors by adjusting weights based on the difference between the predicted and actual outputs.

</details>

#### 406. \_\_\_\_\_\_ also called Least Mean Square (LMS)

1. Hebbian Learning Rule
2. Perceptron Learning Rule
3. Delta Learning Rule
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Delta Learning Rule

**Explanation:**

* The **Delta Learning Rule** is also known as the **Least Mean Square (LMS)** algorithm.
* It minimizes the error by adjusting weights based on the gradient of the error function.

</details>

#### 407. A \_\_\_\_\_\_ is an algorithm for supervised learning of binary classifiers. This algorithm enables neurons to learn and processes elements in the training set one at a time.

1. Hebbian Learning
2. Delta Learning
3. Perceptron
4. Delta Learning

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Perceptron

**Explanation:**

* The **Perceptron** is a supervised learning algorithm used for binary classification.
* It processes training examples one at a time and updates weights to minimize errors.

</details>

#### 408. \_\_\_\_\_\_ are one of the types of perceptron.

1. Single layer perceptron
2. Multilayer perceptron
3. No layer perceptron
4. Both A and B

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both A and B

**Explanation:**

* **Single-layer perceptron** and **multilayer perceptron** are two types of perceptrons.
* Single-layer perceptrons are simpler, while multilayer perceptrons can model more complex relationships.

</details>

#### 409. \_\_\_\_\_\_ can learn only linearly separable patterns.

1. Single layer perceptron
2. Multilayer perceptron
3. No layer perceptron
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Single layer perceptron

**Explanation:**

* A **single-layer perceptron** can only learn patterns that are linearly separable.
* It cannot handle complex, non-linear relationships.

</details>

#### 410. \_\_\_\_\_\_ can learn about two or more layers having a greater processing power.

1. Single layer perceptron
2. Multilayer perceptron
3. No layer perceptron
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Multilayer perceptron

**Explanation:**

* A **multilayer perceptron** has multiple layers of neurons, allowing it to learn complex, non-linear patterns.
* It has greater processing power compared to single-layer perceptrons.

</details>

#### 411. The given figure is of \_\_\_\_\_\_.

\[\begin{array}{c} \text{Xi} \ \text{X2} \ \text{Xn} \end{array}]

Input Sum

Activation Function

1. Single layer perceptron
2. Multilayer perceptron
3. No layer perceptron
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Single layer perceptron

**Explanation:**

* The figure represents a **single-layer perceptron**, which consists of input nodes, a summation function, and an activation function.
* It is the simplest form of a neural network.

</details>

#### 412. The given figure is of \_\_\_\_\_\_.

Input layer Hidden layers Output layer

1. Single layer perceptron
2. Multilayer perceptron
3. No layer perceptron
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Multilayer perceptron

**Explanation:**

* The figure represents a **multilayer perceptron**, which includes an input layer, one or more hidden layers, and an output layer.
* It is capable of learning complex patterns.

</details>

#### 413. Identify the type of perceptron activation function.

$$y = \frac{1}{1 + e^{-x}}$$\
$$y = \frac{e^{x} - e^{-x}}{e^{x} + e^{-x}}$$

1. Sigmoid and tanh
2. Tanh and sigmoid
3. Linear, Relu
4. Relu, Linear

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Sigmoid and tanh

**Explanation:**

* The functions shown are the **sigmoid** and **tanh** activation functions.
* Sigmoid outputs values between 0 and 1, while tanh outputs values between -1 and 1.

</details>

#### 414. Identify the type of perceptron activation function.

$$y = \max(0, x)$$\
$$y = \max(\alpha x, x)$$

1. Sigmoid and tanh
2. Tanh and sigmoid
3. Leaky Relu and Relu
4. Relu and, Leaky Relu

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Relu and, Leaky Relu

**Explanation:**

* The functions shown are the **ReLU (Rectified Linear Unit)** and **Leaky ReLU** activation functions.
* ReLU outputs the input directly if it is positive, otherwise zero. Leaky ReLU allows a small, non-zero gradient for negative inputs.

</details>

#### 415. Gradient descent is an optimization algorithm which is commonly-used to \_\_\_\_\_\_ machine learning models and neural networks.

1. Train
2. Test
3. Validate
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Train

**Explanation:**

* **Gradient Descent** is an optimization algorithm used to train machine learning models and neural networks.
* It minimizes the loss function by iteratively adjusting the model's parameters.

</details>

#### 416. \_\_\_\_\_\_ is one of the types of gradient descent algorithm.

1. Batch Gradient Descent (BGD)
2. Stochastic Gradient Descent (SGD)
3. Mini-Batch Gradient Descent
4. All of above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of above

**Explanation:**

* **Batch Gradient Descent (BGD)**, **Stochastic Gradient Descent (SGD)**, and **Mini-Batch Gradient Descent** are all variants of the gradient descent algorithm.
* Each variant has its own approach to updating the model's parameters.

</details>

#### 417. The backpropagation algorithm is used for which type of neural network?

1. Single-layer feedforward neural networks
2. Multilayer feedforward neural networks
3. Convolutional neural networks
4. Recurrent neural networks

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Multilayer feedforward neural networks

**Explanation:**

* The **backpropagation algorithm** is primarily used in **multilayer feedforward neural networks**.
* It calculates the gradient of the loss function with respect to the weights and propagates the error backward to update the weights.

</details>

#### 418. Which of the following is true about the backpropagation algorithm?

1. It is a supervised learning algorithm
2. It is an unsupervised learning algorithm
3. It is a reinforcement learning algorithm
4. It is a semi-supervised learning algorithm

<details>

<summary>Show me the answer</summary>

**Answer:** 1. It is a supervised learning algorithm

**Explanation:**

* The **backpropagation algorithm** is a supervised learning algorithm.
* It requires labeled data to calculate the error and update the model's weights.

</details>

#### 419. The backpropagation algorithm involves two phases. What are they?

1. Forward propagation and backward propagation
2. Feature selection and feature extraction
3. Clustering and classification
4. Regression and classification

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Forward propagation and backward propagation

**Explanation:**

* The **backpropagation algorithm** consists of two phases:
  * **Forward propagation**: Input data is passed through the network to compute the output.
  * **Backward propagation**: The error is calculated and propagated backward to update the weights.

</details>

#### 420. Which of the following is the activation function commonly used in the backpropagation algorithm?

1. Linear
2. Sigmoid
3. ReLU
4. Tanh

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Sigmoid

**Explanation:**

* The **sigmoid activation function** is commonly used in the backpropagation algorithm.
* It is differentiable, which is essential for calculating gradients during backpropagation.

</details>

#### 421. The backpropagation law is also known as generalized delta rule, is it true?

1. Yes
2. No
3. Partially yes
4. Not sure

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Yes

**Explanation:**

* The **backpropagation law** is also known as the **generalized delta rule**.
* It is used to update the weights of a neural network based on the error gradient.

</details>

#### 422. \_\_\_\_\_\_ consists of a set of neurons where each neuron corresponds to a pixel of the difference image and is connected to all the neurons in the neighborhood.

1. Hopfield neural network
2. Biological neural network
3. Hamming neural network
4. McColloch Pits' neural network

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Hopfield neural network

**Explanation:**

* The **Hopfield neural network** consists of neurons that are fully connected to each other.
* Each neuron corresponds to a pixel in the input image, and the network is used for tasks like pattern recognition and optimization.

</details>

#### 423. The \_\_\_\_\_\_ is commonly used for auto-association and optimization tasks.

1. Hopfield neural network
2. Biological neural network
3. Hamming neural network
4. McColloch Pits' neural network

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Hopfield neural network

**Explanation:**

* The **Hopfield neural network** is commonly used for **auto-association** and **optimization tasks**.
* It can store and retrieve patterns, making it useful for memory-based applications.

</details>

#### 424. In \_\_\_\_\_\_, the input and output patterns are discrete vector, which can be either binary 0,1 or bipolar +1, -1 in nature.

1. Continuous Hopfield n/w
2. Discrete Hopfield n/w
3. Sequential Hopfield n/w
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Discrete Hopfield n/w

**Explanation:**

* In a **Discrete Hopfield Network**, the input and output patterns are discrete vectors, typically binary (0, 1) or bipolar (+1, -1).
* It is used for tasks like pattern recognition and associative memory.

</details>

#### 425. Continuous Hopfield Network in comparison with Discrete Hopfield network, continuous network has \_\_\_\_\_\_ as a continuous variable.

1. Space
2. Range
3. Time
4. Velocity

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Time

**Explanation:**

* In a **Continuous Hopfield Network**, **time** is treated as a continuous variable.
* This allows the network to model dynamic systems and solve optimization problems more effectively.

</details>

#### 426. \_\_\_\_\_\_ architecture can be build up by adding electrical components such as amplifiers which can map the input voltage to the output voltage over a sigmoid activation function.

1. Continuous Hopfield n/w
2. Discrete Hopfield n/w
3. Sequential Hopfield n/w
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Continuous Hopfield n/w

**Explanation:**

* The **Continuous Hopfield Network** can be built using electrical components like amplifiers.
* These components map the input voltage to the output voltage using a sigmoid activation function.

</details>

#### 427. \_\_\_\_\_\_, is a network having a single linear unit.

1. Madeline
2. Adaline
3. Backpropagation
4. Perceptron

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Adaline

**Explanation:**

* **Adaline (Adaptive Linear Neuron)** is a neural network with a single linear unit.
* It uses the **Delta Learning Rule** for training and is used for binary classification tasks.

</details>

#### 428. The basic structure of \_\_\_\_\_\_ is similar to perceptron having an extra feedback loop.

1. Madeline
2. Adaline
3. Backpropagation
4. None of above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Adaline

**Explanation:**

* The **Adaline** network has a structure similar to the perceptron but includes an extra feedback loop.
* This feedback loop allows it to adjust weights based on the error between the predicted and actual outputs.

</details>

#### 429. Identify the diagram and answer the question which training algorithm is this?

A. Madeline B. Adaline\
C. Perceptron D. Backpropagation

<details>

<summary>Show me the answer</summary>

**Answer:** B. Adaline

**Explanation:**

* The diagram represents the **Adaline** training algorithm.
* Adaline uses the **Delta Learning Rule** to minimize the error between the predicted and actual outputs.

</details>

#### 430. \_\_\_\_\_\_ is a network which consists of many Adalines in parallel.

1. Madeline
2. Adaline
3. Backpropagation
4. Perceptron

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Madeline

**Explanation:**

* **Madeline (Multiple Adaline)** is a network that consists of multiple Adaline units working in parallel.
* It is used for more complex tasks that require multiple outputs.

</details>

#### 431. In NN, Delta rule works only for the \_\_\_\_\_\_.

1. Hidden layer
2. Input layer
3. Weight and bias
4. Output layer

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Output layer

**Explanation:**

* The **Delta Rule** works by adjusting the weights based on the error at the **output layer**.
* It is used to minimize the difference between the predicted and actual outputs.

</details>

#### 432. Generalized delta rule, also called as \_\_\_\_\_\_ rule, is a way of creating the desired values of the hidden layer.

1. Feed-forward
2. Backpropagation
3. Perceptron
4. Adaline

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Backpropagation

**Explanation:**

* The **Generalized Delta Rule** is also known as the **Backpropagation Rule**.
* It is used to calculate the error gradients for the hidden layers in a neural network, enabling the network to learn complex patterns.

</details>
