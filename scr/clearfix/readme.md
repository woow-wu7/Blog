前置知识点：

1. 布局方案
  - 1.普通流：包括对块级框的块格式，对行级框的行格式，对块级框和行级框的相对定位
  - 2.浮动：首先按普通流布局，然后从排版流中取出，尽量向左或向右偏移，其他内容排在浮动周围
  - 3.绝对定位：元素会整体脱离普通流，因此绝对定位元素不会对其兄弟元素造成影响

2. BFC ---- Block Formatting Context 块级格式化上下文，是一种特性
  - BFC指页面中的一块渲染区域，并有一套渲染规则，它决定了其子元素如何定位，以及和其他元素的关系和相互作用
  - 具有BFC特性的元素，可以看作是隔离了的独立元素，容器里的元素不会布局上影响容器外的元素

3. 如何触发BFC特性？
  - 根元素
  - 浮动 ( float不为none )
  - 绝对定位 ( position为 absolute 或 fixed )
  - display 为 ( inline-block、table-cells、flex )
  - overflow 除了 visible 以外的值 (hidden、auto、scroll)

4. BFC布局规则？
  - margin折叠：
    -- 属于同一个BFC的两个相邻的块级元素会发生margin合并
    -- 不属于同一个BFC的两个相邻的块级元素不会发生margin合并
  - 独立容器：
    -- 容器里面的子元素不会影响到外面的元素
    -- 外面的元素也不会影响到容器里面的子元素
  - 清除浮动：具有BFC特性的元素计算高度时，包含所有子元素 ( 包括浮动元素 )

5. 为什么要清除浮动
  - 浮动元素脱离文档流后，造成父元素高度塌陷 (在父元素没有设置高度时 )
  - 解决办法：触发BFC特性，或者在浮动元素兄弟元素使用 clear 属性

6.清除浮动的方法
1. overflow: hidden
- 给浮动元素的父元素，添加 overflow: hidden;
- 原理：overflow: hidden触发BFC特性，导致计算高度的时候，把子元素(包括浮动元素)的高度计算在内
- 哪些可以触发BFC
  -- 浮动
  -- 绝对定位: position: absolute/fixed
  -- display: inline-block/flex/table-cell
  -- overflow: hidden/auto/scroll
  -- 根元素
2. 伪元素::before/after
- 给浮动元素的父元素，添加伪元素
- 原理：伪元素是当前元素的子元素，相当于添加一个子元素，再设置 clear属性，注意clear属性只适用于块级元素
- 注意：伪元素是行内元素，clear只在块级元素上有效
3. 在浮动元素的父级元素内部添加元素，比如span,在设置clear属性,display要为block
4. 把浮动元素的父级元素，也变成浮动元素，原理是BFC的触发

<div class="main">
  <ul>
    <li><img src="./imgs/1.jpg" alt="" width="300" height="200"></li>
    <li><img src="./imgs/2.jpg" alt="" width="300" height="200"></li>
  </ul>
  <div>浮动外的元素</div>
</div>
<style>
    .main ul {
      list-style: none;
      overflow: hidden;
    }
    .main ul li {
      float: left;
    }
</style>


2. 为浮动元素的父元素添加伪类
.clearfix:after {
    content: '.';
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
}