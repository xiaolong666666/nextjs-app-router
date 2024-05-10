"use client";

import React, { useEffect, useState } from "react";

type InfoProps = {
  name: string;
  sex: string;
  age: number;
};

const CSR = () => {
  const [info, setInfo] = useState<InfoProps>();

  useEffect(() => {
    (async () => {
      const resp = await fetch("http://localhost:3000/api/info");
      const res = await resp.json();
      setInfo(res);
    })();
  }, []);

  return (
    <div>
      <h3>CSR</h3>
      <pre>{JSON.stringify(info, null, 2)}</pre>
    </div>
  );
};

export default CSR;
