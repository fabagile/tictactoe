import Link from '../../utils/Link'

const Footer = ({ bgColor }: { bgColor: String }) => {
  const ghroute = 'https://github.com/fabagile'
  const links = [
    {
      content: 'tictactoe',
      tooltip: 'source.sourceCode',
      route: `${ghroute}/tictactoe`
    },
    {
      content: 'info',
      tooltip: 'source.helpPage',
      route: 'https://github.com/fabagile/tictactoe/blob/main/README.md'
    },
    { content: '@fabagile', tooltip: 'source.siteAuthor', route: { ghroute } }
  ]
  return (
    <footer className={`p-3 text-center bg-${bgColor}`}>
      {links.map(({ content, tooltip, route }, k) => (
        <>
          <Link key={k} tooltip={tooltip} route={route} blank>
            {content}
          </Link>
          {k < links.length - 1 && ' | '}
        </>
      ))}
      &copy; 2023
    </footer>
  )
}

export default Footer
