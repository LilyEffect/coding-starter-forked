import React from "react";
import { Submission } from "../ExampleSubmissions";
import styles from "css/App.module.css";

interface VoteCardProps {
  submission: Submission;
  onUpvoteClick: (id: string) => void;
  onDownvoteClick: (id: string) => void;
}
/*
export type Submission = {
  id: string;
  name: string;
  userFullname: string;
  assets: {
    contentType: string;
    src: string;
  }[];
};
*/

const VoteCard: React.FC<VoteCardProps> = ({
  submission,
  onUpvoteClick,
  onDownvoteClick,
}) => (
  <div className={styles.container}>
    <div>{submission.name}</div>
    <div>{submission.userFullname}</div>
    <div>
      {submission.assets.map((asset) => (
        <img
          key={asset.src}
          style={{ width: "300px", height: "300px" }}
          src={asset.src}
        />
      ))}
    </div>
    <div>
      <hr />
    </div>

    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          onUpvoteClick(submission.id);
        }}
      >
        Upvote
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          onDownvoteClick(submission.id);
        }}
      >
        Downote
      </button>
    </div>
  </div>
);

export default VoteCard;
