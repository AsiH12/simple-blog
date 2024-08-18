document.addEventListener("DOMContentLoaded", function() {
    // Load posts from JSON
    fetch("posts.json")
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById("posts");
            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.className = "post";
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.content.substring(0, 100)}...</p>
                    <a href="post.html?id=${post.id}">Read More</a>
                `;
                postsContainer.appendChild(postElement);
            });
        });
});

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    fetch(`posts/${postId}.json`)
        .then(response => response.json())
        .then(post => {
            document.getElementById("post-title").textContent = post.title;
            document.getElementById("post-content").textContent = post.content;
        });
});
