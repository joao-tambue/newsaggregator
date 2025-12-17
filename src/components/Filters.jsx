import { useState } from "react";
import { Search } from "lucide-react";
import PropTypes from 'prop-types';

Filters.propTypes = {
    onChange: PropTypes.func.isRequired,
};


export default function Filters({ onChange, }) {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <>
            <div className="container mx-auto max-w-[1100px] mt-[74px] mb-[62px] flex justify-between items-center">
                <h1 className="title-mochiy font-extrabold text-[40px]">Articles </h1>
                <button className="flex justify-between rounded-md border-2 border-black/35 px-4 py-2" onClick={() => setShowFilters(!showFilters)}>
                    <img src="/Frame.svg" alt="" className="mr-2" /> {showFilters ? "Hide Filters" : "Show Filters"}
                </button>
            </div>

            {showFilters && (
                <div className="mx-auto max-w-[1100px] w-full flex flex-wrap gap-4 mb-[121px]">
                    <div className="w-full flex items-center gap-4">
                        <div className="relative w-full">
                            <input
                                placeholder="Search for articles here..."
                                className="border-2 border-black/35 rounded-md px-4 py-4 w-full transition-shadow focus:outline-none focus:ring-1 focus:ring-black"
                                onChange={e => onChange({ search: e.target.value })}
                            />
                            <Search className="absolute right-2 top-5" size={18} />
                        </div>

                        <select
                            className="border-2 border-black/35 rounded-md px-4 py-4"
                            onChange={e => onChange({ category: e.target.value })}
                        >
                            <option value="">Categories</option>
                            <option value="technology">Tecnology</option>
                            <option value="education">Education</option>
                            <option value="health">Health</option>
                            <option value="business">Business</option>
                        </select>

                        <select
                            className="border-2 border-black/35 rounded-md px-4 py-4"
                            onChange={e => onChange({ source: e.target.value })}
                        >
                            <option value="">Sources</option>
                            <option value="techcrunch">TechCrunch</option>
                            <option value="wired">Wired</option>
                            <option value="the-verge">The Verge</option>
                            <option value="business-insider">Business Insider</option>
                        </select>

                        <input
                            type="date"
                            className="border-2 border-black/35 rounded-md px-4 py-4"
                            onChange={e => onChange({ date: e.target.value })}
                        />
                    </div>
                </div>
            )}
        </>
        
    );
}