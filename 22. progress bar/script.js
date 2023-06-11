
window.addEventListener('scroll', function() {
  const scrollTopPosition = document.documentElement.scrollTop || document.body.scrollTop;
  console.log(scrollTopPosition);
  
  const totalHeightOfPage = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  console.log(totalHeightOfPage);
 
  const scrollProgress = Math.floor((scrollTopPosition / totalHeightOfPage) * 100);
  console.log(scrollProgress);
  

  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = scrollProgress + "%";
  progressBar.textContent = "progress bar → " + scrollProgress + "%";
  progressBar.style.color = "#660730";
  progressBar.style.fontWeight = "900";
});