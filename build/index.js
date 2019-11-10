"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
// import { Sorter } from './Sorter';
var NumberCollection_1 = require("./NumberCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numberCollection = new NumberCollection_1.NumberCollection([10, 3, -5, 0]);
numberCollection.sort();
console.log(numberCollection);
var charactersCollection = new CharactersCollection_1.CharactersCollection('dgfAdOJhWU');
charactersCollection.sort();
console.log(charactersCollection);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(2);
linkedList.add(8);
linkedList.add(3);
linkedList.add(9);
linkedList.add(7);
linkedList.sort();
console.log(linkedList.print());
