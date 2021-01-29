pub mod utils;

use wasm_bindgen::prelude::*;
use std::collections::{HashMap};
extern crate js_sys;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;


#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum SearchType {
    Random = 0,
    Greedy = 1,
}


#[wasm_bindgen]
pub struct World {
    node_cnt: u8,
    nodes: Vec<(u8,u8)>,
    distmap: HashMap<(u8,u8),f32>,
    search_type: SearchType,
    path: Vec<u8>,
    dist: f32,
}

#[wasm_bindgen]
impl World{

    pub fn new(node_cnt:u8,search_type:SearchType) -> World{

        let nodes = (0..node_cnt).map(|_| ((js_sys::Math::random()*100.0) as u8,(js_sys::Math::random()*100.0) as u8)).collect();
        let path = utils::compute_random_path(&nodes);
        let dist=utils::compute_circuit_dist(&nodes,&path);
        let distmap = utils::compute_dist_hashmap(&nodes);
        let search_type = search_type;
        World {
            node_cnt,
            nodes,
            distmap,
            search_type,
            path,
            dist,
        }
    }


    pub fn node_cnt(&self) -> u8 {
        self.node_cnt
    }

    pub fn dist(&self) -> f32 {
        self.dist
    }

    pub fn path(&self) -> *const u8 {
        self.path.as_ptr()
    }

    pub fn nodes(&self)-> *const (u8,u8) {
        self.nodes.as_ptr()
    }


    pub fn update_path(&mut self){
        //let curr_path;
        let curr_path = match &self.search_type {
            SearchType::Random => utils::compute_random_path(&self.nodes),
            SearchType::Greedy => utils::compute_greedy_path(&self.distmap, self.node_cnt)
        };

        let curr_dist:f32 = utils::compute_circuit_dist(&self.nodes,&curr_path);

        if curr_dist<self.dist {
            self.dist = curr_dist;
            self.path.copy_from_slice(&curr_path);
        }
    }
}




