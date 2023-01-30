fetch('https://v1.hitokoto.cn?c=a')
  .then(response => response.json())
  .then(data => {
    const hitokoto = document.querySelector('#hitokoto_text')
    const from = document.querySelector('#from')
    const author = document.querySelector('#author')
    author.style.display = "none"
    if (data.from_who != null) {
      hitokoto.innerText = data.hitokoto
      from.innerHTML = data.from
      author.style.display = "block"
      author.innerHTML = data.from_who
    } else {
      hitokoto.innerText = data.hitokoto
      from.innerHTML = data.from
      author.style.display = "none"
    }

  })
  .catch(console.error)
