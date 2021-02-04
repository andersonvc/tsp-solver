extern crate tsp_solver;

use std::collections::{HashMap};
use wasm_bindgen_test::*;
use tsp_solver::utils;


#[wasm_bindgen_test]
fn test_get_aco_selection_likelihood(){
    let mut nodes:Vec<u8> = vec![1,2,3];
    let pher_weights:Vec<f32> = vec![1.,2.,3.];
    let dist_weights:Vec<f32> = vec![1.,2.,3.];

    let alpha:f32 = 1.0;
    let beta:f32 = 1.0;

    let res = utils::get_aco_selection_likelihood(&pher_weights, &dist_weights, alpha, beta);

    assert_eq!(res,vec![0.071428575,0.35714287,1.0]);

    let sel = utils::pick_probabilistic_node(&res, &mut nodes);

    assert_eq!(nodes.len(),2);
    for rec in nodes.iter(){
        assert_ne!(*rec,sel);
    }

}


#[wasm_bindgen_test]
fn test_distance_likelihood(){
    let mut dist_map = HashMap::<(u8,u8),f32>::new();
    dist_map.insert((0,1),1.0);
    dist_map.insert((1,2),2.0);
    dist_map.insert((0,2),3.0);
    dist_map.insert((0,3),4.0);

    let curr_node:u8 = 0;
    let rem_nodes:Vec<u8> = vec![1,2,3];

    let res  = utils::get_distance_likelihood(&dist_map,&curr_node,&rem_nodes);
    assert_eq!(res,[1.0,0.33333334,0.25]);
    let res  = utils::get_distance_likelihood(&dist_map,&curr_node,&rem_nodes);
    assert_eq!(res,[1.0,0.33333334,0.25]);

}


#[wasm_bindgen_test]
fn test_circuit_dist(){
    let mut dist_map = HashMap::<(u8,u8),f32>::new();
    dist_map.insert((0,1),1.0);
    dist_map.insert((1,2),2.0);
    dist_map.insert((0,2),3.0);

    let path:Vec<u8> = vec![0,1,2];
    let circuit_dist = utils::compute_circuit_dist(&dist_map,&path);
    assert_eq!(circuit_dist,6.0)
}

#[wasm_bindgen_test]
fn test_pick_random_node(){
    let mut v:&mut Vec<u8> = &mut vec![0,1,2,3];
    let selected:u8 = utils::pick_random_node(&mut v);

    assert_eq!(v.len(),3);
    for rec in v.iter(){
        assert_ne!(*rec,selected);
    }

}

/*

#[test]
fn test_circuit_dist(){
    let nodes:Vec<(u8,u8)> = vec![(1,1),(2,1)];
    let path:Vec<u8> = vec![0,1];
    let d:f32 = compute_circuit_dist(&nodes,&path);
    assert_eq!(d,2.);

    let nodes:Vec<(u8,u8)> = vec![(1,5),(89,64),(22,8),(85,45),(77,29)];
    let path:Vec<u8> = vec![0,1,2,3,4];
    let d:f32 = compute_circuit_dist(&nodes,&path);
    assert_eq!(d,30860.);

    let path:Vec<u8> = vec![2,0,1,4,3];
    let d:f32 = compute_circuit_dist(&nodes,&path);
    assert_eq!(d,18702.0);
}

#[test]
fn test_dist(){
    let nodes:Vec<(u8,u8)> = vec![(1,5),(89,64),(22,8),(85,45),(77,29)];
    let d:f32 = compute_dist(nodes[0],nodes[1]);
    assert_eq!(d,11225.);

    let d:f32 = compute_dist(nodes[0],nodes[1]);
    assert_eq!(d,11225.);
}

#[test]
fn test_distmap(){
    let nodes:Vec<(u8,u8)> = vec![(1,5),(89,64),(22,8),(85,45),(77,29)];
    let distmap = compute_dist_hashmap(&nodes);

    assert_eq!(distmap[&(0,1)],11225.);

    assert_eq!(distmap.contains_key(&(1,0)),false);

    assert_eq!(distmap[&(1,3)],377.);

    let aa:Vec<u8>=vec![0,1,2,3,4];
    assert_eq!(compute_greedy_path(&distmap,5),aa);
}

#[test]
fn test_blah(){
    let mut aa:(u8,u8)=(5,3);
    if aa.1<aa.0{aa = (aa.1,aa.0)}

    let mut greedy_path: Vec<usize> = Vec::new();
    let mut data = 0 as usize;
    greedy_path.push(data);

    data = 1 as usize;
    greedy_path.push(data);

    data = 5 as usize;
    greedy_path.push(data);

    assert_eq!(aa,(3,5));
    assert_eq!(1,1);
    assert_eq!(greedy_path,vec![0,1,2]);
}
*/