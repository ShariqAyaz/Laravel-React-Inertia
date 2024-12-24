// File: resources/js/Pages/Search.tsx
import { type FC } from 'react'

interface Props {
    term: string | null
    type: string
    limit: number
    offset: number
}

const Search: FC<Props> = ({ term, type, limit, offset }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container py-8">
                <div className="bg-white rounded-sm shadow-sm p-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Search Results</h1>
                    
                            <div className="flex-shrink-0 w-4 flex items-center justify-center">
                                <svg className="w-0.5 h-0.5 text-primary-100" fill="none" stroke="currentColor" viewBox="20 20 -10 -10" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                
                                    <h3 className="text-sm font-medium text-primary-100">Search Parameters</h3>
                                    <div className="mt-0.5 text-xs text-primary-700">
                                        <p>Term: {term || 'None'}</p>
                                        <p>Type: {type}</p>
                                        <p>Limit: {limit}</p>
                                        <p>Offset: {offset}</p>
                                    </div>
                                    
                            </div>
                            
                </div>
            </div>
        </div>
    )
}

export default Search 