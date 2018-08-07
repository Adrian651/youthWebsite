
// Get the Sidebar
  var mySidebar = document.getElementById("mySidebar");

  // Get the DIV with overlay effect
  var overlayBg = document.getElementById("myOverlay");
  
  // Toggle between showing and hiding the sidebar, and add overlay effect
  function w3_open() {
      if (mySidebar.style.display === 'block') {
          mySidebar.style.display = 'none';
          overlayBg.style.display = "none";
      } else {
          mySidebar.style.display = 'block';
          overlayBg.style.display = "block";
      }
  }
  
  // Close the sidebar with the close button
  function w3_close() {
      mySidebar.style.display = "none";
      overlayBg.style.display = "none";
  }
  
  function myFunction(id) {
      var x = document.getElementById(id);
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
          x.previousElementSibling.className += " w3-theme-d1";
      } else { 
          x.className = x.className.replace("w3-show", "");
          x.previousElementSibling.className = 
          x.previousElementSibling.className.replace(" w3-theme-d1", "");
      }
  }  

  // Initialize Firebase
  var _0x78e9=["\x41\x49\x7A\x61\x53\x79\x41\x4C\x64\x55\x7A\x72\x58\x45\x55\x69\x63\x59\x58\x63\x53\x50\x66\x68\x46\x33\x6B\x61\x68\x55\x4F\x37\x56\x5A\x35\x57\x67\x69\x67","\x6E\x63\x63\x64\x2D\x65\x37\x39\x39\x64\x2E\x66\x69\x72\x65\x62\x61\x73\x65\x61\x70\x70\x2E\x63\x6F\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x63\x63\x64\x2D\x65\x37\x39\x39\x64\x2E\x66\x69\x72\x65\x62\x61\x73\x65\x69\x6F\x2E\x63\x6F\x6D","\x6E\x63\x63\x64\x2D\x65\x37\x39\x39\x64","\x6E\x63\x63\x64\x2D\x65\x37\x39\x39\x64\x2E\x61\x70\x70\x73\x70\x6F\x74\x2E\x63\x6F\x6D","\x31\x31\x35\x37\x37\x39\x35\x35\x31\x37\x33\x39"];var config={apiKey:_0x78e9[0],authDomain:_0x78e9[1],databaseURL:_0x78e9[2],projectId:_0x78e9[3],storageBucket:_0x78e9[4],messagingSenderId:_0x78e9[5]}
  firebase.initializeApp(config);