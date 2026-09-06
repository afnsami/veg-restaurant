



function menuTab() {
    console.log("menu");

    const menuDiv = document.createElement('div');
    menuDiv.className = 'menuDiv';

    const h1 = document.createElement('h1');
    h1.textContent = "Our Dishes";
    const p = document.createElement('p');
    p.innerHTML = "Rice: <span style='color: green'>$1</span> <br>" + 
                "Soyabean: <span style='color: green'>$3</span> <br>" + 
                "Cabbage Curry: <span style='color: green'>$3</span> <br>" + 
                "Paneer Curry: <span style='color: green'>$4.50</span> <br>" + 
                "Pumpkin Curry: <span style='color: green'>$2</span> <br>" + 
                "Spinach Curry: <span style='color: green'>$1.50</span> <br>" + 
                "Chana Dal Bhuna: <span style='color: green'>$2</span> <br>" + 
                "Lentil Soup: <span style='color: green'>$1.50</span> <br>" + 
                "Rice Pudding: <span style='color: green'>$5</span>";

    menuDiv.appendChild(h1);
    menuDiv.appendChild(p);
    document.getElementById("content").appendChild(menuDiv);

};

function aboutTab() {


};

export { menuTab, aboutTab };