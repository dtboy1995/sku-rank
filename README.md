# sku-rank
:pill: a sku rank helper

### install 
```
npm i sku-rank
```

### es6
```ts
import rank from 'sku-rank'
```

### commonjs
```js
const rank = require('sku-rank').default
```

### usage
```js
let data = [
    ['白色', '黑色', '灰色'],
    ['S', 'M', 'L'],
    ['真皮', '尼龙']
]

let result = rank(data, 'item')
```

### mode
mode | description  | sample |
-|-|-|
`full` (default) | return item and index | [{ row: 1, column: 0, item: 'S' }] |
`index` | only return index | [1] |
`item` | only return item | ['S'] |
