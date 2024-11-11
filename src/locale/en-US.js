export default {
  common: {
    addConnection: 'Add Connection',
    addFolder: 'Add Folder',
    name: 'Name',
    host: 'Host',
    port: 'Port',
    username: 'Username',
    authentication: 'Authentication',
    password: 'Password',
    privateKey: 'Private Key',
    selectFile: 'Select File',
    folderName: 'Folder Name',
    enterFolderName: 'Enter folder name',
    editFolder: 'Edit Folder',
    editConnection: 'Edit Connection',
    delete: 'Delete',
    cancel: 'Cancel',
    refresh: 'Refresh Connection',
    close: 'Close'
  },
  settings: {
    title: 'Settings',
    language: 'Language',
    saved: 'Settings saved successfully',
    languageChanged: 'Language Changed',
    restartRequired: 'The application needs to restart to apply the new language setting.',
    restartNow: 'Restart Now',
    restartLater: 'Restart Later',
    restartReminder: 'Please restart the application to apply the new language setting',
    saveFailed: 'Failed to save settings',
    customHighlight: 'Custom Highlight Rules',
    highlightRules: 'Highlight Rules Configuration',
    addRule: 'Add Rule',
    saveRules: 'Save Rules',
    ruleName: 'Rule Name',
    rulePattern: 'Regular Expression',
    ruleColor: 'Color',
    editPattern: 'Edit Regular Expression',
    pattern: 'Regular Expression Pattern',
    highlightRulesChanged: 'Highlight Rules Changed',
    restartRequired: 'The application needs to restart to apply the new highlight rules.',
    restartNow: 'Restart Now',
    restartLater: 'Restart Later',
    restartReminder: 'Please restart the application to apply the new highlight rules',
    maxRulesError: 'Maximum number of rules (1000) reached',
    maxLineLengthError: 'Rule exceeds maximum length of 500 characters',
    maxFileSizeError: 'Total highlight rules exceed maximum file size of 1MB'
  },
  messages: {
    confirmDelete: 'Confirm Delete',
    confirmDeleteConnection: 'Are you sure you want to delete connection "{name}"?',
    confirmDeleteFolder: 'Are you sure you want to delete folder "{name}" and all its connections ({count} connections)?',
    deleteSuccess: 'Deleted successfully',
    deleteFailed: 'Failed to delete',
    uploadSuccess: 'Uploaded successfully',
    downloadSuccess: 'Downloaded successfully',
    renameSuccess: 'Renamed successfully',
    error: 'An error occurred'
  },
  sftp: {
    explorer: 'SFTP Explorer',
    refresh: 'Refresh',
    history: 'History',
    upload: 'Upload File',
    download: 'Download',
    newFolder: 'New Folder',
    rename: 'Rename',
    delete: 'Delete',
    deleteFile: 'Delete File',
    deleteFolder: 'Delete Folder',
    confirmDelete: 'Are you sure you want to delete "{name}"?',
    cannotUndo: 'This action cannot be undone.',
    historyTitle: 'SFTP Operation History',
    clearHistory: 'Clear History',
    enterNewName: 'Enter new name',
    enterFolderName: 'Enter folder name',
    createFolder: 'Create',
    cancel: 'Cancel',
    confirm: 'Confirm',
    uploadSuccess: 'Uploaded successfully',
    downloadSuccess: 'Downloaded successfully',
    deleteSuccess: 'Deleted successfully',
    renameSuccess: 'Renamed successfully',
    createFolderSuccess: 'Folder created successfully',
    downloadFolder: 'Download Folder',
    selectFolderToSave: 'Select folder to save',
    select: 'Select',
    downloadingFolder: 'Downloading folder {name}...',
    downloadFolderSuccess: 'Folder {name} downloaded successfully',
    downloadFolderFailed: 'Failed to download folder {name}',
    downloading: 'Downloading',
    remainingSeconds: '{seconds} seconds',
    remainingMinutes: '{minutes} minutes',
    remainingHours: '{hours} hours'
  },
  update: {
    newVersion: 'New Version Available',
    newVersionAvailable: 'New version {version} is available',
    currentVersion: 'Current version: {version}',
    download: 'Download',
    later: 'Later'
  },
  lock: {
    setPassword: 'Set Lock Password',
    enterPassword: 'Enter Password',
    confirmPassword: 'Confirm Password',
    confirm: 'Confirm',
    unlock: 'Unlock',
    passwordRequired: 'Password is required',
    passwordMismatch: 'Passwords do not match',
    passwordSet: 'Password has been set',
    unlocked: 'Screen unlocked',
    wrongPassword: 'Wrong password',
  }
}
