# ScrollSampleRepo
Scrollを調査するためのSampleRepoです。

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
    yarn deploy:scrollAlpha
    ```

    ```bash
    Lock with 0.001ETH and unlock timestamp 1695472571 deployed to 0x2B5914De5D5166eBaa423C92BAb8518c85EAA0cb
    ```

    実際にデプロイしたトランザクションの記録. 

    [0x55f836bf130a0f70c69961e28287ced78458e90d5d04bbec29ec21c620e160de](https://scroll.l2scan.co/tx/0x55f836bf130a0f70c69961e28287ced78458e90d5d04bbec29ec21c620e160de)

- コントラクトの検証

    ```bash
    yarn verify:scrollAlpha
    ```

    検証結果

    ```bash
    Successfully submitted source code for contract 
    contracts/Lock.sol:Lock at 0x2B5914De5D5166eBaa423C92BAb8518c85EAA0cb
    for verification on the block explorer. Waiting for verification result...

    Successfully verified contract Lock on the block explorer.
    https://sepolia-blockscout.scroll.io/address/0x2B5914De5D5166eBaa423C92BAb8518c85EAA0cb#code
    Done in 2.31s.
    ```

    コントラクトのコード　　
    [0x2B5914De5D5166eBaa423C92BAb8518c85EAA0cb/contracts](https://sepolia-blockscout.scroll.io/address/0x2B5914De5D5166eBaa423C92BAb8518c85EAA0cb/contracts#address-tabs)

### 参考文献
1. [公式ドキュメント](https://guide.scroll.io/developers/developer-quickstart)
2. [Scroll Sepolia Explorer](https://sepolia-blockscout.scroll.io/)
3. [Bridge](https://scroll.io/bridge)
4. [Rollup Explorer](https://scroll.io/rollupscan?page=1&per_page=10)
5. [Common errors](https://docs.scroll.io/en/user-guide/common-errors/)