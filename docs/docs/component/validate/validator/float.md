# Validator.float

::: tip Testing Is Documentation
[tests/Validate/Validator/FloatTest.php](https://github.com/hunzhiwange/framework/blob/master/tests/Validate/Validator/FloatTest.php)
:::
    
**Uses**

 * use Leevel\Validate\Validator;

## 验证通过的数据

以下是通过的校验数据示例。

``` php
public function baseUseProvider(): array
{
    return [
        [0],
        ['12'],
        [' 0 '],
        ['0.0'],
        ['0'],
    ];
}
```

上面的数据是测试的数据提供者。


``` php
public function testBaseUse($value): void
{
    $validate = new Validator(
        [
            'name' => $value,
        ],
        [
            'name'     => 'float',
        ]
    );

    $this->assertTrue($validate->success());
}
```
    
## 未验证通过的数据

以下是未通过的校验数据示例。

``` php
public function badProvider(): array
{
    return [
        ['0,0'],
        [false],
        ['foo'],
        ['bar'],
    ];
}
```

上面的数据是测试的数据提供者。


``` php
public function testBad($value): void
{
    $validate = new Validator(
        [
            'name' => $value,
        ],
        [
            'name'     => 'float',
        ]
    );

    $this->assertFalse($validate->success());
}
```