import ProductModel from "../models/ProductModel.js"

export const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({})
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id)
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const createProduct = async (req, res) => {
    try {
        const { name, category, price, image } = req.body
        const newProduct = new ProductModel({name, category, price, image})
        newProduct.save()
        res.status(200).send("Product created")
    } catch (error) {
        res.status(500).send(error)
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { name, category, price, image } = req.body
        const updateProduct = await ProductModel.findByIdAndUpdate(req.params.id)
        if(updateProduct) {
            updateProduct.name = name,
            updateProduct.category = category,
            updateProduct.price = price,
            updateProduct.image = image
        }
        updateProduct.save()
        res.status(200).send("Product updated")
    } catch (error) {
        res.status(500).send(error)
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await ProductModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Product deleted")
    } catch (error) {
        res.status(500).send(error)
    }
}