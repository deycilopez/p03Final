window.onload = loadCookieList;
var answers = [];
var fillin = [];

function loadCookieList(){
	var namecookie = getCookie("savedlist")
	var arrayCookie = namecookie.split(",")
	for(var i=0; i<arrayCookie.length; i++){
		displayItem(arrayCookie[i]);
	}
}

function fillinblanks(){
}
var answers = new Array();{
		answers[0] = document.getElementById('id').value
		answers[1] = document.getElementById('id').value
		answers[2] = document.getElementById('id').value
		answers[3] = document.getElementById('id').value
    answers[4] = document.getElementById('id').value
		answers[5] = document.getElementById('id').value
		answers[6] = document.getElementById('id').value
		answers[7] = document.getElementById('id').value
	}

 var fillin="";{
 fillin = getCookie ("Ahhh Finals week! The "+ answers[0]+" time of the year.");
 fillin = getCookie ("College students are "+ answers[1]+" to get into the library for a study room.");
 fillin = getCookie ("There goes "+ answers[2]+" walking in for the last final of the day.");
 fillin = getCookie ("Then its off to "+answersers [3]+" for the start of winter break!");
 fillin = getCookie ("While on break many plan to "+ answers[4]+". While others will sit near the warm fire");
 fillin = getCookie ("and watch movies and drink hot coco. On christmas day, I decided to wear a "+ answers[5]+" top");
 fillin = getCookie ("with black leggings and boots. My sister ended up wearing the same outfit! I alawys knew we");
 fillin = getCookie ("had great minds. It's time to open presnts, my favorite gift this year was a/an "+ answers[6]+". Now that Christmas");
 fillin = getCookie ("is offically over, it's time to start planning my spring break trip. "+ answers[7]+" see you in March!");
 displayItem();
}

function saveList(){
  varsaveList = [];
  var i=0;
  for(i=0; i<myList.length; i++){
    saveList[i] = myList[i]
  }
  setCookie ("savedlist", saveList.toString(), 1);
}


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
