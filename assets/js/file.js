
//Contact formulaire -> expand textearea
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}
// index.html biographie
$('#afficher').click(function() {
  $('#texte').show(1000); //
});
$('#cacher').click(function() {
  $('#texte').hide(1000);
});
