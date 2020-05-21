# EhItemRenderer

## 继承

无

## 描述

用于数据项的渲染，此类定义了基本的属性，方法已经事件。可以用于一般的列表渲染，当需要用于复杂列表渲染时，比如复杂表格项的渲染，我们可以继承此类进行扩展。具体用例可以参考[EhSelect](./EhSelect.md)。


## 属性

| 属性 |
|-------------|
| <styled-text color="blue" fontWeight="bold">[item](#item)</styled-text>：Object <br />某些列表组件，比如EhSelect，EhTable等数据源中的某项数据。|

## 方法

| 方法 |
|-------------|
| <styled-text color="blue" fontWeight="bold">[dispatch()](#dispatch)</styled-text>：void <br /> 触发action事件。|

## 事件

| 事件 |
|-------------|
| <styled-text color="blue" fontWeight="bold">[action](#action)</styled-text>：String <br /> 当调用dispatch方法时会触发action事件 |

## 属性详情

<span id="item"><styled-text font-weight="bold" font-size="16px">item</styled-text></span>

item为数据源中的某项数据

## 方法详情

<span id="dispatch"><styled-text font-weight="bold" font-size="16px">dispatch(...rest)</styled-text></span>

当自定义的itemRenderer需要向其owner组件发送事件时，我们可以调用dispatch方法，dispatch方法默认会发送action事件。在owner组件中我们可以在dispatch方法中带上自定义参数来区分哪个itemRenderer所发出的action事件

## 事件详情

<span id="action"><styled-text font-weight="bold" font-size="16px">action</styled-text></span>

当调用dispatch方法时会触发action事件

| 参数名称              | 说明 |
|---------------------|-------------|
| <styled-text><styled-text color="blue" fontWeight="bold">数组</styled-text>：[item, ...rest]</styled-text> | item为当前itemRenderer所渲染的options项，来自于options数组。 rest为自定义参数数组，

## 示例代码

<br />

<EhSelectSample />

**EhSelectItemRendererSample.vue文件代码：**

<<< @/docs/.vuepress/components/EhSelectItemRendererSample.vue
