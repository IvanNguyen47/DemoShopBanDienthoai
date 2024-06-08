function formvalidate() {
    var email= document.getElementById('email').value;
     var comment =document.getElementById('com').value;
    var rate =document.getElementById('rate').value;
   
    if(email=='' || comment=='' || rate ==''){
     alert('Vui long nhap day du thong tin');
     return;
    }
    if(isNaN(rate)){
        alert('rate phai la so ');
        return;
    }
    var emailcheck =/[A-Z0-9._%+-]+@[A-Z0-9-]+\.+[A-Z]{2,4}$/igm;
    if(!emailcheck.test(email)){
        alert('email khong hop le');
        return;
    }
}