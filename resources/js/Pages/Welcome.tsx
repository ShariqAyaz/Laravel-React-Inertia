import { type FC } from 'react'

const Welcome: FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900">Welcome</h1>
                <p className="mt-4 text-gray-600">Your Inertia + React + TypeScript app is ready!</p>
            </div>
        </div>
    )
}

export default Welcome 