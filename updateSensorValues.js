
    var starCountRef = firebase.database().ref('Sensors/');
    starCountRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        useSensorsData(data);
    });

    function useSensorsData(data){
        document.getElementById('ambientLightVal').style.height = "" + (Number(data.AmbientLight) / 1023)*100 + "%";
        document.getElementById('ambientTempVal').style.height = "" + (Number(data.AmbientTemp) / 1023)*100 + "%";
        document.getElementById('floorHumidityVal').style.height = "" + (Number(data.FloorHumidity) / 1023)*100 + "%";
        document.getElementById('ambientHumidityVal').style.height = "" + (Number(data.AmbientHumidity) / 1023)*100 + "%";
        console.log("" + (Number(data.AmbientLight) / 85)*100) ;
    }