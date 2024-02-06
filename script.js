document.getElementById("dateButton").addEventListener("click", function() {
  // Show the video
  document.getElementById("myVideo").style.display = "block";
  // Pause the video in case it's already playing
  document.getElementById("myVideo").pause();
  // Redirect to the recorded video URL (optional)
  // window.location.href = "https://www.example.com/recorded-video-url";
});

document.getElementById("declineButton").addEventListener("click", function() {
  alert("That's okay. Maybe next time!");
  // Show the photo
  document.getElementById("photo").style.display = "block";
});
