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
    close: 'Close',
    open: 'Open',
    edit: 'Edit',
    duplicate: 'Duplicate'
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
    maxFileSizeError: 'Total highlight rules exceed maximum file size of 1MB',
    fontSize: 'Font Size',
    useGPU: 'GPU Rendering',
    enabled: 'Enabled',
    disabled: 'Disabled',
    settingsChanged: 'Settings Changed'
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
    remainingHours: '{hours} hours',
    downloadSelected: 'Download {count} files',
    deleteSelected: 'Delete {count} files',
    noFilesSelected: 'No files selected',
    selectDownloadFolder: 'Select download folder',
    multiDownloadSuccess: 'Successfully downloaded {count} files',
    multiDownloadFailed: 'Failed to download multiple files',
    deleteMultiple: 'Delete Multiple Files',
    confirmDeleteMultiple: 'Are you sure you want to delete these {count} files?',
    multiDeleteSuccess: 'Successfully deleted {count} files',
    multiDeleteFailed: 'Failed to delete multiple files',
    noItemsSelected: 'No items selected',
    confirmDeleteMultipleItems: 'Are you sure you want to delete {fileCount} files and {folderCount} folders?',
    copyPath: 'Copy Path',
    pathCopied: 'Path copied: {path}',
    filePreviewLimit: 'File Preview Limit',
    filePreviewLimitMessage: 'File {fileName} is {fileSize} KB, exceeding preview limit. Do you want to download?',
    unsupportedFileType: 'Unsupported File Type',
    unsupportedFileTypeMessage: 'Cannot preview file {fileName}. Do you want to download?',
    filePreviewFailed: 'Failed to preview file',
    copyModTime: 'Copy Modification Time',
    copySize: 'Copy File Size',
    timeCopied: 'Modification time copied: {time}',
    sizeCopied: 'File size copied: {size}',
    fileTooLarge: 'File is too large. Maximum allowed size is {maxSize}',
    uploadCancelled: 'Upload cancelled',
    downloadCancelled: 'Download cancelled',
    uploadPartialSuccess: 'Upload completed: {success} succeeded, {fail} failed',
    pageSizeOptions: 'Items per page',
    pageSizeSaved: 'Page size setting saved',
    pageSizeSaveFailed: 'Failed to save page size setting'
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
    cancel: 'Cancel',
    unlock: 'Unlock',
    passwordRequired: 'Password is required',
    passwordMismatch: 'Passwords do not match',
    passwordSet: 'Password has been set',
    unlocked: 'Screen unlocked',
    wrongPassword: 'Wrong password',
  },
  aiAssistant: {
    title: 'AI Assistant',
    settings: 'Settings',
    currentModel: 'Current Model',
    addProvider: 'Add Provider',
    models: 'Models',
    maxContextLength: 'Max Context Length',
    modelName: 'Model Name',
    apiUrl: 'API URL',
    apiKey: 'API Key',
    temperature: 'Temperature',
    maxTokens: 'Max Tokens',
    provider: 'Provider',
    save: 'Save',
    cancel: 'Cancel',
    close: 'Close',
    minimize: 'Minimize',
    copy: 'Copy',
    send: 'Send',
    chatPlaceholder: 'Chat with {model}... Use Shift+Enter for new line',
    noModels: 'No models configured',
    modelExists: 'Model name already exists',
    requiredFields: 'Please fill in all required fields',
    modelAdded: 'Model added successfully',
    modelUpdated: 'Model settings updated',
    settingsSaved: 'Settings saved successfully'
  },
  terminal: {
    search: {
      title: 'Search in Terminal',
      placeholder: 'Search in terminal',
      caseSensitive: 'Case Sensitive',
      wholeWord: 'Whole Word',
      previous: 'Previous',
      next: 'Next'
    }
  },
  tools: {
    title: 'Tools',
    ipQuery: {
      title: 'IP Query',
      placeholder: 'Enter IP address (leave empty for current IP)',
      query: 'Query',
      ip: 'IP Address',
      country: 'Country',
      region: 'Region',
      city: 'City',
      isp: 'ISP',
      timezone: 'Timezone',
      postal: 'Postal Code',
      location: 'Location',
      error: {
        failed: 'Failed to query IP information',
        invalid: 'Invalid IP address',
        network: 'Network error, please check your connection',
        timeout: 'Request timeout, please try again',
        rateLimit: 'Too many requests, please try again later',
        incomplete: 'Received incomplete IP information'
      }
    },
    passwordGen: {
      title: 'Password Generator',
      length: 'Password Length',
      uppercase: 'Include Uppercase Letters (A-Z)',
      lowercase: 'Include Lowercase Letters (a-z)',
      numbers: 'Include Numbers (0-9)',
      symbols: 'Include Special Characters (!@#$...)',
      generate: 'Generate',
      copy: 'Copy Password',
      success: {
        copy: 'Password copied to clipboard',
        generate: 'Password generated successfully'
      },
      error: {
        copy: 'Failed to copy password',
        empty: 'Please select at least one character type'
      }
    }
  }
}
