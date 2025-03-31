# crypto

$crypto 模块提供了对称加密（例如 AES）、非对称加密（例如 RSA）、消息摘要（例如 MD5, SHA）等支持。

```js
let message = "未加密字符串";
log("明文：", message);

// 密钥，由于 AES 等算法要求是 16 位的倍数，我们这里用一个 16 位的密钥
let key = new $crypto.Key("password12345678");
log("密钥：", key);

// AES 加密
let aes = $crypto.encrypt(message, key, "AES/ECB/PKCS5padding");
log("AES 加密后二进制数据：", aes);
log("AES 解密：", $crypto.decrypt(aes, key, "AES/ECB/PKCS5padding", {output: 'string'}));

// RSA 加密

// 生成 RSA 密钥
let keyPair = $crypto.generateKeyPair("RSA");
log("密钥对：", keyPair);

// 使用私钥加密
let rsa = $crypto.encrypt(message, keyPair.privateKey, "RSA/ECB/PKCS1padding");
log("RSA 私钥加密后二进制数据：", rsa);

// 使用公钥解密
log("RSA 公钥解密：", $crypto.decrypt(rsa, keyPair.publicKey, "RSA/ECB/PKCS1padding", {output: 'string'}));

```



```js

// 字符串消息摘要
let message = "Hello, Autox.js";
// 输出各种消息摘要算法结果的 hex 值
log("字符串：", message);
log("MD5: ", $crypto.digest(message, "MD5"));
log("SHA1: ", $crypto.digest(message, "SHA-1"));
log("SHA256: ", $crypto.digest(message, "SHA-256"));

// 输出各种消息摘要算法结果的 base64 值
log("MD5 [base64]: ", $crypto.digest(message, "MD5", {output: 'base64'}));
log("SHA1 [base64]: ", $crypto.digest(message, "SHA-1", {output: 'base64'}));
log("SHA256 [base64]: ", $crypto.digest(message, "SHA-256", {output: 'base64'}));


// 文件消息摘要
let file = "/sdcard/脚本/_test_for_message_digest.js"
// 写入文件内容，提供为后续计算 MD5 等
$files.write(file, "Test!");
log("文件：", file);
log("MD5: ", $crypto.digest(file, "MD5", {input: 'file'}));
log("SHA1: ", $crypto.digest(file, "SHA-1", {input: 'file'}));
log("SHA256: ", $crypto.digest(file, "SHA-256", {input: 'file'}));
```
