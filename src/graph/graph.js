'use strict';

let GraphEdge = require('./graph-edge');
let GraphNode = require('./graph-node');

//This represents an undirected Graph
function Graph() {

  this.nodes = [];
  this.edges = [];

  // Helper function to find a node in nodes
  this.findNode = function (value) {
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].value === value) {
        return this.nodes[i];
      }
    }
    return null;
  };

  // Add a node to the list of nodes
  this.addNode = function(value) {
    if (this.findNode(value) !== null) {
      return;
    }
    this.nodes.push(new GraphNode(value));
  };

  // Add an edge between 2 nodes and give it a weight
  this.addEdge = function(source, destination, weight) {
    let first = this.findNode(source);
    let second = this.findNode(destination);
    if (first === null || second === null) {
      return;
    }
    this.edges.push(new GraphEdge(first, second, weight));
  };

  // Get the size of the graph by returning how many nodes are in the graph
  this.size = function() {
    // TODO
    return -1;
  };

  // Find the total number of edges in the graph
  this.numEdges = function() {
    // TODO
    return -1;
  };

  // Find the total weight of the graph by adding up the weights of each edge
  this.weight = function() {
    // TODO
    return -1;
  };

  // Find all node values a node is connected to.
  // Return all node values at the other side of an edge of the target node
  // Remember that edges are not directional: A -> B also implies B -> A
  this.findNeighbors = function(value) {
    // TODO
    return [];
  };

  // Stretch!
  // Find the optimal route from start to finish
  // Return each edge required to traverse the route
  // Remember that edges are not directional: A -> B also implies B -> A
  this.findPath = function(start, finish) {
    // TODO
    return [];
  };

  // Return a list of any nodes that are orphans.
  // An orphan is any node with no edges.
  this.findOrphans = function() {
    // TODO
    return [];
  };

  this.print = function() {
    for (let i = 0; i < this.edges.length; i++) {
      let edge = this.edges[i];
      // console.log(edge.first.value, '->', edge.second.value, edge.weight, 'mi');
    }
  };

  this.pathWeight = function(path) {
    let sum = 0;
    for (let i = 0; i < path.length; i++) {
      sum += path[i].weight;
    }
    return sum;
  };
}

module.exports = Graph;
