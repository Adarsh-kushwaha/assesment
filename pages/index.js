import Filter from "../components/Filter/Filter";
import Header from "../components/layouts/Header";
import ProductList from "../components/products/ProductList";
import { useState } from "react";
import classes from "./index.module.css"

function HomePage(props) {
  const [products, setProducts] = useState(props.products);
  const filterHandler = (selected) => {
    const filterData = props.products.filter((elem) => {
      return elem.product_name === selected || elem.address.city===selected || elem.address.state === selected;
    })

    // const filterData2 = filterData.filter((item)=>{
    //   return item.address.state === ""
    // })
    setProducts(filterData)

  }

  //name filter
  const nameinput = "Products"
  const nameFilter = props.products.map((item) => {
    return item.product_name;

  })


  //state filter
  const stateinput = "State"
  const stateFilter = props.products.map((item) => {
    return item.address.state;

  })

  //city filter
  const cityinput = "City"
  const cityFilter = props.products.map((item) => {
    return item.address.city;

  })


  return (
    <>
      <div className={classes.pageContainer}>
        <div className={classes.filter}>
          <div className={classes.heading}>
            <h2>Filter</h2>
            <div style={{height:"2px", width:"100%", backgroundColor:"whitesmoke", marginTop:"14px"}}/>
          </div>
          <Filter applyFilter={nameFilter} onFilter={filterHandler} input={nameinput} />
          <Filter applyFilter={stateFilter} onFilter={filterHandler} input={stateinput} />
          <Filter applyFilter={cityFilter} onFilter={filterHandler} input={cityinput}/>
        </div>
        <div>
          <Header />
          <ProductList products={products} />
          <ProductList products={products} />
        </div>
      </div>

    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://assessment-edvora.herokuapp.com/')
  const products = await res.json()
  return {
    props: {
      products
    }
  };
};



export default HomePage;