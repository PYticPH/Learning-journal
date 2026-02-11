//Script

import { project } from "./project.js";

function renderHeader() {
  const headerHtml = `
		<nav>
			<img src="images/logo.png" alt="logo" class="logo-img">
			<p>My learning journal</p>
			<ul>
				<li>HOME</li>
				<li>ABOUT ME</li>
			</ul>
		</nav>
	`;
  document
    .getElementById("header")
    .innerHTML += headerHtml;
}

function renderArticles() {
  const blogs = project.map(
    ({ name, image, githubRepo, tech }, index) => `
        <article id="blogpost-${index}" class="blogpost">
          <img 
            src="${image}"
            alt="blog post image" 
            class="blogpost-img">
          <time datetime="2026-02-06">February, 06, 2026</time>
          <h2>${name}</h2>
          <p class="blog-content">
            This is a blog post which span multiple lines.
            Blog post about authors learning and tech used 
            to complete each project will be seen here
          </p>
          <p class="blog-git-paragraph">
            Github: <a href="https://${githubRepo}">${name}</a>
          </p>
          <p class="blog-content-tech">
            <span>Tech: ${tech}</span>
          </p>
        </article>
    `,
  ).join("");

  document.getElementById("main").innerHTML += blogs;
}

function renderFooter() {
  const footerHtml = `
      <p>My Learning Journal</p>
      <p>Copyright (c) 2026 Author. All Rights Reserved.</p>
    `;

  document.getElementById("footer").innerHTML = footerHtml;
}

renderHeader();
renderArticles();
renderFooter();
