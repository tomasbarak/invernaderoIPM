function switchTheme(){
    if(theme === 'dark'){
        theme = 'light'
        let darkSensors = document.querySelectorAll('.sensor-dark');
        let darkIcons = document.querySelectorAll('.dark-icon');
        let darkIconsSensor = document.querySelectorAll('.dark-icon-sensor');
        console.log(darkSensors)
        console.log(darkIcons)
        let topNav = document.getElementById('topnav');
        let viewport = document.getElementById('viewport');

        viewport.className = 'viewport-light';
        topNav.className = 'topnav-light'
        for(let key = 0; key < darkSensors.length; key++){
            darkSensors[key].className = 'sensor-light';
        }
        for(let icon = 0; icon < darkIcons.length; icon++){
            darkIcons[icon].className ="material-icons-outlined " + 'light-icon';
        }
        for(let sensorIcon = 0; sensorIcon < darkIconsSensor.length; sensorIcon++){
            darkIconsSensor[sensorIcon].className ="material-icons-outlined icon-sensor " + 'light-icon-sensor';
        }
        return 0;
    }else{
        theme = 'dark'
        let lightSensors = document.querySelectorAll('.sensor-light');
        let lightIcons = document.querySelectorAll('.light-icon');
        let lightIconsSensor = document.querySelectorAll('.light-icon-sensor');
        console.log(lightSensors)
        console.log(lightIcons)
        let topNav = document.getElementById('topnav');
        let viewport = document.getElementById('viewport');

        viewport.className = 'viewport-dark';
        topNav.className = 'topnav-dark'
        for(let key = 0; key < lightSensors.length; key++){
            lightSensors[key].className = 'sensor-dark';
        }
        for(let icon = 0; icon < lightIcons.length; icon++){
            lightIcons[icon].className ="material-icons-outlined " + 'dark-icon';
        }
        for(let sensorIcon = 0; sensorIcon < lightIconsSensor.length; sensorIcon++){
            lightIconsSensor[sensorIcon].className ="material-icons-outlined icon-sensor " + 'dark-icon-sensor';
        }
        return 0;
    }
}