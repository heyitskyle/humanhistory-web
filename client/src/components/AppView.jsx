import React from 'react';
import Timeline from './Timeline';

function AppView() {
  return (
    <main className="bg-black p-8 pt-0 bg-black">
      <div className="intro-text container mx-auto pb-12 mb-12 border-b border-stone-800">
        <p className="pt-2 text-xl">Let’s scroll through the past<br>
          </br>Discover the roots of LGBTQ+ history and the stories that shaped us.
        </p>  
      </div>
      <div className="container mx-auto">
        <Timeline />
      </div>
    </main>
  );
}

export default AppView;