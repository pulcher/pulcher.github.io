# Jekyll Junk-Drawer Redesign Plan

## Goal

Rebuild the site as a custom Jekyll landing page that preserves existing content, hides older material behind an Old/Archive path, and centers the homepage on a junk-drawer dashboard for social destinations.

The visual system blends:

- the purple HP logo as the anchor brand cue
- the Make Stuff / Break Stuff / Learn Stuff motto as the bright accent system
- the newer lore artwork as the warm atmospheric direction
- the squirrel artwork as a recurring mascot/detail element

## Plan

1. Finalize the visual language from the branding assets.
Status: done enough to implement.
The site now blends the purple HP logo, the Make/Break/Learn motto, and the two newer artwork pieces into one system. The main brand data lives in `_config.yml`, and the visual treatment is implemented in `assets/site.css`.

2. Make the homepage a personal brand landing page first.
Status: done.
The homepage now leads with identity, social destinations, and mood rather than a plain post list. That lives in `_layouts/home.html` and is routed from `index.md`.

3. Replace the old dbyll shell with a custom Jekyll shell.
Status: done.
The old theme presentation layer has been bypassed by the custom layouts in `_layouts/default.html`, `_layouts/page.html`, and `_layouts/post.html`.

4. Build the junk-drawer dashboard.
Status: done.
The homepage dashboard is live and data-driven, with the social destinations rendered from `_config.yml` and the interaction handled by `assets/site.js`.

5. Refresh the site data model.
Status: done for structure, partial for real content.
Brand, navigation, and social destinations are now config-driven in `_config.yml`. What remains is replacing the example placeholder social URLs with real ones.

6. Reorganize legacy content without deleting it.
Status: done.
Older content is still preserved in place, and the archive path is now surfaced through `old/index.html`, `old/legacy-home.html`, and `archive.html`. Published posts were not physically moved out of `_posts`, which preserves old URLs.

7. Update copy and personality cues.
Status: partly done.
The current homepage copy leans into the seasoned, playful, workshop-lore tone. There is still room to sharpen the voice further if wanted.

8. Build the responsive visual system.
Status: done for first release.
The site now has a custom responsive style system in `assets/site.css`, with the warmer candlelit workshop palette and the new artwork integrated into the hero and lore sections.

9. Verify and polish.
Status: mostly done.
The site builds cleanly locally with Jekyll, the preview works, and the redesign has already been committed and pushed. Remaining polish is mostly aesthetic and content-level rather than structural.

## Key Decisions

- Keep Jekyll rather than migrating platforms.
- Keep published posts in `_posts` so existing URLs do not break.
- Push older material behind an Old/Archive path instead of deleting it.
- Use a junk-drawer dashboard rather than a flat social icon row.
- Keep the bright logo/motto accents, but place them inside a warmer workshop-fantasy visual world.

## Relevant Files

- `index.md`
- `_config.yml`
- `_layouts/default.html`
- `_layouts/home.html`
- `_layouts/page.html`
- `_layouts/post.html`
- `assets/site.css`
- `assets/site.js`
- `archive.html`
- `old/index.html`
- `old/legacy-home.html`
- `_posts/`

## Remaining Work

1. Replace the example social links in `_config.yml` with the real ones.
2. Tighten the homepage and section copy for even more of the lore/workbench voice.
3. Do a visual polish pass on spacing, typography, and mobile layout after reviewing the live preview.

## Verification

- Local Jekyll build works with `bundle exec jekyll build`.
- Homepage functions as a brand landing page rather than a generic blog index.
- Old/Archive content remains reachable.
- The dashboard is data-driven and responsive.
- The site uses the logo, motto, lore image, and squirrel image together.