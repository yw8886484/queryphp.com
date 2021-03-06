# 类型

::: tip Testing Is Documentation
[tests/Support/TypeTest.php](https://github.com/hunzhiwange/framework/blob/master/tests/Support/TypeTest.php)
:::
    
QueryPHP 提供了增加 PHP 自身类型的辅助方法。

**Uses**

``` php
<?php

use Leevel\Support\Type;
use stdClass;
```

## 判断是否为字符串

``` php
public function testTypeString(): void
{
    // string
    $this->assertTrue(Type::type('foo', 'str'));
    $this->assertTrue(Type::type('foo', 'string'));
    $this->assertFalse(Type::type(1, 'str'));
}
```
    
## 判断是否为整型

``` php
public function testTypeInt(): void
{
    // int
    $this->assertTrue(Type::type(1, 'int'));
    $this->assertTrue(Type::type(3, 'integer'));
    $this->assertFalse(Type::type(true, 'int'));
}
```
    
## 判断是否为浮点数

``` php
public function testTypeFloat(): void
{
    // float
    $this->assertTrue(Type::type(1.1, 'float'));
    $this->assertTrue(Type::type(3.14, 'double'));
    $this->assertFalse(Type::type(true, 'double'));
}
```
    
## 判断是否为布尔值

``` php
public function testTypeBool(): void
{
    // bool
    $this->assertTrue(Type::type(true, 'bool'));
    $this->assertTrue(Type::type(false, 'boolean'));
    $this->assertFalse(Type::type(4, 'boolean'));
}
```
    
## 判断是否为数字

``` php
public function testTypeNum(): void
{
    // num
    $this->assertTrue(Type::type(1.2, 'num'));
    $this->assertTrue(Type::type(2, 'numeric'));
    $this->assertTrue(Type::type('2.5', 'numeric'));
    $this->assertFalse(Type::type(false, 'numeric'));
}
```
    
## 判断是否为标量

``` php
public function testTypeBase(): void
{
    // base
    $this->assertTrue(Type::type(1, 'base'));
    $this->assertTrue(Type::type('hello world', 'scalar'));
    $this->assertTrue(Type::type(0, 'base'));
    $this->assertTrue(Type::type(false, 'scalar'));
    $this->assertTrue(Type::type(1.1, 'base'));
    $this->assertTrue(Type::type(false, 'scalar'));
    $this->assertFalse(Type::type([], 'scalar'));
    $this->assertFalse(Type::type(null, 'scalar'));
}
```
    
## 判断是否为资源

``` php
public function testTypeResource(): void
{
    // resource
    $testFile = __DIR__.'/test.txt';
    file_put_contents($testFile, 'foo');
    $resource = fopen($testFile, 'r');
    $this->assertTrue(Type::type($resource, 'handle'));
    $this->assertFalse(Type::type(4, 'resource'));
    fclose($resource);
    unlink($testFile);
}
```
    
## 判断是否为闭包

``` php
public function testTypeClosure(): void
{
    // closure
    $this->assertTrue(Type::type(function () {
    }, 'closure'));
    $this->assertFalse(Type::type(true, 'closure'));
}
```
    
## 判断是否为数组

``` php
public function testTypeArray(): void
{
    // array
    $this->assertTrue(Type::type([], 'arr'));
    $this->assertTrue(Type::type([], 'array'));
    $this->assertFalse(Type::type(null, 'arr'));
    $this->assertFalse(Type::type(null, 'arr:int'));
    $this->assertTrue(Type::type([1, 2], 'arr:int'));
}
```
    
## 判断是否为对象

``` php
public function testTypeObject(): void
{
    // object
    $this->assertTrue(Type::type(new stdClass(), 'obj'));
    $this->assertTrue(Type::type(new stdClass(), 'object'));
    $this->assertFalse(Type::type(null, 'object'));
}
```
    
## 判断是否为 NULL

``` php
public function testTypeNull(): void
{
    // null
    $this->assertTrue(Type::type(null, 'null'));
    $this->assertFalse(Type::type(1, 'null'));
}
```
    
## 判断是否为回调

**\Tests\Support\Callback1 定义**

``` php
namespace Tests\Support;

class Callback1
{
    public function test(): void
    {
    }

    public static function test2()
    {
    }
}
```


``` php
public function testTypeCallback(): void
{
    // callback
    $this->assertTrue(Type::type(function () {
    }, 'callback'));
    $this->assertTrue(Type::type('md5', 'callback'));
    $this->assertTrue(Type::type([new Callback1(), 'test'], 'callback'));
    $this->assertTrue(Type::type([Callback1::class, 'test2'], 'callback'));
    $this->assertFalse(Type::type(1, 'callback'));
}
```
    
## 判断是否为对象实例

**\Tests\Support\Callback2 定义**

``` php
namespace Tests\Support;

class Callback2 implements IInterface
{
}
```

**\Tests\Support\IInterface 定义**

``` php
namespace Tests\Support;

interface IInterface
{
}
```


``` php
public function testTypeInstance(): void
{
    // instance
    $this->assertTrue(Type::type(new stdClass(), stdClass::class));
    $this->assertTrue(Type::type(new Callback1(), Callback1::class));
    $this->assertTrue(Type::type(new Callback2(), IInterface::class));
    $this->assertFalse(Type::type(1, 'callback'));
}
```
    
## 判断是否为数字或者字符串数字

包括短横线、英文逗号组成，比如日期、千分位等。

``` php
public function testTypeNumber(): void
{
    $this->assertTrue(Type::number(2.2));
    $this->assertTrue(Type::number(4));
    $this->assertTrue(Type::number('2.5'));
    $this->assertTrue(Type::number('2,111,500'));
    $this->assertTrue(Type::number('2018-06-10'));
    $this->assertTrue(Type::number('2,111,500-200'));
}
```
    
## 判断是否为整型或者字符串整型

``` php
public function testTypeStringInteger(): void
{
    $this->assertTrue(Type::integer(1));
    $this->assertTrue(Type::integer('4'));
}
```
    
## 判断是否为指定的几种类型

``` php
public function testTypeThese(): void
{
    $this->assertTrue(Type::these('foo', ['string']));
    $this->assertTrue(Type::these(1, ['string', 'int']));
    $this->assertTrue(Type::these('foo', 'string'));
}
```
    
## 判断是否为数组元素类型

``` php
public function testTypeStrictArray(): void
{
    $this->assertFalse(Type::arr('foo', ['string']));
    $this->assertTrue(Type::arr(['foo'], ['string']));
    $this->assertFalse(Type::arr([1, 2], ['string']));
    $this->assertTrue(Type::arr(['bar', 'foo'], ['string']));
    $this->assertTrue(Type::arr(['bar', 2], ['string', 'int']));
}
```