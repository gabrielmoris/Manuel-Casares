/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import secrets from "../secrets.json";

const YOUTUBE_PLAYLIST_ITEMS_API =
    "https://www.googleapis.com/youtube/v3/playlistItems";

const Media = () => {
    const key = secrets.YOUTUBE_API_KEY;
    const [youtubeListConcert, setYoutubeListConcert] = useState([]);
    const [youtubeListClasses, setYoutubeListClasses] = useState([]);

    useEffect(() => {
        fetch(
            `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PL_1PtPZ6qufyEK5c682JAbk8VAe8Cyz2P&maxResults=4&key=${key}`
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => setYoutubeListConcert(data.items))
            .catch((e) => {
                console.log("Error in youtube API", e);
            });
        fetch(
            `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PL_1PtPZ6qufy-Uiv5yeTnEKxCMAdDKQxs&maxResults=4&key=${key}`
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => setYoutubeListClasses(data.items))
            .catch((e) => {
                console.log("Error in youtube API", e);
            });
    }, []);

    return (
        <div className="media">
            <div className="concert-list">
                <h1>Concerts:</h1>
                {youtubeListConcert.map((video) => {
                    const { id, snippet = {} }: any = video;
                    const { title, thumbnails = {}, resourceId }: any = snippet;
                    const { medium = {} }: any = thumbnails;

                    return (
                        <div key={id} className="video-card">
                            <a
                                href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={medium.url} alt={title} />
                                <h3>{title}</h3>
                            </a>
                        </div>
                    );
                })}
            </div>
            <div className="classes-list">
                <h1>Classes:</h1>
                {youtubeListClasses.map((video) => {
                    const { id, snippet = {} }: any = video;
                    const { title, thumbnails = {}, resourceId }: any = snippet;
                    const { medium = {} }: any = thumbnails;

                    return (
                        <div key={id} className="video-card">
                            <a
                                href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={medium.url} alt={title} />
                                <h3>{title}</h3>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Media;
