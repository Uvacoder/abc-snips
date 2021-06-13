import cx from 'classnames'

const Card = ({ children, className, hover, ...props }) => {
  const classNames = cx('card', className, { hover })
  return (
    <>
      <div className={classNames} {...props}>
        {children}
      </div>
      <style jsx>{`
        .card {
          background: #fff;
          border: 2px solid rgba(12, 12, 13, 0.1);
          border-radius: 8px;
          transition: 0.2s all ease;
        }

        .card.hover:hover {
          border-color: #000;
          background: #000;
          color: #fff;
        }
      `}
      </style>
    </>
  )
}

export default Card
