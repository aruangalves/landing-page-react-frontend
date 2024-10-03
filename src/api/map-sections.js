export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if(section.__component === 'section.section-two-columns'){
      return mapSectionTwoColumns(section);
    }
    else if(section.__component === 'section.section-content'){
      return mapSectionContent(section);
    }
    else if(section.__component === 'section.section-grid'){
      return mapSectionGrid(section);
    }

    return section;
  });
};

/**
{
  "__component": "section.section-two-columns",
  "title": "JANUARY BRINGS US FIREFOX 85",
  "description": "To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.\n\n",
  "image": {
    "data": {
      "id": 4,
      "attributes": {
        "name": "javascript.svg",
        "alternativeText": "javascript.svg",
        "caption": "javascript.svg",
        "url": "https://res.cloudinary.com/deosirvhi/image/upload/v1651926290/javascript_8c37407653.svg",
      }
    }
  },
  "metadata": {
    "section_id": "home",
    "background": true
  }
},
 */

/**
 *GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  imgSrc: P.string.isRequired,
  background: P.bool,
};
 */

export const mapSectionTwoColumns = (section = {}) => {

  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: imgSrc = ''},
    metadata: { background = false, section_id: sectionId = '' },
  } = section;

  return {
    component,
    title,
    text,
    imgSrc,
    background,
    sectionId,
  };
};

/*
  {
    "id": 3,
    "__component": "section.section-content",
    "title": "NEWS COVERAGE AND SOME SURPRISES",
    "content": "The release of **Apple Silicon-based** Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s _performance_. This post details some background information on the <u>experience</u> of porting Firefox to run natively on these CPUs.\n\nWe’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.\n\nWe’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.\n\n",
    "metadata": {
      "id": 7,
      "name": "intro",
      "section_id": "intro",
      "background": false
    }
  },
 */

export const mapSectionContent = (section = {}) => {

  const {
    __component: component = '',
    title = '',
    content: htmlcontent = '',
    metadata: { background = false, section_id: sectionId = ''},
  } = section;

  return {
    component,
    title,
    htmlcontent,
    background,
    sectionId,
  };
};

export const mapSectionGrid = (section = {}) => {
  return section;
};
