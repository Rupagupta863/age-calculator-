function agecalculate(){
    var birthdate=new Date(document.getElementById('birthdate').value);
    var today=new Date();
    var age=today.getFullYear()-birthdate.getFullYear();
    if (today.getMonth() < birthdate.getMonth() || 
    (today.getMonth() == birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
    age--;
}
    document.getElementById('result').innerHTML="your age is: " + age +" years";

}