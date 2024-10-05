import React from 'react'

interface props {
    categories: {
        label: string,
        value: string
    }[]
}

function Categories({ categories }: props) {
    return (
        <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
            {categories?.map(category => <a key={category.value} href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">{category.label}</a>)}
        </div>
    )
}

export default Categories