/* Iterate through JSON array and send to HTML */

// Where in HTML to write object data
var output1=document.getElementById('output1')

var data = {
    "dataAry": [
      { headquarters: 'Los Angeles, California',
        modifiedOn: '2017-01-31 10:00:00',
        manufacturerName: 'Apple',
        nameOfCEO: 'Ben Young',
        id: 1 },
      { headquarters: 'Haidian District, Beijing, China',
        modifiedOn: '2017-01-31 10:00:00',
        manufacturerName: 'Xiaomi',
        nameOfCEO: 'Lei Jun',
        id: 2 }]
}

// What object data to write out to HTML element
for(var x=0;x<data.dataAry.length;x++){
    var phoneMfr = data.dataAry[x]
    console.log(phoneMfr)
    output1.innerHTML += phoneMfr.id + "<br>"
    output1.innerHTML += phoneMfr.headquarters + "<br>"
    output1.innerHTML += phoneMfr.manufacturerName + "<br>"
    output1.innerHTML += phoneMfr.nameOfCEO + "<br>"
    output1.innerHTML += phoneMfr.modifiedOn + "<br>"
    }
