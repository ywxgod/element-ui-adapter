# ButtonBar

## 继承

无

## 描述

跟element-ui的button-group相比，增加了选中状态，一个按钮组往往在初始化的时候需要告诉它选中的是第几个，且选中后的状态需要保持。
ButtonBar中的按钮实例来自于el-button，我们可以通过给buttons属性传递合法的el-button能识别的属性，即可创建不同类型的按钮。


## 属性

| 属性 |
|-------------|
| <styled-text color="blue" fontWeight="bold">[buttons](#buttons)</styled-text>：Array <br />作为ButtonBar的数据源，buttons的长度决定了按钮的个数。buttons中的元素实际就是el-button的属性集合。|
| <styled-text color="blue" fontWeight="bold">[selectedIndex](#selectedIndex)</styled-text>：Number <br /> 指定ButtonBar组件初始化时选中按钮的索引，从0开始 |

## 方法

| 方法 |
|-------------|
| <styled-text color="blue" fontWeight="bold">[getSelectedIndex()](#getSelectedIndex)</styled-text>：Number <br /> 获取当前选中按钮的索引。|

## 事件

| 事件 |
|-------------|
| <styled-text color="blue" fontWeight="bold">[click](#click)</styled-text>：String <br /> 每次点击一个按钮时触发 |
| <styled-text color="blue" fontWeight="bold">[change](#click)</styled-text>：String <br /> 每次改变按钮选择时触发 |

## 属性详情

<span id="buttons"><styled-text font-weight="bold" font-size="16px">buttons</styled-text></span>

buttons中元素的属性可以是以下集合：

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |

el-button具体的文档参考：[el-button文档](https://github.com/ElemeFE/element/blob/dev/examples/docs/zh-CN/button.md)

<span id="selectedIndex"><styled-text font-weight="bold" font-size="16px">selectedIndex</styled-text></span>

selectedIndex的取值范围必须是0到buttons.length-1，超出此范围的值都会设置为0。注意：此属性并不能实时返回所选按钮的索引，它只是用于初始化。如果要实时获取选中按钮的索引，请使用方法getSelectedIndex


## 方法详情

<span id="getSelectedIndex"><styled-text font-weight="bold" font-size="16px">getSelectedIndex</styled-text></span>

用于实时返回当前选中按钮的索引，通过索引我们可以获取当前按钮配置。

## 事件详情

<span id="click"><styled-text font-weight="bold" font-size="16px">click</styled-text></span>

每次点击ButtonBar中的一个按钮时触发，同一个按钮点击多次，会多次触发。

| 参数名称 | 说明 |
|-------------|-------------|
| <styled-text color="blue" fontWeight="bold">item</styled-text>：Object | item为当前点击按钮的配置项，来自于buttons数组。 |

<span id="change"><styled-text font-weight="bold" font-size="16px">change</styled-text></span>

每次改变了ButtonBar中选中按钮的索引时触发，多次点击同一个按钮并不会触发此事件。

| 参数名称 | 说明 |
|-------------|-------------|
| <styled-text color="blue" fontWeight="bold">oldv</styled-text>：Object | oldv为上次选中按钮的配置项，来自于buttons数组。 |
| <styled-text color="blue" fontWeight="bold">newv</styled-text>：Object | newv为这次选中按钮的配置项，来自于buttons数组。 |

## 示例代码

<br />

<ButtonBar />

<<< @/docs/.vuepress/components/ButtonBar.vue

