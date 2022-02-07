const express = require("express");
const { addItem, viewItems, updateItem } = require("../controllers/itemController");

const router = express.Router();

router.post("/addItem", addItem);
router.get("/viewItems", viewItems);
router.get("/updateItem", updateItem);

module.exports = router;