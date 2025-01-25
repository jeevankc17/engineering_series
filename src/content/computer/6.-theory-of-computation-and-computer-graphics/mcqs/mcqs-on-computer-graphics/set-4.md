# set-4

#### 151. \_\_\_\_\_\_ is a rigid body transformation that moves objects without deformation.

1. Rotation.
2. Scaling
3. Translation
4. Transformation

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Translation.

**Explanation:**

* **Translation** is a rigid body transformation that moves objects without deformation.
*   In mathematical terms, translation can be represented as:

    $$
    \begin{pmatrix}
    x' \\
    y' \\
    z'
    \end{pmatrix}
    =
    \begin{pmatrix}
    x \\
    y \\
    z
    \end{pmatrix}
    +
    \begin{pmatrix}
    t_x \\
    t_y \\
    t_z
    \end{pmatrix}
    $$

    where $$(t_x, t_y, t_z)$$ are the translation distances along the x, y, and z axes, respectively.

</details>

#### 152. A two dimensional \_\_\_\_\_\_ is applied to an object by repositioning it along a circular path in the xy plane.

1. Rotation.
2. Scaling
3. Translation
4. Transformation

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Rotation.

**Explanation:**

* **Rotation** is a transformation that repositions an object along a circular path in the xy plane.
*   The rotation of a point $$(x, y)$$ by an angle $$\theta$$ can be represented as:

    $$
    \begin{pmatrix}
    x' \\
    y'
    \end{pmatrix}
    =
    \begin{pmatrix}
    \cos\theta & -\sin\theta \\
    \sin\theta & \cos\theta
    \end{pmatrix}
    \begin{pmatrix}
    x \\
    y
    \end{pmatrix}
    $$

</details>

#### 153. Successive scaling operations are \_\_\_\_\_\_.

1. Additive
2. Subtractive
3. Multiplicative
4. Infinite

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Multiplicative.

**Explanation:**

* **Successive scaling operations** are multiplicative because each scaling transformation is applied by multiplying the current coordinates by a scaling matrix.
*   For example, scaling a point $$(x, y)$$ by factors $$(s_x, s_y)$$ can be represented as:

    $$
    \begin{pmatrix}
    x' \\
    y'
    \end{pmatrix}
    =
    \begin{pmatrix}
    s_x & 0 \\
    0 & s_y
    \end{pmatrix}
    \begin{pmatrix}
    x \\
    y
    \end{pmatrix}
    $$

</details>

#### 154. A rigid body change in coordinate positions is referred to as \_\_\_\_\_\_ transformation.

1. Rigid body
2. .Rigid
3. Rigid motion
4. Rigid changing

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Rigid motion.

**Explanation:**

* **Rigid motion** refers to a transformation that changes the coordinate positions of an object without altering its shape or size.
* This includes translations and rotations, which preserve distances between points.

</details>

#### 155. \_\_\_\_\_\_ often involve inverse matrix calculations.

1. Matrix transformation.
2. Composite transformation.
3. Finite transformation matrix.
4. Infinite transformation matrix.

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Composite transformation.

**Explanation:**

* **Composite transformations** often involve inverse matrix calculations because they combine multiple transformations, and sometimes it is necessary to reverse one or more of these transformations.
* For example, if you have a transformation matrix $$T$$, its inverse $$T^{-1}$$ can be used to undo the transformation.

</details>

#### 156. \_\_\_\_\_\_ is a transformation that produces a mirror image of an object.

1. Shape.
2. Vector
3. Scalar
4. Reflection

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Reflection.

**Explanation:**

* **Reflection** is a transformation that produces a mirror image of an object.
*   For example, reflecting a point $$(x, y)$$ across the x-axis can be represented as:

    $$
    \begin{pmatrix}
    x' \\
    y'
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 0 \\
    0 & -1
    \end{pmatrix}
    \begin{pmatrix}
    x \\
    y
    \end{pmatrix}
    $$

</details>

#### 157. When objects are to be displayed with color or shaded surfaces we apply \_\_\_\_\_\_.

1. Object rendering.
2. View rendering
3. Surface rendering
4. Parameter rendering

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Surface rendering.

**Explanation:**

* **Surface rendering** is used to display objects with color or shaded surfaces.
* This involves calculating the interaction of light with the object's surface to determine its appearance.

</details>

#### 158. \_\_\_\_\_\_ include the intensity and positions of light sources and general background illumination required for a scene.

1. Object rendering.
2. Viewing specifications.
3. Surface rendering
4. Lighting specifications

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Lighting specifications.

**Explanation:**

* **Lighting specifications** include the intensity and positions of light sources and general background illumination required for a scene.
* These specifications are crucial for realistic rendering of objects in a scene.

</details>

#### 159. In surface rendering procedures can then be applied to generate at the correct illumination and \_\_\_\_\_\_ of the scene.

1. Viewing specifications.
2. Contrast
3. Color
4. Shadow regions.

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Shadow regions.

**Explanation:**

* In **surface rendering**, procedures are applied to generate the correct illumination and shadow regions of the scene.
* Shadows are created by determining which parts of the scene are occluded from light sources.

</details>

#### 160. Objects displayed with \_\_\_\_\_\_, so that the intensity of lines decreases from the front to the back of the object.

1. Depth cueing
2. Parallel projection.
3. Perpendicular projection.
4. Perspective projection.

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Depth cueing.

**Explanation:**

* **Depth cueing** is a technique where the intensity of lines decreases from the front to the back of the object, giving a sense of depth.
* This helps in perceiving the relative distances of objects in a scene.

</details>

#### 161. \_\_\_\_\_\_ removes the part of the visible surfaces to show internal structure.

1. Surface rendering.
2. Surface identification.
3. Cutaway view.
4. Exploded view.

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Cutaway view.

**Explanation:**

* A **cutaway view** removes part of the visible surfaces to show the internal structure of an object.
* This is commonly used in technical drawings and illustrations.

</details>

#### 162. Three dimensional views can be obtained by \_\_\_\_\_\_ a raster scan image from a vibrating flexible mirror.

1. Reflecting.
2. Observing
3. Refracting
4. Deflecting

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Reflecting.

**Explanation:**

* **Reflecting** a raster scan image from a vibrating flexible mirror can produce three-dimensional views.
* This technique is used in some types of 3D displays.

</details>

#### 163. Stereoscopic devices present \_\_\_\_\_\_ views of the scene.

1. 1
2. 2
3. 3
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 2.

**Explanation:**

* **Stereoscopic devices** present two views of the scene, one for each eye, to create a 3D effect.
* This mimics the way human eyes perceive depth.

</details>

#### 164. The mirror image for a two dimensional reflection is generated relative to an \_\_\_\_\_\_ by rotation the object 180 degrees about the reflection axis.

1. Axis of refraction.
2. Axis of reflection.
3. Axis of restoration.
4. Axis of deflection

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Axis of reflection.

**Explanation:**

* The **mirror image** for a two-dimensional reflection is generated relative to an **axis of reflection** by rotating the object 180 degrees about this axis.
*   Mathematically, this can be represented as:

    $$
    \begin{pmatrix}
    x' \\
    y'
    \end{pmatrix}
    =
    \begin{pmatrix}
    \cos(180^\circ) & -\sin(180^\circ) \\
    \sin(180^\circ) & \cos(180^\circ)
    \end{pmatrix}
    \begin{pmatrix}
    x \\
    y
    \end{pmatrix}
    $$

</details>

#### 165. The mirror image for a two dimensional reflection is generated relative to an axis of reflection by rotation the object \_\_\_\_\_\_ degrees about the reflection axis.

1.
   90.
2. 180
3. 270
4. 360

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 180.

**Explanation:**

* The **mirror image** for a two-dimensional reflection is generated by rotating the object **180 degrees** about the reflection axis.
* This rotation effectively flips the object across the axis.

</details>

#### 166. \_\_\_\_\_\_ transformations can be used to modify object shape.

1. Translation.
2. Shear
3. Reflection
4. Scaling

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Shear.

**Explanation:**

* **Shear transformations** can be used to modify the shape of an object by slanting it along one or more axes.
*   For example, a shear transformation along the x-axis can be represented as:

    $$
    \begin{pmatrix}
    x' \\
    y'
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & sh_x \\
    0 & 1
    \end{pmatrix}
    \begin{pmatrix}
    x \\
    y
    \end{pmatrix}
    $$

    where $$sh_x$$ is the shear factor.

</details>

#### 167. \_\_\_\_\_\_ can be assigned as shear parameter.

1. Integer.
2. Random Number.
3. Real Number
4. Floating Point.

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Real Number.

**Explanation:**

* **Real numbers** can be assigned as shear parameters because shear transformations can involve any real-valued factor.
* This allows for precise control over the degree of shearing.

</details>

#### 168. Translation, rotation, scaling, reflection are examples of \_\_\_\_\_\_.

1. Point plotting.
2. Graphics
3. Image transformation.
4. 2D transformation

<details>

<summary>Show me the answer</summary>

**Answer:** 4. 2D transformation.

**Explanation:**

* **Translation, rotation, scaling, and reflection** are examples of **2D transformations**.
* These transformations are fundamental in computer graphics for manipulating objects in a two-dimensional space.

</details>

#### 169. Which table can be expanded so that vertices are cross referenced to corresponding edges?

1. Vertex table.
2. Edge table.
3. Polygon table.
4. Expanded vertex table.

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Vertex table.

**Explanation:**

* The **vertex table** can be expanded so that vertices are cross-referenced to corresponding edges.
* This helps in efficiently storing and retrieving geometric data.

</details>

#### 170. Every vertex is the end point for at least \_\_\_\_\_\_ edge.

1. 1
2. 2
3. 3
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 2.

**Explanation:**

* Every **vertex** is the endpoint for at least **two edges**.
* This is because a vertex is typically shared between two edges in a polygonal mesh.

</details>

#### 171. Each polygon has at least \_\_\_\_\_\_ shared edge

1. 1
2. 2
3. 3
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 1.

**Explanation:**

* Each **polygon** has at least **one shared edge**.
* This is because polygons are typically connected to other polygons in a mesh.

</details>

#### 172. \_\_\_\_\_\_ can be constructed with various combination of plane and curved surfaces.

1. Objects.
2. Surface
3. Object boundaries.
4. Surface boundaries

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Object boundaries.

**Explanation:**

* **Object boundaries** can be constructed with various combinations of plane and curved surfaces.
* This allows for the creation of complex 3D models.

</details>

#### 173. Graphics package often provide routines for displaying internal components or \_\_\_\_\_\_ view of solid objects.

1. Cross sectional.
2. Cross fill.
3. Hatch fill.
4. Solid fill.

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Cross sectional.

**Explanation:**

* **Graphics packages** often provide routines for displaying internal components or **cross-sectional views** of solid objects.
* This is useful for visualizing the internal structure of objects.

</details>

#### 174. \_\_\_\_\_\_ rendering algorithms must be applied if a realistic rendering of the scene is required.

1. Object.
2. Surface
3. View
4. Parameter

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Surface.

**Explanation:**

* **Surface rendering algorithms** must be applied if a realistic rendering of the scene is required.
* These algorithms simulate the interaction of light with surfaces to produce realistic images.

</details>

#### 175. The coordinate reference defines the \_\_\_\_\_\_ for the plane of the camera film.

1. Plane and surface.
2. Position and interface.
3. Plane and coordinate.
4. Position and orientation

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Position and orientation.

**Explanation:**

* The **coordinate reference** defines the **position and orientation** for the plane of the camera film.
* This is crucial for determining how the scene is projected onto the film.

</details>

#### 176. The easiest rotation axes to handle are those that are \_\_\_\_\_\_ to the coordinate.

1. Parallel.
2. Straight
3. Perpendicular
4. Opposite

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Parallel.

**Explanation:**

* The easiest **rotation axes** to handle are those that are **parallel** to the coordinate axes.
* This simplifies the rotation transformation because it aligns with the standard coordinate system.

</details>

#### 177. \_\_\_\_\_\_ transformations can be used to modify object shape.

1. Translation.
2. Shear
3. Reflection
4. Scaling

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Shear.

**Explanation:**

* **Shear transformations** can be used to modify the shape of an object by slanting it along one or more axes.
* This is useful for creating effects like slanting or skewing.

</details>

#### 178. The line joining the red and the violet spectral points, called as \_\_\_\_\_\_ line.

1. Violet line.
2. Magenta line
3. Red line.
4. Purple line.

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Purple line.

**Explanation:**

* The line joining the **red and violet spectral points** is called the **purple line**.
* This line represents the transition between the red and violet ends of the visible spectrum.

</details>

#### 179. Different tints are produced by adding \_\_\_\_\_\_ pigment to the original color.

1. Red.
2. Blue
3. Black
4. White

<details>

<summary>Show me the answer</summary>

**Answer:** 4. White.

**Explanation:**

* **Different tints** are produced by adding **white pigment** to the original color.
* This lightens the color, creating a tint.

</details>

#### 180. GKS stands for \_\_\_\_\_\_.

1. Graphical kernel system.
2. Graphics kernel symbol.
3. Graphics kernel system.
4. Graphics kernel systems.

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Graphical kernel system.

**Explanation:**

* **GKS** stands for **Graphical Kernel System**.
* It is a standard for 2D graphics programming.

</details>

#### 181. Visual pigment red have a peak sensitivity at wavelength of about \_\_\_\_\_\_ nm.

1.
   740.
2. 630
3. 530
4. 450

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 630.

**Explanation:**

* **Visual pigment red** has a peak sensitivity at a wavelength of about **630 nm**.
* This is within the red part of the visible spectrum.

</details>

#### 182. The dominant frequency is also called as \_\_\_\_\_\_.

1. Saturation.
2. Hue
3. Luminance
4. Brightness

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Hue.

**Explanation:**

* The **dominant frequency** is also called **hue**.
* Hue represents the color itself, such as red, green, or blue.

</details>

#### 183. Data glove is used to grasp \_\_\_\_\_\_ object.

1. Binary.
2. Virtual
3. Existing
4. Real

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Virtual.

**Explanation:**

* A **data glove** is used to grasp **virtual objects**.
* It is commonly used in virtual reality environments.

</details>

#### 184. Space partitioning representation is to describe interior properties by partitioning the spatial region containing an object into a set of small, non-overlapping contiguous \_\_\_\_\_\_.

1. Objects.
2. Solids
3. Triangles
4. Liquid

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Solids.

**Explanation:**

* **Space partitioning representation** describes interior properties by partitioning the spatial region containing an object into a set of small, non-overlapping contiguous **solids**.
* This is useful for representing complex 3D objects.

</details>

#### 185. \_\_\_\_\_\_ for a three dimensional graphics object is a set of surface polygons that enclose the object interior.

1. Surface rendering.
2. Surface identification.
3. Space partitioning representations.
4. Boundary representations.

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Boundary representations.

**Explanation:**

* **Boundary representations** for a three-dimensional graphics object are a set of surface polygons that enclose the object interior.
* This is a common way to represent 3D objects in computer graphics.

</details>

#### 186. A polygon mesh approximation to a curved surface can be improved by dividing the surface into smaller \_\_\_\_\_\_.

1. Polygon facets.
2. Squares
3. Octagon facets.
4. Circles

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Polygon facets.

**Explanation:**

* A **polygon mesh approximation** to a curved surface can be improved by dividing the surface into smaller **polygon facets**.
* This increases the resolution and accuracy of the approximation.

</details>

#### 187. A way of storing \_\_\_\_\_\_ is to create lists namely vertex table, edge table and polygon table.

1. Convergence data.
2. Polygon surface table.
3. Storage table.
4. Geometric data.

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Geometric data.

**Explanation:**

* A way of storing **geometric data** is to create lists, namely **vertex table, edge table, and polygon table**.
* These tables help in efficiently storing and retrieving the geometric properties of objects.

</details>

#### 188. The edge table contains pointers back to the \_\_\_\_\_\_ to identify vertices for each polygon edge.

1. Vertex table.
2. Edge table.
3. Polygon table.
4. Expanded vertex table.

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Vertex table.

**Explanation:**

* The **edge table** contains pointers back to the **vertex table** to identify vertices for each polygon edge.
* This helps in maintaining the connectivity between vertices and edges.

</details>

#### 189. In a \_\_\_\_\_\_ parallel lines in the world coordinate scene project into parallel lines on the two dimensional display plane.

1. Plane projection.
2. Parallel projection.
3. Perpendicular projection.
4. Perspective projection.

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Parallel projection.

**Explanation:**

* In a **parallel projection**, parallel lines in the world coordinate scene project into parallel lines on the two-dimensional display plane.
* This type of projection preserves parallelism and is commonly used in technical drawings.

</details>

#### 190. In \_\_\_\_\_\_, parallel lines in the scene that are not parallel to the display plane are projected into converging lines.

1. Plane projection.
2. Parallel projection
3. Perpendicular projection
4. Perspective projection.

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Perspective projection.

**Explanation:**

* In **perspective projection**, parallel lines in the scene that are not parallel to the display plane are projected into converging lines.
* This creates a sense of depth and realism in the rendered image.

</details>

#### 191. \_\_\_\_\_\_ is applied by choosing maximum and minimum intensity values and a range of distances over which the intensities are to vary.

1. Depth cueing.
2. Parallel projection.
3. Perpendicular projection.
4. Perspective projection.

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Depth cueing.

**Explanation:**

* **Depth cueing** is applied by choosing maximum and minimum intensity values and a range of distances over which the intensities are to vary.
* This technique helps in perceiving the depth of objects in a scene.

</details>

#### 192. The side of the plane that faces the \_\_\_\_\_\_ is called the inside face.

1. Object exterior.
2. Object
3. Object interior
4. Solid

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Object interior.

**Explanation:**

* The side of the plane that faces the **object interior** is called the **inside face**.
* This is important for determining the orientation of surfaces in 3D models.

</details>

#### 193. The side of the plane that faces the \_\_\_\_\_\_ is called the outward face.

1. Object exterior.
2. Object
3. Object interior.
4. Solid

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Object exterior.

**Explanation:**

* The side of the plane that faces the **object exterior** is called the **outward face**.
* This is important for determining the visibility of surfaces in 3D rendering.

</details>

#### 194. When polygons are specified with more than \_\_\_\_\_\_ vertices, it is possible that the vertices may not all lie in one plane.

1. 3
2. 2
3. 1
4. 0

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 3.

**Explanation:**

* When polygons are specified with more than **three vertices**, it is possible that the vertices may not all lie in one plane.
* This can lead to issues in rendering and shading.

</details>

#### 195. \_\_\_\_\_\_ is the number of control points in a Beizer curves.

1. Polynomial.
2. Beizer polynomial
3. Curve polynomial.
4. Beizer integer.

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Beizer polynomial.

**Explanation:**

* The number of **control points** in a **Bezier curve** is called the **Bezier polynomial**.
* The degree of the polynomial is one less than the number of control points.

</details>

#### 196. Natural objects can be realistically described with \_\_\_\_\_\_.

1. Natural geometry.
2. Fractal geometry.
3. Similarity geometry.
4. Euclidean geometry.

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Fractal geometry.

**Explanation:**

* **Natural objects** can be realistically described with **fractal geometry**.
* Fractals are used to model complex natural shapes like mountains, clouds, and coastlines.

</details>

#### 197. The representation of the amount of variation in object detail is represented with \_\_\_\_\_\_.

1. Fractal geometry.
2. Fractal definition.
3. Fractal dimension
4. Fractal generation.

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Fractal dimension.

**Explanation:**

* The representation of the amount of variation in object detail is represented with **fractal dimension**.
* Fractal dimension quantifies the complexity of a fractal shape.

</details>

#### 198. In depth cueing the lines farther are displayed with \_\_\_\_\_\_.

1. Increasing intensity.
2. Increasing color.
3. Decreasing intensity
4. Decreasing color.

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Decreasing intensity.

**Explanation:**

* In **depth cueing**, the lines farther away are displayed with **decreasing intensity**.
* This helps in perceiving the relative distances of objects in a scene.

</details>

#### 199. A technique commonly used for engineering drawing is to display the non-visible lines as \_\_\_\_\_\_ lines.

1. Straight.
2. Dot
3. Curved
4. Dashed

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Dashed.

**Explanation:**

* A technique commonly used for **engineering drawing** is to display the non-visible lines as **dashed lines**.
* This helps in distinguishing between visible and hidden parts of an object.

</details>

#### 200. \_\_\_\_\_\_ describe a three dimensional object as a set of surfaces that separate the object interior from the environment.

1. Surface rendering.
2. Surface identification.
3. Space partitioning representations.
4. Boundary representations.

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Boundary representations.

**Explanation:**

* **Boundary representations** describe a three-dimensional object as a set of surfaces that separate the object interior from the environment.
* This is a common way to represent 3D objects in computer graphics.

</details>
