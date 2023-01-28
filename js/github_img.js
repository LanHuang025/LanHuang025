fjGallery(document.querySelectorAll('.fj-gallery'), {
itemSelector: '.fj-gallery-item',
rowHeight: 220,
gutter: 4,
onJustify: function(){
  this.$container.style.opacity = '1'
}
});
btn.onclick = function () {
    let arr = [];
    arr.push('<div class="fj-gallery-item"><img src="https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg"></div>');
    fjGallery(document.querySelectorAll('.fj-gallery'),'appendImages')
}