   // Obfuscated URL loading
    document.addEventListener('DOMContentLoaded', function() {
// Create iframe dynamically after page load
      setTimeout(function() {
        const iframeContainer = document.querySelector('.iframe-container');
        const loadingIndicator = document.querySelector('.loading-indicator');
        
        // Create the iframe element
        const iframe = document.createElement('iframe');
        
        // Obfuscated URL construction
        // This makes it harder to find the URL in the source code
        const baseUrl = 'https://';
        const domainParts = ['streamcrichd', 'com'];
        const pathParts = ['/update/', 'skys5.php'];
        
        // Construct the URL in a non-obvious way
        const url = baseUrl + 
                   domainParts.join('.') + 
                   pathParts.join('');
        
        iframe.src = url;
        iframe.title = 'Live Stream';
        
        // Insert the iframe
        iframeContainer.insertBefore(iframe, loadingIndicator);
        
        // Hide loading indicator when iframe loads
        iframe.onload = function() {
          loadingIndicator.style.display = 'none';
        };
        
        // Fallback: hide loading indicator after 5 seconds
        setTimeout(function() {
          loadingIndicator.style.display = 'none';
        }, 5000);
      }, 500); // Small delay to make it less obvious
    });

    // Add functionality to download button
    document.querySelector('.app-download-btn').addEventListener('click', function(e) {
      e.preventDefault();
      alert('Redirecting to app download...');
      window.location.href = 'https://play.google.com/store/apps/details?id=com.eduniapps.dkut';
    });

    // Fullscreen functionality
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    fullscreenBtn.addEventListener('click', toggleFullscreen);

    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
        document.body.classList.add('fullscreen');
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
          document.body.classList.remove('fullscreen');
        }
      }
    }

    // Listen for fullscreen change
    document.addEventListener('fullscreenchange', function() {
      if (!document.fullscreenElement) {
        document.body.classList.remove('fullscreen');
      }
    });
