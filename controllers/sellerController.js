const Product = require("../models/productModel");

exports.addProduct = async (req, res) => {
  const { name, category, description, price, discount } = req.body;
  const userId = req.user.id;

  try {
    const product = await Product.create({
      name,
      category,
      description,
      price,
      discount,
      userId,
    });
    res.status(201).send(product);
  } catch (err) {
    res.status(500).send({ error: "Something went wrong" });
  }
};

exports.editProduct = async (req, res) => {
  const { id } = req.params;
  const { name, category, description, price, discount } = req.body;
  const userId = req.user.id;

  try {
    const product = await Product.findOne({ where: { id, userId } });
    if (!product) return res.status(404).send({ error: "Product not found" });

    product.name = name;
    product.category = category;
    product.description = description;
    product.price = price;
    product.discount = discount;

    await product.save();
    res.send(product);
  } catch (err) {
    res.status(500).send({ error: "Something went wrong" });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const product = await Product.findOne({ where: { id, userId } });
    if (!product) return res.status(404).send({ error: "Product not found" });

    await product.destroy();
    res.send({ message: "Product deleted" });
  } catch (err) {
    res.status(500).send({ error: "Something went wrong" });
  }
};
