AFRAME.registerComponent("markerhandler", {
  init: async function() {
    this.el.addEventListener("markerFound", () => {
      console.log("marker is found");
      this.handleMarkerFound();
    });

    this.el.addEventListener("markerLost", () => {
      console.log("marker is lost");
      this.handleMarkerLost();
    });
  },
  handleMarkerFound: function() {
    
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";

    var orderButtton = document.getElementById("order-button");
    var orderSummaryButtton = document.getElementById("order-summary-button");
    var rateUsButton = document.getElementById("rate-us-button");

    
    orderButtton.addEventListener("click", () => {
      swal({
        icon: "success",
        title: "Thanks For Order !",
        text: "  ",
        timer: 2000,
        buttons: false
      });
    });

    orderSummaryButtton.addEventListener("click", () => {
      swal({
        icon: "error",
        title: "An error has occured",
        text: "plz report error to us so we can fix it asap !",
        button: "report error",
      });
      
    });

    rateUsButton.addEventListener("click", () => {
      swal({
        icon: "success",
        title: "Thanks For Rating Us !",
        text: "  ",
        timer: 2000,
        buttons: false
      });
    })
  },

  handleMarkerLost: function() {
    
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  }
});