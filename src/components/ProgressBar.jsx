import { useEffect, useState } from "react";
import React from "react";

function useReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    function updateScroll() {
      // 已经滚动的高度
      const currentScrollY = window.scrollY;
      // 可以滚动的高度
      let scrollHeight = document.body.scrollHeight - window.innerHeight;
      //滑到底currentScrollY / scrollHeight=1
      if (scrollHeight) {
        setProgress(
          Number(
            Number((currentScrollY / scrollHeight).toFixed(2)) * 100
          ).toFixed(0)
        );
      }
    }
    // 添加全局滚动事件的监听
    window.addEventListener("scroll", updateScroll);

    // 移除监听
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);
  return progress;
}
export default function ProgressBar() {
  //在第一次render後，加上事件監聽，之後滑動上下就會觸發useState
  const progress = useReadingProgress();
  return (
    <div
      // 預設全滿但透過style做反向，所以會看到空
      style={{
        transform: `translateX(${progress - 100}%)`,
      }}
      className="fixed bottom-0 left-0 h-1 w-full bg-indigo-600 backdrop-blur-3xl transition-transform duration-300 text-right  text-white text-sm"
    />
  );
}
