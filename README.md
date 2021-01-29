# Traveling Salesman Problem Solver using Rust and WebAssembly


### Deploy static webpage
```sh
$ wasm-pack build && cd ~/<project dir>/www && npm install && npm run start
```

### Run unit tests
```sh
$ wasm-pack test --node
```

Codebase is based on the Rust Wasm game-of-life tutorial project: https://rustwasm.github.io/book/introduction.html