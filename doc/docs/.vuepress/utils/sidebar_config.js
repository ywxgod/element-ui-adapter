const fsPromise = require('fs').promises;
// 排除检查的文件
const excludes = [
    '.DS_Store', '.vuepress'
];

const getFileNames = async (dir) => {
    let fileList = await fsPromise.readdir(dir);
    fileList = fileList.filter(i => {
        return !excludes.find(i);
    });
    let filenames = [];
    for (let file of fileList){
        const fullpath = `${dir}/${file}`;
        const stats = await fsPromise.stat(fullpath);
        if (!stats.isFile()){
            continue;
        }
        if (file.toLowerCase() === 'readme.md') {
            file = '';
        }else {
            file = file.replace('.md', '');
        }
        filenames.push(file);
    }
};

const createSidebarItem = (title, children = [''], collapsable = true, sidebarDepth = 2) => {
    return {
        title,
        collapsable,
        children,
        sidebarDepth
    };
};

module.exports = {

};