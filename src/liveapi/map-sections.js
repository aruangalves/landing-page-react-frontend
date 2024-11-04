export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if(section.__component === 'section.section-two-columns'){
      return mapSectionTwoColumns(section);
    }
    else if(section.__component === 'section.section-content'){
      return mapSectionContent(section);
    }
    else if(section.__component === 'section.section-grid'){
      const {text_grid = []} = section;

      if(text_grid.length > 0){
        return mapTextGrid(section);
      }
    }
    else if(section.__component === 'section-grid-gallery'){
      const {image_grid = []} = section;

      if(image_grid.length > 0){
        return mapImageGrid(section);
      }
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

/*
  {
    "id": 1,
    "__component": "section.section-grid",
    "title": "MY GRID",
    "description": "A brief description.\n\n",
    "text_grid": [
      {
        "id": 1,
        "title": "Test #1",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n"
      },
      {
        "id": 2,
        "title": "Test #2",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n"
      },
      {
        "id": 3,
        "title": "Test #3",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n"
      }
    ],
    "image_grid": [],
    "metadata": {
      "id": 2,
      "name": "grid-one",
      "section_id": "grid-one",
      "background": true
    }
  }
*/

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = 'section.section-grid-text',
    title = '',
    description = '',
    text_grid: grid = [],
    metadata : { background = true, section_id: sectionId = ''},
  } = section;

  return {
    component,
    title,
    description,
    grid: grid.map((item) => {
      const { title = '', description = '',} = item;

      return { title, description };
    }),
    background,
    sectionId,
  };
};

/*
  "image_grid": [
    {
      "id": "123",
      "image": {
        "id": "456",
        "name": "https://link.to.image.url",
        "alternativeText": "your alt text",
      },
    }
  ]
  Should map each grid element to: alternativeText => altText & name => imgSrc
*/

export const mapImageGrid = (section = {}) => {
  const {
    __component: component = 'section.section-grid-image',
    title = '',
    description = '',
    image_grid: grid = [],
    metadata : { background = false, section_id: sectionId = ''},
  } = section;

  return {
    component,
    title,
    description,
    grid: grid.map((item) => {
      const {image: { name: imgSrc = '', alternativeText: altText = ''} = ''} = item;

      return {imgSrc, altText};
    }),
    background,
    sectionId,
  };
};
