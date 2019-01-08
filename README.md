# Shell Clock - Gnome Shell Extension

Executes any shell command and display the output in clock area.

![2018-11-22_12-34](https://user-images.githubusercontent.com/6532000/50812026-214cae00-1322-11e9-84ca-5fb2543c8efd.png)

![shell-clock-settings](https://user-images.githubusercontent.com/6532000/50812049-2c074300-1322-11e9-8b82-f232f6517596.png)

## Example Commands

Kernel version:
`uname -r`

Current user:
`whoami`

OpenGL vendor:
`bash -c "glxinfo | grep -i \"opengl vendor\" | cut -d: -f 2"`

CPU temperature:
`bash -c "sensors | grep -i \"Package id 0\" | cut -d: -f2"`

## Installation

Copy and paste into your terminal:

`mkdir -p ~/.local/share/gnome-shell/extensions/shell-clock@muratcileli.com && wget -qO- https://gitlab.com/murat.cileli/gnome-shell-extension-shell-clock/-/archive/master/gnome-shell-extension-shell-clock-master.tar.gz | tar xvz -C ~/.local/share/gnome-shell/extensions/shell-clock@muratcileli.com --strip 1`

Press ALT+F2 and type "r" then enter.

Open Tweaks and activate the extension.

## Credits

This extension heavily based on Stuart Langridge's Clock Override extension: https://github.com/stuartlangridge/gnome-shell-clock-override 
