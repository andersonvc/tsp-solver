pub mod utils;
pub mod solver;

use wasm_bindgen::prelude::*;


extern crate js_sys;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;


#[wasm_bindgen]
pub struct Controller {
    nodes: Vec<(u8,u8)>,
    _solver: solver::Solver,
    solver_type: u8,
    best_route: Vec<u8>,
    best_dist: f32,
    iteration_cnt: u32,
    route_hist:Vec<(u32,f32)>,
}

#[wasm_bindgen]
impl Controller {
    pub fn new(node_cnt:u8,solver_type:u8)->Controller{
        let nodes = utils::create_random_nodes(node_cnt);
        let dist_map = utils::compute_dist_hashmap(&nodes);
        let best_route:Vec<u8> = utils::compute_random_path(node_cnt);
        let best_dist:f32 = utils::compute_circuit_dist(&dist_map, &best_route);
        let iteration_cnt:u32 = 0;
        let route_hist:Vec<(u32,f32)> = vec![(iteration_cnt,best_dist)];

        let solver = solver::Solver::new(node_cnt,dist_map);
        

        Controller {
            nodes,
            _solver:solver,
            solver_type,
            best_route,
            best_dist,
            iteration_cnt,
            route_hist,
        }
    }

    pub fn update(&mut self){
        self.iteration_cnt+=1;
        let curr_best = match self.solver_type{
            0 => self._solver.ant_colony_update(),
            1 => self._solver.greedy_update(),
            2 => self._solver.random_update(),
            _ => self._solver.random_update(),
        };
        
        if curr_best<self.best_dist{
            self.best_dist=curr_best;
            self.best_route=self._solver.route.clone();
            self.route_hist.push((self.iteration_cnt,self.best_dist))
        }
    }

    pub fn get_nodes(&self)->*const (u8,u8){
        self.nodes.as_ptr()
    }

    pub fn get_route(&self)->*const u8{
        self.best_route.as_ptr()
    }

    pub fn get_best_dist(&self)-> f32{
        self.best_dist
    }

    pub fn get_solver_type(&self)->u8{
        self.solver_type
    }
    

}

