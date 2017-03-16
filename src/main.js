var sceneCache = {};

// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  history: true,
  // https://github.com/hakimel/reveal.js#dependencies
  dependencies: [
    {src: 'src/vendor/plugin/markdown/marked.js'},
    {src: 'src/vendor/plugin/markdown/markdown.js'},
    {src: 'src/vendor/plugin/notes/notes.js', async: true},
    {src: 'src/vendor/plugin/highlight/highlight.js', async: true, callback: function () {
      hljs.initHighlightingOnLoad();
    }}
  ],
  margin: 0,
  slideNumber: true
});

// Fix Markdown wrapping <img> in <p>.
fixWrappedImages();
Reveal.addEventListener('ready', fixWrappedImages);
Reveal.addEventListener('slidechanged', fixWrappedImages);
function fixWrappedImages () {
  var imgs = document.querySelectorAll('section > p > img');
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    var p = img.parentNode;
    var section  = p.parentNode;
    section.insertBefore(img, p);
    section.removeChild(p);
  }
}

/**
 * Fetch all scenes.
 */
function fetchScenes () {
  var i;
  var scenes;
  var src;

  scenes = document.querySelectorAll('[data-aframe-scene]');
  for (i = 0; i < scenes.length; i++) {
    // Fetch scene from external file.
    src = scenes[i].dataset.aframeScene;
    if (sceneCache[src]) { continue; }

    req = new XMLHttpRequest();
    sceneCache[src] = new Promise(function (resolve) {
      req.addEventListener('load', function () {
        resolve(this.responseText);
      });
      req.open('GET', src);
      req.send();
    });
  }
}

// Initialize A-Frame scenes.
Reveal.addEventListener('slidechanged', function sceneResize (evt) {
  var i;
  var req;
  var sceneContainer;
  var scenes;
  var src;

  sceneContainer = evt.currentSlide.querySelector('[data-aframe-scene]');
  if (!sceneContainer) { return; }

  // Remove all scenes on slide change to only render one scene at a time.
  scenes = document.querySelectorAll('a-scene');
  for (i = 0; i < scenes.length; i++) { scenes[i].parentNode.removeChild(scenes[i]); }

  // Grab scene HTML.
  fetchScenes();
  sceneCache[sceneContainer.dataset.aframeScene].then(function (sceneHTML) {
    // Add `embedded` always.
    sceneHTML = sceneHTML.replace('<a-scene', '<a-scene embedded');
    setTimeout(function () {
      sceneContainer.innerHTML = sceneHTML;
    }, 800);
  });
});
