/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
// import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([10, 3, -5, 0]);
numberCollection.sort();
console.log(numberCollection);

const charactersCollection = new CharactersCollection('dgfAdOJhWU');
charactersCollection.sort();
console.log(charactersCollection);

const linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(8);
linkedList.add(3);
linkedList.add(9);
linkedList.add(7);
linkedList.sort();
console.log(linkedList.print());
