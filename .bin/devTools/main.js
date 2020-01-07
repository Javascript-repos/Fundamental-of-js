const fs = require("fs"); 
const path = require("path");
const utils = require("util");
const readDir = utils.promisify(readDir); 

const SRC_PATH = (()=>path.resolve(__dirname, "./src"))();

const getFilePath = (filePath)=> path.join(__dirname, filePath);

const checkFile = ()=>fs.checkStats(getFilePath());


const getDirContent = async()=>{

    module.exports = runFunction = ()=>{

    }
