
    var starCountRef = firebase.database().ref('Sensors/');
    starCountRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        useSensorsData(data);
    });

    function useSensorsData(data){
        document.getElementById('ambientLightVal').style.height = "" + (Number(data.AmbientLight) / 85)*100 + "%";
        document.getElementById('ambientTempVal').style.height = "" + (Number(data.AmbientTemp) / 85)*100 + "%";
        document.getElementById('floorHumidityVal').style.height = "" + (Number(data.FloorHumidity) / 100)*100 + "%";
        console.log("" + (Number(data.AmbientLight) / 85)*100) ;
    }