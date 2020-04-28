Welcome to our documentation!

(**Developers**: For info on contributing, including a glossary of the tools and frameworks we use, check out our developer guide.)

Below is our user FAQ. If your question is not answered here, you can leave a post in our [forum]() and we'll help you out.

## Basics

<details>
<summary>What is Patrician?</summary>

Patrician is a music profile app that lets you manage a collection of all the albums, EPs, and singles that you own, physical and/or digital. You can customize and share these profiles with anyone, and they will also have the ability to recommend albums to you. These are added to your queue, which you can then add to your collection.

Each Patrician profile has powerful search options that allow you to narrow down your collection in a multitude of ways. You can filter and sort by release date, play count, ratings, custom tags and fields, and even compare your collection with others on the site.

</details>

## Collection

### Adding to Your Collection

<details>
<summary>Spotify</summary>

With Spotify integration, you can automatically or selectively import from your Saved Albums. You can also enable Spotify Sync, which ensures that any albums added to your Collection are also saved in your Spotify library.

In addition, you can manually add items from your playlists and recent listens using the Import page.

To authenticate, go to **Account** > **Login with Spotify**, and once you've logged in you will see these settings:

- **Import Now**: Import all Saved Albums from Spotify into your Collection. You can then choose which albums to import, or enable Sync which will automatically import everything.
- **Auto Sync**: Enables two-way synchronization between Spotify and Patrician. This will occur periodically, so your libraries are always up-to-date.
- **Recommendations**: Recommend recently listened albums to add to your library. These will show up on your home page.

</details>

<details>
<summary>Last.fm</summary>

With Last.fm integration, you can have albums added to your Collection based on your listening history. The **Scrobble Threshold** determines how many plays an album needs in order to be added. For example, if the threshold is set to 50 (the default), it would automatically be added to your Collection once you've scrobbled (played any song from) the album 50 times.

Go to **Account** > **Login with Last.fm** and type your username. No password is required. Then, you can select import options including your Scrobble Threshold.

</details>

<details>
<summary>Local Files</summary>

(Picard integration coming soon)
(Dropbox/Google Drive integration coming soon)

To add to your Collection from local files, it is recommended to use the command line as described below. These commands create a JSON-formatted list which you can then upload to Patrician. In the future, we will have GUI options available.

Alternatively, you can use a

### Foobar2000

https://hydrogenaud.io/index.php?topic=61784.0

### MP3Tag

https://community.mp3tag.de/t/export-album-list/19168/2

### Musicbee

https://getmusicbee.com/forum/index.php?topic=15966.0
https://getmusicbee.com/forum/index.php?topic=24004.0

### Clementine

1. Fetch missing tags from MusicBrainz
2. Upload .config/Clementine/clementine.db

**Note**: Your library MUST be organized in the following way: Artist Folder > Album Folder > Audio File, otherwise Patrician will not detect the files.

### Windows

### MacOS/Linux

1. Open the Terminal app.
2. Navigate to your music library using the "cd" command (e.g. `cd Music`)
3. Type `ls` to make sure you are in the correct folder. You should see a list of artist folders.
4. Type this command to generate a list of artists and albums: `tree -dJ -o tree.json`
5. On Patrician, go to **Account** > **Import from Local Files**, and select the "tree.json" file from your music folder.
6. Select which albums you'd like to import, or click "Select All".

</details>

<details>
<summary>ListenBrainz</summary>

With Last.fm integration, you can have albums added to your Collection based on your listening history. The **Scrobble Threshold** determines how many plays an album needs in order to be added. For example, if the threshold is set to 50 (the default), it would automatically be added to your Collection once you've scrobbled (played any song from) the album 50 times.

Go to **Account** > **Login with Last.fm** and type your username. No password is required. Then, you can select import options including your Scrobble Threshold.

</details>

<details>
<summary>Libre.fm</summary>

With Last.fm integration, you can have albums added to your Collection based on your listening history. The **Scrobble Threshold** determines how many plays an album needs in order to be added. For example, if the threshold is set to 50 (the default), it would automatically be added to your Collection once you've scrobbled (played any song from) the album 50 times.

Go to **Account** > **Login with Last.fm** and type your username. No password is required. Then, you can select import options including your Scrobble Threshold.

</details>

<details>
<summary>iTunes/Apple Music</summary>

You can import albums from iTunes/Apple Music into your Collection by opening iTunes and going to the File menu > Library > Export Library. Then upload the XML file that was saved.

</details>

<details>
<summary>Rate Your Music/Sonemic</summary>

Sonemic doesn't yet currently have a public API, so Patrician can't automatically sync with this service. However, you can import albums manually from your profile:

1. Navigate to your RateYourMusic profile page.
2. At the bottom, click "Export your data" or "Export with reviews" and save this to a file.
3. On Patrician, go to **Account** > **Import from RYM/Sonemic**.
4. Select the CSV file that you saved in step 2.
5. Select which albums you'd like to import, or click "Select All".
</details>

<details>
<summary>Discogs</summary>

Coming soon.

</details>

<details>
<summary>Google Play Music</summary>

Coming soon.

</details>

<details>
<summary>Type a list of albums</summary>

Coming soon.

</details>

### Browsing Collections

<details>
<summary>What custom search options are there?</summary>

</details>

### Managing Your Collections

<details>
<summary>Can I make my Collection private?</summary>

Private Collections are not supported at the moment. This is a feature we're currently investigating.

</details>

<details>
<summary>How do I delete an album?</summary>

</details>

<details>
<summary>How do I delete many albums at once (a.k.a. mass delete)?</summary>

</details>

<details>
<summary>Some of my albums have incorrect metadata. Can I edit this?</summary>

</details>

## Profile

<details>
<summary>How do I customize my public profile?</summary>

</details>

<details>
<summary>How do I make album collages (like the ones people share from Tapmusic, etc)?</summary>

You can generate album collages from your listening history or by searching/filtering your Collections.

Note: Album collages are auto-generated upon viewing.

</details>

<details>
<summary>Can I make a profile for an organization?</summary>

This is not supported at the moment, but will be in the future.

</details>

## Social

<details>
<summary>Can I follow my friends on Patrician?</summary>

Yes, you can follow your friends by visiting their profiles or searching for their username. Once you've followed them, you'll see updates in your feed when they update their Collections, have new top artists, or receive recommendations.

</details>

<details>
<summary>How can people recommend albums to me?</summary>

</details>

<details>
<summary>How do I see a list of recommendations I've received?</summary>

</details>

<details>
<summary>Someone recommended an album to me outside of Patrician. Can I manually add it to my Queue?</summary>

Yes. Your inbox is a fully manageable list of albums that you intend to listen to. You can add albums to it by navigating to your Inbox and clicking "Add".

</details>

<details>
<summary>Do people need a Patrician account to recommend albums to me?</summary>

</details>

## Lists

<details>
<summary>How do I create a List?</summary>

</details>

<details>
<summary>Can I change the visibility of my List?</summary>

</details>

<details>
<summary>How do I share my List with others?</summary>

</details>
