const screen = document.getElementById('screen');
const designForm = document.getElementById('designForm');
const submitBtn = document.getElementById('submit');
const deleteBtn = document.getElementById('delete');
const elementInput = document.getElementById('elementType');
const clearBtn = document.getElementById('clear');
const exportBtn = document.getElementById('export');
const confirmBtn = document.getElementById('confirm');
const cancelBtn = document.getElementById('cancel');
let selected = screen


elementInput.addEventListener('keyup', (event) => {
    const source = document.getElementById('source');
    if (elementInput.value == 'a' || elementInput.value == 'img') {
        source.classList.add('input-container');
        source.classList.remove('displayNone');
    } else {
        source.classList.add('displayNone');
        source.classList.remove('input-container');
    }
})

screen.addEventListener("click", (event) => {
    selected.classList.remove('selected')
    selected = event.target;
    selected.classList.add('selected')
})

deleteBtn.addEventListener("click", () => {
    if (selected !== screen) {
        selected.remove();
        selected = screen;
    }
});

confirmBtn.addEventListener("click", () => {
    screen.innerHTML = '';
    document.querySelector('.confirm-window').style.display = 'none';
})

cancelBtn.addEventListener("click", () => {
    document.querySelector('.confirm-window').style.display = 'none';
})

clearBtn.addEventListener("click", () => {
    document.querySelector('.confirm-window').style.display = 'block';
})

exportBtn.addEventListener("click", () => {
    const fileName = prompt('שמור קובץ בשם:', '');
    const htmlContent = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            direction: rtl;
        }
    </style>
    <title>${fileName}</title>
</head>

<body>
${screen.innerHTML}
</body>

</html>
    `
    const exportedFile = new Blob([`\ufeff${htmlContent}`], { type: `text/html;charset=utf-8` });
    const url = window.URL.createObjectURL(exportedFile);
    const a = document.createElement('a');
    a.style.display = 'none'
    a.href = url
    a.download = `${fileName}.html`;
    console.log(a.download);
    a.click();
});


submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const element = {
        elementType: event.target.form['elementType'].value.trim(),
        width: event.target.form['width'].value,
        height: event.target.form['height'].value,
        bgc: event.target.form['backgroundColor'].value,
        src: event.target.form['src'].value,
        content: event.target.form['content'].value,
        fColor: event.target.form['fColor'].value,
        fSize: event.target.form['fSize'].value,
        textAlign: event.target.form['textAlign'].value,
        textDecoration: event.target.form['textDecoration'].value,
        fFamily: event.target.form['fFamily'].value,
        position: event.target.form['Position'].value,
        top: event.target.form['Top'].value,
        left: event.target.form['Left'].value,
        padding: event.target.form['padding'].value,
        margin: event.target.form['margin'].value,
        display: event.target.form['display'].value,
        flexDirection: event.target.form['flexDirection'].value,
        alignItems: event.target.form['alignItems'].value,
        justifyContent: event.target.form['justifyContent'].value,
        borderSize: event.target.form['borderSize'].value,
        borderColor: event.target.form['borderColor'].value,
        borderRadius: event.target.form['borderRadius'].value,
        borderStyle: event.target.form['borderStyle'].value,
    }
    let item = document.createElement(element.elementType)
    if (element.width.indexOf('vw') !== -1) {
        let numValue = element.width.replace(/\D/g, "");
        element.width = numValue + '%';
    }
    if (element.height.indexOf('vh') !== -1) {
        let numValue = element.height.replace(/\D/g, "");
        element.height = numValue + '%';
    }

    item.style.width = element.width;
    item.style.height = element.height;
    item.style.backgroundColor = element.bgc;
    item.href = element.src;
    item.src = element.src;
    item.innerHTML = element.content;
    item.style.color = element.fColor;
    item.style.fontSize = element.fSize;
    item.style.textAlign = element.textAlign;
    item.style.textDecoration = element.textDecoration;
    item.style.fontFamily = element.fFamily;
    item.style.position = element.position;
    item.style.top = element.top;
    item.style.left = element.left;
    item.style.padding = element.padding;
    item.style.margin = element.margin;
    item.style.display = element.display;
    item.style.flexDirection = element.flexDirection;
    item.style.alignItems = element.alignItems;
    item.style.justifyContent = element.justifyContent;
    item.style.border = `${element.borderSize} ${element.borderStyle} ${element.borderColor}`;
    item.style.borderRadius = element.borderRadius;
    selected.appendChild(item);
    console.log(`

    ${item.src}
    `);

    selected.classList.remove('selected')
    selected = screen;
    event.target.form.reset();
})
