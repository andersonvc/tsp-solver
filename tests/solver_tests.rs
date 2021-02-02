extern crate tsp_solver;
use wasm_bindgen_test::*;
use std::collections::{HashMap};
use tsp_solver::solver::Solver;
use tsp_solver::utils::compute_circuit_dist;

#[wasm_bindgen_test]
fn test_greedy_solver(){
    let mut dist_map:HashMap<(u32,u32),f32> = HashMap::new();
    dist_map.insert((0,1),1.0);
    dist_map.insert((0,2),1.50);
    dist_map.insert((0,3),1.0);
    dist_map.insert((1,2),1.0);
    dist_map.insert((1,3),1.5);
    dist_map.insert((2,3),1.0);

    let mut solver = Solver::new(4,dist_map.clone());
    solver.greedy_update();
    assert_eq!(compute_circuit_dist(&dist_map,&solver.route),4.0);
    solver.greedy_update();
    assert_eq!(compute_circuit_dist(&dist_map,&solver.route),4.0);
    solver.greedy_update();
    assert_eq!(compute_circuit_dist(&dist_map,&solver.route),4.0);
    solver.greedy_update();
    assert_eq!(compute_circuit_dist(&dist_map,&solver.route),4.0);

}

#[wasm_bindgen_test]
fn test_ant_solver(){
    let mut dist_map:HashMap<(u32,u32),f32> = HashMap::new();
    dist_map.insert((0,1),1.0);
    dist_map.insert((0,2),300.);
    dist_map.insert((0,3),1.0);
    dist_map.insert((1,2),1.0);
    dist_map.insert((1,3),300.);
    dist_map.insert((2,3),1.0);

    let mut solver = Solver::new(4,dist_map.clone());

    solver.ant_colony_update();
    assert_eq!(compute_circuit_dist(&dist_map,&solver.route),4.0);


}

/*
Test Needs to be deterministic before it can be used as a standard test
#[wasm_bindgen_test]
fn test_ant_solver(){
    let mut dist_map:HashMap<(u32,u32),f32> = HashMap::new();
    dist_map.insert((0,1),1.0);
    dist_map.insert((0,2),300.);
    dist_map.insert((0,3),1.0);
    dist_map.insert((1,2),1.0);
    dist_map.insert((1,3),300.);
    dist_map.insert((2,3),1.0);

    let mut pher_map:HashMap<(u32,u32),f32> = HashMap::new();
    pher_map.insert((0,1),1.0);
    pher_map.insert((0,2),5.0);
    pher_map.insert((0,3),1.0);
    pher_map.insert((1,2),1.0);
    pher_map.insert((1,3),5.0);
    pher_map.insert((2,3),1.0);

    let mut solver = Solver::new(4,dist_map.clone());

    solver.pher_map = pher_map;

    //distance dominates
    solver.ant_tour();
    assert_eq!(compute_circuit_dist(&dist_map,&solver.route),4.0);


    let mut dist_map:HashMap<(u32,u32),f32> = HashMap::new();
    dist_map.insert((0,1),2.0);
    dist_map.insert((0,2),3.);
    dist_map.insert((0,3),2.0);
    dist_map.insert((1,2),2.0);
    dist_map.insert((1,3),3.);
    dist_map.insert((2,3),2.0);

    let mut pher_map:HashMap<(u32,u32),f32> = HashMap::new();
    pher_map.insert((0,1),1.0);
    pher_map.insert((0,2),300.0);
    pher_map.insert((0,3),1.0);
    pher_map.insert((1,2),1.0);
    pher_map.insert((1,3),300.0);
    pher_map.insert((2,3),1.0);
    

    let mut solver = Solver::new(4,dist_map.clone());
    solver.pher_map = pher_map;

    //pheremones dominate
    solver.ant_colony_update();
    assert_eq!(compute_circuit_dist(&dist_map, &solver.route),10.0);

}
*/