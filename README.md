# Dribbble Upload Timestamp

A lightweight Chrome extension that displays upload timestamps on Dribbble posts, making it easy to see when designs were originally published.

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-blue?style=flat-square&logo=googlechrome)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-green?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

## ✨ Features

- **📅 Automatic Timestamp Extraction** - Retrieves upload dates from Dribbble's JSON-LD schema data
- **🎨 Beautiful Display** - Shows a styled card with gradient background at the top of each shot
- **⏰ Human-Readable Format** - Displays both "X days/hours/minutes ago" and full date/time
- **🔄 AJAX Navigation Support** - Automatically updates when browsing between shots
- **🚀 Zero Configuration** - Works immediately after installation

## 📸 Screenshot

The extension displays a purple gradient card showing:
- Time since upload (e.g., "3 days ago")
- Full timestamp with date and time

## 🚀 Installation

### From Source

1. Clone or download this repository:
   ```bash
   git clone https://github.com/yourusername/dribbble-upload-timestamp.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable **Developer mode** (toggle in the top-right corner)

4. Click **Load unpacked**

5. Select the `dribbble-upload-timestamp` folder

6. The extension icon should appear in your toolbar!

## 📖 Usage

1. Visit [Dribbble.com](https://dribbble.com)
2. Click on any shot to open its detail page
3. The timestamp card will automatically appear at the top of the shot details
4. Browse different shots - timestamps update automatically!

**Developer Console:**
- Press `F12` to open the console
- Look for emoji-prefixed messages like "✅ Found uploadDate" and "🎨 Timestamp displayed successfully!"

## 🛠️ Technical Details

### How It Works

The extension:
1. Monitors Dribbble shot pages using MutationObserver
2. Extracts `uploadDate` from JSON-LD structured data
3. Formats timestamps using JavaScript Date API
4. Dynamically injects a styled card into the page DOM

### File Structure

```
dribbble-upload-timestamp/
├── manifest.json       # Extension configuration (Manifest V3)
├── content.js          # Main script for timestamp extraction and display
├── styles.css          # Styling for timestamp card
├── popup.html          # Extension popup UI
├── icon16.png          # 16x16 icon
├── icon48.png          # 48x48 icon
├── icon128.png         # 128x128 icon
└── README.md           # Documentation
```

### Permissions

- `activeTab` - Access to the current tab
- `scripting` - Inject content scripts
- `https://dribbble.com/*` - Host permission for Dribbble

## 🎨 Customization

You can customize the appearance by editing `styles.css`:

```css
.timestamp-checker-display {
  /* Modify gradient colors */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  /* Adjust spacing */
  padding: 20px;
  margin: 20px 0;
  
  /* Change border radius */
  border-radius: 12px;
}
```

## 🐛 Troubleshooting

**Timestamps not showing?**
- Refresh the Dribbble page
- Verify the extension is enabled at `chrome://extensions/`
- Ensure you're on a shot detail page (not the homepage)
- Check that the URL matches `https://dribbble.com/*`

**Console errors?**
- Open DevTools (F12) and check for error messages
- Verify JSON-LD script tags exist on the page

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Version History

- **1.0.0** - Initial release
  - Timestamp extraction from JSON-LD
  - Beautiful card display
  - AJAX navigation support

## 📄 License

This project is licensed under the MIT License - feel free to use and modify.

## 🙏 Acknowledgments

- Built for the Dribbble community
- Uses Dribbble's JSON-LD structured data
- Inspired by the need for transparency in design posting dates

## 📧 Contact

Have questions or suggestions? Feel free to open an issue!

---

Made with 💜 for designers who want to know when designs were actually posted
