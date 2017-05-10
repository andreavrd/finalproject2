$(document).ready(function(){
  var apiurl = "https://api.phila.gov/airport-parking/v1/";

  var updatePage = function( data ) {
      console.log(data.garages);

  $.each(data.garages, function(key,spots){
      console.log(spots);
      var spacesav = spots.spaces_available;
      var spacesavInt = parseInt(spacesav);
        var theprintout = '';
        theprintout = '<div class="awesome'+ " " +spots.display_name + '">';
        theprintout += '<h3>' + 'Parking ' + spots.display_name + "</h3>";
        theprintout += '<li>' + 'Total spaces: ' + spots.total_spaces + "</li>";
        theprintout += '<li class="spaces">'+ 'Available spaces: ' + Math.floor(spots.spaces_available) + "</li></div>";
        $('.parking').append(theprintout);

var spaces = Math.floor(spots.spaces_available)

$.each($('.awesome'), function() {
  if (spaces > 0) {

    console.log(this);
  } else {
    console.log(spacesavInt);
    $('.full').removeClass('goodtogo');
    $(this).addClass('full');

    };

})

        }
      );
  }

  // create a function for if our ajax call fails :( !


  var ajaxFailed = function( req, status, err ){
    console.log('something went wrong', status , err );

  };



  // set up the ajax options!

  var ajaxOptions = {
    url: apiurl,
    dataType: 'json',
    success: updatePage,
    error: ajaxFailed
  };

  // now, the good stuff!  Run the ajax call!
 $.ajax(ajaxOptions);
  // and above this!  Don't delete anything below here!
});
