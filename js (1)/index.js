'use strict';

$(document).ready(function () {

  $('.error').hide();
  // everything goes below this!

  // set up our apiURL and our apiKey - you will want to
  // replace this with your own key
  var apiurl = "http://congress.api.sunlightfoundation.com/legislators/";
  var searchurl = apiurl + 'locate?zip=';

  // create a function for if our ajax call succeeds :) !
  // we use the var functionName = function(){} format
  // this is ALMOST the same as doing
  // function updatePage(resp){}
  // but has some implications with regards to scope
  // http://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname

  var updatePage = function updatePage(resp) {
    console.log(resp.results);
    $.each(resp.results, function (key, rep) {
      var theprintout = '';
      theprintout += '<div class="representative"><h3>' + rep.first_name + ' ' + rep.last_name + '</h3>'
      theprintout += '<li>'+ 'Twitter: ' + rep.twitter_id +'</li>';
      theprintout += '<li class="party">'+ 'Party: ' + rep.party + '</li>';
      theprintout += '<li>' + 'Phone: ' + rep.phone + '</li>';
      theprintout += '<li>' + 'State: ' + rep.state + '</li>';
      theprintout += '<li>' + 'Gender: ' + rep.gender + "</li> </div>";
      $('#content').append(theprintout);

var name = rep.first_name
  //     $.each($('.representative'), function() {
  //       if (rep.party === "R") {
  //  I WAS TRYING TO CHANGE COLORS BASED ON PARTY
  //     } else {
  //       $('.party').css('color', 'blue');
  //     }})
    });
  };

  // create a function for if our ajax call fails :( !
  var ajaxFailed = function ajaxFailed(req, status, err) {
    console.log('something went wrong', status, err);
  };

  // set up the ajax options!
  var ajaxOptions = {
    url: 'https://cors-anywhere.herokuapp.com/' + apiurl,
    dataType: 'json',
    success: updatePage,
    error: ajaxFailed
  };

  // set up the ajax options!
  var ajaxSearchOptions = {
    url: 'https://cors-anywhere.herokuapp.com/'+ searchurl,
    dataType: 'json',
    success: updatePage,
    error: ajaxFailed
  };

  $('button').click(function () {
    var searchterm = $('input').val();
    console.log(searchterm);
    $('#content').empty();
    ajaxSearchOptions.url = searchurl + searchterm;
    $.ajax(ajaxSearchOptions);

    function isZip(zip){
        // Enter The IF Statement
        if(searchterm.length == 5) {
          $('.error').hide();
          console.log('Is Zip...');
        } else{
          console.log('Not A Zip...');
          $('.error').show();
        }
    }
    isZip();
    //ajaxSearchOptions.url = searchurl + searchterm;
    //$.ajax(ajaxSearchOptions);
  });


  // 1. Create a div with an error message and give it styling, etc...
  // 2. Hide that div the very first line of your jquery
  // 3. Create a function called isZip or validZip something along those lines. This should will return a true or false if its valid.
  // Function isZip(zip){ if length == 5 return true else return false
  // 4. Then when a user clicks search use this function to first check whether they entered a zipcode and then if not show that error message div you created

  // now, the good stuff!  Run the ajax call!
//  $.ajax(ajaxOptions);
  // and above this!  Don't delete anything below here!
});
