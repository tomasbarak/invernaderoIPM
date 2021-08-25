var starCountRef = firebase.database().ref('Sensors/');
starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    intervalSet()
});

function intervalSet(){
    var timestamp = new Date().getTime();
    document.getElementById('viewport').src = "https://firebasestorage.googleapis.com/v0/b/invernaderoipm.appspot.com/o/image.png?alt=media&variant=" + timestamp ;
    //getFrame("https://firebasestorage.googleapis.com/v0/b/invernaderoipm.appspot.com/o/image.png?alt=media");
    console.log('Getting stream');
}
function getFrame(url){
    var xhr = new XMLHttpRequest();
    console.log(url);
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
        var blob = xhr.response;
        //document.getElementById('viewport').src = blob;
        console.log(blob);
    };
    xhr.open('GET', url);
    xhr.send();
}
function getFrameURL(){
    let photo = document.getElementById("myFile").files[0];  // file from input
    let req = new XMLHttpRequest();
    let formData = new FormData();

    formData.append("file", photo);
    console.log(formData);
    req.onload = (event) =>{
        console.log(JSON.parse(req.response));
        getFrame(JSON.parse(req.response).downloadURL);
    };
    req.open("POST", 'http://localhost:3000/uploads');
    req.send(formData);
}