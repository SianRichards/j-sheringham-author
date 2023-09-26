import React, { useState } from "react";
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

const episodes = [
  episode1,
  episode2,
  episode3,
  episode4,
  episode5,
  episode6,
  episode7,
  episode8,
  episode9,
  episode10,
  episode11,
  episode12,
];

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

const audioFileMapper = (audioFileIds: Array<IProps>) => {
  return audioFileIds.map((audio) => {
    const { fileName, title } = audio;
    return <AudioFile fileName={fileName} title={title} />;
  });
};

const AngelsDreamsAndProphecies = () => {
  let arrayOfEpisodesAsObjects = episodes.map((episode, index) => {
    return { fileName: episode, title: `Episode ${index + 1}` };
  });
  let halfOfArratOfEpisodesAsObjects = arrayOfEpisodesAsObjects.length / 2;
  let firstHalf = arrayOfEpisodesAsObjects.slice(
    0,
    halfOfArratOfEpisodesAsObjects
  );
  let secondHalf = arrayOfEpisodesAsObjects.slice(
    halfOfArratOfEpisodesAsObjects,
    arrayOfEpisodesAsObjects.length
  );

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
          <div>{audioFileMapper(firstHalf)}</div>
          <div>{audioFileMapper(secondHalf)}</div>
        </div>
      </div>
    </article>
  );
};

export default AngelsDreamsAndProphecies;
