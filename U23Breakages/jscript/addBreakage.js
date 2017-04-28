//create firebase reference
var dbRef = new Firebase("https://u23-breakages.firebaseio.com/");
var issueRef = dbRef.child('issues')

//load older conatcts as well as any newly added one...
issueRef.on("child_added", function(snap) {
  console.log("added", snap.key(), snap.val());
  $('#breakages').append(contactHtmlFromObject(snap.val()));
});

//save contact
$('.addValue').on("click", function( event ) {
    event.preventDefault();
    if( $('#name').val() != '' || $('#email').val() != '' ){
      issueRef
        .push({
            breakage: {
              boatID: $('#boatID').val(),
              name: $('#name').val(),
              email: $('#email').val(),
              category: $('#category').val(),
              details: $('#details').val(),
              timestamp: Date.now(),
            }
        })
        breakageForm.reset();
    } else {
      alert('Please fill at leaset name or email!');
    }
  });

//prepare conatct object's HTML
function contactHtmlFromObject(issue){
  console.log( issue );
  var html = '';
  html += '<div class= "mdl-card mdl-shadow--4dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">';
      html += '<div class= "breakage-card mdl-card__title mdl-card--expand mdl-color--teal-300">'+ '<h2 class="mdl-card__title-text">' + "Boat " + issue.breakage.boatID+ '</h2>' + '</div>';
      html += '<div class="mdl-card__supporting-text mdl-color-text--grey-600">'
                + "Category: " + issue.breakage.category+
                + "Breakage Details: " +issue.breakage.details
                +'<br />'
                + "Reported by: " + issue.breakage.name
                +'</div>';
  html += '</div>';
  return html;
}
