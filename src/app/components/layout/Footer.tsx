import Link from '../../utils/Link'

const Footer = ({ bgColor }: {bgColor: String}) => {
  const ghroute = 'https://github.com/fabagile'
  return (
    <footer className={`p-2 text-center bg-${bgColor}`}>
      <Link tooltip='sourceCode' route={`${ghroute}/tictactoe`} blank>
        tictactoe
      </Link>
      <Link tooltip='siteAuthor' route={ghroute} blank>
        @fabagile
      </Link>
      &copy; 2023
    </footer>
  )
}

export default Footer
