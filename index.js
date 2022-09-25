//jshint esversion:6
// "start": "node --experimental-modules src/index.mjs " 
//use previous versions of franc as es6 has updated many modules which wont work with the current versions
// npm i langs npm i franc npm i minimist 
// node index.js --ip='Add language of your choice'  

const langs = require('langs')
const franc = require('franc')
const minimist = require('minimist')
let args = minimist(process.argv)
// import{franc} from 'franc'
const code = franc(args.ip)
console.log(args.ip)
const language = langs.where("3",code);

console.log(language.name)