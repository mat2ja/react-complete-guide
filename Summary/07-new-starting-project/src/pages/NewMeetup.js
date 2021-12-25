import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm.js';

export default function NewMeetupPage() {
  const history = useHistory();
  const addMeetupHanlder = async (meetupData) => {
    const url =
      'https://react-getting-started-9a50b-default-rtdb.europe-west1.firebasedatabase.app';
    try {
      const res = await fetch(`${url}/meetups.json`, {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((data) => data.json());

      console.log('added meetup:', res);
      history.replace('/');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHanlder} />
    </section>
  );
}
