import React from 'react';
import TimelineEvent from './TimelineEvent';

function Timeline() {
  const events = [
    {
      id: 1,
      title: 'Gender Identity in Ancient Mesopotamia',
      description01: 'Gender diversity was a documented part of Mesopotamian society, found throughout its art and ceremonial practices.',
      description02: 'Gala priests, devoted to the goddess Inanna, often adopted feminine names and dialects while serving different roles within the temple. Similarly, King Ur-Nanshe was commonly depicted with an ambiguous gender presentation, often appearing to be feminine or castrated. Ancient texts and artworks often included stick figure representations with an assortment of sex and gender presentations.',
      timespan: '8000-2000',
      period: 'BCE',
      imgURL: 'event01.webp',
      imgAltText: 'Seated Statue of Ur-Nanshe',
      sourceURL: 'https://www.academuseducation.co.uk/post/ancient-mesopotamian-transgender-and-non-binary-identities',
      sourceTitle: 'Ancient Mesopotamian Transgender and Non-Binary Identities'
    },
    {
      id: 2,
      title: 'The Poetry of Sappho',
      description01: 'Sappho, an ancient Greek poet from the island of Lesbos, famously captured the nuances of female love and desire through her evocative lyrical poetry.',
      description02: ' Her work predominantly explored themes of love and personal feelings directed toward other women. Sappho’s poems provided a counter-narrative to the male-dominated literary culture of her time. Her poetry helps us better understand the complexities of gender and sexuality in historical contexts.',
      timespan: '630-570',
      period: 'BCE',
      imgURL: 'event02.jpg',
      imgAltText: 'Portrait of a young woman from Pompeii ("Sappho")',
      sourceURL: 'https://doi.org/10.2307/284285',
      sourceTitle: 'Apostrophe and Women\'s Erotics in the Poetry of Sappho'
    },
    {
      id: 3,
      title: 'The Sacred Band of Thebes',
      description01: "The Sacred Band of Thebes was an elite military unit in ancient Greece, composed of 300 men—150 couples of lovers.",
      description02: "Well-known for their cohesion on the battlefield, the unit was based on the idea that lovers fighting side by side would exhibit unmatched bravery and loyalty. Inspired by Platonic thoughts on the power of eros (desire), Thebes implemented this strategy to strengthen their military. The Band was known for their significant role in Theban victories against Spartan forces.",
      timespan: "385-338",
      period: 'BCE',
      imgURL: 'event03.jpg',
      imgAltText: 'Band of Thebes. Composite constructed sculpture of historical figure(s) reputed to have had a same sex relationships. Made of various materials & found objects with thin veneer film of bronze patina-ted paint giving appearance of solid bronze. A Metaphor of the appearance of solidity of LGBT rights & equality in law in the UK. Created by artist Malcolm Lidbury for 2016 LGBT History & Art Project Cornwall UK.',
      sourceURL: 'https://www.youtube.com/watch?v=Uj93lkBHVVs&t=1s',
      sourceTitle: 'The Sacred Band of Thebes in Ancient Greece was... Queer? | The Book of Queer | discovery+'
    },
    {
      id: 4,
      title: 'The Harlem Renaissance',
      description01: "The Harlem Renaissance was a cultural and literary movement centered in Harlem during the early 1920s to mid-1930s, known for its profound Black and queer roots.",
      description02: "This era marked a significant point in African American culture with contributions from Black queer artists and intellectuals like Countee Cullen, Alain Locke, and Bessie Smith, who, despite societal pressures, subtly infused their works with themes reflective of their identities. Black LGBTQ art flourished in this space—the movement contributed to American acceptance of queer identities.",
      timespan: "1920-1935",
      period: "CE",
      imgURL: 'event04.jpg',
      imgAltText: 'A collage of seven prominent Black queer figures from the Harlem Renaissance era',
      sourceURL: 'https://nmaahc.si.edu/explore/stories/harlem-renaissance-black-queer-history',
      sourceTitle: 'The Harlem Renaissance in Black Queer History'
    },
    // {
    //   id: 5,
    //   title: '',
    //   description01: '',
    //   description02: '',
    //   timespan: '',
    //   period: '',
    //   imgURL: '',
    //   imgAltText: '',
    //   sourceURL: '',
    //   sourceTitle: ''
    // },
    // {
    //   id: 6,
    //   title: '',
    //   description01: '',
    //   description02: '',
    //   timespan: '',
    //   period: '',
    //   imgURL: '',
    //   imgAltText: '',
    //   sourceURL: '',
    //   sourceTitle: ''
    // },
    // {
    //   id: 7,
    //   title: '',
    //   description01: '',
    //   description02: '',
    //   timespan: '',
    //   period: '',
    //   imgURL: '',
    //   imgAltText: '',
    //   sourceURL: '',
    //   sourceTitle: ''
    // },
    // {
    //   id: 8,
    //   title: '',
    //   description01: '',
    //   description02: '',
    //   timespan: '',
    //   period: '',
    //   imgURL: '',
    //   imgAltText: '',
    //   sourceURL: '',
    //   sourceTitle: ''
    // },
    // {
    //   id: 9,
    //   title: '',
    //   description01: '',
    //   description02: '',
    //   timespan: '',
    //   period: '',
    //   imgURL: '',
    //   imgAltText: '',
    //   sourceURL: '',
    //   sourceTitle: ''
    // },
    // {
    //   id: 10,
    //   title: '',
    //   description01: '',
    //   description02: '',
    //   timespan: '',
    //   period: '',
    //   imgURL: '',
    //   imgAltText: '',
    //   sourceURL: '',
    //   sourceTitle: ''
    // }
  ];

  return (
    <div className="space-y-10">
      {events.map(event => (
        <TimelineEvent key={event.id} event={event} />
      ))}
    </div>
  );
}

export default Timeline;
