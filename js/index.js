document.onreadystatechange = function () {
    console.log(document.readyState)
    if(document.readyState == 'interactive') {
        console.log("c'est ok")

        let dd = new Date() ;
        let df = new Date(Date.now())

    }
}