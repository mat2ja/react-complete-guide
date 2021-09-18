import MeetupList from '../components/meetups/MeetupList.js';
import DUMMY_DATA from '../dummy-data.js';

export default function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}
