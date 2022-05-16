//style
import "../scanner-style.css";
import { Container } from "react-bootstrap";
//libraries and functions
import { BrowserMultiFormatReader, BarcodeFormat } from "@zxing/browser";
import DecodeHintType from "@zxing/library/cjs/core/DecodeHintType";
import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "./useWindowDimensions";
//Components
import PopUp from "./PopUp";

const Zxing = () => {
	//used to show notification
	const [showToast, setShowToast] = useState(false);
	//student ID which is scanned
	const [id, setId] = useState("");
	const video = useRef();
	const { width } = useWindowDimensions();

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
				//here the ID is set to the scanned value
				setId(result.text);
				//Notification is triggered
				setShowToast(true);
			}
		});
	}, []);
	// For testing purposes
	// console.log(`this is my ID: ${id}`);

	return (
		<div>
			<PopUp
				show={showToast}
				onClose={() => setShowToast(false)}
				header='Student added'
			>
				{id}
			</PopUp>
			<Container className='d-flex justify-content-center w-100 p-3'>
				<video ref={video} width={width} muted></video>
			</Container>
		</div>
	);
};
export default Zxing;
