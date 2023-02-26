import { GoodsItem } from './GoodsItem'

function GoodsList(props) {
  const { goods = [], addGoodToOrder } = props

  if (!goods.length) {
    return <h3>Nothing here</h3>
  }

  return (
    <div className='goods'>
      {goods.map((item) => (
        <GoodsItem
          key={item.id}
          {...item}
          addGoodToOrder={addGoodToOrder}
        />
      ))}
    </div>
  )
}

export { GoodsList }
