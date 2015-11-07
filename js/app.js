/*
 * Requirements:
 *  A floor can be selected from the elevator panel.
 *  A visual cue is provided of which floor was selected.
 *  A visual cue is provided of the current floor.
 *  A visual cue is provided of the elevator's direction (up/down).
 *  The panel provides a visual cue when you have arrived at the selected floor.
 *	Selecting a button anchor does not navigate or change the URL.
 */
$(document).ready(function(){

  setInterval(function(){
   $(".floor-number").replaceWith("<p class='floor-number center-vertically'>" + elevator.currentFloor + "</p>");
  }, 5);

  var elevator = {
    currentFloor: 4,
  };

  $(".btn-container").on("click", function(e) {
    var target = $(e.target);
    $(target).addClass("isSelected");
    if (target.attr('id') == 1) {
      var properties = {scrollTop: 1200};
      if (elevator.currentFloor < target.attr('id')) {
        goingUp()
      }
      else {
        goingDown();
      }
    }
    else if (target.attr('id') == 2) {
      var properties = {scrollTop: 800};
      if (elevator.currentFloor < target.attr('id')) {
        goingUp()
      }
      else {
        goingDown();
      }
    }
    else if (target.attr('id') == 3) {
      var properties = {scrollTop: 400};
      if (elevator.currentFloor < target.attr('id')) {
        goingUp()
      }
      else {
        goingDown();
      }
    }
    else {
      var properties = {scrollTop: 0};
      if (elevator.currentFloor < target.attr('id')) {
        goingUp()
      }
      else {
        goingDown();
      }
    }
    $(document.body).animate(properties, { duration: 2000,
        complete: function () {
        target.removeClass("isSelected");
        $("#up, #down").removeClass("elevator__indicator--up elevator__indicator--down");
        elevator["currentFloor"] = target.attr('id');
        }
    })
  });

  function goingUp() {
    $("#up").addClass('elevator__indicator--up');
  };

  function goingDown() {
    $("#down").addClass('elevator__indicator--down');
  };
});
