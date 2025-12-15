import { useState } from "react";
import { motion } from "framer-motion";
import Filters from "../components/Filters";
import ArticleCard from "../components/ArticleCard";
import SkeletonArticle from "../components/skeleton/SkeletonArticle";
import Pagination from "../components/Pagination";
import { useArticles } from "../hooks/useArticles";


export default function Home() {
const { filteredArticles, setFilters, loading } = useArticles();
const [page, setPage] = useState(1);


const perPage = 6;
const start = (page - 1) * perPage;
const current = filteredArticles.slice(start, start + perPage);


return (
    <div className="text-black">

      <Filters onChange={data => setFilters(prev => ({ ...prev, ...data }))} />


      <motion.div className="mx-auto max-w-full w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {loading
        ? Array.from({ length: perPage }).map((_, i) => (
            <SkeletonArticle key={i} />
          ))
        : current.map((a, i) => (
            <ArticleCard key={i} article={a} />
          ))}
      </motion.div>


      <Pagination
      page={page}
      setPage={setPage}
      hasMore={start + perPage < filteredArticles.length}
      />
    </div>
  );
}