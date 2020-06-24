const baseURL ="https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", baseURL + type + "/");
  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cb(JSON.parse(this.responseText));
    }
  };
}

function getTableHeaders(obj){
    var getTableHeaders =[];

    Object.keys(obj).forEach(function(key){
        tableHeaders.push(`<td>${key}</td>`);
    });

    return `<tr>${tableHeaders}</tr>`;
    
}
function writeToDocument(type){
    var el=document.getElementById("data");
    el.innerHTML=""; /*clear */
    getData(type, function(data){
        console.dir(data);
        data=data.results;
        data.forEach(function(item){
            Object.keys(item).forEach(function(key){
                console.log(key);
            });
             el.innerHTML += "<p>"+item.name+"</p>";
         });
            
       
    });
}
/*function printDataToConsole(data){
    console.log(data);
}


getData(printDataToConsole);
getData(function(data){
    console.log(data);
});
/*var data;*/

/*function setData(jsonData){
    data = jsonData;
        /*console.log(data);

}*/

/* console.log(this.readyState);*/

/*document.getElementById('data').innerHTML =this.responseText;*/
/*console.log(typeof(JSON.parse(this.responseText)));*/
/*console.log(JSON.parse(this.responseText));*/
/* data=this.responseText;*/
/*console.log(data);*/
/*setData(JSON.parse(this.responseText));

setTimeout(function(){
    console.log(data);
}, 500);
*/
