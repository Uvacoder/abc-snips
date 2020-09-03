import Link from 'next/link'
import Spacer from 'components/spacer'
import Card from 'components/card'
import Padding from 'components/padding'

const links = [
  {
    name: 'Button',
    url: 'button'
  },
  {
    name: 'Input',
    url: 'input'
  },
  {
    name: 'Card',
    url: 'card'
  },
  {
    name: 'Padding',
    url: 'padding'
  },
  {
    name: 'Spacer',
    url: 'spacer'
  },
  {
    name: 'Standard | Formatter | Github Action',
    url: 'formatter-github-action'
  },
  {
    name: 'Release | Packager | Github Action',
    url: 'packager-and-releaser'
  }
]

export default (props) => {
  return (
    <>
      <r-grid columns='3'>
        <r-cell />
        <r-cell>
          <h1 align='center'>Snips</h1>
          <p align='center'>
            Code Snippets
            <br />
            <br />
            <Link href='/about'>
              <a>About</a>
            </Link>
          </p>
          <ul className='snippet-links'>
            {links.map((linkItem, index) => {
              return (
                <>
                  <li key={index}>
                    <Link href={linkItem.url}>
                      <a>
                        <Card hover>
                          <Padding all={2}>{linkItem.name}</Padding>
                        </Card>
                      </a>
                    </Link>
                  </li>
                  <Spacer y={2} />
                </>
              )
            })}
          </ul>
        </r-cell>
        <r-cell />
      </r-grid>
      <style jsx>
        {`
          .snippet-links {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .snippet-links li {
            list-style-type: none;
            width: 100%;
          }

          .snippet-links a {
            width: 100%;
            text-decoration: none;
            font-size: 16px;
          }
        `}
      </style>
    </>
  )
}
