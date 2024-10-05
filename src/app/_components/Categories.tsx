import React from 'react'

interface props {
    categories: {
        label: string,
        value: string
    }[],
    handleCategoryEvent: (category: string) => void
    selectedCategory?: string
}

function Categories({ categories, handleCategoryEvent, selectedCategory }: props) {
    return (
        <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
            {categories?.map((category, index) => <a
            key={category.value}
            onClick={() => handleCategoryEvent(category.value)}
            href="#"
            className={`block font-medium ${category.value === selectedCategory ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-300'} hover:underline`}
            >{category.label}</a>)}
        </div>
    )
}

export default Categories