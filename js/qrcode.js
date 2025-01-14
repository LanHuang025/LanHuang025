qrcode_input.value = "https://jing.zhiyiny.cn"
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://jing.zhiyiny.cn",
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
}
);
qrcode_confirm_btn.onclick = function () {
    try {
        qrcode.makeCode(qrcode_input.value)
        content.innerHTML = qrcode_input.value
    } catch (err) {
        showmsg("超过字数限制")
        qrcode_input.value = ""
    }
}
qrcode_clear_btn.onclick = function () {
    qrcode_input.value = ""
}
var dialogX = new mdui.Dialog('#dialog');
document.addEventListener('DOMContentLoaded', async () => {
    document.querySelector('img[style="display: block;"]').addEventListener("contextmenu", (e) => {
        e.preventDefault();
        dialogX.open()
    })
})
dialog.addEventListener('confirm.mdui.dialog',
    function () {
        document.querySelector('img[style="display: block;"]')
        download(document.querySelector('img[style="display: block;"]').src,'二维码'+".jpg");
    }
)