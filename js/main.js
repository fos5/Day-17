addEventListener('submit', (e)=>{
    e.preventDefault();

    const item = document.getElementById("userInput").value;
    const myItem = String(item).replace(/\s+/g, '');
    alert(`There are ${myItem.length} words`, setTimeout(300));
    
})