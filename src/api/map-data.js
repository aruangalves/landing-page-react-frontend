import { mapMenu } from "./map-menu";
import { mapSections } from "./map-sections";

export const mapData = (pagesData = [{}]) => {

  return pagesData.map((data) => {

    const {
      footer_text: footerText = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;

    return {
      footerText,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });


};
