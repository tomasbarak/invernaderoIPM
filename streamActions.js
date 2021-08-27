
    var baseHost = 'http://181.165.59.49'
    var streamUrl = baseHost + ':81'

    function updateRes (res) {

        const query = `${baseHost}/control?var=framesize&val=${res}`

        fetch(query)
            .then(response => {
                console.log(`request to ${query} finished, status: ${response.status}`)
            })
    }
    function updateBright(brightLevel){
        const query = `${baseHost}/control?var=brightness&val=${brightLevel}`

        fetch(query)
            .then(response => {
                console.log(`request to ${query} finished, status: ${response.status}`)
            })
    }
    function updateQuality(quality){
    quality = 73 - quality
        const query = `${baseHost}/control?var=quality&val=${quality}`

        fetch(query)
            .then(response => {
                console.log(`request to ${query} finished, status: ${response.status}`)
            })
    }
    function updateExposure(exposure){
        const query = `${baseHost}/control?var=aec_value&val=${exposure}`

        fetch(query)
            .then(response => {
                console.log(`request to ${query} finished, status: ${response.status}`)
            })
    }

    const view = document.getElementById('stream')

    const stopStream = () => {
        window.stop();
    }

    const startStream = () => {
        view.src = `${streamUrl}/stream`
    }

    startStream()
    updateRes(8);
    updateBright(-2)
    updateQuality(63);
    updateExposure(65)
