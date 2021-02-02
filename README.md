# TSP Solver Webapp built using Rust & Wasm

## [Webapp Link](https://andersonvc.github.io/tsp-solver/)
This webapp tackles a classic NP-Hard optimization problem using a 'relatively' recent innovation in browser tech: WebAssembly. Though the incredible work of the Rust, wasm, & wasm-bindgen contributors, it is possible to run a Rust compiled binary on modern web-browsers. This work has massively simplified the process of building high-performance/low-level/thread-safe applications for web and mobile. 

The problem in this webapp is the Traveling Salesman Problem, where we are given a set of nodes and need to generate the shortest circuit between the nodes. As the current best solution for this problem is polytime, there are a number of approximate techniques for quickly generating high quality solutions. This app implements the ant colony optimization (ACO) algorithm to solve the TSP problem. ACO is a probabilistic algorithm where a metaheuristic is used to evolve the search space. 

In summary, a collection of ants will complete their own circuits at each iteration of the algo. An ant completes its circuit by randomly picking a new (previously unvisited) node from a weighted distribution function governed by a metric that considers edge distance and 'pheremones' accumulated on the edge. When the ants complete their circuit, the nodes traveled by them will receive a 'pheremone update'. The pheremones prevent the algorithm from getting stuck in a local minima; which is what happens with greedy search, and ensure the ants for the most part are making minor perturbations from the optimal ciruit. The randomness component allows the ACO to continually perform global and local searches.

For more materials on building wasm applications with Rust; the following resources are great starting points: [Repo](https://github.com/rustwasm/wasm_game_of_life), [Tutorial](https://rustwasm.github.io/book/game-of-life/introduction.html)

## [Webapp Link](https://andersonvc.github.io/tsp-solver/)




## Build Instructions

### Deploy static webpage
```sh
$ wasm-pack build && cd ~/<project dir>/www && npm install && npm run start
```

### Run unit tests
```sh
$ wasm-pack test --node
```

