const btnConfirm = document.getElementById("confirm");
const urlInput = document.getElementById("url");
btnConfirm.addEventListener("click", () => {
    const url = urlInput.value;
    const baseBlock = document.querySelector(".iframe-wrapper");
    const iframe = document.createElement("iframe");
    baseBlock.innerHTML = "";
    iframe.setAttribute("id", "widgetApi");
    iframe.setAttribute("id", "widgetApi");
    iframe.setAttribute("allowtransparency", "true");
    iframe.setAttribute("src", `https://convert2mp3s.com/api/widget?url=${url}`);
    baseBlock.appendChild(iframe)
});
urlInput.addEventListener("change", (event) => {
    const url = event.target.value;
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    if (regex.test(url) || url === "") {
        btnConfirm.removeAttribute("disabled")
    } else {
        if (url !== "") {
            btnConfirm.setAttribute("disabled", "disabled")
        }
    }
});