import test from 'node:test';
import assert from 'node:assert/strict';
import{surfaceColor,perspective}from'../dist/math/js/engines/material.js';
import{drawRoad}from'../dist/js/scenes/road.js';
test('Perspective enlarges near geometry and remains finite across supported dimensions',()=>{
 for(const z of[-12,-4,0,4,12])assert.ok(perspective([3,2,z],25).every(Number.isFinite));
 assert.ok(perspective([2,0,4],25)[0]>perspective([2,0,-4],25)[0]);
});
test('Material shading handles reversed winding and degenerate faces',()=>{
 const face=[[1,0,0],[1,1,0],[1,1,1],[1,0,1]];
 assert.equal(surfaceColor(face),surfaceColor([...face].reverse()));
 assert.match(surfaceColor([[0,0,0],[0,0,0],[0,0,0]]),/^rgb\(/);
});
test('Road position marker and ruler share the same scale',()=>{
 const g={box(){},line(){},sphere(){},text(){}};
 for(const range of[24,50,100])for(const fraction of[-1,0,.5,1])assert.equal(drawRoad(g,{position:range*fraction,halfRange:range}),fraction*1.8);
});
