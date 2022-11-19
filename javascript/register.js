let sub_btn=document.querySelector('#sub_id');
sub_btn.addEventListener('click', function(e){
    e.preventDefault();
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let gender=document.getElementById("gen").value;
    let email=document.getElementById("emailid").value;
    let dob=document.getElementById("dob").value;
    let phoneno=document.getElementById("mob").value;
    let password=document.getElementById("pwd").value;
    let cpwd=document.getElementById("cpwd").value;
if(password!==cpwd){
    alert("password is incorrect ");
}
else{
$.ajax({
        url: "/guvi1/php/getdata.php",
        type: "POST",
        data:{
            fname:fname,
            lname:lname,
            email:email,
            gender:gender,
            gender:gender,
            dob:dob,
            phoneno:phoneno,
            password:password
        },
        async:true,
        success:function(response){
            console.log(response);
        }
        });
    }
})



// function send_data(e){
//     e.preventDefault();
//     var fname=document.getElementById("fname").value;
//     var lname=document.getElementById("lname").value;
//     var gender=document.getElementById("gen").value;
//     var email=document.getElementById("emailid").value;
//     var dob=document.getElementById("dob").value;
//     var phoneno=document.getElementById("mob").value;
//     var password=document.getElementById("pwd").value;

//     var httpr=new XMLHttpRequest();
//     httpr.open("POST","../php/getdata.php",true);
//     httpr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//     httpr.onreadystatechange=function(){
//         if(httpr.readyState==4 && httpr.status==200)
//         {
//             document.getElementById("response").innerHTML=httpr.responseText;
//         }
//     }
//     httpr.send("fname="+fname+"&lname="+lname+"&gender="+gender+"&email="+email+"&dob="+dob+"&phoneno="+phoneno+"&password="+password);

// }


