import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

const NewsPage = () => {
  return (
    <>
      <h1>Success is the sum of small efforts, repeated day-in and day-out.</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
};

export default NewsPage;
