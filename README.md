# Shell Clock - Gnome Shell Extension

Execute command shell and display the output in the clock area.

## Example Commands

Kernel version:
`uname -r`

Current user:
`whoami`

OpenGL vendor:
`glxinfo | grep -i "opengl vendor" | cut -d: -f 2`

CPU temperature:
`sensors | grep -i "Package id 0" | cut -d: -f2`

## Installation

Copy and paste into your terminal below:

`mkdir -p ~/.local/share/gnome-shell/extensions/shell-clock@muratcileli.com && wget -qO- https://gitlab.com/murat.cileli/gnome-shell-extension-shell-clock/-/archive/master/gnome-shell-extension-shell-clock-master.tar.gz | tar xvz -C ~/.local/share/gnome-shell/extensions/shell-clock@muratcileli.com --strip 1`

Press ALT+F2 and type "r" then enter.

Open Tweaks and activate the extension.