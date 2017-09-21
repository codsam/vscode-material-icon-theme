import { FolderIcon, FolderTypes } from "../models/index";

/**
 * Defines folder icons
 */
export const folders: FolderTypes = {
    default: { icon: 'folder.svg' },
    types: [
        { icon: 'src.svg', folderNames: ['src', 'source'] },
        { icon: 'dist.svg', folderNames: ['dist', 'build'] },
        { icon: 'aurelia.svg', folderNames: [''] }
    ],
};