document.addEventListener("DOMContentLoaded", () => {
    const mainHeading = document.getElementById("main-heading");
    const textColorInput = document.getElementById("textColor");
    const backgroundColorInput = document.getElementById("backgroundColor");
    const postText = document.getElementById("postText");
    const createPostBtn = document.getElementById("createPostBtn");
    const listBox1 = document.getElementById("listBox1");
    const listBox2 = document.getElementById("listBox2");
    const colorText = document.getElementById("colorText");
    const feedbackBox = document.getElementById("feedbackBox");
    const usernameInput = document.getElementById("username");
    const audienceSelect = document.getElementById("audienceSelect");

    // Change text color
    textColorInput.addEventListener("change", (event) => {
        postText.style.color = event.target.value;
    });

    // Change background color
    backgroundColorInput.addEventListener("change", (event) => {
        postText.style.backgroundColor = event.target.value;
    });

    // Change text style (bold, italic, underline, text-transform)
    listBox1.addEventListener("click", (event) => {
        switch (event.target.id) {
            case "textTransform":
                postText.style.textTransform = postText.style.textTransform === "uppercase" ? "lowercase" : "uppercase";
                break;
            case "bold":
                postText.style.fontWeight = postText.style.fontWeight === "bold" ? "normal" : "bold";
                break;
            case "italic":
                postText.style.fontStyle = postText.style.fontStyle === "italic" ? "normal" : "italic";
                break;
            case "underline":
                postText.style.textDecoration = postText.style.textDecoration === "underline" ? "none" : "underline";
                break;
            case "alignLeft":
                postText.style.textAlign = "left";
                break;
            case "alignCenter":
                postText.style.textAlign = "center";
                break;
            case "alignRight":
                postText.style.textAlign = "right";
                break;
            default:
                break;
        }
    });

    // Change background image
    listBox2.addEventListener("click", (event) => {
        if (event.target.classList.contains("bg-image")) {
            postText.style.backgroundImage = `url(${event.target.src})`;
            postText.style.backgroundSize = "cover";
        }
    });

    // Create post button
    createPostBtn.addEventListener("click", () => {
        // Get input values
        const username = usernameInput.value;
        const audience = audienceSelect.value;

        // Hide input fields and buttons
        mainHeading.style.display = "none";
        listBox1.style.display = "none";
        listBox2.style.display = "none";
        colorText.style.display = "none";
        createPostBtn.style.display = "none"; 

        // Show feedback box
        feedbackBox.style.display = "flex";

        // Replace input fields with static text
        usernameInput.parentElement.innerHTML = `<p class="posted-username">${username}</p>`;
        audienceSelect.parentElement.innerHTML = `<p  class="posted-audience">${audience}</p>`;
    });
});
