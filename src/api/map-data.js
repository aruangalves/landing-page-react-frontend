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
      sections,
      menu,
    };
  });


};
