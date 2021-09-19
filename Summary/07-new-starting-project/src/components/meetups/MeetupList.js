import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem.js';

export default function MeetupList({ meetups }) {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} meetup={meetup} />
      ))}
    </ul>
  );
}
