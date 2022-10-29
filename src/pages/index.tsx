import * as React from "react"
import {lazy, Suspense, useEffect, useState} from "react"
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
import {HouseNow} from "../components/HouseNow/HouseNow";
import {Location} from "../components/Location/Location";
import {Footer} from "../components/Footer/Footer";
import {FloatingButtons} from "../components/FloatingButtons/FloatingButtons";
import {Form} from "../components/Form/Form";
import {Loading} from "../components/Modal/Loading";

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
				<Main/>
				<AboutHouse/>
				<Render/>
				<HouseLayout/>
				<Characteristics/>
				<Communications/>
				<AdditionalWork/>
				<HouseNow/>
				<Location/>
				<Footer showPrivacyPolicy={() => setShowPrivacyPolicy(true)}/>
				<FloatingButtons/>
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
