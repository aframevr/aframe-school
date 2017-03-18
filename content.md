<!-- Title slide. -->
<!-- .slide: data-background="media/img/aframe.jpg" -->

<div class="talk-title">
  <h1>A-Frame Workshop</h1>
  <h3>An interactive course for WebVR</h3>
  <p class="talk-info">
    <b><a href="https://aframe.io">aframe.io</a></b>
  </p>
</div>

------

<!-- Prologue Slide. -->
<!-- .slide: data-background="http://i.imgur.com/ntpYsma.jpg" -->

## Prologue

1. [Skim through the docs and FAQ](https://aframe.io/docs/)
2. [Get help from peeps on Slack](https://aframe.io/community/#slack)
3. [Ask questions on Stack Overflow](http://stackoverflow.com/questions/ask/?tags=aframe)


<!-- Lessons start below. -->


------

## Set Up a Web Development Environment

> Set up text editor, local server, and ngrok tunnel to get started developing on the Web.

If you're already set up or want to just play with A-Frame using embedded
CodePens, then navigate &rarr;.

[Documentation: Getting Started](https://aframe.io/docs/0.5.0/introduction/getting-started.html)

---

## Get a Text Editor

[Atom](https://atom.io) is a good text editor to start if you don't have one.

<img class="stretch" data-src="https://camo.githubusercontent.com/35abdea0ab280c6b845a2a55e5a75b96dd92e2ce/68747470733a2f2f692e696d6775722e636f6d2f776441496f77722e706e67">

---

## Set Up a Local Server

You'll need a local HTTP server to serve your files to the browser.

<div class="captioned-image-row small">
  <div>
    <img data-src="https://cloud.githubusercontent.com/assets/8731271/24021623/10654d22-0a5f-11e7-9769-63cdff91637c.png">
    <a href="https://www.cesanta.com/products/binary">Mongoose Binary</a>
  </div>
  <div>
    <img data-src="https://www.python.org/static/opengraph-icon-200x200.png">
    <code>python -m SimpleHTTPServer</code>
  </div>
  <div>
    <img data-src="https://www.echosteg.com/images/blog/standard/nodejs_logo.png">
    <a href="https://docs.npmjs.com/getting-started/installing-node">Node + npm + live-server</a>
  </div>
</div>

---

## Set Up ngrok

You'll want [ngrok](https://ngrok.com) to easily tunnel requests from other devices to
your computer's local server.

<img class="stretch" data-src="https://cloud.githubusercontent.com/assets/8731271/24021852/30c39640-0a60-11e7-9e20-78249eb15339.png">

---

## Putting It All Together

1. Start with [an HTML file](https://github.com/aframevr/aframe-boilerplate/blob/master/index.html) called `index.html`
2. Start a local server in the same directory as that file
3. Open the server's localhost URL in a browser
4. Develop the HTML file with your text editor
5. Start ngrok to access from other devices such as smartphones

------

## Try A-Frame Examples

> Try some examples (ideally with a headset) on the [A-Frame
> Homepage](https://aframe.io) and [A-Frame Blog](https://aframe.io/blog/). See
> [webvr.rocks](https://webvr.rocks) for information on setting up WebVR with
> your headset.

<img class="stretch" data-src="https://cloud.githubusercontent.com/assets/674727/24024467/e441beee-0a70-11e7-919a-ad81d63e7a9a.png">

------

## Play with *Hello, WebVR*

> Modify basic meshes through the HTML attributes (e.g., change colors,
> positions, rotations, scale).  Play with the default controls. If you're
> developing in an HTML file, you can copy-and-paste from the CodePen.
> [Documentation](https://aframe.io/docs/master/guides/)

<p data-height="400" data-theme-id="19139" data-slug-hash="BjygdO" data-editable="true" data-default-tab="html,result" data-user="mozvr" data-embed-version="2" data-pen-title="Hello World â A-Frame" class="codepen">See the Pen <a href="http://codepen.io/mozvr/pen/BjygdO/">Hello World â A-Frame</a> by mozvr (<a href="http://codepen.io/mozvr">@mozvr</a>) on <a href="http://codepen.io">CodePen</a>.</p>

---

## Play with *Hello, WebVR* &mdash; Position

> Change the `position` HTML attributes (which are in meters).
> [Documentation](https://aframe.io/docs/master/components/position.html)

1. Move the cylinder left by *decreasing* the `position`'s X value.
2. Move the box up by *increasing * the `position`'s Y value.
3. Move the sphere back by *decreasing* the `position`'s Z value.

[Open CodePen](http://codepen.io/mozvr/pen/BjygdO)  <!-- .element: class="example-btn" -->

<img class="stretch" data-src="https://cloud.githubusercontent.com/assets/674727/24024888/16eafc68-0a74-11e7-9271-08654cc7e139.png">

---

## Play with *Hello, WebVR* &mdash; Rotation

> Change the `rotation` HTML attributes (which are in degrees). Use the
> right-hand rule to spatially visualize rotation.
> [Documentation](https://aframe.io/docs/master/components/rotation.html)

1. Rotate the cylinder around the X axis so we see the bottom.
2. Rotate the box around the Y axis so the box is facing straight.

[Open CodePen](http://codepen.io/mozvr/pen/BjygdO)  <!-- .element: class="example-btn" -->

<img class="stretch" data-src="https://cloud.githubusercontent.com/assets/674727/24025669/0d4bf9dc-0a79-11e7-99df-32628537493a.png">

---

## Play with *Hello, WebVR* &mdash; Add New Primitives

> Add new primitives the scene by adding more HTML elements to `<a-scene>`.
> [Documentation](https://aframe.io/docs/0.5.0/primitives/)

1. Add [`<a-torus-knot>`](https://aframe.io/docs/0.5.0/primitives/a-torus-knot.html).
2. Add [`<a-dodecahedron>`](https://aframe.io/docs/0.5.0/primitives/a-dodecahedron.html).
3. Add [`<a-text>`](https://aframe.io/docs/0.5.0/primitives/a-text.html).

[Open CodePen](http://codepen.io/mozvr/pen/BjygdO)  <!-- .element: class="example-btn" -->

<img class="stretch" data-src="https://cloud.githubusercontent.com/assets/674727/24034590/130644b4-0aaf-11e7-9e18-72469d8fc2cc.png">

------

## Use the A-Frame Inspector

> Open the A-Frame Inspector. Hit `<ctrl> + <alt> + i` on *any* A-Frame scene
> to pop open a visual editor.  Try the Inspector on some of the [homepage
> examples](https://aframe.io/examples/).
> [Documentation](https://aframe.io/docs/master/guides/using-the-aframe-inspector.html)

<img class="stretch" data-src="https://cloud.githubusercontent.com/assets/674727/24028372/9998ad60-0a8b-11e7-93d4-ff134bee05ca.gif">

---

## Use the A-Frame Inspector &mdash; Change Component Values

> Modify an entity by modifying its components. The Inspector knows about all
> A-Frame components, including non-core components.
> [Documentation](https://aframe.io/docs/master/guides/using-the-aframe-inspector.html)

1. Select one of the entities with text in the example.
2. Change the community [`text-geometry` component's](https://github.com/ngokevin/kframe/tree/master/components/text-geometry) `value` property.

[Open Example](http://ngokevin.com/kframe/components/text-geometry/examples/vaporwave/)  <!-- .element: class="example-btn" -->

<img class="stretch" data-src="https://cloud.githubusercontent.com/assets/674727/24028481/a55e0b62-0a8c-11e7-80dc-e4b391198446.png">

---

## Use the A-Frame Inspector &mdash; Attach Components from the Registry

> Use [physics
components](https://github.com/donmccurdy/aframe-physics-system) from the
[Registry](https://aframe.io/registry/) to add gravity and collisions.
> The Registry is a curated collection of A-Frame components. And the Inspector
> is hooked up to the Registry so we can add components from the Registry in
> the entity panel.
> [Documentation](https://aframe.io/docs/master/guides/using-the-aframe-inspector.html)

1. Add the `static-body` component to ground grid.
2. Add the `dynamic-body` component to the torus knot (the purple pretzel in the back).
3. Increase the Y-position of the torus knot to make it higher up.

[Open Example](http://ngokevin.com/kframe/components/text-geometry/examples/vaporwave/)  <!-- .element: class="example-btn" -->

<img class="stretch" data-src="https://cloud.githubusercontent.com/assets/674727/24028803/2e873d6c-0a8f-11e7-8e20-b47380b455b0.gif">

------

## Understand Entity-Component

> Explore the entity-component pattern of A-Frame rather than using the wrapper
> primitives (e.g., `<a-box>`). [Documentation](https://aframe.io/docs/0.5.0/core/)

*Hello, WebVR* example with all the [A-Frame primitive
elements](https://aframe.io/docs/0.5.0/primitives/) represented as
`<a-entity>`s and decomposed to their fundamental components, including
[geometry](https://aframe.io/docs/0.5.0/components/geometry.html) and
[material](https://aframe.io/docs/0.5.0/components/material.html):

<p data-height="400" data-theme-id="19139" data-slug-hash="QpOXNM" data-default-tab="html,result" data-user="mozvr" data-embed-version="2" data-pen-title="Decomposing Primitives â A-Frame" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/mozvr/pen/QpOXNM/">Decomposing Primitives â A-Frame</a> by mozillavr (<a href="http://codepen.io/mozvr">@mozvr</a>) on <a href="http://codepen.io">CodePen</a>.</p>

---

## Understand Entity-Component &mdash; Add a Light Source Sphere

> Use the entity-component pattern to add a sphere that also acts as a point
> light source. Mix together the geometry, material, and light components to
> compose this type of object.
>
> `<a-entity>` +
> [geometry](https://aframe.io/docs/0.5.0/components/geometry.html) +
> [material](https://aframe.io/docs/0.5.0/components/material.html) +
> [light](https://aframe.io/docs/0.5.0/components/light.html) = light source sphere.

[Open CodePen](http://codepen.io/mozvr/pen/gmoYWJ)  <!-- .element: class="example-btn" -->

<img class="stretch" data-src="https://cloud.githubusercontent.com/assets/674727/24060160/2c53a604-0b0f-11e7-9386-f83a3a9b4cfc.gif">>

<!-- NOTES -->

### Solution

```html
<a-entity geometry="primitive: sphere; radius: 0.2" material="shader: flat" light="type: point; color: #FFF" position="-4 3 -4">
  <a-animation attribute="position" to="4 2.8 -4" direction="alternate" repeat="indefinite"></a-animation>
</a-entity>
```

---

## Understand Entity-Component &mdash; From the Registry

> Include community components (e.g.,
> [animation](https://www.npmjs.com/package/aframe-animation-component),
> [particle-system](https://www.npmjs.com/package/aframe-particle-system-component),
> [rain](https://www.npmjs.com/package/aframe-rain)) from the [A-Frame
> Registry](https://aframe.io/registry/) via a `<script>` tag and use them from
> HTML. [Documentation](https://github.com/aframevr/aframe-registry#usage)

<p data-height="400" data-theme-id="19139" data-slug-hash="yMpyJr" data-default-tab="html,result" data-user="mozvr" data-embed-version="2" data-pen-title="Using the Registry â A-Frame Workshop" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/mozvr/pen/yMpyJr/">Using the Registry â A-Frame Workshop</a> by mozillavr (<a href="http://codepen.io/mozvr">@mozvr</a>) on <a href="http://codepen.io">CodePen</a>.</p>

------

## Code with JavaScript

> Use JavaScript and DOM APIs to programmatically modify the scene and its
> entities. A-Frame is not just HTML; A-Frame provides access to JavaScript,
> DOM APIs, and three.js underneath for full control.
> [Documentation](https://aframe.io/docs/0.5.0/guides/using-javascript-and-dom-apis.html)

In the following examples, open the CodePen, and work inside the **JavaScript**
panel rather than the **HTML** panel. If you are working from a local HTML
file, use the [browser's Developer Tools
Console](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)
as a playground.

<img class="stretch" data-src="https://cloud.githubusercontent.com/assets/674727/24063890/cfe5c158-0b1e-11e7-85f8-c6e57145905b.png">

---

## Code with JavaScript &mdash; Getting Entities

> Use
> [`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
> and
> [`document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
> to get a reference to the scene and its entities.
> [Documentation](https://aframe.io/docs/0.5.0/guides/using-javascript-and-dom-apis.html#getting-entities-by-querying-and-traversing)

[Open CodePen](http://codepen.io/mozvr/pen/QpOXNM)  <!-- .element: class="example-btn" -->

1. Get a reference to the `<a-scene>` element using `var sceneEl = document.querySelector('a-scene');`.
2. Get a reference to all `<a-entity>` elements using `sceneEl.querySelectorAll('a-entity');`.
3. Get a reference to the box entity using `sceneEl.querySelector('#box');`.
4. Get a reference to the sphere and cylinder entities in one `.querySelectorAll()` call by using multi-element selector.
5. Get a reference to the sphere and cylinder entities in one `.querySelectorAll()` call by adding and selecting HTML classes.

---

## Code with JavaScript &mdash; Modifying Entities

> Use
> [`Entity.setAttribute()`](https://aframe.io/docs/0.5.0/core/entity.html#setattribute-attr-value-componentattrvalue)
> to modify entities after retrieving them from the previous exercise. [Documentation](https://aframe.io/docs/0.5.0/guides/using-javascript-and-dom-apis.html#modifying-an-entity)

[Open CodePen](http://codepen.io/mozvr/pen/QpOXNM)  <!-- .element: class="example-btn" -->

1. Change the box entity's `rotation` component.
2. Change the cylinder entity's `geometry` component's `height` property.
3. Change the sphere entity's `material` component's `metalness` property.
4. Change the directional light entity's `light` component's `color` property.
  **Clue:** Note that if lights are not defined in HTML, A-Frame will inject
  default light entities.

---

## Code with JavaScript &mdash; Creating Entities

> Use
> [`document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
> to modify entities after retrieving them from the previous exercise. [Documentation](https://aframe.io/docs/0.5.0/guides/using-javascript-and-dom-apis.html#creating-an-entity-with-createelement)

[Open CodePen](http://codepen.io/mozvr/pen/QpOXNM)  <!-- .element: class="example-btn" -->

1. Create and add an entity with the [`light`](https://aframe.io/docs/0.5.0/components/light.html) component.
2. In a JavaScript `for` loop, create and add 25 box entities with varying positions and scales.

---

## Code with JavaScript &mdash; Events

> Use
> [`.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
> to register a handler function that will be called when an event is emitted.
> Then manually emit that event to see that handler function execute.
> [Documentation](https://aframe.io/docs/0.5.0/guides/using-javascript-and-dom-apis.html#events-and-event-listeners)

[Open CodePen](http://codepen.io/mozvr/pen/QpOXNM)  <!-- .element: class="example-btn" -->

1. Register an event listener on the box to listen to the `foo` event. In the
   handler function, change the box's color.
2. Emit the `foo` event with [`Entity.emit()`](https://aframe.io/docs/0.5.0/core/entity.html#emit-name-detail-bubbles) and see the box change its color.

------

## Add Gaze-Based Cursor Interactions

> Use the gaze-based [`cursor`
> component](https://aframe.io/docs/0.5.0/components/cursor.html) to provide
> the ability to interact with entities (primarily for smartphones). This isn't
> a great interaction mechanism, but runs through basic interaction using
> events and for people that don't have a real headset with controllers on
> hand.
> [Guide](https://aframe.io/docs/0.5.0/guides/building-with-components.html)

1. Explicitly define a
   [`camera`](https://aframe.io/docs/0.5.0/components/camera.html) entity.
   Previously A-Frame was providing a default camera.
2. Add a [`cursor`](https://aframe.io/docs/0.5.0/components/cursor.html) entity
   as a child of the camera entity.
3. Add an event listener to one of the entities to change (e.g., color,
   position, rotation) on the `click`, `mouseenter`, or `mouseleave` events.
4. Move the camera to look at an entity and "click" (stare for a second on
   mobile), and see the entity react.

<p data-height="400" data-theme-id="19139" data-slug-hash="QpOXNM" data-default-tab="html,result" data-user="mozvr" data-embed-version="2" data-pen-title="Decomposing Primitives â A-Frame Workshop" class="codepen">See the Pen <a href="http://codepen.io/mozvr/pen/QpOXNM/">Decomposing Primitives â A-Frame Workshop</a> by mozillavr (<a href="http://codepen.io/mozvr">@mozvr</a>) on <a href="http://codepen.io">CodePen</a>.</p>

------

## Add Tracked Hand Controls

> If you have a VR headset (i.e., Vive or Rift + Touch), add tracked hand
> controls with the [`hand-controls`
> component](https://aframe.io/docs/0.5.0/components/hand-controls.html). If
> you are at a live event or workshop and have access to the VR headset, leave
> this as homework exercises.

1. Add two entities with `hand-controls`, one for the left hand and one for the right hand.
2. Enter VR, see your hands, and press buttons to see the hands animate.

---

## Add Tracked Hand Controls &mdash; Add Teleport Controls

> Add
> [teleport-controls](https://github.com/fernandojsg/aframe-teleport-controls)
> to the left hand.

---

## Add Tracked Hand Controls &mdash; Add Controller Cursor

> Add
> [controller-cursor](https://github.com/bryik/aframe-controller-cursor-component)
> to the right hand.

------

## Publish a Web Application

> Deploy your HTML and JavaScript to the Web, and have it instantly be
> available to the Internet. Make sure it's published with HTTPS as a
> requirement for WebVR. If you publish an A-Frame site, please share it out
> with your link! [Guide](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Publishing_your_website)

<div class="captioned-image-row small">
  <div>
    <img data-src="https://surge.sh/images/logos/svg/surge-logo.svg">
    <a href="https://surge.sh">Surge</a>
    <p>Simple, single-command web publishing. Publish HTML, CSS, and JS for free, without leaving the command line.</p>
  </div>
  <div>
    <img data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Neocitieslogo.svg/1200px-Neocitieslogo.svg.png">
    <a href="https://neocities.org">Neocities</a>
    <p>Free web hosting and tools that allow anyone to create a website.</p>
  </div>
  <div>
    <img data-src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png">
    <a href="https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/">GitHub Pages</a>
    <p>Websites for you and your projects, hosted directly from your GitHub repository. Just edit, push, and your changes are live.</p>
  </div>
</div>

------


<!-- Lessons end here. -->


## Stay Tuned

<img class="stretch" data-src="https://cdn.hackaday.io/images/4174761433219325627.png">

[More lessons to come!](https://github.com/aframevr/aframe-workshop/wiki/Brainstorm-Lessons)

See [the documentation](https://aframe.io/docs/) for more guides.
