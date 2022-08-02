// Note :
//  ==> [20, 30] + ""
//  ==> '20,30'

const labelsCont = document.querySelector(".label-cont");
let svgWidth = 270;
let svgHeight = 150;
let barPadding = 10;
let heightPadding = 50;

let barWidth = svgWidth / data.length;
let svgElement = document.querySelector("#barJs");
svgElement.setAttribute("width", svgWidth);
svgElement.setAttribute("height", svgHeight);

for(let i = 0; i < data.length; i++){
    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("y", svgHeight - data[i].amount - heightPadding);
    rect.setAttribute("height", data[i].amount + heightPadding);
    rect.setAttribute("width", barWidth - barPadding);
    let translateVal = [barWidth * i + 5 , 0];
    rect.setAttribute("transform", "translate( " + translateVal + ")");
    svgElement.appendChild(rect); 
    
    // add labels
    let plabel = document.createElement("p");
    plabel.innerText = data[i].day;
    labelsCont.appendChild(plabel);
}