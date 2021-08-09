var button=document.querySelector("#btn-translate")
var inputText=document.querySelector("#text-input")
var outputText=document.querySelector("#output")

var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTranslatedUrl(text){
    return serverURL+"?"+"text="+text;
}

function errorHandeler(err){
    console.log("something went wrong.please try again after some time",err);
}

function clickHandeler(){
    var input=inputText.value;
    fetch(getTranslatedUrl(input))
    .then(response=>response.json())
    .then(json=>{
        var translatedInput=json.contents.translated;
        outputText.innerText=translatedInput;
    })
    .catch(errorHandeler)
}

button.addEventListener("click",clickHandeler)