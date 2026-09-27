const navigationBar = document.querySelector(".navigation");
navigationBar.innerHTML = `
  <h1 id="toplogo"><i>ishabadsnoring!</i></h1>
  <div class="nav-links">
    <a href="/">Home</a>
    <a href="/chart">Chart</a>
    <a href="/tables">Tables</a>
    <a href="/information">Information</a>
  </div>
`;

const heroContent = document.querySelector(".hero-content");
heroContent.innerHTML = `
<button class="button button-item">
  <span class="button-bg">
    <span class="button-bg-layers">
      <span class="button-bg-layer button-bg-layer-1 -purple"></span>
      <span class="button-bg-layer button-bg-layer-2 -turquoise"></span>
      <span class="button-bg-layer button-bg-layer-3 -yellow"></span>
    </span>
  </span>
  <span class="button-inner">
    <span class="button-inner-static">Start Tracking Now</span>
    <span class="button-inner-hover">Start Tracking Now</span>
  </span>
</button>
<h1><i>Analyze and Track Your Sleeping</i></h1>
<p>Track your snoring habits and sleep better tonight.</p>
`;
