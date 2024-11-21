for (const style of STYLES) {
  on(`clicked:${style}`, async (eventInfo) => {
    rollAction(style);
  });
  on(`clicked:${style}_wild`, async (eventInfo) => {
    rollAction(style, true);
  });
}

const rollAction = async (btn, wild = false) => {
  getAttrs([...STYLES, ...SKILLS, 'skill'], (attributes) => {
    const style = +attributes[btn] || 0;
    const skill = +attributes.skill || 0;

    console.debug(btn, wild, style, skill);
  });
};
