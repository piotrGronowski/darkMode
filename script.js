let isDark = false;
const button = document.querySelector(".body_button");
button.addEventListener("click", () => {
  if (isDark == true) {
    document.documentElement.style.setProperty(
      "--background-color",
      "rgb(226, 226, 196)"
    );
    document.documentElement.style.setProperty("--text-color", "darkblue");
    isDark = false;
  } else {
    document.documentElement.style.setProperty(
      "--background-color",
      "darkblue"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      "rgb(226, 226, 196)"
    );
    isDark = true;
  }
});
