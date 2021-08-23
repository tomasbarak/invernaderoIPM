
    var starCountRef = firebase.database().ref('Sensors/');
    starCountRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        useSensorsData(data);
    });

    function useSensorsData(data){
        document.getElementById('ambientLightVal').style.height = "" + (Number(data.AmbientLight) / 150)*100 + "%";
        console.log("" + (Number(data.AmbientLight) / 150)*100) ;
    }