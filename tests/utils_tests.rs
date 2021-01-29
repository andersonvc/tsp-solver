extern crate tsp_solver;
use tsp_solver::utils::*;


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