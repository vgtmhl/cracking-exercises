/**
 * Given a graph and 2 nodes, write an algo to determine if there is a path between them 
 * 
 * Assume we are given the graph in the form of a list of edges 
 * 
 * This problem can be solved with simple graph traversal, so let's implement DFS and BFS
 */

// A is connected with J. A is not connected with L.
let edges = [
    ['A', 'B'],
    ['A', 'C'],
    ['A', 'D'],
    ['B', 'E'],
    ['E', 'F'],
    ['C', 'G'],
    ['C', 'H'],
    ['H', 'J'],
    ['K', 'L'],
]

/**
 * Function that takes a list of edges and returns an adjacency list.
 * 
 * We could use either a map or a JS object. I'm going to use an object because I prefer the syntax,
 * but this is entirely subjective. The two constructs are very similar, and maps might even perform better.
 */
function buildGraph(edges) {
    let adjList = {}

    for (let [a, b] of edges) {
        // first time we encounter a node, we add it to the adjList with an empty array 
        if (!(a in adjList)) { adjList[a] = [] }
        if (!(b in adjList)) { adjList[b] = [] }

        // for each adjacency, we add it to the list if not already present
        if (!(a in adjList[b])) { adjList[b].push(a) }
        if (!(b in adjList[a])) { adjList[a].push(b) }
    }

    return adjList
}

/**
 * uses DFS to explore the given graph starting from startNode. 
 * returns true if there is a path between startNode and endNode.
 * returns false otherwise.
 * 
 * DFS uses a stack, and it can be easily implemented via iteration or via recursion.
 * This is the iterative approach
 */
function exploreDfs(graph, startNode, endNode) {
    let stack = [startNode]
    let visited = new Set()

    // continue until the stack is empty
    while (stack.length) {
        let curr = stack.pop()

        // if we meet the endNode, we return true
        if (curr === endNode) { return true }

        // else, we just add the node to the list of visited nodes.
        visited.add(curr)

        // then we add to the stack all neighbors of curr that have not been visited yet
        for (let neighbor of graph[curr]) {
            if (!visited.has(neighbor)) {
                stack.push(neighbor)
            }
        }
    }

    // if we went through the entire graph without finding endNode, we return false
    return false
}

/**
 * BFS works in a similar way, but uses a queue instead of a stack.
 */
function exploreBfs(graph, startNode, endNode) {
    let queue = [startNode]
    let visited = new Set()

    while (queue.length) {
        let curr = queue.shift()

        if (curr === endNode) { return true }

        visited.add(curr)

        for (let neighbor of graph[curr]) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor)
            }
        }

    }

    return false;

}

let graph = buildGraph(edges)

console.log(exploreDfs(graph, 'A', 'J'))
console.log(exploreDfs(graph, 'A', 'L'))

console.log(exploreBfs(graph, 'A', 'J'))
console.log(exploreBfs(graph, 'A', 'L'))
