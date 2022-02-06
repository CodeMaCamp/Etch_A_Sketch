function makeIdObject(num, idName){
    let rowItems ={};
    for (var i = 0; i<num; i++){
        
        rowItems[i]={
            id:idName+i
        };
    }
    return rowItems;
}
function setColor(isRandom){
return "000000";
}
function gridMaker(num, color){
    color="'#"+color+"'";
    let rowId = makeIdObject(num, "row");
    for(var i = 0; i<num; i++){
        let elemRow = document.createElement("div");
        elemRow.setAttribute('id', rowId[i].id);
        elemRow.setAttribute('class','row');
        document.getElementById("container").appendChild(elemRow);
        for(var j = 0; j<num; j++){
            let elemCol = document.createElement("div");
            elemCol.setAttribute("class","column");
            elemCol.setAttribute("onmouseover","this.style.backgroundColor ="+color);
            document.getElementById(rowId[i].id).appendChild(elemCol);
        }
    }
    
}
gridMaker(20,setColor());
