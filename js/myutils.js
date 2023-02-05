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
function download(href, title) {
    const a = document.createElement('a');
    a.setAttribute('href', href);
    a.setAttribute('download', title);
    a.click();
}