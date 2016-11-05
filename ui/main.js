var submit = document.getElementById('submit_btn') ;
submit.onclick = function() {
    var request= new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                alert("Logged In Successfully");
            }
            else if(request.status === 403) {
                alert("Username/Password Is Incorrect");
            }
            else if(request.status === 500) {
                alert("Somethimg Went On The Server!!");
            }
            
        }
    };
    
    var username = document.getElementId("username").value;
    var password = document.getElementId("password").value;
    console.log("username");
    console.log("password");
    request.open('POST', 'http://mayank-ranjan.imad.hasura-app.io/login', true);
    request.setRequstHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
};