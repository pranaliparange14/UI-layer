const languages = new Array();

$(document).ready(function() {
  $('#target').click(function() {
      var view = $('#language').val();
      languages.push(view)
      console.log(languages);
      if (typeof(Storage)!=="undefined"){
        localStorage.setItem(languages.length,view);
      }
          
            
      $('#root').append("<ul><li>"+view+"</li></ul>");
  })
})