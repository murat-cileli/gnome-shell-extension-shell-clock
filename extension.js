const Main = imports.ui.main;
const GLib = imports.gi.GLib;
const Util = imports.misc.util;
const Tweener = imports.ui.tweener;
const Mainloop = imports.mainloop;
const Lang = imports.lang;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;
const ByteArray = imports.byteArray;

var settings, obj, signalHandlerID;
var timer = null;

function init() {
    settings = Convenience.getSettings();
}

function byteArrayToString (array) {
    return array instanceof Uint8Array ? ByteArray.toString (array):array;
}

function executeShellCommand() {
    var resText = '';
    var cmd = settings.get_string("shell-command");

    if (cmd.trim() == '') {
        return
    }

    var res = GLib.spawn_command_line_sync(cmd);
    var rInt = settings.get_int ("refresh-interval");

    if (res[0]) {
    	resText = byteArrayToString(res[1]).toString().split("\n")[0];
    }

    obj.set_text(resText);

    if (rInt != 0) {

        if (timer) {
            Mainloop.source_remove(timer);
            timer = null;
        }

        timer = Mainloop.timeout_add_seconds(rInt, Lang.bind(this, executeShellCommand));
    }
}

function enable() {
    var statusArea = Main.panel._statusArea || Main.panel.statusArea;

    if (!statusArea || !statusArea.dateMenu || !statusArea.dateMenu.actor) {
        return;
    }

    statusArea.dateMenu.actor.first_child.get_children().forEach(function(children) {
        if (children.get_text && !obj) { obj = children; }
    });

    if (!obj) {
        return;
    }

    signalHandlerID = obj.connect("notify::text", executeShellCommand);

    executeShellCommand();

}

function disable() {
    if (obj && signalHandlerID) {
        obj.disconnect(signalHandlerID);
    }
}