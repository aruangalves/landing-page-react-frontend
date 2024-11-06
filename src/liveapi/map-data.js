import { mapMenu } from "../liveapi/map-menu";
import { mapSections } from "../liveapi/map-sections";

export const mapData = (pageData = {}) => {

  const {
    data: {
      attributes: {
        footer_text: footerText = [],
        slug = '',
        title = '',
        sections = [],
        menu = {},
      }
    }
  } = pageData;

  return {
    footerText: mapFooter(footerText),
    slug,
    title,
    sections: mapSections(sections),
    menu: mapMenu(menu),
  };


};

export const mapFooter = (footerText = []) => {

  if(footerText.length > 0){
    const {
      children = [],
    } = footerText[0];

    if(children.length > 0){
      const{
        text = '',
      } = children[0];
      return text;
    }
  }

  return '';

}
