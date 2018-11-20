# Shell Clock - Gnome Shell Extension

Executes any shell command and display the output in clock area.

## Example Commands

Kernel version:
`uname -r`

Current user:
`whoami`

OpenGL vendor:
`bash -c "glxinfo | grep -i "opengl vendor" | cut -d: -f 2"`

CPU temperature:
`bash -c "sensors | grep -i "Package id 0" | cut -d: -f2"`

## Installation

Copy and paste into your terminal:

`mkdir -p ~/.local/share/gnome-shell/extensions/shell-clock@muratcileli.com && wget -qO- https://gitlab.com/murat.cileli/gnome-shell-extension-shell-clock/-/archive/master/gnome-shell-extension-shell-clock-master.tar.gz | tar xvz -C ~/.local/share/gnome-shell/extensions/shell-clock@muratcileli.com --strip 1`

Press ALT+F2 and type "r" then enter.

Open Tweaks and activate the extension.

## Credits

This extension heavily based on Stuart Langridge's Clock Override extension: https://github.com/stuartlangridge/gnome-shell-clock-override 