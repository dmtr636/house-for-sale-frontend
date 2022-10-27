import * as React from "react"
import type {HeadFC} from "gatsby"
import {Header} from "../components/Header/Header";
import {Layout} from "../components/Layout/Layout";
import {Main} from "../components/Main/Main";
import {AboutHouse} from "../components/AboutHouse/AboutHouse";
import {Render} from "../components/Render/Render";
import {HouseLayout} from "../components/HouseLayout/HouseLayout";
import "../styles/globals.scss"
import {Characteristics} from "../components/Characteristics/Characteristics";
import {Communications} from "../components/Communications/Communications";
import {AdditionalWork} from "../components/AdditionalWork/AdditionalWork";

const IndexPage = () => {
    return (
        <Layout>
            <Header/>
            <Main/>
            <AboutHouse/>
            <Render/>
            <HouseLayout/>
            <Characteristics/>
            <Communications/>
            <AdditionalWork/>
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Продаётся дом</title>
