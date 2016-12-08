var total = 0;


function fillinblanks(){
}
var answers = new Array();
		answers[0] = ("adjective"," ");
		answers[1] = ("verb", " ");
		answers[2] = ("name"," ");
		answers[3] = ("nounPlace"," ");
    answers[4] = ("noun", " ");
		answers[5] = ("color", " ");
		answers[6] = ("gift", " ");
		answers[7] = ("city", " ");
  document.getElementById(" ").value= " ";
 var fillin="";
 fillin = fillin + "Ahhh Finals week! The "+ answers[0]" time of the year.";
 fillin = fillin + "College students are "+ answers[1]" to get into the library for a study room.";
 fillin = fillin + "There goes "+ answers[2]" walking in for the last final of the day.";
 fillin = fillin + "Then its off to "ansers [3]" for the start of winter break!";
 fillin = fillin + "While on break many plan to "+ answers[4]". While others will sit near the warm fire";
 fillin = fillin + "and watch movies and drink hot coco. On christmas day, I decided to wear a "+ answers[5]" top";
 fillin = fillin + "with black leggings and boots. My sister ended up wearing the same outfit! I alawys knew we";
 fillin = fillin + "had great minds. It's time to open presnts, my favorite gift this year was a/an "+ answers[6]". Now that Christmas";
 fillin = fillin + "is offically over, it's time to start planning my spring break trip. "+ answers[7]" see you in March!";
 document.getElementById(" ").innerHTML= " ";
window.document.writeIn(fillin);

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
