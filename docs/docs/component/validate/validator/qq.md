# Validator.qq

::: tip Testing Is Documentation
[tests/Validate/Validator/QqTest.php](https://github.com/hunzhiwange/framework/blob/master/tests/Validate/Validator/QqTest.php)
:::
    
**Uses**

``` php
<?php

use Leevel\Validate\Validator;
use stdClass;
```

## 验证通过的数据

以下是通过的校验数据示例。

``` php
public function baseUseProvider(): array
{
    return [
        ['10000'],
        ['1234567'],
        ['6344433'],
        ['123456789011'],
        [6344433],
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
            'name'     => 'qq',
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
        ['9995031975011115028819'],
        ['1234567890111'],
        [' '],
        ['not numeric'],
        [new stdClass()],
        [['foo', 'bar']],
        [[1, 2]],
        ['this is a string'],
        [true],
        [[[], []]],
        ['not/numeric'],
        ['not?numeric'],
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
            'name'     => 'qq',
        ]
    );

    $this->assertFalse($validate->success());
}
```