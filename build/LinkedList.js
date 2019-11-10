"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-unresolved */
/* eslint-disable max-classes-per-file */
/* eslint-disable import/prefer-default-export */
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.next = null;
        this.data = data;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super.call(this) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head)
                return 0;
            var counter = 1;
            var node = this.head;
            while (node.next) {
                counter += 1;
                node = node.next;
            }
            return counter;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        var length = this.length;
        if (!length || index < 0 || index >= length) {
            throw new Error('Index out of bounds');
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (index === counter) {
                return node;
            }
            counter += 1;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        var length = this.length;
        if (!length
            || leftIndex < 0
            || leftIndex >= length
            || rightIndex < 0
            || rightIndex >= length) {
            throw new Error('Index out of bounds');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var _a;
        var length = this.length;
        if (!length
            || leftIndex < 0
            || leftIndex >= length
            || rightIndex < 0
            || rightIndex >= length) {
            throw new Error('Index out of bounds');
        }
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        _a = [rightNode.data, leftNode.data], leftNode.data = _a[0], rightNode.data = _a[1];
    };
    LinkedList.prototype.print = function () {
        if (!this.head)
            return '';
        var node = this.head;
        var res = "" + node.data;
        while (node.next) {
            node = node.next;
            res += " --> " + node.data;
        }
        return res;
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
