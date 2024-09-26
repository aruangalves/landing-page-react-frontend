export const mapMenu = (menu = {}) => {
  /*const {
    logo_link = '',
    logo_text = '',
    logo = {
      data: {
        id: 3,
        attributes: {
          name: '',
          alternativeText: '',
          caption: '',
          url: '',
        },
      },
    },
    menu_links = [
      {
        id: 3,
        link_text: '',
        url: '',
        open_in_new_tab: false,
      },
    ],
  } = menu;*/

  const {
    logo_text: text = 'logo',
    logo_link: link = '#',
    logo: { data: { attributes: { url: imgSrc = '#' }}},
    links = [],
  } = menu;

  return {
    text,
    link,
    imgSrc,
    links: mapMenuLinks(links),
  };

  /**
   * LOGO
   * logoData: {
   *  text: 'logo',
   *  imgSrc: '',
   *  link: '#',
   * }
   * MENU LINKS:
   * links: [
   *  {
   *    children: "Link #1",
   *    link: "#link1",
   *    newTab: false,
   *  }
   * ]
   */
};

export const mapMenuLinks = (links = []) => {
  return links.map((singleLink) => {

    const {
      link_text: children = '',
      url: link = '',
      open_in_new_tab: newTab = false,
    } = singleLink;

    return {children, link, newTab};
  });
};
