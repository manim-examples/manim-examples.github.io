# Contribute to Manim examples

* Double spaces are used instead of tabs.
* `alt` attribute for image tags is automatically copied over from its parent's `title`.
* Fixing lazy loading is much needed as it currently seems to have no effect.

## Adding new tags

* Add them if you think the webpage would benefit from having a larger variety of tags to match to GIFs. But also if you're adding new GIFs, and you're struggling to find existing corresponding tags to add to them.
* After you copy the code, name each tag as the first available number with up to three leading zeros, such as `tag0024`. If you find any missing numbers in the numerical order, you can of course choose to name the tag as the first available number of that too. The names, where leading `0` are replaced by leading `x`, are for the first few listed tags which are general and applied at least one each to every GIF.
* Insert the code for adding tags just above the corresponding HTML comment inside `index.html`:

```html
<label for="tag0000">
  lowercase name of choice in one or two words
  <input type="checkbox" id="tag0000">
</label>
```

## Adding new GIFs

* Accepting only GIFs, because the webpage was made that way. Normal images would also work, but would look off compared to the GIFs, which play when hovered over.
* Create GIFs via [LICEcap](https://www.cockos.com/licecap/) (Windows, macOS), [Peek](https://github.com/phw/peek#peek---an-animated-gif-recorder) (deprecated for Linux) or [gifcap](https://gifcap.dev/) (browser based) software. Use an aspect ratio as close to `16:9` as you can achieve for capturing the GIFs.
  * I used LICEcap with capture resolution of `1280` by `720` pixels, keeping the  aspect ratio `16:9`. In the export settings, I set it to stop recording after `5` seconds, resulting in sizes around `2` MB per GIF.
* Upload it to the `img` directory. Give it a name of the first available number with up to three leading zeros, such as `img/0024.gif`. If you find any missing numbers in the numerical order, you can of course choose to name the GIF as the first available number of that too.
* When linking YouTube **channels**, stick to their playlists page if not empty, otherwise choose videos page. But regardless of linked playlist or videos page, capture a GIF of the videos page. This should be the only exception where shown GIF might not lead to the target link. Try to capture all sites logged **out**, in **dark** mode, in **English**, and minimise shown **ads**.
* I recommend picking out the tags that apply to your GIFs first, then search and replace them with the `tagxxxx/tag0000` names to insert them inside the `data-tags` attribute.
* Finally, copy the following code, fill in all its fields, and insert it just above the corresponding HTML comment inside `index.html`:

```html
<div class="container">
  <a href="https://example.com/" title="Short name">
    <img src="img/0000.gif" data-tags="tagxxxx,tag0000">
    <canvas></canvas>
  </a>
</div>
```

## Choosing `title` attribute

* For most resources, try to choose a name that's not already taken. If you can't, add `#n` starting from `#1` after each short name, so that it's apparent there is more content of that kind.
* For **individual** videos, I recommend starting with:
  * `Video about ...`
  * `Video title`
* Use the following pattern for short names or their combinations for YouTube **channels**:
  * `Videos about ... #n`
  * `Beginner Manim animations by ...`
  * `Advanced Manim animations by ...`
