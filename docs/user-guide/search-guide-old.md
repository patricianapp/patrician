## Example queries

Searching for a specific album:

```
my bloody valentine loveless
artist:'my bloody valentine' loveless
artistId:'my-bloody-valentine-ir1' loveless
id:'my-bloody-valentine-loveless'
```

Browsing:

```
artist:'mastodon' released-before:2009 genre:'sludge metal'
list:'nostalgic-albums' tag:heavy rating-gt:8 has:review
added-in:2020 plays-gt:50
```

Filter by rating:

```
has:rating
rating:8
rating-gt:8
rating-lt:8
```

Comparing collections:

```
in:user/afantano
in:user/afantano/loved-list     # This is a view within a user's collection
```

Seeing your play stats (note: you can sort by plays using the "Sort" dropdown menu):

```
plays-gt:400
plays-after:2020-01-01 plays-before:2021-01-01   # Only count plays in 2020
plays-in:2020    # Same as above
```

Combining queries:

```
(plays-gt:400) or (tag:favorites)                 # > 400 plays or has tag "favorites"
plays-gt:400 tag:favorites filter-type:or         # > 400 plays or has tag "favorites"
plays-gt:400 not:tag:favorites                    # > 400 and does not have tag "favorites"
plays-gt:400 not:(tag:favorites)                  # > 400 and does not have tag "favorites"
plays-gt:400 not:(tag:favorites or rating-gt:8)   # > 400 and does not have tag "favorites" or a rating >= 8
```

## Query Syntax Reference

### Overview

Patrician's query syntax is a **subset** of the Lucene syntax, which is used in MusicBrainz and many other search engines. (It is Lucene-compatible wherever possible, but does not contain the full feature set). This means that a query can be broken into several parts:

- Term: The smallest unit inside a query (generally a single word).
- Phrase: A group of words surrounded by quotation marks, treated as a term.
- Operator: Special character/word that modifies how terms are handled. See [Operators](#operators) below.
- Field: An additional search category to query, denoted by a colon (`:`). E.g. `tag`, `genre`. See [Filters](#filters) below for a full list.

### Lucene Comparison

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

### Operators

- OR, ||
- quotes
- "-"
- "+"
- tag:(tag1 tag2)

### Item Identifiers

(These are filters that can only return one or zero items, so all other filters will be ignored)

```
id:
mbid:
rymId:
spotifyId:
```

### Filters

> [date-qualifier] = before/after/in: (YYY0s, YYYY, YYYY-MM, YYYY-MM-DD), on: (YYYY-MM-DD)
>
> "gt" and "lt" will probably equate to "greater/less than or equal to" instead of "greater/less than", because this is probably the more common use case

```
added-[date-qualifier]:
artist:
artistId:
first-listened-[date-qualifier]:
folder:
genre:
has:artist-review
has:favorite-tracks
has:likes-dislikes
has:rating
has:review
in:wishlist
last-listened-[date-qualifier]:
list:
plays-gt:
plays-lt:
rating:
rating-gt:
rating-lt:
released-[date-qualifier]:
tag:
updated-[date-qualifier]:
```

### Not Implemented Yet

```
([query]) or ([query])
[custom-field]: Any custom field that the user has created, along with any valid value.
filter-type:or: Combines every filter using "OR" instead of "AND"
get:artists/items/tracks Which type of result should be returned (default: items)
in: (user/[user] or user/[user]/[view]) Whether the item also exists in another user's collection
not:[filter]
not:([query])
plays-[before/after]: This can be used to create a date range for plays, similar to Last.fm's functionality. (This will not be possible until we are storing play/scrobble data which is way in the future)
view:[view] Whether the item exists in a view (which is basically a saved filter query)
```
