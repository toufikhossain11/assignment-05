document.getElementById('login-btn').addEventListener('click',function(){
    const username = document.getElementById('username');
    const getUsername = username.value;
    const password = document.getElementById('password');
    const getPassword = password.value;
    console.log(getPassword,getUsername);
    if(getUsername === 'admin' && getPassword === 'admin123'){
        window.location.assign('./index2.html')
    }else{
        alert('Password Worng');
        return;
    }
})