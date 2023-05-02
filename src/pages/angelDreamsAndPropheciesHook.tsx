import React from "react";
import styles from "./angelsDreams.module.scss";

interface IProps {
  id: string;
  number: number;
}

const AudioFile = (props: IProps) => {
  const { id, number } = props;
  return (
    <div className={styles.audioFile}>
      Episode {number}
      <audio controls>
        <source src={`https://docs.google.com/uc?export=download&id=!${id}`} />
      </audio>
    </div>
  );
};

const audioFileIds1 = [
  { id: "1_gpVixVpnmy-jP862C3PMav9M0SpvL-r", number: 1 },
  { id: "1ov94OUN6ozhSFR4dexggNzHXwav0glB5", number: 2 },
  { id: "1TKMYt_8lsmqXoGeGSAYH5CuhqcvnZPAH", number: 3 },
  { id: "1WdbWklJf9BsiWGYL8M80nNwwMwLWm2m1", number: 4 },
  { id: "1eMQk4V3AS19WOpnACS0cSDOjNHiVv1Ko", number: 5 },
  { id: "11JyLLSoOnipzH8_5jL12DAcmUAo6Gv7yU", number: 6 },
];

const audioFileIds2 = [
  { id: "1kGeyrT3ud1obYlj7F1U_H_DAfOs5hnbN", number: 7 },
  { id: "1obsIoH-Zj74exIZbwbZVpnkpp8YOLvdm", number: 8 },
  { id: "1uDTZ4NHkO4Nk_FsLQ2qheUVOI-cMNM97", number: 9 },
  { id: "1SQASBdxmrUFicU6HcRG3qR1FoBwZ6JcX", number: 10 },
  { id: "1ZYhL8x2ZTOSxamLv-C0Uzz-YUU_w_Tfo", number: 11 },
  { id: "1NP4B0c2HEyzdOmurb36XnYej8CE2sNVM", number: 12 },
];

const AngelsDreamsAndPropheciesHook = () => {
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
            {audioFileIds1.map((idObject) => {
              const { id, number } = idObject;
              return <AudioFile id={id} number={number} />;
            })}
          </div>
          <div>
            {audioFileIds2.map((idObject) => {
              const { id, number } = idObject;
              return <AudioFile id={id} number={number} />;
            })}
          </div>
        </div>
      </div>
    </article>
  );
};

export default AngelsDreamsAndPropheciesHook;
