import React from 'react';
import EventModal from './EventModal';

function TimelineEvent({ event }) {
  const [isOpen, setisOpen] = React.useState(false);

  const toggleModal = () => {
    setisOpen(!isOpen);
  }

  return (
    <div className="timeevent bg-stone-900 shadow-lg rounded-md p-4 hover:bg-stone-800 transition-colors flex p-6" onClick={toggleModal}>
      <div className="timeevent-info text-left pr-6">
        <h2 className="text-3xl event--title text-stone-300">{event.title}</h2>
        <h3 className="text-lg time--container pt-3 pb-6 text-stone-500">
          <span className="time--span text-2xl">{event.timespan}&nbsp;</span>
          <span className="time--period">{event.period}</span>
        </h3>
        <p className="event--description01 text-2xl text-stone-300">{event.description01}&nbsp;</p>
        <p className="event--expand py-6 uppercase text-lg text-sky-300 hover:text-yellow-300">Continue Reading&nbsp;&nbsp;›</p>
      </div>
      <div className="timeevent-img">
        <img className="rounded-md" src={event.imgURL} alt={event.imgAltText} />
      </div>

      <EventModal isOpen={isOpen} onClose={toggleModal}>
        <h2 className="text-3xl event--title text-stone-600">{event.title}</h2>
        <h3 className="text-lg time--container pt-3 pb-6 text-stone-400">
          <span className="time--span text-2xl">{event.timespan}&nbsp;</span>
          <span className="time--period">{event.period}</span>
        </h3>        
        <p classname="">
          <span className="event--description-byline text-2xl text-stone-500">{event.description01}&nbsp;</span>
          <span className="event--description text-lg text-stone-500">{event.description02}</span>
        </p>
        <h3 className="event-h3 text-neutral-600 text-sm uppercase pt-6">References</h3>
        <a className="event--source text-sky-600 hover:text-yellow-600 pt-1" href={event.sourceURL}>{event.sourceTitle}&nbsp;&nbsp;›</a>
      </EventModal>
    </div>
  );
}

export default TimelineEvent;
