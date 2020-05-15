# Guide

Patrician's search engine is based on the [Lucene](https://lucene.apache.org/core/7_7_2/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#package.description) query syntax, though is not feature-complete with it. For a comparison between the two, see below.

## Basics

| What to search      | How to search it                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Search for an album | `master of reality`                                                                                                                         |
| Search by artist    | `artist:"black sabbath"`                                                                                                                    |
| Search by artist ID | `artistId:black-sabbath-uk1`                                                                                                                |
| Use multiple fields | `artistId:black-sabbath-uk1 released:1971`                                                                                                  |
| Search by ID        | `id:black-sabbath-master-of-reality-1`<br>`mbid:e51e9779-2edc-3b39-959c-299fdb5ed940`<br>`spotifyId:7pGb2cOGVz6vLyaZaKOQ7D`<br>`rymId:2277` |

## By collection data

| What to search                                   | How to search it                                          |
| ------------------------------------------------ | --------------------------------------------------------- |
| Search by tag                                    | `tag:kickass-riffs`                                       |
| Items in a list                                  | `list:nostalgic-albums`                                   |
| Items in a folder                                | `folder:vinyl`                                            |
| Items in a view (views are saved queries)        | `view:current-favs`                                       |
| Has a certain rating                             | `rating:8`<br>`rating-gt:8`<br>`rating-lt:8`<br>          |
| Has rating                                       | `has:rating`                                              |
| Has review                                       | `has:review`                                              |
| Review has certain terms                         | `review-contains:"awesome"`                               |
| Artist review exists                             | `has:artist-review`                                       |
| Has favorite tracks                              | `has:favorite-tracks`                                     |
| Has likes and dislikes                           | `has:likes-dislikes`                                      |
| Added to collection during a certain time period | `added-before:01/05/2019`<br>`added-after:2017/12/20`<br> |
| In wishlist                                      | `in:wishlist`                                             |
| Also in another user's collection                | `in:user/afantano`                                        |
| Also in another user's collection view           | `in:user/afantano/loved-list`                             |

## By item metadata

| What to search | How to search it                                                                                                                                                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Genre          | `genre:industrial-black-metal`                                                                                                                                                                                                         |
| Release date   | `older:`<br>`newer:`<br>`before:`<br>`after:`<br>`released-before:`<br>`released-after:`<br><br>Examples:<br>`older:2005`<br>`older:2005/05/17`<br>`older:05/17/2005`<br>`newer:2010s`<br>`newer:2015/08/02`<br>`newer:08/02/2015`<br> |

## Listening history

These require that the user has set up Last.fm or ListenBrainz integration to log their listening history.

You can also sort by plays using the "Sort" dropdown menu, or the `sort` field if you're using the GraphQL API.

| What to search                                      | How to search it                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Certain amount of total plays                       | `plays-gt:300`<br>`plays-lt:150`<br>                                                                                                                                                                                                                                                                               |
| Certain amount of total plays within a certain year | `plays-gt:300 plays-in:2020`                                                                                                                                                                                                                                                                                       |
| Certain amount of total plays before a certain year | `plays-gt:300 plays-before:2020`                                                                                                                                                                                                                                                                                   |
| Certain amount of total plays within a date range   | `plays-gt:300 plays-after:2019/05/18 plays-before:2019/08/27`                                                                                                                                                                                                                                                      |
| Last listened within a date range                   | `last-listened-after:2019/08/27`<br>`last-listened-after:2019`<br>`last-listened-after:2010s`<br><br>`last-listened-before:2019/08/27`<br>`last-listened-before:2019`<br>`last-listened-before:2010s`<br><br>`last-listened-on:2019/08/27`<br><br>`last-listened-in:2019`<br>`last-listened-in:2010s`<br>          |
| First listened within a date range                  | `first-listened-after:2019/08/27`<br>`first-listened-after:2019`<br>`first-listened-after:2010s`<br><br>`first-listened-before:2019/08/27`<br>`first-listened-before:2019`<br>`first-listened-before:2010s`<br><br>`first-listened-on:2019/08/27`<br><br>`first-listened-in:2019`<br>`first-listened-in:2010s`<br> |

## Operators/Symbols

| Operator                                       | Examples                                                                                      |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------- |
| OR                                             | `plays-gt:400 OR tag:favorites`<br>`(plays-gt:400) OR (tag:favorites)`                        |
| NOT (-)                                        | `plays-gt:400 NOT tag:favorites`<br>`plays-gt:400 -tag:favorites`                             |
| + (Required. Note: Only for terms, not fields) | `+dark +side +of +moon`<br><br>(this is NOT valid or necessary)<br>`+artistId:pink-floyd-uk1` |
| (Grouping)                                     | `(plays-gt:400 OR rating-gt:8) AND tag:favorites`                                             |
| "Quotes"                                       | `artist:"the dillinger escape plan"`                                                          |

# Reference

## Lucene Comparison

[List of Lucene features](https://lucene.apache.org/core/7_7_2/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#package.description)

| Feature                     |                    |
| --------------------------- | ------------------ |
| Wildcard searches           | :x:                |
| Regular Expression Searches | :x:                |
| Fuzzy Searches              | :x:                |
| Proximity Searches          | :x:                |
| Range Searches              | :question:         |
| Boosting a Term             | :x:                |
| Boolean Operators: OR       | :white_check_mark: |
| Boolean Operators: AND      | :white_check_mark: |
| Boolean Operators: +        | :white_check_mark: |
| Boolean Operators: NOT      | :white_check_mark: |
| Boolean Operators: -        | :white_check_mark: |
| Grouping                    | :white_check_mark: |
| Field Grouping              | :white_check_mark: |
| Escaping Special Characters | :white_check_mark: |
