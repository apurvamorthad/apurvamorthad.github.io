var data1 = {image : "recentimage.jpeg",name : "M.Apurva" , designation: "Student"};
var data2 = {image : "childpic.jpg",name : "Appu" , designation: "student"};
var isdata1 = true;
var displaydata;
var changemypic = function(){
    if(isdata1){
        displaydata = data2;
        isdata1=false;
    }
    else{
        displaydata = data1;
        isdata1 = true;
    }
    document.getElementById("myimage").src=displaydata.image;
    document.getElementById("name2").innerHTML=displaydata.name;
    document.getElementById("designation2").innerHTML=displaydata.designation;

}
