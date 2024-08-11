//beofore we working with multer we always have to make public folder(it is teh common error that beginner does )
//public fil is the place where file stores

import { error } from "console";
import multer from "multer";

import path from "path";

//the mximum filesize in bytes

//1 kilo bytrs = 1024 byte

let limits = {
  fileSize: 1024 * 1024 * 2, //2mb
};

let storage = multer.diskStorage({
  //destination give the folder location where file is placed

  //./ means root (main) folder
  //you must make a public folder manually or it will throw like no file path or directory

  destination: (req, file, cb) => {
    let staticFolder = "./public";
    cb(null, staticFolder);
  },

  //any file has key and value

  filename: (req, file, cb) => {
    //key isi called fieldName and value is called origina name

    //fileName gievs the (title) name of the file
    let fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName);
  },
});

let fileFilter = (req, file, cb) => {
  let validExtension = [
    ".png",
    ".PNG",
    ".jpg",
    ".JPG",
    ".pdf",
    ".jpeg",
    ".JPEG",
    ".mp4",
    ".svg",
    ".doc",
    ".docx",
  ];

  let originalName = file.originalname;

  //path module is inbuilt module of node js, we have to import it manually if it is not import ..
  let originalExtension = path.extname(originalName);

  let isValidExtension = validExtension.includes(originalExtension);

  if (isValidExtension) {
    //true means pass type of file
    //null represent error since there is no error thus error is null.
    cb(null, true);
  } else {
    //false means dont pass such types of file
    cb(new Error("File is not supported "));
  }
};

const upload = multer({
  // storage define the location in the server where the file is storeand controll the filename

  storage: storage,

  //filter the file accorfing to the extension
  fileFilter: fileFilter,

  //filter the file according to its size
  limits: limits,
});

export default upload;
