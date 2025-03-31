## 支持属性

| 属性 | 类型 | 功能 |
|:-:|:-:|---|
| alpha | float | View 的透明度。视图的 alpha 通道属性，介于 0(完全透明) 和 1(完全不透明) 之间的值。 |
| h | string<br>number | View 的高度。可设置为`auto`或`*`，当为具体数值时默认单位为`dp`。 |
| w | string<br>number | View 的宽度。可设置为`auto`或`*`，当为具体数值时默认单位为`dp`。 |
| id | string |View 的 id，用来区分一个界面下的不同控件和布局，一个界面的 id 在同一个界面下通常是唯一的，也就是一般不存在两个 View 有相同的 id。id 属性也是连接 xml 布局和 JavaScript 代码的桥梁，在代码中可以通过一个 View 的 id 来获取到这个 View，并对他进行操作 (设置点击动作、设置属性、获取属性等)。|
| gravity | string |View 的"重力"。用于决定 View 的内容相对于 View 的位置，可以设置的值为：`left`靠左、`right`靠右、 `top`靠顶部、`bottom`靠底部、`center`居中、`center_vertical`垂直居中、`center_horizontal`水平居中。可使用 &#124; 进行组合。|
||||
||||
||||
||||
||||
||||
||||