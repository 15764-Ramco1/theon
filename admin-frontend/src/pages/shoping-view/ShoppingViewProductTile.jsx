import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter } from '@/components/ui/card'
import { brandOptions, categoryOptions } from '@/config'
import React from 'react'

const ShoppingViewProductTile = ({product,handleGetProductDetails,handleAddToCart,isLoading}) => {
    return (
        <Card className="w-full max-w-[280px] mx-auto bg-white border border-[#e0e0e0] hover-lift cursor-pointer group" style={{ borderColor: '#e0e0e0' }}>
            <div onClick={() => handleGetProductDetails(product?._id)}>
                <div className="relative overflow-hidden rounded-t-lg">
                    <img
                        src={product?.image}
                        alt={product?.title}
                        className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {product?.totalStock <= 0 ? (
                        <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-700">Out Of Stock</Badge>
                    ) : (
                        <>
                            {product?.salePrice > 0 && (
                                <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-700 rounded-sm">Sale</Badge>
                            )}
                            {product?.totalStock <= 10 && (
                                <Badge className="absolute top-2 left-2 bg-orange-600 hover:bg-orange-700 rounded-sm">
                                    Only {product?.totalStock} left
                                </Badge>
                            )}
                        </>
                    )}
                </div>
                <CardContent className="p-4">
                    <h2 className="text-lg font-bold mb-2 text-black line-clamp-2">{product?.title}</h2>
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm" style={{ color: '#666666' }}>
                            {categoryOptions[product?.category]}
                        </span>
                        <span className="text-sm" style={{ color: '#666666' }}>
                            {brandOptions[product?.brand]}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className={`${product?.salePrice > 0 ? 'line-through text-sm' : ''} text-base text-black font-semibold`}>
                            ₹ {product?.price}
                        </span>
                        {product?.salePrice > 0 && (
                            <span className="text-lg font-semibold text-red-600">
                                ₹ {product?.salePrice}
                            </span>
                        )}
                    </div>
                </CardContent>
            </div>
            {product?.totalStock > 0 ? (
                <CardFooter className="pt-0">
                    <Button
                        disabled={isLoading}
                        onClick={() => handleAddToCart(product._id, product?.totalStock)}
                        className="w-full text-sm py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-300"
                    >
                        {isLoading ? 'Adding.. to Cart' : 'Add to Cart'}
                    </Button>
                </CardFooter>
            ) : (
                <CardFooter className="pt-0">
                    <Button disabled className="w-full text-sm py-3 bg-gray-200 text-gray-500 cursor-not-allowed">
                        Out Of Stock
                    </Button>
                </CardFooter>
            )}
        </Card>

    )
}

export default ShoppingViewProductTile
