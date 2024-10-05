import React from 'react'
import ProductList from './_components/ProductList'
import Categories from './_components/Categories'

const categoriesProps = [
    { label: 'Jackets & Coats', value:  'jacketsAndCoats'},
    { label: 'Hoodies', value:  'hoodies'},
    { label: 'T-shirts & Vests', value:  'tshirtsAndVests'},
    { label: 'Shirts', value:  'shirts'},
    { label: 'Blazers & Suits', value:  'blazersAndSuits'},
    { label: 'Jeans', value:  'jeans'},
    { label: 'Trousers', value:  'trousers'},
    { label: 'Shorts', value:  'shorts'},
    { label: 'Underwear', value:  'underwear'},
]

const products = [
    {
      id: "1",
      name: "Printed T-shirt",
      price: "$12.55",
      imageUrl: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
      altText: "Printed T-shirt with colorful designs",
      description: "A classic t-shirt with a printed design.",
      category: "Apparel"
    },
    {
      id: "2",
      name: "Slub jersey T-shirt",
      price: "$18.70",
      imageUrl: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80",
      altText: "Slub jersey T-shirt with a soft texture",
      description: "A slub jersey t-shirt with a comfortable fit.",
      category: "Apparel"
    },
    {
      id: "3",
      name: "T-shirt with a motif",
      price: "$16.55",
      imageUrl: "https://images.unsplash.com/photo-1603320409990-02d834987237?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      altText: "Unique T-shirt featuring an artistic motif",
      description: "A unique t-shirt featuring an artistic design.",
      category: "Apparel"
    },
    {
      id: "4",
      name: "Art T-shirt",
      price: "$12.55",
      imageUrl: "https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      altText: "Artistic T-shirt with creative designs",
      description: "An artistic t-shirt with a creative design.",
      category: "Apparel"
    }
  ];

function MainPage() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-8 mx-auto">
                <div className="lg:flex lg:-mx-2">
                    <Categories categories={categoriesProps} />

                    <ProductList products={products} />
                </div>
            </div>
        </section>
    )
}

export default MainPage