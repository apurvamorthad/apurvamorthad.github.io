alert("Hai, I'm Apurva");
var user1 = {image : "childpic.jpg",name : "M Apurva",Designation = "student"};
var user2 = {image : "recentimage.jpeg",name : "Appu",Designation = "student"};
var isuser1 = true;
var displayuser;
var mychildpic = function(){
    if(isuser1){
        displayuser = user2;
        isuser1 = false;
    }
    else{
        displayuser = user1;
        isuser1 = true;
    }
    document.getElementById("myImage").src=displayuser.image;
    document.getElementById("myname").src=displayuser.name;
    document.getElementById("mydesig").src=displayuser.desig;
    
}
