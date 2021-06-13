import React from 'react'
import Link from 'next/link'
import Spacer from 'components/spacer'
import Card from 'components/card'
import Padding from 'components/padding'
import { links } from '../lib/links'

const Home = (props) => {
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
                <React.Fragment key={index}>
                  <li>
                    <Link href={linkItem.url}>
                      <a>
                        <Card hover>
                          <Padding all={2}>{linkItem.name}</Padding>
                        </Card>
                      </a>
                    </Link>
                  </li>
                  <Spacer y={2} />
                </React.Fragment>
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

export default Home
