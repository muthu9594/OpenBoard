
let toolsCont =  document.querySelector(".tools-cont")
let optionsCont = document.querySelector(".options-cont");
let pencilToolCont = document.querySelector(".pencil-tool-cont")
let eraserToolCont = document.querySelector(".eraser-tool-cont")
let pencil = document.querySelector(".pencil")
let eraser = document.querySelector(".eraser")
let sticky = document.querySelector(".sticky")

let pencilFlag = false;
let eraserFlag = false
let optionsFlag = true;


optionsCont.addEventListener("click",(e)=>{
    // true -> tools show , false -> hide tools

    optionsFlag = !optionsFlag

    if(optionsFlag) openTools()
    else closeTools()

    
})

function openTools(){
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-times")
    iconElem.classList.add("fa-bars")
    toolsCont.style.display = "flex"

}

function closeTools(){
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-bars")
    iconElem.classList.add("fa-times")
    toolsCont.style.display = "none"

    pencilToolCont.style.display = "none"
    eraserToolCont.style.display = "none"

}

pencil.addEventListener("click",(e)=>{
    // true ->  show pencil tool , false -> hide pencil tool
    pencilFlag = !pencilFlag

    if(pencilFlag)   pencilToolCont.style.display = "block"
    else pencilToolCont.style.display = "none"
})

eraser.addEventListener("click",(e)=>{
    // true ->  show eraser tool , false -> hide pencil tool
    eraserFlag = !eraserFlag

    if(eraserFlag)   eraserToolCont.style.display = "flex"
    else eraserToolCont.style.display = "none"
})

sticky.addEventListener("click",(e)=>{
    let stickyCont = document.createElement("div");
    stickyCont.setAttribute("class","sticky-cont");
    stickyCont.innerHTML = `
    <div class="header-cont">
        <div class="minimize"></div>
        <div class="remove"></div>
    </div>
    <div class="note-cont">
        <textarea ></textarea>
    </div>`;



sticky.onmousedown = function(event){
    dragAndDrop(stickyCont,event)
}

    document.body.appendChild(stickyCont)


})

function dragAndDrop(element,event ){

  let shiftX = event.clientX - element.getBoundingClientRect().left;
  let shiftY = event.clientY - element.getBoundingClientRect().top;

  element.style.position = 'absolute';
  element.style.zIndex = 1000;

  moveAt(event.pageX, event.pageY);

  // moves the ball at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    element.style.left = pageX - shiftX + 'px';
    element.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // drop the ball, remove unneeded handlers
  element.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    element.onmouseup = null;
  };

};

element.ondragstart = function() {
  return false;
};
      