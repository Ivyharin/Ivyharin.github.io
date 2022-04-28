const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

class CustomD3Component extends D3Component {

  initialize(node, props) {
    // node is a <div> container,
    // const svg = d3.select(node).append('svg');

    var svg = d3.select("svg"),
        margin = 200,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin;


    var xScale = d3.scaleBand().range ([0, width]).padding(0.4),
        yScale = d3.scaleLinear().range ([height, 0]);

    var g = svg.append("g")
               .attr("transform", "translate(" + 100 + "," + 100 + ")");


    // do something with the props object passed in
    svg.data(props.data);
  }

  update(props) {
    // ...
  }

}

module.exports = CustomD3Component;

