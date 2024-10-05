'use client'
import React, { useState } from 'react'
import ProductList from './_components/ProductList'
import Categories from './_components/Categories'

interface ProductData {
  id: string
  name: string
  price: string
  imageUrl: string
  altText: string
  description: string
  category: string
}[]

interface ClothingCategories {
  [category: string]: {
    label: string,
    data: ProductData[]
  }
}

const clothingCategories: ClothingCategories = {
  jacketsAndCoats: {
    label: "Jackets & Coats",
    data: [
      { id: "1", name: "Leather Jacket", price: "$150.00", imageUrl: "https://blobcdn.same.energy/a/b1/28/b1283ffecff52a4a1b162af4a21ae41c581d3322", altText: "Stylish leather jacket", description: "A high-quality leather jacket perfect for casual wear.", category: "jacketsAndCoats" },
      { id: "2", name: "Parka Coat", price: "$120.00", imageUrl: "https://blobcdn.same.energy/a/ae/7f/ae7fc18ab72da8186b189bcb7379b69aafd6b8dc", altText: "Warm parka coat", description: "A waterproof and insulated parka coat ideal for cold weather.", category: "jacketsAndCoats" },
      { id: "3", name: "Denim Jacket", price: "$80.00", imageUrl: "https://blobcdn.same.energy/a/31/fc/31fc50b9d21d5b567a03fd168e9c4d5af3a466cb", altText: "Classic denim jacket", description: "A timeless denim jacket suitable for everyday wear.", category: "jacketsAndCoats" },
      { id: "4", name: "Peacoat", price: "$100.00", imageUrl: "https://blobcdn.same.energy/a/88/5b/885ba23b596f94c2a7e6cefdba6eca300ac2f496", altText: "Formal peacoat", description: "A stylish and versatile peacoat perfect for formal occasions.", category: "jacketsAndCoats" }
    ]
  },
  hoodies: {
    label: "Hoodies",
    data: [
      { id: "5", name: "Crew Neck Hoodie", price: "$60.00", imageUrl: "https://blobcdn.same.energy/a/f6/98/f698be43cfdf516df52f61ad980c410bcab53d95", altText: "Comfortable crew neck hoodie", description: "A soft and cozy crew neck hoodie ideal for casual wear.", category: "hoodies" },
      { id: "6", name: "Zipped Hoodie", price: "$70.00", imageUrl: "https://blobcdn.same.energy/a/e9/ac/e9ac0a145cd243012ca6ecaa2ad109bf3989ba90", altText: "Practical zipped hoodie", description: "A versatile zipped hoodie suitable for both casual and athletic wear.", category: "hoodies" },
      { id: "7", name: "Long Sleeve Hoodie", price: "$65.00", imageUrl: "https://blobcdn.same.energy/a/50/44/504407698c09a5afa27ea6ad67952c354dbc3ed6", altText: "Versatile long sleeve hoodie", description: "A comfortable long sleeve hoodie perfect for layering.", category: "hoodies" },
      { id: "8", name: "Hoodie Sweatshirt", price: "$55.00", imageUrl: "https://blobcdn.same.energy/a/62/f7/62f72b1c8b69b99ea6f302c0b9552c586584a989", altText: "Soft hoodie sweatshirt", description: "A soft and absorbent hoodie sweatshirt ideal for everyday wear.", category: "hoodies" }
    ]
  },
  tshirtsAndVests: {
    label: "T-Shirts & Vests",
    data: [
      { id: "9", name: "Graphic T-Shirt", price: "$15.00", imageUrl: "https://blobcdn.same.energy/a/7a/99/7a99439e6dba14288f0b5b0b533ba8dfab9d757f", altText: "Colorful graphic t-shirt", description: "A vibrant graphic t-shirt featuring unique designs.", category: "tshirtsAndVests" },
      { id: "10", name: "Tank Top", price: "$12.00", imageUrl: "https://blobcdn.same.energy/a/ae/8e/ae8e6f01a98c992521fa5146d36ca76c09d4b3b9", altText: "Casual tank top", description: "A lightweight and breathable tank top perfect for warm weather.", category: "tshirtsAndVests" },
      { id: "11", name: "V-Neck Vest", price: "$25.00", imageUrl: "https://blobcdn.same.energy/a/6a/57/6a5733ad2e8ada2e858314e253e55758643c469f", altText: "Versatile v-neck vest", description: "A stylish and practical v-neck vest suitable for various occasions.", category: "tshirtsAndVests" },
      { id: "12", name: "Muscle Tank", price: "$18.00", imageUrl: "https://blobcdn.same.energy/a/f2/91/f291ab4cf90737b410637785b60adb4a94965d5f", altText: "Athletic muscle tank", description: "A form-fitting muscle tank top ideal for workout sessions.", category: "tshirtsAndVests" }
    ]
  },
  shirts: {
    label: "Shirts",
    data: [
      { id: "13", name: "Printed T-shirt", price: "$12.55", imageUrl: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80", altText: "Printed T-shirt with colorful designs", description: "A classic t-shirt with a printed design.", category: "shirts" },
      { id: "14", name: "Slub jersey T-shirt", price: "$18.70", imageUrl: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80", altText: "Slub jersey T-shirt with a soft texture", description: "A slub jersey t-shirt with a comfortable fit.", category: "shirts" },
      { id: "15", name: "T-shirt with a motif", price: "$16.55", imageUrl: "https://images.unsplash.com/photo-1603320409990-02d834987237?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", altText: "Unique T-shirt featuring an artistic motif", description: "A unique t-shirt featuring an artistic design.", category: "shirts" },
      { id: "16", name: "Art T-shirt", price: "$12.55", imageUrl: "https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", altText: "Artistic T-shirt with creative designs", description: "An artistic t-shirt with a creative design.", category: "shirts" }
    ]
  },
  blazersAndSuits: {
    label: "Blazers & Suits",
    data: [
      { id: "17", name: "Classic Suit Jacket", price: "$200.00", imageUrl: "https://blobcdn.same.energy/a/29/fb/29fb5f35095551a9052e5bc05960b5fd4ad21e5f", altText: "Formal suit jacket", description: "A high-quality suit jacket perfect for formal occasions.", category: "blazersAndSuits" },
      { id: "18", name: "Blazer with Pockets", price: "$180.00", imageUrl: "https://blobcdn.same.energy/a/73/24/7324ba5a94bee4253b850050b0bef1790098ca7a", altText: "Stylish blazer with pockets", description: "A versatile blazer with functional pockets suitable for both formal and casual wear.", category: "blazersAndSuits" },
      { id: "19", name: "Tailored Suit", price: "$250.00", imageUrl: "https://blobcdn.same.energy/a/fa/6a/fa6aeb0bec2f79b525de1b10fb5767caa3ef5747", altText: "Formal tailored suit", description: "A premium tailored suit perfect for black-tie events and important business meetings.", category: "blazersAndSuits" },
      { id: "20", name: "Leather Blazer", price: "$220.00", imageUrl: "https://blobcdn.same.energy/b/9f/f5/9ff5f85f764dca6ecfcaf91cd4fe12409939b333", altText: "Stylish leather blazer", description: "A luxurious leather blazer perfect for adding a touch of sophistication to any outfit.", category: "blazersAndSuits" }
    ]
  },
  jeans: {
    label: "Jeans",
    data: [
      { id: "21", name: "Slim Fit Jeans", price: "$80.00", imageUrl: "https://blobcdn.same.energy/b/60/2f/602f545151c8aea53619c2feb18e9302b0b876e4", altText: "Stylish slim fit jeans", description: "High-quality slim fit jeans perfect for casual wear.", category: "jeans" },
      { id: "22", name: "Straight Leg Jeans", price: "$75.00", imageUrl: "https://blobcdn.same.energy/a/5a/4a/5a4a10363bae447e76366aefd19b55b0785873d1", altText: "Classic straight leg jeans", description: "Timeless straight leg jeans suitable for everyday wear.", category: "jeans" },
      { id: "23", name: "Boyfriend Jeans", price: "$70.00", imageUrl: "https://example.com/jeans/boyfriend-jeans.jpg", altText: "Relaxed boyfriend jeans", description: "Comfortable boyfriend style jeans ideal for casual occasions.", category: "jeans" },
      { id: "24", name: "Distressed Denim", price: "$85.00", imageUrl: "https://example.com/jeans/distressed-denim.jpg", altText: "Edgy distressed denim", description: "Trendy distressed denim jeans perfect for adding edge to any outfit.", category: "jeans" }
    ]
  },
  trousers: {
    label: "Trousers",
    data: [
      { id: "25", name: "Chino Trousers", price: "$60.00", imageUrl: "https://example.com/trousers/chino-trousers.jpg", altText: "Formal chino trousers", description: "High-quality chino trousers suitable for formal events and business meetings.", category: "trousers" },
      { id: "26", name: "Wool Trousers", price: "$90.00", imageUrl: "https://example.com/trousers/wool-trousers.jpg", altText: "Warm wool trousers", description: "Warm and durable wool trousers perfect for cold weather.", category: "trousers" },
      { id: "27", name: "Stretch Trousers", price: "$65.00", imageUrl: "https://example.com/trousers/stretch-trousers.jpg", altText: "Flexible stretch trousers", description: "Comfortable stretch trousers ideal for active wear and travel.", category: "trousers" },
      { id: "28", name: "Cargo Trousers", price: "$70.00", imageUrl: "https://example.com/trousers/cargo-trousers.jpg", altText: "Practical cargo trousers", description: "Versatile cargo trousers with multiple pockets suitable for outdoor activities.", category: "trousers" }
    ]
  },
  shorts: {
    label: "Shorts",
    data: [
      { id: "29", name: "Shorts with Pockets", price: "$40.00", imageUrl: "https://example.com/shorts/shorts-with-pockets.jpg", altText: "Practical shorts with pockets", description: "Comfortable shorts with multiple pockets perfect for casual wear.", category: "shorts" },
      { id: "30", name: "Athletic Shorts", price: "$35.00", imageUrl: "https://example.com/shorts/athletic-shorts.jpg", altText: "Performance athletic shorts", description: "Lightweight athletic shorts ideal for sports and fitness activities.", category: "shorts" },
      { id: "31", name: "Board Shorts", price: "$45.00", imageUrl: "https://example.com/shorts/board-shorts.jpg", altText: "Water-friendly board shorts", description: "Durable board shorts perfect for water sports and beach activities.", category: "shorts" },
      { id: "32", name: "Shorts with Belt Loops", price: "$50.00", imageUrl: "https://example.com/shorts/shorts-with-belt-loops.jpg", altText: "Versatile shorts with belt loops", description: "Stylish shorts with belt loops suitable for various occasions.", category: "shorts" }
    ]
  },
  underwear: {
    label: "Underwear",
    data: [
      { id: "33", name: "Boxer Briefs", price: "$12.00", imageUrl: "https://example.com/underwear/boxer-briefs.jpg", altText: "Comfortable boxer briefs", description: "Soft and breathable boxer briefs perfect for everyday wear.", category: "underwear" },
      { id: "34", name: "Briefs", price: "$10.00", imageUrl: "https://example.com/underwear/briefs.jpg", altText: "Classic briefs", description: "Traditional briefs suitable for various body types.", category: "underwear" },
      { id: "35", name: "Trunks", price: "$11.00", imageUrl: "https://example.com/underwear/trunks.jpg", altText: "Modern trunks", description: "Contemporary trunks perfect for active wear and fashion-forward styles.", category: "underwear" },
      { id: "36", name: "Long John", price: "$14.00", imageUrl: "https://example.com/underwear/long-john.jpg", altText: "Cozy long john", description: "Warm and comfortable long johns ideal for colder climates.", category: "underwear" }
    ]
  }
}

function getAllProducts(clothingCategories: ClothingCategories) {
  let allProducts: ProductData[] = []
  const clothingCategoriesKeys = clothingCategories ? Object.keys(clothingCategories) : []
  for (const key of clothingCategoriesKeys) {
    if (clothingCategories[key]?.data) {
      allProducts = [...allProducts, ...clothingCategories[key].data]
    }
  }
  return allProducts
}

const categories = clothingCategories && Object.keys(clothingCategories).map(categoryName => ({ value: categoryName, label: clothingCategories[categoryName as keyof typeof clothingCategories].label }))
console.log('categories: ', categories)

function MainPage() {
  const [category, setCategory] = useState<string | undefined>()

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="lg:flex lg:-mx-2">
          <Categories categories={categories} handleCategoryEvent={(clickedCategory) => setCategory(clickedCategory)} selectedCategory={category} />

          <ProductList products={category ? clothingCategories[category as keyof typeof clothingCategories]?.data : getAllProducts(clothingCategories)} />
        </div>
      </div>
    </section>
  )
}

export default MainPage