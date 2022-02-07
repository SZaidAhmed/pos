const Item = require("../models/itemModel");

exports.addItem = async (req, res) => {
    try {
        const data = req.body;
        const item = await Item.create(data)
        res.status(200).json({
            status: "success",
            data: {
                item
            }
        })
    } catch (error) {
        res.status(200).json({
            error: error.message
        })
    }
}

exports.viewItems = async (req, res) => {
    try {
        const items = await Item.find();
        const totalItems = items.length;
        res.status(200).json({
            status: "succcess",
            totalItems,
            data: {
                items
            }
        })
    } catch (error) {
        res.status(200).json({
            error: error.message
        })
    }
}

exports.updateItem = async (req, res) => {
    try {
        const { _id, ...modifiedItem } = req.body;
        const item = await Item.findOne({ _id });
        Object.keys(modifiedItem).map(x => item[x] = modifiedItem[x]);
        await item.save();
        res.status(200).json({
            status: "success",
            data: {
                item
            }
        })
    } catch (error) {
        res.status(200).json({
            error: error.message
        })
    }
}