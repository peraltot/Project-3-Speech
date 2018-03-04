

    var lock = new Auth0Lock(
        'xR9nqQjHTD-eN4OufIFtGa1c-Q0as8LM',
        'msherman83.auth0.com'
      );



// Listening for the authenticated event
lock.on("authenticated", function(authResult) {
    // Use the token in authResult to getUserInfo() and save it to localStorage
    lock.getUserInfo(authResult.accessToken, function(error, profile) {
      if (error) {
        // Handle error
        return;
      }
  
      document.getElementById('nick').textContent = profile.nickname;
  
      localStorage.setItem('accessToken', authResult.accessToken);
      localStorage.setItem('profile', JSON.stringify(profile));
    });
  });


  document.getElementById('btn-login').addEventListener('click', function() {
    lock.show()
  })