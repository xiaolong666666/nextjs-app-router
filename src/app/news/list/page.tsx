/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import fsp from "fs/promises";

type News = {
  id: string;
  from_id: string;
  post_id: string;
  title: string;
  summary: string;
  cover: string;
};

const queryNewsList: <T>() => Promise<T[]> = async () => {
  // const resp = await fetch("https://dev.dcloud.net.cn/api/news");
  // const res = await resp.json();

  // return res;

  const buffer = await fsp.readFile("./newsList.json");
  const json = buffer.toString();
  const res = JSON.parse(json);

  return res;
};

const NewsList = async () => {
  const newsList = await queryNewsList<News>();

  return (
    <div>
      <h3>热点新闻🔥</h3>
      <div>
        {newsList.map((news) => (
          <section key={news.id} className="flex gap-2 mt-2 mr-2 mb-2 ml-2">
            <img src={news.cover} alt="banner" className="w-24 h-20" />
            <div>
              <Link href={`/news/${news.post_id}`}>
                <header className="text-lg font-bold overflow-hidden text-ellipsis whitespace-nowrap">
                  {news.title}
                </header>
              </Link>
              <p className="text-xs text-gray-400">{news.summary}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
