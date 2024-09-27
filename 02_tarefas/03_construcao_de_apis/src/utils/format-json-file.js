export const formatJsonFile = (
    filePath,
    replacer = null,
    indentation = 2
) => {
    return JSON.stringify(filePath, replacer, indentation);
};