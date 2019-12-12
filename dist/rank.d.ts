declare type SkuData = Array<Array<any>>;
declare type Mode = 'full' | 'index' | 'item';
declare function skuRank(data: SkuData, mode?: Mode): SkuData;
export default skuRank;
