# ScrollSampleRepo
Scrollを調査するためのSampleRepoです。

### 検証のためのAPI Keyの取得方法

[https://gnosis.blockscout.com/](https://gnosis.blockscout.com/)にてログインして取得する。

### 動かし方

- インストール
    ```bash
    cd sample && yarn
    ```

- コンパイル

    ```bash
    yarn compile
    ```

- テスト

    ```bash
    yarn test
    ```

- テストネットへのデプロイ

    ```bash
    yarn deploy:scrollSepolia
    ```

    ```bash
    unlockTime: 1706625379
    Lock with 0.001ETH and unlock timestamp 1706625379 deployed to 0x67ADc29278d87D87b212C59fDffd2749fe7418c4
    Done in 3.94s.
    ```

    実際にデプロイしたトランザクションの記録. 

    [0xc7aa93266092a41dea76b246f4a18779dddbb45e11b732432c6676ddddd12096](https://sepolia.scrollscan.com/tx/0xc7aa93266092a41dea76b246f4a18779dddbb45e11b732432c6676ddddd12096)

- コントラクトの検証

    ```bash
    yarn verify:scrollSepolia
    ```

    検証結果

    ```bash
    https://sepolia.scrollscan.com/address/0x67ADc29278d87D87b212C59fDffd2749fe7418c4#code
    Done in 1.23s.
    ```

    コントラクトのコード　　
    [0x67ADc29278d87D87b212C59fDffd2749fe7418c4#code](https://sepolia.scrollscan.com/address/0x67ADc29278d87D87b212C59fDffd2749fe7418c4#code)

### 参考文献
1. [公式ドキュメント](https://guide.scroll.io/developers/developer-quickstart)
2. [Scroll Sepolia Explorer](https://sepolia-blockscout.scroll.io/)
3. [Bridge](https://scroll.io/bridge)
4. [Rollup Explorer](https://scroll.io/rollupscan?page=1&per_page=10)
5. [Common errors](https://docs.scroll.io/en/user-guide/common-errors/)