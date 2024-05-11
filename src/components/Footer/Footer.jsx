const Footer = () => {
  const dateOfYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__info">Developed by Cristofer Ledesma</p>
      <p className="footer__info">{dateOfYear}</p>
    </footer>
  );
};

export default Footer;
