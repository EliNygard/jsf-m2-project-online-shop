import React from 'react'

interface IProduct {
    title: string
    description: string
    price: string | number
}

export function TestProduct({ title, description, price }: IProduct) {
    return (
        <>
        <h2>A test product</h2>
        <div>
            {title} - {description} - {price}
        </div>
        </>
    )
}

