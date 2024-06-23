import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>Success is the sum of small efforts, repeated day-in and day-out.</h1>
      <ul className="news-list">
        <li>
          <Link href="/news/first-news">First News Item</Link>
        </li>
        <li>
          <Link href="/news/second-news">Second News Items</Link>
        </li>
        <li>
          <Link href="/news/third-news">Third News Items</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
