const Footer = ({ themeLight }) => {
  return (
    <footer className={`text-center ${themeLight ? 'text-very-dark-grayish-blue-light-mode' : 'text-light-grayish-blue-dark-mode'}`}>
      <p>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        .
      </p>
      <p>
        Coded by Francine Huang.
      </p>
    </footer>
  )
}
export default Footer