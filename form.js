(function () {
  "use strict";
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
document.addEventListener("DOMContentLoaded", function () {
  const commentsList = document.getElementById("comments-list");
  const commentForm = document.getElementById("comment-form");
  const usernameInput = document.getElementById("username");
  const commentTextInput = document.getElementById("comment-text");

  function loadComments() {
    fetch("https://mycomment-67f51754e324.herokuapp.com/api/comments/")
      .then((response) => response.json())
      .then((data) => {
        commentsList.innerHTML = "";
        data.forEach((comment) => {
          const commentElement = document.createElement("div");
          commentElement.classList.add("list-group-item");
          commentElement.innerHTML = `
            <strong>${comment.username}</strong>
            <p>${comment.text}</p>
          `;
          commentsList.appendChild(commentElement);
        });
      });
  }

  commentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!commentForm.checkVisibility()) {
      e.stopPropagation();
      commentForm.classList.add("was-validated");
      return;
    }
    const username = usernameInput.value;
    const text = commentTextInput.value;

    fetch("https://mycomment-67f51754e324.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, text }),
    })
      .then((response) => response.json())
      .then((data) => {
        usernameInput.value = "";
        commentTextInput.value = "";
        commentForm.classList.remove("was-validated");
        loadComments();
      });
  });
  loadComments();
});
