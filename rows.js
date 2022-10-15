const rows = document.querySelectorAll(".row");
const colors = ['green','aquamarine','yellow','orange','orangered','red'];


const onDragOver = (event)=>{
    event.preventDefault();
}

const onDrop = (event)=>{
    event.preventDefault();
    const draggedCardId = event.dataTransfer.getData('id');
    const draggedCard = document.getElementById(draggedCardId);
    
    /*Update Local Storage */
const cardData = {
    imageSrc: draggedCard.querySelector('img').src,
    row: event.target.querySelector('.label').innerText,
}

    window.localStorage.setItem(draggedCard.id,JSON.stringify(cardData));
    
    event.target.appendChild(draggedCard);
}

rows.forEach((row,index)=>
{
    const label = row.querySelector(".label");
    label.style.backgroundColor = colors[index];
    row.ondragover = onDragOver;
    row.ondrop = onDrop;
})