# Buffer

v6.4.0 新增

> 稳定性：稳定

node 中 Buffer 的实现，使用文档见 node 文档，下方是 autox 中特有的内容
这个模块全局可用，因此不必
```js
const Buffer = require("buffer").Buffer;
```
## Buffer.prototype.getBytes()
返回 buffer 内部 ArrayBuffer 所对应的 java 字节数组
```js
let buf = Buffer.alloc(10)
let buf2 = Buffer.from(buf.buffer,0,5)
buf[0] = 40;
buf2[2] = 7;
log(buf.getBytes() === buf2.getBytes())//true
```
## Buffer.fromBytes(byteArr)
* byteArr {\<byte\>[]} java 字节数组

从字节数组创建一个 buffer，其内容是原数据的拷贝。
