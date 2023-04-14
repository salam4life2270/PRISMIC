import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicLink } from '@prismicio/react'



/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => (
  <section className='section'>
    <div className='container1'>
      <pre>{/*JSON.stringify(slice, null, 2)*/}</pre>
      <PrismicRichText field={slice.primary.title}/>
       <PrismicRichText field={slice.primary.description} />  
       <PrismicNextImage className='image' field={slice.primary.image} />
       
    </div>
    
    <div>
    {
  slice?.items?.map((item, i) =>
    <PrismicLink  field={item.cta_link}>My Creativity Link</PrismicLink>
   
  )
}
    </div>
    <div>
    {
  slice?.items?.map((item, i) =>
    <PrismicLink  field={item.ctaa_link}>My Energizers Link</PrismicLink>
   
  )
}
    </div>
    <div>
{
  slice?.items?.map((item, i) =>
    <PrismicLink  field={item.ctaaa_link}>My Team Link</PrismicLink>
   
  )
}
<div>

  {slice.items.map((item, i ) => (
    <PrismicLink field={item.cta_link} key={i}>
      {item.cta_text}
    </PrismicLink>
  ))}
</div>
    </div>

    
  </section>
)

export default HeroSlice