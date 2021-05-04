import React from "react";
import "./App.css";
import FileUploaderButton from "./utils/file-uploader-button";
import { useDispatch, useSelector } from "react-redux";
import { loadFiles, nordSelector } from "./features/nord/nordSliceReducer";

const LoadButton = (props) => {
    const dispatch = useDispatch();
    const { loading } = useSelector(nordSelector);

    const handleFiles = (files) => {
        if (files) {
            dispatch(loadFiles(files));
        }
    };

    return (
        <>
            <FileUploaderButton
                className=""
                variant={props.variant}
                title={loading ? "Loading..." : "Load"}
                disabled={loading}
                accept=".ns3f,.ns3y,.ns2p"
                multiple={true}
                handleFiles={handleFiles}
            />
        </>
    );
};

export default LoadButton;
