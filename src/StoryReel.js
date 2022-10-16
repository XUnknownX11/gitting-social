import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg"
        title="Jasmine Velasquez"
        profileSrc="data:image/jpeg;base64,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"
      />
      <Story
        image="https://nationalzoo.si.edu/sites/default/files/styles/480x240_scale_and_crop/public/animals/cheetah-002.jpg?itok=iBiVKo1m&timestamp=1520537679"
        profileSrc="data:image/jpeg;base64,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"
        title="Rolando Vizcaino"
      />
      <Story
        image="https://i.natgeofe.com/k/c02b35d2-bfd7-4ed9-aad4-8e25627cd481/komodo-dragon-head-on_2x1.jpg"
        profileSrc="data:image/jpeg;base64,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"
        title="Angel Lozano"
      />
      <Story
        image="https://images.ctfassets.net/9l3tjzgyn9gr/photo-165355/a4fcf6dc9e5cae625db0d9da9d6066a8/165355-single-male-elephant-in-the-masai-mara.jpg?fm=jpg&fl=progressive&q=50&w=1200"
        profileSrc="data:image/jpeg;base64,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"
        title="Valentino Hensley"
      />
      <Story
        image="https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg"
        profileSrc="data:image/jpeg;base64,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"
        title="De'Angelo Martinez"
      />
    </div>
  );
}

export default StoryReel;
