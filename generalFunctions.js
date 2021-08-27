var path = window.location.pathname;
var page = path.split("/").pop();

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
function switchMenuVisibility(){
    console.log(page)
    console.log('automatic-menu-switching: enabled')
    let sideMenu = document.getElementById('side-menu')
    let viewport = document.getElementById('viewport')
    let topnav = document.getElementById('topnav')
    if(menuExpanded){
        sideMenu.style.width = '70px';
        viewport.style.width = 'calc(100% - 60px)'
        viewport.style.marginLeft = '60px'
        topnav.style.width = 'calc(100% - 60px)'
        topnav.style.marginLeft = '60px'
        let referenceIcons = document.querySelectorAll('.reference-icon');
        let sideMenuTitles = document.querySelectorAll('.title');
        let sideMenuRefTitles = document.querySelectorAll('.reference-title')

        if(page === 'index.html'){
            document.getElementById('reference-title').className = 'titles-hidden'
            for(let key = 0; key < referenceIcons.length; key++){
                referenceIcons[key].className = "material-icons-outlined icon-sensor " + theme +'-icon-sensor ' + 'reference-icon-hidden';
            }
            for(let key = 0; key < sideMenuRefTitles.length; key++){
                sideMenuRefTitles[key].className = "reference-title " + "titles-hidden";
            }
        }else{
            document.getElementById('side-menu-streaming-settings').style.display = 'none'
        }

        for(let key = 0; key < sideMenuTitles.length; key++){
            sideMenuTitles[key].className = "title " + "titles-hidden";
        }

        menuExpanded = false;
        localStorage.setItem('menuVisibility', 'false');
    }else{
        sideMenu.style.width = '300px';
        viewport.style.width = 'calc(100% - 300px)'
        viewport.style.marginLeft = '300px'
        topnav.style.width = 'calc(100% - 300px)'
        topnav.style.marginLeft = '300px'

        let referenceIcons2 = document.querySelectorAll('.reference-icon-hidden');
        let sideMenuTitles = document.querySelectorAll('.title');
        let sideMenuRefTitles = document.querySelectorAll('.reference-title')

        if(page === 'index.html'){
            document.getElementById('reference-title').className = 'ref-titles-show'
            for(let key = 0; key < referenceIcons2.length; key++){
                referenceIcons2[key].className = "material-icons-outlined " + "icon-sensor-no-margin " + theme +'-icon-sensor ' + 'reference-icon';
            }
            for(let key = 0; key < sideMenuRefTitles.length; key++){
                sideMenuRefTitles[key].className = "reference-title " + "ref-sec-titles-show";
            }
        }else{
            document.getElementById('side-menu-streaming-settings').style.display = 'flex'
        }

        for(let key = 0; key < sideMenuTitles.length; key++){
            sideMenuTitles[key].className = "title " + 'titles-show';
        }

        menuExpanded = true;
        localStorage.setItem('menuVisibility', 'true');
    }
}
function setManualMenuVisibility(isVisible){
    console.log('received var at setManualMenuVisibility() is: ' + isVisible)
    let sideMenu = document.getElementById('side-menu')
    let viewport = document.getElementById('viewport')
    let topnav = document.getElementById('topnav')
    if(isVisible){
        console.log('closing-menu')
        sideMenu.style.width = '300px';
        viewport.style.width = 'calc(100% - 300px)'
        viewport.style.marginLeft = '300px'
        topnav.style.width = 'calc(100% - 300px)'
        topnav.style.marginLeft = '300px'

        let referenceIcons2 = document.querySelectorAll('.reference-icon-hidden');
        let sideMenuTitles = document.querySelectorAll('.title');
        let sideMenuRefTitles = document.querySelectorAll('.reference-title')
        if(page === 'index.html'){
            document.getElementById('reference-title').className = 'ref-titles-show'
            for(let key = 0; key < referenceIcons2.length; key++){
                referenceIcons2[key].className = "material-icons-outlined " + "icon-sensor-no-margin " + theme +'-icon-sensor ' + 'reference-icon';
            }
            for(let key = 0; key < sideMenuRefTitles.length; key++){
                sideMenuRefTitles[key].className = "reference-title " + "ref-sec-titles-show";
            }
        }else{
            document.getElementById('side-menu-streaming-settings').style.display = 'flex'
        }

        for(let key = 0; key < sideMenuTitles.length; key++){
            sideMenuTitles[key].className = "title " + 'titles-show';
        }

        menuExpanded = true;
        localStorage.setItem('menuVisibility', 'true');
    }else{
        sideMenu.style.width = '70px';
        viewport.style.width = 'calc(100% - 60px)'
        viewport.style.marginLeft = '60px'
        topnav.style.width = 'calc(100% - 60px)'
        topnav.style.marginLeft = '60px'
        let referenceIcons = document.querySelectorAll('.reference-icon');
        let sideMenuTitles = document.querySelectorAll('.title');
        let sideMenuRefTitles = document.querySelectorAll('.reference-title')

        if(page === 'index.html'){
            document.getElementById('reference-title').className = 'titles-hidden'
            for(let key = 0; key < referenceIcons.length; key++){
                referenceIcons[key].className = "material-icons-outlined icon-sensor " + theme +'-icon-sensor ' + 'reference-icon-hidden';
            }
            for(let key = 0; key < sideMenuRefTitles.length; key++){
                sideMenuRefTitles[key].className = "reference-title " + "titles-hidden";
            }
        }else{
            document.getElementById('side-menu-streaming-settings').style.display = 'none'
        }

        for(let key = 0; key < sideMenuTitles.length; key++){
            sideMenuTitles[key].className = "title " + "titles-hidden";
        }

        menuExpanded = false;
        localStorage.setItem('menuVisibility', 'false');
    }
}