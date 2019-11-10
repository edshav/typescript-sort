/* eslint-disable import/no-unresolved */
/* eslint-disable max-classes-per-file */
/* eslint-disable import/prefer-default-export */
import { Sorter } from './Sorter';


class Node {
  data: number;

  next: Node | null = null;

  constructor(data: number) {
    this.data = data;
  }
}
export class LinkedList extends Sorter {
  head: Node | null;

  constructor() {
    super();
    this.head = null;
  }

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if (!this.head) return 0;
    let counter = 1;
    let node = this.head;
    while (node.next) {
      counter += 1;
      node = node.next;
    }
    return counter;
  }

  at(index: number): Node {
    const { length } = this;
    if (!length || index < 0 || index >= length) {
      throw new Error('Index out of bounds');
    }
    let counter = 0;
    let node = this.head;
    while (node) {
      if (index === counter) {
        return node;
      }
      counter += 1;
      node = node.next;
    }
    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const { length } = this;
    if (
      !length
      || leftIndex < 0
      || leftIndex >= length
      || rightIndex < 0
      || rightIndex >= length
    ) {
      throw new Error('Index out of bounds');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const { length } = this;
    if (
      !length
      || leftIndex < 0
      || leftIndex >= length
      || rightIndex < 0
      || rightIndex >= length
    ) {
      throw new Error('Index out of bounds');
    }
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    [leftNode.data, rightNode.data] = [rightNode.data, leftNode.data];
  }

  print(): string {
    if (!this.head) return '';
    let node = this.head;
    let res = `${node.data}`;
    while (node.next) {
      node = node.next;
      res += ` --> ${node.data}`;
    }
    return res;
  }
}
