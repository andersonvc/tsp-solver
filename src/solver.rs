use crate::utils;
use std::collections::{HashMap};

pub struct Solver{
    pub route: Vec<u8>,
    node_cnt: u8,
    pub dist_map: HashMap<(u8,u8),f32>,
    pub pher_map: HashMap<(u8,u8),f32>,
    alpha: f32,
    beta: f32,
    ant_cnt: u8,
    decay_rate:f32,
    seed_rounds:u8,
}

impl Solver{
    pub fn new(node_cnt:u8,dist_map:HashMap<(u8,u8),f32>)->Solver{
        let route:Vec<u8> = utils::compute_random_path(node_cnt);
        let pher_keys:Vec<(u8,u8)> = dist_map.keys().cloned().collect();
        let pher_map:HashMap<(u8,u8),f32> = pher_keys.into_iter().map(|x|(x,1.0)).into_iter().collect();

        let ant_cnt = match node_cnt{
            50 => 45,
            75 => 35,
            100 => 25,
            150 => 20,
            _ => 40,
        };
 

        Solver {
            route,
            node_cnt,
            dist_map,
            pher_map,
            alpha:1.0,
            beta:1.6,
            ant_cnt: ant_cnt,
            decay_rate: 0.2,
            seed_rounds:5,
        }
    }
}

impl Solver{
    pub fn random_update(&mut self)->f32{
        self.route = utils::compute_random_path(self.node_cnt);
        utils::compute_circuit_dist(&self.dist_map,&self.route)
    }
}


impl Solver{
    
    pub fn greedy_update(&mut self)->f32{

        let mut remaining_nodes:&mut Vec<u8> = &mut (0..self.node_cnt).collect();

        let mut curr_node = utils::pick_random_node(&mut remaining_nodes);
        let mut next_best_node = 0;
        let mut next_best_ix = 0;
        let mut greedy_path: Vec<u8> = Vec::with_capacity(self.node_cnt as usize);
        greedy_path.push(curr_node);

        for _ in 0..self.node_cnt-1{
            let mut curr_dist = std::f32::MAX;
            //for (i,next_node) in (&remaining_nodes).iter().enumerate(){
            for i in 0..remaining_nodes.len(){
                
                let next_node = remaining_nodes[i];
                let n1 = std::cmp::min(curr_node, next_node);
                let n2 = std::cmp::max(curr_node,next_node);
                
                let new_dist:f32 = *self.dist_map.get(&(n1,n2)).unwrap();
                if new_dist < curr_dist{
                    curr_dist = new_dist;
                    next_best_node=next_node;
                    next_best_ix=i;
                }
            }
            greedy_path.push(next_best_node as u8);
            remaining_nodes.swap_remove(next_best_ix);
            curr_node = next_best_node;
        }

        self.route = greedy_path;
        utils::compute_circuit_dist(&self.dist_map,&self.route)
    }
}

impl Solver{

    pub fn ant_colony_update(&mut self)->f32{
        if self.seed_rounds>0{
            self.seed_rounds-=1;
            return self.greedy_update()

        }

        let update_const:f32 = 1111.0;
        
        let mut ant_tours:Vec<(f32,Vec<u8>)> = (0..self.ant_cnt).map(|_|self.ant_tour()).collect();
        ant_tours.sort_by(|a,b| (a.0).partial_cmp(&b.0).unwrap());
        ant_tours.truncate((&self.ant_cnt/2) as usize);
        
        let mut curr_best_dist:f32 = std::f32::MAX;
        
        //apply pheremone decay
        for val in self.pher_map.values_mut(){
            *val = *val*(1.0-self.decay_rate);
        }


        for (dist,path) in ant_tours.iter(){
            
            //capture best node if discovered during this iteration
            if dist < &curr_best_dist{
                curr_best_dist = dist.clone();
                self.route = path.to_vec();
            }

            //update pheremone weights
            for i in 1..path.len(){
                let n1 = std::cmp::min(path[i],path[i-1]);
                let n2 = std::cmp::max(path[i],path[i-1]);
                self.pher_map.insert((n1,n2), self.pher_map[&(n1,n2)]+update_const/dist);
            }
            
            let n1 = std::cmp::min(path[0],path[path.len()-1]);
            let n2 = std::cmp::max(path[0],path[path.len()-1]);
            self.pher_map.insert((n1,n2), self.pher_map[&(n1,n2)]+update_const/dist);
        }
        
        curr_best_dist
    
    }

    pub fn ant_tour(&self)->(f32,Vec<u8>){

        let mut remaining_nodes:&mut Vec<u8> = &mut (0..self.node_cnt).collect();

        let mut curr_node = utils::pick_random_node(&mut remaining_nodes);

        let mut pheremone_weights = utils::get_pheremone_likelihood(&self.pher_map, &curr_node, &remaining_nodes);
        let mut distance_weights = utils::get_distance_likelihood(&self.dist_map, &curr_node, &remaining_nodes);
        let mut cum_distribution = utils::get_aco_selection_likelihood(&pheremone_weights, &distance_weights, self.alpha, self.beta);

        let mut ant_path: Vec<u8> = Vec::with_capacity(self.node_cnt as usize);
        ant_path.push(curr_node);

        while !remaining_nodes.is_empty() {
            let next_node = utils::pick_probabilistic_node(&cum_distribution, &mut remaining_nodes);
            ant_path.push(next_node);
            curr_node = next_node;

            pheremone_weights = utils::get_pheremone_likelihood(&self.pher_map, &curr_node, &remaining_nodes);
            distance_weights = utils::get_distance_likelihood(&self.dist_map, &curr_node, &remaining_nodes);
            cum_distribution = utils::get_aco_selection_likelihood(&pheremone_weights, &distance_weights, self.alpha, self.beta);

        }

        (utils::compute_circuit_dist(&self.dist_map,&ant_path),ant_path)

    }
}