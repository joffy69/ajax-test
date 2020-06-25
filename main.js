const baseURL = "https://ci-swapi.herokuapp.com/api/";
//a function to request data from a json supplying server
function getData(type, cb) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cb(JSON.parse(this.responseText));
    }
  };

  xhr.open("GET", baseURL + type + "/");
  xhr.send();
  
}



function getTableHeaders(obj) {
  var tableHeaders = [];

  Object.keys(obj).forEach(function (key) {
    tableHeaders.push(`<td>${key}</td>`);
  });

  return `<tr>${tableHeaders}</tr>`;
  
}

function writeToDocument(type) {

  var tableRows = [];
  var el = document.getElementById("data");

  //el.innerHTML = ""; /*clear */

  getData(type, function (data) {
    data = data.results;
    var tableHeaders = getTableHeaders(data[0]);

    data.forEach(function (item) {
      var dataRow = [];
      Object.keys(item).forEach(function (key) {
          var rowData=item[key].toString();
          var truncatedData=rowData.substring(0,15);
        dataRow.push(`<td>${truncatedData}</td>`);
        //console.log(key);
      });
      tableRows.push(dataRow);
      // el.innerHTML += "<p>" + item.name + "</p>";
    });

    el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
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
