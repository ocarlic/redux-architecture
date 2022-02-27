import React from 'react'
import { useSelector } from 'react-redux'

const Catalog: React.FC = () => {
  const catalog = useSelector(state => state)

  console.log('catalog:', catalog)

  return <div>Catalog</div>
}

export default Catalog