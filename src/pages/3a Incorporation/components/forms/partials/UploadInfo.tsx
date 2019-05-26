import * as React from 'react';
const DEFAULT_TEXT = "Only .pdf/.jpg/.png, smaller than 1MB"
export const UploadInfo = (props: {text?: string | null }) => (
    <span className="small ml-auto">
    {
        !!props.text ?
        props.text : DEFAULT_TEXT
    }
    </span>
)
