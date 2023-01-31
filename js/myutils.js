async function getdata(url) {
    // Storing response
    const response = await fetch(url
    ).catch(_error => {
        btf.snackbarShow("请勿开启vpn访问本网站")
    });
  
    // Storing data in form of JSON
    var data = await response.json();
    return data
}