import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductItem from '../productsitem/ProductItem';
import './tabproducts.css'

const Tabproducts = () => {
  return (
    <div className='parent-tap-products'>

     <p className='title-products'>latest products</p>
     <p className='text-products'>Lorem ipsum dolor sit amet consectetur </p>

     <div className='parent-tab direction'>

     <Tabs>
          <div className='tablist'>
    <TabList>
      <Tab>They</Tab>
      <Tab>are</Tab>
      <Tab>category</Tab>
      <Tab>in</Tab>
      <Tab>here</Tab>
      <Tab>reverse</Tab>
    </TabList>
    </div>

    <TabPanel>
     <ProductItem/>
    </TabPanel>
    <TabPanel>
    <ProductItem/>
    </TabPanel>
    <TabPanel>
    <ProductItem/>
    </TabPanel>
    <TabPanel>
    <ProductItem/>
    </TabPanel>
    <TabPanel>
    <ProductItem/>
    </TabPanel>
    <TabPanel>
    <ProductItem/>
    </TabPanel>
  </Tabs>
     </div>
    </div>
  )
}

export default Tabproducts