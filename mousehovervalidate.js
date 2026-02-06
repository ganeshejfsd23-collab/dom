const message = document.getElementById("message");

// Function to attach hover events
function addHoverEffect(element, hoverText) {
  element.addEventListener("mouseover", () => {
    message.textContent = hoverText;
    message.style.color = "green";
  });

  element.addEventListener("mouseout", () => {
    message.textContent = "Mouse left " + element.textContent;
    message.style.color = "red";
  });
}

// Attach to multiple boxes
addHoverEffect(document.getElementById("box1"), "You are hovering over Box 1!");
addHoverEffect(document.getElementById("box2"), "Hello from Box 2!");
addHoverEffect(document.getElementById("box3"), "This is Box 3!");