function startfunction() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Y-u1luGTK/model.json', modelReady)
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error,results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_red = Math.floor(Math.random() * 255) + 1;
        random_number_green = Math.floor(Math.random() * 255) + 1;
        random_number_blue = Math.floor(Math.random() * 255) + 1;
        document.getElementById("can_hear_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("accuracy_label").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("can_hear_label").style.color = "rgb("
        +random_number_red+","+random_number_green+","+random_number_blue+")";
        document.getElementById("accuracy_label").style.color = "rgb("
        +random_number_red+","+random_number_green+","+random_number_blue+")";
        img = document.getElementById('ear_image');
        if (results[0].label == "Barking") {
            img.src = 'dog.gif';
        }
        else if (results[0].label == "Meowing") {
            img.src = 'cat.gif';
        }
        else if (results[0].label == "Mooing") {
            img.src = 'cow.gif';
        }
        else if (results[0].label == "Roaring") {
            img.src = 'tiger.gif';
        }
        else {
            img.src = 'bird.gif';
        }

    }
}