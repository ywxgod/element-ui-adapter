# EhRemoteSelect

## 继承

EhRemoteSelect -> EhSelect

## 描述

继承自EhSelect，封装了从远程获取数据的能力。某些特定业务数据，后台往往提供固定的公开api（获取用户列表，部门列表，文件列表...）
如果是EhSelect，我们可能每次在用到的地方都需要重复编写获取数据的代码，如果是EhRemoteSelect，则只需要给定一个url，查询参数等会自动获取数据并展示。

EhRemoteSelect提供了默认的查询参数名称为query，还有默认的返回数据解析函数。如果发现EhRemoteSelect默认的配置无法解析后台返回数据，我们需要继承它，
然后覆盖parseData，getParams等方法。

EhRemoteSelect除了从远程url获取数据外，还集成远程搜索，启用search属性即可。

## 属性

| 属性 |
|-------------|
| <styled-text color="blue" fontWeight="bold">[url](#url)</styled-text>：String <br />api地址，用于获取数据(get请求) |
| <styled-text color="blue" fontWeight="bold">[search](#search)</styled-text>：Boolean = false <br /> 是否启用远程搜索 |
| <styled-text color="blue" fontWeight="bold">[paramsName](#paramsName)</styled-text>：String = 'query' <br /> 查询参数名称 |

## 方法

| 方法 |
|-------------|
| <styled-text color="blue" fontWeight="bold">[parseData(res: Response)](#getData)</styled-text>：Array <br /> 数据解析函数，用于解析返回响应数据，转换为组件需要的数据。 |
| <styled-text color="blue" fontWeight="bold">[getParams(query: String)](#getData)</styled-text>：Object <br /> 启用远程搜索时，用于封装搜索参数 |

## 事件

| 事件 |
|-------------|
| [参考EhSelect的事件](./base/EhSelect.md) |

## 属性详情

<span id="url"><styled-text font-weight="bold" font-size="16px">url</styled-text></span>

指定获取数据的api地址。当url和options属性都指定时，优先考虑url。即通过url返回的数据会覆盖options数组。

<span id="search"><styled-text font-weight="bold" font-size="16px">search</styled-text></span>

是否启用远程搜索。当启用时，组件初始化后不会立即通过url发请求去后台取数据，当用户输入字符时，才会发请求。如果不启用,组件初始化时会发请求取数据。

<span id="paramsName"><styled-text font-weight="bold" font-size="16px">paramsName</styled-text></span>

指定查询参数的名称，默认值为query。如：http://xxxxx/xxx?query=1

## 方法详情

<span id="parseData"><styled-text font-weight="bold" font-size="16px">parseData(res: Response): Array</styled-text></span>

正常情况下，无需调用此方法。parseData默认会返回res.data，如果后台返回的数据无法被默认方法解析，我们需要继承EhRemoteSelect重写此方法，以实现新的数据解析逻辑。

<span id="getParams"><styled-text font-weight="bold" font-size="16px">getParams(query: String): Object</styled-text></span>

正常情况下，无需调用此方法。getParams默认返回值为：{ params: { query: 'xxx'} }, xxx为输入的字符。当默认格式不能满足需求时，我们需要继承EhRemoteSelect组件覆盖此方法，以实现自己的逻辑。

## 事件详情

无

## 示例代码

<br />

<EhRemoteSelectSample />

**EhRemoteSelectSample.vue文件代码：**

<<< @/docs/.vuepress/components/EhRemoteSelectSample.vue
