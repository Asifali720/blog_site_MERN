import React from 'react'
import Layout from '../components/layout/Layout'
import Hero from '../components/hero/Hero'
import BannerPost from '../components/banner/BannerPost'
import TwoColumnPost from '../components/two-column-post/TwoColumnPost'
import PostSection from '../components/post-section/PostSection'

const Home = () => {
  return (
    <Layout>
     <Hero/>
     <BannerPost/>
     <TwoColumnPost/>
     <PostSection/>
    </Layout>
  )
}

export default Home