import React from 'react'

const Container = (props) => {
    const { children } = props;
  return <div style={{maxWidth: "1169px", margin: "0 auto", padding: "0 15px"}}>{children}</div>
}

export default Container