// "html2canvas": "^1.0.0-rc.7",
//     "jspdf": "^2.3.0",
//     "prop-types": "^15.7.2"
//
// <key>com.apple.security.temporary-exception.files.absolute-path.read-only</key><true/>
// <key>com.apple.security.temporary-exception.files.absolute-path.read-write</key><true/>
//
// <key>com.apple.security.network.client</key><true/>
// <key>com.apple.security.network.server</key><true/>
// <key>com.apple.security.files.user-selected.read-only</key><true/>
// <key>com.apple.security.files.user-selected.read-write</key><true/>

import { renderToStaticMarkup } from "react-dom/server";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";
import NordDevice from "../nord/nord-device";
import { handy, isSafari } from "../utils/handy";

export const buildExport = async (data, showAll) => {
    // svg are not rendered by html2canvas in Safari
    if (isSafari) throw Error("Safari not fully supported...., please use Chrome ;)");

    // workaround to disable the save button
    await handy(10);

    const doc = <NordDevice data={data} showAll={showAll} production={true} />;
    const output = document.createElement("div");
    const staticElement = await renderToStaticMarkup(doc);
    output.innerHTML = `<div>${staticElement}</div>`;
    document.body.append(output);

    const canvas = await html2canvas(output, {
        logging: false,
        useCORS: false,
        scale: 2,
        scrollX: 0,
        scrollY: -window.scrollY, // https://stackoverflow.com/questions/57936607/why-there-is-a-white-space-on-the-top-on-html2canvas
    });

    const imgData = canvas.toDataURL("image/jpeg");
    // noinspection JSPotentiallyInvalidConstructorUsage
    const pdf = new jsPDF({
        orientation: "portrait", // landscape or portrait
        unit: "mm",
        format: "a4",
    });
    const imgProps = pdf.getImageProperties(imgData);
    const margin = 0.1;
    const pdfWidth = pdf.internal.pageSize.width * (1 - margin);
    const pdfHeight = pdf.internal.pageSize.height * (1 - margin);
    const x = pdf.internal.pageSize.width * (margin / 2);
    const y = pdf.internal.pageSize.height * (margin / 2);
    const widthRatio = pdfWidth / imgProps.width;
    const heightRatio = pdfHeight / imgProps.height;
    const ratio = Math.min(widthRatio, heightRatio);
    const w = imgProps.width * ratio;
    const h = imgProps.height * ratio;

    pdf.addImage(imgData, "JPEG", x, y, w, h);
    pdf.save(data.name + ".pdf");
    document.body.removeChild(output);
    return "";
};
