var rowID = 0;
var addButton = document.getElementById("add-newrow");

addButton.onclick = function() {
  var itemString = document.getElementById("item-to-add").value;
  var nameString = document.getElementById("name-to-add").value;
  var priceString = document.getElementById("price-to-add").value;
  console.log(itemString + " , " + nameString + " , " + priceString);

  var tr = document.createElement("tr");
  rowID++;
  tr.setAttribute("id", "row-"+rowID);
  
  var td = document.createElement("td");
  td.appendChild(document.createTextNode(itemString));
  tr.appendChild(td);

  td = document.createElement("td");
  td.appendChild(document.createTextNode(nameString));
  tr.appendChild(td);
  
  td = document.createElement("td");
  td.appendChild(document.createTextNode(priceString));
  tr.appendChild(td);
  
  td = document.createElement("td");
  var button = document.createElement("button");
  button.classList.add("delete-row");
  button.setAttribute("data-rowid", "row-"+rowID);
  
  button.onclick = function(){
    var parentTrID = this.getAttribute("data-rowid");
    var parentTR = document.getElementById(parentTrID);
    parentTR.remove();
  }
  
  button.appendChild(document.createTextNode("ลบ"));
  td.appendChild(button);
  tr.appendChild(td);

  var tbody = document.getElementById("main-table");
  tbody.insertBefore(tr, tbody.lastChild);
  
  document.getElementById("item-to-add").value = "";
  document.getElementById("name-to-add").value = "-- เลือกผู้ฝากซื้อ --";
  document.getElementById("price-to-add").value = "";

  
}


