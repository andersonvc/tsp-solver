import { Controller} from "tsp_solver";
import { memory } from "tsp_solver/tsp_solver_bg";
//import { ContextReplacementPlugin } from "webpack";

var nodeCnt = 50;
var points = [];
var dist = 2.0;

const bottomButtons = document.getElementById('bottom-button');
bottomButtons.style.right = String(window.innerWidth/2-130)+'px';


//const memvals = memory.buffer

var controller = null;
var nodes = [];
var path = [];


const controlPanel = document.getElementById('header');

const canvas = document.getElementById('canvas-map');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "white";

const modalUpdateButton = document.getElementById('modal-update')
modalUpdateButton.addEventListener('click',event=>{
    resetNodes();

})

const resetButton = document.getElementById('reset-button')
resetButton.addEventListener('click',event=>{
    resetNodes();
})


const resetNodes = () => {
    nodeCnt = parseInt(document.getElementById("node-cnt").options[document.getElementById("node-cnt").selectedIndex].text);
    document.getElementById('header').innerHTML="TSP Simulator: using "+ document.getElementById("search-type").options[parseInt(document.getElementById("search-type").value)].text;
    controller = Controller.new(nodeCnt,document.getElementById("search-type").value);
}

var counter = 0;
const renderLoop = () => {

    controller.update();
    nodes = new Uint8Array(memory.buffer,controller.get_nodes(),nodeCnt*2);
    path = new Uint8Array(memory.buffer,controller.get_route(),nodeCnt);
    
    document.getElementById('distance-tracker').innerHTML='Circuit Dist: '+controller.get_best_dist().toFixed(2);

    if (window.innerHeight!=canvas.height || window.innerWidth!=canvas.width){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        bottomButtons.style.right = String(window.innerWidth/2-130)+'px';
    }


    
    const r = Math.min(canvas.height,canvas.width)*0.004
    const x_offset = canvas.width*0.05
    const y_offset = (canvas.height-controlPanel.offsetHeight)*0.03

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
    for (const v of Array(nodeCnt).keys()){
        const x = nodes[2*v]*canvas.width/105+x_offset;
        const y = nodes[2*v+1]*(canvas.height-controlPanel.offsetHeight)/105+y_offset;
        ctx.moveTo(x,y);
        ctx.arc(x,y,r,0,2*Math.PI,false);
        ctx.fillStyle="black";
        ctx.fill();
    };
    
    var prev_node = path[nodeCnt-1];
    var curr_node = 0;
    for (var v=0;v<nodeCnt;v++){

        curr_node = path[v];

        const prev_x = nodes[prev_node*2]*canvas.width/105+x_offset;
        const prev_y = nodes[prev_node*2+1]*(canvas.height-controlPanel.offsetHeight)/105+y_offset;
        
        const curr_x = nodes[curr_node*2]*canvas.width/105+x_offset;
        const curr_y = nodes[curr_node*2+1]*(canvas.height-controlPanel.offsetHeight)/105+y_offset;
        
        ctx.moveTo(prev_x,prev_y);
        ctx.lineTo(curr_x,curr_y);
        ctx.stroke()
        
        prev_node = curr_node
        
    }

    requestAnimationFrame(renderLoop);
}

resetNodes();
renderLoop();