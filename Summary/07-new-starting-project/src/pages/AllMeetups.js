import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList.js';

export default function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  const fetchMeetings = async () => {
    try {
      setIsLoading(true);
      const url =
        'https://react-getting-started-9a50b-default-rtdb.europe-west1.firebasedatabase.app/meetups.json';

      const data = await fetch(url).then((res) => res.json());
      const meetups = Object.keys(data).reduce(
        (acc, id) => [...acc, { id, ...data[id] }],
        []
      );
      console.log(`meetups:`, meetups);
      setLoadedMeetups(meetups);
    } catch (err) {
      console.log('Error fetching meetups', err);
      setLoadedMeetups([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMeetings();
  }, []);

  if (isLoading) {
    return <section>Loading...</section>;
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <button onClick={fetchMeetings}>Refresh</button>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}
