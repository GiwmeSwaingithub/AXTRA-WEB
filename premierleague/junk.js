    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
        const iframeContainer = document.querySelector('.iframe-container');
        const loadingIndicator = document.querySelector('.loading-indicator');
        const iframe = document.createElement('iframe');
        const baseUrl = 'https://';
        const junkconfuser = ['streamcrichd', 'com'];
        const streamingDomain = ['eduniapps', 'com'];
        const pathParts = ['/update/', 'skys5.php'];
        const url = baseUrl + 
                   junkconfuser.join('.') + 
                   pathParts.join('');
        iframe.src = url;
        iframe.title = 'Live Stream';

        iframeContainer.insertBefore(iframe, loadingIndicator);
        iframe.onload = function() {
          loadingIndicator.style.display = 'none';
        };
          setTimeout(function() {
          loadingIndicator.style.display = 'none';
        }, 5000);
      }, 500);
    });
    document.querySelector('.app-download-btn').addEventListener('click', function(e) {
      e.preventDefault();
      alert('Redirecting to app download...');
      window.location.href = 'https://play.google.com/store/apps/details?id=com.eduniapps.dkut';
    });
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
    document.addEventListener('fullscreenchange', function() {
      if (!document.fullscreenElement) {
        document.body.classList.remove('fullscreen');
      }
    });
