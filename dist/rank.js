"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function skuRank(data, mode = 'full') {
    let element = [];
    let elements = [];
    function rank(arr, depth) {
        for (let i = 0; i < arr[depth].length; i++) {
            switch (mode) {
                case 'index':
                    element[depth] = i;
                    break;
                case 'item':
                    element[depth] = arr[depth][i];
                    break;
                default:
                    element[depth] = {
                        row: depth,
                        column: i,
                        item: arr[depth][i]
                    };
                    break;
            }
            if (depth != arr.length - 1) {
                rank(arr, depth + 1);
            }
            else {
                elements.push(element.slice(0));
            }
        }
    }
    rank(data, 0);
    return elements;
}
exports.default = skuRank;
