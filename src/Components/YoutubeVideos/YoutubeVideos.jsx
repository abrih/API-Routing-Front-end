import { useEffect, useState } from "react";

import styles from "./YoutubeVideos.module.css";

const Youtubevideos = () => {
  const [youtubevideo, setvideo] = useState([]);
  const [loading, setLoading] = useState(true);

  // ====>channel_id =   UCE_M8A5yxnLfW0KghEeajjw
  // =====> api_key = AIzaSyAD8BxVYPU7RiLWQ7ResI2Wj-xkUBKqJSw
  //  https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&order=date&key=AIzaSyAD8BxVYPU7RiLWQ7ResI2Wj-xkUBKqJSw'
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyAD8BxVYPU7RiLWQ7ResI2Wj-xkUBKqJSw"
    )
      .then((response) => response.json())
      .then((data) => {
        const youtubeVideodata = data.items;
        setvideo(youtubeVideodata);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.videosWraper}>
      {loading && <div className={styles.loader}></div>}

      {youtubevideo?.map((singlevideo) => {
        return (
          <div className={styles.applevideo} key={singlevideo.id.videoId}>
            <a
              href={`https://www.youtube.com/watch?v=${singlevideo.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.applevideo}
                src={singlevideo.snippet.thumbnails.high.url}
                alt={singlevideo.snippet.title}
              />
            </a>
            <p>{singlevideo.snippet.title}</p>
            <p>{singlevideo.snippet.description}</p>
        </div>
        );
      })}
    </div>
  );
};

export default Youtubevideos;
