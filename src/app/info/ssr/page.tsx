import React from "react";

export type InfoProps = {
  name: string;
  sex: string;
  age: number;
};

// SSR 关键（Node 中间层执行）
const getData: <T>() => Promise<T> = async () => {
  const resp = await fetch("http://localhost:3000/api/info");
  const res = await resp.json();

  return res;
};

// 函数组件 async 组件
const SSR = async () => {
  const info = await getData<InfoProps>();
  return (
    <div>
      <h3>SSR</h3>
      <pre className="w-60 bg-orange-400">{JSON.stringify(info, null, 2)}</pre>
    </div>
  );
};

export default SSR;
