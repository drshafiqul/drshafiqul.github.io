document.addEventListener('DOMContentLoaded', function() {
  const words = ["A Fulbright Scholar", "An Educator", "A Data Storyteller", "A Researcher"];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;
  let isEnd = false;
  const textElement = document.getElementById("identity-text");
  const cursor = document.querySelector(".cursor");

  // Stop if the elements don't exist
  if (!textElement || !cursor) {
    return;
  }

  function type() {
    isEnd = false;
    currentWord = words[i];
    if (isDeleting) {
      // Erase the word
      textElement.textContent = currentWord.substring(0, j--);
      if (j < 0) { // Changed from j === -1 to handle empty string case
        j = 0; // Reset j
        isDeleting = false;
        i++;
        if (i === words.length) {
          i = 0;
        }
      }
    } else {
      // Type the word
      textElement.textContent = currentWord.substring(0, j++);
      if (j > currentWord.length) { // Changed from j === currentWord.length + 1
        isEnd = true;
        isDeleting = true;
      }
    }

    const typingSpeed = isDeleting ? 100 : 200;
    const timeOut = isEnd ? 2000 : typingSpeed;

    // Stop cursor from blinking while typing/deleting
    if (!isEnd) {
      cursor.classList.add('typing');
    } else {
      cursor.classList.remove('typing');
    }

    setTimeout(type, timeOut);
  }

  type();
});