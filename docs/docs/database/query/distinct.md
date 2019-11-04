# Query lang.distinct

::: tip Testing Is Documentation
[tests/Database/Query/DistinctTest.php](https://github.com/hunzhiwange/framework/blob/master/tests/Database/Query/DistinctTest.php)
:::
    
**Uses**

 * use Tests\Database\DatabaseTestCase as TestCase;

## 查询去重

``` php
public function testBaseUse(): void
{
    $connect = $this->createDatabaseConnectMock();

    $sql = <<<'eot'
        [
            "SELECT DISTINCT `test_query`.* FROM `test_query`",
            [],
            false,
            null,
            null,
            []
        ]
        eot;

    $this->assertSame(
        $sql,
        $this->varJson(
            $connect
                ->table('test_query')
                ->distinct()
                ->findAll(true)
        )
    );
}
```
    
## 取消查询去重

``` php
public function testCancelDistinct(): void
{
    $connect = $this->createDatabaseConnectMock();

    $sql = <<<'eot'
        [
            "SELECT `test_query`.* FROM `test_query`",
            [],
            false,
            null,
            null,
            []
        ]
        eot;

    $this->assertSame(
        $sql,
        $this->varJson(
            $connect
                ->table('test_query')
                ->distinct()
                ->distinct(false)
                ->findAll(true),
            1
        )
    );
}
```