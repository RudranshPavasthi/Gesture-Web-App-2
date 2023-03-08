// https://teachablemachine.withgoogle.com/models/Fxr-fGPVX/model.jason
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
prediction1 = "";
prediction2 = "";

Webcam.attach("#camera");

function take_pic() {
    Webcam.snap(function (pic) {
        document.getElementById("result").innerHTML = '<img id="cam_pic"src="' + pic + '">';
    });
}
emoji_model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/bQGRLHUJI/model.json",modelloaded);

function modelloaded(){
    console.log("model loaded succesfully");
}

function text_to_speech(){
    speak_data1="prediction1 is "+ prediction1;
    speak_data2="and the prediction2 is "+ prediction2;
    speak_audio=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    window.speechSynthesis.speak(speak_audio);
}