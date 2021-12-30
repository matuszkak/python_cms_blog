

document.querySelector('#createPost').addEventListener('click', function (e) {
  // if the text area has no text in it, we'll alert the user
  const data = CKEDITOR.instances.body.getData();
  if (!data) {
    alert('Article content is required.');
    e.preventDefault();
  }
});

// if there are toasts visible
// https://picturepan2.github.io/spectre/components/toasts.html
// this will make it dissapear, if the user clicks on the X
const toasts = document.querySelectorAll('.toast button');

toasts.forEach(el => el.addEventListener('click', event => {
  event.target.closest('.toast').remove()
}));


document.querySelector('#img-del-button').addEventListener('click', event => {
  // remove delete button and image
  // event.target.closest('del_butt').remove();
  var element1 = document.getElementById("img-and-del-button-container");
  element1.remove()

  var element2 = document.getElementById("teaser-image-input");
  element2.classList.remove('hidden')

  document.getElementById("originalTeaserImage").value = ""

});