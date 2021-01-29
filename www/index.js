import { World, SearchType } from "tsp_solver";
import { memory } from "tsp_solver/tsp_solver_bg";
//import { ContextReplacementPlugin } from "webpack";

//wasm.greet();
var nodeCnt = 50;
var points = [];
var dist = 2.0;

//const memvals = memory.buffer

var world = null;
var nodes = [];
var path = [];
var searchType = SearchType.Greedy;

const controller = document.getElementById('controller');

const canvas = document.getElementById('canvas-map');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");

const resetButton = document.getElementById('reset-button')
resetButton.addEventListener('click',event=>{
    resetNodes();
})

const searchSelection = document.getElementById('search-type')
searchSelection.addEventListener('change',event=>{
    
    switch (searchSelection.value) {
        case '0':
            searchType=SearchType.Random;
            break;
        case '1':
            searchType=SearchType.Greedy;
            break;
    
    }
    console.log('bbb',searchType,searchSelection.value)
    console.log(searchType);
})
searchSelection.addEventListener('click',event=>{
    switch (searchSelection.value){
        case 0:
            searchType=SearchType.Greedy;
            break;
        case 1:
            searchType=SearchType.Random;
            break;
    }
})

const resetNodes = () => {
    world = World.new(nodeCnt,searchType);
}

var counter = 0;
const renderLoop = () => {

    
    world.update_path()
    nodes = new Uint8Array(memory.buffer,world.nodes(),world.node_cnt()*2);
    path = new Uint8Array(memory.buffer,world.path(),nodeCnt);
    /*
    counter+=1
    if (counter<20){
        //counter = 1
        console.log(nodes)
        console.log(path)
    }
    */
    

    document.getElementById('distance_tracker').innerHTML=world.dist();

    if (window.innerHeight!=canvas.height || window.innerWidth!=canvas.width){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    
    const r = Math.min(canvas.height,canvas.width)*0.005
    const x_offset = canvas.width*0.05
    const y_offset = (canvas.height-controller.offsetHeight)*0.05

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
    for (const v of Array(nodeCnt).keys()){
        const x = nodes[2*v]*canvas.width/105+x_offset;
        const y = nodes[2*v+1]*(canvas.height-controller.offsetHeight)/105+y_offset;
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
        const prev_y = nodes[prev_node*2+1]*(canvas.height-controller.offsetHeight)/105+y_offset;
        
        const curr_x = nodes[curr_node*2]*canvas.width/105+x_offset;
        const curr_y = nodes[curr_node*2+1]*(canvas.height-controller.offsetHeight)/105+y_offset;
        
        ctx.moveTo(prev_x,prev_y);
        ctx.lineTo(curr_x,curr_y);
        ctx.stroke()
        
        prev_node = curr_node
        
    }

    requestAnimationFrame(renderLoop);
}

resetNodes();
renderLoop();