import rank from '../src/rank'

test('object type', () => {
    let data = [
        [{ name: '白色' }, { name: '黑色' }, { name: '灰色' }],
        [{ name: 'S' }, { name: 'M' }, { name: 'L' }],
        [{ name: '真皮' }, { name: '尼龙' }]
    ]
    let ret = rank(data, 'item')
    expect(ret).toEqual([
        [{ name: '白色' }, { name: 'S' }, { name: '真皮' }],
        [{ name: '白色' }, { name: 'S' }, { name: '尼龙' }],
        [{ name: '白色' }, { name: 'M' }, { name: '真皮' }],
        [{ name: '白色' }, { name: 'M' }, { name: '尼龙' }],
        [{ name: '白色' }, { name: 'L' }, { name: '真皮' }],
        [{ name: '白色' }, { name: 'L' }, { name: '尼龙' }],
        [{ name: '黑色' }, { name: 'S' }, { name: '真皮' }],
        [{ name: '黑色' }, { name: 'S' }, { name: '尼龙' }],
        [{ name: '黑色' }, { name: 'M' }, { name: '真皮' }],
        [{ name: '黑色' }, { name: 'M' }, { name: '尼龙' }],
        [{ name: '黑色' }, { name: 'L' }, { name: '真皮' }],
        [{ name: '黑色' }, { name: 'L' }, { name: '尼龙' }],
        [{ name: '灰色' }, { name: 'S' }, { name: '真皮' }],
        [{ name: '灰色' }, { name: 'S' }, { name: '尼龙' }],
        [{ name: '灰色' }, { name: 'M' }, { name: '真皮' }],
        [{ name: '灰色' }, { name: 'M' }, { name: '尼龙' }],
        [{ name: '灰色' }, { name: 'L' }, { name: '真皮' }],
        [{ name: '灰色' }, { name: 'L' }, { name: '尼龙' }]
    ])
})