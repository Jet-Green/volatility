// fetch('./data/SBERP_060501_220520.txt')
//     .then(res => res.text())
//     .then(data => {
//         // let costs = parseFromTxt(data)
//         // let h1 = document.createElement('h1')
//         // document.body.appendChild(h1)
//         // h1.innerText = costs[0]['<TICKER>']
//         // for (let cost of costs) {
//         //     let p = document.createElement('p')
//         //     p.innerText = JSON.stringify(cost)
//         //     // `<b>DATE</b> -- ${cost['<DATE>'].slice(0, 4)}; <b>HIGH</b> -- ${cost['<HIGH>']}; <b>LOW</b> -- ${cost['<LOW>']}; <b>CLOSE</b> -- ${cost['<CLOSE>']}`
//         //     document.body.appendChild(p)

//         // }
//     })



let dropArea = document.getElementById('drop-area')

    ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false)
    })
function preventDefaults(e) {
    e.preventDefault()
    e.stopPropagation()
}


dropArea.addEventListener('drop', handleDrop, false)
function handleDrop(e) {
    let dt = e.dataTransfer
    let files = dt.files
    console.log();
    handleFiles(files)
}


function handleFiles(files) {
    var file = files[0]
    var reader = new FileReader()
    reader.onload = function () {
        let objResult = parseFromTxt(reader.result)
        for (let obj of objResult) {
            let p = document.createElement('p')
            p.innerText = JSON.stringify(obj)
            // `<b>DATE</b> -- ${cost['<DATE>'].slice(0, 4)}; <b>HIGH</b> -- ${cost['<HIGH>']}; <b>LOW</b> -- ${cost['<LOW>']}; <b>CLOSE</b> -- ${cost['<CLOSE>']}`
            document.body.appendChild(p)

        }
    }
    reader.readAsText(file)
}

function parseFromTxt(data, delimiter = ',') {
    let temp = data.split('\n')
    let result = []
    let titles = temp[0].split(delimiter)
    for (let t of temp.slice(1)) {
        let lineArr = t.split(delimiter)
        let res = {}
        for (let i = 0; i < lineArr.length; i++) {
            if (lineArr[i])
                res[titles[i]] = lineArr[i]
        }
        result.push(res)
    }

    return result
}