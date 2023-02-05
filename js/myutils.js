async function getdata(url) {
    // Storing response
    let flag = false
    let response
    try {
         response = await fetch(url)
    } catch {
        showmsg('请勿开启vpn访问本网站')
        flag=true
    }
    if (flag) {
        return 404
    }
    // Storing data in form of JSON
    var data = await response.json();
    return data
}
function showmsg(message) {
    mdui.snackbar({
        message: message,
        position: 'left-bottom',
        timeout: 1000
      });
}
function download(url, name){
    var a = document.createElement("a"); //Create <a>
    a.href = url
    a.download = name
    a.click(); //Downloaded file
}