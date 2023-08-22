function addJobContent() {
    fetch("../data/job-content.json")
        .then(res => res.json())
        .then(data => {
            let d = document.getElementById("vieclam");
            let re = "";
            for (let c of data) {
                re += `  <div class="flex">
                <div class="noidung">
                    <h1>${c.name}</h1>
                    <p>${c.noidung}</p>
                    <a href="${c.href}.html"><button class="btn">${c.btn}</button></a>
                </div>
                <div>
                    <img src="../background1_files/${c.img}" alt="" class="img">
                </div>
            </div>`;
            }

            d.innerHTML += re;
        })
}


function dataAnalyst() {
    fetch("../data/dataAnalyst.json")
    .then(res => res.json())
    .then(data => {
        let d = document.querySelectorAll("#dataAnalyst .viec");        
        data.forEach((c, i) => {
            let re = `<img src="../logo-anh/${c.img}" alt="" class="img">
                    <div class="viec-detail flex">
                        <div class="h">
                            <h1>${c.h1}</h1>
                            <h2>${c.h2}</h2>
                        </div>
                       <div class="lable">
                            <label title="${c.title}">${c.lable1}</label>
                            <label>${c.lable2}</label>
                       </div>
                    </div>
                    <div class="luong flex">
                        <span>${c.salary}</span>
                        <span class="see">Xem nhanh <<</span>
                        <span class="ungtuyen">Ứng tuyển</span>`;
            d[i].innerHTML += re;
        });
    })
}



function programmer() {
    fetch("../data/programmer.json")
    .then(res => res.json())
    .then(data => {
        let d = document.querySelectorAll("#programmer .viec");        
        data.forEach((c, i) => {
            let re = `<img src="../logo-anh/${c.img}" alt="" class="img">
                    <div class="viec-detail flex">
                        <div class="h">
                            <h1>${c.h1}</h1>
                            <h2>${c.h2}</h2>
                        </div>
                       <div class="lable">
                            <label title="${c.title}">${c.lable1}</label>
                            <label>${c.lable2}</label>
                       </div>
                    </div>
                    <div class="luong flex">
                        <span>${c.salary}</span>
                        <span class="see">Xem nhanh <<</span>
                        <span class="ungtuyen">Ứng tuyển</span>`;
            d[i].innerHTML += re;
        });
    })
}

function software() {
    fetch("../data/software.json")
    .then(res => res.json())
    .then(data => {
        let d = document.querySelectorAll("#software .viec");        
        data.forEach((c, i) => {
            let re = `<img src="../logo-anh/${c.img}" alt="" class="img">
                    <div class="viec-detail flex">
                        <div class="h">
                            <h1>${c.h1}</h1>
                            <h2>${c.h2}</h2>
                        </div>
                       <div class="lable">
                            <label title="${c.title}">${c.lable1}</label>
                            <label>${c.lable2}</label>
                       </div>
                    </div>
                    <div class="luong flex">
                        <span>${c.salary}</span>
                        <span class="see">Xem nhanh <<</span>
                        <span class="ungtuyen">Ứng tuyển</span>`;
            d[i].innerHTML += re;
        });
    })
}

function editor() {
    fetch("../data/editor.json")
    .then(res => res.json())
    .then(data => {
        let d = document.querySelectorAll("#editor .viec");        
        data.forEach((c, i) => {
            let re = `<img src="../logo-anh/${c.img}" alt="" class="img">
                    <div class="viec-detail flex">
                        <div class="h">
                            <h1>${c.h1}</h1>
                            <h2>${c.h2}</h2>
                        </div>
                       <div class="lable">
                            <label title="${c.title}">${c.lable1}</label>
                            <label>${c.lable2}</label>
                       </div>
                    </div>
                    <div class="luong flex">
                        <span>${c.salary}</span>
                        <span class="see">Xem nhanh <<</span>
                        <span class="ungtuyen">Ứng tuyển</span>`;
            d[i].innerHTML += re;
        });
    })
}

$(document).ready(function() {
   addJobContent();
   dataAnalyst();
   programmer();
   software();
   editor();
})



