use std::collections::{HashMap,HashSet};
use std::cmp::{min,max};

extern crate js_sys;


pub fn get_aco_selection_likelihood(pher_weights:&Vec<f32>,dist_weights:&Vec<f32>,alpha:f32,beta:f32)->Vec<f32>{

    let gamma:Vec<f32> = pher_weights.iter().map(|x|x.powf(alpha)).collect();
    let nu:Vec<f32> = dist_weights.iter().map(|x| x.powf(beta)).collect();

    let weights:Vec<f32> = gamma.iter().zip(nu.iter()).map(|(gamma,nu)| gamma*nu).collect();
    let den:f32 = (weights.iter().sum::<f32>()).max(std::f32::MIN_POSITIVE);

    let cum_distribution:Vec<f32> = weights.iter().scan(0.0,|acc, &x|{*acc=*acc+x/den;Some(*acc)}).collect();
    cum_distribution

}

pub fn get_pheremone_likelihood(pher_map:&HashMap<(u8,u8),f32>, curr_node:&u8, valid_nodes:&Vec<u8>)->Vec<f32>{
    let weights = valid_nodes.into_iter().map(|x| *pher_map.get(&(min(*x,*curr_node),max(*x,*curr_node))).unwrap()).collect();
    return weights
}

pub fn get_distance_likelihood(dist_map:&HashMap<(u8,u8),f32>, curr_node:&u8, valid_nodes:&Vec<u8>)->Vec<f32>{
    let weights = valid_nodes.into_iter().map(|x| 1.0 / *dist_map.get(&(min(*x,*curr_node),max(*x,*curr_node))).unwrap()).collect();
    return weights
}


pub fn pick_probabilistic_node(cum_distrib:&Vec<f32>, nodes:&mut Vec<u8>)->u8{
    let rand_val = js_sys::Math::random() as f32;
    let mut target_ix:usize = 0;

    for i in 0..nodes.len(){
        if rand_val<=cum_distrib[i]{
            target_ix=i;
            break;
        }
    }
    nodes.swap_remove(target_ix as usize)
}

pub fn pick_random_node(nodes:&mut Vec<u8>)->u8{
    let rand_ix = js_sys::Math::floor(js_sys::Math::random()*(nodes.len() as f64)) as u8;
    nodes.swap_remove(rand_ix as usize)
}

pub fn compute_dist(pt1:(u8,u8),pt2:(u8,u8))->f32{
    let (x1,y1) = pt1;
    let (x2,y2) = pt2;
    ((x1 as f32 - x2 as f32).powf(2.)+(y1 as f32 - y2 as f32).powf(2.)).powf(0.5)
}

pub fn compute_circuit_dist(dist_map:&HashMap<(u8,u8),f32>, path:&Vec<u8>) -> f32 {

    let mut curr_dist:f32 = 0.0;
    for v in 1..path.len() {
        let n1 = std::cmp::min(path[v-1],path[v]);
        let n2 = std::cmp::max(path[v-1],path[v]);

        curr_dist+=*dist_map.get(&(n1,n2)).unwrap();
    };
    let n1 = std::cmp::min(path[0],path[path.len()-1]);
    let n2 = std::cmp::max(path[0],path[path.len()-1]);

    curr_dist+=*dist_map.get(&(n1,n2)).unwrap();
    curr_dist
    
}

pub fn create_random_nodes(node_cnt:u8)->Vec<(u8,u8)>{
    //Create random nodes (x,y) using the javascript random number generator
    //Vector should be immutable
    let nodes = (0..node_cnt).map(|_| ((js_sys::Math::random()*100.0) as u8,(js_sys::Math::random()*100.0) as u8)).collect();
    nodes
}

pub fn compute_dist_hashmap(nodes:&Vec<(u8,u8)>)->HashMap<(u8,u8),f32>{
    
    //Generate each node->node edge, with lower edge_id preceding
    let mut edge_ix:Vec<(u8,u8)> = Vec::new();
    for i in 0..nodes.len() as u8 {
      for j in i+1..nodes.len() as u8 {
          edge_ix.insert(0,(i,j));
      }
    }

    // edge1->edge2: point distance
    let dist_map:HashMap<(u8,u8),f32> = edge_ix.iter().map(|x| (*x,compute_dist(nodes[x.0 as usize],nodes[x.1 as usize]))).collect();

    dist_map
}

pub fn compute_random_path(node_cnt:u8)-> Vec<u8> {
    //Fisher Yates shuffle
    let mut rand_path: Vec<u8> = Vec::<u8>::with_capacity(node_cnt as usize);

    for i in 0..node_cnt{rand_path.push(i as u8);}

    for i in 0..node_cnt-1 {
        let j = js_sys::Math::floor(js_sys::Math::random()*(((node_cnt-i) as f64 ) + (i as f64)) ) as usize;
        rand_path.swap(i as usize,j as usize);
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