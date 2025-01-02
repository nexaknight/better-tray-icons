import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';


export default class ExampleExtension extends Extension {
    /**
     * This class is constructed once when your extension is loaded, not
     * enabled. This is a good time to setup translations or anything else you
     * only do once.
     *
     * You MUST NOT make any changes to GNOME Shell, connect any signals or add
     * any event sources here.
     *
     * @param {ExtensionMeta} metadata - An extension meta object
     */
    constructor(metadata) {
        super(metadata);

        console.debug(`constructing ${this.metadata.name}`);
    }

    /**
     * This function is called when your extension is enabled, which could be
     * done in GNOME Extensions, when you log in or when the screen is unlocked.
     *
     * This is when you should setup any UI for your extension, change existing
     * widgets, connect signals or modify GNOME Shell's behavior.
     */
    enable() {
        console.debug(`enabling ${this.metadata.name}`);
    }

    /**
     * This function is called when your extension is uninstalled, disabled in
     * GNOME Extensions or when the screen locks.
     *
     * Anything you created, modified or setup in enable() MUST be undone here.
     * Not doing so is the most common reason extensions are rejected in review!
     */
    disable() {
        console.debug(`disabling ${this.metadata.name}`);
    }
}