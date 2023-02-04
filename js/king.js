king_input.value='典韦'
window.onload = async function () {
  let body = ''
  search_one_btn.onclick = async function () {
    body = ''
    search_one_btn.disabled = "disabled"
    search_all_btn.disabled="disabled"
    let hero_name = king_input.value
    const power_url = "https://www.sapi.run/hero/select.php?hero=" + hero_name + "&type=aqq"
    var power_data = await getdata(power_url)
    if (power_data == true) {
      search_one_btn.disabled=""
      search_all_btn.disabled =""
      return
    }
    if (power_data.code == 400) {
      showmsg("请输入正确的英雄名称")
      return
    }
    power_data = power_data.data
    body += '<tr><td>' + hero_name + '</td><td>' + power_data.guobiao
      + '</td><td>' + power_data.province+power_data.provincePower
      + '</td><td>' +power_data.city+power_data.cityPower
      + '</td><td>' +power_data.area+power_data.areaPower
      + '</td></tr>'
      let html = '<table class="mdui-table mdui-table-hoverable">'+
      '<thead>'+
        '<tr>'+
          '<th>英雄</th>'+
          '<th>国标</th>'+
          '<th>省标</th>'+
          '<th>市标</th>' +
          '<th>县标</th>'+
        '</tr>'+
      '</thead>'+
      '<tbody>' +
        body +
     '</tbody>'+
   '</table>'
    document.getElementsByClassName("mdui-table-fluid")[0].innerHTML = html
    search_one_btn.disabled=""
    search_all_btn.disabled=""
  }
  search_all_btn.onclick = async function () {
    body = ''
    king_progrss_container.style.display = "block"
    search_one_btn.disabled="disabled"
    search_all_btn.disabled="disabled"
    const hero_url = "https://www.somekey.cn/mini/hero/getHeroList.php"
    let hero_data = await getdata(hero_url)
    hero_data = hero_data.data
    let index=0
    for (let hero of hero_data) {
    const power_url = "https://www.sapi.run/hero/select.php?hero=" + hero.cname + "&type=aqq"
    var power_data = await getdata(power_url)
    if (power_data == true) {
      search_one_btn.disabled=""
      search_all_btn.disabled=""
      return
      }
    power_data=power_data.data
    body += '<tr><td>' + hero.cname + '</td><td>' + power_data.guobiao
      + '</td><td>' + power_data.province+power_data.provincePower
      + '</td><td>' +power_data.city+power_data.cityPower
      + '</td><td>' +power_data.area+power_data.areaPower
      + '</td></tr>'
    index++
    king_progress.style.width=(index/hero_data.length*100).toString()+'%'
  }
    let html = '<table class="mdui-table mdui-table-hoverable">'+
      '<thead>'+
        '<tr>'+
          '<th>英雄</th>'+
          '<th>国标</th>'+
          '<th>省标</th>'+
          '<th>市标</th>' +
          '<th>县标</th>'+
        '</tr>'+
      '</thead>'+
      '<tbody>' +
        body +
     '</tbody>'+
   '</table>'
    document.getElementsByClassName("mdui-table-fluid")[0].innerHTML = html
    king_progrss_container.style.display = "none"
    search_one_btn.disabled = ""
    search_all_btn.disabled = ""
  }
}