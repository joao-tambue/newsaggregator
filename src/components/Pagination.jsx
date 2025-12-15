import { ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from 'prop-types';

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    hasMore: PropTypes.bool.isRequired,
};


export default function Pagination({ page, setPage, hasMore }) {
return (
<div className="flex justify-center gap-4 mt-6">
    <button onClick={() => setPage(p => Math.max(p - 1, 1))}>
        <ChevronLeft />
    </button>
        
    <span>
        {page}
    </span>
    
    <button onClick={() => hasMore && setPage(p => p + 1)}>
        <ChevronRight />
    </button>
</div>
);
}