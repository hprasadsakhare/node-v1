const myName = document.getElementById('my-name');
const btn = document.getElementById('my-btn');

function makeTextSizer(size){
    function changeSize(){
        myName.style.fontSize = `${size}px`;
    }
    return changeSize;
}

const size12 = makeTextSizer('12px');
const size14 = makeTextSizer('14px');
const size16 = makeTextSizer('16px');
const size18 = makeTextSizer('18px');

btn.addEventListener('click',size18);