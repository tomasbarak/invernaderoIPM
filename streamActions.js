document.addEventListener('DOMContentLoaded', function (event) {
    var baseHost = 'http://181.165.59.49'
    var streamUrl = baseHost + ':81'

    const updateValue = (el, value, updateRemote) => {
        updateRemote = updateRemote == null ? true : updateRemote
        let initialValue
        if (el.type === 'checkbox') {
            initialValue = el.checked
            value = !!value
            el.checked = value
        } else {
            initialValue = el.value
            el.value = value
        }

        if (updateRemote && initialValue !== value) {
        } else if(!updateRemote){
            if(el.id === "aec"){
                value ? hide(exposure) : show(exposure)
            } else if(el.id === "agc"){
                if (value) {
                    show(gainCeiling)
                    hide(agcGain)
                } else {
                    hide(gainCeiling)
                    show(agcGain)
                }
            } else if(el.id === "awb_gain"){
                value ? show(wb) : hide(wb)
            } else if(el.id === "face_recognize"){
                value ? enable(enrollButton) : disable(enrollButton)
            }
        }
    }

    function updateRes () {

        const query = `${baseHost}/control?var=framesize&val=10`

        fetch(query)
            .then(response => {
                console.log(`request to ${query} finished, status: ${response.status}`)
            })
    }

    document
        .querySelectorAll('.close')
        .forEach(el => {
            el.onclick = () => {
                hide(el.parentNode)
            }
        })

    // read initial values
    fetch(`${baseHost}/status`)
        .then(function (response) {
            return response.json()
        })
        .then(function (state) {
            document
                .querySelectorAll('.default-action')
                .forEach(el => {
                    updateValue(el, state[el.id], false)
                })
        })

    const view = document.getElementById('stream')
    const viewContainer = document.getElementById('stream-container')
    const stillButton = document.getElementById('get-still')
    const streamButton = document.getElementById('toggle-stream')
    const enrollButton = document.getElementById('face_enroll')
    const closeButton = document.getElementById('close-stream')

    const stopStream = () => {
        window.stop();
    }

    const startStream = () => {
        view.src = `${streamUrl}/stream`
    }


    // Custom actions
    // Gain
    const agc = document.getElementById('agc')
    const agcGain = document.getElementById('agc_gain-group')
    const gainCeiling = document.getElementById('gainceiling-group')

    // Exposure
    const aec = document.getElementById('aec')
    const exposure = document.getElementById('aec_value-group')

    // AWB
    const awb = document.getElementById('awb_gain')
    const wb = document.getElementById('wb_mode-group')

    // Detection and framesize
    const detect = document.getElementById('face_detect')
    const recognize = document.getElementById('face_recognize')
    const framesize = document.getElementById('framesize')

    startStream()
    updateRes()
})
