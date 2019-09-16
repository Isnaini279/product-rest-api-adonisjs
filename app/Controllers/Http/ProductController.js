'use strict'

const Product = use('App/Models/Product')

class ProductController {
	//input data or POST
	async store({request, response}){
		const productInfo = request.only(['product_type', 'product_name', 'quantity'])
		const product = new Product()
		product.product_type = productInfo.product_type
		product.product_name = productInfo.product_name
		product.quantity = productInfo.quantity
		await product.save()
		return response.status(201).json(product)
	}

	//get data
	async index ({response}) {
		let product = await Product.all()
		return response.json(product)
	}

	//get data based on id
	async show({params, response}){
		const product = await Product.find(params.id)
		return response.json(product)
	}

	//update data
	async update ({params, request, response}) {
		const productInfo = request.only(['product_type', 'product_name', 'quantity'])
		const product = await Product.find(params.id)
		if (!product) {
		return response.status(404).json({data: 'Resource not found'})
		}
		product.product_type = productInfo.product_type
		product.product_name = productInfo.product_name
		product.quantity = productInfo.quantity
		await product.save()
		return response.status(200).json(product)
	}

	//delete data
	async delete ({params, response}) {
		const product = await Product.find(params.id)
		if (!product) {
		return response.status(404).json({data: 'Resource not found'})
		}
		await product.delete()
		return response.status(204).json(null)
	}

}

module.exports = ProductController
