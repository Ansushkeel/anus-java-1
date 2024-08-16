function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Basic validation
    if (email && password) {
      // Retrieve existing users from local storage
      let users = JSON.parse(localStorage.getItem('users')) || {};
  
      // Add new user
      users[email] = password; // In a real app, hash the password
  
      // Save updated users list back to local storage
      localStorage.setItem('users', JSON.stringify(users));
  
      alert('Sign Up Successful');
      // Redirect to sign-in page
      location.href = 'signin.html';
    } else {
      alert('All fields are required');
    }
  }
  
  function login() {
    const email = document.getElementById('lemail').value;
    const password = document.getElementById('lpassword').value;
  
    // Retrieve existing users from local storage
    let users = JSON.parse(localStorage.getItem('users')) || {};
  
    // Check if the email exists and the password matches
    if (users[email] === password) {
      alert('Sign In Successful');
      // Redirect or proceed to the next step
      location.href="dashboard.html"
    } else {
      alert('Invalid credentials');
    }
  }