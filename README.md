# 03China-city-select
https://longteng33.github.io/03China-city-select/<br>
用JS封装的全国三级城市联动选择<br>
1，使用new Option能为select标签创建新的选项<br>
2，Option()构造函数接受两个参数：文本(text)和值(value)<br>
3，options.add方法，添加新的选项<br>
4,selectedIndex 属性可设置或返回下拉列表中被选选项的索引号。<br>
5，onchange事件发生时，事件函数中的this指向的是触发事件的元素，所以需要通过bind改变this指向，使事件函数中的this指向这个new出来的对象<br>



