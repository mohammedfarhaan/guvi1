let log_btn = document.querySelector('#log_id');
log_btn.addEventListener('click', function(e){
    // e.preventDefault();
    let email = document.getElementById("email").value;
    let epass = document.getElementById("pass").value;

    // console.log(email);
    // console.log(epass);


    localStorage.setItem("myValue", email);

    $.ajax({
        url: "/guvi1/php/login.php",
        type: "POST",
        dateType: 'json',
        data:{
            email:  email,
            epass: epass
        },
        async: true,
        success: function(response){
            console.log(response)
            console.log(response.status === true)
            const json = JSON.parse(response);
            if(json.status === true){
                if(localStorage.getItem("myValue")){
                    localStorage.removeItem('myValue')
                    localStorage.setItem('myValue',JSON.stringify(json.email))
                    location.href = "/guvi1/html/profile.html";
                }
            }
            else{
                console.log("Account not found");
            }
        }
    });
});