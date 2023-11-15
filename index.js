function randomColorGen(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    return `rgb(${r}, ${g}, ${b})`

}
function drawFractalTree(x, y, length, depth, initialAngle, branchAngle, svg, strokeWidth){
//base case check
if(depth === 0){
    return;
}

// const angle = -Math.PI/2;
const x2 = x + length * Math.cos(initialAngle);
const y2 = y + length * Math.sin(initialAngle);
const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
line.setAttribute("x1", x);
line.setAttribute("y1", y);
line.setAttribute("x2", x2);
line.setAttribute("y2", y2);
// line.setAttribute("stroke", depth > 5 ? "brown" : "green");
line.setAttribute("stroke", randomColorGen());
line.setAttribute("stroke-width", strokeWidth);
svg.appendChild(line);

const childStrokeWidth = strokeWidth * 0.8;
//recursively draw lines
drawFractalTree(x2, y2, length*0.7, depth-1, initialAngle - branchAngle, branchAngle, svg, childStrokeWidth);
drawFractalTree(x2, y2, length*0.7, depth-1, initialAngle + branchAngle, branchAngle, svg, childStrokeWidth);
}



function drawSVG(){
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", window.innerWidth);
    svg.setAttribute("height", window.innerHeight);
    svg.setAttribute("style", "background-color: black")
    drawFractalTree(window.innerWidth/2, window.innerHeight, 200, 8, -Math.PI/2, Math.PI/(Math.random() * (3 - 1 ) + 1), svg, 8);
    document.body.appendChild(svg);

}
drawSVG();
