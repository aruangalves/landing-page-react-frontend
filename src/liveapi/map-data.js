import { mapMenu } from "../api/map-menu";
import { mapSections } from "../api/map-sections";

export const mapData = (pagesData = [{}]) => {

  return pagesData.map((data) => {

    const {
      footer_text: footerText = [],
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;

    return {
      footerText: mapFooter(footerText),
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });


};

export const mapFooter = (footerText = []) => {

  if(footerText.length > 0){
    const {
      children: {
        text = '',
      },
    } = footerText[0];

    return text;
  }

  return '';

}
