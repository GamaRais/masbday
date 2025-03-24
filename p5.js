let count = 0;

// Collect all images in an array
const images = [
    document.getElementById("pic1"),
    document.getElementById("pic2"),
    document.getElementById("pic3"),
    document.getElementById("pic4"),
    document.getElementById("pic5"),
    document.getElementById("pic6"),
    document.getElementById("pic7")
];

const nextButton = document.getElementById("next");

nextButton.onclick = function () {
    // Hide the current image
    images[count].style.display = "none";

    // Update count
    count++;

    // If at the end, go to google.com
    if (count >= images.length) {
        console.log("Redirecting to Google...");
        window.location.href = "bday.html";
        return;
    }

    // Show the next image
    images[count].style.display = "block";
};

// Ensure only the first image is visible on load
images.forEach((img, index) => {
    img.style.display = index === 0 ? "block" : "none";
    console.log(`Image ${index + 1}:`, img);
});
