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

## Play With *Hello, WebVR*

> Modify basic meshes through the HTML attributes (e.g., change colors,
> positions, rotations, scale).  Play with the default controls. If you're
> developing in an HTML file, you can copy-and-paste from the CodePen.
> [Documentation](https://aframe.io/docs/master/guides/)

<p data-height="400" data-theme-id="19139" data-slug-hash="BjygdO" data-default-tab="html,result" data-user="mozvr" data-embed-version="2" data-pen-title="Hello World â A-Frame" class="codepen">See the Pen <a href="http://codepen.io/mozvr/pen/BjygdO/">Hello World â A-Frame</a> by mozvr (<a href="http://codepen.io/mozvr">@mozvr</a>) on <a href="http://codepen.io">CodePen</a>.</p>

---

## Play With *Hello, WebVR* &mdash; Position

> Change the `position` HTML attributes (which are in meters).
> [Documentation](https://aframe.io/docs/master/components/position.html)

[Open CodePen](http://codepen.io/mozvr/pen/BjygdO)

1. Move the cylinder left by *decreasing* the `position`'s X value.
2. Move the box up by *increasing * the `position`'s Y value.
3. Move the sphere back by *decreasing* the `position`'s Z value.

<img class="stretch" data-src="https://cloud.githubusercontent.com/assets/674727/24024888/16eafc68-0a74-11e7-9271-08654cc7e139.png">

---

## Play With *Hello, WebVR* &mdash; Rotation

> Change the `rotation` HTML attributes (which are in degrees). Use the
> right-hand rule to spatially visualize rotation.
> [Documentation](https://aframe.io/docs/master/components/rotation.html)

[Open CodePen](http://codepen.io/mozvr/pen/BjygdO)

1. Rotate the cylinder around the X axis so we see the bottom.
2. Rotate the box around the Y axis so the box is facing straight.

<img class="stretch" data-src="https://cloud.githubusercontent.com/assets/674727/24025669/0d4bf9dc-0a79-11e7-99df-32628537493a.png">

---

## Play With *Hello, WebVR* &mdash; Add New Primitives

> Add new primitives the scene by adding more HTML elements with `<a-scene>`.
> [Documentation](https://aframe.io/docs/0.5.0/primitives/)

[Open CodePen](http://codepen.io/mozvr/pen/BjygdO)

1. Add [`<a-torus-knot>`](https://aframe.io/docs/0.5.0/primitives/a-torus-knot.html).
2. Add [`<a-dodecahedron>`](https://aframe.io/docs/0.5.0/primitives/a-dodecahedron.html).
3. Add [`<a-text>`](https://aframe.io/docs/0.5.0/primitives/a-text.html).

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

[Open Example](http://ngokevin.com/kframe/components/text-geometry/examples/vaporwave/)

1. Select one of the entities with text in the example.
2. Change the community [`text-geometry` component's](https://github.com/ngokevin/kframe/tree/master/components/text-geometry) `value` property.

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

[Open Example](http://ngokevin.com/kframe/components/text-geometry/examples/vaporwave/)

1. Add the `static-body` component to ground grid.
2. Add the `dynamic-body` component to the torus knot (the purple pretzel in the back).
3. Increase the Y-position of the torus knot to make it higher up.

<img class="stretch" data-src="https://cloud.githubusercontent.com/assets/674727/24028803/2e873d6c-0a8f-11e7-8e20-b47380b455b0.gif">

<!-- Lessons end here. -->
