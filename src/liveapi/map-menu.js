export const mapMenu = (menu = {}) => {

  const {
    logo: {
      title: text = 'logo',
      link = '#logo',
      logo: { data: { attributes: { url: imgSrc = '#' }}},
    },
    menu_links: links = [],
  } = menu;

  return {
    text,
    link,
    imgSrc,
    links: mapMenuLinks(links),
  };

};

export const mapMenuLinks = (links = []) => {
  return links.map((singleLink) => {

    const {
      title: children = '',
      url: link = '',
      open_in_new_tab: newTab = false,
    } = singleLink;

    return {children, link, newTab};
  });
};
