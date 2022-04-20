const API_END_POINT = "https://limetools.info/";

const LoadButton = document.getElementById("load");

const base64DecodeAsBlob = (text, type = "text/plain;charset=UTF-8") =>{
    return fetch(`data:${type};base64,` + text).then(response => response.blob());
  } 

const GetHtml = async (URL) =>{
    const response = await fetch(`${API_END_POINT}?url=${URL}`).then(r => r.text());
    const Html = await base64DecodeAsBlob(response);
    return Html;
}

const OpenHTML = (Html) =>{
    const blob = new Blob([Html], {type: "text/html"});
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
    return;
}

LoadButton.onclick = async () =>{
    const toURL = document.getElementById("url_text");
    if(toURL.value === ""){
        alert("URLを入力してください");
        return;
    }
    const Html = await GetHtml(toURL.value);
    OpenHTML(Html);
}