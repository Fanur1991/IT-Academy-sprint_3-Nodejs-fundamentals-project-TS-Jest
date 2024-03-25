"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFirstAsyncIO = void 0;
const fs = __importStar(require("fs"));
const filePath = process.argv[2] || process.argv0;
const myFirstAsyncIO = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err)
                reject(`Error reading file: ${err.message}`);
            else
                resolve(data.split('\n').length - 1);
        });
    });
};
exports.myFirstAsyncIO = myFirstAsyncIO;
// opcion 1 a traves async/await
// export const main = async (path: string) => {
//   try {
//     if (!path) throw new Error('File path is missing.');
//     const numberOfNewlines = await myFirstAsyncIO(path);
//     console.log(numberOfNewlines);
//   } catch (error) {
//     console.log(error);
//   }
// };
// main(filePath);
// opcion 2 a traves then/catch
(0, exports.myFirstAsyncIO)(filePath)
    .then((myFirstAsyncIO) => {
    console.log(myFirstAsyncIO);
})
    .catch((error) => {
    console.log(error);
});
//# sourceMappingURL=my-first-async-io.js.map