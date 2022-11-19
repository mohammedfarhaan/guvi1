// var temp_mail = document.querySelector('#email1');
const ukey = JSON.parse(localStorage.getItem('myValue'));
//console.log(temp_mail);
// temp_mail.addEventListener('click', function (e){


$.ajax({
    url: "/guvi1/php/profile.php",
    type: "POST",
    data:{
         'key':  ukey
    },
    async: true,
    dataType: 'json',
    success: function(response){
        console.log(response)
        if(response.status === true){
$('#email').html(response.email);
$('#fname').html(response.fname);
$('#lname').html(response.lname);
$('#gender').html(response.gender);
$('#dob').html(response.dob);
$('#phone').html(response.phone);
        }
        else{
            alert("Account not found");
        }
    }
});