import { useEffect, useState } from "react";
import EXAMPLE_SUBMISSIONS from "ExampleSubmissions";
import getLocalStorage from "utils/local-storage/getLocalStorage";
import setLocalStorage from "utils/local-storage/setLocalStorage";
import VoteCard from "./VoteCard";

interface User {
  id: number;
  upvoteSubmissions: string[];
  downvoteSubmissions: string[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const USER_ID = 0;
const USER_LOCAL_STORAGE_KEY = "users";

function VotePage(): JSX.Element {
  const usersFromLocalStorage = getLocalStorage<User[]>(USER_LOCAL_STORAGE_KEY);
  const users = usersFromLocalStorage ?? [];
  if (!users[USER_ID]) {
    users[USER_ID] = {
      id: USER_ID,
      downvoteSubmissions: [],
      upvoteSubmissions: [],
    };
  }

  const onUpvoteClick = (id: string) => {
    const user = users[USER_ID];
    user.upvoteSubmissions.push(id);
    setLocalStorage(USER_LOCAL_STORAGE_KEY, users);
  };

  const onDownvoteClick = (id: string) => {
    const user = users[USER_ID];
    user.downvoteSubmissions.push(id);
    setLocalStorage(USER_LOCAL_STORAGE_KEY, users);
  };

  if (users) {
    console.log(users);
  }

  const nextUnseenSubmission = EXAMPLE_SUBMISSIONS.find(
    (submission) =>
      !users[USER_ID]?.downvoteSubmissions?.includes(submission.id) &&
      !users[USER_ID]?.upvoteSubmissions?.includes(submission.id)
  );

  return nextUnseenSubmission ? (
    <VoteCard
      submission={nextUnseenSubmission}
      onUpvoteClick={onUpvoteClick}
      onDownvoteClick={onDownvoteClick}
    />
  ) : (
    <div>No more submissions to see through</div>
  );
}

export default VotePage;
