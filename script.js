const screen = document.getElementById('screen');
const designForm = document.getElementById('designForm');
const submitBtn = document.getElementById('submit')
let selected = screen

screen.addEventListener("click", (event) => {
    selected.classList.remove('selected')
    selected = event.target;
    selected.classList.add('selected')
    console.log(selected);
})
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const element = {
        elementType: event.target.form['elementType'].value,
        width: event.target.form['width'].value,
        height: event.target.form['height'].value,
        bgc: event.target.form['backgroundColor'].value,
        content: event.target.form['content'].value,
        fColor: event.target.form['fColor'].value,
        fSize: event.target.form['fSize'].value,
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
    item.style.width = element.width;
    item.style.height = element.height;
    item.style.backgroundColor = element.bgc;
    item.innerHTML = element.content;
    item.style.color = element.fColor;
    item.style.fontSize = element.fSize;
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

    selected=screen;
    event.target.form.reset();
})
