# Chrome Extensions Repository

This repository is dedicated to creating and maintaining various Chrome extensions. Each extension aims to enhance user experience, improve productivity, or provide niche functionalities for specific use cases.

## Table of Contents

- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Development Guide](#development-guide)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)

## Getting Started

To start developing or using the Chrome extensions in this repository:

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the specific extension folder you want to work with.

3. Load the extension into Chrome:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer mode** (toggle in the top-right corner).
   - Click **Load unpacked** and select the extension's folder.

## Folder Structure

```
repo-root/
├── extension-name-1/
│   ├── manifest.json
│   ├── background.js
│   ├── content.js
│   ├── popup.html
│   └── styles/
├── extension-name-2/
│   ├── manifest.json
│   ├── background.js
│   ├── options.html
│   └── assets/
└── README.md
```

- Each extension resides in its own folder.
- Common files include:
  - `manifest.json`: Defines the metadata and permissions for the extension.
  - `background.js`: Contains background scripts.
  - `content.js`: Includes content scripts injected into web pages.
  - `popup.html`: Defines the popup interface (if applicable).

## Prerequisites

Ensure you have the following tools installed:

- **Node.js**: Required if the extension uses npm packages or build tools.
- **Code Editor**: [VS Code](https://code.visualstudio.com/) is recommended for its extensions and debugging capabilities.
- **Chrome Browser**: Version 88 or higher is recommended.

## Development Guide

1. **Create a New Extension**:
   - Create a new folder under the repository root.
   - Add a `manifest.json` file with basic metadata.

2. **Edit Manifest File**:
   - Set the `manifest_version` to `3` (recommended for new extensions).
   - Define permissions, background scripts, and other necessary configurations.

3. **Test Your Extension**:
   - Load your extension into Chrome using **Developer mode**.
   - Open the browser's Developer Tools for debugging.

4. **Package the Extension**:
   - Go to `chrome://extensions/` and click **Pack Extension**.
   - Upload the packaged `.crx` file to the Chrome Web Store (if required).

## Contribution Guidelines

We welcome contributions to improve existing extensions or create new ones. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes with clear messages.
4. Submit a pull request with a detailed description of your changes.

## License

This repository is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code with proper attribution.

---

Happy coding! 🎉
