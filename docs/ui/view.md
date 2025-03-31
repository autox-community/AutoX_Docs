# 视图：View

控件和布局都继承于视图 (View)。
本节将介绍视图 (View) 的属性和方法，这些属性和方法可在所有控件和布局中使用，例如[背景](#bg)，[宽](#w)[高](#h)，点击回调`click()`等。

## w

View 的宽度，是属性`width`的缩写形式。可以设置的值为`*`, `auto`和具体数值。其中`*`表示宽度**尽量**填满父布局，而`auto`表示宽度将根据 View 的内容自动调整 (自适应宽度)。例如：
```js
"ui";
ui.layout(
    <horizontal>
        <button w="auto" text="自适应宽度"/>
        <button w="*" text="填满父布局"/>
    </horizontal>
);
```
在这个例子中，第一个按钮为自适应宽度，第二个按钮为填满父布局，显示效果为：

![ex-w](/ex-w.png)

如果不设置该属性，则不同的控件和布局有不同的默认宽度，大多数为`auto`。

宽度属性也可以指定一个具体数值。例如`w="20"`，`w="20px"`等。不加单位的情况下默认单位为 dp，其他单位包括 px(像素), mm(毫米), in(英寸)。有关尺寸单位的更多内容，参见[尺寸的单位：Dimension](#ui_尺寸的单位_Dimension)。

```js
"ui";
ui.layout(
    <horizontal>
        <button w="200" text="宽度200dp"/>
        <button w="100" text="宽度100dp"/>
    </horizontal>
);
```

## h

View 的高度，是属性`height`的缩写形式。可以设置的值为`*`, `auto`和具体数值。其中`*`表示宽度**尽量**填满父布局，而`auto`表示宽度将根据 View 的内容自动调整 (自适应宽度)。

如果不设置该属性，则不同的控件和布局有不同的默认高度，大多数为`auto`。

宽度属性也可以指定一个具体数值。例如`h="20"`，`h="20px"`等。不加单位的情况下默认单位为 dp，其他单位包括 px(像素), mm(毫米), in(英寸)。有关尺寸单位的更多内容，参见[尺寸的单位：Dimension](#ui_尺寸的单位_Dimension)。

## id

View 的 id，用来区分一个界面下的不同控件和布局，一个界面的 id 在同一个界面下通常是唯一的，也就是一般不存在两个 View 有相同的 id。id 属性也是连接 xml 布局和 JavaScript 代码的桥梁，在代码中可以通过一个 View 的 id 来获取到这个 View，并对他进行操作 (设置点击动作、设置属性、获取属性等)。例如：
```js
"ui";
ui.layout(
    <frame>
        <button id="ok" text="确定"/>
    </frame>
);
//通过 ui.ok 获取到按钮控件
toast(ui.ok.getText());
```

这个例子中有一个按钮控件"确定"，id 属性为"ok"，那么我们可以在代码中使用`ui.ok`来获取他，再通过`getText()`函数获取到这个按钮控件的文本内容。
另外这个例子中使用帧布局 (frame) 是因为，我们只有一个控件，因此用于最简单的布局帧布局。

## gravity

View 的"重力"。用于决定 View 的内容相对于 View 的位置，可以设置的值为:
* `left` 靠左
* `right` 靠右
* `top` 靠顶部
* `bottom` 靠底部
* `center` 居中
* `center_vertical` 垂直居中
* `center_horizontal` 水平居中

例如对于一个按钮控件，`gravity="right"`会使其中的文本内容靠右显示。例如：

```js
"ui";
ui.layout(
    <frame>
        <button gravity="right" w="*" h="auto" text="靠右的文字"/>
    </frame>
);
```
显示效果为：

![ex-gravity](/ex-gravity.png)

这些属性是可以组合的，例如`gravity="right|bottom"`的 View 他的内容会在右下角。

## layout_gravity

View 在布局中的"重力"，用于决定 View 本身在他的**父布局**的位置，可以设置的值和 gravity 属性相同。注意把这个属性和 gravity 属性区分开来。

```js
"ui";
ui.layout(
    <frame w="*" h="*">
        <button layout_gravity="center" w="auto" h="auto" text="居中的按钮"/>
        <button layout_gravity="right|bottom" w="auto" h="auto" text="右下角的按钮"/>
    </frame>
);
```

在这个例子中，我们让帧布局 (frame) 的大小占满整个屏幕，通过给第一个按钮设置属性`layout_gravity="center"`来使得按钮在帧布局中居中，通过给第二个按钮设置属性`layout_gravity="right|bottom"`使得他在帧布局中位于右下角。效果如图：

![ex-layout-gravity](/ex-layout-gravity.png)

要注意的是，layout_gravity 的属性不一定总是生效的，具体取决于布局的类别。例如不能让水平布局中的第一个子控件靠底部显示 (否则和水平布局本身相违背)。
## margin

margin 为 View 和其他 View 的间距，即外边距。margin 属性包括四个值:
* `marginLeft` 左外边距
* `marginRight` 右外边距
* `marginTop` 上外边距
* `marginBottom` 下外边距

而 margin 属性本身的值可以有三种格式:
* `margin="marginAll"` 指定各个外边距都是该值。例如`margin="10"`表示左右上下边距都是 10dp。
* `margin="marginLeft marginTop marginRight marginBottom"` 分别指定各个外边距。例如`margin="10 20 30 40"`表示左边距为 10dp, 上边距为 20dp, 右边距为 30dp, 下边距为 40dp
* `margin="marginHorizontal marginVertical"` 指定水平外边距和垂直外边距。例如`margin="10 20"`表示左右边距为 10dp, 上下边距为 20dp。

用一个例子来具体理解外边距的含义：
```js
"ui";
ui.layout(
    <horizontal>
        <button margin="30" text="距离四周30"/>
        <button text="普通的按钮"/>
    </horizontal>
);
```
第一个按钮的 margin 属性指定了他的边距为 30dp, 也就是他与水平布局以及第二个按钮的间距都是 30dp, 其显示效果如图：

![ex1-margin](/ex1-margin.png)

如果把`margin="30"`改成`margin="10 40"`那么第一个按钮的左右间距为 10dp, 上下间距为 40dp, 效果如图：

![ex2-margin](/ex2-margin.png)

有关 margin 属性的单位，参见[尺寸的单位：Dimension](#ui_尺寸的单位_Dimension)。

## marginLeft

View 的左外边距。如果该属性和 margin 属性指定的值冲突，则在后面的属性生效，前面的属性无效，例如`margin="20" marginLeft="10"`的左外边距为 10dp，其他外边距为 20dp。

```js
"ui";
ui.layout(
    <horizontal>
        <button marginLeft="50" text="距离左边50"/>
        <button text="普通的按钮"/>
    </horizontal>
);
```

第一个按钮指定了左外边距为 50dp，则他和他的父布局水平布局 (horizontal) 的左边的间距为 50dp, 效果如图：

![ex-marginLeft](/ex-marginLeft.png)

## marginRight

View 的右外边距。如果该属性和 margin 属性指定的值冲突，则在后面的属性生效，前面的属性无效。

## marginTop

View 的上外边距。如果该属性和 margin 属性指定的值冲突，则在后面的属性生效，前面的属性无效。

## marginBottom

View 的下外边距。如果该属性和 margin 属性指定的值冲突，则在后面的属性生效，前面的属性无效。

## padding

View 和他的自身内容的间距，也就是内边距。注意和 margin 属性区分开来，margin 属性是 View 之间的间距，而 padding 是 View 和他自身内容的间距。举个例子，一个文本控件的 padding 也即文本控件的边缘和他的文本内容的间距，paddingLeft 即文本控件的左边和他的文本内容的间距。

paddding 属性的值同样有三种格式：

* `padding="paddingAll"` 指定各个内边距都是该值。例如`padding="10"`表示左右上下内边距都是 10dp。
* `padding="paddingLeft paddingTop paddingRight paddingBottom"` 分别指定各个内边距。例如`padding="10 20 30 40"`表示左内边距为 10dp, 上内边距为 20dp, 右内边距为 30dp, 下内边距为 40dp
* `padding="paddingHorizontal paddingVertical"` 指定水平内边距和垂直内边距。例如`padding="10 20"`表示左右内边距为 10dp, 上下内边距为 20dp。

用一个例子来具体理解内边距的含义：

```js
"ui";
ui.layout(
    <frame w="*" h="*" gravity="center">
        <text padding="10 20 30 40" bg="#ff0000" w="auto" h="auto" text="HelloWorld"/>
    </frame>
);
```

这个例子是一个居中的按钮 (通过父布局的`gravity="center"`属性设置)，背景色为红色 (`bg="#ff0000"`)，文本内容为"HelloWorld"，左边距为 10dp，上边距为 20dp，下边距为 30dp，右边距为 40dp，其显示效果如图：

![ex-padding](/ex-padding.png)

## paddingLeft

View 的左内边距。如果该属性和 padding 属性指定的值冲突，则在后面的属性生效，前面的属性无效。

## paddingRight

View 的右内边距。如果该属性和 padding 属性指定的值冲突，则在后面的属性生效，前面的属性无效。

## paddingTop

View 的上内边距。如果该属性和 padding 属性指定的值冲突，则在后面的属性生效，前面的属性无效。

## paddingBottom

View 的下内边距。如果该属性和 padding 属性指定的值冲突，则在后面的属性生效，前面的属性无效。

## bg

View 的背景。其值可以是一个链接或路径指向的图片，或者 RGB 格式的颜色，或者其他背景。具体参见[Drawables](#draw)。

例如，`bg="#00ff00"`设置背景为绿色，`bg="file:///sdcard/1.png"`设置背景为图片"1.png"，`bg="?attr/selectableItemBackground"`设置背景为点击时出现的波纹效果 (可能需要同时设置`clickable="true"`才生效)。

## alpha

View 的透明度，其值是一个 0~1 之间的小数，0 表示完全透明，1 表示完全不透明。例如`alpha="0.5"`表示半透明。

## foreground

View 的前景。前景即在一个 View 的内容上显示的内容，可能会覆盖掉 View 本身的内容。其值和属性 bg 的值类似。

## minHeight

View 的最小高度。该值不总是生效的，取决于其父布局是否有足够的空间容纳。

例：`<text height="auto" minHeight="50"/>`

有关该属性的单位，参见[尺寸的单位：Dimension](#ui_尺寸的单位_Dimension)。

## minWidth

View 的最小宽度。该值不总是生效的，取决于其父布局是否有足够的空间容纳。

例：`<input width="auto" minWidth="50"/>`

有关该属性的单位，参见[尺寸的单位：Dimension](#ui_尺寸的单位_Dimension)。

## visbility

View 的可见性，该属性可以决定 View 是否显示出来。其值可以为：
* `gone` 不可见。
* `visible` 可见。默认情况下 View 都是可见的。
* `invisible` 不可见，但仍然占用位置。

## rotation

View 的旋转角度。通过该属性可以让这个 View 顺时针旋转一定的角度。例如`rotation="90"`可以让他顺时针旋转 90 度。

如果要设置旋转中心，可以通过`transformPivotX`, `transformPivotY`属性设置。默认的旋转中心为 View 的中心。

## transformPivotX

View 的变换中心坐标 x。用于 View 的旋转、放缩等变换的中心坐标。例如`transformPivotX="10"`。

该坐标的坐标系以 View 的左上角为原点。也就是 x 值为变换中心到 View 的左边的距离。

有关该属性的单位，参见[尺寸的单位：Dimension](#ui_尺寸的单位_Dimension)。

## transformPivotY

View 的变换中心坐标 y。用于 View 的旋转、放缩等变换的中心坐标。例如`transformPivotY="10"`。

该坐标的坐标系以 View 的左上角为原点。也就是 y 值为变换中心到 View 的上边的距离。

有关该属性的单位，参见[尺寸的单位：Dimension](#ui_尺寸的单位_Dimension)。

## style

设置 View 的样式。不同控件有不同的可选的内置样式。具体参见各个控件的说明。

需要注意的是，style 属性只支持安卓 5.1 及其以上。
