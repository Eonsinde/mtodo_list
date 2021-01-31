let showAlert = (mesg, theme, duration) => {
    if (document.body.contains(document.querySelector('.message-box'))){
        document.body.removeChild(document.querySelector('.message-box'));
        let div = document.createElement('div');
        div.appendChild(document.createTextNode(`${mesg}`));
        div.className = `bg-${theme} text-app-theme message-box show text-capitalize`;
        document.body.appendChild(div);
        // setTimeout(() => { div.remove() }, duration);
        setTimeout(() => { div.classList.remove('show'); div.style.right = '-10px'; }, duration);
        setTimeout(() => {div.remove();}, duration + 1000);
    }else{
        let div = document.createElement('div');
        div.appendChild(document.createTextNode(`${mesg}`));
        div.className = `bg-${theme} text-app-theme message-box show text-capitalize`;
        document.body.appendChild(div);
        // setTimeout(() => { div.remove() }, duration);
        setTimeout(() => { div.classList.remove('show'); div.style.right = '-10px'; }, duration);
        setTimeout(() => {div.remove();}, duration + 1000);
    }
}


export default showAlert;