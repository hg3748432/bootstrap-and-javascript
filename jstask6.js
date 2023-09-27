const users = [
    { username: "harsh", password: "1234" },
    { username: "dummy", password: "2345" },
    { username: "scorpions", password: "3456" },
  ];
  
  document.getElementById("loginButton").addEventListener("click", function (e) {
    e.preventDefault();
  
    const usernameInput = document.getElementById("usrname").value;
    const passwordInput = document.getElementById("pass").value;
  
    const foundUser = users.find(
      (user) => user.username === usernameInput && user.password === passwordInput
    );
  
    if (foundUser) {
      alert("Login successful!");
    } else {
      alert("Invalid Username or Password");
    }
  });
  