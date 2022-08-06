import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/product";
import { useShoppingCart } from "../hooks/useShoppingCart";
import '../styles/custom-styles.css'

export const Shoppingpage = () => {
  
  const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
      <div>
          <h1>Shoppingpage</h1>
          <hr /> 
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}>
            
            {
              products.map( product => (
                <ProductCard 
                  key={ product.id }
                  product={ product }
                  className="bg-dark text-white"
                  onChange={ (evento) => onProductCountChange(evento) }
                  value={ shoppingCart[product.id]?.count || 0 }
                >
                  <ProductImage
                    className="custom-image"
                    style={{
                      boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                    }}
                  />
                  <ProductTitle title={ '' } className="text-bold" />
                  <ProductButtons className="custom-buttons" />
                </ProductCard>
              ))
            }
          </div>
          <div className="shopping-cart">
            {
              Object.entries(shoppingCart).map( ([key, product]) => (
                <ProductCard 
                key={key}
                  product={ product }
                  className="bg-dark text-white"
                  style={{ width: '100px' }}
                  onChange={ onProductCountChange }
                  value={ product.count }
                >
                  <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2) ' }} />
                  <ProductButtons 
                    className="custom-buttons"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  />
                </ProductCard>
              ))
            }
            
          </div>

      </div>
    )
  }
  