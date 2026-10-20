# Website Client Finder

A free, browser-based prospect discovery MVP for researching businesses that may need websites.

## What it does
- Searches OpenStreetMap via Nominatim and Overpass for public business listings in a chosen city/area.
- Returns business names and available public phone numbers from mapped tags.
- Flags listings where the source has no website tag (this does **not** prove the business has no website).
- Scores website opportunity using transparent rules.
- Provides links to the source listing and a research search.
- Exports an Excel workbook (.xlsx) with Leads, Research Blueprint, Call Tracker, and Read Me sheets, or a CSV.

## Run
Open `index.html` in a modern browser with internet access. GitHub Pages can host the static app. Search APIs may throttle requests and the data may be incomplete. This is an on-demand browser search, not a continuously running crawler.

## Important limits
- No private search history or browsing data is accessed.
- Direct buying intent remains "Not verified" until a user adds a current, public source and evidence.
- Missing website tags only mean no website was recorded in OpenStreetMap.
- Scores are heuristics, not probabilities of buying.
- Verify contact information and comply with source terms, applicable privacy/telemarketing rules, and do-not-contact requests.
- SheetJS is loaded from its public CDN; Excel export needs internet access. CSV export is also available.
