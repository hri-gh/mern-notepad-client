import { ListChecks, Brush, Image } from 'lucide-react'

export const InitialNote = ({ onClick }) => {
    return (
        <div
            onClick={onClick}
            className="max-w-lg mx-auto mt-10 p-4 bg-gray-800 text-white rounded-lg shadow-md flex items-center justify-between cursor-pointer"
        >
            <span className="text-gray-400">Take a note...</span>
            <div className="flex space-x-4">
                <ListChecks className="cursor-pointer w-4 text-gray-400" />
                <Brush className="cursor-pointer w-4 text-gray-400" />
                <Image className="cursor-pointer w-4 text-gray-400" />
            </div>
        </div>
    );
};

