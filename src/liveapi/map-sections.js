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
    else if(section.__component === 'section.section-grid-gallery'){
      const {image_grid = []} = section;

      if(image_grid.length > 0){
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

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
    image: { data: { attributes: {url: imgSrc = ''}}},
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

export const mapSectionContent = (section = {}) => {

  const {
    __component: component = '',
    title = '',
    description: htmlcontent = '',
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

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = 'section.section-grid',
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

export const mapImageGrid = (section = {}) => {
  const {
    __component: component = 'section.section-grid-gallery',
    title = '',
    description = '',
    image_grid: grid = [],
    metadata : { background = false, section_id: sectionId = ''},
  } = section;

  return {
    component,
    title,
    description,
    background,
    sectionId,
    grid: grid.map((item) => {

      const { image: { data: { attributes: { alternativeText: altText = '', url: imgSrc = ''}}}} = item;

      return {imgSrc, altText};
    }),
  };
};

/**
  {
    "id": 1,
    "image": {
      "data": {
        "id": 2,
        "attributes": {
          "name": "2022-10-15 13.46.47 localhost 14045752fefe.jpg",
          "alternativeText": "homepage screenshot",
          "caption": null,
          "width": 1073,
          "height": 981,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_2022-10-15 13.46.47 localhost 14045752fefe.jpg",
              "hash": "thumbnail_2022_10_15_13_46_47_localhost_14045752fefe_7bfdc3a16a",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 171,
              "height": 156,
              "size": 6.87,
              "sizeInBytes": 6871,
              "url": "/uploads/thumbnail_2022_10_15_13_46_47_localhost_14045752fefe_7bfdc3a16a.jpg"
            },
            "small": {
              "name": "small_2022-10-15 13.46.47 localhost 14045752fefe.jpg",
              "hash": "small_2022_10_15_13_46_47_localhost_14045752fefe_7bfdc3a16a",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 457,
              "size": 38.07,
              "sizeInBytes": 38071,
              "url": "/uploads/small_2022_10_15_13_46_47_localhost_14045752fefe_7bfdc3a16a.jpg"
            },
            "large": {
              "name": "large_2022-10-15 13.46.47 localhost 14045752fefe.jpg",
              "hash": "large_2022_10_15_13_46_47_localhost_14045752fefe_7bfdc3a16a",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 1000,
              "height": 914,
              "size": 114.86,
              "sizeInBytes": 114863,
              "url": "/uploads/large_2022_10_15_13_46_47_localhost_14045752fefe_7bfdc3a16a.jpg"
            },
            "medium": {
              "name": "medium_2022-10-15 13.46.47 localhost 14045752fefe.jpg",
              "hash": "medium_2022_10_15_13_46_47_localhost_14045752fefe_7bfdc3a16a",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 750,
              "height": 686,
              "size": 74.04,
              "sizeInBytes": 74038,
              "url": "/uploads/medium_2022_10_15_13_46_47_localhost_14045752fefe_7bfdc3a16a.jpg"
            }
          },
          "hash": "2022_10_15_13_46_47_localhost_14045752fefe_7bfdc3a16a",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 128.67,
          "url": "/uploads/2022_10_15_13_46_47_localhost_14045752fefe_7bfdc3a16a.jpg",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2024-10-16T18:51:16.603Z",
          "updatedAt": "2024-11-05T19:16:23.678Z"
        }
      }
    }
  },
*/
