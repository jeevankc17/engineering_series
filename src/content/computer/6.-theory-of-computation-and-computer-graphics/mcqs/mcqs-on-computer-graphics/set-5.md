# set-5

#### 201. Sound pressure levels are measured in \_\_\_\_\_\_.

1. Decibels.
2. Ounce
3. Pound
4. Fathom

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Decibels.

**Explanation:**

* Sound pressure levels are measured in **decibels (dB)**.
* Decibels are a logarithmic unit used to measure the intensity of sound.
*   The formula for sound pressure level in decibels is:

    $$
    L_p = 20 \log_{10}\left(\frac{p}{p_0}\right)
    $$

    where:

    * $$L_p$$ = sound pressure level in dB,
    * $$p$$ = measured sound pressure,
    * $$p_0$$ = reference sound pressure (typically $$20 \mu Pa$$).

</details>

#### 202. MIDI stands for \_\_\_\_\_\_.

1. Music instruction digital interface.
2. Musical instrument digital interface.
3. Musical instrumental digital interface
4. Music instrument digit interface

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Musical instrument digital interface.

**Explanation:**

* MIDI stands for **Musical Instrument Digital Interface**.
* It is a protocol used for communicating musical information between devices.
* MIDI does not transmit audio signals but rather instructions like note-on, note-off, pitch, and velocity.

</details>

#### 203. Digital audio data is the actual representation of a \_\_\_\_\_\_.

1. Light.
2. Music
3. Sound
4. Noise

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Sound.

**Explanation:**

* Digital audio data is the actual representation of **sound**.
* It is created by sampling analog sound waves and converting them into digital form.
* The process involves:
  * **Sampling**: Capturing the amplitude of the sound wave at regular intervals.
  * **Quantization**: Rounding the amplitude values to the nearest integer.
  *   The sampling rate is given by:

      $$
      f_s = \frac{1}{T_s}
      $$

      where:

      * $$f_s$$ = sampling frequency,
      * $$T_s$$ = sampling interval.

</details>

#### 204. Digital audio data is also called as \_\_\_\_\_\_.

1. Tracks.
2. Probable
3. Examples
4. Samples

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Samples.

**Explanation:**

* Digital audio data is also called **samples**.
* Each sample represents the amplitude of the sound wave at a specific point in time.
* The number of samples per second is determined by the sampling rate, $$f_s$$.

</details>

#### 205. In Windows, system sounds are \_\_\_\_\_\_ files.

1. .Rar.
2. .Wav.
3. .3gp.
4. .Wmv.

<details>

<summary>Show me the answer</summary>

**Answer:** 2. .Wav.

**Explanation:**

* In Windows, system sounds are stored as **.wav** files.
* The WAV format is commonly used for uncompressed audio.
*   The file size of a WAV file can be calculated using:

    $$
    \text{File Size} = f_s \times \text{Bit Depth} \times \text{Channels} \times \text{Duration}
    $$

    where:

    * $$f_s$$ = sampling frequency,
    * Bit Depth = number of bits per sample,
    * Channels = number of audio channels (e.g., stereo = 2),
    * Duration = length of the audio in seconds.

</details>

#### 206. MIDI files are \_\_\_\_\_\_ than CD quality digital audio files.

1. Larger.
2. Too large
3. Smaller
4. Equal

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Smaller.

**Explanation:**

* MIDI files are **smaller** than CD-quality digital audio files.
* This is because MIDI files contain instructions for playing music rather than the actual audio data.
*   For example, a MIDI file might store a note as:

    $$
    \text{Note} = (\text{Pitch}, \text{Velocity}, \text{Duration})
    $$

    whereas a digital audio file stores the actual waveform.

</details>

#### 207. The sampling frequencies often used in multimedia are \_\_\_\_\_\_.

1. KHz.
2. MHz
3. GHz
4. DHz

<details>

<summary>Show me the answer</summary>

**Answer:** 1. KHz.

**Explanation:**

* The sampling frequencies often used in multimedia are in **kilohertz (KHz)**.
* Common sampling rates include:
  * $$44.1 \text{ KHz}$$ (CD quality),
  * $$48 \text{ KHz}$$ (DVD quality).
*   The Nyquist theorem states that the sampling rate must be at least twice the highest frequency in the signal:

    $$
    f_s \geq 2 \times f_{\text{max}}
    $$

    where:

    * $$f_s$$ = sampling frequency,
    * $$f_{\text{max}}$$ = highest frequency in the signal.

</details>

#### 208. The value of each sample is rounded off to the nearest integer known as \_\_\_\_\_\_.

1. Samplization.
2. Quantification
3. Quantization
4. Digitations

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Quantization.

**Explanation:**

* The process of rounding off the value of each sample to the nearest integer is called **quantization**.
* Quantization introduces a small error called **quantization noise**.
*   The signal-to-noise ratio (SNR) for quantization is given by:

    $$
    \text{SNR} = 6.02 \times \text{Bit Depth} + 1.76 \text{ dB}
    $$

    where:

    * Bit Depth = number of bits per sample.

</details>

#### 209. The amount of information stored about each sample is the \_\_\_\_\_\_.

1. Sample no.
2. Sample size.
3. Sample volume.
4. Sample unit

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Sample size.

**Explanation:**

* The amount of information stored about each sample is called the **sample size**.
* It is typically measured in bits (e.g., 8-bit, 16-bit).
*   For example, a 16-bit sample size allows for:

    $$
    2^{16} = 65,536
    $$

    possible amplitude values.

</details>

#### 210. LEDs operate on \_\_\_\_\_\_ frequencies.

1. Optical.
2. Infra
3. Infrared
4. Electro

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Infrared.

**Explanation:**

* LEDs (Light Emitting Diodes) often operate on **infrared frequencies**.
*   The wavelength of infrared light is given by:

    $$
    \lambda = \frac{c}{f}
    $$

    where:

    * $$\lambda$$ = wavelength,
    * $$c$$ = speed of light ($$3 \times 10^8 \text{ m/s}$$),
    * $$f$$ = frequency.

</details>

#### 211. Digitized sound is the \_\_\_\_\_\_ sound.

1. Sampled.
2. Covered
3. Diluted
4. Modified

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Sampled.

**Explanation:**

* Digitized sound is the **sampled** sound.
* It is created by capturing discrete samples of an analog sound wave.
*   The sampling process is governed by the Nyquist theorem:

    $$
    f_s \geq 2 \times f_{\text{max}}
    $$

    where:

    * $$f_s$$ = sampling frequency,
    * $$f_{\text{max}}$$ = highest frequency in the signal.

</details>

#### 212. Sample size are \_\_\_\_\_\_ bits.

1. 2
2. 4
3. 6
4. 8

<details>

<summary>Show me the answer</summary>

**Answer:** 4. 8.

**Explanation:**

* Sample sizes are typically **8 bits** for basic audio quality.
* Higher-quality audio uses 16-bit or 24-bit samples.
*   The dynamic range for an 8-bit sample is:

    $$
    20 \log_{10}(2^8) \approx 48 \text{ dB}
    $$

</details>

#### 213. A 16-bit sample provides a staggering \_\_\_\_\_\_ units.

1. 16,384.
2. 32,786.
3. 65,536.
4. 84,658.

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 65,536.

**Explanation:**

*   A 16-bit sample provides **65,536** possible values, as:

    $$
    2^{16} = 65,536
    $$

</details>

#### 214. Removing of dead air or blank space from a front of the recording is known as \_\_\_\_\_\_.

1. Trimming.
2. Cutting
3. Editing
4. Erasing

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Trimming.

**Explanation:**

* Removing dead air or blank space from the front of a recording is called **trimming**.

</details>

#### 215. MIDI sounds are typically stored in files with the \_\_\_\_\_\_ extensions.

1. .MDI.
2. .MID.
3. .MIDI.
4. .MDII.

<details>

<summary>Show me the answer</summary>

**Answer:** 2. .MID.

**Explanation:**

* MIDI sounds are typically stored in files with the **.MID** extension.

</details>

#### 216. A popular effect in which one image transforms into another is known as \_\_\_\_\_\_.

1. Animation.
2. Encrypting
3. Modifying
4. Morphing

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Morphing.

**Explanation:**

* The effect where one image transforms into another is called **morphing**.

</details>

#### 217. PAL stands for \_\_\_\_\_\_.

1. Pass alternative line.
2. Pass alternate line.
3. Phase alternative line.
4. Phase alternate line

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Phase alternate line.

**Explanation:**

* PAL stands for **Phase Alternate Line**, a color encoding system used in television broadcasting.

</details>

#### 218. HDTV stands for \_\_\_\_\_\_.

1. High defined television.
2. Higher definition television.
3. High definition television
4. Higher defined television.

<details>

<summary>Show me the answer</summary>

**Answer:** 3. High definition television.

**Explanation:**

* HDTV stands for **High Definition Television**, which provides higher resolution than standard-definition TV.

</details>

#### 219. Light comes from an \_\_\_\_\_\_.

1. Electron.
2. Cathode
3. Atom
4. Radium

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Atom.

**Explanation:**

* Light is emitted from **atoms** when electrons transition between energy levels.

</details>

#### 220. VGA stands for \_\_\_\_\_\_.

1. Video graphics array.
2. Video graph array.
3. Visual graphics array.
4. Visual graph array.

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Video graphics array.

**Explanation:**

* VGA stands for **Video Graphics Array**, a display standard for computers.

</details>

#### 221. The area on a display device to which a window is mapped is called a \_\_\_\_\_\_.

1. Window.
2. View port
3. Coordinate
4. Section

<details>

<summary>Show me the answer</summary>

**Answer:** 2. View port.

**Explanation:**

* The area on a display device to which a window is mapped is called a **viewport**.

</details>

#### 222. A world coordinate area selected for display is called \_\_\_\_\_\_.

1. Window.
2. View port
3. View point
4. Section

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Window.

**Explanation:**

* A world coordinate area selected for display is called a **window**.

</details>

#### 223. The region against which an object is to clipped is called a \_\_\_\_\_\_.

1. Clipping.
2. View port
3. Window
4. Clip window

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Clip window.

**Explanation:**

* The region against which an object is to be clipped is called a **clip window**.

</details>

#### 224. The location of the point relative to the boundaries of the clipping rectangle is called \_\_\_\_\_\_code.

1. Location.
2. Binary
3. Region
4. Area

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Region.

**Explanation:**

* The location of the point relative to the boundaries of the clipping rectangle is called the **region code**.

</details>

#### 225. The region code of the clipping rectangle is \_\_\_\_\_\_.

1.
   1.
2. 0001
3. 1000
4. 1111

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 0000.

**Explanation:**

* The region code of the clipping rectangle is **0000**.

</details>

#### 226. A region code is a \_\_\_\_\_\_ digit binary code.

1. 16
2. 8
3. 4
4. 2

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 4.

**Explanation:**

* A region code is a **4-digit binary code**.

</details>

#### 227. All-or none \_\_\_\_\_\_ strategy is used to keep all of the string inside a clip window.

1. Word clipping.
2. Character clipping
3. Object clipping
4. String clipping

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Character clipping.

**Explanation:**

* The **all-or-none character clipping** strategy is used to keep all of the string inside a clip window.

</details>

#### 228. The picture parts to be saved are those that are outside the region is referred as \_\_\_\_\_\_clipping.

1. Outside.
2. Exterior
3. External
4. Extreme

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Outside.

**Explanation:**

* The picture parts to be saved are those that are outside the region, referred to as **outside clipping**.

</details>

#### 229. \_\_\_\_\_\_ are used to describe interior properties by partitioning the spatial region containing an object into a set of small, non-overlapping contiguous solids.

1. Surface rendering.
2. Surface identifications.
3. Space partitioning representation
4. Boundary representations.

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Space partitioning representation.

**Explanation:**

* **Space partitioning representations** are used to describe interior properties by partitioning the spatial region containing an object into a set of small, non-overlapping contiguous solids.

</details>

#### 230. \_\_\_\_\_\_ generally refers to any time sequence of visual changes in a scene.

1. Computer animation.
2. Visualization
3. Graphics
4. Frame work

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Computer animation.

**Explanation:**

* **Computer animation** generally refers to any time sequence of visual changes in a scene.

</details>

#### 231. Analogy with two-dimensional polar co-ordinates the dimensions unit for solid angles is called the \_\_\_\_\_\_.

1. Steradian.
2. Angle
3. Solid angle.
4. Co-ordinates.

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Steradian.

**Explanation:**

* The unit for solid angles is called the **steradian**.
*   A solid angle is defined as:

    $$
    \Omega = \frac{A}{r^2}
    $$

    where:

    * $$\Omega$$ = solid angle in steradians,
    * $$A$$ = surface area of the sphere,
    * $$r$$ = radius of the sphere.

</details>

#### 232. A \_\_\_\_\_\_ model is a method for explaining the properties or behavior of color within some particular control.

1. Single color model
2. Color
3. Light color
4. Spectral color

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Color.

**Explanation:**

* A **color model** is a method for explaining the properties or behavior of color within some particular control.

</details>

#### 233. The dominant frequency is also called as the \_\_\_\_\_\_.

1. Hue.
2. Color
3. Frequency
4. Wavelength

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Hue.

**Explanation:**

* The dominant frequency is also called the **hue**.
*   Hue is related to the wavelength of light:

    $$
    \lambda = \frac{c}{f}
    $$

    where:

    * $$\lambda$$ = wavelength,
    * $$c$$ = speed of light,
    * $$f$$ = frequency.

</details>

#### 234. The term \_\_\_\_\_\_ is used to refer collectively to two properties describing color characteristics: purity and dominant frequency.

1. White light source.
2. Purity
3. Chromaticity
4. Saturation

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Chromaticity.

**Explanation:**

* The term **chromaticity** refers to the combination of two properties:
  * **Purity**: How saturated or vivid a color is.
  * **Dominant frequency**: The wavelength of light that determines the color.
* Chromaticity is often represented in a **chromaticity diagram**, which maps colors based on their hue and saturation.

</details>

#### 235. \_\_\_\_\_\_ are the most commonly used boundary representation for a 3D graphics object.

1. Data polygon
2. System polygon
3. Surface polygon
4. Area polygon

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Surface polygon.

**Explanation:**

* **Surface polygons** are the most commonly used boundary representation for 3D graphics objects.
* A polygon is a 2D shape defined by vertices and edges.
* In 3D graphics, surfaces are often approximated using polygons (e.g., triangles or quadrilaterals).
*   The area of a polygon can be calculated using:

    $$
    A = \frac{1}{2} \left| \sum_{i=1}^{n} (x_i y_{i+1} - x_{i+1} y_i) \right|
    $$

    where:

    * $$(x_i, y_i)$$ are the coordinates of the polygon's vertices.

</details>

#### 236. A three-dimensional object can also be represented using \_\_\_\_\_\_.

1. Method
2. Equation
3. Point
4. Line

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Equation.

**Explanation:**

* A three-dimensional object can be represented using **equations**.
* For example:
  *   A sphere can be represented by:

      $$
      (x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 = r^2
      $$

      where:

      * $$(x_0, y_0, z_0)$$ is the center of the sphere,
      * $$r$$ is the radius.
  *   A plane can be represented by:

      $$
      ax + by + cz + d = 0
      $$

      where:

      * $$a, b, c$$ are the coefficients,
      * $$d$$ is the constant term.

</details>

#### 237. \_\_\_\_\_\_ is a simple object space algorithm that removes about half of the total polygons in an image as about half of the faces of objects are back faces.

1. Wire frame model
2. Constructive solid geometry methods
3. Isometric projection
4. Back face removal

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Back face removal.

**Explanation:**

* **Back face removal** is a simple object space algorithm.
* It removes polygons that are not visible because they are facing away from the viewer.
*   This is based on the **dot product** of the surface normal and the view vector:

    $$
    \text{If } \mathbf{N} \cdot \mathbf{V} > 0, \text{ the face is visible.}
    $$

    where:

    * $$\mathbf{N}$$ is the surface normal,
    * $$\mathbf{V}$$ is the view vector.

</details>

#### 238. By which, we can take a view of an object from different directions and different distances.

1. Projection
2. Translation
3. Rotation
4. Scaling

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Projection.

**Explanation:**

* **Projection** allows us to take a view of an object from different directions and distances.
* There are two main types of projection:
  * **Perspective projection**: Objects farther away appear smaller.
  * **Orthographic projection**: Objects retain their size regardless of distance.
*   The perspective projection formula is:

    $$
    x_p = \frac{x}{z}, \quad y_p = \frac{y}{z}
    $$

    where:

    * $$(x, y, z)$$ are the 3D coordinates,
    * $$(x_p, y_p)$$ are the projected 2D coordinates.

</details>

#### 239. The projection that can be viewed as the projection that has a center of projection at a finite distance from the plane of projection is called \_\_\_\_\_\_.

1. Parallel projection
2. Isometric projection
3. Perspective projection
4. Geometric projection

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Perspective projection.

**Explanation:**

* **Perspective projection** has a center of projection at a finite distance from the plane of projection.
* This creates a realistic view where objects farther away appear smaller.
*   The formula for perspective projection is:

    $$
    x_p = \frac{x}{z}, \quad y_p = \frac{y}{z}
    $$

    where:

    * $$(x, y, z)$$ are the 3D coordinates,
    * $$(x_p, y_p)$$ are the projected 2D coordinates.

</details>

#### 240. The surfaces that are blocked or hidden from view in a 3D scene are known as \_\_\_\_\_\_.

1. Hidden surface
2. Quad tree
3. Frame buffer
4. Area buffer

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Hidden surface.

**Explanation:**

* **Hidden surfaces** are surfaces that are blocked or hidden from view in a 3D scene.
* Hidden surface removal algorithms are used to determine which surfaces are visible.
* Common algorithms include:
  * **Z-buffer algorithm**,
  * **Painter's algorithm**,
  * **Ray tracing**.

</details>

#### 241. \_\_\_\_\_\_ surface algorithm is based on perspective depth.

1. Depth comparison
2. Z-buffer or depth-buffer algorithm
3. Subdivision method
4. Back-face removal

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Z-buffer or depth-buffer algorithm.

**Explanation:**

* The **Z-buffer algorithm** is based on perspective depth.
* It uses a **depth buffer** to store the depth (z-value) of each pixel.
*   The algorithm compares the depth of each new pixel with the depth stored in the buffer:

    $$
    \text{If } z_{\text{new}} < z_{\text{buffer}}, \text{ update the pixel and depth buffer.}
    $$

</details>

#### 242. In \_\_\_\_\_\_ year, the Z-buffer algorithm was described.

1. 1995
2. 1974
3. 1945
4. 1981

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 1974.

**Explanation:**

* The **Z-buffer algorithm** was described in **1974**.
* It is one of the simplest and most widely used algorithms for hidden surface removal.

</details>

#### 243. Z-buffer algorithm is \_\_\_\_\_\_.

1. Simplest algorithm
2. Largest algorithm
3. Complex algorithm
4. Poor algorithm

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Simplest algorithm.

**Explanation:**

* The **Z-buffer algorithm** is the **simplest algorithm** for hidden surface removal.
* It is easy to implement and works well for most 3D rendering tasks.

</details>

#### 244. The painter algorithm is based on the property of \_\_\_\_\_\_.

1. Polygon buffer
2. Depth buffer
3. Frame buffer
4. Area buffer

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Frame buffer.

**Explanation:**

* The **painter algorithm** is based on the property of the **frame buffer**.
* It works by drawing objects from back to front, similar to how a painter paints a scene.
* Objects are sorted by their depth, and the frame buffer is updated accordingly.

</details>

#### 245. \_\_\_\_\_\_ type of projection does not have the projection rays parallel to each other.

1. Axonometric projection
2. Orthographic projection
3. Oblique projection
4. Perspective projection

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Perspective projection.

**Explanation:**

* **Perspective projection** does not have the projection rays parallel to each other.
* Instead, the rays converge at a single point (the center of projection).
* This creates a realistic view where objects farther away appear smaller.

</details>

#### 246. \_\_\_\_\_\_ are the three principal planes in orthographic projection.

1. Front, top, profile
2. Top, front, right side
3. Back, top, profile
4. Frontal, horizontal, profile

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Frontal, horizontal, profile.

**Explanation:**

* The three principal planes in orthographic projection are:
  * **Frontal plane**,
  * **Horizontal plane**,
  * **Profile plane**.
* These planes are used to create 2D views of a 3D object.

</details>

#### 247. The painter algorithm was developed in \_\_\_\_\_\_.

1. 1972 by Newell
2. 1974 by Catmull
3. 1972 by Evans
4. 1976 by Evans

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 1972 by Newell.

**Explanation:**

* The **painter algorithm** was developed in **1972 by Newell**.
* It is one of the earliest algorithms for hidden surface removal.

</details>

#### 248. All the hidden surface algorithms employ image space approach except \_\_\_\_\_\_.

1. Back face removal
2. Scan line method
3. Depth buffer method
4. Depth sort method

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Back face removal.

**Explanation:**

* All hidden surface algorithms employ an **image space approach** except **back face removal**.
* Back face removal is an **object space algorithm**.

</details>

#### 249. \_\_\_\_\_\_ are the two types of projections that give a pictorial view of the object without convergence.

1. Orthographic and perspective
2. Perspective and oblique
3. Oblique and axonometric
4. Isometric and orthographic

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Oblique and axonometric.

**Explanation:**

* **Oblique and axonometric projections** give a pictorial view of the object without convergence.
* These projections are often used in technical drawings.

</details>

#### 250. The name of a visible surface detection algorithm is \_\_\_\_\_\_.

1. Back face detection
2. Ray tracing
3. Back face removal
4. Area tracing

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Back face removal.

**Explanation:**

* The name of a visible surface detection algorithm is **back face removal**.
* It removes polygons that are not visible because they are facing away from the viewer.

</details>
