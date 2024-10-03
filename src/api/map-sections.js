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

export const mapSectionTwoColumns = (section) => {

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

export const mapSectionContent = (section) => {
  return section;
};

export const mapSectionGrid = (section) => {
  return section;
};
