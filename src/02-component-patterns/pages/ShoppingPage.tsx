import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'

}

export const Shoppingpage = () => {
    return (
      <div>
          <h1>Shoppingpage</h1>
          <hr /> 
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}>
            
            <ProductCard product={ product } >
              <ProductCard.Image img={product.img} />
              <ProductCard.Title title={ '' } />
              <ProductCard.Buttons />
            </ProductCard>

            <ProductCard product={ product } >
              <ProductImage />
              <ProductTitle title={ '' }  />
              <ProductButtons />
            </ProductCard>

          </div>
      </div>
    )
  }
  