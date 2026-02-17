//Script

import { project } from "./project.js";

const screenWidth = window.innerWidth;
const viewMoreBtn = document.getElementById("view-more");

if (screenWidth > 767) {
  viewMoreBtn.style.display = "none";
}

viewMoreBtn.addEventListener("click", () => {
  const posts = document.querySelectorAll(".blogpost");

  posts.forEach((post) => {
    if (post.classList.contains("hidden")) {
      post.classList.remove("hidden");
    }
  });

  viewMoreBtn.style.display = "none";
});

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
    ({ name, image, text, githubRepo, tech }, index) => `
        <article id="blogpost-${index}" 
                class="blogpost ${screenWidth < 768 && index > 2 ? "hidden" : ""
      }">
          <img 
            src="${image}"
            alt="blog post image" 
            class="blogpost-img">
          <time datetime="2026-02-06">February, 06, 2026</time>
          <h2>${name}</h2>
          <p class="blog-content">
              ${text}
          </p>
          <p class="blog-git-paragraph">
            <span>Github link:</span> <a href="https://${githubRepo}" target="_blank">${name}</a>
          </p>
          <p class="blog-content-tech">
            <span>Tech:</span> ${tech}
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
