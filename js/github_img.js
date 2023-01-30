fjGallery(document.querySelectorAll('.my-fj-gallery'), {
  itemSelector: '.my-fj-gallery-item',
  rowHeight: 220,
  gutter: 4,
  onJustify: function () {
    this.$container.style.opacity = '1'
  },
  onInit: function () {
    //alert("hello world")
  },
  onAppendImages: function () {

  }
});
async function getpic(url) {
  // Storing response
  const response = await fetch(url,
    {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    }
  ).catch(error => {
    console.error(error)
  });

  // Storing data in form of JSON
  var data = await response.json();
  var gallery = document.getElementById("github_img")
  let innerhtml= ''
  for (let img of data) {
    innerhtml += '<div class="my-fj-gallery-item"><a href="https://pic.zhiyiny.cn/img/'+img.name+'"'+'data-fancybox="gallery" data-caption=""><img src="https://pic.zhiyiny.cn/img/'+img.name+'"'+'></a></div>'
  }
  gallery.innerHTML = innerhtml
  fjGallery(gallery, 'appendImages', gallery.querySelectorAll(`.my-fj-gallery-item:nth-last-child(-n+` + data.length + `)`));
  var copy = document.getElementsByTagName('a');
  for (var i = 0; i < copy.length; i++) {
      copy[i].addEventListener("contextmenu", (e) => {
        e.preventDefault();
        console.log("当前URL为:",e.target.src);
        copyContent(e.target.src)
      });
    }
}
async function copyContent(text) {
  try {
    await navigator.clipboard.writeText("![]{"+text+"}");
    //console.log('Content copied to clipboard');
    Snackbar.show({text:'文本被成功复制到剪贴板',pos:'bottom-right'});
    /* Resolved - 文本被成功复制到剪贴板 */
  } catch (err) {
    //console.error('Failed to copy: ', err);
    Snackbar.show({text:'文本未被复制到剪贴板',pos:'bottom-right'});
    /* Rejected - 文本未被复制到剪贴板 */
  }
}

document.addEventListener('DOMContentLoaded', () => {
  //外链 gallery 标签相册瀑布流
  const url = "https://api.github.com/repos/LanHuang025/picturebed/contents/img"
  getpic(url)
  
});