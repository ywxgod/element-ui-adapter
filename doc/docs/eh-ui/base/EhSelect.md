# EhSelect

## 继承

无

## 描述

封装了element-ui的Select组件，原Select组件的属性，方法，事件都可用，另外还增加了valueField, labelField等属性。
原Select组件糅合了太多的功能，EhSelect试图区分和抽象一些基本的功能，然后再分别扩展。对于使用者来说功能会更加直接。


## 属性

| 属性 |
|-------------|
| <styled-text color="blue" fontWeight="bold">[labelField](#labelField)</styled-text>：String = 'label' <br /> 指定数据源(options)中用来获取label的属性，即指定读取哪个属性来显示在options列表中。|
| <styled-text color="blue" fontWeight="bold">[valueField](#valueField)</styled-text>：String = 'id' <br /> 指定数据源(options)中用来获取value的属性，即指定读取哪个属性来指示显示项的值 |
| <styled-text color="blue" fontWeight="bold">[options](#options)</styled-text>：Array <br /> 指定数据源(options)中用来获取value的属性，即指定读取哪个属性来指示显示项的值 |

## 方法

无

## 事件

| 事件 |
|-------------|
| <styled-text color="blue" fontWeight="bold">[action](#action)</styled-text>：String <br /> 调用EhItemRenderer的dispatch方法时默认会触发action事件 |


## 属性详情

<span id="labelField"><styled-text font-weight="bold" font-size="16px">labelField</styled-text></span>

labelField的值必须是options数组中元素的某个属性名称，其默认值为label。如options为：

```javascript
[ 
    { city: '广州', province: '广东', id: 1 },
    { city: '武汉', province: '湖北', id: 2 }
]
```
我们可以指定labelField的值为city，这样EhSelect下拉菜单将会显示城市名称：广州-武汉；

如果labelField的值为province，下拉菜单则显示：广东-湖北

<span id="valueField"><styled-text font-weight="bold" font-size="16px">valueField</styled-text></span>

valueField用法同labelField，默认值为id。用于options选项中选中的值。

<span id="options"><styled-text font-weight="bold" font-size="16px">options</styled-text></span>

options指定EhSelect下拉菜单的数据源。options数组元素中我们可以指定itemRenderer属性，用于渲染自定义下拉菜单项。如：

```javascript
 [
    { id: 1, name: '宋江', age: 43, itemRenderer: EhSelectItemRendererSample },
    { id: 2, name: '吴用', age: 40, itemRenderer: EhSelectItemRendererSample },
    { id: 3, name: '卢俊义', age: 34, itemRenderer: EhSelectItemRendererSample },
    { id: 4, name: '武松', age: 30, itemRenderer: EhSelectItemRendererSample }
]
```
itemRender可以继承自EhItemRenderer。请参考[EhItemRenderer](./EhItemRenderer.md)使用说明。

## 方法详情

无

## 事件详情

<span id="action"><styled-text font-weight="bold" font-size="16px">action</styled-text></span>

当自定义itemRenderer时，我们的itemRenderer须继承自EhItemRenderer。

在EhItemRenderer中定义了item属性、dispatch方法。

item指向当前被渲染的数据项，即options数组的某个元素；

dispatch方法会调用EhItemRenderer的$emit方法带上item和事件对象向外发送事件action事件，此事件会被EhSelect以相同事件名称转发出来，所以EhSelect组件会派发action事件

| 参数名称              | 说明 |
|---------------------|-------------|
| <styled-text><styled-text color="blue" fontWeight="bold">数组</styled-text>：[item, ...rest]</styled-text> | item为当前itemRenderer所渲染的options项，来自于options数组。 rest为自定义参数数组，在自己实现的itemRenderer中往往需要带上额外的参数|

EhSelect其他事件，比如change等，可以参考原[Select组件](https://element.eleme.cn/#/zh-CN/component/select)

## 示例代码

<br />

<EhSelectSample />

**EhComboBoxSample.vue文件代码：**

<<< @/docs/.vuepress/components/EhSelectSample.vue

**EhComboBoxItemRendererSample.vue文件代码：**

<<< @/docs/.vuepress/components/EhSelectItemRendererSample.vue
