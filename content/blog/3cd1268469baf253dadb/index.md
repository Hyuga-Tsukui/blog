---
title: Jacksonでjava.timeを利用する
date: "2018-09-19"
tags: java8 Java Jackson
description: "Jackson は java.util.Date や java.util.Time をよしなに変換してくれ出力は yyy...。"
author: Hyuga-Tsukui
slide: false
---

## 注意

この記事は [私の Qita](https://qiita.com/Hyuga-Tsukui/items/3cd1268469baf253dadb) から移転したものになります。

## 目的

Jackson は java.util.Date や java.util.Time をよしなに変換してくれ出力は yyyy-MM-dd,HH:MM:ss 等のフォーマットにしてくれる。
一方、Java8 以降に追加された java.time パッケージの Local~クラスではうまくシリアライズしてくれず、以下のように連想配列として処理される。

(以下ソースコードは日時の取得に実行時間を利用しているので整合性がありません)

```JSON
{
  "id": 1,
  "name": "hoge",
  "registrationDateTime": {
    "dayOfMonth": 19,
    "dayOfWeek": "WEDNESDAY",
    "dayOfYear": 262,
    "month": "SEPTEMBER",
    "monthValue": 9,
    "year": 2018,
    "hour": 10,
    "minute": 28,
    "nano": 916000000,
    "second": 37,
    "chronology": { "id": "ISO", "calendarType": "iso8601" }
  }
}

```

これでは必要のない情報も多く、受け取る側は困ってしまうので以下のようにしたい。

```JSON
{"id":1,"name":"hoge","registrationDateTime":"2018/09/19 10:29:30"}
```

#解決
まず Jackson で java.time を扱えるように以下のモジュールを ObjectMapper インスタンスに明示的に登録する必要がある。

- JavaTimeModule

このクラスを以下のように利用することで、java.time をある程度わかりやすくシリアライズしてくれる。

```Java
ObjectMapper om = new ObjectMapper();

JavaTimeModule jtm = new JavaTimeModule();

om.registerModule(jtm);
```

これによって、以下のようにシリアライズしてくれるようになる。

```javascript
{"id":1,"name":"hoge","registrationDateTime":[2018,9,19,10,24,49,73000000]}
```

これでもまだ扱いにくいので、デフォルトのフォーマットを変更する処理が必要だ。

以下のように任意のフォーマットを指定できる。

```Java
jtm.addSerializer(LocalDateTime.class, new LocalDateTimeSerializer(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss")));
```

これによって、以下のようにシリアライズしてくれるようになる。

```Javascript
{"id":1,"name":"hoge","registrationDateTime":"2018/09/19 10:29:30"}
```

今回はシリアライズに焦点をあてていますが、java.time を利用した JavaObject に日時をデシリアライズする際、yyyy/MM/dd のようなフォーマットだと例外が発生するので、Serializer を登録した手順と同様に Desirializer も以下のように登録する必要があります。

```Java
jtm.addDeserializer(LocalDateTime.class, new LocalDateTimeDeserializer(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss")));
```

## ソースコード

説明に利用したソースコードは[git](https://github.com/Hyuga-Tsukui/sample-src)にあげてあります実際に実行してみたりしてください。
