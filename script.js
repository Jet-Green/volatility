let gazprom = new File(['text'], 'gazprom.txt')
fetch('./data/gazprom.txt')
    .then(res => res.text())
    .then(data => {
        let temp = data.split('\n')
        let result = []
        for (let i of temp) {
            let t = i.split(',')
            result.push({
                date: t[0],
                highPrice: t[1]
            })
        }
        for (let r of result) {
            if (r.date) {
                let p = document.createElement('p')
                p.innerHTML = '<b>Дата: </b>' + r.date + ' ' + '<b>Цена: </b>' + r.highPrice
                document.body.appendChild(p);
            }
        }
        // console.log(result);
    })