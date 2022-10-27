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

const IndexPage = () => {
    return (
        <Layout>
            <Header/>
            <Main/>
            <AboutHouse/>
            <Render/>
            <HouseLayout/>
            <Characteristics/>
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Продаётся дом</title>
