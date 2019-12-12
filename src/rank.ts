type SkuData = Array<Array<any>>
type Mode = 'full' | 'index' | 'item'

/**
 * 生成sku数据排列
 * @param data sku数据 类似 [['白色', '黑色'], ['M', 'S']]
 * @param mode full 索引和元素 index 只生成索引 item 只生成元素
 */
function skuRank(data: SkuData, mode: Mode = 'full'): SkuData {
    let element: Array<any> = []
    let elements: SkuData = []
    function rank(arr: SkuData, depth: number) {
        for (let i = 0; i < arr[depth].length; i++) {
            switch (mode) {
                case 'index':
                    element[depth] = i
                    break
                case 'item':
                    element[depth] = arr[depth][i]
                    break
                default:
                    element[depth] = {
                        row: depth,
                        column: i,
                        item: arr[depth][i]
                    }
                    break
            }
            if (depth != arr.length - 1) {
                rank(arr, depth + 1)
            } else {
                elements.push(element.slice(0))
            }
        }
    }
    rank(data, 0)
    return elements
}

export default skuRank