# Better-Tray-Icon
Better Tray-Icons

Better Tray-Icons is a GNOME Shell Extension designed to improve the management and display of tray icons under both Wayland and Xorg environments. It introduces a customizable dropdown menu for tray icons, drag-and-drop functionality, dark/light mode support, and dynamic integration with system accent colors.

---

## Features

- **Tray Icons Display**: Fully supports tray icons under Wayland and Xorg.
- **Dropdown Menu**: Option to display tray icons in a dropdown menu, similar to Windows.
- **Drag-and-Drop**: Easily rearrange tray icons or move them between the dropdown and panel.
- **Right-Click Menus**: Access icon-specific options dynamically using D-Bus or StatusNotifierItem specifications.
- **Dark/Light Mode**: Automatically adapts to the current system theme.
- **Accent Colors**: Dynamically applies system-wide accent colors from GNOME 47 and later.

---

## Prerequisites

- **GNOME Shell**: Version 40 or later.
- **GNOME Development Tools**: Required for building extensions.

### Dependencies:

- `glib-compile-schemas`
- `gnome-shell-extension-tool`
- `make` (optional for easier building).

## Supported Platforms:

- Wayland
- Xorg

---

## Installation Instructions

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/better-tray-icons.git
    cd better-tray-icons
    ```

2. **Build the Extension**

    Compile the GSettings schema:

    ```bash
    glib-compile-schemas schemas/
    ```

    (Optional) Build the project using make:

    ```bash
    make
    ```

3. **Install the Extension**

    Copy the extension to your GNOME Shell extensions directory:

    ```bash
    mkdir -p ~/.local/share/gnome-shell/extensions/better-tray-icons@your-username
    cp -r * ~/.local/share/gnome-shell/extensions/better-tray-icons@your-username
    ```

4. **Enable the Extension**

    Enable the extension using the GNOME Tweak Tool or via the command line:

    ```bash
    gnome-extensions enable better-tray-icons@your-username
    ```

--- 

## Roadmap

- [ ] Basic Tray Icons Display:
- Display tray icons on both Wayland and Xorg.
- [ ] Implement dropdown menu for icon-grouping.
- [ ] Add drag-and-drop functionality.
- [ ] Implement dynamic right-click context-menus via D-Bus.
- [ ] Support for system-wide accent colors from GNOME 47.
- [ ] Provide a settings menu for users to customize the position and behavior of tray icons.
- [ ] Add a grid-layout option in the settings to organize tray icons in a structured grid template.
- [ ] Allow users to customize the spacing and padding between icons for better visual alignment.
- [ ] Introduce the ability to hide specific tray icons through the settings panel.
- [ ] Provide support for scaling tray icons to match high-DPI displays.
- [ ] Include a “Quick Actions” feature for frequently used tray options directly in the panel.
- [ ] Add support for wine (Windows) program tray-icons (detect and context menu).
- [ ] Add symbolic design for tray icons.
- [ ] Enable integration and drag-and-drop functionality for tray icons from other extensions (e.g., allow icons like Clipboard Manager TrayIcon to be moved within the panel or relocated into the dropdown menu).
- [ ] Implement support for Dash-to-Panel (enable on all panels).
- [ ] Add documentation for developers to contribute to the extension.

---

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request. For major changes, please open an issue first to discuss your ideas.

## License

This project is licensed under the GPT-3 License. See the [LICENSE](./LICENSE) file for details.