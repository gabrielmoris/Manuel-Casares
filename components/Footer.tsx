import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="footer">
            <div className="follow">
                <h4>Follow Me</h4>
                <div className="icons-followme">
                    <a
                        href="https://www.youtube.com/channel/UCZBKPQ3iQUrwrxChV8AXFAg"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            src="/youtube.svg"
                            alt="youtube-logo"
                            width={50}
                            height={50}
                        />
                    </a>
                    <a
                        href="https://www.twitch.tv/piano_subito"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            src="/twich.svg"
                            alt="twitch-logo"
                            width={50}
                            height={50}
                        />
                    </a>
                    <a
                        href="https://www.reddit.com/user/bottom_of_the_key"
                        target="_blank" rel="noreferrer"
                    >
                        <Image
                            src="/reddit.svg"
                            alt="reddit-logo"
                            width={50}
                            height={50}
                        />
                    </a>
                </div>
            </div>

            <div className="copyright">
                <a
                    href="https://www.gabrielcmoris.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by Gabrielcmoris. All rights reserved © 2022
                </a>
            </div>
        </div>
    );
};

export default Footer;
