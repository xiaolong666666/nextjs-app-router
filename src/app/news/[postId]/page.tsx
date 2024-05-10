import Link from "next/link";
import React from "react";

type Params = {
  postId: string;
};

type Query = <T>(postId: Params["postId"]) => Promise<T>;

type News = {
  id: string;
  title: string;
  author_name: string;
  published_at: string;
  content: string;
};

const queryNews: Query = async (postId) => {
  const resp = await fetch(`https://dev.dcloud.net.cn/api/news/36kr/${postId}`);
  const res = await resp.json();

  return res;
};

const NewsDetail = async ({ params }: { params: Params }) => {
  const { postId } = params;
  const news = await queryNews<News>(postId);

  return (
    <div className="p-2 text-sm">
      <h3>
        <Link href="/news/list">
          <div className="float-left mr-2">⬅️</div>
        </Link>
        新闻详情🔎
      </h3>
      <div>
        <header className="text-lg font-bold">{news.title}</header>
        <div className="flex justify-between text-gray-400">
          <div>{news.published_at}</div>
          <div>{news.author_name}</div>
        </div>
        <main dangerouslySetInnerHTML={{ __html: news.content }}></main>
      </div>
    </div>
  );
};

export default NewsDetail;
