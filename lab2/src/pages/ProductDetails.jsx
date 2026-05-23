import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router'
import api from '../lib/axios'
import { Button } from '../components/ui/button'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    const fetchProduct = async () => {
      if (!id) return setLoading(false)
      try {
        const { data } = await api.get(`/products/${id}`)
        if (mounted) setProduct(data)
      } catch (e) {
        console.error('Failed to fetch product:', e)
      } finally {
        if (mounted) setLoading(false)
      }
    }
    fetchProduct()
    return () => { mounted = false }
  }, [id])

  if (loading) return <div className="p-4">Loading...</div>
  if (!product) return (
    <div className="p-4">
      <p>Product not found.</p>
      <p className="mt-2"><Link to="/products">Back to products</Link></p>
    </div>
  )

  return (
    <div className="p-4">
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div className="md:w-1/2">
          <img
            src={product.thumbnail || product.images?.[0]}
            alt={product.title}
            className="w-full rounded-lg object-cover shadow-md"
          />
          {product.images && product.images.length > 1 && (
            <div className="mt-3 grid grid-cols-4 gap-2">
              {product.images.slice(0,4).map((img, i) => (
                <img key={i} src={img} alt={`${product.title}-${i}`} className="h-16 w-full rounded object-cover" />
              ))}
            </div>
          )}
        </div>

        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
            <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${product.stock > 0 ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}>
              {product.stock > 0 ? `In Stock • ${product.stock}` : 'Out of Stock'}
            </span>
          </div>

          <p className="text-sm text-muted-foreground mt-4">{product.description}</p>

          <div className="mt-4 space-y-2 text-sm">
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Rating:</strong> {product.rating} ★</p>
            <p><strong>Discount:</strong> {product.discountPercentage}%</p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button className="bg-foreground text-background hover:bg-foreground/90">
              Buy Now
            </Button>
            <Button variant="outline" className="border-border bg-background text-foreground hover:bg-muted">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails