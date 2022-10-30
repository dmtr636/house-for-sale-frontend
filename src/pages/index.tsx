import * as React from "react"
import {lazy, Suspense, useEffect, useState} from "react"
import type {HeadFC} from "gatsby"
import {Header} from "../components/Header/Header";
import {Layout} from "../components/Layout/Layout";
import {Main} from "../components/Main/Main";
import "../styles/globals.scss"
import {Form} from "../components/Form/Form";
import {Loading} from "../components/Modal/Loading";

import "@fontsource/inter-tight/300.css"
import "@fontsource/inter-tight/400.css"
import "@fontsource/inter-tight/500.css"
import "@fontsource/inter-tight/600.css"
import "@fontsource/inter-tight/700.css"
import "@fontsource/inter-tight/800.css"
import {HeaderMobile} from "../components/Header/HeaderMobile";
import {LinksMobile} from "../components/LinksMobile/LinksMobile";
import {AboutHouse} from "../components/AboutHouse/AboutHouse";
import {Render} from "../components/Render/Render";
import {HouseLayout} from "../components/HouseLayout/HouseLayout";
import {Characteristics} from "../components/Characteristics/Characteristics";

const PrivacyPolicy = lazy(() => import("../components/PrivacyPolicy/PrivacyPolicy"))

const IndexPage = () => {
	const [showForm, setShowForm] = useState(false)
	const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)

	useEffect(() => {
		if (showForm || showPrivacyPolicy) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
	}, [showForm, showPrivacyPolicy])

	return (
		<>
			<Layout>
				<Header showForm={() => setShowForm(true)}/>
				<HeaderMobile/>
				<Main/>
				<LinksMobile/>
				<AboutHouse/>
				<Render/>
				<HouseLayout/>
				<Characteristics/>
				{/*<Communications/>*/}
				{/*<AdditionalWork/>*/}
				{/*<HouseNow/>*/}
				{/*<Location/>*/}
				{/*<Footer showPrivacyPolicy={() => setShowPrivacyPolicy(true)}/>*/}
				{/*<FloatingButtons/>*/}
			</Layout>
			{showForm &&
                <Form
                    onClose={() => setShowForm(false)}
                    showPrivacyPolicy={() => setShowPrivacyPolicy(true)}
                />
			}
			{showPrivacyPolicy &&
                <Suspense fallback={<Loading/>}>
                    <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)}/>
                </Suspense>
			}
		</>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Продаётся дом</title>
