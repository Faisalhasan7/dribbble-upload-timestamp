# Dribbble Timestamp Checker

A Chrome extension that displays timestamps for Dribbble posts, making it easy to see when designs were published.

## Features

- **Extracts Upload Date**: Reads the `uploadDate` from Dribbble's JSON-LD schema data
- **Beautiful Display**: Shows a prominent, styled card with the upload date
- **Time Ago Format**: Displays "X days/hours/minutes ago" for easy reference
- **Full Timestamp**: Also shows the complete date and time
- **Auto-Detection**: Automatically works when you open any Dribbble shot
- **Navigation Support**: Works with Dribbble's AJAX navigation

## Installation

1. Download or clone this extension folder
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked"
5. Select the `dribbble-timestamp-checker` folder
6. The extension is now installed!

## Usage

1. Visit [Dribbble.com](https://dribbble.com)
2. **Click on any shot** to open the detail page
3. You'll see a beautiful purple gradient card showing:
   - How long ago the shot was uploaded
   - The full date and time
4. The timestamp appears at the top of the shot details
5. Works automatically as you browse different shots

**Console Messages:**
- Open Developer Console (F12) to see confirmation messages
- "✅ Found uploadDate" means the extension found the timestamp
- "🎨 Timestamp displayed successfully!" means it's visible on the page

## Files

- `manifest.json` - Extension configuration
- `content.js` - Main script that finds and displays timestamps
- `styles.css` - Styling for timestamp badges
- `popup.html` - Extension popup interface
- `icon*.png` - Extension icons

## How It Works

The extension:
1. Monitors Dribbble shot pages for JSON-LD schema data
2. Extracts the `uploadDate` field from the schema
3. Formats and displays it in a beautiful card at the top of the shot
4. Automatically updates when you navigate to different shots

The timestamp data comes from Dribbble's own structured data (JSON-LD), which is embedded in every shot page for SEO purposes.

## Customization

You can modify the appearance by editing `styles.css`:
- Change badge colors in `.timestamp-checker-badge`
- Adjust font sizes and spacing
- Modify the gradient background

## Troubleshooting

If timestamps aren't showing:
1. Refresh the Dribbble page
2. Check that the extension is enabled in `chrome://extensions/`
3. Make sure you're on dribbble.com (not a subdomain)

## Version

1.0 - Initial release

## License

Free to use and modify
