type BoxProps = {
  children?: React.ReactNode
  css?: string | any
}

const Box = ({ children, css }: BoxProps) => {
  return (
    <div className={css}>
      {children}
    </div>
  )
}

export default Box