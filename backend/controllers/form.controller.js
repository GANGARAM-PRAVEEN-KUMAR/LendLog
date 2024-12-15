const { v4: uuidv4 } = require("uuid");
const formModel = require("../models/form.model");

const getForms = async (req, res) => {
  try {
    const email = req.user.email;

    const tasks = await formModel.find({
      $or: [{ lenderEmail: email }, { borrowerEmail: email }],
    });

    res.json({ status: "success", tasks });
  } catch (error) {
    res.json({ status: "fail", messsage: "Unable to fetch Forms" });
  }
};

const getForm = async (req, res) => {
  try {
    const email = req.user.email;
    const formId = req.params.id;
    const forms = await formModel.find({formId : formId});

    res.json({ status: "success", forms });
  } catch (error) {
    res.json({ status: "fail", messsage: "Unable to fetch Forms" });
  }
};

const addForm = async (req, res) => {
  try {
    const form = req.body;
    const formId = uuidv4();
    const imageBuffer = req.file.buffer;
    const newForm = { ...form, formId , bsign : imageBuffer};

    await formModel.create(newForm);

    res.json({ status: "success", message: "Form submitted" });
  } catch (error) {
    res.json({ status: "fail", message: "Failed to submit Form" });
  }
};

const deleteForm = async (req, res) => {
  try {
    const formId = req.params.id;
    //const email = req.user.email;
    const item = await formModel.findOneAndDelete({
      formId: formId,
    });

    if (!item) res.json({ status: "fail", message: "Task Not Found" });
    else res.json({ status: "success", item });
  } catch (error) {
    res.json({ status: "fail", message: "Failed to delete Task" });
  }
};

module.exports = {
  getForms,
  getForm,
  addForm,
  deleteForm,
};
