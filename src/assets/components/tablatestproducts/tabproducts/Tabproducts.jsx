import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import ProductItem from '../productsitem/ProductItem'
import ProductItemReverse from '../productsitemreverse/ProductItemReverse'

const Tabproducts = () => {
  return (
    <div className=' w-[91%] my-20  mx-auto'>
      <p className='title-products'>latest products</p>
      <p className='text-products'>Lorem ipsum dolor sit amet consectetur </p>

      <div className='parent-tab direction-r'>
        <Tabs>
          <div
            className='capitalize text-gray-600 -mt-10'>
    
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
            <ProductItem />
          </TabPanel>
          <TabPanel>
            <ProductItemReverse />
          </TabPanel>
          <TabPanel>
            <ProductItem />
          </TabPanel>
          <TabPanel>
            <ProductItemReverse />
          </TabPanel>
          <TabPanel>
            <ProductItem />
          </TabPanel>
          <TabPanel>
            <ProductItemReverse />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default Tabproducts
