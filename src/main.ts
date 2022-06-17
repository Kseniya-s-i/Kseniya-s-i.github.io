function sendSequest() {
    return fetch("https://www.boredapi.com/api/activity", mode="no-cors").then(response => {
        return response.json()
    }).then(data => {
        console.log(data);
        answ.style.display = 'block';
        if (data["link"] != "") {
            linked.textContent = "Link";
            linked.href = data["link"];
            linked.style.cursor = "pointer";
            linked.style.textDecoration = "none";
            linked.style.color = "#2D2D2D";
            linked.style.background = "#63E2B5";
            linked.style.boxShadow = "0px 0px 15px #4A4A4A";
            linked.target = "blank";
        }
        if (data["link"] === "") {
            linked.textContent = "No link available";
            linked.href = "";
            linked.style.cursor = "auto";
            linked.style.textDecoration = "none";
            linked.style.color = "#C9C9C9";
            linked.style.background = "transparent";
            linked.style.boxShadow = "none";
        }
        bla.textContent = data['activity'];
        act.textContent = "Type of activity: " + data['type'];
    })
}
const formm = document.getElementById('form') as HTMLFormElement
const nameEl = document.getElementById('name') as HTMLInputElement
const bla = document.getElementById('bla')
const act = document.getElementById('activity')
const answ = document.getElementById('answers')
const linked = document.getElementById('linked') as HTMLAnchorElement
formm.addEventListener('submit', function (e) {
    if (nameEl.value === '') {
        e.preventDefault()

    }
    if (nameEl.value != '') {
        e.preventDefault()

    }
    sendSequest()
})