$.ajax({
    type: "POST",
    url: "../js/sheets.py",
    data: { param: text}
  }).done(function( o ) {
     // do something
  });