import { useState } from 'react';
import MeetupList from '../components/meetups/MeetupList.js';

export default function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  fetch(
    // 'https://react-getting-started-9a50b-default-rtdb.europe-west1.firebasedatabase.app/'
  )
    .then((res) => res.json)
    .then((data) => {
      console.log(data);
      // setIsLoading(false);
      setLoadedMeetups(data);
    });

  if (isLoading) {
    return <section>Loading...</section>;
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}
