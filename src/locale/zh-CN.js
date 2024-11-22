export default {
  common: {
    addConnection: '添加连接',
    addFolder: '添加文件夹',
    name: '名称',
    host: '主机',
    port: '端口',
    username: '用户名',
    authentication: '认证方式',
    password: '密码',
    privateKey: '私钥',
    selectFile: '选择文件',
    folderName: '文件夹名称',
    enterFolderName: '请输入文件夹名称',
    editFolder: '编辑文件夹',
    editConnection: '编辑连接',
    delete: '删除',
    cancel: '取消',
    refresh: '刷新连接',
    close: '关闭',
    open: '打开',
    edit: '编辑',
    duplicate: '复制'
  },
  settings: {
    title: '设置',
    language: '语言',
    saved: '设置保存成功',
    languageChanged: '语言已更改',
    restartRequired: '需要重启应用程序以应用新的语言设置。',
    restartNow: '立即重启',
    restartLater: '稍后重启',
    restartReminder: '请重启应用程序以应用新的语言设置',
    saveFailed: '保存设置失败',
    customHighlight: '自定义高亮规则',
    highlightRules: '高亮规则配置',
    addRule: '添加规则',
    saveRules: '保存规则',
    ruleName: '规则名称',
    rulePattern: '正则表达式',
    ruleColor: '颜色',
    editPattern: '编辑正则表达式',
    pattern: '正则表达式模式',
    highlightRulesChanged: '高亮规则已更改',
    restartRequired: '需要重启应用程序以应用新的高亮规则。',
    restartNow: '立即重启',
    restartLater: '稍后重启',
    restartReminder: '请重启应用程序以应用新的高亮规则',
    maxRulesError: '已达到最大规则数量限制（1000条）',
    maxLineLengthError: '规则超过最大长度限制（500字符）',
    maxFileSizeError: '高亮规则文件总大小超过限制（1MB）'
  },
  messages: {
    confirmDelete: '确认删除',
    confirmDeleteConnection: '确定要删除连接 "{name}" 吗？',
    confirmDeleteFolder: '确定要删除文件夹 "{name}" 及其所有连接（{count} 个连接）吗？',
    deleteSuccess: '删除成功',
    deleteFailed: '删除失败',
    uploadSuccess: '上传成功',
    downloadSuccess: '下载成功',
    renameSuccess: '重命名成功',
    error: '发生错误'
  },
  sftp: {
    explorer: 'SFTP 浏览器',
    refresh: '刷新',
    history: '历史记录',
    upload: '上传文件',
    download: '下载',
    newFolder: '新建文件夹',
    rename: '重命名',
    delete: '删除',
    deleteFile: '删除文件',
    deleteFolder: '删除文件夹',
    confirmDelete: '确定要删除 "{name}" 吗？',
    cannotUndo: '此操作无法撤销。',
    historyTitle: 'SFTP 操作历史',
    clearHistory: '清除历史',
    enterNewName: '输入新名称',
    enterFolderName: '输入文件夹名称',
    createFolder: '创建',
    cancel: '取消',
    confirm: '确认',
    uploadSuccess: '上传成功',
    downloadSuccess: '下载成功',
    deleteSuccess: '删除成功',
    renameSuccess: '重命名成功',
    createFolderSuccess: '文件夹创建成功',
    downloadFolder: '下载文件夹',
    selectFolderToSave: '选择保存位置',
    select: '选择',
    downloadingFolder: '正在下载文件夹 {name}...',
    downloadFolderSuccess: '文件夹 {name} 下载成功',
    downloadFolderFailed: '文件夹 {name} 下载失败',
    downloading: '正在下载',
    remainingSeconds: '{seconds} 秒',
    remainingMinutes: '{minutes} 分钟',
    remainingHours: '{hours} 小时',
    downloadSelected: '下载 {count} 个文件',
    deleteSelected: '删除 {count} 个文件',
    noFilesSelected: '未选择任何文件',
    selectDownloadFolder: '选择下载文件',
    multiDownloadSuccess: '成功下载 {count} 个文件',
    multiDownloadFailed: '批量下载失败',
    deleteMultiple: '删除多个文件',
    confirmDeleteMultiple: '确定要删除这 {count} 个文件吗？',
    multiDeleteSuccess: '成功删除 {count} 个文件',
    multiDeleteFailed: '批量删除失败',
    noItemsSelected: '未选择任何项目',
    confirmDeleteMultipleItems: '确定要删除 {fileCount} 个文件和 {folderCount} 个文件夹吗？',
    multiDeleteSuccess: '成功删除 {fileCount} 个文件和 {folderCount} 个文件夹',
    multiDeleteFailed: '批量删除文件和文件夹失败',
    copyPath: '复制路径',
    pathCopied: '路径已复制：{path}',
    filePreviewLimit: '文件预览限制',
    filePreviewLimitMessage: '文件 {fileName} 大小为 {fileSize} KB，超过预览限制。是否下载？',
    unsupportedFileType: '不支持的文件类型',
    unsupportedFileTypeMessage: '无法预览文件 {fileName}。是否下载？',
    filePreviewFailed: '文件预览失败',
    copyModTime: '复制修改时间',
    copySize: '复制文件大小',
    timeCopied: '修改时间已复制: {time}',
    sizeCopied: '文件大小已复制: {size}'
  },
  update: {
    newVersion: '发现新版本',
    newVersionAvailable: '新版本 {version} 已发布',
    currentVersion: '当前版本：{version}',
    download: '下载',
    later: '稍后'
  },
  lock: {
    setPassword: '设置锁屏密码',
    enterPassword: '请入密码',
    confirmPassword: '确认密码',
    confirm: '确认',
    cancel: '取消',
    unlock: '解锁',
    passwordRequired: '请输入密码',
    passwordMismatch: '两次输入的密码不一致',
    passwordSet: '密码已设置',
    unlocked: '已解锁',
    wrongPassword: '密码错误',
  },
  aiAssistant: {
    title: 'AI 助手',
    settings: '设',
    currentModel: '当前模型',
    addProvider: '添加服务提供商',
    models: '模型',
    maxContextLength: '最大上文长度',
    modelName: '模型名称',
    apiUrl: 'API 地址',
    apiKey: 'API 密钥',
    temperature: '随机性',
    maxTokens: '最大令牌数',
    provider: '服务提供商',
    save: '保存',
    cancel: '取消',
    close: '关闭',
    minimize: '最小化',
    copy: '复制',
    send: '发送',
    chatPlaceholder: '与 {model} 聊天... 使用 Shift+Enter 换行',
    noModels: '未配置模型',
    modelExists: '模型名称已存在',
    requiredFields: '请填写所有必填字段',
    modelAdded: '模型添加成功',
    modelUpdated: '模型设置已更新',
    settingsSaved: '设置保存成功'
  }
}
