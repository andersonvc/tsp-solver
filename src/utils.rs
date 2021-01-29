use std::collections::{HashMap,HashSet};


pub fn compute_dist(pt1:(u8,u8),pt2:(u8,u8))->f32{
    let (x1,y1) = pt1;
    let (x2,y2) = pt2;
    (x1 as f32 - x2 as f32).powf(2.)+(y1 as f32 - y2 as f32).powf(2.)
}

pub fn compute_circuit_dist(nodes:&Vec<(u8,u8)>, path:&Vec<u8>) -> f32 {
    let mut curr_dist:f32 = 0.0;
    for v in 1..path.len() {
        
        let a = path[v-1] as usize;
        let b = path[v] as usize;

        let (prev_x,prev_y) = nodes[a];
        let (curr_x,curr_y) = nodes[b];

        curr_dist+=(curr_y as f32 -prev_y as f32).powf(2.)+(curr_x as f32 - prev_x as f32).powf(2.);
    };

    let a = path[path.len()-1] as usize;
    let b = path[0] as usize;

    let (prev_x,prev_y) = nodes[a];
    let (curr_x,curr_y) = nodes[b];

    curr_dist+=(curr_y as f32 - prev_y as f32).powf(2.)+(curr_x as f32 - prev_x as f32).powf(2.);
    curr_dist
}

pub fn compute_dist_hashmap(nodes:&Vec<(u8,u8)>)->HashMap<(u8,u8),f32>{
    let mut dist_map = HashMap::with_capacity(nodes.len()*(nodes.len()-1)/2);
    for i in 0..nodes.len(){
        for j in i+1..nodes.len(){
            dist_map.insert((i as u8,j as u8),compute_dist(nodes[i], nodes[j]));
        }
    }

    dist_map
}

pub fn compute_random_path(nodes:&Vec<(u8,u8)>)-> Vec<u8> {
    //Fisher Yates shuffle
    let mut rand_path: Vec<u8> = Vec::<u8>::with_capacity(nodes.len());

    for i in 0..nodes.len(){rand_path.push(i as u8);}

    for i in 0..rand_path.len()-1 {
        let j = js_sys::Math::floor(js_sys::Math::random()*(((rand_path.len()-i) as f64 ) + (i as f64)) ) as usize;
        rand_path.swap(i,j);
    }
    rand_path
}


pub fn compute_greedy_path(distmap:&HashMap<(u8,u8),f32>,node_cnt:u8)->Vec<u8>{
    let mut remaining_nodes=HashSet::<u8>::with_capacity(node_cnt as usize);
    for i in 0..node_cnt{
        remaining_nodes.insert(i as u8);
    }

    let mut greedy_path: Vec<u8> = Vec::<u8>::with_capacity(node_cnt as usize);
    let mut curr_dist;
    let mut curr_node:u8 = js_sys::Math::floor(js_sys::Math::random()*(node_cnt as f64)) as u8;
    let mut optimal_node:u8 = 0;
    let mut edge:(u8,u8);
    greedy_path.push(curr_node);
    remaining_nodes.remove(&curr_node);

    for _ in 0..node_cnt-1{
        curr_dist = std::f32::MAX;
        for next_node in &remaining_nodes{
            edge = (curr_node as u8,*next_node as u8);
            if edge.1<edge.0{
                edge = (edge.1,edge.0)
            }

            if distmap[&edge]<curr_dist{
                curr_dist = distmap[&edge];
                optimal_node=*next_node;
            }
        }
        greedy_path.push(optimal_node as u8);
        remaining_nodes.remove(&optimal_node);
        curr_node = optimal_node;
    }
    greedy_path

}