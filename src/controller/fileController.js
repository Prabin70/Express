export const handleSingeFileController = async (req, res, next) => {
  try {
    let link = `https://localhost:3000/${req.file.filename}`;
    res.status(200).json({
      success: true,
      message: "File uploaded psuccessfully",
      result: link,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const handleMultipleFileController = async (req, res, next) => {
  try {
    let link = req.files.map((value, index) => {
      return `https://localhost:3000/${value.filename}`;
    });

    res.status(200).json({
      success: true,
      message: "Files uploaded successfully",
      reuslt: link,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
