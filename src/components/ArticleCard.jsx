// import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

ArticleCard.propTypes = {
    article: PropTypes.object.isRequired,
};


export default function ArticleCard({ article }) {
// const navigate = useNavigate();


    return (
        <div>
            <img
                src={article.urlToImage || "/img-not-found.jpeg"}
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
        </div>
    );
}