/*
 * @Author: yanyanshan yanyanshan@bigo.sg
 * @Date: 2023-09-12 09:13:20
 * @LastEditors: yanyanshan yanyanshan@bigo.sg
 * @LastEditTime: 2023-09-12 09:16:15
 * @FilePath: /react-mobx-todos-demo/src/test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import {
    observable,
    autorun,
    computed
} from 'mobx'
var numbers = observable([1,2,3]);
var sum = computed(() => numbers.reduce((a, b) => a + b, 0));

var disposer = autorun(() => console.log(sum.get()));
// 输出 '6'
numbers.push(4);
// 输出 '10'

disposer();
numbers.push(5);
// 不会再输出任何值。`sum` 不会再重新计算。
console.log(123456)
