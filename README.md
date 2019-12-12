# sku-rank
:fire: a sku rank helper

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
let ret = rank(data, 'item')
```
```js
// return 
[ 
  [ '白色', 'S', '真皮' ],
  [ '白色', 'S', '尼龙' ],
  [ '白色', 'M', '真皮' ],
  [ '白色', 'M', '尼龙' ],
  [ '白色', 'L', '真皮' ],
  [ '白色', 'L', '尼龙' ],
  [ '黑色', 'S', '真皮' ],
  [ '黑色', 'S', '尼龙' ],
  [ '黑色', 'M', '真皮' ],
  [ '黑色', 'M', '尼龙' ],
  [ '黑色', 'L', '真皮' ],
  [ '黑色', 'L', '尼龙' ],
  [ '灰色', 'S', '真皮' ],
  [ '灰色', 'S', '尼龙' ],
  [ '灰色', 'M', '真皮' ],
  [ '灰色', 'M', '尼龙' ],
  [ '灰色', 'L', '真皮' ],
  [ '灰色', 'L', '尼龙' ]
]
```

### mode
mode | description  | sample |
-|-|-|
`full` (default) | Return item and index | `[{ row: 1, column: 0, item: 'S' }]` |
`index` | Only return index | `[1]` |
`item` | Only return item | `['S']` |
