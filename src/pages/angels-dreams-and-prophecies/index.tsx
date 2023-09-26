import React from "react";
import styles from "./angelsDreams.module.scss";
import episode1 from "../../static/audiofiles/ADP1.mp3";
import episode2 from "../../static/audiofiles/ADP2.mp3";
import episode3 from "../../static/audiofiles/ADP3.mp3";
import episode4 from "../../static/audiofiles/ADP4.mp3";
import episode5 from "../../static/audiofiles/ADP5.mp3";
import episode6 from "../../static/audiofiles/ADP6.mp3";
import episode7 from "../../static/audiofiles/ADP7.mp3";
import episode8 from "../../static/audiofiles/ADP8.mp3";
import episode9 from "../../static/audiofiles/ADP9.mp3";
import episode10 from "../../static/audiofiles/ADP10.mp3";
import episode11 from "../../static/audiofiles/ADP11.mp3";
import episode12 from "../../static/audiofiles/ADP12.mp3";

interface IProps {
  fileName: string;
  title: string;
}

const AudioFile = (props: IProps) => {
  const { fileName, title } = props;

  return (
    <div className={styles.audioFile}>
      {title}
      <audio controls>
        <source src={fileName} />
      </audio>
    </div>
  );
};

const audioFileIds1 = [
  { fileName: episode1, title: "Episode 1" },
  { fileName: episode2, title: "Episode 2" },
  { fileName: episode3, title: "Episode 3" },
  { fileName: episode4, title: "Episode 4" },
  { fileName: episode5, title: "Episode 5" },
  { fileName: episode6, title: "Episode 6" },
];
const audioFileIds2 = [
  { fileName: episode7, title: "Episode 7" },
  { fileName: episode8, title: "Episode 8" },
  { fileName: episode9, title: "Episode 9" },
  { fileName: episode10, title: "Episode 10" },
  { fileName: episode11, title: "Episode 11" },
  { fileName: episode12, title: "Episode 12" },
];

const AngelsDreamsAndProphecies = () => {
  return (
    <article className={styles.main}>
      <div className={styles.audio}>
        <h1>Angels, Dreams and Prophecies</h1>
        <p>
          <b>
            Character-driven recollections retell the nativity story - here are
            12 audible episodes based on the first two chapters of both Matthew
            and Luke’s gospels.
          </b>
        </p>
        <div className={styles.audioColumns}>
          <div>
            {audioFileIds1.map((audio) => {
              const { fileName, title } = audio;
              return <AudioFile fileName={fileName} title={title} />;
            })}
          </div>
          <div>
            {audioFileIds2.map((audio) => {
              const { fileName, title } = audio;
              return <AudioFile fileName={fileName} title={title} />;
            })}
          </div>
        </div>
      </div>
    </article>
  );
};

export default AngelsDreamsAndProphecies;
