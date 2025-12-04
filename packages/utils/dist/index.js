"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = exports.sayHello = void 0;
const sayHello = (name) => {
    return `Hello, ${name}! from @rslab/utils`;
};
exports.sayHello = sayHello;
const formatDate = (date) => {
    return date.toISOString().split('T')[0];
};
exports.formatDate = formatDate;
