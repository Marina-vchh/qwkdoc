document.addEventListener('DOMContentLoaded', function () {
  const navigationArray = [
    {
      link: 'mainBookDemo',
      block: 'contactUs',
    },
    {
      link: 'bookDemo',
      block: 'contactUs',
    },
    {
      link: 'aboutLink',
      block: 'about',
    },
    {
      link: 'featuresLink',
      block: 'features',
    },
    {
      link: 'contactUsLink',
      block: 'contactUs',
    },
    {
      link: 'homeLink',
      block: 'home',
    },
  ]

  navigationArray.forEach((item) => {
    const linkElements = document.getElementsByClassName(item.link);
    const blockElement = document.getElementById(item.block);

    for (let i = 0; i < linkElements.length; i++) {
      linkElements[i].addEventListener('click', function () {

        blockElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      })
    }
  })
})