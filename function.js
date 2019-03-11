var asapet = 0;

function myFunction() {

  var mySounds = new Array("sound/purr.mp3", "sound/purr2.mp3",
  "sound/meow1.mp3", "sound/meow2.mp3")

  asapet += 1;

  randomNum = Math.floor((Math.random() * mySounds.length));
  document.getElementById("audio").src = mySounds[randomNum];

  audio.play();


  if (asapet == 69) {
    alert("Noice!");
  }


  document.getElementById("clicks").innerHTML = asapet;

};


window.onload = choosePic;

var myPix = new Array("img/asa.jpg","img/asa2.jpg","img/asa3.jpg","img/asa4.jpg","img/asa5.jpg",
"img/asa12.jpg","img/asa11.jpg","img/asa10.jpg","img/asa9.jpg","img/asa8.jpg","img/asa7.jpg","img/asa6.jpg",
"img/asa13.jpg","img/asa14.jpg","img/asa15.jpg","img/asa16.jpg","img/asa17.jpg","img/asa18.jpg","img/asa19.jpg",
"img/asa20.jpg","img/asa21.jpg","img/asa22.jpg","img/asa23.jpg","img/asa24.jpg","img/asa25.jpg","img/asa26.jpg",
"img/asa27.jpg","img/asa28.jpg");

function choosePic() {
	randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("asaPicture").src = myPix[randomNum];
}
