var vm2 = new Vue ({                     //Creates a new Vue-object, connects to the HTML-element called wrapper.
  el: '#wrapper',
  data: {
    burgers: food,
    burgerOrd: []

  },
  methods:{

    getBurgers: function(){
      return this.burgerOrd;

    }
  }
})


'use strict';
var socket = io();

var vm = new Vue({                        //Creates a new Vue-object, connects to the HTML-element called contact.
  el: '#contact',
  data: {
    name: '',
    email: '',
    recipient: 'Swish',
    female:'',
    male:'',
    undisclosed: '',
    orders:{},
    orderBurger:'',

  },

  methods: {

    markDone: function(name, email, payment, female, male, undisclosed) {  //This function stores everything that is filled in by the  customer.

      let myElement = document.getElementById("order");
      let burgers = vm2.getBurgers();
      let burgerid = document.createElement("p");
      burgerid.appendChild(document.createTextNode(burgers));
      this.orderBurger= burgers;


      let ordertext = document.createElement("h1");
      ordertext.appendChild(document.createTextNode("Order confirmation"))
      let nameid = document.createElement("p");
      let emailid = document.createElement("p");
      let paymentm = document.createElement("p");
      let maleid = document.createElement("p");
      let femaleid = document.createElement("p");
      let undisclosedid = document.createElement("p");


      nameid.appendChild(document.createTextNode("Name: " + name));
      emailid.appendChild(document.createTextNode("Email: " + email));
      paymentm.appendChild(document.createTextNode("Payment method: " + payment));

      myElement.appendChild(ordertext);
      myElement.appendChild(nameid);
      myElement.appendChild(emailid);
      myElement.appendChild(paymentm);

      if (male) {

        myElement.appendChild(maleid);
        maleid.appendChild(document.createTextNode("Gender: " + male));

      }
      if (female) {

        myElement.appendChild(femaleid);
        femaleid.appendChild(document.createTextNode("Gender: " + female));

      }
      if (undisclosed) {

        myElement.appendChild(undisclosedid);
        undisclosedid.appendChild(document.createTextNode("Gender: " + undisclosed));
      }


      let orderbur = document.createElement("h1");
      let burgerlist = document.createElement("ul");
      orderbur.appendChild(document.createTextNode("Order summary"))


      myElement.appendChild(orderbur);

      myElement.appendChild(burgerid);


    },


    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },

    addOrder: function (event) {      //This is where we send the order details to the server.

      socket.emit("addOrder", { orderId:Math.floor(Math.random()*10), // This orderId is needed so target is not "null", generate random number.

        details:{ x: this.orders.A.details.x,
          y: this.orders.A.details.y},

          orderItems: [this.orderBurger],
          personalinfo: [this.name, this.email],
        });
      },

      displayOrder: function (event) {             // Stores coordinates on-click in orders without sending to server.
        var A= {
          x: event.currentTarget.getBoundingClientRect().left,
          y: event.currentTarget.getBoundingClientRect().top
        };

        this.orders = {
          "A": {
            details: {
              x: event.clientX - 10 - A.x,
              y: event.clientY - 10 - A.y}

            }}
          },
        }
      });
