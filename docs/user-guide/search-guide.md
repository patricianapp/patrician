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

## Filter Reference

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
[custom-field]: Any custom field that the user has created, along with any valid value.
in: (user/[user] or user/[user]/[view]) Whether the item also exists in another user's collection
get:artists/items/tracks Which type of result should be returned (default: items)
plays-[before/after]: This can be used to create a date range for plays, similar to Last.fm's functionality. (This will not be possible until we are storing play/scrobble data which is way in the future)
view:[view] Whether the item exists in a view (which is basically a saved filter query)
```
