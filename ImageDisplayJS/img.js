function createDoll(userChoice) {
    var output = document.getElementById("display_here");
    output.innerHTML = "";

    var links = [
        "/practise/images/cs.jpg",
        "/practise/images/male.png",
        "/practise/images/female.png",
        "/practise/images/tg.jpg",
        
    ];

    var choices = ["choose gender", "male", "female", "transgender"];
    // var sentence = "<p>You picked a " + choices[userChoice] + " doll.</p>"
    var img = '<img src="' + links[userChoice] + '">';

    output.innerHTML =  img;
    // document.getElementById("display_here").style.height = "10px";
  }