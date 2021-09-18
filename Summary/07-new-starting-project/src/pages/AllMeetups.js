const DUMMY_DATA = [
  {
    id: 'f814d35f-5005-4e86-9514-7839e4439dbd',
    address: '1036 Morissette Landing',
    title: 'Avon quantifying expedite',
    description:
      'Accusamus dolores consequatur. Perferendis atque sapiente ullam nisi dolor a officia pariatur.',
    image: 'http://placeimg.com/640/480/food',
  },
  {
    id: '96b9b877-9d8f-4c70-adfb-8746bb1d82f2',
    address: '03965 Nathaniel Estates',
    title: 'Future panel Buckinghamshire',
    description:
      'Quo asperiores saepe corrupti facilis sunt. Magni officiis corporis eum ut quo molestias voluptatem tempore id. Qui deserunt accusantium magnam. Praesentium voluptas commodi et voluptas tempore quibusdam dolores illum.',
    image: 'http://placeimg.com/640/480/food',
  },
];

export default function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul>
    </section>
  );
}
