import { type FC } from 'react'

interface Props {
    category: string
    id: number
    sort: string
    filter?: string
    page: number
}

const Show: FC<Props> = ({ category, id, sort, filter, page }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container py-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Product Details</h1>
                    <div className="prose prose-slate max-w-none">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-lg">
                                <dt className="text-sm font-medium text-gray-500">Category</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{category}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-lg">
                                <dt className="text-sm font-medium text-gray-500">ID</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{id}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-lg">
                                <dt className="text-sm font-medium text-gray-500">Sort</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{sort}</dd>
                            </div>
                            {filter && (
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-lg">
                                    <dt className="text-sm font-medium text-gray-500">Filter</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{filter}</dd>
                                </div>
                            )}
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-lg">
                                <dt className="text-sm font-medium text-gray-500">Page</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{page}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Show 