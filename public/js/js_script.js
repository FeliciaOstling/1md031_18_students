
/*var myElement = document.getElementById("wrapper");    /*Loops all burgers in Json that has stock over 0 and creates a div with title, image, allergic information and order button. */

/*
for (i=0; i < 5; i++)
{
  item = food[i];
  console.log(item);
  if (item.stock > 0)
  {
    var createDIV = document.createElement("div")
    createDIV.setAttribute("class",'box '+item.i)
    var divText = document.createElement("p")
    var divTextValue = document.createTextNode(item.name)
    var img = document.createElement("img")
    img.src = item.image
    img.width = 300
    img.height = 200
    var list = document.createElement("ul")
    var listkcal = document.createElement("li")
    var listkcalText = document.createTextNode(item.kcal+' kcal')
    if (item.lactose == true ) {
      var listlactose = document.createElement("li")
      var listlactoseText = document.createTextNode('Contains lactose')
    }
    if (item.gluten == true)
    {
      var listgluten = document.createElement("li")
      var listglutenText = document.createTextNode('Contains gluten')
    }

    var burgerbutton = document.createElement("input");
    burgerbutton.setAttribute('type', 'checkbox');
    var burgerbuttonNode = document.createTextNode("add to order");


    createDIV.appendChild(divText);
    divText.appendChild(divTextValue);
    createDIV.appendChild(img);
    createDIV.appendChild(list);
    list.appendChild(listkcal);
    listkcal.appendChild(listkcalText);
    if (item.lactose == true ) {
      list.appendChild(listlactose);
      listlactose.appendChild(listlactoseText);
    }
    if (item.gluten == true) {
      list.appendChild(listgluten);
      listgluten.appendChild(listglutenText);
    }
    createDIV.appendChild(burgerbuttonNode);
    createDIV.appendChild(burgerbutton);
    myElement.appendChild(createDIV);

  }
}


var myButton = document.getElementById('SendButton');
myButton.addEventListener("click", myFunction);


function myFunction() {
  console.log ("Button clicked!");
  var nameid = document.getElementById("name").value;
  console.log(nameid);
  var mailid = document.getElementById("email").value;
  console.log(emailid);


  var betalingsmetodid = document.getElementById("payment").value;
  console.log(betalingsmetodid);
  var checkBox = document.getElementById("undisclosed");

  if(document.getElementById("female").checked){
    console.log("Female");
    var gender = "Female"
  }
  if(document.getElementById("male").checked){
    console.log("Male");
    var gender = "Male"
  }
  if(document.getElementById("undisclosed").checked){
    console.log("Undisclosed");
    var gender = "Undisclosed"
  }


  var buttonValues = [nameid, emailid, paymentid, gender];
  console.log(buttonValues);

}

 */
