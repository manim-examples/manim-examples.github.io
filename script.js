document.addEventListener("DOMContentLoaded", function(){

  // Gather elements
  const expandBtn = document.getElementById("expand-btn");
  const clearTagsBtn = document.getElementById("clear-tags-btn");
  const tagCheckboxes = document.querySelectorAll("input[type=checkbox]");
  const imageGrid = document.getElementById("image-grid");

  // Sticky header toggle
  expandBtn.addEventListener("click", function(){

    const header = document.querySelector(".header");
    header.classList.toggle("expanded");
    expandBtn.textContent = header.classList.contains("expanded") ? "Minimise Header" : "Expand Header";

  });

  // Selective images
  clearTagsBtn.addEventListener("click", function(){

    tagCheckboxes.forEach(checkbox => {

      checkbox.checked = false;

    });

    filterImages();

  });

  // Look for selections
  tagCheckboxes.forEach(checkbox => {

    checkbox.addEventListener("change", filterImages);

  });

  // Apply selections
  function filterImages(){

    const selectedTags = Array.from(tagCheckboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.id);

    // Get all elements with the class "container", therefore all images (GIFs) must be inside it otherwise they aren"t checked for tags
    imageGrid.querySelectorAll(".container").forEach(container => {

      const image = container.querySelector("img");
      const canvas = container.querySelector("canvas");
      const imgTags = image.getAttribute("data-tags").split(",");

      if (selectedTags.every(tag => imgTags.includes(tag))){

        image.style.display = "none";
        canvas.style.display = "block";
        container.style.display = "block";

      } else{

        container.style.display = "none";

      }

    });

  }

  // Toggle the appearance class in ".info-icon-text" class
  const infoIcon = document.querySelector(".info-icon");
  const infoIconText = document.querySelector(".info-icon-text");

  infoIcon.addEventListener("click", () => {

    infoIconText.classList.toggle("show");

  });

  // Inherit <img alt> from <a title>
  imageGrid.querySelectorAll(".container").forEach(container => {

    const imgLink = container.querySelector("a");
    const image = container.querySelector("img");

    image.setAttribute("alt", imgLink.getAttribute("title"));

  });

  // Add <img> overlay with class ".youtube-overlay" indicating YouTube videos, https://commons.wikimedia.org/wiki/File:YouTube_full-color_icon_(2017).svg
  imageGrid.querySelectorAll(".container").forEach(container => {

      const image = container.querySelector("img[data-tags]");
      const imgTags = image.getAttribute("data-tags").split(",");

      if(imgTags.includes("tag0005")){

        const overlayIcon = document.createElement("img");
        overlayIcon.src = "img/youtube.png";
        overlayIcon.alt = "YouTube overlay";
        overlayIcon.classList.add("youtube-overlay");

        container.firstElementChild.appendChild(overlayIcon);

      }

  });

  // Enable lazy loading for originally loaded order from including the tenth grouped <img> onward, do not move this script above ".youtube-overlay" one
  imageGrid.querySelectorAll(".container:nth-child(n+10)").forEach(container => {

    const images = container.querySelectorAll("img");

    for(let i = 0; i < images.length; i++){

        images[i].setAttribute("loading", "lazy");

    }

  });

});

function script(){

  // Get all elements with the class "container"
  const containers = document.querySelectorAll(".container");

  // Loop through each container
  containers.forEach(container => {

    // Find the image and canvas elements within the current container
    const image = container.querySelector("img");
    const canvas = container.querySelector("canvas");

    // Create a canvas context
    const ctx = canvas.getContext("2d");

    // Set the canvas dimensions to match the image
    canvas.width = image.width;
    canvas.height = image.height;

    // Function to reset the image source
    function resetImageSource(){

      image.src = image.src;

    }

    // Load the image onto the canvas
    const img = new Image();
    img.src = image.src;
    img.onload = function(){

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    };

    // Add hover and unhover event listeners to the current container
    container.addEventListener("mouseenter", () => {

      canvas.style.display = "none";
      resetImageSource();
      image.style.display = "block";

    });

    container.addEventListener("mouseleave", () => {

      canvas.style.display = "block";
      resetImageSource();
      image.style.display = "none";

    });

  });

}