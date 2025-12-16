import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from 'lucide-react';
import PropTypes from 'prop-types';

ArticleCard.propTypes = {
    article: PropTypes.object.isRequired,
};


export default function ArticleCard({ article }) {
    const navigate = useNavigate();


    return (
        <div className='relative cursor-pointer'
            onClick={() => navigate("/details", { state: { article } })}
        >
            <img
                src={article.urlToImage || "/img-not.jpeg"}
                className="border-2 border-black h-[315px] w-full object-cover"
            />


            <div className="py-4 space-y-2">
                <h3 className="font-semibold">{article.title}</h3>

                <p className="">{article.description}</p>


                <div className="flex justify-between mt-8 text-sm border-t border-black font-semibold pt-2">
                    <span>By {article.source.name}</span>
                    <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                    {/* <button
                        onClick={() => navigate("/details", { state: { article } })}
                        className="text-blue-500"
                    >
                        more →
                    </button> */}
                </div>
            </div>
            <div className="absolute top-0 right-0 bg-white p-1.5 rounded-[2px] border mt-1 mr-1 border-black hover:scale-110 transition-transform cursor-pointer" onClick={() => window.open(article.url, '_blank')}>
                <ArrowUpRight className="text-black" size={14} />
            </div>
        </div>
    );
}