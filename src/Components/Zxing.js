import "../Styles/scanner-style.css";
import { BrowserMultiFormatReader, BarcodeFormat } from "@zxing/browser";
import DecodeHintType from "@zxing/library/cjs/core/DecodeHintType";
import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import useWindowDimensions from "./useWindowDimensions";
import PopUp from "./PopUp";
import { useState } from "react";

const Zxing = () => {
	const video = useRef();
	const { height, width } = useWindowDimensions();

	useEffect(() => {
		const hints = new Map();
		//added code_39 format just in case
		const formats = [BarcodeFormat.QR_CODE, BarcodeFormat.CODE_39];
		hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);
		const codeReader = new BrowserMultiFormatReader(hints, {
			delayBetweenScanAttempts: 2000,
			delayBetweenScanSuccess: 3000,
		});
		codeReader.decodeFromVideoDevice(undefined, video.current, (result) => {
			//here we will query the code scanned
			if (typeof result !== "undefined") {
				console.log(result.text);
			}
		});
	}, []);

	return (
		<div className='App'>
			<Container className='d-flex flex-row justify-content-center w-75 p-3'>
				<video ref={video} width={width} muted></video>
			</Container>
		</div>
	);
};
export default Zxing;
