# Q & A

## 如何定时运行脚本

点击脚本右边的菜单按钮->更多->定时任务即可定时运行脚本，但是必须保持 Auto.js 后台运行 (自启动白名单、电源管理白名单等)。同时，可以在脚本的开头使用`device.wakeUp()`来唤醒屏幕；但是，Auto.js 没有解锁屏幕的功能，因此难以在有锁屏密码的设备上达到效果。

## 定时任务如何获取外部参数

如果一个脚本是用 intent"启动"的，比如定时任务中的特定事件（网络状态变化等）触发而启动的，则可以通过`engines.myEngine().execArgv.intent`获取启动的 intent，从而获取外部参数。

## 如何把图片和脚本一起打包，或者打包多个脚本

如果除了单脚本以外还有其他脚本、图片、音乐等资源一起打包，则需要使用项目功能。

点击 Auto.js 的"+"号，选择项目，填写项目名称、包名等信息以后，点击"√"即可新建一个项目。可以在项目中放多个脚本、模块、资源文件，点击项目工具栏的 apk 打包图标即可打包一个项目，点击工具栏可以重新配置项目。

例如，主脚本要读取同一文件夹下的图片 1.png，再执行找图，则可以通过`images.read("./1.png")`来读取，其中"./1.png"表示同一目录 1.png 图片；ui 中的图片控件要引用同一文件夹的 2.png 图片则为`<img src="file://2.png"/>`。Auto.js 内置的函数和模块都支持相对路径，但是，其他情况则需要使用`files.path()`函数来把相对路径转换为绝对路径。

## 如何使打包的应用不显示主界面

需要使用项目功能。新建项目后，修改项目下的`project.json`文件，增加以下条目：
```json
"launchConfig": {
    "hideLogs": true
}
```

例如：

```json
{
  "name": "项目名称",
  "versionName": "1.0.0",
  "versionCode": 1,
  "packageName": "org.autojs.example",
  "main": "main.js",
  "launchConfig": {
      "hideLogs": true
  }
}
```
"launchConfig"表示启动配置，"hideLogs"表示隐藏日志。

参见项目与项目配置。

## Auto.js 自带的模块和函数中没有的功能如何实现

由于 Auto.js 支持直接调用 Android 的 API，对于 Auto.js 没有内置的函数，可以直接通过修改 Android 代码为 JavaScript 代码实现。例如旋转图片的 Android 代码为：
```java
import android.graphics.Bitmap;
import android.graphics.Matrix;

public static Bitmap rotate(final Bitmap src,
                            final int degrees,
                            final float px,
                            final float py) {
    if (degrees == 0) return src;
    Matrix matrix = new Matrix();
    matrix.setRotate(degrees, px, py);
    Bitmap ret = Bitmap.createBitmap(src, 0, 0, src.getWidth(), src.getHeight(), matrix, true);
    return ret;
}
```
转换为 JavaScript 的代码后为：
```js
importClass(android.graphics.Bitmap);
importClass(android.graphics.Matrix);

function rotate(src, degrees, px, py){
    if (degrees == 0) return src;
    var matrix = new Matrix();
    matrix.setRotate(degrees, px, py);
    var ret = Bitmap.createBitmap(src, 0, 0, src.getWidth(), src.getHeight(), matrix, true);
    return ret;
}
```
有关调用 Android 和 Java 的 API 的更多信息，参见 [Work with Java](/workWithJava)。
